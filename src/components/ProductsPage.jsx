import React, { useState } from 'react';
import ProductCard from '../props/ProductCard';
import MensFilter from '../props/MensFilter';

function ProductsPage() {
    const [drawer, setDrawer] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = ["Men", "Women", "kid", "Jewelry", "Cosmetics", "Bags"];

    return (
        <div className='h-[100vh] bg-off-white'>
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
                    <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Sign Up</a>
                    <a href="#" className='p-3 text-lg font-medium hover:bg-blackish hover:text-white hover:rounded-md'>Login</a>
                </div>

            </div>
            {/* navbar for larger displays ends here*/}

            {/* Products Holder Begins Here*/}
            <div className='p-5 flex flex-col items-center gap-3'>

                {/* Filters */}
                <div className='w-full'>

                    <h1 className='mb-3 text-3xl'>Filters</h1>

                    {/* Filter Holder */}
                    <div>
                        {/* Categories */}
                        <div className='bg-off-whiter w-full flex flex-col shadow-md'>

                            <div className='p-5 w-full flex items-center justify-between border-b border-black'>
                                <h1 className='text-xl font-medium'>Categories</h1>
                                <div className='w-[10px] h-[10px] border-b-2 border-r-2 border-black rotate-45'></div>
                            </div>

                            {/* drop down */}
                            <div className='p-5 flex flex-col gap-2'>
                                {categories.map((category) => {
                                    return <div className='flex gap-2'>
                                        <input type="checkbox" 
                                        name={category} 
                                        id={category+"Checkbox"}
                                        checked={selectedCategory === category}
                                        onChange={() => {setSelectedCategory(category)}} />
                                        <h1 className='text-md font-medium'>{category}</h1>
                                    </div>
                                })}
                            </div>
                        </div>

                        {/* Sub-Categories */}
                        <MensFilter />

                        {/* Price */}
                        <div className='bg-off-whiter w-full flex flex-col shadow-md'>

                            <div className='p-5 w-full flex items-center justify-between border-b border-black'>
                                <h1 className='text-xl font-medium'>Price Range</h1>
                                <div className='w-[10px] h-[10px] border-b-2 border-r-2 border-black rotate-45'></div>
                            </div>

                            {/* drop down */}
                            <div className='p-5 flex flex-col gap-2'>
                                <div className='flex gap-2'>
                                    <input type="checkbox" name="Mens" id="MenCheckBox" />
                                    <h1 className='text-md font-medium'>149 to 500</h1>
                                </div>
                                <div className='flex gap-2'>
                                    <input type="checkbox" name="Mens" id="MenCheckBox" />
                                    <h1 className='text-md font-medium'>500 to 1000</h1>
                                </div>
                                <div className='flex gap-2'>
                                    <input type="checkbox" name="Mens" id="MenCheckBox" />
                                    <h1 className='text-md font-medium'>1000 to 2570</h1>
                                </div>
                                <div className='flex gap-2'>
                                    <input type="checkbox" name="Mens" id="MenCheckBox" />
                                    <h1 className='text-md font-medium'>5000+</h1>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Product Cards */}
                <ProductCard />
            </div>
            {/* Products Holder Ends Here*/}

        </div>
    )
}

export default ProductsPage