'use client'

import { useFetch } from "@/hooks/useFetch"
import Link from "next/link"

const AllCollectionsByUser = ({ userId }) => {

    const { data, isLoading, error } = useFetch(`/api/collections/user/${userId}`)
    return (
        <div>
            {isLoading && <div>Loading...</div>}

            {data &&

                <ul className="flex flex-col">
                    {data.map(collection => (
                        <Link key={collection._id} href={`/collections/${collection._id}`}>{collection.name}</Link>
                    ))}
                </ul>
            }

            {error && <div>{error}</div>}
        </div>

    )
}

export default AllCollectionsByUser