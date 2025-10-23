import React from 'react'
import { useState } from 'react'

const Destructure = () => {
    const [name, setName] = useState({ user: 'Asish', age: 21 });

    const clikFun = () => {
        const newName = { ...name }; {/* Destructuring */}
        console.log(newName);
        newName.user='Satya';
        newName.age=22;
        setName(newName)
    }

    return (
        <div>
            <h2>Destructuring....</h2>
            <h2>Hii I am {name.user}, My age is {name.age}</h2>
            <button onClick={clikFun}>click Me</button>
        </div>
    )
}

export default Destructure