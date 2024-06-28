'use client'

import { useState } from "react"

const ItemTableItems = ({ data }) => {
    const [query, setQuery] = useState('')

    const handleChange = () => {

    }
    return (
        <tbody>
            <tr>
                <td><input type="text" placeholder="search" onChange={(e) => setQuery(e.target.value.toLowerCase())} className="border boreder-black" /></td>
                <td><input type="text" /></td>
            </tr>
            {data.items.filter(item => (item.name.toLowerCase().includes(query))).map(item => (
                <tr key={item._id} className=''>
                    <td className=''>{item.name}</td>
                    <td>{item.notes}</td>
                </tr>
            ))}
        </tbody>
    )
}

export default ItemTableItems