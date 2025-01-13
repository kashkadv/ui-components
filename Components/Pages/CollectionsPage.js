import CategoryCard from "../Category/CategoryCard"

const cats = new Array(10).fill(0)

function CollectionsPage() {
  return (
    <div className="py-12">
      {cats.map((cat, i) => <CategoryCard key={i} i={i} last={cats.length - 1 == i}>{cat}</CategoryCard>)}
    </div>
  )
}
export default CollectionsPage