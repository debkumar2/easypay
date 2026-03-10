import React from 'react'

const Heading = ({ highlightText, normalText }) => {
    return (
        <>
            <h2 className='text-6xl font-normal tracking-tighter leading-16'>{normalText} <span className='text-[#8267ec]'>{highlightText}</span></h2>
        </>
    )
}

export default Heading
