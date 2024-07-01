'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const AcceptFriendBtn = ({ currentUserId, senderId, senderName, receiver }) => {
    const router = useRouter()
    const handleButtonClick = async () => {
        // event.preventDefault();
        console.log('form submitted')

        // const id = data._id

        const sender = {
            userId: senderId,
            userName: senderName
        }

        const response = await fetch(`/api/user/${receiver.userId}/request`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                sender: sender
            })
        });

        if (response.status === 200) {
            alert('friend request accepted')
            router.refresh()
        } else {
            alert('friend request not accepted')
        }
    }
    return (
        <button onClick={handleButtonClick}>Accept Friend Request</button>
    )
}

export default AcceptFriendBtn