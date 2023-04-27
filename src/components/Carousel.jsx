
import right from '../assets/images/right-circle.png'
import left from '../assets/images/left-circle.png'
import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import apiUrl from '../../api'


export default function Carousel() {

useEffect(
  //concateno el endpoint 
  ()=>{ axios(apiUrl+'categories').then( res => setCategories(res.data.categories)).catch(err=> console.log(err))},
  [] //array vacio porque hay que fetchear una unica vez al componente
  
)
let [categories,setCategories]=useState([])
console.log(categories);


 let [counter,setCounter]= useState(0)
  
  let sumar =()=>{  
      setCounter(counter+1)
      if (counter===categories.length-1){
          setCounter(0)
      }
}
let restar = ()=>{
  setCounter(counter-1)
  if (counter===0){
    setCounter(categories.length-1)
}
} 

  return (
    <div className="    w-full  flex h-[25rem] content-center items-center  justify-center xsm:hidden "> 
    <div style={{backgroundColor:categories[counter]?.color}} className="h-auto w-[90%] sm:h-[15rem] lg:w-[83%] flex flex-col sm:flex-row justify-between items-center">
   <img  onClick={restar}  className='h-8' src={left} alt="" />
 
  <img className="h-60 mb-16" src={categories[counter]?.character_photo} alt="girl " />
  <img className="h-60  mb-20"src={categories[counter]?.cover_photo} alt="boy" />
  <div className="w-full sm:w-[40%] flex flex-col justify-center mt-8 sm:mt-0">
    <h3 className="text-3xl text-white ml-6 sm:ml-10">{categories[counter]?.name}</h3>
    <p className="text-white ml-6 sm:ml-10  sm:overflow-auto sm:h-20"> {categories[counter]?.description}</p>
  </div>
  <img  onClick={sumar}  className='h-8' src={right} alt="" />
</div>
    </div>
  )
}
