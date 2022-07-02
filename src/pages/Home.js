import React, { useContext } from 'react'

import Header from './components/Header'

import Main from './components/Main'

import logo2 from '../imgs/logo2.png'

import _header from "../scss/layout/_header.scss"
import { Context } from '../Context/Context'

export default  () => {

  const [user,setUser] = useContext(Context)

   const  acess = () =>{
    setUser("")
   }
  return (
    <>
   <Header logo={logo2} />
    <Main />
    </>
  )
}



