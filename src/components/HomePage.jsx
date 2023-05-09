import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
        {/* Navbar begins here */}
        <div className=''>

          {/* Nav Logo */}
          <div>
            <img src="/images/logo.png" alt="logo" />
          </div>

          {/* search bar */}
          <div>
            <input type="text" />
            <button><img src="/images/search.svg" alt="search" /></button>
          </div>

          {/* Navn Links */}
          <div>
            <a href="#">Home</a>
            <a href="#">Cart</a>
            <a href="#">About Us</a>
            <a href="#">Sign Up</a>
            <a href="#">Login</a>
          </div>

        </div>
        {/* Navbar ends here */}

        {/* Title Image begins here */}
        <div className='bg-title h-full w-full'>
          <h1 className='text-center'>This is some text</h1>
        </div>
        {/* Title Image ends here */}
    </div>
  )
}

export default HomePage