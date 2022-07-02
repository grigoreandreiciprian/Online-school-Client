import React from 'react'

import { useState } from 'react'

import { useNavigate, useParams  } from 'react-router-dom'

export default  ({handleChanger,cancel,updateC}) => {

    const navigate= useNavigate()

    let [courseName,setName]= useState("")

    let [department,setDepartment]= useState("")

    let id= useParams().courseId



    let onChange=(e)=>{

             let obj=e.target
            if(obj.classList.contains("title")){
                
                setName(obj.value)
            }else if(obj.classList.contains("department")){
                setDepartment(obj.value)
            }

     

        handleChanger(courseName,department);


    }
  return (
    <>
     <div className="form" onChange={onChange}>    

     <h1>Update course</h1>

    <div className="inputs2">        <label for="title">Course Title</label>
         <input type="text" className="title"></input>   
    </div>
     <h2>By Usser</h2>

    <div className="inputs2">
        <label for="description">Course Department</label>
         <input  type="text" className="department"></input>
     </div>

    <div className="buttons">
        <button className=" add btn" onClick={updateC}>Update</button>
        <button className=" cancel btn" onClick={cancel}>Cancel</button>
    </div>

    
 </div>

</>
  )
}
