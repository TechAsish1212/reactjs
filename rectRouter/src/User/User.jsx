import React from 'react'
import {useParams} from 'react-router-dom'

const User = () => {
    const {id}=useParams();
  return (
    <div>
      <h1 className='text-2xl font-bold text-orange-500 text-center p-6'>User: {id}</h1>
    </div>
  )
}

export default User