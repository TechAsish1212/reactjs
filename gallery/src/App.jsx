// import React, { useEffect, useState } from 'react'
// import Axios from 'axios'

// const App = () => {

//   const [data, setData] = useState([])

//   const getData = async () => {
//     const response = await Axios.get('https://picsum.photos/v2/list?page=5&limit=40')
//     setData(response.data);
//   }

//   useEffect(()=>{
//     getData()
//   },[])

//   let printUserData = <h3 className='text-2xl text-gray-400'>No User Available</h3>
//   if (data.length > 0) {
//     printUserData = data.map((elem, idx) => {
//       return <div key={idx}>
//         <a href={elem.url} target='_blank'>
//           <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
//             <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
//           </div>
//           <h2 className='font-bold text-lg'>{elem.author}</h2>
//         </a>
//       </div>

//     })
//   }

//   return (
//     <div className='bg-black overflow-auto h-screen p-4 text-white'>
//       <div className='flex flex-wrap gap-3'>
//         {printUserData}
//       </div>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'
// import Axios from 'axios'

// const App = () => {

//   const [data, setData] = useState([])

//   const getData = async () => {
//     const response = await Axios.get('https://picsum.photos/v2/list?page=5&limit=40')
//     setData(response.data);
//   }

//   useEffect(() => {
//     getData()
//   }, [])

//   let printUserData = (
//     <h3 className='text-2xl text-gray-400 w-full text-center mt-10'>
//       No User Available
//     </h3>
//   )

//   if (data.length > 0) {
//     printUserData = data.map((elem) => {
//       return (
//         <div
//           key={elem.id}
//           className='bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 w-60'
//         >
//           <a href={elem.url} target='_blank' rel="noreferrer">
//             <div className='h-40 w-full overflow-hidden'>
//               <img
//                 className='h-full w-full object-cover'
//                 src={elem.download_url}
//                 alt={elem.author}
//               />
//             </div>

//             <div className='p-3'>
//               <h2 className='font-semibold text-lg truncate text-white'>
//                 {elem.author}
//               </h2>
//               <p className='text-sm text-gray-400 mt-1'>
//                 View Profile →
//               </p>
//             </div>
//           </a>
//         </div>
//       )
//     })
//   }

//   return (
//     <div className='bg-black min-h-screen p-6'>
//       <h1 className='text-3xl font-bold text-white mb-6 text-center'>
//         Image Gallery
//       </h1>

//       <div className='flex flex-wrap justify-center gap-6'>
//         {printUserData}
//       </div>
//     </div>
//   )
// }

// export default App    

import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const App = () => {

  const [data, setData] = useState([])
  const [page, setPage] = useState(4)
  const limit = 12

  const getData = async () => {
    const response = await Axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
    )
    setData(response.data)
  }

  useEffect(() => {
    getData()
  }, [page])

  return (
    <div className='bg-black min-h-screen p-6 text-white'>

      <h1 className='text-3xl font-bold text-center mb-8'>
        Image Gallery
      </h1>

      {/* Images Grid */}
      <div className='flex flex-wrap justify-center gap-6'>
        {data.length > 0 ? (
          data.map((elem) => (
            <div
              key={elem.id}
              className='bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 w-60'
            >
              <a href={elem.url} target='_blank' rel="noreferrer">
                <div className='h-40 w-full overflow-hidden'>
                  <img
                    className='h-full w-full object-cover'
                    src={elem.download_url}
                    alt={elem.author}
                  />
                </div>

                <div className='p-3'>
                  <h2 className='font-semibold text-lg truncate'>
                    {elem.author}
                  </h2>
                </div>
              </a>
            </div>
          ))
        ) : (
          <h3 className='text-gray-400 text-xl'>Loading...</h3>
        )}
      </div>

      {/* Pagination */}
      <div className='flex justify-center items-center gap-6 mt-10'>

        <button
          onClick={() => setPage(prev => prev > 1 ? prev - 1 : 1)}
          disabled={page === 1}
          className='px-5 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 disabled:opacity-40 cursor-pointer'
        >
          Previous
        </button>

        <span className='text-lg font-semibold'>
          Page {page}
        </span>

        <button
          onClick={() => setPage(prev => prev + 1)}
          className='px-5 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 cursor-pointer'
        >
          Next
        </button>

      </div>

    </div>
  )
}

export default App