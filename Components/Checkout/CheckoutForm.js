import React from 'react'


function CheckoutForm({ scenario }) {
  return (
    <div className='col-span-2 bg-red-50'>
      {scenario === 'local' ? <LocalCheckoutForm /> : <WorldCheckoutForm />}
    </div>
  )
}

function LocalCheckoutForm() {
  return (
    <div className='col-span-2 bg-red-50'>LocalCheckoutForm</div>
  )
}

function WorldCheckoutForm() {
  return (
    <div className='col-span-2 bg-red-50'>WorldCheckoutForm</div>
  )
}

export default CheckoutForm