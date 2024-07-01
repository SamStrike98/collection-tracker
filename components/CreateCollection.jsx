'use client'

import { useState } from "react";
import Link from "next/link";
import { useRouter, redirect } from 'next/navigation'

const CreateCollection = ({ userId }) => {
    const router = useRouter()
    // const { data, isLoading, error } = useFetch(`http://localhost:3000/api/posts/${id}`)

    const [formData, setFormData] = useState({ name: '', isPublic: '' });

    const [publicRadioValue, setPublicRadioValue] = useState('true')
    const [colourRadioValue, setColourRadioValue] = useState('green')
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
        <div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Collection Name</label>
                <input type="text" id="name" name="name" value={formData.title} onChange={handleChange} className="border border-black" />


                <fieldset id="isPublic">
                    <label htmlFor="isPublic">Public</label>
                    <input type="radio" name="isPublic" value='true' onChange={handlePublicRadioChange} checked={publicRadioValue === "true"} className="w-5 h-5" />

                    <label htmlFor="isPublic">Private</label>
                    <input type="radio" name="isPublic" value="false" onChange={handlePublicRadioChange} checked={publicRadioValue === "false"} className="w-5 h-5" />
                </fieldset>

                <fieldset id="colour">
                    <label htmlFor="colour">Green</label>
                    <input type="radio" name="colour" value='green' onChange={handleColourRadioChange} checked={colourRadioValue === "green"} className="accent-green-600 w-5 h-5" />

                    <label htmlFor="colour">Orange</label>
                    <input type="radio" name="colour" value="orange" onChange={handleColourRadioChange} checked={colourRadioValue === "orange"} className="accent-orange-600 w-5 h-5" />

                    <label htmlFor="colour">Red</label>
                    <input type="radio" name="colour" value='red' onChange={handleColourRadioChange} checked={colourRadioValue === "red"} className="accent-red-500 w-5 h-5" />

                    <label htmlFor="colour">Blue</label>
                    <input type="radio" name="colour" value="blue" onChange={handleColourRadioChange} checked={colourRadioValue === "blue"} className="accent-blue-500 w-5 h-5" />

                    <label htmlFor="colour">Purple</label>
                    <input type="radio" name="colour" value="purple" onChange={handleColourRadioChange} checked={colourRadioValue === "purple"} className="accent-purple-500 w-5 h-5" />
                </fieldset>
                <button type="submit" className='bg-blue-400 rounded-md px-2 py-1'>Create Post</button>
            </form>

        </div>
    )
}

export default CreateCollection