import React from 'react'
import { useState } from 'react'

const Advanced = () => {

    const [num, setNum] = useState(0)

    const clickFun=()=>{
        console.log("Before click the button: "+num);
        setNum(num+5);
        console.log("After click the button: "+num);
    }

  return (
    <div>
        <h3>React hooks work asyncronously </h3>
        <h2>This is = {num}</h2> {/* when click the button then both value is 0 print in the console because In UI takes some time to change the value so both value print initial */}
        <button onClick={clickFun}>Click Me</button>
    </div>
  )
}

export default Advanced