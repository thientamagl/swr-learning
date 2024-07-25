import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
})

async function fetcher(url: string) {
  const res = await axiosInstance.get(url)
  const data = res.data
  return data
}

export default fetcher
