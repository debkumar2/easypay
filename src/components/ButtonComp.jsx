import React from 'react'

const ButtonComp = ({ btnName }) => {
    return (
        <>
            <button className='border border-[#fff3] rounded-3xl bg-gradient-to-t from-[#7050f0] to-[#9680ef] py-3 px-8 text-white'>{btnName}</button>
        </>
    )
}

export default ButtonComp
