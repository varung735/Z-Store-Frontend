import React, { useState } from 'react';
import SellerProfile from "../components/SellerProfile";
import ProductsTable from "../props/ProductsTable";
import SalesChart from '../props/SalesChart';

function SellerDashboard() {
  const [drawer, setDrawer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [operation, setOperation] = useState("seeProducts");

  return (
    <div className='bg-off-white flex flex-col h-screen'>
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
            <a href="#" className='p-3 w-full text-center text-xl md:text-3xl font-medium hover:bg-black hover:text-white'>Products</a>
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
          <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Products</a>
          <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Cart</a>
          <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Sign Up</a>
          <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Login</a>
        </div>

      </div>
      {/* navbar for larger displays ends here*/}

      {/* Seller's Dashboard Begins Here*/}
      <div className='w-full p-5 lg:p-0 flex h-screen flex-col lg:flex-row'>
        
        {/* Drop down nav for smaller displays begins here */}
        <div className='lg:hidden w-full flex flex-col justify-center border border-blackish rounded-md'>
          
          <div className='flex justify-between items-center p-5' onClick={() => {setIsOpen(!isOpen)}}>
            <h1 className='text-xl font-medium'>Operations</h1>
            <div className='h-[10px] w-[10px] rotate-45 border-r border-b border-blackish'></div>
          </div>

          {/* links holder*/}
          { isOpen && <div className='text-center font-medium'>
            
            {/* link */}
            <div className='p-4 border-t border-blackish hover:bg-blackish hover:text-white' onClick={() => {setOperation("seeProducts")}}>
              <h1 className='font-medium text-xl'>See Products</h1>
            </div>

            {/* link */}
            <div className='p-4 border-t border-blackish hover:bg-blackish hover:text-white'>
              <h1 className='font-medium text-xl'>Add Products</h1>
            </div>

            {/* link */}
            <div className='p-4 border-t border-blackish hover:bg-blackish hover:text-white' onClick={() => {setOperation("salesChart")}}>
              <h1 className='font-medium text-xl'>Sales</h1>
            </div>
            
            {/* link */}
            <div className='p-4 border-t border-blackish hover:bg-blackish hover:text-white' onClick={() => {setOperation("profile")}}>
              <h1 className='font-medium text-xl'>Profile</h1>
            </div>

          </div>}

        </div>
        {/* Drop down nav for smaller displays ends here */}

        {/* Side nav for larger displays Begins Here*/}
        <div className='hidden w-[15%] lg:flex lg:flex-col lg:border-r lg:border-blackish'>

          {/* link */}
          <div className='p-3 w-full hover:bg-blackish hover:text-white hover:cursor-pointer border-b border-blackish' 
            onClick={() => {setOperation("seeProducts")}}>
            <h1 className='text-center font-medium'>See Products</h1>
          </div>
          
          {/* link */}
          <div className='p-3 w-full hover:bg-blackish hover:text-white hover:cursor-pointer border-b border-blackish'>
            <h1 className='text-center font-medium'>Add Products</h1>
          </div>
          
          {/* link */}
          <div className='p-3 w-full hover:bg-blackish hover:text-white hover:cursor-pointer border-b border-blackish'
            onClick={() => {setOperation("salesChart")}}>
            <h1 className='text-center font-medium'>Sales</h1>
          </div>
          
          {/* link */}
          <div className='p-3 w-full hover:bg-blackish hover:text-white hover:cursor-pointer border-b border-blackish'
            onClick={() => {setOperation("profile")}}>
            <h1 className='text-center font-medium'>Profile</h1>
          </div>

        </div>
        {/* Side nav for larger displays Ends Here*/}

        {/* Content Begins Here */}
        <div className='p-3 w-full lg:w-[85%]'>
          { operation === "seeProducts" && <ProductsTable /> }
          { operation === "salesChart" && <SalesChart /> }
          { operation === "profile" && <SellerProfile /> }
        </div>
        {/* Content Ends Here */}

      </div>
      {/* Seller's Dashboard Ends Here*/}

    </div>
  )
}

export default SellerDashboard