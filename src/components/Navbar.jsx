import React from 'react'

const Navbar = () => {
  return (
    <nav className='agency__navbar'>
      <div className='container f-center'>
        <div className='agency__navbar-logo'>
          <h1>Agency</h1>
        </div>
        <div className='agency__navbar-nav'>
          <ul className='agency__navbar-nav_list f-center'>
            <li className='agency__navbar-nav_list-item'>Home</li>
            <li className='agency__navbar-nav_list-item'>About Us</li>
            <li className='agency__navbar-nav_list-item'>Service</li>
            <li className='agency__navbar-nav_list-item'>Pricing</li>
          </ul>
        </div>
        <div className='agency__navbar-square'>
          <div className='agency__navbar-square_button'>
            <button>Sign Up</button>
          </div>
          <div className='agency__navbar-square_item'/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar