'use client'

import React, { useState } from 'react'
import BlueIcon from './CardComponents/BlueIcon'
import GreenIcon from './CardComponents/GreenIcon'
import OrangeIcon from './CardComponents/OrangeIcon'
import PurpleIcon from './CardComponents/PurpleIcon'
import RedIcon from './CardComponents/RedIcon'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { set } from 'date-fns'



const CollectionCard = ({ colour, icon, collectionName, numberOfItems, collectionId, currentUserId, likes }) => {
    const router = useRouter()
    const [isLiked, setIsLinked] = useState(likes?.includes(currentUserId))

    const iconArr = {
        blue: <BlueIcon icon={icon} />,
        green: <GreenIcon icon={icon} />,
        orange: <OrangeIcon icon={icon} />,
        red: <RedIcon icon={icon} />,
        purple: <PurpleIcon icon={icon} />
    }

    const handleLike = async () => {

        if (isLiked) {
            const response = await fetch(`/api/collections/${collectionId}/unlike`, {
                method: 'PATCH',
                headers: {
                    "content-type": "application/json",
                },
            });

            if (response.status === 200) {
                // alert('unliked collection')
                setIsLinked(!isLiked)
                router.refresh()

            } else {
                alert('unlike NOT sent')
            }
        } else {
            const response = await fetch(`/api/collections/${collectionId}/like`, {
                method: 'PATCH',
                headers: {
                    "content-type": "application/json",
                },
            });

            if (response.status === 200) {
                // alert('liked collection')
                setIsLinked(!isLiked)
                router.refresh()

            } else {
                alert('like NOT sent')
            }
        }

    }


    return (
        <div className='bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-500 ease-in-out w-[250px] h-[250px] my-6 mx-1'>
            {iconArr[colour]}
            <div className='flex flex-col justify-around items-center h-full -translate-y-[50px]'>
                <Link href={`/collections/${collectionId}`} className='font-bold text-xl text-center border-b pb-5'>{collectionName}</Link>
                <div>
                    <p className='text-gray-500'>Items: {numberOfItems}</p>
                    <p className='text-gray-500'>% Completed</p>
                    <p className='text-gray-500'>Likes: {likes?.length}</p>
                </div>





                <div className='flex flex-row justify-evenly w-full'>
                    <div className='w-[30px] h-[30px] bg-black rounded-full'>
                        <Image src='' alt='User Image' width={30} height={30} />
                    </div>
                    <p onClick={handleLike} className='text-gray-500 cursor-pointer hover:scale-110'>{isLiked ? <AiFillLike size={28} color={`${currentUserId ? '#2ea5c9' : '#f2f2f2'}`} /> : <AiOutlineLike size={28} color={`${currentUserId ? '#2ea5c9' : '#f2f2f2'}`} />}</p>
                </div>
            </div>


        </div>
    )
}

export default CollectionCard