import React, { useEffect } from 'react'
import './App.scss'
import Loader from './components/Loader'
import { ToastContainer } from 'react-toastify'
import Home from './pages/home/Home'
import Footer from './components/Footer'
import SignInPage from './pages/signin/signin'
import SignUpPage from './pages/signup/signup'
import Header from './components/Header'
import CategoryPage from './pages/category/category'
import Cart from './pages/cart/Cart'
import 'react-toastify/dist/ReactToastify.css'
import ShippingAddress from './pages/checkout/ShippingAddress'
import Payment from './pages/checkout/Payment'
import SeeAllProfile from './pages/seeAllPages/SeeAllProfile'
import SeeAllTrends from './pages/seeAllPages/SeeAllTrends'
import Wallet from './components/wallet/wallet'
import AddProduct from './pages/addProducts/AddProduct'
import StoreProfile from './components/store-profile/store-profile'
import AddImages from './pages/addProducts/AddImages'
import Demo from './pages/addProducts/Demo'
import AddCategory from './pages/addProducts/addSubCategories/AddCategory'
import EditProfile from './components/store-profile/edit-profile'
import { RequireAuth } from './components/RequireAuth'
import Reset from './components/resetpassword/reset'
import Otp from './components/resetpassword/otp'
import ChangePassword from './components/resetpassword/changepassword'
import ResetSuccess from './components/resetpassword/resetsuccess'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import SuccessfullSignUp from './components/signup/successfullSignUp'
import ProductDetails from './components/productDetails/ProductDetails'

function App() {
  axios.defaults.withCredentials = true

  function loadCart() {
    onload = () => {
      // axios.post('/ad/carts/').then((res) => {
      //   res.data
      // })
      localStorage.setItem('cartID', '351ab1cdcbcd4c0b95d9b83ce1331a9b')
    }
  }

  useEffect(() => {
    loadCart()
  }, [])

  return (
    <Routes>
      <Route exact path='/' element={<LandingPage />} />
      <Route exact path='/signin' element={<SignInPage />} />
      <Route exact path='/signup' element={<SignUpPage />} />
      <Route exact path='/successfullsignup' element={<SuccessfullSignUp />} />
      <Route path='/*' element={<Wrapper />} />
    </Routes>
  )
}

export default App

const Wrapper = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Loader />} />
        <Route exact path='/home' element={<Home />} />
        <Route path='/product/:category' element={<CategoryPage />} />
        <Route exact path='/products/:id' element={<ProductDetails />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route
          exact
          path='/shipping'
          element={
            <RequireAuth>
              <ShippingAddress />
            </RequireAuth>
          }
        />
        <Route
          exact
          path='/payment'
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        />
        <Route exact path='/seeAllProfile' element={<SeeAllProfile />} />
        <Route exact path='/seeAllTrends' element={<SeeAllTrends />} />
        <Route
          path='/wallet/:page'
          element={
            <RequireAuth>
              <Wallet />
            </RequireAuth>
          }
        />
        <Route
          path='profile'
          element={
            <RequireAuth>
              <StoreProfile />
            </RequireAuth>
          }
        />

        <Route path='profile' element={<StoreProfile />} />

        <Route path='addProduct' element={<AddProduct />} />
        <Route path='addImages' element={<AddImages />} />
        <Route path='/addCategory' element={<AddCategory />} />
        <Route path='/demo' element={<Demo />} />
        <Route
          path='/editProfile'
          element={
            <RequireAuth>
              <EditProfile />
            </RequireAuth>
          }
        />
        <Route path='addProduct' element={<AddProduct />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/otp' element={<Otp />} />
        <Route path='/changePassword' element={<ChangePassword />} />
        <Route path='/resetSuccess' element={<ResetSuccess />} />
      </Routes>
      <Footer />
      <ToastContainer position='bottom-right' />
    </div>
  )
}
