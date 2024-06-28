import User from "@/models/user-model";

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
            { $push: { collections: collectionId } }
        );
        return user;
    } catch (error) {
        throw new Error(error)
    }
}

export async function sendFriendRequest(requesterUserId, requesteeUserId) {
    console.log(requesterUserId, requesteeUserId)

    try {
        const requester = await User.findOneAndUpdate(
            { _id: requesterUserId },
            { $push: { friendRequestsReceived: requesteeUserId } }
        )

        const requestee = await User.findOneAndUpdate(
            { _id: requesteeUserId },
            { $push: { friendRequestsSent: requesterUserId } }
        )

        return (requester, requestee)
    } catch (error) {
        throw new Error(error)
    }
}

export async function acceptFriendRequest(acceptorUserId, accepteeUserId) {
    console.log(acceptorUserId, accepteeUserId)

    try {
        const acceptor = await User.findOneAndUpdate(
            { _id: acceptorUserId },
            { $pull: { friendRequestsReceived: accepteeUserId }, $push: { friends: accepteeUserId } }
        )

        const acceptee = await User.findOneAndUpdate(
            { _id: accepteeUserId },
            { $pull: { friendRequestsSent: acceptorUserId }, $push: { friends: acceptorUserId } }
        )

    } catch (error) {
        throw new Error(error)
    }
}

