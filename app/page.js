import CreateCollection from "@/components/CreateCollection";
import Image from "next/image";
import { auth } from "@/auth";
import CollectionCard from "@/components/CollectionCard";
import FeedCard from "@/components/FeedCard";
import ItemCard from "@/components/ItemCard";


export default async function Home() {
  const session = await auth()

  console.log(session)
  return (
    <main className="bg-[#f2f2f2] flex flex-row justify-center">
      <div className="max-w-[1200px] bg-[#f2f2f2]">


        <ItemCard />
      </div>


    </main>
  );
}
