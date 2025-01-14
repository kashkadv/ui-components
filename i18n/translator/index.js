'use client'

import { useAppContext } from "@/context/AppContext"

function useTranslator() {
  const {initialSettings} = useAppContext()

  return 'useTranslator'
}
export default useTranslator