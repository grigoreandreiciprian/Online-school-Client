import React, { useState } from 'react'

import UpperHeader from '../../HeaderComponents/UpperHeader'

import SingInformBody from './SingInformBody'

import { useNavigate } from 'react-router-dom'
import Data from '../../../../Api'


export default () => {

    let [firstName,setFirst]=useState("")

    let [lastName,setLast]=useState("")

    let [email,setEmail]=useState("")

    let [age,setAge]=useState(0)

    let [password,setPassword]=useState("")

    let [role_id,setRole]= useState(0)

    const [profile, setProfile]= useState("")

  const navigate= useNavigate();
  
  const log=() =>{

    navigate("/LogIn")
  }
  
  const handlechanger = (firstName,lastName,email,age,password,role_id,profile) =>{

      
      
        setFirst(firstName);
        setLast(lastName);
        setEmail(email);
        setAge(age);
        setPassword(password);
        setRole(role_id)
        setProfile(profile)
   }


const signStudent= async () =>{

    try{
         
        let data= new Data()

        let student= await data.addStudent({firstName,lastName,email,age,password,role_id,profile})

        console.log(student.status)

         
    }catch(e){
         
        throw new Error(e)
    }
}

  return (
    <section className="overlay">
    <UpperHeader />
    <SingInformBody handlechanger={handlechanger} signStudent={signStudent}/>
   
   </section>
  )
}
