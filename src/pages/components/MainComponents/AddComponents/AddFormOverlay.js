import React, { useContext, useState, useEffect } from 'react'

import UpperHeader from '../../HeaderComponents/UpperHeader'

import AddFormBody from './AddFormBody'
import Data from '../../../../Api'

import { useNavigate } from 'react-router-dom'
import { Context } from '../../../../Context/Context'

export default () => {
    
    const navigate= useNavigate()

    const [user,setUser]= useContext(Context)

    const [courseName,setCourseName]= useState("")

    const [lectures, setLectures] = useState(0)

    const [hours, setHours] = useState(0)

    const [totalPrice, setTotalPrice]= useState(0)

    const [perMonth, setPerMonth]= useState(0)

    const [createdBy, setCreator] = useState("Unknown")

    const [minEffort,setMin]= useState(0)

    const [maxEffort,setMax]= useState(0)

    const [category,setCategory] = useState("")


    useEffect(()=>{

      if(user){
        setCreator(user.lastName)
      }
    })

    const handlechanger = (courseName,lectures,hours,totalPrice,perMonth,minEffort,maxEffort,category) =>{

      
      
        setCourseName(courseName)
        setLectures(lectures)
        setHours(hours)
        setTotalPrice(totalPrice)
        setPerMonth(perMonth)
        setMin(minEffort)
        setMax(maxEffort)
        setCategory(category)
       }


       const addCourse= async () =>{
             
        try{

            

              
            let data= new Data()

             await data.addCourse({courseName,lectures,createdBy,hours,totalPrice,perMonth,minEffort,maxEffort,category})

            navigate("/")    

        }catch(e){

            throw new Error(e)
        }
     }


  return (
    <section className="overlay">
      <UpperHeader />
      <AddFormBody  handlechanger={handlechanger} add={addCourse} />
     
    </section>
  )
}
