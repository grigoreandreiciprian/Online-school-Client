import React, { useContext } from 'react'


import  { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../../../../Context/Context'

import UpdateFormBody from './UpdateFormBody'

import UpperHeader from '../../HeaderComponents/UpperHeader'

import Data from '../../../../Api'
import UpdateForm from './UpdateForm'




export default () => {

    const navigate= useNavigate()

    const [user,setUser]= useContext(Context)

    const [courseName,setCourseName]= useState("")

    const [lectures, setLectures] = useState(0)

    const [hours, setHours] = useState(0)

    const [totalPrice, setTotalPrice]= useState(0)

    const [perMonth, setPerMonth]= useState(0)

    let id= useParams().courseId

    
    

    const handlechanger = (courseName,lectures,hours,totalPrice,perMonth) =>{

      
      
        setCourseName(courseName)
        setLectures(lectures)
        setHours(hours)
        setTotalPrice(totalPrice)
        setPerMonth(perMonth)
       }


     const updateC= async () =>{

        try{

            let data= new Data()

            let update= await data.updateCourse({id,courseName,lectures,hours,totalPrice,perMonth})

            navigate("/")

        }catch(e){
            console.log(e)
        }
     }

  return (
    <section class="overlay">
      <UpperHeader />
      <UpdateFormBody  updateC={updateC} handleChanger={handlechanger}/>
     
    </section>
  )
}
