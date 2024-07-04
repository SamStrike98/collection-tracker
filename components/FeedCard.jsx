import React from 'react'
import Link from 'next/link'

const FeedCard = ({ feedItem }) => {
    return (
        <div className="bg-white rounded-xl w-[500px] min-h-[80px] p-2 mt-3 shadow-md">
            <Link href={`/profile/${feedItem.id}`}>
                <div className='flex flex-row items-center gap-2'>
                    <div className='h-[50px] w-[50px] rounded-full bg-black'></div>
                    <h3>{feedItem.id}</h3>
                </div>
            </Link>

            <p className='ml-[52px] -mt-4'>{feedItem.text}</p>

        </div>

    )
}

export default FeedCard