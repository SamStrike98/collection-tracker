import { auth } from "@/auth"

const dashboard = async () => {

    const session = await auth()

    return (
        <div>{`${session?.user.name}'s Dashboard`}</div>
    )
}

export default dashboard