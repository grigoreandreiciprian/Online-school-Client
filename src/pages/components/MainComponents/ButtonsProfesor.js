import React from 'react'

export default({delCourse,toUpdate,course}) => {
  return (
            <div className="buttons">
            <button
            className="enroll"
            onClick={() => {
                delCourse(course.id);
            }}
            >
            Delete
            </button>
            <button
            className="enroll"
            onClick={() => {
                toUpdate(course.id);
            }}
            >
            Update
            </button>
  </div>
  )
}
