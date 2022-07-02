import React from 'react'

import Courses from './Courses'
import NewC from './NewC'

export default  ({courses}) => {
  return (
    <>
      <section className="coursesBox">
             <Courses courses={courses}/>
             <NewC />
     </section>
    </>
  )
}
