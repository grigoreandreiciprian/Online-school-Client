import React, { useContext, useEffect, useState } from "react";

import Course from "./Course";

import { Link, useNavigate } from "react-router-dom";
import Data from "../../../Api";
import { Context } from "../../../Context/Context";

import Pagination from "react-bootstrap/Pagination";



import Filter from "./Filter";

export default () => {
  const navigate = useNavigate();


  const [user, setUser] = useContext(Context);

  const [createdAt, setCreated] = useState("");

  const [courses, setCourses] = useState([]) ;

  const [filter, setFilterValue] = useState("");

  const [filteredCourses, setFilteredCourses] = useState([])

  let getAll= async () =>{

    try{

       let data= new Data()

       let course= await data.getCourses()

       setCourses(course)

    }catch(e){
     
     throw new Error(e)

    }
}

useEffect(()=>{

getAll()

},[])

  
 
  const add = () => {
    navigate("/add");
  };

  let active = 1;
  let items = [];

  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={()=>{pagination(number)}}>
        {number}
      </Pagination.Item>
    );
  }

  //todo: 

  // functie ce primeste ca parametru numarul paginii
//[1,2,3,4,5,6,7,8.9,10,11,12,13,14,15];

  let pagination=(number)=>{

    let cursuri=[...courses];

    let nou=[];
    for(let i=2*(number-1)+1;i<=2*number&&i<cursuri.length;i++){

       nou.push(cursuri[i]);
    }

    console.log(nou);
    setCourses(nou);
  }


  const delCourse = async (id) => {
    try {
      let data = new Data();

      let courses = await data.getCourses();

      let course = courses.filter((e) => e.id == id);

      let newCourses = courses.filter((e) => e.id != id);

      setCourses(newCourses);

      await data.deleteCourse(course[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const toUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const toDetails = (id) => {
    navigate(`/details/${id}`);
  };

  const getCurrentTimestamp = () => {
    const date = new Date();

    const year =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    setCreated(year);
  };

  const handleChanger = (filter) => {
    setFilterValue(filter);
  };

  useEffect(() => {
    getCurrentTimestamp();
   
  });

  const enrolment = async (User_id, course_id) => {
    try {
      let data = new Data();

      await data.addEnrolment({ User_id, course_id, createdAt });

      alert("Enrollment succesful");
    } catch (e) {
      console.log(e);
    }
  };

  const filtering = () => {
    if (filter == "all") {
      getAll()
      setFilteredCourses([])
    } else {
      let filtered = courses.filter((e) => e.category == filter);
      setFilteredCourses(filtered);       
    }


  };

  const toStats = () => {
    navigate("/Statistics");
  };


  const returnAll = () =>{
      return (
       courses.map(e =>{

        <Course
        course={e}
        delCourse={delCourse}
        toUpdate={toUpdate}
        enrolment={enrolment}
        toDetails={toDetails}
        key={e.id}
      />
       })                    
    


    );

  }
  return (
    <>
      <Filter handleChanger={handleChanger} filtering={filtering} />


      <section className="courses">
      {
            courses.length > 0 ? (   
            courses.map((e) => {
            return (
              <Course
                course={e}
                delCourse={delCourse}
                toUpdate={toUpdate}
                enrolment={enrolment}
                toDetails={toDetails}
                key={e.id}
              />
            );
          })
        ) : (
          <h1>
            We dont have courses avalabile at the moment , plase come back later
          </h1>
        )}
  

     
            

        {(() => {
          if (user) {
            if (user.role_id == 2) {
              return (
                <button className="enroll" onClick={add}>
                  Add new course
                </button>
              );
            }
          }
        })()}

        <></>
      </section>
      <div className="pagination">
           <Pagination>{items}</Pagination>
      </div>
    </>
  );
};



        
  // courses.length > 0 ? (   
  //   courses.map((e) => {
  //     return (
  //       <Course
  //         course={e}
  //         delCourse={delCourse}
  //         toUpdate={toUpdate}
  //         enrolment={enrolment}
  //         toDetails={toDetails}
  //         key={e.id}
  //       />
  //     );
  //   })
  // ) : (
  //   <h1>
  //     We dont have courses avalabile at the moment , plase come back later
  //   </h1>
  // )}