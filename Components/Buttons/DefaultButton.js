import Button from "../UI/Button"

function DefaultButton({ children, className = '', type='default', ...props }) {
  const typeClasses = {
    'default': 'flex items-center gap-2',
    'iconEnd': 'flex items-center justify-between'
  }

  return (
    <Button {...props} className={`${className} ${typeClasses[type] ? typeClasses[type] : typeClasses['default']}`}>{children}</Button>
  )
}
export default DefaultButton