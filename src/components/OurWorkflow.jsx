import React from 'react'
import SubHeading from './SubHeading'
import Heading from './Heading'

const OurWorkflow = () => {
    return (
        <div className='w-full mx-auto py-10 bg-[#f5f6f9] border border-[#d8d8db]'>
            <SubHeading headingName='Our workflow' isCentered={true} />
            <div className='max-w-[820px] mx-auto py-4 text-center'>
                <Heading normalText='Ready to transform your financial ' highlightText='management?' />
            </div>
        </div>
    )
}

export default OurWorkflow
