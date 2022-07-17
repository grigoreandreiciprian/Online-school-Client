import React, { useContext } from 'react'

import whiteLogo from "../../../imgs/WhiteLogo.png"

import {Link, useNavigate} from "react-router-dom"
import { Context } from '../../../Context/Context'

export default () => {

    const [user,setUser]= useContext(Context)

    const navigate= useNavigate()


    const out=()=>{
            
        navigate("/LogIn")
        setUser("")
    }
  return (

    <div class="upperHeader">
                
                <div class="logo">
                <Link  className='logoLink' to={"/"}>
                         <img src={whiteLogo}></img>
                 </Link>
                    
                    <h2>Online education and Learning</h2>
                </div>
            
           
           <div class="content">
                    <div class="contact">

                        <div class="contactBox">
                            <i class="fa-solid fa-clock"></i>
                            <div class="contactText">
                                <p>Monday-Friday</p>
                                <p>8:00Am - 8:00PM</p>
                            </div>
                        </div>


                        <div class="contactBox">
                            <i class="fa-solid fa-phone"></i>
                            <div class="contactText">
                                <p>Call Us</p>
                                <p>+2 392 3929 210</p>
                            </div>
                        </div>
                    </div>


                    <div class="social">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>

                   {
                    user?(

                        <div className='sign'>
                            <i class="fa-solid fa-arrow-right-from-bracket big" onClick={out}></i>
                        </div>

                    ):(
                        
                        <div class="sign">
                        <Link className="link" to={"/LogIn"}>
                            Log in
                        </Link>

                        <Link className="link" to={"/SignUp"}>
                            Sign Up
                        </Link>
                    </div>
                    )
                   }
                    

            </div>
        </div>

  )
}
