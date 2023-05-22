import React, { useState } from 'react'

function ProductDisplayPage() {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className='bg-off-white'>

      {/* Navbar begins here */}
      <div className='lg:hidden flex flex-col lg:flex-row items-center justify-between bg-off-white'>

        {/* Nav Logo */}
        <div className='w-full lg:w-[10%] flex flex-row justify-between items-center p-2'>
          <img src="/images/bars.svg" alt="bars" className='h-[40px] w-[40px] lg:hidden' onClick={() => { setDrawer(!drawer) }} />
          <img src="/images/logo.png" alt="logo" className='h-[50px] w-[150px]' />
        </div>

        {/* drawer for mobile display stays hidden in larger displays */}
        {drawer && <div className='w-full flex flex-col items-center border-b border-black'>

          {/* search bar for mobile displays*/}
          <div className='p-2 flex items-center gap-1 w-full'>
            <input type="text" placeholder='Search...' className='w-full border border-black rounded-md p-1' />
            <button className='h-full'>
              <img src="./images/search.svg" alt="search" className='w-[30px] h-[25px]' />
            </button>
          </div>

          {/* Nav Links for mobile displays */}
          <div className='w-full flex flex-col'>
            <a href="#" className='p-3 w-full text-center text-xl md:text-3xl font-medium hover:bg-black hover:text-white'>Home</a>
            <a href="#" className='p-3 w-full text-center text-xl md:text-3xl font-medium hover:bg-black hover:text-white'>Cart</a>
            <a href="#" className='p-3 w-full text-center text-xl md:text-3xl font-medium hover:bg-black hover:text-white'>Sign Up</a>
            <a href="#" className='p-3 w-full text-center text-xl md:text-3xl font-medium hover:bg-black hover:text-white'>Login</a>
          </div>

        </div>}

      </div>
      {/* Navbar ends here */}

      {/* navbar for larger displays begins here*/}
      <div className='hidden lg:w-full lg:flex lg:flex-row lg:items-center lg:justify-between bg-off-white border-b border-black'>

        {/* Nav Logo */}
        <div className='w-[20%] flex flex-row justify-between items-center p-2'>
          <img src="/images/bars.svg" alt="bars" className='h-[40px] w-[40px] lg:hidden' onClick={() => { setDrawer(!drawer) }} />
          <img src="/images/logo.png" alt="logo" className='h-[50px] w-[150px]' />
        </div>

        {/* search bar for larger displays*/}
        <div className='p-2 w-[30%] flex items-center gap-3'>
          <input type="text" placeholder='Search...' className='w-full border border-black rounded-md p-1' />
          <button className='h-full'>
            <img src="./images/search.svg" alt="search" className='w-[30px] h-[25px]' />
          </button>
        </div>

        {/* Nav Links for larger displays */}
        <div className='w-[30%] pr-3 flex items-center justify-end gap-2'>
          <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Home</a>
          <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Cart</a>
          <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Sign Up</a>
          <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Login</a>
        </div>

      </div>
      {/* navbar for larger displays ends here*/}

      {/* Product Display, and reviews begins here */}
      <div className=''>
        
        {/* picture & details holder begins here */}
        <div className=''>

          {/* Picture carousal */}
          <div>
            
          </div>

          {/* Product details */}
          <div>

          </div>

        </div>
        {/* picture & details holder begins here */}

      </div>
      {/* Product Display, and reviews ends here */}

    </div>
  )
}

export default ProductDisplayPage