"use client"
import { usePosts } from "../services/queries"

type Props = {
  pageIndex: number
}

export default function Posts({ pageIndex }: Props) {
  const { data, error, isLoading } = usePosts(pageIndex)

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>Error</p>

  return (
    <div>
      <p>Posts</p>
      <ul>
        {data?.map((post, i) => (
          <li key={i}>
            <p>Title: {post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
