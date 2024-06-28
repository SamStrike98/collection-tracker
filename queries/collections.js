import Collection from "@/models/collection-model";
import User from "@/models/user-model";

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

export async function getAllCollectionsByUser(userId) {
    try {
        const collections = await Collection.find({ userId: userId });
        return collections;
    } catch (error) {
        throw new Error(error)
    }
}

export async function addItemToCollection(collectionId, { name, dateAdded, notes }) {
    try {
        const item = await Collection.findOneAndUpdate(
            { _id: collectionId },
            { $push: { items: { name: name, dateAdded: dateAdded, notes: notes } } },
        )

        const user = await User.findOneAndUpdate(
            { _id: item.userId },
            { $push: { feed: { text: `Added ${name} to the collection ${collectionId}`, id: Object(32) } } },
        )

        return item
    } catch (error) {
        throw new Error(error)
    }
}

export async function getCollectionById(collectionId) {
    try {
        const collection = await Collection.findById(collectionId);
        return collection;
    } catch (error) {
        throw new Error(error)
    }
}