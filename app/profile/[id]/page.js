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

    const sender = {
        userId: session?.user.id,
        userName: session?.user.displayName
    }

    const receiver = {
        userId: params.id,
        userName: await userData.displayName
    }


    return (
        <div className='bg-[#f2f2f2]'>


            <AllCollectionsByUser userId={profileId} currentUserId={currentUserId} />
            {userData &&
                <div>
                    <h2>Profile of {userData.displayName}</h2>
                    {currentUserId === profileId || userData?.friendRequestsReceived.find(item => item.userId === sender.userId)?.userId === sender.userId || userData?.friends.find(item => item.userId === sender.userId)?.userId === sender.userId ? '' : <AddFriendButton profileId={profileId} currentUserId={currentUserId} sender={sender} receiver={receiver} />}

                    <h2 className='font-bold'>Recent Activity:</h2>
                    <ul>
                        {userData?.feed?.reverse().map(item => (
                            <li key={item.id}>{item.text}</li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}

export default page