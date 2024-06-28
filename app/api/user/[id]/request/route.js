import dbConnect from "@/lib/mongo";
import { acceptFriendRequest } from "@/queries/users";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const PATCH = auth(async function PATCH(request, { params }) {


    // if (request.auth) {
    // const { name, notes } = await request.json()
    // const requesteeUserId = request.auth.user.id

    try {

        await dbConnect();
        // console.log("Database connected");
        // console.log(params.id)
        const accepteeUserId = params.id
        const acceptorUserId = request.auth.user.id
        // const commentId = new mongoose.Types.ObjectId()
        // const dateAdded = new Date()


        const user = await acceptFriendRequest(acceptorUserId, accepteeUserId);

        // console.log("Added comment:", commentText);
        console.log(user)

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