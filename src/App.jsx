import { useState } from 'react'
import './index.css'


import Girl from './assets/images/img1-minga.png'
import Boys from './assets/images/image2-minga.png'
import right from './assets/images/right-circle.png'
import left from './assets/images/left-circle.png'

import apiUrl from '../api'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)
  return (
   <body  >
    <Navbar/>
    <div className=' h-auto  w-[80%]  absolute bottom-[1rem] left-[2rem] sm:relative bottom-[26rem] left-[10rem] '>
    <div className=' sm:absolute top-10  left-[100px] w-full'>
    <div className='   mt-20 absolute left-[-3vw]   sm:mt-0   sm: h-[20rem]  w-full items-center flex flex-col   sm:mb-0 sm:w-5/6 sm:items-start'> 
           <h1 className= ' w-[80%] text-white font-bold text-2xl w-screen  text-center  sm:text-5xl sm:w-[70%] sm:text-left'>For the love of  manga</h1>
          <h2 className=' mt-2 sm:mt-5   text-xl  text-white font-semibold text-xl p-2 text-center sm:text-4xl  sm:font-normal'>Explore our varieties</h2>
          <h4 className='mt-5 text-2xl text-white hidden font-semibold  sm:block'>#MingaLove❤</h4>
         <button className=' h-[50px] text-2xl  content-center text-center  mt-3 hidden border  sm:block bg-white rounded-md text-orange-500 font-bold py-2 px-12 border-orange-500 hover:bg-orange-500 hover:text-white sm:w-64 hover:border-transparent transition duration-200'>Sign In!</button>
     <div className=' '> 
       <button className=" mt-5   w-[18rem]   bg-white rounded-md text-orange-500 font-bold py-2 px-24  hover:bg-orange-500 hover:text-white hover:border-transparent transition duration-200   sm:hidden lg:w-56">Let's go!</button>
    </div>
    </div>
    </div>
    </div>
    <div className="   w-full  flex h-[25rem] content-center items-center  justify-center min-[320px]:text-center max-[640px]:hidden "> 
    <div className="bg-orange-500 h-auto w-[90%] sm:h-[15rem] lg:w-[83%] flex flex-col sm:flex-row justify-between items-center">
   <img className='h-8' src={left} alt="" />
 
  <img className="h-60 mb-16" src={Girl} alt="girl " />
  <img className="h-60  mb-20"src={Boys} alt="boy" />
  <div className="w-full sm:w-[40%] flex flex-col justify-center mt-8 sm:mt-0">
    <h3 className="text-3xl text-white ml-6 sm:ml-10">Shonen</h3>
    <p className="text-white ml-6 sm:ml-10  sm:overflow-auto sm:h-20
">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
  </div>
  <img className='h-8' src={right} alt="" />
</div>
    </div>
  
    <Footer/>
   </body>
  )
}

export default App
