import { NextResponse } from "next/server";
import { addItemToCollection, deleteCollectionById, getCollectionById } from "@/queries/collections";
import dbConnect from "@/lib/mongo";
import mongoose from "mongoose";
import { auth } from "@/auth";

export const PATCH = auth(async function PATCH(request, { params }) {


    // if (request.auth) {
    const { name, notes } = await request.json()

    console.log(name, notes)
    try {

        await dbConnect();
        // console.log("Database connected");
        // console.log(params.id)
        const id = params.id
        // const commentId = new mongoose.Types.ObjectId()
        const dateAdded = new Date()
        console.log(name, notes)



        const item = await addItemToCollection(id, { name: name, dateAdded: dateAdded, notes: notes });
        // console.log("Added comment:", commentText);
        console.log(item)

        return new NextResponse(JSON.stringify(item), {
            status: 200
        });
    } catch (error) {
        console.error("Error addding item:", error);
        return new NextResponse(error.message, {
            status: 500
        });
    }
    // } else {
    //     return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    // }

});

export const GET = async (request, { params }) => {
    try {
        await dbConnect();
        console.log("Database connected");
        console.log(params.id)
        const collectionId = params.id

        const collection = await getCollectionById(collectionId);
        console.log("Fetched collection:", collection);

        return new NextResponse(JSON.stringify(collection), {
            status: 200
        });
    } catch (error) {
        console.error("Error fetching post:", error);
        return new NextResponse(error.message, {
            status: 500
        });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await dbConnect()
        console.log('database connected');
        const collectionId = params.id
        const collection = await deleteCollectionById(collectionId);

        console.log('collection deleted', collection);
        return new NextResponse(JSON.stringify(collection), {
            status: 200
        })
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500
        })
    }
}