import React, { useState } from 'react'
import ReviewProp from '../props/ReviewProp';

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
      <div className='flex flex-col'>
        
        {/* picture & details holder begins here */}
        <div className='p-5 w-full flex flex-col lg:flex-row'>

          {/* Picture carousal */}
          <div className='w-full flex items-center justify-center'>
             {/*Left Arrow */}
            <div className='mr-2 flex items-center justify-center bg-blackish rounded-full h-[30px] w-[30px] cursor-pointer'>
              <div className='ml-1 border-b-2 border-l-2 border-white rotate-45 h-[10px] w-[10px]'></div>
            </div>
            {/* Images */}
            <div className='w-[80%]'>
              <img src="./images/shampoo.jpg" alt="" className='w-full h-[400px]'/>
            </div>
            {/* Right Arrow */}
            <div className='ml-2 flex items-center justify-center bg-blackish rounded-full h-[30px] w-[30px] cursor-pointer'>
              <div className='mr-1 border-t-2 border-r-2 border-white rotate-45 h-[10px] w-[10px]'></div>
            </div>
          </div>

          {/* Product details */}
          <div className='w-full p-4'>
            <h1 className='mb-5 text-3xl text-center lg:text-start font-medium'>Product Name</h1>
            <p className='mb-5 text-center lg:text-start font-normal text-lg leading-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil cumque,
              ab dolor a repudiandae quasi tempora. Magni, expedita quod.
            </p>
            <p className='mb-2 text-center lg:text-start text-md'>Price: 2999/-</p>
            <p className='text-center lg:text-start text-md'>Size: M</p>

            {/* buttons */}
            <div className='mt-5 flex flex-col lg:flex-row gap-3'>
              <button className='w-full lg:w-1/2 bg-blackish p-4 text-white rounded-md cursor-pointer'>Add to Cart</button>
              <button className='w-full lg:w-1/2 bg-blackish p-4 text-white rounded-md cursor-pointer'>Buy Now</button>
            </div>
          </div>

        </div>
        {/* picture & details holder ends here */}

        {/* Review Section Begins Here */}
        <div className='mt-4 flex flex-col'>

          <h1 className='text-center text-3xl font-medium'>Product Reviews</h1>

          {/* Text Area */}
          <div className='p-4 mt-4 border-b border-black'>
            <label htmlFor="review" className='text-md'>Write your review for this product</label>
            <textarea name="review" id="review-text-area" placeholder='Write your thoughts here..' 
              className='p-2 mt-1 w-full h-[100px] border border-black rounded-md'></textarea>
          </div>

          {/* Reviews */}
          <div className='flex flex-col items-center'>
            <ReviewProp />
            <ReviewProp />
            <ReviewProp />
            <ReviewProp />
          </div>

        </div>
        {/* Review Section Ends Here */}

      </div>
      {/* Product Display, and reviews ends here */}

    </div>
  )
}

export default ProductDisplayPage