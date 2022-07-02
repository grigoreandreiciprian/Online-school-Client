import React from 'react'

import Header from './components/Header'

import logo2 from '../imgs/logo2.png'

import LogInMain from './components/LogInMain'

export default () => {
  return (
     <>
       <Header logo={logo2}/>
       <LogInMain />
     </>
  )
}
