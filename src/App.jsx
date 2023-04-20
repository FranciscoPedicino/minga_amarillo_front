import { useState } from 'react'
import './index.css'
import MenuMinga from './assets/images/menu-minga.png'
import LogoMinga from './assets/images/Logo.png'
import Girl from './assets/images/img1-minga.png'
import Boys from './assets/images/image2-minga.png'

function App() {
  const [count, setCount] = useState(0)

  return (
   <body>
    <header className=" bg-fondo bg-hero bg-contain bg-no-repeat   h-screen w-screen  ">
      <div className="flex justify-center">
      <div className="flex text-center  justify-between  items-center w-11/12 h-32 border-2  border-white  ">
      <img className="h-10" src={MenuMinga} alt="menu" />
      <img className="h-10" src={LogoMinga} alt="logo" />
      </div>
      </div>
      <div className="border-2 border-black mt-20 ml-20 w-2/4 ">
        <h2 className="text-white text-5xl " >For the love of manga</h2>
        <h4 className="text-white text-3xl ">Explore our varieties</h4>
        <p className="text-white text-2xl ">#MingaLove❤</p>
        <button className=" text-orange-500 rounded-2xl  h-12  w-60  bg-white">Sign In!</button>
      </div>
    </header>
    <main className="min-h-screen flex content-center justify-center"> 
<div className=" h-64 border-2 w-5/6 border-black flex justify-around items-center mt-20">
  <img className="h-60 mb-16" src={Girl} alt="girl " />
  <img className="h-60 mb-20"src={Boys} alt="boy" />
  <div className="border-2 border-black w-2/5 flex flex-col justify-center h-2/4  ">
    <h3 className="text-3xl">Shonen</h3>
    <p>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
  </div>
</div>
    </main>
    <footer>

    </footer>
   </body>
  )
}

export default App
