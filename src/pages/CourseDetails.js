import React from 'react'

import Header from './components/Header'

import logo2 from '../imgs/logo2.png'

import Details from './components/Details'

export default () => {

  return (
    <>
    <Header logo={logo2}/>
    <main>
         <Details />
    </main>
    </>
  )
}
