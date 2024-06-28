import React from 'react'
import AcceptFriendBtn from './AcceptFriendBtn'
import Link from 'next/link'

const FriendRequests = ({ currentUserId, friendRequests }) => {
    return (
        <div>
            <div>Friend Requests</div>
            <ul>
                {friendRequests.map(request => (
                    <li key={request} className='flex flex-row gap-5'>
                        <Link href={`/profile/${request}`}>See Profile</Link>
                        <AcceptFriendBtn currentUserId={currentUserId} profileId={request} />
                    </li>
                ))}
            </ul>



        </div>
    )
}

export default FriendRequests     