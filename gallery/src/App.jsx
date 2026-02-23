import React, { useState } from 'react'
import Axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await Axios.get('https://picsum.photos/v2/list?page=5&limit=40')
    console.log(response.data)
    setData(response.data);
  }

  let printUserData = 'No User Available'
  if (data.length > 0) {
    printUserData = data.map((elem, idx) => {
      return <div key={idx}>
        <a href={elem.url}>
          <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>

    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <button
        onClick={getData}
        className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white'>
        Get Data
      </button>
      <div className='flex flex-wrap gap-3'>
        {printUserData}
      </div>
    </div>
  )
}

export default App