import AddItems from '@/components/AddItems'
import SingleCollection from '@/components/SingleCollection'
import React from 'react'
import { auth } from '@/auth'
import ItemTableItems from '@/components/ItemTableItems'
import DeleteCollectionBtn from '@/components/DeleteCollectionBtn'

const page = async ({ params }) => {
    const session = await auth()
    const collectionId = params.id

    const res = await fetch(`${process.env.URL}/api/collections/${collectionId}`)
    const data = await res.json()


    return (
        <div>

            {/* <SingleCollection collectionId={collectionId} /> */}
            {data ?
                <div className=''>
                    <h2>{data.name} Collection</h2>
                    <DeleteCollectionBtn collectionId={collectionId} />
                    <p>{`Views ${data.views}`}</p>

                    {data.items.length === 0 ? <p>Collection Has No Items</p> :

                        <table className="table-fixed">
                            <thead>
                                <tr >
                                    <th>Name</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                {data.items.filter((item => item.name === '')).map(item => (
                                    <tr key={item._id} className=''>
                                        <td className=''>{item.name}</td>
                                        <td>{item.notes}</td>
                                    </tr>
                                ))}
                            </tbody> */}
                            <ItemTableItems data={data} />
                        </table>
                    }
                    <AddItems collectionId={collectionId} />
                </div>
                :
                <div>
                    No Data
                </div>
            }

        </div>
    )
}

export default page