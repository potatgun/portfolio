import { MouseEventHandler, useEffect, useState } from 'react'
import Link from 'next/link'

import NavMenu from './NavMenu'
import OnPageLink from './OnPageLink'
import ThreeBars from './icons/ThreeBars'

type Props = {}

function NavBar({}: Props) {
  const [closed, setClosed] = useState<boolean>(true)
  return (
    <>
      <div className="sticky top-0 z-50 bg-white flex justify-between px-12 sm:py-4 py-2 shadow-md">
        <div>
          <h2 className="text-lg font-semibold p-2">Name</h2>
        </div>
        <div className="flex gap-4 items-center relative">
          <p>email@gmail.com</p>       
          <OnPageLink text="about me" href="#aboutme"/>
          <OnPageLink text="projects" href="#projects"/>
          <OnPageLink text="contact" href="#contact"/>
          <button onClick={() => setClosed(prev => !prev)} id="NavMenuBtn" className="block md:hidden"><ThreeBars /></button>
          <NavMenu closed={closed} setClosed={setClosed}/>
        </div>
      </div>
      { !closed && <div onClick={() => setClosed(prev => !prev)} id="close-NavMenu" className="absolute z-10 top-0 left-0 right-0 bottom-0"/>}
    </>
  )
}

export default NavBar