'use server'

import { client } from "./client"
import { getSettingsQuery } from "./queries"

// q: query, c: config
const requestConfigs = new Map([
  ["settings", {query: getSettingsQuery, config: { cache: "force-cache", next: { revalidate: false, tags: ["settings"] }}}]
])

export async function fetchSanity(key, data) {
  const { query, config } = requestConfigs.get(key)

  if (!query) {
    console.error("Can't find query for key", key)
    return null
  }

  try {
    const res = await client.fetch(query, config || {}, config || {})
    return res

  } catch (error) {
    console.error('error',error)
    return null
  }
}