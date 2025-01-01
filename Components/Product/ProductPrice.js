const priceClasses = {
  'xs': 'text-xs',
  'sm': 'text-sm',
  'lg': 'text-lg',
  'xl': 'text-h4 font-black text-greyDark'
}

function ProductPrice({ size, type = 'full', data }) {
  const { regularPrice, salePrice = null } = data

  return (
    <div className={priceClasses[size]}>${regularPrice}</div>
  )
}

export default ProductPrice