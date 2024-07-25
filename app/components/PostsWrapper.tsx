"use client"
import React from "react"
import Posts from "./Posts"

export default function PostsWrapper() {
  const [pageIndex, setPageIndex] = React.useState(1)

  function handlePrev() {
    setPageIndex((prev) => Math.max(prev - 1, 0))
  }

  function handleNext() {
    setPageIndex((prev) => prev + 1)
  }

  return (
    <div>
      <Posts pageIndex={pageIndex} />
      <div style={{ display: "none" }}>
        <Posts pageIndex={pageIndex + 1} />
      </div>
      <button onClick={handlePrev}>Prev</button>
      <span
        style={{
          display: "inline-block",
          margin: "0 16px",
        }}
      >
        {pageIndex}
      </span>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}
