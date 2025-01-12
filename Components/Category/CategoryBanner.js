function CategoryBanner({ category }) {
  const { name, description } = category

  return (
    <div className="w-full py-12 grid grid-cols-2">
      <div className="space-y-6">
        <h1 className="text-h1 font-black">{name}</h1>
        <div className="leading-loose">{description}</div>
      </div>
    </div>
  )
}

export default CategoryBanner