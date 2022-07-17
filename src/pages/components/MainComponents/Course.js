import React, { useContext } from 'react'
import { Context } from '../../../Context/Context'

import profile from '../../../imgs/profile.png'

export default ({course,delCourse,toUpdate}) => {


    const [user,setUser]= useContext(Context)

    console.log(user.role_id)

  

    
  return (
            <div class="course">
            <h1>{course.courseName}</h1>
            <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>

            <div class="creator">
                <img src={profile} class="icon"></img>
                <h2>by {course.createdBy}</h2>
            </div>
            
            <p>{course.lectures} lectures ({course.hours} hrs)</p>
            <h3>${course.totalPrice} All Course / ${course.perMonth} per month</h3>



        {(() => {
            if (user) {

               
                
                
                if(user.lastName == course.createdBy){
                    <div className='buttons'>
                        <button class="enroll" onClick={()=>{
                            delCourse(course.id)
                        }}>Delete</button>
                        <button class="enroll" onClick={()=>{

                            toUpdate(course.id)
                        }}>Update</button>
                    </div>
                    
                    }else if(user.role_id == 1){
                    return <>
                    
                    <button class="enroll">Enroll now !</button>
                    </>
                }else{
                    return <></>
                }
                
                
            
                 
                
         
            }
      })()}
           
        </div>
  )
}
