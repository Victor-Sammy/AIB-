import axios from 'axios'
import env from '../../Api'

const { API_URL } = env

const cartId = localStorage.getItem('cartID')

export const getCart = () => {
  axios.get(`${API_URL}/ad/carts/${cartId}/`).then((response) => {
    console.log(response.data)
    const data = response.data
    console.log(data)
    const total = response.data.total
    console.log(total)
    localStorage.setItem('total', total)
  })
}
