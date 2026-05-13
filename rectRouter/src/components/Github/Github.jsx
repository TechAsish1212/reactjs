import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {

    // with looader
    const data=useLoaderData();

    // without loader
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/TechAsish1212`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, [])

    return (
        <div className='max-w-4xl mx-auto p-4'>
            <div className='bg-gray-300 rounded-2xl shadow-lg p-6 
                flex flex-col sm:flex-row items-center justify-between gap-6'>

                {/* Image Section */}
                <div className='flex justify-center'>
                    <img
                        src={data.avatar_url}
                        alt="Github Avatar"
                        className='w-40 h-40 rounded-full border-4 border-orange-500 object-cover'
                    />
                </div>

                {/* Details Section */}
                <div className='text-center sm:text-left'>
                    <h1 className='text-2xl sm:text-3xl font-bold text-orange-500 mb-3'>
                        {data.name}
                    </h1>

                    <div className='space-y-2 text-lg sm:text-xl text-gray-800'>
                        <p>
                            <span className='font-semibold'>Followers: </span>{" "}
                            {data.followers}
                        </p>

                        <p>
                            <span className='font-semibold'>Public Repos:</span>{" "}
                            {data.public_repos}
                        </p>

                        <p>
                            <span className='font-semibold'>Username:</span>{" "}
                            {data.login}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Github;

// with loader
export const githubInfo=async()=>{
    const res=await fetch(`https://api.github.com/users/TechAsish1212`);
    return res.json();
}