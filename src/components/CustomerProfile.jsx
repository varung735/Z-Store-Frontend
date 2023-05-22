import React, { useState } from 'react';

function CustomerProfile() {
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
            <a href="#" className='p-3 w-full text-center text-xl md:text-3xl font-medium hover:bg-black hover:text-white'>Orders</a>
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
          <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Orders</a>
          <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Sign Up</a>
          <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Login</a>
        </div>

      </div>
      {/* navbar for larger displays ends here*/}

      {/* profile inputs and image begins here*/}
      <div className='flex flex-col lg:flex-row lg:flex-wrap items-center'>
        
        {/* Profile Pic */}
        <div className='w-full p-4 flex flex-col items-center border-b border-black'> 
          <img src="./images/avatar.svg" alt="avatar" className='mt-10 h-[200px] w-[200px]'/>
          <h1 className='mt-4 text-4xl font-medium'>User Name</h1>
        </div>

        {/* Basic Details (input) Begins Here*/}
        <div className='w-full p-5'>

          <h1 className='mb-4 text-center text-3xl font-medium'>Basic Details</h1>
          
          {/* Name Label & Input */}
          <div className='mb-4 w-full'>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' placeholder='Enter Your name....' 
              className='w-full p-2 rounded-md text-xl text-black border border-black'/>
          </div>

          {/* Email Label & Input */}
          <div className='mb-4 w-full'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder='Enter Your Email' 
              className='w-full p-2 rounded-md text-xl text-black border border-black'/>
          </div>
          
          {/* Email Label & Input */}
          <div className='mb-5 w-full'>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id='dob' placeholder='Enter Your DOB' 
              className='w-full p-2 rounded-md text-xl text-black border border-black'/>
          </div>

          <button className='w-full p-3 bg-blackish text-white text-xl font-medium cursor-pointer rounded-md'>SAVE CHANGES</button>

        </div>
        {/* Basic Details (input) Ends Here*/}

        {/* Change Password Begins Here */}
        <div className='w-full p-5'>

          <h1 className='mb-4 text-center text-3xl font-medium'>Change Password</h1>

          {/* Password Label & Input */}
          <div className='mb-4 w-full'>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder='Enter Your Password' 
              className='w-full p-2 rounded-md text-xl text-black border border-black'/>
          </div>
          
          {/* Re-Enter Password Label & Input */}
          <div className='mb-5 w-full'>
            <label htmlFor="con-password">Confirm Password</label>
            <input type="password" id='con-password' placeholder='Re Enter Your Password' 
              className='w-full p-2 rounded-md text-xl text-black border border-black'/>
          </div>

          <button className='w-full p-3 bg-blackish text-white text-xl font-medium cursor-pointer rounded-md'>CHANGE PASSWORD</button>

        </div>
        {/* Change Password Ends Here */}

        {/* Address & Location Begins Here */}
        <div className='w-full p-5'>
          
          <h1 className='mb-4 text-center text-3xl font-medium'>Address & Location</h1>

          {/* Locality label & input */}
          <div className='mb-4 w-full'>
            <label htmlFor="address">Address</label>
            <input type="text" id='address' placeholder='Enter Your Address' 
              className='w-full p-2 rounded-md text-xl text-black border border-black'/>
          </div>
          
          {/* City label & input */}
          <div className='mb-4 w-full'>
            <label htmlFor="city">City</label>
            <input type="text" id='city' placeholder='Enter Your City' 
              className='w-full p-2 rounded-md text-xl text-black border border-black'/>
          </div>
          
          {/* District label & input */}
          <div className='mb-4 w-full'>
            <label htmlFor="dist">District</label>
            <input type="text" id='dist' placeholder='Enter Your District' 
              className='w-full p-2 rounded-md text-xl text-black border border-black'/>
          </div>
          
          {/* State label & input */}
          <div className='mb-4 w-full'>
            <label htmlFor="state">State</label>
            <input type="text" id='state' placeholder='Enter Your State' 
              className='w-full p-2 rounded-md text-xl text-black border border-black'/>
          </div>
          
          {/* State label & input */}
          <div className='mb-5 w-full'>
            <label htmlFor="pin">PIN</label>
            <input type="text" id='pin' placeholder='Enter Your PIN' 
              className='w-full p-2 rounded-md text-xl text-black border border-black'/>
          </div>

          <button className='w-full p-3 bg-blackish text-white text-xl font-medium cursor-pointer rounded-md'>SAVE CHANGES</button>

        </div>
        {/* Address & Location Ends Here */}

      </div>
      {/* profile inputs and image ends here*/}

    </div>
  )
}

export default CustomerProfile