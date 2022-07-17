import React, { useContext, useEffect } from 'react'

import Header from './components/Header'

import Main from './components/Main'



import _header from "../scss/layout/_header.scss"
import { Context } from '../Context/Context'

import {useNavigate} from "react-router-dom"

export default  () => {

  const [user,setUser] = useContext(Context)

  let navigate= useNavigate()
    
  useEffect(()=>{
    
    if(user){
      navigate("/")
    }else{
      navigate("/LogIn")
    }
  },[])
   const  acess = () =>{
    setUser("")
   }
  return (
    <>
   <Header  />
    <Main />
    </>
  )
}



