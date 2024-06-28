import { NextResponse } from "next/server";
import { getUserById, sendFriendRequest } from "@/queries/users";
import dbConnect from "@/lib/mongo";
import mongoose from "mongoose";
import { auth } from "@/auth";


export const GET = auth(async function (request, { params }) {
    try {
        await dbConnect()
        console.log('database connected')
        const id = params.id

        const user = await getUserById(id)
        return new NextResponse(JSON.stringify(user), {
            status: 200
        });

    } catch (error) {
        console.error("Error fetching user:", error);
        return new NextResponse(error.message, {
            status: 500
        });
    }
})

export const PATCH = auth(async function PATCH(request, { params }) {


    // if (request.auth) {
    // const { name, notes } = await request.json()
    // const requesteeUserId = request.auth.user.id

    // console.log(name, notes)
    try {
        const { receiver } = await request.json()
        console.log(receiver)
        await dbConnect();
        // console.log("Database connected");
        // console.log(params.id)
        // const requesterUserId = params.id
        // const requesteeUserId = request.auth.user.id

        const sender = {
            senderId: request.auth.user.id,
            senderName: request.auth.user.displayName
        }


        // const commentId = new mongoose.Types.ObjectId()
        // const dateAdded = new Date()
        // console.log(name, notes)


        // const user = await sendFriendRequest(requesterUserId, requesteeUserId);

        const user = await sendFriendRequest(sender, receiver);

        // console.log("Added comment:", commentText);
        // console.log(user)

        return new NextResponse(JSON.stringify(user), {
            status: 200
        });
    } catch (error) {
        console.error("Error sending request:", error);
        return new NextResponse(error.message, {
            status: 500
        });
    }
    // } else {
    //     return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    // }

});

