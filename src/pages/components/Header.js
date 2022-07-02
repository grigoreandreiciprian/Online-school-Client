import React from 'react'

import Logo from './Logo'

import Nav from './Nav'

 import _header from "../../scss/layout/_header.scss"



export default ({logo}) => {
  return (

    <>
        <header>
        <section className="headerContent">
            <Logo  logo={logo}/>
            <Nav />
        </section>
        </header>
    </>
  )
}
