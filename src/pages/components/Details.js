import React from 'react'

import Buttons from './Buttons'
import DetailsContent from './DetailsContent'
import { useNavigate } from 'react-router-dom'
import Data from '../../Api'

export default () => {
    const navigate= useNavigate()

    const cancel=() =>{

        navigate("/")
     }

     const toUpdate = (id) =>{

      navigate(`/update/${id}`)

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
  return (
    <>
    <section className='details'>
            <Buttons  cancel={cancel} deleteCourse={delCourse} toUpdate={toUpdate}/>
            <DetailsContent />
    </section>

    </>
  )
}
