import React from 'react'

function ProductsTable() {
    return (
        <div>
            <div className='mb-5'>
                <h1 className='text-4xl font-normal'>Products</h1>
            </div>

            <div className='overflow-auto'>

                <table className="w-full overflow-auto">
                    <thead>
                        <tr>
                            <th className='p-5 whitespace-nowrap bg-blackish text-white text-center'>Product Name</th>
                            <th className='p-5 whitespace-nowrap bg-blackish text-white text-center'>Category</th>
                            <th className='p-5 whitespace-nowrap bg-blackish text-white text-center'>Price</th>
                            <th className='p-5 whitespace-nowrap bg-blackish text-white text-center'>Product Type</th>
                            <th className='p-5 whitespace-nowrap bg-blackish text-white text-center'>Units Sold</th>
                            <th className='p-5 whitespace-nowrap bg-blackish text-white text-center'>Check Reviews</th>
                            <th className='p-5 whitespace-nowrap bg-blackish text-white text-center'>Update</th>
                            <th className='p-5 whitespace-nowrap bg-blackish text-white text-center'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRows />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function TableRows() {
    return (
        <tr className='hover:bg-white'>
            <td className='p-3 whitespace-nowrap color-blackish text-md text-center'>Shining Star</td>
            <td className='p-3 whitespace-nowrap color-blackish text-md text-center'>Earth, Wind, and Fire</td>
            <td className='p-3 whitespace-nowrap color-blackish text-md text-center'>1975</td>
            <td className='p-3 whitespace-nowrap color-blackish text-md text-center'>1975</td>
            <td className='p-3 whitespace-nowrap color-blackish text-md text-center'>1975</td>
            <td className='p-3 whitespace-nowrap color-blackish text-md text-center'>1975</td>
            <td className='p-3 whitespace-nowrap text-center'>
                <button className='p-2 bg-blackish text-white rounded-md font-medium'>Update</button>
            </td>
            <td className='p-3 whitespace-nowrap text-center'>
                <button className='p-2 bg-blackish text-white rounded-md font-medium'>Delete</button>
            </td>
        </tr>
    )
}

export default ProductsTable