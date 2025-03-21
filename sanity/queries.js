export const getSettingsQuery = `*[_type == "intl"][0]`


// Categories
export const getAllCategoriesQuery = `
  *[_type == "category" && slug.current != null && !(_id in path('drafts.**'))] {
    title,
    published,
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
  *[_type == "category" && slug.current == $slug && published && !(_id in path('drafts.**'))][0] {
    _id,
    title,
    product_title,
    description
  }
`

// Products
export const getCategoryProductsQuery = `
  *[_type == "product" && category._ref == $category  && !(_id in path('drafts.**')) && published == true] | order(articul desc) {
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

export const getProductBySlugQuery = `
  *[_type == "product" && slug == $slug][0] {
    title,
    image,
    gallery,
    articul,
    base_price,
    sizes,
    category->{
      title,
      "slug": slug.current,        
      product_title       
    }
  }
`