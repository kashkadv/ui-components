function CategoryBanner({ category }) {
  const { name, description } = category

  return (
    <div className="w-full p-12 bg-red-100">{name}</div>
  )
}
export default CategoryBanner