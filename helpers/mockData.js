export const menuItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Shop',
    href: '/shop'
  },
  {
    label: 'Collections',
    href: '/collections'
  },
  {
    label: 'Contacts',
    href: '/contacts'
  },
  {
    label: 'About',
    href: '/about'
  }
]

export const products = [
  {
    id: '00013324',
    name: 'Product Name 1',
    images: [
      "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75",
      "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75",
      "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75"
    ],
    sizes: [
      {
        label: 'S',
        availability: true
      },
      {
        label: 'M',
        availability: false
      },
      {
        label: 'L',
        availability: false
      }
    ],
    base_price: 200,
  },
  {
    id: 2,
    name: 'Product Name 2',
    images: [
      "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75",
      "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75",
      "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75"
    ],
    sizes: [
      {
        label: 'S',
        availability: true
      },
      {
        label: 'M',
        availability: true
      },
      {
        label: 'L',
        availability: false
      }
    ],
    price: {
      regularPrice: 200
    },
  },
  {
    id: 3,
    name: 'Product Name 3',
    images: [
      "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75",
      "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75",
      "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75"
    ],
    sizes: [
      {
        label: 'S',
        availability: false
      },
      {
        label: 'M',
        availability: true
      },
      {
        label: 'L',
        availability: true
      }
    ],
    price: {
      regularPrice: 400
    },
  },
  {
    id: 4,
    name: 'Product Name 4',
    images: [
      "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75",
      "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75",
      "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75"
    ],
    price: {
      regularPrice: 200
    },
  }
]

const loremDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus pulvinar ante vel euismod. Donec euismod, nulla at hendrerit suscipit, sem nisi pharetra est, non malesuada lectus nulla nec massa. Vivamus nec dictum felis, ut efficitur nisl. Morbi faucibus lectus et justo tristique porta. Sed at mauris urna.'

export const categories = [
  {
    id: 1,
    name: 'Category 1',
    description: loremDescription,
    products: products,
    slug: 'category-1'
  },
  {
    id: 2,
    name: 'Category 2',
    description: loremDescription,
    products: products,
    slug: 'category-2'
  },
  {
    id: 3,
    name: 'Category 3',
    description: loremDescription,
    products: products,
    slug: 'category-3'
  },
  {
    id: 4,
    name: 'Category 4',
    description: loremDescription,
    products: products,
    slug: 'category-4'
  }
]