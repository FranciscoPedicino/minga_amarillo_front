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
//import Youtube from './assets/images/Youtube.png'
 //import Vimeo from './assets/images/Vimeo.png' 






function App() {
  const [count, setCount] = useState(0)

  return (
   <body>
    <header className=" bg-fondo bg-hero bg-contain bg-no-repeat h-screen w-full ">
      <nav className="flex justify-center">
      <div className="flex text-center  justify-between  items-center w-11/12 h-32 border-2  border-white  ">
      <img className="h-10" src={MenuMinga} alt="menu" />
      <img className="h-10" src={LogoMinga} alt="logo" />
      </div>
      </nav>
      <div className="border-2 border-black mt-20 ml-20 w-2/4 ">
        <h2 className="text-white text-5xl " >For the love of manga</h2>
        <h4 className="text-white text-3xl ">Explore our varieties</h4>
        <p className="text-white text-2xl ">#MingaLove❤</p>
        <button className=" text-orange-500 rounded-2xl  h-12  w-60  bg-white">Sign In!</button>
      </div>
    </header>
    <main className=" flex h-screen content-center items-center  justify-center border-2 border-black"> 
<div className=" bg-orange-500 h-64  w-5/6  flex justify-around items-center ">
  <img className="h-60 mb-16" src={Girl} alt="girl " />
  <img className="h-60 mb-20"src={Boys} alt="boy" />
  <div className=" w-2/5 flex flex-col justify-center h-2/4  ">
    <h3 className="text-3xl text-white">Shonen</h3>
    <p className="text-white ">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
  </div>
</div>
    </main>
    <footer className=' h-screen border-2 border-black'>
      <img className="w-full rounded-b-full " src={footer} alt="" />
      <div className='  h-96 border-2 border-black  mt-20'>
        <h2>Home</h2>
        <h2>Mangas</h2>
        <img className="h-10" src={Logo2} alt="" />
      </div>
      <div>
        <div>
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
           {/* <img src={Vimeo} alt="" />
           <img src={Youtube} alt="" /> 
 */}
        </div>
      </div>

    </footer>
   </body>
  )
}

export default App
