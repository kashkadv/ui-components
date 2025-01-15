import { useAppContext } from "@/context/AppContext"
import { formatPrice } from "@/helpers"

const priceClasses = {
  'xs': 'text-xs',
  'sm': 'text-sm',
  'lg': 'text-body leading-none',
  'xl': 'text-h3 h-fit leading-none font-bold gap-2 text-grey flex items-center'
}

const labelClasses = {
  'xs': 'text-xs',
  'sm': 'text-sm',
  'lg': 'text-small font-normal',
  'xl': 'text-h5 leading-none font-normal'
}

function ProductPrice({ size = 'lg', type = 'full', price }) {
  const {currency} = useAppContext()
  if (!currency) return <PricePreloader />

  return (
    <div className={`${priceClasses[size]}  leading-none`}>
      <span className={labelClasses[size]}>{currency.position === 'before' && `${currency.symbol} `}</span>
      <span>{formatPrice(price)}</span>
      <span className={labelClasses[size]}>{currency.position === 'after' && ` ${currency.symbol}`}</span>
    </div>
  )
}

function PricePreloader() {
  return <div className="h-4 w-16 bg-greyLight animate-pulse"></div>
}

export default ProductPrice