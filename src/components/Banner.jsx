import React from 'react'
import Navbar from './Navbar'
import assets, { bannerImages, bannnerBg } from '../assets/assets'
import SubHeading from './SubHeading'

const Banner = () => {
    return (
        <div className='border border-[#d8d8db] bg-[#f5f6f9] w-full rounded-3xl relative overflow-hidden'>
            <Navbar />
            <div className="absolute top-0 left-0 h-full z-10 select-none pointer-events-none">
                <img className='h-full select-none pointer-events-none bg-contain' src={bannnerBg.bannerBgOne} alt="" />
            </div>
            <div className="absolute bottom-0 left-0 h-full select-none pointer-events-none">
                <img className='h-full select-none pointer-events-none' src={bannnerBg.bannerBgTwo} alt="" />
            </div>
            <div className="absolute bottom-0 right-0 h-full select-none pointer-events-none">
                <img className='h-full select-none pointer-events-none' src={bannnerBg.bannerBgThree} alt="" />
            </div>
            <div className="pt-20">
                <SubHeading headingName='Best Financial Management' />
                <div className="relative z-20 max-w-5xl text-center mx-auto">
                    <h1 className='text-7xl font-medium text-black tracking-tight leading-24'>Enhance your financial control
                        with <span className='bg-gradient-to-t from-[#7050f0] to-[#9680ef] inline py-1 px-3 text-white rounded-3xl'>Easypay</span></h1>
                    <p className='text-base font-semibold text-zinc-500 max-w-3xl mx-auto py-6'>Streamline your business's financial management with our intuitive, scalable SaaS platform. Designed for U.S. enterprises, our solutions simplify complex processes.</p>
                    <img src={assets.arrowOne} alt="" className='absolute left-[12%] bottom-2/5 animate-bounce delay-300' />
                    <img src={assets.arrowTwo} alt="" className='absolute right-[12%] bottom-2/5 animate-bounce delay-400' />
                </div>
                <div className='relative z-20 flex justify-center pt-8'>
                    <div className="">
                        <img src={bannerImages.bannnerCentered} alt="" />
                    </div>
                    <img src={bannerImages.bannerLeft} className='absolute top-1/5 left-[14%] w-80 ' alt="" />
                    <img src={bannerImages.bannerRight} className='absolute top-[12%] right-[16.5%] w-72' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner
