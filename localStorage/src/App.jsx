import React from 'react'
import Home from './components/Home'
import Themeprovider from './context/ThemeProvider'

const App = () => {

  // localStorage.setItem("user","Asish Kumar Bera")
  // const user=localStorage.getItem('user')
  // console.log(user)

  return (
    <Themeprovider>
      <Home/>
    </Themeprovider>
  )
}

export default App