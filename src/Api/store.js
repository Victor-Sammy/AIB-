import { client } from './Api'

export const getStoreItems = async () => {
  const accessToken = localStorage.getItem('USER_ACCESS_TOKEN')
  try {
    if (accessToken) {
      return client.get('ad/store/')
    } else {
      return null
    }
  } catch {
    return null
  }
  //   const data = await (await response).data?.results[0].store_product
}
