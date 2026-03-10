import React from 'react'
import Marquee from 'react-fast-marquee'
import { trustSlides } from '../assets/assets'

const SlideCard = () => {
    return (
        <div>
            <Marquee gradient={true} pauseOnHover={true} speed={50}>
                {trustSlides.map((item, index) => (
                    <div key={index} className='mx-8'>
                        <img src={item} alt="" className='w-24 h-auto'/>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default SlideCard
