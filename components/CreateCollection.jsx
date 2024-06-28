'use client'

import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const CreateCollection = ({ userId }) => {
    const router = useRouter()
    // const { data, isLoading, error } = useFetch(`http://localhost:3000/api/posts/${id}`)

    const [formData, setFormData] = useState({ name: '', isPublic: '' });

    const [radioValue, setRadioValue] = useState('true')
    // console.log(formData.title)

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const handleRadioChange = (event) => {
        setRadioValue(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('form submitted')
        const createdAt = Date.now()


        const response = await fetch(`/api/collections`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name,
                isPublic: radioValue,
                userId: userId,
                createdAt: createdAt,
                items: []
            })
        });

        if (response.status === 201) {
            alert('Collection Created')
        } else {
            alert('collection NOT Created')
        }
    }


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Collection Name</label>
                <input type="text" id="name" name="name" value={formData.title} onChange={handleChange} className="border border-black" />


                <label htmlFor="isPublic">Public</label>
                <input type="radio" name="isPublic" value='true' onChange={handleRadioChange} checked={radioValue === "true"} className="border border-black" />

                <label htmlFor="isPublic">Private</label>
                <input type="radio" name="isPublic" value="false" onChange={handleRadioChange} checked={radioValue === "false"} className="border border-black" />
                <button type="submit" className='bg-blue-400 rounded-md px-2 py-1'>Create Post</button>
            </form>

        </div>
    )
}

export default CreateCollection