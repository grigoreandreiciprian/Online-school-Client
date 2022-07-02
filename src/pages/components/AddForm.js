import React, { useContext } from 'react'

import { useState } from 'react'
import { Context } from '../../Context/Context'

export default ({handleChanger,cancel,addCourse}) => {

    
    let [courseName,setName]= useState("")

    let [department,setDepartment]= useState("")

    const [user,setUser] = useContext(Context)



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
    <div className="form" onChange={onChange}>
         <h1>Create Course</h1>

         <div className="inputs2">
             <label for="title">Course Title</label>
             <input type="text" className="title"></input>
           
         </div>

         <h2>Created by {user.lastName}</h2>

         <div className="inputs2">
             <label for="description">Course Department</label>
             <input  type="text" className="department"></input>
         </div>

         <div className="buttons">
             <button className=" add btn" onClick={addCourse}>Create</button>
             <button className=" cancel btn" onClick={cancel}>Cancel</button>
         </div>

         
     </div>
  )
}
