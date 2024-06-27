import User from "@/models/user-model";

export async function addCollectionToUser(userId, collectionId) {
    console.log(userId, collectionId)
    try {
        const user = await User.findOneAndUpdate(
            { _id: userId },
            { $push: { collections: collectionId } }
        );
        return user;
    } catch (error) {
        throw new Error(error)
    }
}