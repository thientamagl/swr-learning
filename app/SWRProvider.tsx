"use client"
import React from "react"
import { SWRConfig, SWRConfiguration } from "swr"
import fetcher from "./services/fetcher"

type Props = {
  children: React.ReactNode
}

export default function SWRProvider({ children }: Props) {
  const configuration: SWRConfiguration = {
    fetcher,
    revalidateOnFocus: false,
  }

  return <SWRConfig value={configuration}>{children}</SWRConfig>
}
