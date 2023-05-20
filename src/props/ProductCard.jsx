import React from 'react'

function ProductCard() {
  return (
    <div className = 'w-full md:w-[45%] lg:w-[24%] p-2 bg-off-whiter border shadow-lg' >
      <img src="/images/shampoo.jpg" alt="shampoo" className='w-full h-[300px] lg:h-[200px]'/>
      <h1 className='mt-2 ml-2 text-2xl font-medium'>Product Name</h1>
      <p className='mt-1 ml-2 text-sm'>price: 2999/-</p>
      <button className='mt-2 w-full p-1 bg-blackish text-white font-medium hover:cursor-pointer'>Add to Cart</button>
      <button className='mt-2 w-full p-1 bg-blackish text-white font-medium hover:cursor-pointer'>Buy Now</button>
    </div>
  )
}

export default ProductCard