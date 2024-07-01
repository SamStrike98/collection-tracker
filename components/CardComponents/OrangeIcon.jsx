import React from 'react'
import { GrDeploy } from "react-icons/gr";
import { BiFootball } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";

const OrangeIcon = ({ icon = { rocket } }) => {
    const iconArr = {
        rocket: <GrDeploy size={28} />,
        football: <BiFootball size={28} />,
        car: <AiFillCar size={28} />

    }
    return (
        <div className={`bg-orange-400 bg-opacity-70 text-white flex flex-row items-center justify-center shadow-lg shadow-[#f3b063] w-[50px] h-[50px] rounded-full mb-[10px] -translate-y-[35px] translate-x-[15px]`}>
            {iconArr[icon]}
        </div>
    )
}

export default OrangeIcon