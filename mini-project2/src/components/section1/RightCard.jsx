import React from 'react'
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
    return (
        <div className='h-full w-80 rounded-3xl overflow-hidden relative shrink-0'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            <RightCardContent tag={props.tag} id={props.id} intro={props.intro} color={props.color} />
        </div>
    )
}

export default RightCard