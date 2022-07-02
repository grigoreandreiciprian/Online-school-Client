import React from 'react'

import CoursesBox from './CoursesBox'

import Data from '../../Api'

import NewC from './NewC'

import { useState, useEffect } from 'react'

export default () =>{

    const [courses,setCourses]= useState([])


    let getAll= async () =>{

        try{

           let data= new Data()

           let course= await data.getCourses()

           setCourses(course)

        }catch(e){
         
         throw new Error(e)

        }
    }

   useEffect(()=>{

    getAll()

   },[])

  return (
     <>
     <main>
        <CoursesBox  courses={courses}/>
      </main>
     </>
  )
}
