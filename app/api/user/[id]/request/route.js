import dbConnect from "@/lib/mongo";
import { acceptFriendRequest } from "@/queries/users";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const PATCH = auth(async function PATCH(request, { params }) {


    // if (request.auth) {
    // const { name, notes } = await request.json()
    // const requesteeUserId = request.auth.user.id

    // console.log(name, notes)
    try {
        const { sender } = await request.json()
        console.log('this is the sender', sender)
        await dbConnect();
        // console.log("Database connected");
        // console.log(params.id)
        // const requesterUserId = params.id
        // const requesteeUserId = request.auth.user.id

        const receiver = {
            userId: request.auth.user.id,
            userName: request.auth.user.displayName
        }


        // const commentId = new mongoose.Types.ObjectId()
        // const dateAdded = new Date()
        // console.log(name, notes)


        // const user = await sendFriendRequest(requesterUserId, requesteeUserId);

        const user = await acceptFriendRequest(sender, receiver);

        // console.log("Added comment:", commentText);
        // console.log(user)

        return new NextResponse(JSON.stringify(sender, receiver), {
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