import React from "react"

const Button = React.forwardRef(({ type, children, className, ...props }, ref) => {
  return (
    <button className={className} ref={ref} {...props}>
      {children}
    </button>
  )
})

export default Button