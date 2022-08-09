import React from 'react'

import LogoBlack from "../../../imgs/LogoBlack.png"

export default () => {
  return (
    <section className="footerLogo">
            <div className="logo">
                <img src={LogoBlack}></img>
                <h2>Online education and Learning</h2>
            </div>
    
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    
            <div className="social">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
        </section>
  )
}
