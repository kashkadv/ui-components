function SizeButton({ data, selected, ...props }) {
  const {label, availability} = data

  return (
    <div {...props} className={`px-4 py-2 space-y-1 border border-grey-light group relative cursor-pointer [&>*]:transition-all [&>*]:duration-500 ${selected && 'bg-green shadow-xl border-none'}`}>

      <div className={`group-hover:text-white font-bold text-greyDark ${selected && 'text-white'}`}>{label}</div>
      <div className={`text-grey text-small group-hover:text-white tracking-wider ${selected && 'text-white'}`}>{availability ? 'Available' : 'Out of stock'}</div>
      
      <div className={`-z-10 absolute bottom-0 left-0 w-full h-0 bg-green group-hover:h-full`}></div>
    </div>
  )
}
export default SizeButton