import React, { useContext } from 'react'

import Course from './Course'

import {Link , useNavigate} from "react-router-dom"
import Data from '../../../Api'
import { Context } from '../../../Context/Context'


export default  ({courses}) => {

  const navigate= useNavigate()

  const [user,setUser]= useContext(Context)

  const add=()=>{

    navigate("/add")
  }

  const delCourse = async (id) =>{
    try{
        let data=new Data()

        let courses=  await data.getCourses()

        let course= courses.filter(e=> e.id == id)

        await data.deleteCourse(course[0])

        navigate("/")

        
    }catch(e){
         
        console.log(e)
    }
}

const toUpdate = (id) =>{

  navigate(`/update/${id}`)

}
  

  return (
    <>
      <section class="courses">

        {
          courses.length>0?(
            courses.map(e=> {

              return <Course  course={e}  delCourse={delCourse} toUpdate={toUpdate}/>

          })

          ):
          <h1>We dont have courses avalabile at the moment , plase come back later</h1>
         
        }
           
           {

            user?(
              <button className='enroll' onClick={add}>Add new course</button>
            ):
            <></>
           }
         


       
      

      </section>
    </>
  )
}
