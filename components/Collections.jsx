'use client'

import React from 'react'
import AllCollectionsByUser from './AllCollectionsByUser'

const Collections = (userId) => {
    return (
        <div>
            <AllCollectionsByUser userId={userId} />
        </div>
    )
}

export default Collections