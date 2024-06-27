import CreateCollection from "@/components/CreateCollection";
import Image from "next/image";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth()

  console.log(session)
  return (
    <main className="">
      <CreateCollection userId={session?.user.id} />
    </main>
  );
}
