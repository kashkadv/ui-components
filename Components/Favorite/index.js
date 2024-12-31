'use client'

import { useAppContext } from "@/context/AppContext"
import Button from "../UI/Button"
import UseIcon from "../UI/UseIcon"
import Sidebar from "../UI/Sidebar"

function FavoriteTrigger() {
  const { handleFavoriteOpen } = useAppContext()

  return (
    <Button onClick={handleFavoriteOpen} className="text-greyDark focus:text-greyDark hover:text-greyLight">
      <UseIcon id="heart" w="6" />
    </Button>
  )
}

function Favorite() {
  const { favoriteOpen, handleFavoriteOpen } = useAppContext()

  return (
    <Sidebar  isOpen={favoriteOpen} callback={handleFavoriteOpen} direction="left" className="bg-background text-grey">
      Favorite
    </Sidebar>
  )
}

export { FavoriteTrigger, Favorite }