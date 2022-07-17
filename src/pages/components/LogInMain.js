import React, { useState, useContext,useEffect } from 'react'

import LogInForm from './LogInForm'

import { useNavigate } from 'react-router-dom'
import Data from '../../Api'

import Cookies from 'js-cookie'

import { Context } from '../../Context/Context'



export default () => {

    const [email,setEmail]= useState("")

    const [password,setPassword]= useState("")

    const [err,setErr]=useState([]);

    const [user,setUser] = useContext(Context);

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

            console.log(response.token)
            
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


    const sign=()=>{

        navigate("/SignUp")
    }
  return (
    <>
      <LogInForm  sign={sign}  handleChanger={handleChanger} log={log}/>
    </>
  )
}
