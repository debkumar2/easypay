import React from 'react'
import SubHeading from './SubHeading'
import Heading from './Heading'

const KeyFeatures = () => {
    return (
        <div className='max-w-screen-lg mx-auto py-10'>
            <div className="grid lg:grid-cols-2">
                <div className="">
                    <SubHeading headingName='Key Features' isCentered={false}/>
                    <div className='max-w-[820px] mx-auto py-4'>
                        <Heading normalText='Boost your finances with ' highlightText='Easypay' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default KeyFeatures
