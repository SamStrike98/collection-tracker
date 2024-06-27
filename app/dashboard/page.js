import { auth } from "@/auth"
import AllCollectionsByUser from "@/components/AllCollectionsByUser"
import Collections from "@/components/Collections"

const dashboard = async () => {

    const session = await auth()

    return (
        <div>
            <h2>{`${session?.user.name}'s Dashboard`}</h2>
            {/* <Collections userId={session?.user.id} /> */}
            <AllCollectionsByUser userId={session?.user.id} />
        </div>
    )
}

export default dashboard