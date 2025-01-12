'use client'

import { useAppContext } from "@/context/AppContext"

export default function Home() {
  const { t } = useAppContext()

  return <div>{t('buttons.buyBtnLabel')}</div>
}
