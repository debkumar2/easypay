import React from 'react'
import SubHeading from './SubHeading'
import Heading from './Heading'
import ButtonComp from './ButtonComp'
import assets from '../assets/assets'

const OurWorkflow = () => {
    return (
        <div className='w-full mx-auto py-10 bg-[#f5f6f9] border border-[#d8d8db] rounded-3xl'>
            <SubHeading headingName='Our workflow' isCentered={true} />
            <div className='max-w-[820px] mx-auto py-4 text-center flex flex-col items-center gap-8'>
                <Heading normalText='Ready to transform your financial ' highlightText='management?' />
                <ButtonComp btnName='Free Trial' />
                <div className='w-full pl-18 pt-12 relative'>
                    <img src={assets.workflowMain} alt=""  className='max-w-[725px]'/>
                    <img src={assets.workflowAbsoluteOne} alt="" className='absolute -top-16 left-0 max-w-[193px] rounded-2xl shadow-[0px_8px_24px_rgba(149,157,165,0.2)]'/>
                    <img src={assets.workflowAbsoluteTwo} alt="" className='absolute top-2 -right-36 max-w-[273px] rounded-2xl shadow-[0px_8px_24px_rgba(149,157,165,0.2)]'/>
                    <img src={assets.workflowAbsoluteThree} alt="" className='absolute bottom-12 -left-36 max-w-[304px] rounded-2xl shadow-[0px_8px_24px_rgba(149,157,165,0.2)]'/>
                    <img src={assets.workflowAbsoluteFour} alt="" className='absolute bottom-32 -right- max-w-[208px] rounded-2xl shadow-[0px_8px_24px_rgba(149,157,165,0.2)]'/>
                </div>
            </div>
        </div>
    )
}

export default OurWorkflow
