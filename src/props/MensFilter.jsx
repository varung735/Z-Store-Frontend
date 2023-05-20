import React, { useState } from 'react';

function MensFilter() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isOpen, setIsOpen] = useState(true);

    const subCategories = ["T-Shirts", "Shirts", "Jeans", "Shorts", "Jackets", "Hoodies"];

    return (
        
        <div className='w-full md:w-[45%] lg:w-full mt-3 md:mt-0 bg-off-whiter flex flex-col shadow-md'>

            <div className='p-5 w-full flex items-center justify-between'>
                <h1 className='text-xl font-medium'>Products</h1>
                <div className='w-[10px] h-[10px] border-b-2 border-r-2 border-black rotate-45 cursor-pointer' onClick={() => {setIsOpen(!isOpen)}}></div>
            </div>

            {/* drop down */}
            {isOpen && <div className='p-5 flex flex-col gap-2 border-t border-black'>
                {subCategories.map((category) => {
                    return <div className='flex gap-2'>
                        <input type="checkbox"
                            name={category}
                            id={category + "Checkbox"}
                            checked={selectedCategory === category}
                            onChange={() => { setSelectedCategory(category) }} />
                        <h1 className='text-md font-medium'>{category}</h1>
                    </div>
                })}
            </div>}
        </div>
    )
}

export default MensFilter