import React from 'react'

import  { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Data from '../../Api'
import UpdateForm from './UpdateForm'



export default () => {

    const navigate= useNavigate()

    let [courseName,setName]= useState("")

    let [department,setDepartment]= useState("")

    let id= useParams().courseId

    
     

     const cancel=() =>{

        navigate("/")
     }


     const handlechanger = (courseName,department) =>{

      
      
      setName(courseName);
      setDepartment(department);
     }


     const updateC= async () =>{

        try{

            let data= new Data()

            let update= await data.updateCourse({id,courseName,department})

            navigate("/")

        }catch(e){
            console.log(e)
        }
     }

  return (

    
    <>
    <main>
        <UpdateForm  handleChanger={handlechanger}  cancel={cancel}  updateC={updateC}/>
    </main>
    </>
  )
}
