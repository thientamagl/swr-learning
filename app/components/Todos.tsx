"use client"
import { useTodos } from "../services/queries"

export default function Todos() {
  const { data, setSize, size } = useTodos()

  function handleLoadMore() {
    setSize(size + 1)
  }

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <p>Todos</p>
      {data.map((todos) => {
        return todos.map((todo) => <div key={todo.id}>{todo.title}</div>)
      })}
      <button onClick={handleLoadMore}>Load more</button>
    </div>
  )
}
