import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../../../Context/Context";

import profile from "../../../imgs/profile.png";

import { useSelector } from "react-redux";

import { useEffect } from "react";

import Rating from "./Rating";
import { useState } from "react";

const Course = ({ course, delCourse, toUpdate, toDetails }) => {
  const [user, setUser] = useContext(Context);

  const course_id = course.id;

  const [coursePic, setPic] = useState("");

  function toBase64(arr) {
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  }

  useEffect(() => {
    if (course.creatorPicture != null && course.creatorPicture != 0) {
      setPic(`data:image/png;base64,${toBase64(course.creatorPicture.data)}`);
    }
  }, [course]);

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
        <img src={coursePic} className="icon" alt=""></img>
        <h2>
          by {course.creatorFirstName} {course.creatorLastName}
        </h2>
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
