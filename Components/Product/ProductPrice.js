function ProductPrice({ size, data }) {

  const { regularPrice, salePrice = null } = data

  const priceClasses = {
    'xs': 'text-xs',
    'sm': 'text-sm',
    'lg': 'text-lg',
    'xl': 'text-h4 font-black text-greyDark'
  }
  
  return (
    <div className={priceClasses[size]}>{regularPrice}</div>
  )
}
export default ProductPrice