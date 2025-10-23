import React, { useState } from 'react'

// two-way-binding----> When data changes in the UI, it updates the state (model) — and when state changes, it updates the UI automatically.

/* 
So the data flows both ways

-> from the state to the UI, and
-> from the UI back to the state.
*/

const App = () => {

  const [title, setTitle] = useState('')

  const formHandle = (e) => {
    e.preventDefault();
    console.log('Form is Submited', title);
    setTitle('')
  }

  const handleChanges = (e) => {
    setTitle(e.target.value) // updates state from UI
  }

  return (
    <div>
      <h1>Two Way Binding</h1>
      <form onSubmit={(e) => {
        formHandle(e);
      }}>
        <input
          type="text"
          placeholder='Enter your name...'
          value={title} // UI updates when state changes
          onChange={handleChanges} // state updates when UI changes
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App