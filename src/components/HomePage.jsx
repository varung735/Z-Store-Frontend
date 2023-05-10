import React, { useState } from 'react';

const HomePage = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div>
        {/* Navbar begins here */}
        <div className='flex flex-col items-center justify-between bg-off-white'>

          {/* Nav Logo */}
          <div className='w-full flex flex-row justify-between items-center p-2'>
            <img src="/images/bars.svg" alt="bars" className='h-[40px] w-[40px]' onClick={() => {setDrawer(!drawer)}}/>
            <img src="/images/logo.png" alt="logo" className='h-[50px] w-[150px]' />
          </div>

          { drawer &&  <div className='w-full flex flex-col items-center transition-all ease-in-out duration-300'>

            {/* search bar */}
            <div className='p-2 flex items-center gap-1 w-full'>
              <input type="text" placeholder='Search...' className='w-full border border-black rounded-md p-1'/>
              <button className='h-full'>
                <img src="./images/search.svg" alt="search" className='w-[30px] h-[25px]'/>
              </button>
            </div>

            {/* Navn Links */}
            <div className='w-full flex flex-col'>
              <a href="#" className='p-3 w-full text-center font-medium hover:bg-black hover:text-white'>Home</a>
              <a href="#" className='p-3 w-full text-center font-medium hover:bg-black hover:text-white'>Cart</a>
              <a href="#" className='p-3 w-full text-center font-medium hover:bg-black hover:text-white'>About Us</a>
              <a href="#" className='p-3 w-full text-center font-medium hover:bg-black hover:text-white'>Sign Up</a>
              <a href="#" className='p-3 w-full text-center font-medium hover:bg-black hover:text-white'>Login</a>
            </div>

          </div>}

          

        </div>
        {/* Navbar ends here */}

        {/* Title Image begins here */}
        <div className='h-[92vh] bg-mobile-title'>

          <div className='h-full w-full flex flex-col items-center justify-center backdrop-brightness-50'>
            <h1 className="text-center text-white text-6xl leading-12">Welcome to Z-Store</h1>
            <p className='m-4 text-white text-lg'>All-in-one e-commerce platform</p>
          </div>
          
        </div>
        {/* Title Image ends here */}


    </div>
  )
}

export default HomePage