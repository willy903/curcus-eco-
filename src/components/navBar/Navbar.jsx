import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import {MdSearch} from 'react-icons/md'

import './navbar.css'
const Navbar = () => {
  return (
    <header>
      <div className='navbar'>
      <div className='logo'><h1>Curcus</h1></div>
      <div className='navlink'>
        <ul>
          <li>categories</li>
          <li>About us</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className='navlin2'>
          <MdSearch size={25} /><span>Search</span>
          <FiShoppingCart size={25}/>
          <div><h3 className='log'>Login</h3></div>
          <div><h3 className='sign'>Sign Up</h3></div>
      </div>
    </div>
    </header>
    
  )
}

export default Navbar