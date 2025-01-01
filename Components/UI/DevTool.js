function DevTool({ children }) {
  return (
    <div className="fixed left-0 bottom-0 w-1/3 h-1/4 z-[999999] p-6 bg-greyDark text-white font-bold tracking-widest">
      {children}
    </div>
  )
}
export default DevTool