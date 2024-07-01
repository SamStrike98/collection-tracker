import React from 'react'
import Link from 'next/link'

const FriendsList = ({ friends }) => {
    return (
        <div>
            <h2>Friends</h2>
            <ul className='flex flex-col'>
                {friends.map(friend => (
                    <Link key={friend.userId} href={`${process.env.URL}/profile/${friend.userId}`}>{`${friend.userName}'s Profile`}</Link>
                ))}
            </ul>
        </div>
    )
}

export default FriendsList