function ProductPrice({ size, value }) {

  const priceClasses = {
    'xs': 'text-xs',
    'sm': 'text-sm',
    'lg': 'text-lg',
    'xl': 'text-xl',
  }

  return (
    <div className={`font-medium ${priceClasses[size]}`}>{value}</div>
  )
}
export default ProductPrice