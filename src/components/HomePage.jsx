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
              <a href="#about-us" className='p-3 w-full text-center text-xl font-medium hover:bg-black hover:text-white'>About Us</a>
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
          <div className='mt-3 h-[400px] w-[350px] bg-women bg-cover bg-no-repeat'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Women's</h1>
            </div>
          </div>

          {/* card */}
          <div className='mt-3 h-[400px] w-[350px] bg-men bg-cover bg-no-repeat'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Men's</h1>
            </div>
          </div>

          {/* card */}
          <div className='mt-3 h-[400px] w-[350px] bg-kids bg-cover bg-no-repeat'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Kid's</h1>
            </div>
          </div>

          {/* card */}
          <div className='mt-3 h-[400px] w-[350px] bg-cosmetics bg-cover bg-no-repeat'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Cosmetics</h1>
            </div>
          </div>
          {/* card */}

          <div className='mt-3 h-[400px] w-[350px] bg-jewelry bg-cover bg-no-repeat'>
            <div className="w-full h-full flex items-center justify-center hover:backdrop-brightness-50">
              <h1 className='text-center text-5xl text-white'>Jewelry</h1>
            </div>
          </div>

          {/* card */}
          <div className='mt-3 h-[400px] w-[350px] bg-bags bg-cover bg-no-repeat'>
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

        {/* About Us Section Begins Here */}
        <div className='p-3 border-b border-black' id='about-us'>

          <h1 className='mb-4 text-center text-6xl'>About Us</h1>

          <p className='p-2 text-center text-lg font-normal leading-7'>
            Welcome to Z-Store. We are best platform buying and selling for the items in our allowed categories.
            If you want to buy or sell the related items for clothing, bags or cosmetics. Then, you are at the right
            place. We host the wide array of the men's, women's and kid's clothing, bags or cosmetics. Buy the best 
            items, clothing, cosmetics from best sellers, fashion-houses or brands from the comfort of your home and 
            get it delivered right at your door step.
          </p>

          <h2 className='mt-2 text-2xl'>Best Shopping Store Available in India</h2>

          <ul className='mt-5 pl-5 list-disc'>

            <li className='mt-2'>
              <p>
                <span className='text-lg font-medium'>Men's Clothing - </span> Get latest men's 
                fashion wear in z-store. Have the most iconic and stylish fashion wear for men. 
                ranging from casual to party wear. We have most ranges of party wear, casual, formal 
                and active wear in many colors. Get your wardrobe updated with latest fashion with us.
              </p>
            </li>

            <li className='mt-2'>
              <p>
                <span className='text-lg font-medium'>Women's Clothing - </span> Get latest men's 
                fashion wear in z-store. Have the most iconic and stylish fashion wear for men. 
                ranging from casual to party wear. We have most ranges of party wear, casual, formal 
                and active wear in many colors. Get your wardrobe updated with latest fashion with us.
              </p>
            </li>

            <li className='mt-2'>
              <p>
                <span className='text-lg font-medium'>Kid's Clothing - </span> Get latest men's 
                fashion wear in z-store. Have the most iconic and stylish fashion wear for men. 
                ranging from casual to party wear. We have most ranges of party wear, casual, formal 
                and active wear in many colors. Get your wardrobe updated with latest fashion with us.
              </p>
            </li>

            <li className='mt-2'>
              <p>
                <span className='text-lg font-medium'>Cosmetics - </span> Get latest men's 
                fashion wear in z-store. Have the most iconic and stylish fashion wear for men. 
                ranging from casual to party wear. We have most ranges of party wear, casual, formal 
                and active wear in many colors. Get your wardrobe updated with latest fashion with us.
              </p>
            </li>

            <li className='mt-2'>
              <p>
                <span className='text-lg font-medium'>Bags - </span> Get latest men's 
                fashion wear in z-store. Have the most iconic and stylish fashion wear for men. 
                ranging from casual to party wear. We have most ranges of party wear, casual, formal 
                and active wear in many colors. Get your wardrobe updated with latest fashion with us.
              </p>
            </li>

            <li className='mt-2'>
              <p>
                <span className='text-lg font-medium'>Jewelries - </span> Get latest men's 
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

          <h1 className='mb-4 text-center text-6xl'>Customer Reviews</h1>

          {/* Customer Review Cards */}
          <div className='p-5 flex flex-wrap items-center gap-4'>
            {/* card */}
            <div className='bg-white flex flex-col items-center rounded-xl shadow-lg'>

              <div className='p-4 text-center border-b border-black'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quod enim illo voluptatibus impedit nemo, 
                cupiditate id exercitationem, repudiandae sapiente doloribus deserunt odio minima adipisci consequatur, quas 
                alias corporis perspiciatis?
              </div>

              <div className='p-3 w-full flex items-center justify-center gap-3'>
                <img src="./images/avatar.svg" alt="avatar" className='h-[50px] w-[50px]' />
                <h1 className=''>Micheal Sanders</h1>
              </div>

            </div>
            
            {/* card */}
            <div className='bg-white flex flex-col items-center rounded-xl shadow-lg'>

              <div className='p-4 text-center border-b border-black'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quod enim illo voluptatibus impedit nemo, 
                cupiditate id exercitationem, repudiandae sapiente doloribus deserunt odio minima adipisci consequatur, quas 
                alias corporis perspiciatis?
              </div>

              <div className='p-3 w-full flex items-center justify-center gap-3'>
                <img src="./images/avatar.svg" alt="avatar" className='h-[50px] w-[50px]' />
                <h1 className=''>Micheal Sanders</h1>
              </div>

            </div>
            
            {/* card */}
            <div className='bg-white flex flex-col items-center rounded-xl shadow-lg'>

              <div className='p-4 text-center border-b border-black'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quod enim illo voluptatibus impedit nemo, 
                cupiditate id exercitationem, repudiandae sapiente doloribus deserunt odio minima adipisci consequatur, quas 
                alias corporis perspiciatis?
              </div>

              <div className='p-3 w-full flex items-center justify-center gap-3'>
                <img src="./images/avatar.svg" alt="avatar" className='h-[50px] w-[50px]' />
                <h1 className=''>Micheal Sanders</h1>
              </div>

            </div>
            
            {/* card */}
            <div className='bg-white flex flex-col items-center rounded-xl shadow-lg'>

              <div className='p-4 text-center border-b border-black'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quod enim illo voluptatibus impedit nemo, 
                cupiditate id exercitationem, repudiandae sapiente doloribus deserunt odio minima adipisci consequatur, quas 
                alias corporis perspiciatis?
              </div>

              <div className='p-3 w-full flex items-center justify-center gap-3'>
                <img src="./images/avatar.svg" alt="avatar" className='h-[50px] w-[50px]' />
                <h1 className=''>Micheal Sanders</h1>
              </div>

            </div>
          </div>

        </div>
        {/* Customer Review Ends Here */}

        {/* footer Begins Here*/}
        <div className='pt-5 pb-5 bg-blackish text-white flex flex-wrap items-start justify-center gap-8'>

          {/* useful links */}
          <div>
            <h1 className='mb-2 text-2xl font-medium'>Useful Links</h1>
            <ul>
              <li className='mb-1 font-thin text-lg underline'>Men</li>
              <li className='mb-1 font-thin text-lg underline'>Women</li>
              <li className='mb-1 font-thin text-lg underline'>Kids</li>
              <li className='mb-1 font-thin text-lg underline'>Cosmetics</li>
              <li className='mb-1 font-thin text-lg underline'>Bags</li>
              <li className='mb-1 font-thin text-lg underline'>Jewelry</li>
            </ul>
          </div>
          
          {/* customer links */}
          <div>
            <h1 className='mb-2 text-2xl font-medium'>Customer Links</h1>
            <ul>
              <li className='mb-1 font-thin text-lg underline'>FAQ's</li>
              <li className='mb-1 font-thin text-lg underline'>Return Policy</li>
              <li className='mb-1 font-thin text-lg underline'>Sitemap</li>
              <li className='mb-1 font-thin text-lg underline'>Terms & Conditions</li>
              <li className='mb-1 font-thin text-lg underline'>Customer Policy</li>
              <li className='mb-1 font-thin text-lg underline'>Contact Us</li>
            </ul>
          </div>
          
          {/* Address */}
          <div>
            <h1 className='mb-2 text-xl font-medium'>Address</h1>
            <h1 className='text-lg'>DC-XY 23-Street,</h1>
            <h1 className='text-lg'>XYZ State, Mumbai</h1>
            <h1 className='text-lg'>Maharastra, 789132</h1>
          </div>
          
          {/* Social links */}
          <div>
            <h1 className='mb-2 text-xl font-medium'>Social Links</h1>
            
            <div className='flex flex-wrap gap-3'>
              <img src="./images/linkedin.svg" alt="linked-in" className='invert h-[50px] w-[50px]' />
              <img src="./images/facebook.svg" alt="facebook" className='invert h-[50px] w-[50px]' />
              <img src="./images/instagram.svg" alt="instagram" className='invert h-[50px] w-[50px]' />
              <img src="./images/twitter.svg" alt="twitter" className='invert h-[50px] w-[50px]' />
            </div>
          </div>

        </div>
        {/* footer Ends Here*/}
    </div>
  )
}

export default HomePage