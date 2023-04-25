import Button from './Button'
import React from 'react'

export default function Welcome() {
  return (
    <div className=' h-auto  w-[80%]  absolute bottom-[1rem] left-[2rem] sm:relative bottom-[26rem] left-[10rem] '>
    <div className=' sm:absolute top-10  left-[100px] w-full'>
    <div className='   mt-20 absolute left-[-3vw]   sm:mt-0   sm: h-[20rem]  w-full items-center flex flex-col   sm:mb-0 sm:w-5/6 sm:items-start'> 
           <h1 className= ' w-[80%] text-white font-bold text-2xl w-screen  text-center  sm:text-5xl sm:w-[70%] sm:text-left'>For the love of  manga</h1>
          <h2 className=' mt-2 sm:mt-5   text-xl  text-white font-semibold text-xl p-2 text-center sm:text-4xl  sm:font-normal'>Explore our varieties</h2>
          <h4 className='mt-5 text-2xl text-white hidden font-semibold  sm:block'>#MingaLove❤</h4>
         <button className=' h-[50px] text-2xl  content-center text-center  mt-3 hidden border  sm:block bg-white rounded-md text-orange-500 font-bold py-2 px-12 border-orange-500 hover:bg-orange-500 hover:text-white sm:w-64 hover:border-transparent transition duration-200'>Sign In!</button>
    <Button/>
    </div>
    </div>
    </div>
  )
}
