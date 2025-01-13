'use server'

import { client } from "./client"
import { getAllCategoriesQuery, getSettingsQuery, getCategoryBySlugQuery, getCategoryProductsQuery } from "./queries"

// q: query, c: config
const requestConfigs = new Map([
  ["settings", {query: getSettingsQuery, config: { cache: "no-store", next: { tags: ["settings"] }}}],
  ["categories", {query: getAllCategoriesQuery, config: { cache: "no-store", next: { tags: ["categories"] }}}],
  ["category-by-slug", {query: getCategoryBySlugQuery, config: { cache: "force-cache", next: { revalidate: false, tags: ["categories"] }}}],
  ["category-products", {query: getCategoryProductsQuery, config: { filterResponse: true, cache: "force-cache", next: { revalidate: false, tags: ["category-products"] }}}]
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