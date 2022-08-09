import React, { useContext } from "react";
import { useNavigate , Link } from "react-router-dom";
import { Context } from "../../../Context/Context";

import profile from "../../../imgs/profile.png";

import Rating from "./Rating";

import ButtonsProfesor from "./ButtonsProfesor";



export default ({ course, delCourse, toUpdate , toDetails}) => {
  const [user, setUser] = useContext(Context);

  const User_id= user.id;
  const course_id= course.id

  

  const buttonsProfessor = () => {
    if (user.lastName == course.createdBy) {
      return (
        <>
         <ButtonsProfesor delCourse={delCourse}  toUpdate={toUpdate} course={course}/>
        </>
      );
    } 
    
  };

  const buttonsStudent = () =>{
     return (
     <> 
     
       <button className="enroll" onClick={()=>{
         toDetails(course.id)
       }}>More info</button>
     </>

     )
  }

  

  

  return (
    <div className="course">
      <h1 className="cursor" onClick={()=>{
        toDetails(course.id)
      }}>{course.courseName}</h1>
     <Rating />

      <div className="creator">
  
        <img src={profile} className="icon"></img>
        <h2>by {course.createdBy}</h2>
      </div>

      <p>
        {course.lectures} lectures ({course.hours} hrs)
      </p>
      <h3>
        ${course.totalPrice} All Course / ${course.perMonth} per month
      </h3>

      {(() => {
        if (user) {
          if (user.role_id == 2  ) {
            return buttonsProfessor();
          }

         
            return buttonsStudent()
          
        }
      })()
      
      }
    </div>
  );
};

// if (user) {

//     if (user.role_id == 2) {
//       if (user.lastName == course.createdBy) {
//         <div className="buttons">
//           <button
//             class="enroll"
//             onClick={() => {
//               delCourse(course.id);
//             }}
//           >
//             Delete
//           </button>
//           <button
//             class="enroll"
//             onClick={() => {
//               toUpdate(course.id);
//             }}
//           >
//             Update
//           </button>
//         </div>;
