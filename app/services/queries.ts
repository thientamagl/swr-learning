import useSWR from "swr"
import useSWRInfinite from "swr/infinite"

import type { Cart } from "../types/cart"
import type { User } from "../types/user"
import type { Product } from "../types/product"
import type { Post } from "../types/post"
import type { Todo } from "../types/todo"

import { logger } from "../utils/logger"

export function useUser() {
  return useSWR<User>("/user")
}

export function useCart() {
  const { data } = useUser()

  return useSWR<Cart>(data ? "/cart" : null)
}

export function useProducts() {
  return useSWR<Product[]>("/products", {
    use: [logger], // middleware
  })
}

export function usePosts(pageIndex: number) {
  return useSWR<Post[]>(`/posts?_limit=3&_page=${pageIndex}`)
}

export function useTodos() {
  const getKey = (pageIndex: number, previousPageData: Todo[]) => {
    if (previousPageData && !previousPageData.length) return null
    return `/todos?_page=${pageIndex + 1}&_limit=3`
  }

  return useSWRInfinite<Todo[]>(getKey)
}
