'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const AddFriendButton = ({ profileId, currentUserId }) => {
    const router = useRouter()
    const handleButtonClick = async () => {
        // event.preventDefault();
        console.log('form submitted')
        // const id = data._id

        const response = await fetch(`/api/user/${profileId}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                requesteeUserId: currentUserId
            })
        });

        if (response.status === 200) {
            alert('friend request sent')
            router.refresh()
        } else {
            alert('friend request not sent')
        }
    }
    return (
        <button onClick={handleButtonClick}>Add as friend</button>
    )
}

export default AddFriendButton