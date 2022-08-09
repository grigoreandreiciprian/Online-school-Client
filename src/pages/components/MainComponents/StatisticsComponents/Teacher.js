import React, { useContext, useEffect } from 'react'
import { Context } from '../../../../Context/Context'

import teacher2 from "../../../../imgs/teacher2.jpg"




import Rating from '../Rating'
export default ({teacher , remove, reload}) =>{


   const [user, setUser]= useContext(Context)
  
  return (
    <div className="teacher">
         <div className="teacherOverlay">
                        <div className="overlayBox">
                       
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                        </div>
           </div>
    <img src={teacher2}></img>
    <h1>Proffesor</h1>
    <h1> {teacher.firstName} {teacher.lastName}</h1>
    <p>Age:{teacher.age}</p>
    {/* <p>Courses created and managed: </p> */}

    <div className="rated">
        <h2>Overall rating</h2>
       <Rating />
    </div>

    <div className="buttons">

      {(()=>{
           
           if(user){

            if(user.role_id == 3){
              return(

                <button className="fire" onClick={()=>{
                  remove(teacher.id)
                }}>Remove from staff </button>
              )
            }
           }
      })()}
        
    </div>
</div>
  )
}
