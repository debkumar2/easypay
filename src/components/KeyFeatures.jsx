import React from 'react'
import SubHeading from './SubHeading'
import Heading from './Heading'
import assets from '../assets/assets'
import FeatureCard from './FeatureCard'

const KeyFeatures = () => {
    return (
        <div className='max-w-screen-lg mx-auto py-10'>
            <div className="grid lg:grid-cols-2 w-full gap-6">
                <div className="">
                    <SubHeading headingName='Key Features' isCentered={false} />
                    <div className='max-w-[820px] mx-auto py-4'>
                        <Heading normalText='Boost your finances with ' highlightText='Easypay' />
                    </div>
                    <FeatureCard />
                </div>
                <div className="ml-auto relative">
                    <img src={assets.bigFeaturePhone} alt="" className='max-w-[400px]' />
                    <div className='absolute w-full bottom-0 left-0 bg-gradient-to-b from-transparent to-white py-8'></div>
                </div>
            </div>

        </div>
    )
}

export default KeyFeatures
