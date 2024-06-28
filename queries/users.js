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
            { $push: { collections: collectionId }, $push: { feed: { text: `Added a new collection ${collectionId}`, id: new mongoose.Types.ObjectId() } } }
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
            { _id: receiver.receiverId },
            { $push: { friendRequestsReceived: sender } }
        )

        const receiverUser = await User.findOneAndUpdate(
            { _id: sender.senderId },
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
            { _id: receiver.receiverId },
            { $pull: { friendRequestsReceived: sender }, $push: { friends: { userId: sender.senderId, name: sender.senderName } }, $push: { feed: { text: `Is now friends with ${sender.senderName}`, id: new mongoose.Types.ObjectId() } } }
        )

        const senderUser = await User.findOneAndUpdate(
            { _id: sender.senderId },
            { $pull: { friendRequestsSent: receiver }, $push: { friends: { userId: receiver.receiverId, name: receiver.receiverName } }, $push: { feed: { text: `Is now friends with ${receiver.receiverName}`, id: new mongoose.Types.ObjectId() } } }
        )

    } catch (error) {
        throw new Error(error)
    }
}

