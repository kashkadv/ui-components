'use server'

import { client } from "@/sanity/client"
import { getSettingsQuery } from "@/sanity/queries"

export const getSettings = async () => {
  const res = client.fetch(
    {
      query: getSettingsQuery,
      config: {
        cache: "force-cache",
        next: {
          tags: ["settings"]
        }
      }
    }
  )
}

