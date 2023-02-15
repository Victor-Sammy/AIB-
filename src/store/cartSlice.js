import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  shipAddress: {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        }
        toast.info('Increased product quantity', {
          position: 'bottom-left',
        })
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProductItem)
        toast.success('Product added to cart', {
          position: 'bottom-left',
        })
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        )

        state.cartItems = nextCartItems

        toast.error('Product removed from cart', {
          position: 'bottom-left',
        })
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    increaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      if (state.cartItems[itemIndex].cartQuantity >= 1) {
        state.cartItems[itemIndex].cartQuantity += 1
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeFromCart(state, action) {
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
      toast.error('Product removed from cart', {
        position: 'bottom-left',
      })
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem
          const itemTotal = price * cartQuantity

          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity

          return cartTotal
        },
        {
          total: 0,
          quantity: 0,
        }
      )
      total = parseFloat(total.toFixed(2))
      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
    },
    clearCart(state, action) {
      state.cartItems = []
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      toast.error('Cart cleared', { position: 'bottom-left' })
    },
    saveShippingAddress(state, action) {
      let data = action.payload
      state.shippingAddress.push(data)
      localStorage.setItem('shippingAddress', JSON.stringify(data))
    },
  },
})

export const {
  addToCart,
  decreaseCart,
  increaseCart,
  removeFromCart,
  getTotals,
  clearCart,
  saveShippingAddress,
} = cartSlice.actions

export default cartSlice.reducer
