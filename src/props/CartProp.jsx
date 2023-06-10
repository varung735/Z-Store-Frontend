import React from 'react'

function CartProp() {
  return (
    <div className='p-3 mb-5 md:w-[45%] lg:w-[25%] flex flex-col items-center shadow-md'>
      <div className='w-full'>
        <img src="./images/Shampoo.jpg" alt="product" className='w-full h-full'/>
      </div>
      <div className='pt-3 pb-3 w-full flex flex-col'>
        <h1 className='text-center text-3xl font-medium'>Product Name</h1>
        <p className='text-center text-lg'>Price: 2999/-</p>
      </div>
      <div className='w-full flex gap-2'>
        <button className='w-1/2 p-3 bg-blackish text-xl text-white font-medium cursor-pointer'>Delete Item</button>
        <button className='w-1/2 p-3 bg-blackish text-xl text-white font-medium cursor-pointer'>Buy Item</button>
      </div>
    </div>
  )
}

export default CartProp