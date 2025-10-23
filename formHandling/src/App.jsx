import React from 'react'

const App = () => {

  const formHandler = (e) => {
    e.preventDefault(); {/* form default action is when form is submit then page is reloaded but using preventDefault() to stop the default behavior of an event from happening. */}
    console.log("Form is Submitted.");
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e);
      }}>
        <input type="text" placeholder='Enter your name.....' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App