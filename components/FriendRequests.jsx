import React from 'react'
import AcceptFriendBtn from './AcceptFriendBtn'
import Link from 'next/link'

const FriendRequests = ({ currentUserId, friendRequests, receiver, sender }) => {
    return (
        <div>
            <div className='font-bold'>Friend Requests</div>
            <ul>

                {friendRequests.length === 0 ? <div>No Friend Requests</div> : friendRequests.map(request => (
                    <li key={request.senderId} className='flex flex-row gap-5'>
                        <Link href={`/profile/${request.senderId}`}>{`See ${request.senderName}'s Profile`}</Link>
                        <AcceptFriendBtn currentUserId={currentUserId} receiver={receiver} senderId={request.senderId} senderName={request.senderName} />
                    </li>
                ))}
            </ul>



        </div>
    )
}

export default FriendRequests     