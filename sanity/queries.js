export const getSettingsQuery = `*[_type == "intl"][0]`


// Categories
export const getAllCategoriesQuery = `
  *[_type == "category" && slug.current != null] {
    title,
    description,
    "slug": slug.current,
    "posterIsSet": poster.asset,
    "poster": {
      "src": poster.asset->url,
      "alt": poster.caption,
      "width": poster.asset->metadata.dimensions.width,
      "height": poster.asset->metadata.dimensions.height,
      "blurDataURL": poster.asset->metadata.lqip
    }  
  }
`
// export const getActiveCategoriesQuery = ''
export const getCategoryBySlugQuery = `
  *[_type == "category" && slug.current == $slug && published][0] {
    _id,
    title,
    productTitle,
    description
  }
`

// Products
export const getCategoryProductsQuery = `
  *[_type == "product" && category._ref == $category && published == true] | order(articul desc) {
    title,
    slug,
    image,
    base_price,
    sizes,
    stock,
    category->{
      title,
      productTitle,
      "slug": slug.current     
    }
  }
`