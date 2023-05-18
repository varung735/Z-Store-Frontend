import React from 'react'

function ProductCard() {
  return (
    <div className = 'w-full p-2 bg-off-whiter border shadow-lg hover:cursor-pointer' >
      <img src="/images/shampoo.jpg" alt="shampoo" className='w-full h-[300px]'/>
      <h1 className='mt-2 ml-2 text-2xl font-medium'>Product Name</h1>
      <p className='mt-2 ml-2 text-md'>price: 2999/-</p>
    </div>
  )
}

export default ProductCard