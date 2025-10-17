import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-10 w-10 items-center flex justify-center text-xl font-semibold'>{props.id}</h2>
            <div>
                <p className='text-lg leading-relaxed text-white mb-14 '>{props.intro}</p>
                <div className='flex justify-between mt-3'>
                    <button style={{backgroundColor:props.color}} className='bg-blue-600 px-7 rounded-full py-3 text-xl font-medium text-white'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' px-4 rounded-full py-3 text-xl font-medium text-white'><FaArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent