import React from 'react'

const page = ({ params }) => {
    const id = params.id
    return (
        <div>
            <h2>Profile of {id}</h2>
            <button>Add Friend</button>
        </div>
    )
}

export default page