import React from 'react'
import Data from '../../Api'

import { useState } from 'react'
import {  useNavigate, useParams, Link } from 'react-router-dom'

export default ({cancel,deleteCourse,toUpdate}) => {

    let id= useParams().courseId

    const navigate= useNavigate()

    
    

    

    
  return (
    <section class="buttons2">
    <button class="enroll btn2 ">Enroll</button>
    <button class="unsub btn2">Unsubscribe</button>
    
    <button class="enroll btn2 " onClick={()=>{
      toUpdate(id)
    }}>Update</button>
    
    <button class="delete btn2" onClick={() => {

     deleteCourse(id)
      

    }}>Delete Course</button>
    <a href="#">
        <button class="return btn2" onClick={cancel}>Return to list</button>

    </a>
</section>


  )
}
