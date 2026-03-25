import React from 'react'
import SubHeading from './SubHeading'
import Heading from './Heading'

const Testimonial = () => {
    return (
        <div className='w-full mx-auto py-10'>
            <div className='max-w-[1128px] mx-auto'>
                <div className='grid lg:grid-cols-2 gap-4'>
                    <div>
                        <SubHeading headingName='Testimonials' isCentered={false} />
                        <div className='max-w-[532px] py-4'>
                            <Heading normalText='What our clients are ' highlightText='saying' />
                            <p className='text-[#909090] font-medium text-base pt-6'>Our financial management platform is transforming the way people manage their money. Here’s what some of our users have to say about their experience</p>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
