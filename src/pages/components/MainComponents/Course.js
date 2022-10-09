import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../../../Context/Context";

import profile from "../../../imgs/profile.png";

import { useSelector } from "react-redux";

import Rating from "./Rating";

const Course = ({ course, delCourse, toUpdate, toDetails }) => {
  const [user, setUser] = useContext(Context);

  // const logedUser = useSelector((state) => state.logedUser.user);
  const course_id = course.id;

  return (
    <div className="course">
      <h1
        className="cursor"
        onClick={() => {
          toDetails(course.id);
        }}
      >
        {course.courseName}
      </h1>
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

      <button
        className="enroll"
        onClick={() => {
          toDetails(course.id);
        }}
      >
        More info
      </button>
    </div>
  );
};

export default Course;
