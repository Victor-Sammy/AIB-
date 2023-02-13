import axios from 'axios'
import { useReducer } from 'react'
import env from '../../Api'
import CartContext from './CartContext'

const { API_URL } = env

const cartId = localStorage.getItem('cartID')

const CartState = ({ children }) => {
  const initalState = {
    //showCart: false,
    cartItems:
      // axios
      //   .get(`${API_URL}/ad/carts/${cartId}/items/`)
      //   .then((response) => {
      //     console.log(response)
      //     const data = response.data
      //     console.log(data)
      //   }),
      [],
  }

  const [state, dispatch] = useReducer(initalState)

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartState
