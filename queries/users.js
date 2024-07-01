import User from "@/models/user-model";
import mongoose from "mongoose";

export async function getUserById(id) {
    try {
        const user = await User.findById(id);
        return user
    } catch (error) {
        throw new Error(error)
    }
}

export async function addCollectionToUser(userId, collectionId) {
    console.log(userId, collectionId)
    try {
        const user = await User.findOneAndUpdate(
            { _id: userId },
            { $push: { collections: collectionId, feed: { text: `Added a new collection ${collectionId}`, id: new mongoose.Types.ObjectId() } } }
        );
        return user;
    } catch (error) {
        throw new Error(error)
    }
}

export async function sendFriendRequest(sender, receiver) {
    // console.log(sender, receiver)

    try {
        const senderUser = await User.findOneAndUpdate(
            { _id: receiver.userId },
            { $push: { friendRequestsReceived: sender } }
        )

        const receiverUser = await User.findOneAndUpdate(
            { _id: sender.userId },
            { $push: { friendRequestsSent: receiver } }
        )

        return (sender, receiver)
    } catch (error) {
        throw new Error(error)
    }
}

export async function acceptFriendRequest(sender, receiver) {
    console.log(sender, receiver)

    try {
        const receiverUser = await User.findOneAndUpdate(
            { _id: receiver.userId },
            {
                $pull: { friendRequestsReceived: sender },
                $push: {
                    friends: sender,
                    feed: { text: `Is now friends with ${sender.userName}`, id: new mongoose.Types.ObjectId() }
                }
            },
        )

        const senderUser = await User.findOneAndUpdate(
            { _id: sender.userId },
            {
                $pull: { friendRequestsSent: receiver },
                $push: {
                    friends: receiver,
                    feed: { text: `Is now friends with ${receiver.userName}`, id: new mongoose.Types.ObjectId() }
                }
            },
        )

    } catch (error) {
        throw new Error(error)
    }
}

export async function userLikeCollection(collectionId, userId) {
    try {
        const user = await User.findOneAndUpdate(
            { _id: userId },
            { $push: { likedCollections: { collectionId: collectionId } } },

        )
    } catch (error) {

    }
}

export async function userUnlikeCollection(collectionId, userId) {
    try {
        const user = await User.findOneAndUpdate(
            { _id: userId },
            { $pull: { likedCollections: { collectionId: collectionId } } },

        )
    } catch (error) {

    }
}

