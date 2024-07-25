import { axiosInstance } from "./fetcher"

export async function createProduct(
  url: string,
  { arg }: { arg: { title: string } }
) {
  await axiosInstance.post(url, { title: arg.title })
}
