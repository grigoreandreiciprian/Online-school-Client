import React from 'react'

import teacher1 from "../../../imgs/teacher1.png"

import teacher2 from "../../../imgs/teacher2.jpg"

import teacher3 from "../../../imgs/teacher3.jpg"


export default  () =>{
  return (
    <div className="footerPosts">
    <h1>Recent posts</h1>

    <div className="footerContent">
        <img src={teacher1}></img>
        <div className="post">
            <div className="date">
                <i className="fa-solid fa-calendar"></i>
                <p>Jan 18 2022</p>
                <i className="fa-solid fa-user"></i>
                <p>Admin</p>
            </div>
            <h1>Creativity and Inspiration</h1>
        </div>
      
    </div>


    <div className="footerContent">
        <img src={teacher2}></img>
        <div className="post">
            <div className="date">
                <i className="fa-solid fa-calendar"></i>
                <p>Jan 18 2022</p>
                <i className="fa-solid fa-user"></i>
                <p>Admin</p>
            </div>
            <h1>Creativity and Inspiration</h1>
        </div>
      
    </div>


    <div className="footerContent">
        <img src={teacher3}></img>
        <div className="post">
            <div className="date">
                <i className="fa-solid fa-calendar"></i>
                <p>Jan 18 2022</p>
                <i className="fa-solid fa-user"></i>
                <p>Admin</p>
            </div>
            <h1>Creativity and Inspiration</h1>
        </div>
      
    </div>
  
</div>

  )
}
