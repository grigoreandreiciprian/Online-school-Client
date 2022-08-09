import React, { useContext } from 'react'

import {useNavigate} from 'react-router-dom'

import { useState, useEffect } from 'react'

import UpperHeader from '../../HeaderComponents/UpperHeader'

import LogInFormBody from './LogInFormBody'
import { Context } from '../../../../Context/Context'
import Data from '../../../../Api'


import Cookies from 'js-cookie'

export default () => {

    const [email,setEmail]= useState("")

    const [password,setPassword]= useState("")

    const [err,setErr]=useState([]);

    const [user,setUser] = useContext(Context)

    const navigate= useNavigate()


    useEffect(() =>{

      setUser("")
    })


    const handleChanger= (email,password) =>{

        setEmail(email)
        setPassword(password)
    }

    let check=()=>{
      setErr([]);


      if(email == ""){
        setErr((prev=>{
          return [...prev,"Email is required" ];
        }));
      }

      if(password == ""){

        setErr((prev=>{

          return [...prev, "Pasword is required"];
        }));
      }
    }

    const log=  async () =>{

        try{

          check();

          if(err == ""){


            let data= new Data()

            let response= await data.logIn({email,password});
 

           if( response.token){

          
            
            setUser(response);
            Cookies.set("authentificatedUser", JSON.stringify(response));
            navigate("/")
           }else{

            setErr((prev =>{
              alert("Nume sau parola incorecte")
              return [... prev,response];
            }));
           }
           
           
          }

        }catch(e){

            console.log(e)
        }
    }

  return (

    <section className="overlay">
    <UpperHeader />
    <LogInFormBody log={log} handleChanger={handleChanger}/>
   
   </section>
  )
}
