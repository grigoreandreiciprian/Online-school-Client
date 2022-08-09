import React, { useEffect, useState } from 'react'

import StatisticsBody from './Teachers'


import Footer from '../../Footer'

 import CourseDetailHead from '../../CourseDetailHead'

 import Teachers from './Teachers'
import Data from '../../../../Api'

export default () => {

    const [teachers,setTeachers]= useState("")


    const getTeachers = async ()=>{

        try{

            let data= new Data()

            let users = await data.getUsers()

            let teachers= users.filter(e=> e.role_id == 2)

            setTeachers(teachers)

        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getTeachers()
    },[])




  return (
    <>
    {/* <CourseDetailHead /> */}

    {/* <main> */}

    <section className="statistics">
                <h1>Schooll Staff</h1>
                <h1>Our tutors</h1>

                <Teachers  teachers={teachers}/>
                
     </section>      


     {/* </main>      */}

     {/* <Footer /> */}

    </>
  )
}
