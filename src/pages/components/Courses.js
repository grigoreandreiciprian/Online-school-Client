import React from 'react'

import {Link} from "react-router-dom"

export default ({courses}) => {
  return (
    <div className="coursess">
    {
        courses.length>0
        ?courses.map(e=>(
         <div className="course">
             <Link className="link" to={`/details/${e.id}` }>
                 <h2>{e.courseName}</h2>
                 <h1>{e.department}</h1>

             </Link>
   
          </div>
        ))
        :
        <p>Nu avem cursuri momentan</p>
    }
</div>
  )
}
