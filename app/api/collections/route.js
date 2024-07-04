import { NextResponse } from "next/server";
import { createCollection, getAllCollections } from "@/queries/collections";
import dbConnect from "@/lib/mongo";
import { auth } from "@/auth";
import { addCollectionToUser } from "@/queries/users";
import mongoose from "mongoose";

export const POST = auth(async function POST(request) {
    // if (request.auth?.user.role === 'admin') {
    const session = await auth()
    try {
        const { name, isPublic, items, userId, iconColour, icon, itemsNeed } = await request.json();

        // const userId = session?.user.id

        // Create a DB Connection
        await dbConnect();
        console.log("Database connected");

        const createdAt = new Date();
        const id = new mongoose.mongo.ObjectId()

        // Form a DB Payload
        const newCollection = {
            name,
            createdAt,
            userId,
            isPublic,
            items,
            itemsNeed,
            id,
            iconColour,
            icon
        };

        // Update the DB
        await createCollection(newCollection);
        console.log("Collection created:", newCollection);


        await addCollectionToUser(userId, id)

        return new NextResponse("Collection has been created", {
            status: 201
        });
    } catch (error) {
        console.error("Error creating collection:", error);
        return new NextResponse(error.message, {
            status: 500
        });
    }
    // } else {
    //     return NextResponse.json({ message: "Not authorized" }, { status: 401 })
    // }
});

export const GET = async (request) => {
    try {
        await dbConnect();
        console.log("Database connected");

        const collections = await getAllCollections();
        console.log("Fetched collections:", collections);

        return new NextResponse(JSON.stringify(collections), {
            status: 200
        });
    } catch (error) {
        console.error("Error fetching collections:", error);
        return new NextResponse(error.message, {
            status: 500
        });
    }
};