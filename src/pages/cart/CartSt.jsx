import axios from 'axios'

const cartId = localStorage.getItem('cartID')

export const getCart = () => {
  return axios.get(`/ad/carts/${cartId}/`).then((response) => {
    console.log(response.data)
    const data = response.data
    console.log(data)
    const tot = data.total
    console.log(tot)

    return data.total
  })
}
