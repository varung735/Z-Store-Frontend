import React, { useState } from 'react';

const HomePage = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className='bg-off-white h-[100vh]'>
      {/* Navbar begins here */}
      <div className='lg:hidden flex flex-col lg:flex-row items-center justify-between bg-off-white'>

        {/* Nav Logo */}
        <div className='w-full lg:w-[10%] flex flex-row justify-between items-center p-2'>
          <img src="/images/bars.svg" alt="bars" className='h-[40px] w-[40px] lg:hidden' onClick={() => { setDrawer(!drawer) }} />
          <img src="/images/logo.png" alt="logo" className='h-[50px] w-[150px]' />
        </div>

        {/* drawer for mobile display stays hidden in larger displays */}
        {drawer && <div className='w-full flex flex-col items-center'>

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
            <a href="#about-us" className='p-3 w-full text-center text-xl md:text-3xl font-medium hover:bg-black hover:text-white'>About Us</a>
            <a href="#" className='p-3 w-full text-center text-xl md:text-3xl font-medium hover:bg-black hover:text-white'>Sign Up</a>
            <a href="#" className='p-3 w-full text-center text-xl md:text-3xl font-medium hover:bg-black hover:text-white'>Login</a>
          </div>

        </div>}

      </div>
      {/* Navbar ends here */}

      {/* navbar for larger displays begins here*/}
      <div className='hidden lg:w-full lg:flex lg:flex-row lg:items-center lg:justify-between bg-off-white'>

        {/* Nav Logo */}
        <div className='w-[20%] flex flex-row justify-between items-center p-2'>
          <img src="/images/bars.svg" alt="bars" className='h-[40px] w-[40px] lg:hidden' onClick={() => { setDrawer(!drawer) }} />
          <img src="/images/logo.png" alt="logo" className='h-[50px] w-[150px]' />
        </div>

        {/* search bar for mobile displays*/}
        <div className='p-2 w-[30%] flex items-center gap-3'>
          <input type="text" placeholder='Search...' className='w-full border border-black rounded-md p-1' />
          <button className='h-full'>
            <img src="./images/search.svg" alt="search" className='w-[30px] h-[25px]' />
          </button>
        </div>

        {/* Nav Links for mobile displays */}
        <div className='w-[30%] pr-3 flex items-center justify-end gap-2'>
          <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Home</a>
          <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Cart</a>
          <a href="#about-us" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>About Us</a>
          <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Sign Up</a>
          <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Login</a>
        </div>

      </div>
      {/* navbar for larger displays ends here*/}

      {/* Title Image begins here */}
      <div className='h-[92vh] md:h-[94vh] bg-mobile-title md:bg-tablet-title lg:bg-title bg-cover bg-no-repeat'>

        <div className='h-full w-full flex flex-col items-center justify-center backdrop-brightness-50'>
          <h1 className="text-center text-white text-6xl md:text-7xl leading-12">Welcome to Z-Store</h1>
          <p className='m-4 text-white text-lg md:text-xl'>All-in-one e-commerce platform</p>
        </div>

      </div>
      {/* Title Image ends here */}

      {/* Cards section begins here */}
      <div className='mb-2 p-1'>

        <h1 className="text-center text-5xl mt-3 mb-3">Shop For</h1>

        {/* cards */}
        <div className='flex flex-col md:flex-row md:flex-wrap md:gap-5 md:justify-center items-center'>

          {/* card */}
          <div className='mt-3 h-[400px] w-[350px] bg-women bg-cover bg-no-repeat hover:cursor-pointer'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Women's</h1>
            </div>
          </div>

          {/* card */}
          <div className='mt-3 h-[400px] w-[350px] bg-men bg-cover bg-no-repeat hover:cursor-pointer'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Men's</h1>
            </div>
          </div>

          {/* card */}
          <div className='mt-3 h-[400px] w-[350px] bg-kids bg-cover bg-no-repeat hover:cursor-pointer'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Kid's</h1>
            </div>
          </div>

          {/* card */}
          <div className='mt-3 h-[400px] w-[350px] bg-cosmetics bg-cover bg-no-repeat hover:cursor-pointer'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Cosmetics</h1>
            </div>
          </div>

          {/* card */}
          <div className='mt-3 h-[400px] w-[350px] bg-jewelry bg-cover bg-no-repeat hover:cursor-pointer'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Jewelry</h1>
            </div>
          </div>

          {/* card */}
          <div className='mt-3 h-[400px] w-[350px] bg-bags bg-cover bg-no-repeat hover:cursor-pointer'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Bags</h1>
            </div>
          </div>

        </div>

      </div>
      {/* Cards section ends here */}

      {/* Banner Section Begins Here */}
      <div className='h-[600px] lg:h-[700px] bg-woman-with-ring md:bg-woman-with-jewelary-tab lg:bg-women-with-jewelry bg-cover bg-no-repeat'>
        <div className='h-full w-full backdrop-brightness-50 flex flex-col justify-center items-center gap-2'>
          <h1 className='text-5xl md:text-6xl text-white'>End of Season Sale</h1>
          <p className='text-lg md:text-xl text-white underline'>40% off on all jewelries</p>
        </div>
      </div>
      {/* Banner Section Ends Here */}

      {/* About Us Section Begins Here */}
      <div className='p-3 border-b border-black' id='about-us'>

        <h1 className='mb-4 text-center text-6xl'>About Us</h1>

        <p className='p-2 text-center text-lg md:text-2xl lg:text-lg font-normal leading-7'>
          Welcome to Z-Store. We are best platform buying and selling for the items in our allowed categories.
          If you want to buy or sell the related items for clothing, bags or cosmetics. Then, you are at the right
          place. We host the wide array of the men's, women's and kid's clothing, bags or cosmetics. Buy the best
          items, clothing, cosmetics from best sellers, fashion-houses or brands from the comfort of your home and
          get it delivered right at your door step.
        </p>

        <h2 className='mt-2 text-2xl md:text-4xl lg:text-3xl underline'>Best Shopping Store Available in India</h2>

        <ul className='mt-5 pl-5 list-disc'>

          <li className='mt-2 md:mt-4'>
            <p className='md:text-2xl lg:text-lg'>
              <span className='text-lg md:text-2xl lg:text-lg font-medium'>Men's Clothing - </span> Get latest men's
              fashion wear in z-store. Have the most iconic and stylish fashion wear for men.
              ranging from casual to party wear. We have most ranges of party wear, casual, formal
              and active wear in many colors. Get your wardrobe updated with latest fashion with us.
            </p>
          </li>

          <li className='mt-2 md:mt-4'>
            <p className='md:text-2xl lg:text-lg'>
              <span className='text-lg md:text-2xl lg:text-lg font-medium'>Women's Clothing - </span> Get latest men's
              fashion wear in z-store. Have the most iconic and stylish fashion wear for men.
              ranging from casual to party wear. We have most ranges of party wear, casual, formal
              and active wear in many colors. Get your wardrobe updated with latest fashion with us.
            </p>
          </li>

          <li className='mt-2 md:mt-4'>
            <p className='md:text-2xl lg:text-lg'>
              <span className='text-lg md:text-2xl lg:text-lg font-medium'>Kid's Clothing - </span> Get latest men's
              fashion wear in z-store. Have the most iconic and stylish fashion wear for men.
              ranging from casual to party wear. We have most ranges of party wear, casual, formal
              and active wear in many colors. Get your wardrobe updated with latest fashion with us.
            </p>
          </li>

          <li className='mt-2 md:mt-4'>
            <p className='md:text-2xl lg:text-lg'>
              <span className='text-lg md:text-2xl lg:text-lg font-medium'>Cosmetics - </span> Get latest men's
              fashion wear in z-store. Have the most iconic and stylish fashion wear for men.
              ranging from casual to party wear. We have most ranges of party wear, casual, formal
              and active wear in many colors. Get your wardrobe updated with latest fashion with us.
            </p>
          </li>

          <li className='mt-2 md:mt-4'>
            <p className='md:text-2xl lg:text-lg'>
              <span className='text-lg md:text-2xl lg:text-lg font-medium'>Bags - </span> Get latest men's
              fashion wear in z-store. Have the most iconic and stylish fashion wear for men.
              ranging from casual to party wear. We have most ranges of party wear, casual, formal
              and active wear in many colors. Get your wardrobe updated with latest fashion with us.
            </p>
          </li>

          <li className='mt-2 md:mt-4'>
            <p className='md:text-2xl lg:text-lg'>
              <span className='text-lg md:text-2xl lg:text-lg font-medium'>Jewelries - </span> Get latest men's
              fashion wear in z-store. Have the most iconic and stylish fashion wear for men.
              ranging from casual to party wear. We have most ranges of party wear, casual, formal
              and active wear in many colors. Get your wardrobe updated with latest fashion with us.
            </p>
          </li>

        </ul>

      </div>
      {/* About Us Section Ends Here */}

      {/* Customer Review Begins Here */}
      <div>

        <h1 className='mb-4 md:mt-5 text-center text-6xl'>Customer Reviews</h1>

        {/* Customer Review Cards */}
        <div className='p-5 md:p-0 md:pb-4 flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4 md:gap-4'>
          {/* card */}
          <div className='md:w-[45%] bg-white flex flex-col items-center rounded-xl shadow-lg'>

            <div className='p-4 text-center border-b border-black md:text-lg'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quod enim illo voluptatibus impedit nemo,
              cupiditate id exercitationem, repudiandae sapiente doloribus deserunt odio minima adipisci consequatur, quas
              alias corporis perspiciatis?
            </div>

            <div className='p-3 w-full flex items-center justify-center gap-3'>
              <img src="./images/avatar.svg" alt="avatar" className='h-[50px] w-[50px]' />
              <h1 className='md:text-xl'>Micheal Sanders</h1>
            </div>

          </div>

          {/* card */}
          <div className='md:w-[45%] bg-white flex flex-col items-center rounded-xl shadow-lg'>

            <div className='p-4 text-center border-b border-black md:text-lg'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quod enim illo voluptatibus impedit nemo,
              cupiditate id exercitationem, repudiandae sapiente doloribus deserunt odio minima adipisci consequatur, quas
              alias corporis perspiciatis?
            </div>

            <div className='p-3 w-full flex items-center justify-center gap-3'>
              <img src="./images/avatar.svg" alt="avatar" className='h-[50px] w-[50px]' />
              <h1 className='md:text-xl'>Micheal Sanders</h1>
            </div>

          </div>

          {/* card */}
          <div className='md:w-[45%] bg-white flex flex-col items-center rounded-xl shadow-lg'>

            <div className='p-4 text-center border-b border-black md:text-lg'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quod enim illo voluptatibus impedit nemo,
              cupiditate id exercitationem, repudiandae sapiente doloribus deserunt odio minima adipisci consequatur, quas
              alias corporis perspiciatis?
            </div>

            <div className='p-3 w-full flex items-center justify-center gap-3'>
              <img src="./images/avatar.svg" alt="avatar" className='h-[50px] w-[50px]' />
              <h1 className='md:text-xl'>Micheal Sanders</h1>
            </div>

          </div>

          {/* card */}
          <div className='md:w-[45%] bg-white flex flex-col items-center rounded-xl shadow-lg'>

            <div className='p-4 text-center border-b border-black md:text-lg'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quod enim illo voluptatibus impedit nemo,
              cupiditate id exercitationem, repudiandae sapiente doloribus deserunt odio minima adipisci consequatur, quas
              alias corporis perspiciatis?
            </div>

            <div className='p-3 w-full flex items-center justify-center gap-3'>
              <img src="./images/avatar.svg" alt="avatar" className='h-[50px] w-[50px]' />
              <h1 className='md:text-xl'>Micheal Sanders</h1>
            </div>

          </div>
        </div>

      </div>
      {/* Customer Review Ends Here */}

      {/* footer Begins Here*/}
      <div className='pt-5 bg-blackish text-white flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8'>

        {/* logo and social links*/}
        <div className='w-full md:pl-4 md:pr-4 pb-5 flex flex-col md:flex-row items-center md:justify-between gap-5 border-b'>
          <img src="./images/logo.png" alt="logo" />

          {/* Social links */}
          <div className='flex flex-wrap gap-3'>
            <img src="./images/linkedin.svg" alt="linked-in" className='invert h-[50px] w-[50px] hover:cursor-pointer' />
            <img src="./images/facebook.svg" alt="facebook" className='invert h-[50px] w-[50px] hover:cursor-pointer' />
            <img src="./images/instagram.svg" alt="instagram" className='invert h-[50px] w-[50px] hover:cursor-pointer' />
            <img src="./images/twitter.svg" alt="twitter" className='invert h-[50px] w-[50px] hover:cursor-pointer' />
          </div>

        </div>

        {/* links */}
        <div className='w-full flex flex-wrap items-start justify-evenly'>

          {/* useful links */}
          <div className='flex flex-col items-center justify-center'>
            <h1 className='mb-2 text-2xl font-medium'>Useful Links</h1>
            <ul className='text-center'>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>Men</li>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>Women</li>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>Kids</li>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>Cosmetics</li>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>Bags</li>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>Jewelry</li>
            </ul>
          </div>

          {/* customer links */}
          <div className='flex flex-col items-center justify-center'>
            <h1 className='mb-2 text-2xl font-medium'>Customer Links</h1>
            <ul className='text-center'>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>FAQ's</li>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>Return Policy</li>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>Sitemap</li>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>Terms & Conditions</li>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>Customer Policy</li>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>Contact Us</li>
            </ul>
          </div>
          
          {/* customer links */}
          <div className='flex flex-col items-center justify-center'>
            <h1 className='mb-2 text-2xl font-medium'>Feel Inspired</h1>
            <ul className='text-center'>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>Blogs</li>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>Offers</li>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>Z-Store Netwrok</li>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>Buying Guide</li>
              <li className='mb-1 font-thin text-lg underline hover:cursor-pointer'>Z-Store Pro</li>
            </ul>
          </div>

          {/* Address */}
          <div className='flex flex-col items-center justify-center'>
            <h1 className='mb-2 text-xl font-medium'>Address</h1>
            <h1 className='text-lg'>DC-XY 23-Street,</h1>
            <h1 className='text-lg'>XYZ State, Mumbai</h1>
            <h1 className='text-lg'>Maharastra, 789132</h1>
          </div>
        </div>

      </div>
      {/* footer Ends Here*/}
    </div>
  )
}

export default HomePage