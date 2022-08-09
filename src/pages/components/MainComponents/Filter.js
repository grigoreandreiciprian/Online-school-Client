import React from 'react'

import { useState, useEffect } from 'react'

export default ({handleChanger, filtering}) => {

  const [filter, setFilterValue]= useState("")

  const onChange= (e) =>{
    let obj=e.target

    // setFilterValue(obj.textContent)

    if(obj.classList.contains("all")){
      setFilterValue("all")
    }else if(obj.classList.contains("graphic")){
      setFilterValue("graphic")
    }else if(obj.classList.contains("programing")){
      setFilterValue("programing")
    }else if(obj.classList.contains("health")){
      setFilterValue("fitness")
    }
  }

   

  useEffect(()=>{
    handleChanger(filter)
    
  })
  return (
    <div className="filter" onClick={onChange}>
            <button className="all" onClick={filtering}>All</button>
            <button className="graphic" onClick={filtering}>Graphic Design</button>
            <button className="programing" onClick={filtering}>Programing</button>
            <button className="health" onClick={filtering}>Health and Fitness</button>
    </div>
  )
}
