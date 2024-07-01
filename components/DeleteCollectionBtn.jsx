'use client'
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

const DeleteCollectionBtn = ({ collectionId }) => {
    const router = useRouter()
    const pathname = usePathname()
    // console.log(pathname)
    const handleBtnClick = async () => {
        if (confirm('Are you sure you want to delete this collection?')) {

            const response = await fetch(`/api/collections/${collectionId}`, {
                method: 'DELETE'
            })

            if (response.status === 200) {
                alert('collection deleted')
                if (pathname === '/dashboard') {
                    router.refresh()
                } else {
                    router.push('/dashboard')
                    router.refresh()
                }
            }
        } else {
            return
        }
    }
    return (
        <button onClick={handleBtnClick} className="bg-red-500 text-white px-2 py-1 rounded-md">Delete Collection</button>
    )
}

export default DeleteCollectionBtn