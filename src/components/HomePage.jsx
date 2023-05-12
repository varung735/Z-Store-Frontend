import React, { useState } from 'react';

const HomePage = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className='bg-off-white'>
        {/* Navbar begins here */}
        <div className='flex flex-col items-center justify-between bg-off-white'>

          {/* Nav Logo */}
          <div className='w-full flex flex-row justify-between items-center p-2'>
            <img src="/images/bars.svg" alt="bars" className='h-[40px] w-[40px]' onClick={() => {setDrawer(!drawer)}}/>
            <img src="/images/logo.png" alt="logo" className='h-[50px] w-[150px]' />
          </div>

          { drawer &&  <div className='w-full flex flex-col items-center'>

            {/* search bar */}
            <div className='p-2 flex items-center gap-1 w-full'>
              <input type="text" placeholder='Search...' className='w-full border border-black rounded-md p-1'/>
              <button className='h-full'>
                <img src="./images/search.svg" alt="search" className='w-[30px] h-[25px]'/>
              </button>
            </div>

            {/* Navn Links */}
            <div className='w-full flex flex-col'>
              <a href="#" className='p-3 w-full text-center text-xl font-medium hover:bg-black hover:text-white'>Home</a>
              <a href="#" className='p-3 w-full text-center text-xl font-medium hover:bg-black hover:text-white'>Cart</a>
              <a href="#" className='p-3 w-full text-center text-xl font-medium hover:bg-black hover:text-white'>About Us</a>
              <a href="#" className='p-3 w-full text-center text-xl font-medium hover:bg-black hover:text-white'>Sign Up</a>
              <a href="#" className='p-3 w-full text-center text-xl font-medium hover:bg-black hover:text-white'>Login</a>
            </div>

          </div>}

          

        </div>
        {/* Navbar ends here */}

        {/* Title Image begins here */}
        <div className='h-[92vh] bg-mobile-title bg-cover bg-no-repeat'>

          <div className='h-full w-full flex flex-col items-center justify-center backdrop-brightness-50'>
            <h1 className="text-center text-white text-6xl leading-12">Welcome to Z-Store</h1>
            <p className='m-4 text-white text-lg'>All-in-one e-commerce platform</p>
          </div>
          
        </div>
        {/* Title Image ends here */}

        {/* Cards section begins here */}
        <div className='mb-2 p-1'>

          <h1 className="text-center text-5xl mt-3 mb-3">Shop For</h1>

        {/* cards */}
        <div className='flex flex-col items-center'>

          {/* card */}
          <div className='mt-3 h-[400px] w-[375px] bg-women bg-cover bg-no-repeat'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Women's</h1>
            </div>
          </div>

          {/* card */}
          <div className='mt-3 h-[400px] w-[375px] bg-men bg-cover bg-no-repeat'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Men's</h1>
            </div>
          </div>

          {/* card */}
          <div className='mt-3 h-[400px] w-[375px] bg-kids bg-cover bg-no-repeat'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Kid's</h1>
            </div>
          </div>

          {/* card */}
          <div className='mt-3 h-[400px] w-[375px] bg-cosmetics bg-cover bg-no-repeat'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Cosmetics</h1>
            </div>
          </div>
          {/* card */}

          <div className='mt-3 h-[400px] w-[375px] bg-jewelry bg-cover bg-no-repeat'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Jewelry</h1>
            </div>
          </div>

          {/* card */}
          <div className='mt-3 h-[400px] w-[375px] bg-bags bg-cover bg-no-repeat'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Bags</h1>
            </div>
          </div>

        </div>
          
        </div>
        {/* Cards section ends here */}

        {/* Banner Section Begins Here */}
        <div className='h-[600px] bg-woman-with-ring bg-cover bg-no-repeat'>
          <div className='h-full w-full backdrop-brightness-50 flex flex-col justify-center items-center gap-2'>
            <h1 className='text-5xl text-white'>End of Season Sale</h1>
            <p className='text-lg text-white underline'>40% off on all jewelries</p>
          </div>
        </div>
        {/* Banner Section Ends Here */}

        {/* Carousal Section Begins Here */}
        <div>
          
        </div>
        {/* Carousal Section Ends Here */}
    </div>
  )
}

export default HomePage