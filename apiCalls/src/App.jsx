import React from 'react'
import Axios from 'axios';
import { useState } from 'react';

const App = () => {
  // we are call API using two ways first one is fetch method which in-built in react , another one is axios method which is third party 

  // state define for using the data 
  const [data, setData] = useState([])

  // fetch method
  // async function handleData() {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(res)

  // }

  // Axios method
  const handleData=async()=>{
    const res=await Axios.get('https://picsum.photos/v2/list')
    console.log(res.data)
    setData(res.data);
  }
  return (
    <div>
      <button onClick={handleData}>Get Data</button>
      <div>
        {
          data.map((name,idx)=>{
            return <h3 key={idx}>{name.author}</h3>
          })
        }
      </div>
    </div>
  )
}

export default App