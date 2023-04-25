import footer from '../assets/images/footer-minga.png'
import Logo2 from '../assets/images/Logo-Dos.png'
import Facebook from '../assets/images/Facebook.png'
import Twitter from '../assets/images/Twitter.png'
import Vimeo from '../assets/images/Vimeo.png' 
import Youtube from '../assets/images/Youtube.png'
import Heart from '../assets/images/corazon.png'


import React from 'react'

export default function Footer() {
  return (
    <footer className='   mt-10   h-[32 rem] min-[320px]: max-[540px]:  h-42 '>
    <img className='rounded-[50%_50%_48%52%/_0%_0%_100%_100%] w-[100%]' src={footer} alt="" />
    
     
      <div className='    w-[100%] mt-20 flex  items-center  justify-between  sm:flex-row min-[320px]: max-[644px]:   flex flex-col  justify-around items-center  h-28  '>
        <div className=' h-32 w-1/4 flex justify-evenly items-center min-[320px]: max-[540px]:'>
        <h2  className='text-2xl ' >Home</h2>
        <h2 className=' text-2xl  ml-2'>Mangas</h2>
        </div>
        <img className="h-10 min-[320px]: max-[540px]" src={Logo2} alt="" />
     <div className='h-32 w-1/4 flex flex-col justify-around items-center   '>
      <div className='flex  w-[80%]  justify-evenly min-[320px]: max-[540px]:mt-8 '>
          <img className='   h-8 min-[320px]: max-[540px]:p-1  ' src={Facebook} alt="" />
          <img className='h-8 min-[320px]: max-[540px]:p-1 ' src={Twitter} alt="" />
            <img className='h-8 min-[320px]: max-[540px]:p-1 ' src={Vimeo} alt="" />
            <img className='h-8 min-[320px]: max-[540px]:p-1 w-10' src={Youtube} alt="" /> 
            </div>
           
    
            <div className='flex w-48 bg-orange-600  rounded-lg justify-evenly   '>
            <button className=" flex  gap-2   h-10   text-white   items-center ">Donate <img   src={Heart} alt="" /> </button>
            </div> 
            </div>
            
   
      </div>

    </footer>
  )
}
