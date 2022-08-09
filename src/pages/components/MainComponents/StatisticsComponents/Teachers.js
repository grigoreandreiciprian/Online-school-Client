import React, { useEffect, useState } from 'react'
import Data from '../../../../Api'

import { Navigate, useNavigate } from 'react-router-dom'


import Teacher from './Teacher'


export default ({teachers}) => {



  const navigate= useNavigate()

 
  
  const  remove = async (key) =>{

    try{


     let data= new Data()

      let users=  await data.getUsers()



      let user= users.filter(e=> e.id == key)

      

      await data.removeUser(user[0])

  

     

    }catch(e){
      console.log(e)
    }
  }



  return (
    <div className="teachers">

      {
        teachers.length>0?
        teachers.map(e=>{
          return <Teacher teacher={e}  key={e.id} remove={remove} />
        })
        :
        <p>Ceva nu a mers</p>
      }

    </div>
  )
}
