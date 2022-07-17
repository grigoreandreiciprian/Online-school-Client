import React from 'react'

import Logo from './HeaderComponents/Logo'

import Nav from './HeaderComponents/Nav'

import Overlay from './HeaderComponents/Overlay'

import UpperHeader from './HeaderComponents/UpperHeader'



 import _header from "../../scss/layout/_header.scss"



export default ({logo}) => {
  return (

    <>
        <header>
       
           <Overlay />
        </header>
    </>
  )
}
