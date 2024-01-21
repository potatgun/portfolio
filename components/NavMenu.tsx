import { Dispatch, SetStateAction } from "react"
import Link from "next/link"

type Props = {
  closed: boolean,
  setClosed: Dispatch<SetStateAction<boolean>>
}

function NavMenu({closed, setClosed}: Props) {
  return (
    <>
      { !closed && <div id="NavMenu" className="flex flex-col space-y-2 absolute top-8 right-0 bg-white border-2 border-black rounded-sm p-4">
      {/* TODO: add icons */}
       <Link className="focus:text-red-400 hover:text-red-400" href="#aboutme">about me</Link>
       <Link className="focus:text-red-400 hover:text-red-400" href="#projects">projects</Link>
       <Link className="focus:text-red-400 hover:text-red-400" href="#contact">contact</Link>
      </div> }
    </>
  )
}

export default NavMenu