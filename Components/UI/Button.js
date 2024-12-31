import React from "react"

const Button = React.forwardRef(({ type, children, className, ...props }, ref) => {
  return (
    <button className={`flex items-center gap-2 transition-all  ${className}`} ref={ref} {...props}>
      {children}
    </button>
  )
})

export default Button