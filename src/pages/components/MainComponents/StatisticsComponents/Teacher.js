import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../Context/Context";

import teacher2 from "../../../../imgs/teacher2.jpg";

import defaultProfile from "../../../../imgs/defaultProfile.jpg";

import { useDispatch, useSelector } from "react-redux";

import Rating from "../Rating";
import Data from "../../../../Api";
const Teacher = ({ teacher, remove, reload }) => {
  const [user, setUser] = useContext(Context);

  const distpatch = useDispatch();

  const [courses, setCourses] = useState(0);

  const [imageUrl, setImage] = useState("null");

  useEffect(() => {
    if (teacher.picture !== null && teacher.picture !== 0) {
      setImage(`data:image/png;base64,${toBase64(teacher.picture.data)}`);
    }
  }, [teacher]);

  useEffect(() => {
    managedCourses();
  }, []);

  function toBase64(arr) {
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  }

  const managedCourses = async () => {
    try {
      let data = new Data();

      let courses = await data.getCourses();

      let managedCourses = courses.filter((e) => e.creatorId == teacher.id);

      setCourses(managedCourses.length);
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <div className="teacher">
      <div className="teacherOverlay">
        <div className="overlayBox">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>

      {(() => {
        if (imageUrl != 0 && imageUrl != "null") {
          return <img src={imageUrl ? imageUrl : "#"} />;
        } else {
          return <img src={defaultProfile} />;
        }
      })()}

      <h1>Proffesor</h1>
      <h1>
        {" "}
        {teacher.firstName} {teacher.lastName}{" "}
      </h1>

      <p>Courses created and managed: {courses}</p>
      {/* <p>Courses created and managed: </p> */}

      <div className="rated">
        <h2>Overall rating</h2>
        <Rating />
      </div>

      <div className="buttons">
        {(() => {
          if (user) {
            if (user.role_id == 3) {
              return (
                <button
                  className="fire"
                  onClick={() => {
                    remove(teacher.id);
                  }}
                >
                  Remove from staff{" "}
                </button>
              );
            }
          }
        })()}
      </div>
    </div>
  );
};

export default Teacher;
