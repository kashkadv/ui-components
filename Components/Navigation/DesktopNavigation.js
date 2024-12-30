'use client'

import useScrollPosition from "@/hooks/UseScrollPosition"
import UseIcon from "../UI/UseIcon"
import Link from "next/link"

const distance = 48

function DesktopNavigation() {
  const scrolled = useScrollPosition() > distance

  const wrapperClassNames = scrolled ? 'sticky top-0' : ''
  const barClassNames = scrolled ? 'bg-white/90 backdrop-blur-sm mb-24 w-full duration-700' : 'mx-24 bg-white shadow-sm backdrop-blur-none duration-300'

  return (
    <div className={`group mt-12 z-10 w-full flex ${wrapperClassNames}`}>
      <div className={`h-16 w-full px-6 transition-all duration-500 flex items-center justify-between  ${barClassNames}`}>
        <div className="flex items-center">
          <UseIcon id="menu" w="8" className={` ${scrolled && '!ml-3 mr-8'} ml-1 mr-5 text-greyDark transition-all duration-500 hover:text-greyLight`} />
        </div>
          <Link href="/" className="flex items-center gap-2 text-greyDark transition-all hover:text-grey"><UseIcon id="gushka-logo" w="32" /></Link>
          <div>1</div>
      </div>
    </div>
  )
}
export default DesktopNavigation