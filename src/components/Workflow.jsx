import React from 'react'
import SubHeading from './SubHeading'
import Heading from './Heading'

const Workflow = () => {
    return (
        <div className='py-10'>
            <SubHeading headingName='Our workflow' />
            <div className='text-center max-w-[820px] mx-auto py-4'>
                <Heading normalText='How our platform makes your workflow ' highlightText='easier'/>
            </div>
        </div>
    )
}

export default Workflow
