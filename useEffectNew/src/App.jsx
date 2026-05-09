import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAlloewd] = useState(false);
  const [password, setPassword] = useState("");
  const [cpoied, setCpoied] = useState(false)

  // useRef hooks
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "~!@#$%^&*()_-+={[}]"
    }

    for (let index = 1; index <= length; index++) {
      let charGen = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(charGen);

      setPassword(pass);

    }

  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCpoied(true);

    setTimeout(() => {
      setCpoied(false);
    }, 2000)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
    {
      cpoied &&(
        <div className="fixed top-5 right-5 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">copied</div>
      )
    }
      <div className="min-h-screen bg-gradient-to-br from-indigo-300 to-purple-300 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-6">

          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent text-center mb-6">
            Password Generator
          </h1>

          <div className="flex items-center bg-white rounded-xl overflow-hidden shadow-md">
            <input
              type="text"
              value={password}
              placeholder="Generated Password"
              readOnly
              className="w-full px-4 py-3 text-gray-700 outline-none"
              ref={passwordRef}
            />

            <button
              className="bg-gradient-to-br from-blue-500 to-purple-500 hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 text-white font-medium px-5 py-3 cursor-pointer"
              onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
          </div>

          <div className='flex text-sm gap-x-2 py-4'>
            <div className='flex items-center gap-x-1'>
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => { setLength(e.target.value) }}
              />
              <label className='text-sm text-gray-800'>Length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                id='numberInput'
                value={numberAllowed}
                className='cursor-pointer'
                onChange={() => { setNumberAllowed((prev) => !prev) }}
              />
              <label htmlFor='numberInput' className='text-sm text-gray-800 cursor-pointer'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                value={characterAllowed}
                id='characterInput'
                className='cursor-pointer'
                onChange={() => { setCharacterAlloewd((prev) => !prev) }}
              />
              <label htmlFor='characterInput' className='text-sm text-gray-800 cursor-pointer'>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App