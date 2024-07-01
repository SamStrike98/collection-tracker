import React from 'react'
import AcceptFriendBtn from './AcceptFriendBtn'
import Link from 'next/link'

const FriendRequests = ({ currentUserId, friendRequests, receiver, sender }) => {
    return (
        <div>
            <div className='font-bold'>Friend Requests</div>
            <ul>

                {friendRequests.length === 0 ? <div>No Friend Requests</div> : friendRequests.map(request => (
                    <li key={request.userId} className='flex flex-row gap-5'>
                        <Link href={`/profile/${request.userId}`}>{`See ${request.userName}'s Profile`}</Link>
                        <AcceptFriendBtn currentUserId={currentUserId} receiver={receiver} senderId={request.userId} senderName={request.userName} />
                    </li>
                ))}
            </ul>



        </div>
    )
}

export default FriendRequests     