import React from 'react'
import { GrDeploy } from "react-icons/gr";
import { BiFootball } from "react-icons/bi";
import { AiFillCar, AiFillCustomerService, AiFillPushpin, AiFillSetting } from "react-icons/ai";
import { GiPostStamp } from "react-icons/gi";

const GreenIcon = ({ icon = { rocket } }) => {
    const iconArr = {
        rocket: <GrDeploy size={28} />,
        football: <BiFootball size={28} />,
        car: <AiFillCar size={28} />,
        stamp: <GiPostStamp size={28} />,
        headPhones: <AiFillCustomerService size={28} />,
        pin: <AiFillPushpin size={28} />,
        cog: <AiFillSetting size={28} />
    }

    return (
        <div className={`bg-green-400 bg-opacity-70 text-white flex flex-row items-center justify-center shadow-lg shadow-[#6bdb74] w-[50px] h-[50px] rounded-full mb-[10px] -translate-y-[35px] translate-x-[15px]`}>
            {iconArr[icon]}
        </div>
    )
}

export default GreenIcon