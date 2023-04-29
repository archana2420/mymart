import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import ProductContainer from './components/ProductContainer'

import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { getProducts } from './features/cart/productsSlice'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Cart from './components/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { calculateNoOfItems } from './features/cart/cartSlice'
import StripeContainer from './components/StripeContainer'

function App() {
  const dispatch = useDispatch()
  const {cartList} = useSelector((state)=>state.cart)
  useEffect(()=>{
    dispatch(getProducts())
  },[])
  useEffect(()=>{
    dispatch(calculateNoOfItems())
  },[cartList])

  return (
    <>
    <Router>
    <Navbar></Navbar>
    <ToastContainer />
    
      <Routes>
      
        <Route path='/' element={<ProductContainer></ProductContainer>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/payment' element={
          <StripeContainer/>
        }></Route>
      
      </Routes>
    
    </Router>
      
    </>
  )
}

export default App
