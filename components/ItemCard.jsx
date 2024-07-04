'use client'

import { FaRegTrashAlt } from "react-icons/fa";

const ItemCard = ({ name, notes, setArr, id }) => {
    return (
        <div className='bg-white flex flex-row justify-between items-center rounded-md shadow-xl w-full h-[80px] m-5 p-5'>
            <div className="flex flex-row gap-2 w-[85%]">
                <h3 className='font-bold text-lg'>{name}</h3>
                <p className="text-sm">{notes}</p>
            </div>

            <div className="cursor-pointer" onClick={() => setArr(arr => arr.filter(item => item.id !== id))}>
                <FaRegTrashAlt color={'red'} size={30} />
            </div>

        </div>
    )
}

export default ItemCard