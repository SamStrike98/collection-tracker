import { NextResponse } from "next/server";
import { likeCollection } from "@/queries/collections";
import dbConnect from "@/lib/mongo";
import mongoose from "mongoose";
import { auth } from "@/auth";
import { userLikeCollection } from "@/queries/users";

export const PATCH = auth(async function PATCH(request, { params }) {


    // if (request.auth) {
    const userId = request.auth.user.id
    const collectionId = params.id

    try {

        await dbConnect();


        const collection = await likeCollection(collectionId, userId);
        const user = await userLikeCollection(collectionId, userId)
        // console.log("Added comment:", commentText);

        return new NextResponse(JSON.stringify(collection, user), {
            status: 200
        });
    } catch (error) {
        console.error("Error liking collection", error);
        return new NextResponse(error.message, {
            status: 500
        });
    }
    // } else {
    //     return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    // }

});