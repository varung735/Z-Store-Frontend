import React, { useState } from 'react';

function LoginPage() {
    const [drawer, setDrawer] = useState(false);

    return (
        <div className='bg-off-white h-[93vh]'>

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

            {/* container div begins here */}
            <div className='h-full flex flex-row'>

                {/* Banner Section Begins Here */}
                <div className='hidden lg:w-[40%] lg:flex lg:justify-center lg:items-center lg:bg-login lg:bg-cover'>
                    <h1>Z-Store</h1>
                </div>
                {/* Banner Section Ends Here */}

                {/* Login/Sign-up form begins here */}
                <div className='w-full lg:w-[60%] bg-login-mob lg:bg-none lg:bg-blackish bg-cover bg-no-repeat h-full w-full flex justify-center lg:justify-end items-center backdrop-brightness-50' >

                    {/* login/signup form */}
                    <div className='p-5 lg:mr-5 h-fit w-[90%] lg:w-[55%] bg-blackish/60 lg:bg-off-white/20 text-white flex flex-col gap-5 rounded-lg' >
                        <h1 className='text-center text-5xl'>Login</h1>
                        {/* form */}
                        <form action="submit">
                            <div className='mt-4 flex flex-col'>
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder='Enter your email' id='email' className='p-2 w-full rounded-md outline-none' />
                            </div>
                            <div className='mt-4 flex flex-col'>
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder='Enter the password' id='password' className='p-2 w-full rounded-md outline-none' />
                            </div>
                            <button className='bg-off-white text-black text-xl font-medium mt-6 p-3 w-full rounded-lg'>Submit</button>
                        </form>
                    </div>

                </div>
                {/* Login/Sign-up form begins here */}

            </div>
            {/* container div ends here */}

        </div>
    )
}

export default LoginPage