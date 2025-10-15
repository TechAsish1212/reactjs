import './index.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Card />
    </BrowserRouter>
    </>
  )
}

export default App
