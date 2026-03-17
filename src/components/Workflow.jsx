import React from 'react'
import SubHeading from './SubHeading'
import Heading from './Heading'
import assets, { cardWorkFlow } from '../assets/assets'

const Workflow = () => {
    return (
        <div className='py-10'>
            <SubHeading headingName='Our workflow' />
            <div className='text-center max-w-[820px] mx-auto py-4'>
                <Heading normalText='How our platform makes your workflow ' highlightText='easier' />
            </div>
            <div className="max-w-screen-lg mx-auto py-10">
                <div className='grid lg:grid-cols-2 gap-4'>
                    {cardWorkFlow.map((work, index) => {
                        const Icon = work.icon;
                        return (

                            <div className='bg-[#f5f6f9] rounded-3xl overflow-hidden min-h-[33rem] relative'>
                                <div className='p-8 flex gap-5 flex-col mb-10'>
                                    <div className="w-10 h-10 rounded-full bg-[#8267ec] text-white flex items-center justify-center">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className='text-4xl font-normal text-[#060b13]'>{work.title}</h3>
                                    <p className='text-base text-[#909090] font-medium'>{work.paragraph}</p>
                                </div>
                                <div className='max-w-[70%] mx-auto relative'>
                                    <img className='w-full absolute top-0 left-0  rounded-2xl' src={work.img} alt="" />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-[#f5f6f900] to-[#f5f6f9] py-8">

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Workflow
