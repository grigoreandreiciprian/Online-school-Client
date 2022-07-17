import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'

import Data from '../../Api'

import { Context } from '../../Context/Context'

export default () => {

  let id= useParams().courseId

  let [course,setCourse]= useState("")

   const [user,setUser]= useContext(Context)

  

  const findCourse= async () =>{

    try{

      let data= new Data()

      let courses= await data.getCourses(user.token)

      let course= courses.filter(e => e.id == id)
     
      setCourse(course[0])   

    }catch (e){
      console.log(e)
    }
  }

  useState(()=>{

    findCourse()
  },[])


  return (
    
    <section class="courseDetails">
    <h1>Course details</h1>

    <h2 class="line">Course</h2>
    <h2>{course.courseName}</h2>
    <h2 className="line">Created By</h2>
    <h3>{course.createdBy}</h3>
    <h2 class="line">Departament</h2>
    <h3>{course.department}</h3>
</section>
  )
}
