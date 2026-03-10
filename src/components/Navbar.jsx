import React from 'react'
import assets from '../assets/assets'
import ButtonComp from './ButtonComp';

const Navbar = () => {
    const navItem = ['Features', 'Pricing', 'About Us', 'Blog'];
    return (
        <div className='w-full  mt-8'>
            <div className='sticky top-0 max-w-screen-lg mx-auto  border border-[#d8d8db] bg-white flex justify-between items-center px-6 py-3 rounded-full  z-30'>
                <div className="">
                    <img src={assets.brandLogo} alt="" />
                </div>
                <ul className='flex gap-16'>
                    {navItem.map((item, index) => (
                        <li key={index} className='font-medium text-sm text-zinc-500 cursor-pointer'>{item}</li>
                    ))}
                </ul>
                <div>
                    <ButtonComp btnName='Sign In'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
