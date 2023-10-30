import Image from 'next/image'
import Searchbar from "@/components/Searchbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <Searchbar/>
    </main>
  )
}
