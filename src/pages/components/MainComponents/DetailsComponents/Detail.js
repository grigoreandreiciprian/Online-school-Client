import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../../../Context/Context'

import Data from '../../../../Api'


import profile from "../../../../imgs/profile.png"

import { useNavigate } from 'react-router-dom'
import Rating from '../Rating'

export default ({course}) => {

    const navigate= useNavigate()

    const [createdAt,setCreated] = useState("")

    const [user,setUser]= useContext(Context)

    const [studentEnroled, setEnroled] = useState(0)

    const [subscribed, setSubscribed] = useState(0)

    let User_id= user.id

    let course_id= course.id

    
const getCurrentTimestamp = () =>{
  
    const date= new Date()

    const year= date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();

    setCreated(year)

   
}

useEffect(()=>{
  getCurrentTimestamp()
})


const enrolment = async () =>{

   try{

    let data= new Data()


    await data.addEnrolment({User_id,course_id,createdAt})

    // alert("Enrollment succesful")

    navigate(`/details/${course_id}`)

   }catch(e){
    console.log(e)
   }
}

const studentsEnroled = async () =>{
     
    try{

        let data= new Data();

        let enrolments= await data.getEnrolment()

        let students= enrolments.filter(e => e.course_id == course.id)

        setEnroled(students.length)


    }catch(e){
        console.log(e)
    }
}

const isEnrolled = async () =>{

    try{

        let data= new Data()

        let enrollments= await data.getEnrolment()

        let student= enrollments.filter(e=> e.course_id == course_id  && e.User_id == User_id)

        setSubscribed(student.length)   

    }catch(e){

        console.log(e)
    }
} 


const deleteEnrolment = async () =>{

    try{

        let data= new Data()

        let enrollments= await data.getEnrolment()

        let enrolment= enrollments.filter(e=> e.course_id == course_id  && e.User_id == User_id)[0]

       

        await data.deleteEnrolment(enrolment)
        
        // alert("You unsubscribed")

        navigate(`/details/${course_id}`)

    }catch(e){

        console.log(e)
    }
} 


useEffect(()=>{
    studentsEnroled()
    isEnrolled()
})

   
  return (
    <div className="detail">
            <h1>{course.courseName}</h1>
            <p>This is your path to a career in digital marketing. In this program, you’ll learn in-demand skills that can have you job-ready in less than 6 months. No degree or experience required.</p>

           <Rating />

            <div className="creator">
                <img src={profile} className="icon"></img>
                <h2>by {course.createdBy}</h2>
            </div>
            <p>{course.lectures} lectures ({course.hours} hrs)</p>
            <h3>${course.totalPrice} All Course / ${course.perMonth} per month</h3>
            <p>Effort {course.minEffort}–{course.maxEffort} hours per week
                Self-paced learning online</p>
                <p>Starts 18 August</p>
                <h4>{studentEnroled} students already enrolled</h4>

                {(()=>{

                    if(user.role_id == 1){

                        if(subscribed == 0){

                            return <button className="btn" onClick={enrolment}>Enroll now !</button>
                         }else{
    
                            return(
                            <>
                            <p>You are enrolled to this course</p>
                            <button className="btn" onClick={deleteEnrolment}>Unsubscribe</button>
                            </>
    
                            )
                         }
    
                    }

                     

                })()}
                
              
              
         </div>

  )
}
