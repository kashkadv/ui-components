
import CheckoutPage from '@/Components/Pages/CheckoutPage'
import { headers } from 'next/headers'

async function page() {
  const headersList = await headers()
  const scenario = headersList.get('scenario')

  return (
    <CheckoutPage scenario={scenario} />
  )
}

export default page
