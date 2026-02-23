import React, { useEffect, useState } from 'react'
// read readme.me file for understanding useEffect

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)


  useEffect(function () {
    console.log("Use Effect is running....");
  }, [num])

  return (
    <div>
      <h1>num : {num}</h1>
      <h1>num2 : {num2}</h1>
      <button
        onMouseEnter={() => { setNum(num + 1) }}
        onMouseLeave={()=>{setNum2(num2+10)}}
      >
        Click
      </button>
    </div>
  )
}

export default App