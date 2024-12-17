import Button from "../UI/Button"
import UseIcon from "../UI/UseIcon"

function CartButton({ direction = 'ltr', label = 'Add to cart' }) { // TODO remove label and direction

  const buttonClasses = {
    'ltr': 'flex-row',
    'rtl': 'flex-row-reverse',
  }

  const iconClasses = {
    'ltr': '-ml-1 mr-1 group-hover:ml-1 group-hover:mr-0',
    'rtl': 'ml-0 -mr-1 group-hover:-ml-1 group-hover:mr-1 transform rotate-y-180',
  }

  const borderClasses = {
    'ltr': 'right-5 group-hover:right-0',
    'rtl': 'left-4 group-hover:left-0',
  }

  return (
    <Button type='primary' className={`group relative [&>*]:transition-all [&>*]:duration-500 gap-3 px-4 py-2 h-8 font-medium items-end flex text-foreground z-0 ${buttonClasses[direction]}`}>
      <div className="leading-none tracking-wide font-medium flex items-center group relative group-hover:text-white z-10">{label}</div>
      <UseIcon w='4' id="cart" className={`mb-[2px] text-green group-hover:text-white ${iconClasses[direction]} z-10`} />
      <div className={`h-[1px] w-1/2 bg-green absolute -bottom-1 transform group-hover:w-full group-hover:h-10 -z-0 ${borderClasses[direction]}`}></div> 
    </Button>
  )

}
export default CartButton