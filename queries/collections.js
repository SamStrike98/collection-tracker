import Collection from "@/models/collection-model";

export async function createCollection(collection) {
    try {
        await Collection.create(collection);
        return collection;
    } catch (error) {
        throw new Error(error)
    }
}

export async function getAllCollections() {
    try {
        const collections = await Collection.find({ isPublic: true });
        return collections;
    } catch (error) {
        throw new Error(error)
    }
}