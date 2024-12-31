'use client'

import useScrollPosition from "@/hooks/UseScrollPosition"
import UseIcon from "../UI/UseIcon"
import Link from "next/link"
import { CartTrigger } from "../Cart"
import { FavoriteTrigger } from "../Favorite"
import {DesktopMenuTrigger} from "../Menu"

const distance = 48

function DesktopNavigation() {
  const scrolled = useScrollPosition() > distance

  const wrapperClassNames = scrolled ? 'sticky top-0' : ''
  const barClassNames = scrolled ? 'bg-white/90 backdrop-blur-sm mb-24 w-full duration-700' : 'mx-24 bg-white shadow-sm backdrop-blur-none duration-300'

  return (
    <div className={`group mt-12 z-10 w-full flex ${wrapperClassNames}`}>
      <div className={`h-16 w-full transition-all duration-500 flex items-center justify-between  ${barClassNames}`}>
        <DesktopMenuTrigger scrolled={scrolled} />
        <Link href="/" className="flex items-center gap-2 text-greyDark transition-all hover:text-grey"><UseIcon id="gushka-logo" className="h-fit" w="28" h="12" /></Link>
        <div className="flex items-center">
          <FavoriteTrigger />
          <CartTrigger />
        </div>
      </div>
    </div>
  )
}



export default DesktopNavigation