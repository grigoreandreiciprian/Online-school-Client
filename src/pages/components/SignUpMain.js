import React from 'react'

import Data from '../../Api'

import { useState } from 'react'

import SignUpForm from './SignUpForm'

import { useNavigate, useParams  } from 'react-router-dom'

export default () => {


    let [firstName,setFirst]=useState("")

    let [lastName,setLast]=useState("")

    let [email,setEmail]=useState("")

    let [age,setAge]=useState(0)

    let [password,setPassword]=useState("")

  const navigate= useNavigate();
  
  const log=() =>{

    navigate("/LogIn")
  }
  
  const handlechanger = (firstName,lastName,email,age,password) =>{

      
      
        setFirst(firstName);
        setLast(lastName);
        setEmail(email);
        setAge(age);
        setPassword(password);
   }


const signStudent= async () =>{

    try{
         
        let data= new Data()

        let student= await data.addStudent({firstName,lastName,email,age,password})

         navigate("/")

         alert("Sign Up succesful")

    }catch(e){
         
        throw new Error(e)
    }
}

  return (
    <>
    <SignUpForm  handlechanger={handlechanger} signStudent={signStudent} log={log}/>
    </>
  )
}
