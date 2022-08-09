import React, { useContext, useEffect } from 'react'
import Data from '../../Api'

import { useState } from 'react'
import {  useNavigate, useParams, Link } from 'react-router-dom'
import { Context } from '../../Context/Context'

export default ({cancel,deleteCourse,toUpdate}) => {


  let [user,setUser] = useContext(Context)

    let id= useParams().courseId

    const navigate= useNavigate()

    let [createdBy,setCreate]= useState("")
  

    const findCourse= async () =>{

      try{

        let data= new Data()

        let courses= await data.getCourses();

        let course= courses.filter(e => e.id == id)[0];

        setCreate(course.createdBy);
         
      
        
      }catch (e){
        console.log(e)
      }
    }

    useEffect(()=>{
      findCourse()

    },[]);

   
    const enroll = async () =>{

      try{

  
          
        let data= new Data()

        let enrolments= await data.getEnrolment()

        let student_id= user.id

        let course_id= id

        const d= new Date()

        const createdAt= d.getTime()


       await data.addEnrolment({student_id,course_id,createdAt})

       alert(`Succesful`)

        

     

      }catch(e){

        console.log(e)
      }

    }


    const unsubscribe = async () =>{

      try{

  
          
        let data= new Data()

        let enrolments= await data.getEnrolment()

        let student_id= user.id

       let enrolment= enrolments.filter(e=> e.student_id == student_id)

       await data.deleteEnrolment(enrolment[0])


       alert("You unsubscribed")
        

     

      }catch(e){

        console.log(e)
      }

    }


    
  return (
    <section className="buttons2">
    <button className="enroll btn2 " onClick={enroll}>Enroll</button>
    <button className="unsub btn2" onClick={unsubscribe}>Unsubscribe</button>

    
    
      {
         user.lastName == createdBy?(
            <>
                 <button className="enroll btn2 " onClick={()=>{
                  toUpdate(id)
                }}>Update</button>
                
                <button className="delete btn2" onClick={() => {
                
                    deleteCourse(id) 

                }}>Delete Course</button>
            
            </>

         ):
         <div></div>
      }

    
    <a href="#">
        <button className="return btn2" onClick={cancel}>Return to list</button>

    </a>
</section>


  )
}
