import { useState } from 'react'
import './index.css'
import MenuMinga from './assets/images/menu-minga.png'
import LogoMinga from './assets/images/Logo.png'
import Girl from './assets/images/img1-minga.png'
import Boys from './assets/images/image2-minga.png'
import footer from './assets/images/footer-minga.png'
import Logo2 from './assets/images/Logo-Dos.png'
import Facebook from './assets/images/Facebook.png'
import Twitter from './assets/images/Twitter.png'
import Vimeo from './assets/images/Vimeo.png' 
import Youtube from './assets/images/Youtube.png'
import Heart from './assets/images/corazon.png'
import right from './assets/images/right-circle.png'
import left from './assets/images/left-circle.png'
import logo_responsive from './assets/images/logo-responsive.png'



function App() {
  const [count, setCount] = useState(0)
  return (
   <body >
    <header className=" bg-fondo bg-cover  bg-no-repeat h-screen w-[100%] flex flex-col  justify-evenly items-center    min-[320px]: max-[540px]:h-screen w-screen object-cover  flex justify-between ">
   
      <nav className="flex text-center  justify-between  items-center w-[92%] h-32  border border-white  ">
        
      <img className=" h-10   " src={MenuMinga} alt="menu" /> 
      <img className="h-10 max-[540px]:hidden " src={LogoMinga} alt="logo" />      
       <img className="h-8 min-[541px]:hidden " src={logo_responsive} alt="" /> 
      </nav>
      <div className=' border border-white  h-[20rem]  w-scren items-center flex flex-col    sm:mb-0 sm:w-5/6 sm:items-start'> 
           <h1 className= '  text-white font-bold text-3xl w-[80%]  text-center  sm:text-6xl sm:w-[70%] sm:text-left'>For the love of  manga</h1>
          <h2 className='mt-5   text-xl  text-white font-semibold  p-2 text-center sm: text-3xl  sm:font-normal'>Explore our varieties</h2>
          <h4 className='mt-5 text-2xl text-white hidden font-semibold  sm:block'>#MingaLove❤</h4>
         <button className=' mt-3 hidden border  sm:block bg-white rounded-md text-orange-500 font-bold py-2 px-12 border-orange-500 hover:bg-orange-500 hover:text-white sm:w-64 hover:border-transparent transition duration-200'>Sign In!</button>
     <div className=' '> 
       <button className=" mt-5    bg-white rounded-md text-orange-500 font-bold py-2 px-24  hover:bg-orange-500 hover:text-white hover:border-transparent transition duration-200   sm:hidden lg:w-56">Let's go!</button>
    </div>
    </div>
     {/*   <div className=' h-24 border border-black '>
      </div> */} 
    </header >
    <main className=" flex h-[25rem] content-center items-center  justify-center min-[320px]:text-center max-[640px]:hidden "> 
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
    </main>
    <footer className='mt-10   h-[30 rem] min-[320px]: max-[540px]:  h-42 '>
    <img className='rounded-[50%_50%_48%52%/_0%_0%_100%_100%] w-[100%]' src={footer} alt="" />
     
      <div className='  w-[100%] mt-20 flex  items-center  justify-between sm:flex-row min-[320px]: max-[644px]:   flex flex-col  justify-around items-center  h-28  '>
        <div className=' h-32 w-1/4 flex justify-evenly items-center min-[320px]: max-[540px]:'>
        <h2>Home</h2>
        <h2 className='  ml-2'>Mangas</h2>
        </div>
        <img className="h-10 min-[320px]: max-[540px]" src={Logo2} alt="" />
     <div className='h-32 w-1/4 flex flex-col justify-around items-center  '>
      <div className='flex  w-[80%]  justify-evenly min-[320px]: max-[540px]:mt-8 '>
          <img className='h-7 min-[320px]: max-[540px]:p-1  ' src={Facebook} alt="" />
          <img className='h-7 min-[320px]: max-[540px]:p-1 ' src={Twitter} alt="" />
            <img className='h-7 min-[320px]: max-[540px]:p-1 ' src={Vimeo} alt="" />
            <img className='h-7 min-[320px]: max-[540px]:p-1 w-10' src={Youtube} alt="" /> 
            </div>
            <div className='flex w-48  bg-orange-600 rounded-lg justify-evenly   '>
            <button className=" flex  gap-2   h-10   text-white   items-center ">Donate <img   src={Heart} alt="" /> </button>
            
            </div> 
            </div>
            
   
      </div>

    </footer>
   </body>
  )
}

export default App
