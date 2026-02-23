import './index.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { BrowserRouter } from 'react-router-dom'
import GuessNumberGame from './components/GuessNumber'


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Card />
      <GuessNumberGame/>
    </BrowserRouter>
    </>
  )
}

export default App
