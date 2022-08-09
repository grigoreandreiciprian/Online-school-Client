import React, { useContext } from 'react'

import CoursesBox from './MainComponents/CoursesBox'

import Data from '../../Api'

import StatsMain from './MainComponents/StatsMain'

import Filter from './MainComponents/Filter'

import StatisticsMain from './MainComponents/StatisticsComponents/StatisticsMain'



import { useState, useEffect } from 'react'
import { Context } from '../../Context/Context'

import {useNavigate} from "react-router-dom"

export default () =>{

   let navigate= useNavigate()

    const [courses,setCourses]= useState([])

    const [user,setUser]= useContext(Context)




   //  let getAll= async () =>{

   //      try{

   //         let data= new Data()

   //         let course= await data.getCourses()

   //         setCourses(course)

   //      }catch(e){
         
   //       throw new Error(e)

   //      }
   //  }

   // useEffect(()=>{

   //  getAll()

   // },[])

  return (
     <>
     <main>
     <section className="coursesBox">

       <h1>Browse Our Online Courses</h1>
        <CoursesBox />

      </section>

      <StatsMain />
      <StatisticsMain />
      </main>
     </>
  )
}
