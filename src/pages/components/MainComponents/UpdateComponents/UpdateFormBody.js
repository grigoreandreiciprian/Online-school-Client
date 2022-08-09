import React, { useEffect } from 'react'

import { useState } from 'react'

export default ({updateC,handleChanger}) => {

    const [courseName,setCourseName]= useState("")

    const [lectures, setLectures] = useState(0)

    const [hours, setHours] = useState(0)

    const [totalPrice, setTotalPrice]= useState(0)

    const [perMonth, setPerMonth]= useState(0)


    let onChange=(e)=>{

        let obj=e.target
       if(obj.classList.contains("courseName")){
           
           setCourseName(obj.value)
       }else if(obj.classList.contains("lectures")){
          setLectures(obj.value)
       }else if(obj.classList.contains("hours")){
        setHours(obj.value)
       }else if(obj.classList.contains("totalPrice")){
        setTotalPrice(obj.value)
       }else if(obj.classList.contains("mounth")){
        setPerMonth(obj.value)
       }





   console.log(courseName,lectures,hours,totalPrice,perMonth)
}

useEffect(()=>{
    handleChanger(courseName,lectures,hours,totalPrice,perMonth)
})
  return (
   
    <section className="formBody">
      
    <div className="inputs" onChange={onChange} >

                <h1>Update your course</h1>
                
                <div className="input">
                
                    <input type="text" className="courseName" placeholder="Course Name"></input>
                </div>

                <div className="input">
                
                    <input type="number" className="lectures" placeholder="Number of lectures"></input>
                </div>


                <div className="input">
            
                    <input type="number" className="hours" placeholder="Total Hours"></input>
                </div>

                <div className="input">
            
                    <input type="number" className="totalPrice" placeholder="Total Price"></input>
                </div>

                <div className="input">
            
                    <input type="number" className="mounth" placeholder="Price per month"></input>
                </div>

                <button className="btn" onClick={updateC}>Update</button>
            </div>
        </section>
  )
}
