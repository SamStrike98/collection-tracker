import CreateCollection from "@/components/CreateCollection";
import Image from "next/image";
import { auth } from "@/auth";
import CollectionCard from "@/components/CollectionCard";


export default async function Home() {
  const session = await auth()

  console.log(session)
  return (
    <main className="bg-[#f2f2f2] flex flex-row justify-center">
      <div className="max-w-[1200px] bg-[#f2f2f2]">
        <CreateCollection userId={session?.user.id} />

        <ul className="flex flex-row flex-wrap w-full justify-evenly">
          <CollectionCard colour={'green'} icon={'rocket'} />
          <CollectionCard colour={'blue'} icon={'football'} />
          <CollectionCard colour={'orange'} icon={'car'} />
          <CollectionCard colour={'purple'} icon={'rocket'} />
          <CollectionCard colour={'red'} icon={'football'} />
          <CollectionCard colour={'green'} icon={'car'} />
          <CollectionCard colour={'blue'} icon={'rocket'} />
          <CollectionCard colour={'orange'} icon={'football'} />
          <CollectionCard colour={'purple'} icon={'car'} />
        </ul>
      </div>


    </main>
  );
}
