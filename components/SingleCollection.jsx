'use client'

import { useFetch } from "@/hooks/useFetch"
import AddItems from "./AddItems"


const SingleCollection = ({ collectionId }) => {
    const { data, isLoading, error } = useFetch(`/api/collections/${collectionId}`)
    return (
        <div>
            {isLoading && <div>Loading...</div>}

            {data &&
                <div>
                    <h2>{data.name}</h2>

                    <ul>
                        {data.items.map(item => (
                            <li key={item._id}>
                                <h4>{item.name}</h4>
                                <p>{item.notes}</p>
                            </li>
                        ))}
                    </ul>

                    <AddItems collectionId={collectionId} />
                </div>
            }

            {error && <div>{error}</div>}
        </div>

    )
}

export default SingleCollection