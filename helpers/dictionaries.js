'use server'

export async function getDicitionaries() {
  const response = await fetch(`${process.env.HOST}/api/get-dictionaries`, { cache: 'force-cache', next: { revalidate: false, tags: ['settings'] } })
  const result = await response.json()

  return result
}
