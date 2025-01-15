function CategoryBanner({ category }) {
  const { title, description } = category

  return (
    <div className="w-full py-12 grid grid-cols-2">
      <div className="space-y-6">
        <h1 className="text-h1 font-black text-greyDark font-secondary">{title?.[0].value}</h1>
        <div className="font-primary text-grey">{description?.[0].value}</div>
      </div>
    </div>
  )
}

export default CategoryBanner