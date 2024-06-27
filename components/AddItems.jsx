'use client'

import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const AddItems = ({ collectionId }) => {
    const router = useRouter()
    // const { data, isLoading, error } = useFetch(`http://localhost:3000/api/posts/${id}`)

    const [formData, setFormData] = useState({ name: '', notes: '' });

    // const [radioValue, setRadioValue] = useState('true')
    // console.log(formData.title)

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    // const handleRadioChange = (event) => {
    //     setRadioValue(event.target.value)
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('form submitted')
        // const createdAt = Date.now()


        const response = await fetch(`/api/collections/${collectionId}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name,
                notes: formData.notes
            })
        });

        if (response.status === 200) {
            // alert('Comment added')
            setFormData({ name: '', notes: '' })
            router.refresh();
        } else {
            alert('Item NOT added')
        }
    }


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Item Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-black" />


                <label htmlFor="name">Collection Notes</label>
                <textarea id="name" name="notes" value={formData.notes} onChange={handleChange} className="border border-black" />
                {/* <label htmlFor="isPublic">Public</label>
                <input type="radio" name="isPublic" value='true' onChange={handleRadioChange} checked={radioValue === "true"} className="border border-black" /> */}

                {/* <label htmlFor="isPublic">Private</label>
                <input type="radio" name="isPublic" value="false" onChange={handleRadioChange} checked={radioValue === "false"} className="border border-black" /> */}
                <button type="submit" className='bg-blue-400 rounded-md px-2 py-1'>Add Item</button>
            </form>

        </div>
    )
}

export default AddItems