import UseIcon from "./UseIcon"

function NoContent({ message }) { 
  return (
    <div className="content-center text-center space-y-6">
      <UseIcon id="sheep" w="32" className="text-white mx-auto opacity-50" />
      <div className="text-h5 font-black tracking-wide">{message}</div>
    </div>
  )
}

export default NoContent