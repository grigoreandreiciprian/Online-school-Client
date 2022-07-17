import React, { useContext, useEffect } from 'react'
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Context } from '../../Context/Context'

import Data from '../../Api'

import AddForm from './AddForm'



export default () => {
    const navigate= useNavigate()


    let [user,setUsser]= useContext(Context)

    let [createdBy,setCreate]= useState("")

    useEffect(()=>{
         
        setCreate(user.lastName)
    })
    let [courseName,setName]= useState("")

    let [department,setDepartment]= useState("")

    
     

     const cancel=() =>{

        navigate("/")
     }


     const handlechanger = (courseName,department) =>{

      
      
      setName(courseName);
      setDepartment(department);
     }


     const addCourse= async () =>{
             
        try{

            

              
            let data= new Data();

            let add= await data.addCourse({courseName,department,createdBy})

            navigate("/")    

        }catch(e){

            throw new Error(e)
        }
     }


  return (
    <>
        <main>
         <AddForm handleChanger={handlechanger}  cancel={cancel}  addCourse={addCourse}  />
        </main>
    </>
  )
}
