import React from 'react'
import CheckoutForm from '@/Components/Checkout/CheckoutForm'
import CheckoutSummary from '@/Components/Checkout/CheckoutSummary'

function CheckoutPage({ scenario }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
      <div className='col-span-full'>LOGO</div>
      <CheckoutForm scenario={scenario} />
      <CheckoutSummary />
    </div>
  )
}

export default CheckoutPage