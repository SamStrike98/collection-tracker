import React from 'react'
import { GrDeploy } from "react-icons/gr";
import { BiFootball } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";

const BlueIcon = ({ icon }) => {
    const iconArr = {
        rocket: <GrDeploy size={28} />,
        football: <BiFootball size={28} />,
        car: <AiFillCar size={28} />

    }
    return (
        <div className={`bg-blue-400 bg-opacity-70 text-white flex flex-row items-center justify-center shadow-lg shadow-[#60a9f2] w-[50px] h-[50px] rounded-full mb-[10px] -translate-y-[35px] translate-x-[15px]`}>
            {iconArr[icon]}
        </div>
    )
}

export default BlueIcon