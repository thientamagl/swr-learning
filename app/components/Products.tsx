"use client"
import React from "react"
import { useCreateProduct } from "../services/mutation"
import { useProducts } from "../services/queries"

export default function Products() {
  const [inputValue, setInputValue] = React.useState("")

  const { data, isValidating } = useProducts()
  const { isMutating, trigger } = useCreateProduct()

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  function handleCreateProduct() {
    trigger(
      { title: inputValue },
      {
        onSuccess: () => setInputValue(""),
        optimisticData: data && [...data, { title: inputValue }], // add new item immediately, prevent long wait on UI
        rollbackOnError: true, // revert data if error
      }
    )
  }

  return (
    <div>
      <p>Products:</p>
      <ul>
        {data?.map((product, i) => (
          <li key={i}>{product.title}</li>
        ))}
      </ul>
      <input
        placeholder="Add product"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        onClick={handleCreateProduct}
        disabled={isMutating || isValidating}
      >
        {isMutating || isValidating ? "Creating..." : "Create"}
      </button>
    </div>
  )
}
