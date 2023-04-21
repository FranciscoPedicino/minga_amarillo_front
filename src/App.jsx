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








function App() {
  const [count, setCount] = useState(0)

  return (
   <body >
    <header className=" bg-fondo bg-hero bg-contain bg-no-repeat h-screen w-[100%] flex flex-col justify-around items-center  ">
   
      <nav className="flex text-center  justify-between  items-center w-[92%] h-32  ">
      <img className="h-10" src={MenuMinga} alt="menu" />
      <img className="h-10" src={LogoMinga} alt="logo" />
      </nav>
      <div className=" h-[40%]  w-[92%] ">
        <h2 className="text-white text-6xl   font-['Poppins']  " >For the love of manga</h2>
        <h4 className="text-white text-3xl ">Explore our varieties</h4>
        <p className="text-white text-2xl ">#MingaLove❤</p>
        <button className=" text-orange-500 rounded-2xl  h-12  w-60 mt-4 bg-white">Let’s go!</button>
      </div>
      <div className=' h-24 '>
     

      </div>
    </header>
    <main className=" flex h-screen content-center items-center  justify-center "> 
<div className=" bg-orange-500 h-64  w-[83%]  flex justify-around items-center ">
  <img className="h-60 mb-16" src={Girl} alt="girl " />
  <img className="h-60  mb-20"src={Boys} alt="boy" />
  <div className=" w-[40%] flex flex-col justify-center h-2/4   ">
    <h3 className="text-3xl text-white ml-10">Shonen</h3>
    <p className="text-white  ml-10">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
  </div>
</div>
    </main>
    <footer className=' h-screen  '>
    <img className='rounded-[50%_50%_48%52%/_0%_0%_100%_100%] w-[100%]' src={footer} alt="" />
     
      <div className=' h-48 w-[100%] mt-20 flex  items-center  justify-between'>
        <div className=' h-32 w-1/4 flex justify-evenly items-center'>
        <h2>Home</h2>
        <h2>Mangas</h2>
        </div>
        <img className="h-10" src={Logo2} alt="" />
     <div className='h-32 w-1/4 flex flex-col justify-around items-center  '>
      <div className='flex  w-[80%]  justify-evenly'>
          <img className='h-7' src={Facebook} alt="" />
          <img className='h-7' src={Twitter} alt="" />
            <img className='h-7' src={Vimeo} alt="" />
            <img className='h-7' src={Youtube} alt="" /> 
            </div>
            <div className='flex w-48  bg-orange-600 rounded-lg justify-evenly  '>
            <button className=" flex  gap-2   h-10   text-white   items-center ">Donate <img   src={Heart} alt="" /> </button>
            
            </div> 
            </div>
            
   
      </div>

    </footer>
   </body>
  )
}

export default App
