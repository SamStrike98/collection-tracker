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
        senderId: session?.user.id,
        senderName: session?.user.displayName
    }

    const receiver = {
        receiverId: params.id,
        receiverName: await userData.displayName
    }



    console.log(userData)


    return (
        <div>


            <AllCollectionsByUser userId={profileId} />
            {userData &&
                <div>
                    <h2>Profile of {userData.displayName}</h2>
                    {currentUserId === profileId || userData?.friendRequestsReceived.find(item => item.senderId === sender.senderId)?.senderId === sender.senderId || userData?.friends.find(item => item.userId === sender.senderId)?.userId === sender.senderId ? '' : <AddFriendButton profileId={profileId} currentUserId={currentUserId} sender={sender} receiver={receiver} />}

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