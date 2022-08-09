import React from 'react'

export default ({totalCourses, totalStudents, totalTutors}) => {
  return (
    <>

            <div className="stat">
            <i className="fa-solid fa-graduation-cap"></i>
            <div className="statText">
                <h2>{totalStudents}</h2>
                <p>Students enrolled</p>
            </div>
        
        </div>


        <div className="stat">
            <i className="fa-solid fa-chalkboard-user"></i>
            <div className="statText">
                <h2>{totalTutors}</h2>
                <p>Trusted tutors</p>
            </div>
        </div>

        <div className="stat">
            <i className="fa-solid fa-book-open"></i>
            <div className="statText">
                <h2>{totalCourses}</h2>
                <p>Active courses</p>
            </div>
        </div>

    </>
  )
}
