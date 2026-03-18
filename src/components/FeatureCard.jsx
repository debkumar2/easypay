import React from 'react'
import { keyFeatureList } from '../assets/assets'

const FeatureCard = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-6 my-6'>
            {keyFeatureList.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div className='flex gap-y-4 flex-col'>
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8267ec]">
                            <Icon className='text-white' fontSize={24} />
                        </div>
                        <h4 className='text-xl font-normal text-[#060b13]'>{item.heading}</h4>
                        <p className='text-[#909090] font-medium text-sm'>{item.subHeading}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FeatureCard
