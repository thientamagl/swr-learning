"use client"
import { useCart, useUser } from "../services/queries"

export default function Cart() {
  const userQuery = useUser()
  const cartQuery = useCart()

  return (
    <div>
      <p>Cart</p>
      <div>User: {userQuery.data?.userName}</div>
      <div>Total: {cartQuery.data?.totalCost}</div>
    </div>
  )
}
