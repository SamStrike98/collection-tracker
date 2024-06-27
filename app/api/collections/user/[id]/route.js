import dbConnect from "@/lib/mongo";
import { getAllCollectionsByUser } from "@/queries/collections";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const userId = params.id

    try {
        await dbConnect();
        console.log("Database connected");

        console.log(userId)
        const collections = await getAllCollectionsByUser(userId);
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