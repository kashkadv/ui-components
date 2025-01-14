'use server'

export async function getDicitionaries() {
  const response = await fetch('http://localhost:3000/api/get-dictionaries', { cache: 'force-cache', next: { revalidate: false, tags: ['settings'] } })
  return await response.json()
}
