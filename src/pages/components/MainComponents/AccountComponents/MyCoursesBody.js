import React from "react";

import { useSelector } from "react-redux";

import profile from "../../../../imgs/profile.png";

import Rating from "../Rating";

import { useNavigate } from "react-router-dom";

const MyCoursesBody = ({ course }) => {
  const navigate = useNavigate();

  const toDetails = (id) => {
    navigate(`/details/${id}`);
  };

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

export default MyCoursesBody;
