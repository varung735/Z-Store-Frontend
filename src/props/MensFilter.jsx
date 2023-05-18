import React from 'react'

function MensFilter() {
    return (
        <div className='mt-3 bg-off-whiter w-full flex flex-col shadow-md'>

            <div className='p-5 w-full flex items-center justify-between border-b border-black'>
                <h1 className='text-xl font-medium'>Products</h1>
                <div className='w-[10px] h-[10px] border-b-2 border-r-2 border-black rotate-45'></div>
            </div>

            {/* drop down */}
            <div className='p-5 flex flex-col gap-2'>
                <div className='flex gap-2'>
                    <input type="checkbox" name="t-shirt" id="TshirtCheckBox" />
                    <h1 className='text-md font-medium'>T-shirts</h1>
                </div>
                <div className='flex gap-2'>
                    <input type="checkbox" name="shirt" id="ShirtCheckBox" />
                    <h1 className='text-md font-medium'>Shirts</h1>
                </div>
                <div className='flex gap-2'>
                    <input type="checkbox" name="jeans" id="JeansCheckBox" />
                    <h1 className='text-md font-medium'>Jeans</h1>
                </div>
                <div className='flex gap-2'>
                    <input type="checkbox" name="shorts" id="ShortsCheckBox" />
                    <h1 className='text-md font-medium'>Shorts</h1>
                </div>
                <div className='flex gap-2'>
                    <input type="checkbox" name="jacket" id="JacketsCheckBox" />
                    <h1 className='text-md font-medium'>Jackets</h1>
                </div>
                <div className='flex gap-2'>
                    <input type="checkbox" name="hoodie" id="HoodieCheckBox" />
                    <h1 className='text-md font-medium'>Hoodies</h1>
                </div>
            </div>
        </div>
    )
}

export default MensFilter