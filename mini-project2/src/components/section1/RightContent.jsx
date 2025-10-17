import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full p-6 w-2/3 flex flex-nowrap overflow-x-auto gap-5'>

      {
        props.user.map((ind,idx)=>{
          return <RightCard key={idx} img={ind.img} tag={ind.tag} id={ind.id} intro={ind.intro} color={ind.color} />
        })
      }

    </div>
  )
}

export default RightContent