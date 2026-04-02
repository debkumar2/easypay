import React from 'react'
import assets from '../assets/assets'
import ButtonComp from './ButtonComp'

const Footer = () => {
    return (
        <div className='mt-10'>
            <div className='max-w-[1128px] mx-auto bg-[#f5f6f9] py-8 px-4 border border-[#d8d8db] rounded-3xl'>
                <div className="grid grid-cols-3 gap-14">
                    <div className=" flex flex-col gap-4">
                        <div className='max-w-[120px]'>
                        <img src={assets.brandLogo} alt="" className='w-full'/>
                        </div>
                        <p className='text-sm text-[#909090]'>Streamline your business's financial management with our intuitive, scalable SaaS platform. Designed for U.S. enterprises, our solutions simplify complex processes.</p>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <h4 className='text-xl font-medium tracking-tighter mb-4'>Useful Link</h4>
                            <ul className='flex flex-col gap-4'>
                                <li><a href="" className='text-sm font-semibold text-[#909090]'>Home</a></li>
                                <li><a href="" className='text-sm font-semibold text-[#909090]'>Feature</a></li>
                                <li><a href="" className='text-sm font-semibold text-[#909090]'>Pricing</a></li>
                                <li><a href="" className='text-sm font-semibold text-[#909090]'>About</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-xl font-medium tracking-tighter  mb-4'>Follow Us</h4>
                            <ul className='flex flex-col gap-4'>
                                <li><a href="" className='text-sm font-semibold text-[#909090]'>Facebook</a></li>
                                <li><a href="" className='text-sm font-semibold text-[#909090]'>Instagram</a></li>
                                <li><a href="" className='text-sm font-semibold text-[#909090]'>X</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl font-medium tracking-tighter mb-4'>Subscribe our newsletter</h4>
                        <div className='flex justify-between items-center border border-[#d8d8db] rounded-4xl px-2'>
                            <input type="eamil" placeholder='Your email address' className='outline-0 border-0 h-16  py-1 text-sm font-semibold text-[#909090]' />
                            <div className=''>
                               <button className='border border-[#fff3] rounded-3xl bg-gradient-to-t from-[#7050f0] to-[#9680ef] py-3 px-6 text-white'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
