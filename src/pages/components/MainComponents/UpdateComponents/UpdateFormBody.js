import React, { useEffect } from "react";

import { useState } from "react";

import formImage from "../../../../imgs/loginImage.jpg";

import { useNavigate } from "react-router-dom";
const UpdateFormBody = ({ updateC, handleChanger, course }) => {
  const navigate = useNavigate();

  const [courseName, setCourseName] = useState(course.courseName);

  const [lectures, setLectures] = useState(course.lectures);

  const [hours, setHours] = useState(course.hours);

  const [totalPrice, setTotalPrice] = useState(course.totalPrice);

  const [perMonth, setPerMonth] = useState(course.perMonth);

  const cancel = () => {
    navigate("/");
  };

  let onChange = (e) => {
    let obj = e.target;
    if (obj.classList.contains("courseName")) {
      setCourseName(obj.value);
    } else if (obj.classList.contains("lectures")) {
      setLectures(obj.value);
    } else if (obj.classList.contains("hours")) {
      setHours(obj.value);
    } else if (obj.classList.contains("totalPrice")) {
      setTotalPrice(obj.value);
    } else if (obj.classList.contains("mounth")) {
      setPerMonth(obj.value);
    }

    console.log(courseName, lectures, hours, totalPrice, perMonth);
  };

  useEffect(() => {
    handleChanger(courseName, lectures, hours, totalPrice, perMonth);
  });
  return (
    <section className="formBody">
      <div className="inputs" onChange={onChange}>
        <h1>Update your course</h1>

        <div className="input">
          <input
            type="text"
            className="courseName"
            placeholder="Course Name"
            defaultValue={course.courseName}
          ></input>
        </div>

        <div className="input">
          <input
            type="number"
            className="lectures"
            placeholder="Number of lectures"
            defaultValue={course.lectures}
          ></input>
        </div>

        <div className="input">
          <input
            type="number"
            className="hours"
            placeholder="Total Hours"
            defaultValue={course.hours}
          ></input>
        </div>

        <div className="input">
          <input
            type="number"
            className="minEffort"
            placeholder="Min Effort"
            defaultValue={course.minEffort}
          ></input>
        </div>

        <div className="input">
          <input
            type="number"
            className="maxEffort"
            placeholder="Max Effort"
            defaultValue={course.maxEffort}
          ></input>
        </div>

        <div className="input">
          <input
            type="number"
            className="totalPrice"
            placeholder="Total Price"
            defaultValue={course.totalPrice}
          ></input>
        </div>

        <div className="input">
          <input
            type="number"
            className="mounth"
            placeholder="Price per month"
            defaultValue={course.perMonth}
          ></input>
        </div>
        <div className="buttons">
          <button className="btn enroll" onClick={updateC}>
            Update
          </button>
          <button className="btn cancel" onClick={cancel}>
            Cancel
          </button>
        </div>
      </div>
      <div className="formImage">
        <img src={formImage}></img>
      </div>
    </section>
  );
};

export default UpdateFormBody;
