
import MenuMinga from '../assets/images/menu-minga.png'
import LogoMinga from '../assets/images/Logo.png'
import logo_responsive from '../assets/images/logo-responsive.png'
import React from 'react'

export default function Navbar() {
  return (
    <header className=" bg-fondo bg-cover  bg-no-repeat h-[580px] w-scren flex flex-col  justify-between items-center    min-[320px]: max-[540px]:h-screen  object-cover  flex justify-between ">
   
      <nav className="flex text-center  justify-between  items-center w-[90%] h-32    ">
      <img className=" h-10   " src={MenuMinga} alt="menu" /> 
      <img className="h-10 max-[540px]:hidden " src={LogoMinga} alt="logo" />      
       <img className="h-8 min-[541px]:hidden " src={logo_responsive} alt="" /> 
      </nav>
     
    </header >
  )
}
