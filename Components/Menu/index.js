'use client'

import { useAppContext } from "@/context/AppContext"
import Button from "../UI/Button"
import UseIcon from "../UI/UseIcon"
import Sidebar from "../UI/Sidebar"
import Link from "next/link"

function DesktopMenuTrigger() {
  const { handleMenuOpen } = useAppContext()

  return (
    <Button onClick={handleMenuOpen} className="text-greyDark focus:text-greyDark hover:text-greyLight px-8">
      <UseIcon id="menu" w="8" />
    </Button>
  )
}

function Menu({ items}) {
  const { menuOpen, handleMenuOpen } = useAppContext()

  return (
    <Sidebar  isOpen={menuOpen} callback={handleMenuOpen} className="bg-green text-white">
      <MenuList items={items} />
    </Sidebar>
  )
}

function MenuList({ items }) {
  const { menuOpen } = useAppContext()
  
  if (items.length === 0) return null

  const delay = 200 //ms

  return (
    <div className="flex flex-col gap-6 select-none">
      {items.map((item, i) => (
        <div 
          key={i}
          className={`text-center opacity-0 ${menuOpen ? 'ltr:animate-slideInRight rtl:animate-slideInLeft' : ''}`}
          style={{ animationDelay: `${(i + 1) * delay}ms`}}
        >
          <Link href={item.href} className="text-center hover:text-greyDark transition-all text-h1">
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  )
}

export { DesktopMenuTrigger, Menu }