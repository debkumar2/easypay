import React from 'react'
import SubHeading from './SubHeading'
import Heading from './Heading'
import ReviewCard from './ReviewCard'
import Marquee from 'react-fast-marquee'

const Testimonial = () => {
    return (
        <div className='w-full mx-auto py-10'>
            <div className='max-w-[1128px] mx-auto'>
                <div className='grid lg:grid-cols-2 gap-4'>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <SubHeading headingName='Testimonials' isCentered={false} />
                            <div className='max-w-[532px] py-4'>
                                <Heading normalText='What our clients are ' highlightText='saying' />
                                <p className='text-[#909090] font-medium text-base pt-6'>Our financial management platform is transforming the way people manage their money. Here’s what some of our users have to say about their experience</p>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-5xl text-[#060B13] font-medium'>2k+</h2>
                            <p className='text-[#909090] font-medium text-sm pt-4'>Trusted by users</p>
                        </div>
                    </div>
                    <div>
                        <div className="overflow-hidden w-full">
                            <ReviewCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
