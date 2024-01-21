import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"


export type Props = {
  id: number,
  img: string,
  name: string,
  disc: string,
  link: string
}

function Card({img, name, disc, link}: Props) {
  return (
    <div tabIndex={0} className="
    group/item relative rounded-md shadow-md hover:scale-105 focus:scale-105
    transition-all hover:drop-shadow-xl focus:drop-shadow-xl h-64 
    "
    >
      <h3 className="text-white font-bold text-md text-center group-hover/item:block group-focus/item:block transition-all p-4 hidden">{name}</h3>
      <p className="text-white text-center group-hover/item:block group-focus/item:block  transition-all p-4 hidden">{disc}</p>
      <Link href={link} className="text-white text-center group-hover/item:block group-focus/item:block transition-all p-4 max-w-max mx-auto hidden">view on github</Link>
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-20 bg-black w-full h-full  rounded-md"> 
        <Image 
          src={img} 
          alt="" 
          fill
          className="group-hover/item:opacity-40 group-focus/item:opacity-40 transition-all overflow-hidden -z-10 object-cover rounded-md"
        />
      </div>
    </div>
  )
}

export default Card