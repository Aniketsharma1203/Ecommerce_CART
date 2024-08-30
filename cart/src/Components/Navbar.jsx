import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <>
      <div className='flex justify-around items-center pt-3 bg-slate-400'>

        <NavLink to="/" className='font-semibold font-montserrat'>Home</NavLink>
        <NavLink to="/Cart" className='font-semibold font-montserrat'><FaShoppingCart /></NavLink>

      </div>
    </>
  )
}
