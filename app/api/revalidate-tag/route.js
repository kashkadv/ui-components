import { revalidateTag } from "next/cache"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const tag = searchParams.get('tag')

  if (!tag) return new Response('Invalid tag', { status: 400 })

  revalidateTag(tag)

  return new Response('revalidate-tag')
}