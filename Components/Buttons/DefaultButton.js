import Button from "../UI/Button"

function DefaultButton({ children, className = '', type='default', ...props }) {
  const typeClasses = {
    'default': 'flex items-center gap-2',
    'iconEnd': 'flex items-center justify-between',
    'primary': 'bg-green text-white px-6 py-2'
  }

  return (
    <Button {...props} className={`${className} ${typeClasses[type] ? typeClasses[type] : typeClasses['default']}`}>{children}</Button>
  )
}
export default DefaultButton