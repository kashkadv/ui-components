function SizeButton({ data, selected, ...props }) {
  const {label, availability} = data


  return (
    <div {...props} className={`px-4 pt-3 pb-3 space-y-1 group relative shadow-xl hover:shadow-none cursor-pointer transition-all [&>*]:transition-all [&>*]:duration-500 ${selected && '!bg-green !shadow-none border-none'}`}>
      <div className={`z-20 text-grey group-hover:text-white font-bold ${selected && 'text-white'}`}>{label}</div>
      <div className={`z-20 text-grey text-extra-small group-hover:text-white tracking-wider ${selected && 'text-white'}`}>{availability ? 'Available' : 'Out of stock'}</div>
      
      <div className={`-z-10 absolute bottom-0 left-0 w-full h-0 !bg-green group-hover:h-full`}></div>
      <div className={`-z-20 absolute bottom-0 left-0 w-full h-full !bg-white group-hover:h-full`}></div>
    </div>
  )
}

export default SizeButton