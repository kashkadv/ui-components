import ProductGrid from "@/Components/Product/ProductGrid"

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F0c%2F72%2F0c72848b9174313874b7fdb36bae4ddd.jpg&w=640&q=75',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2Fb0%2F62%2Fb06210c8f8b396ee56d380772380176f.png&w=640&q=75',      
    price: 300,      
  },
  {
    id: 4,
    name: 'Product 4',
    image: 'https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2Fa7%2Fcc%2Fa7cc20012c1c02ab75ff95e4c61ef1ce.png&w=640&q=75',      
    price: 400,   
  },
  {
    id: 5,
    name: 'Product 1',
    image: 'https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75',
    price: 100,
  },
  {
    id: 6,
    name: 'Product 2',
    image: 'https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F0c%2F72%2F0c72848b9174313874b7fdb36bae4ddd.jpg&w=640&q=75',
    price: 200,
  },
  {
    id: 7,
    name: 'Product 3',
    image: 'https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2Fb0%2F62%2Fb06210c8f8b396ee56d380772380176f.png&w=640&q=75',      
    price: 300,      
  },
  {
    id: 8,
    name: 'Product 4',
    image: 'https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2Fa7%2Fcc%2Fa7cc20012c1c02ab75ff95e4c61ef1ce.png&w=640&q=75',      
    price: 400,   
  }
]

function page() {
  return (
    <div className="p-24 space-y-24">
      <ProductGrid products={products} />
    </div>
  )
}
export default page