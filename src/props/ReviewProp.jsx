import React from 'react'

function ReviewProp() {
  return (
    <div className='p-4 flex flex-col gap-3 border-b border-black'>
        <div className='flex items-center gap-3'>
            <img src="./images/avatar.svg" alt="profile-pic" className='h-[50px] w-[50px]'/>
            <h1 className='text-3xl font-medium'>User Name</h1>
        </div>
        <p className='text-md'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex iste facere quae 
            accusantium excepturi sequi perferendis commodi! Inventore provident dolore nemo quibusdam ut, 
            nesciunt ab soluta obcaecati possimus rem ducimus eaque ullam nisi aspernatur aperiam consequuntur 
            facilis distinctio autem doloremque, asperiores porro iusto rerum. Nesciunt maiores mollitia culpa doloribus quaerat.
        </p>
    </div>
  )
}

export default ReviewProp