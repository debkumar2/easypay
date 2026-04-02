import React, { useEffect, useRef } from 'react'
import { reviewContent } from '../assets/assets'

const col1 = reviewContent.filter((_, i) => i % 2 === 0)  // scrolls UP
const col2 = reviewContent.filter((_, i) => i % 2 !== 0)  // scrolls DOWN

const TestimonialColumn = ({ items, direction = 'up' }) => {
    const trackRef = useRef(null)
    const posRef = useRef(0)
    const rafRef = useRef(null)

    useEffect(() => {
        const track = trackRef.current
        const speed = 0.4  // px per frame — increase for faster

        const animate = () => {
            const half = track.scrollHeight / 2

            if (direction === 'up') {
                posRef.current -= speed
                if (posRef.current <= -half) posRef.current = 0  // seamless reset
            } else {
                posRef.current += speed
                if (posRef.current >= 0) posRef.current = -half  // seamless reset
            }

            track.style.transform = `translateY(${posRef.current}px)`
            rafRef.current = requestAnimationFrame(animate)
        }

        // start down column from the middle so it scrolls into view correctly
        if (direction === 'down') posRef.current = -(track.scrollHeight / 2)

        rafRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(rafRef.current)
    }, [direction])

    return (
        <div className='overflow-hidden h-[575px]'>
            <div ref={trackRef} className='flex flex-col gap-4'>
                {/* triple duplicate for seamless infinite loop */}
                {[...items, ...items, ...items].map((item, index) => (
                    <div key={index} className='border border-gray-200 rounded-xl p-4 bg-white flex-shrink-0 shadow-md'>
                        <div className='flex items-center gap-3 mb-3'>
                            <div className='h-10 w-10 rounded-full overflow-hidden flex-shrink-0'>
                                <img src={item.imgUrl} alt={item.name} className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <h2 className='text-sm font-medium text-gray-900'>{item.name}</h2>
                                <span className='text-xs text-gray-400'>{item.dated}</span>
                            </div>
                        </div>
                        <div className='text-yellow-400 text-xs mb-2'>★★★★★</div>
                        <p className='text-xs text-gray-500 leading-relaxed'>{item.review}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const ReviewCard = () => {
    return (
        <div className='relative'>
            {/* fade top */}
            <div className='absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none' />
            {/* fade bottom */}
            <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none' />

            <div className='grid grid-cols-2 gap-4'>
                <TestimonialColumn items={col1} direction='up' />
                <TestimonialColumn items={col2} direction='down' />
            </div>
        </div>
    )
}

export default ReviewCard