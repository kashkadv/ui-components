'use server'

import { client } from "./client"
import { getAllCategoriesQuery, getSettingsQuery, getCategoryBySlugQuery, getCategoryProductsQuery, getProductBySlugQuery } from "./queries"

const requestConfigs = new Map([
  ["settings", {query: getSettingsQuery, config: { cache: "force-cache", next: { tags: ["settings"] }}}],
  ["categories", {query: getAllCategoriesQuery, config: { cache: "force-cache", next: { tags: ["categories"] }}}],
  ["category-by-slug", {query: getCategoryBySlugQuery, config: { cache: "force-cache", next: { revalidate: false, tags: ["category-by-slug"] }}}],
  ["category-products", {query: getCategoryProductsQuery, config: { filterResponse: true, cache: "force-cache", next: { revalidate: false, tags: ["category-products"] }}}],
  ["product-by-slug", {query: getProductBySlugQuery, config: { cache: "force-cache", next: { revalidate: false, tags: ["product-by-slug"] }}}]
])

export async function fetchSanity(key, params = {}) {
  const { query, config } = requestConfigs.get(key)

  if (!query) {
    console.error("Can't find query for key", key)
    return null
  }

  try {
    const res = await client.fetch(query, params, config || {})
    return res

  } catch (error) {
    console.error('error',error)
    return null
  }
}