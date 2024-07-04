'use client'

import { useState } from "react";
import Link from "next/link";
import { useRouter, redirect } from 'next/navigation'

import { GrDeploy } from "react-icons/gr";
import { BiFootball } from "react-icons/bi";
import { AiFillCar, AiFillCustomerService, AiFillPushpin, AiFillSetting } from "react-icons/ai";
import { GiPostStamp } from "react-icons/gi";
import ItemCard from "./ItemCard";

const iconArr = {
    rocket: <GrDeploy size={28} color="white" />,
    football: <BiFootball size={28} color="white" />,
    car: <AiFillCar size={28} color="white" />,
    stamp: <GiPostStamp size={28} color="white" />,
    headPhones: <AiFillCustomerService size={28} color="white" />,
    pin: <AiFillPushpin size={28} color="white" />,
    cog: <AiFillSetting size={28} color="white" />
}

const CreateCollection = ({ userId }) => {
    const router = useRouter()
    // const { data, isLoading, error } = useFetch(`http://localhost:3000/api/posts/${id}`)

    const [itemsGot, setItemsGot] = useState([]);
    const [itemsNeed, setItemsNeed] = useState([]);

    const [itemsGotFormData, setItemsGotFormData] = useState({ name: '', notes: '' })
    const [itemsNeedFormData, setItemsNeedFormData] = useState({ name: '', notes: '' })

    const handleGotItemChange = (event) => {
        const { name, value } = event.target
        setItemsGotFormData((prevItemsGotFormData) => ({ ...prevItemsGotFormData, [name]: value, }));
    }

    const handleNeedItemChange = (event) => {
        const { name, value } = event.target
        setItemsNeedFormData((prevItemsNeedFormData) => ({ ...prevItemsNeedFormData, [name]: value }));
    }

    const handleAddGotItem = () => {
        setItemsGot(prevArr => [...prevArr, { ...itemsGotFormData, id: Date.now() }])
    }

    const handleAddNeedItem = () => {
        setItemsNeed(prevArr => [...prevArr, { ...itemsNeedFormData, id: Date.now() }])
    }

    const [formData, setFormData] = useState({ name: '', isPublic: '' });

    const [publicRadioValue, setPublicRadioValue] = useState(true)
    const [colourRadioValue, setColourRadioValue] = useState('green')
    const [iconRadioValue, setIconRadioValue] = useState('rocket')
    // console.log(formData.title)

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const handlePublicRadioChange = (event) => {
        setPublicRadioValue(event.target.value)
    }

    const handleColourRadioChange = (event) => {
        setColourRadioValue(event.target.value)
    }

    const handleIconRadioChange = (event) => {
        setIconRadioValue(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('form submitted')
        console.log(colourRadioValue)


        const response = await fetch(`/api/collections`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name,
                isPublic: publicRadioValue,
                iconColour: colourRadioValue,
                userId: userId,
                icon: iconRadioValue,
                items: itemsGot,
                itemsNeed: itemsNeed

            })
        });

        if (response.status === 201) {
            alert('Collection created')
            router.push('/dashboard')
            router.refresh()

        } else {
            alert('collection NOT Created')
        }
    }


    return (
        <div className="flex flex-col items-center py-5">

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center bg-white shadow-2xl rounded-lg p-5 w-[800px]">

                <div className="flex flex-row gap-12">
                    <div className="flex flex-col text-lg font-bold">
                        <label htmlFor="name">Collection Name</label>
                        <input type="text" id="name" name="name" value={formData.title} onChange={handleChange} placeholder="Collection Name" className="transition-all px-2 py-1 border-4 focus-within:border-green-500 border-blue-500 rounded-xl outline-none" />
                    </div>

                    <fieldset id="isPublic" className="flex flex-row gap-4 text-white font-bold">
                        <div className="w-[70px] h-[70px] bg-blue-500 flex flex-col justify-evenly items-center rounded-md shadow-xl">
                            <label htmlFor="isPublic">Public</label>
                            <input type="radio" name="isPublic" value='true' onChange={handlePublicRadioChange} checked={publicRadioValue === "true"} className="w-5 h-5" />
                        </div>

                        <div className="w-[70px] h-[70px] bg-blue-500 flex flex-col justify-evenly items-center rounded-md shadow-xl">
                            <label htmlFor="isPublic">Private</label>
                            <input type="radio" name="isPublic" value="false" onChange={handlePublicRadioChange} checked={publicRadioValue === "false"} className="w-5 h-5" />
                        </div>
                    </fieldset>
                </div>


                <fieldset id="colour" className="flex flex-row gap-4 text-white font-bold">
                    <div className="w-[70px] h-[70px] bg-green-600 flex flex-col justify-evenly items-center rounded-md shadow-xl">
                        <label htmlFor="colour">Green</label>
                        <input type="radio" name="colour" value='green' onChange={handleColourRadioChange} checked={colourRadioValue === "green"} className="accent-green-600 w-5 h-5" />
                    </div>


                    <div className="w-[70px] h-[70px] bg-orange-600 flex flex-col justify-evenly items-center rounded-md">
                        <label htmlFor="colour">Orange</label>
                        <input type="radio" name="colour" value="orange" onChange={handleColourRadioChange} checked={colourRadioValue === "orange"} className="accent-orange-600 w-5 h-5" />
                    </div>


                    <div className="w-[70px] h-[70px] bg-red-500 flex flex-col justify-evenly items-center rounded-md">
                        <label htmlFor="colour">Red</label>
                        <input type="radio" name="colour" value='red' onChange={handleColourRadioChange} checked={colourRadioValue === "red"} className="accent-red-500 w-5 h-5" />
                    </div>

                    <div className="w-[70px] h-[70px] bg-blue-500 flex flex-col justify-evenly items-center rounded-md">
                        <label htmlFor="colour">Blue</label>
                        <input type="radio" name="colour" value="blue" onChange={handleColourRadioChange} checked={colourRadioValue === "blue"} className="accent-blue-500 w-5 h-5" />
                    </div>

                    <div className="w-[70px] h-[70px] bg-purple-500 flex flex-col justify-evenly items-center rounded-md">
                        <label htmlFor="colour">Purple</label>
                        <input type="radio" name="colour" value="purple" onChange={handleColourRadioChange} checked={colourRadioValue === "purple"} className="accent-purple-500 w-5 h-5" />
                    </div>
                </fieldset>

                <fieldset id="icon" className="flex flex-row gap-4">
                    <div className="w-[70px] h-[70px] bg-blue-500 flex flex-col justify-evenly items-center rounded-md">
                        <label htmlFor="icon">{iconArr.rocket}</label>
                        <input type="radio" name="icon" value='rocket' onChange={handleIconRadioChange} checked={iconRadioValue === "rocket"} className="w-5 h-5" />
                    </div>

                    <div className="w-[70px] h-[70px] bg-blue-500 flex flex-col justify-evenly items-center rounded-md">
                        <label htmlFor="icon" className="">{iconArr.football}</label>
                        <input type="radio" name="icon" value='football' onChange={handleIconRadioChange} checked={iconRadioValue === "football"} className="w-5 h-5" />
                    </div>

                    <div className="w-[70px] h-[70px] bg-blue-500 flex flex-col justify-evenly items-center rounded-md">
                        <label htmlFor="icon">{iconArr.car}</label>
                        <input type="radio" name="icon" value='car' onChange={handleIconRadioChange} checked={iconRadioValue === "car"} className="w-5 h-5" />
                    </div>

                    <div className="w-[70px] h-[70px] bg-blue-500 flex flex-col justify-evenly items-center rounded-md">
                        <label htmlFor="icon">{iconArr.stamp}</label>
                        <input type="radio" name="icon" value='stamp' onChange={handleIconRadioChange} checked={iconRadioValue === "stamp"} className="w-5 h-5" />
                    </div>

                    <div className="w-[70px] h-[70px] bg-blue-500 flex flex-col justify-evenly items-center rounded-md">
                        <label htmlFor="icon">{iconArr.headPhones}</label>
                        <input type="radio" name="icon" value='headPhones' onChange={handleIconRadioChange} checked={iconRadioValue === "headPhones"} className="w-5 h-5" />
                    </div>

                    <div className="w-[70px] h-[70px] bg-blue-500 flex flex-col justify-evenly items-center rounded-md">
                        <label htmlFor="icon">{iconArr.pin}</label>
                        <input type="radio" name="icon" value='pin' onChange={handleIconRadioChange} checked={iconRadioValue === "pin"} className="w-5 h-5" />
                    </div>

                    <div className="w-[70px] h-[70px] bg-blue-500 flex flex-col justify-evenly items-center rounded-md">
                        <label htmlFor="icon">{iconArr.cog}</label>
                        <input type="radio" name="icon" value='cog' onChange={handleIconRadioChange} checked={iconRadioValue === "cog"} className="w-5 h-5" />
                    </div>

                </fieldset>

                <div className="h-[250px] flex flex-row justify-evenly gap-5 rounded-md text-black">
                    <div className="flex flex-col items-center gap-3 border border-black border-opacity-20 w-[50%] p-2 rounded-lg shadow-lg">
                        <h2 className="font-bold">Items You've Got</h2>
                        <div className="flex flex-row items-center w-[80%]">
                            <label htmlFor="" className="w-1/3">Item Name</label>
                            <input onChange={handleGotItemChange} type="text" name="name" className="outline-none focus-within:border-blue-500 px-2 py-1 border border-black rounded-md w-full" />
                        </div>

                        <div className="flex flex-row items-center w-[80%]">
                            <label htmlFor="" className="w-1/3">Notes</label>
                            <textarea onChange={handleGotItemChange} name="notes" className="outline-none focus-within:border-blue-500 p-2 resize-none border border-black rounded-md w-full" />
                        </div>
                        <button onClick={handleAddGotItem} type="button" className="text-white border border-white bg-red-400 w-[100px] rounded-md px-2 py-1">Add Item</button>
                    </div>

                    <div className="flex flex-col items-center gap-3 border border-black border-opacity-20 w-[50%] p-2 rounded-lg shadow-lg">
                        <h2 className="font-bold">Items You Need</h2>
                        <div className="flex flex-row items-center w-[80%]">
                            <label htmlFor="" className="w-1/3">Item Name</label>
                            <input onChange={handleNeedItemChange} type="text" name="name" className="outline-none focus-within:border-blue-500 px-2 py-1 border border-black rounded-md w-full" />
                        </div>

                        <div className="flex flex-row items-center w-[80%]">
                            <label htmlFor="" className="w-1/3">Notes</label>
                            <textarea onChange={handleNeedItemChange} name="notes" className="outline-none focus-within:border-blue-500 p-2 resize-none border border-black rounded-md w-full" />
                        </div>
                        <button onClick={handleAddNeedItem} type="button" className="text-white border border-white bg-red-400 w-[100px] rounded-md px-2 py-1">Add Item</button>
                    </div>
                </div>


                <div className="flex flex-row justify-evenly items-start w-full bg-[#f2f2f2] rounded-md">


                    <div className="w-[45%] flex flex-col items-center">
                        {itemsGot.map(item => (
                            <ItemCard key={item.id} id={item.id} name={item.name} notes={item.notes} setArr={setItemsGot} />
                        ))}
                    </div>


                    <div className="w-[45%] flex flex-col items-center">
                        {itemsNeed.map(item => (
                            <ItemCard key={item.id} id={item.id} name={item.name} notes={item.notes} setArr={setItemsNeed} />
                        ))}
                    </div>

                </div>


                <button type="submit" className='bg-blue-400 rounded-md px-2 py-1 w-[100px] text-white font-bold text-lg'>Create Collection</button>
            </form>




        </div>
    )
}

export default CreateCollection