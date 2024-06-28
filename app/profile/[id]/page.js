import React from 'react'
import { auth } from '@/auth'
import AddFriendButton from '@/components/AddFriendButton'
import AllCollectionsByUser from '@/components/AllCollectionsByUser'


const page = async ({ params }) => {

    const session = await auth()

    const profileId = params.id
    const currentUserId = session?.user.id

    const res = await fetch(`${process.env.URL}/api/user/${profileId}`, { cache: 'no-store' })

    const userData = await res.json()

    console.log(userData)


    return (
        <div>


            <AllCollectionsByUser userId={profileId} />
            {userData &&
                <div>
                    <h2>Profile of {userData.displayName}</h2>
                    {(currentUserId === profileId || userData?.friendRequestsReceived.includes(currentUserId)) ? '' : <AddFriendButton profileId={profileId} currentUserId={currentUserId} />}
                </div>
            }
        </div>
    )
}

export default page