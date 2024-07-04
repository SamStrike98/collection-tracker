


import Link from "next/link"
import DeleteCollectionBtn from "./DeleteCollectionBtn"
import CollectionCard from "./CollectionCard"

const AllCollectionsByUser = async ({ userId, currentUserId }) => {
    // const session = await auth()
    const res = await fetch(`${process.env.URL}/api/collections/user/${userId}`, { cache: 'no-store' })
    const data = await res.json()
    return (
        <div>
            {/* {isLoading && <div>Loading...</div>} */}

            {data &&

                <ul className="flex flex-row flex-wrap">
                    {data.reverse().map(collection => (

                        (<CollectionCard key={collection._id} colour={collection.iconColour} icon={collection.icon} collectionId={collection._id} collectionName={collection.name} numberOfItems={collection.items.length} currentUserId={currentUserId} likes={collection.likes} />)

                    ))}
                </ul>
            }

            {/* {error && <div>{error}</div>} */}
        </div>

    )
}

export default AllCollectionsByUser