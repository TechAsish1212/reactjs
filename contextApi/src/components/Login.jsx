import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser}=useContext(UserContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password});
    }

    return (
        <div className="flex items-center justify-center h-screen ">
            <form
                onSubmit={handleSubmit}
                className="w-80 bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4"
            >
                <h2 className="text-2xl font-bold text-center text-gray-700">
                    Login
                </h2>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-300 text-red-400"
                />

                <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-300 text-red-400"
                />

                <button
                    type="submit"
                    className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login