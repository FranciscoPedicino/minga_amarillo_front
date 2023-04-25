import { useState } from 'react'
import './index.css'



import apiUrl from '../api'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Index from './pages/Index'
import Main from './layoust/Main'
function App() {
  const [count, setCount] = useState(0)
  return (
   <body  >
    <Main>
    < Index/>
    </Main>
   
   </body>
   
  )
}

export default App
