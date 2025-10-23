import React, { useState } from 'react'
import Advanced from './components/advanced';
import Destructure from './components/Destructure';

const App = () => {

  const [num, setNum] = useState(0)

  const inc = () => {
    setNum(p => p + 1);
  }

  const dec = () => {
    setNum(p => p - 1);
  }

  const res = () => {
    setNum(0);
  }

  return (
    <>
      <div>
        <h1>{num}</h1>
        <button onClick={inc}>Increase</button>
        <button onClick={res}>Reset</button>
        <button onClick={dec}>Decrease</button>
      </div>
      <hr />
      <Advanced />
      <hr />
      <Destructure />
    </>
  )
}

export default App