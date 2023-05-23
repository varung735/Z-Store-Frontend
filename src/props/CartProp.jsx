import React from 'react'

function CartProp() {
  return (
    <div className='p-2 flex items-center gap-3'>
      <div className='w-1/4'>
        <img src="./images/Shampoo.jpg" alt="product-image" className='w-full h-full'/>
      </div>
      <div className='w-3/4 flex flex-col'>
        <h1 className='text-2xl font-medium'>Product Name</h1>
        <p className='text-lg'>Price: 2999/-</p>
      </div>
    </div>
  )
}

export default CartProp