import CreateCollection from "@/components/CreateCollection";
import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await auth()
    if (!session?.user) {
        redirect('/login')
    } else {
        return (
            <main className="bg-[#f2f2f2] min-h-[100vh]">
                <CreateCollection userId={session?.user.id} />
            </main>
        )
    }
}
