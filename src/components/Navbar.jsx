
import MenuMinga from '../assets/images/menu-minga.png'
import LogoMinga from '../assets/images/Logo.png'
import logo_responsive from '../assets/images/logo-responsive.png'
import x from '../assets/images/icons8-x.png'
import boy from '../assets/images/boy-burger.png'

import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import apiUrl from '../../api'

export default function Navbar() {

let [button,setButton]=useState(false)
function show (){
  setButton(!button)

}


  return (
    <header className="  flex flex-col justify-between items-center min-[320px]:max-[540px]:h-screen object-cover flex justify-between">
      <nav className="  absolute top-[0rem] sm:top-[-2rem] flex text-center justify-between items-center w-[90%] h-32  ">
        <img onClick={show} className="h-10" src={MenuMinga} alt="menu" />
        <div className='flex  justify-around content-center items-center  w-[10rem]'>
          <h3 className='flex text-orange-600 text-5xl xsm:hidden '>Minga </h3>
          <img className="h-8 xsm-hidden align-middle flex  justify-end" src={logo_responsive} alt="" /> 
          </div>
      </nav>
      {button && (
        

         
        
        <div className=" absolute left-[-2.5rem] h-[200vh]  w-screen bg-orange-600 rounded-2xl   xsm:flex xsm:justify-around  xsm:w-screen     top-0 z-10 w-full sm:h-[30rem] sm:w-[30rem] sm:flex flex-col justify-evenly  sm:absolute m-10 left-0 top-0 z-10">
          <div className='flex justify-between'>
           <img className=' h-10'  src={boy} alt="" />
            <div>
          <h2 className='text-white text-xl ' >Lucas Ezequiel Silva </h2>
          <h3 className='text-white text-xl '>lucasezequielsilva@gmail.com</h3>
          </div>
          <button className='flex start-0'  onClick={() => setButton(false)}>
            <img className='h-8 ' src={x} alt="Cerrar menú" />
          </button>
          </div>
          <div className="  w-full  flex flex-col items-center justify-between  ">
            <a className=" mt-4 text-center w-[80%] text-white text-xl mb-6 hover:text-orange-600 hover:bg-white rounded-xl" href="#">Home</a>
            <a className="text-center w-[80%] text-white  text-xl mb-6 hover:text-orange-600 hover:bg-white rounded-xl " href="#">Comics</a>
            <a className="text-center w-[80%] text-white text-xl mb-6 hover:text-orange-600 hover:bg-white rounded-xl" href="#">Mycomics</a>
            <a className="text-center w-[80%]  text-white text-xl mb-6 hover:text-orange-600 hover:bg-white rounded-xl" href="#">Favorites</a>
            <a className="text-center w-[80%]  text-white text-xl mb-6 hover:text-orange-600 hover:bg-white rounded-xl" href="#">Logout</a>
          </div>
          
        </div>
      )}
    </header>
  )
}
