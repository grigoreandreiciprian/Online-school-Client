import React, { useEffect, useState } from 'react'
import Data from '../../../Api'

import StatsBody from '../StatsBody'



export default () => {

  const [totalCourses, setTotalCoures] = useState(0)

  const [totalStudents, setTotalStudents]= useState(0)

  const [totalTutors,setTotalTutors]= useState(0)

  let studentss= "";

  let tutorss= "";

  const getCourses= async () =>{

    try{

      let data = new Data()

      let courses= await data.getCourses()

      setTotalCoures(courses.length)

    }catch(e){

      throw new Error(e)
    }
  }

  const getStudents = async () =>{

    try{

      let data= new Data()

      let users= await data.getUsers()

      let students= users.filter(e=> e.role_id == 1)

     studentss = students

     setTotalStudents(studentss.length)
     


    }catch(e){

      throw new Error(e)
    }
  }


  const getTutors = async () =>{

    try{

      let data= new Data()

      let users= await data.getUsers()

      let tutors= users.filter(e=> e.role_id == 2)

     tutorss = tutors

     setTotalTutors(tutorss.length)
     


    }catch(e){

      throw new Error(e)
    }
  }


   useEffect(()=>{
      setTotalStudents(studentss.length)
      setTotalTutors(tutorss.length)
   },[studentss,tutorss])
  

  useEffect(()=>{
    getCourses()
    getStudents()
    getTutors()
    
  })
  return (
    <section className="Schoolstats">
         <section className="StatsShadow">
              <StatsBody totalCourses={totalCourses}  totalStudents={totalStudents} totalTutors={totalTutors}/>
             
         </section>
    </section>
  )
}
