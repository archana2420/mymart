import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { calculateNoOfItems } from '../features/cart/cartSlice'


const Navbar = () => {
  const dispatch = useDispatch()
  const {no_of_items} = useSelector((state)=>state.cart)
  // useEffect(()=>{
  //   dispatch(calculateNoOfItems())
  // },[no_of_items])
  return (
    <nav className='w-full border-b-2 drop-shadow-2xl  p-4'>
        <ul className='list-none mx-3 flex  justify-between'>
          <Link to="/">
          <li className='text-base text-black font-bold md:text-2xl'>My Mart</li>

          </Link>
            <Link to="/cart">
            <li className='relative text-white' ><i className="fa-solid fa-cart-shopping fa-xl text-black z-3 "></i><span className='absolute -ml-2 -mt-2 px-1 text-xs text-black border-2 border-black rounded-full bg-white font-bold z-6'>{no_of_items}</span></li>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar