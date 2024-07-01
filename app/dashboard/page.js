import { auth } from "@/auth"
import AllCollectionsByUser from "@/components/AllCollectionsByUser"
import Collections from "@/components/Collections"
import FriendRequests from "@/components/FriendRequests"
import FriendsList from "@/components/FriendsList"

const dashboard = async () => {

    const session = await auth()
    const currentUserId = session?.user.id


    const res = await fetch(`${process.env.URL}/api/user/${session?.user.id}`, { cache: 'no-store' })

    const userData = await res.json()

    const { friendRequestsReceived, friends } = userData

    const receiver = {
        userId: session?.user.id,
        userName: session?.user.displayName
    }




    return (
        <div className="bg-[#f2f2f2]">
            <h2>{`${session?.user.name}'s Dashboard`}</h2>
            {/* <Collections userId={session?.user.id} /> */}
            <AllCollectionsByUser userId={currentUserId} currentUserId={currentUserId} />

            <FriendRequests currentUserId={currentUserId} friendRequests={friendRequestsReceived} receiver={receiver} />

            <FriendsList friends={friends} />
        </div>
    )
}

export default dashboard