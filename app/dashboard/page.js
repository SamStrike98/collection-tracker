import { auth } from "@/auth"
import AllCollectionsByUser from "@/components/AllCollectionsByUser"
import Collections from "@/components/Collections"
import FriendRequests from "@/components/FriendRequests"

const dashboard = async () => {

    const session = await auth()
    const currentUserId = session?.user.id

    const res = await fetch(`${process.env.URL}/api/user/${session?.user.id}`, { cache: 'no-store' })

    const userData = await res.json()

    const { friendRequestsReceived } = userData


    return (
        <div>
            <h2>{`${session?.user.name}'s Dashboard`}</h2>
            {/* <Collections userId={session?.user.id} /> */}
            <AllCollectionsByUser userId={session?.user.id} />

            <FriendRequests currentUserId={currentUserId} friendRequests={friendRequestsReceived} />
        </div>
    )
}

export default dashboard