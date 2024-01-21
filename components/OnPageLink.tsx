import Link from 'next/link'
import React from 'react'

type Props = {
  text: string,
  href: string,
}

function OnPageLink({text, href}: Props) {
  return (
    <>
     <hr className="bg-black w-[1px] h-4 hidden md:block" />
     <Link href={href} className="hover:text-red-400 hidden md:block">{text}</Link>
    </>
  )
}

export default OnPageLink