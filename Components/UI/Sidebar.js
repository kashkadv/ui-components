import { useState, useEffect } from "react"
import Button from "./Button"
import UseIcon from "./UseIcon"
import { usePathname } from "next/navigation"

function Sidebar({ isOpen, direction = "right", callback, className = "", children }) {
  const [startTouch, setStartTouch] = useState(null)
  const [startX, setStartX] = useState(0)

  const pathname = usePathname()

  useEffect(() => {
    isOpen && callback()
  }, [pathname])

  const directionClassNames = {
    'right': 'rtl:translate-x-full ltr:-translate-x-full',
    'left': 'ltr:translate-x-full rtl:-translate-x-full',
  }

  const closeClassNames = {
    'right': 'ltr:left-6 rtl:right-6 ltr:laptop:left-12 rtl:laptop:right-12',
    'left': 'ltr:right-6 rtl:left-6 ltr:laptop:right-12 rtl:laptop:left-12',
  }

  const stateClassNames = isOpen
    ? `duration-1000 opacity-100 translate-x-0`
    : `duration-300 ${directionClassNames[direction]} opacity-0`

  const swipeThreshold = 200

  const handleTouchStart = (e) => {
    const touchStart = e.touches ? e.touches[0].clientX : e.clientX
    setStartX(touchStart)
  }

  const handleTouchMove = (e) => {
    const touchMove = e.touches ? e.touches[0].clientX : e.clientX
    if (startX !== null && Math.abs(touchMove - startX) > swipeThreshold) {
      setStartTouch(touchMove)
    }
  }

  const handleTouchEnd = () => {
    if (startTouch !== null) {
      if ((direction === "left" && startTouch > startX) || (direction === "right" && startTouch < startX)) {
        isOpen && callback()
      }
    }
    setStartTouch(null)
  }

  const handleMouseDown = (e) => {
    const mouseStart = e.clientX
    setStartX(mouseStart)
  }

  const handleMouseMove = (e) => {
    if (startX !== null) {
      const mouseMove = e.clientX
      if (Math.abs(mouseMove - startX) > swipeThreshold) {
        setStartTouch(mouseMove)
      }
    }
  }

  const handleMouseUp = () => {
    if (startTouch !== null) {
      if ((direction === "left" && startTouch > startX) || (direction === "right" && startTouch < startX)) {
        isOpen && callback()
      }
    }
    setStartTouch(null)
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("touchstart", handleTouchStart)
      window.addEventListener("touchmove", handleTouchMove)
      window.addEventListener("touchend", handleTouchEnd)

      window.addEventListener("mousedown", handleMouseDown)
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    } else {
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isOpen, startX, startTouch])

  const handleClose = (e) => {
    e.stopPropagation()
    isOpen && callback()
  }

  return (
    <div
      className={`animate-all fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 ${stateClassNames} ${className}`}
      style={{
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      <Button onClick={handleClose} className={`absolute z-50 [&>*]:pointer-events-none top-6 laptop:top-12 ${closeClassNames[direction]}`}>
        <UseIcon id="x" w="8" />
      </Button>

      {children}
    </div>
  )
}

export default Sidebar
