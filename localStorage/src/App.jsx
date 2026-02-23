import React from 'react'

const App = () => {

  localStorage.setItem("user","Asish Kumar Bera")
  const user=localStorage.getItem('user')
  console.log(user)

  return (
    <div>App</div>
  )
}

export default App