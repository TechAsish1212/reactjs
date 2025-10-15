import React from 'react'
import { CiBookmark } from 'react-icons/ci'

const Card = (props) => {
  return (
    <div className='card'>
      <div>
        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <CiBookmark size={14} /></button>
        </div>
        <div className='center'>
          <h3>{props.companyName} <span>{props.postDate}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card