import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../../Context/Context";

import Data from "../../../../Api";

import profile from "../../../../imgs/profile.png";

import { useNavigate } from "react-router-dom";
import Rating from "../Rating";

const Detail = ({ course }) => {
  const navigate = useNavigate();

  const [user, setUser] = useContext(Context);

  const [createdAt, setCreated] = useState("");

  const [studentEnroled, setEnroled] = useState(0);

  const [subscribed, setSubscribed] = useState(0);

  const [User_id, setId] = useState(0);

  const [creatorPic, setPic] = useState("");

  // let User_id = user.id;

  useEffect(() => {
    if (typeof user == "object") {
      setId(user.id);
    }
  }, [user]);

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

  let course_id = course.id;

  const getCurrentTimestamp = () => {
    const date = new Date();

    const year =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    setCreated(year);
  };

  useEffect(() => {
    getCurrentTimestamp();
  });

  const enrolment = async () => {
    try {
      let data = new Data();

      await data.addEnrolment({ User_id, course_id, createdAt });

      navigate(`/details/${course_id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const studentsEnroled = async () => {
    try {
      let data = new Data();

      let enrolments = await data.getEnrolment();

      let students = enrolments.filter((e) => e.course_id == course.id);

      setEnroled(students.length);
    } catch (e) {
      console.log(e);
    }
  };

  const isEnrolled = async () => {
    try {
      let data = new Data();

      let enrollments = await data.getEnrolment();

      let student = enrollments.filter(
        (e) => e.course_id == course_id && e.User_id == User_id
      );

      setSubscribed(student.length);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteEnrolment = async () => {
    try {
      let data = new Data();

      let enrollments = await data.getEnrolment();

      let enrolment = enrollments.filter(
        (e) => e.course_id == course_id && e.User_id == User_id
      )[0];

      await data.deleteEnrolment(enrolment);

      navigate(`/details/${course_id}`);
    } catch (e) {
      throw new Error(e);
    }
  };

  const cancel = () => {
    navigate("/");
  };

  const delCourse = async (id) => {
    try {
      let data = new Data();

      let courses = await data.getCourses();

      let course = courses.filter((e) => e.id == id);

      await data.deleteCourse(course[0]);

      navigate("/");
    } catch (e) {
      throw new Error(e);
    }
  };

  const toUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  useEffect(() => {
    studentsEnroled();
    isEnrolled();
  });

  return (
    <div className="detail">
      <h1>{course.courseName}</h1>
      <p>
        This is your path to a career in digital marketing. In this program,
        you’ll learn in-demand skills that can have you job-ready in less than 6
        months. No degree or experience required.
      </p>

      <Rating />

      <div className="creator">
        <img src={creatorPic} className="icon"></img>
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
      <p>
        Effort {course.minEffort}–{course.maxEffort} hours per week Self-paced
        learning online
      </p>
      <p>Starts 18 August</p>
      <h4>{studentEnroled} students already enrolled</h4>

      {(() => {
        if (typeof user == "object") {
          if (user.role_id == 1) {
            if (subscribed == 0) {
              return (
                <div className="buttons">
                  <button className="btn enroll" onClick={enrolment}>
                    Enroll now !
                  </button>
                  <button class="btn cancel" onClick={cancel}>
                    Cancel
                  </button>
                </div>
              );
            } else {
              return (
                <>
                  <p>You are enrolled to this course</p>
                  <div className="buttons">
                    <button className="btn unroll" onClick={deleteEnrolment}>
                      Unsubscribe
                    </button>
                    <button class="btn cancel" onClick={cancel}>
                      Cancel
                    </button>
                  </div>
                </>
              );
            }
          } else if (user.role_id == 2) {
            if (user.id == course.creatorId) {
              return (
                <div className="buttons">
                  <button
                    class="btn update"
                    onClick={() => {
                      toUpdate(course.id);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="btn del"
                    onClick={() => {
                      delCourse(course.id);
                    }}
                  >
                    Delete
                  </button>
                  <button className="btn cancel" onClick={cancel}>
                    Cancel
                  </button>
                </div>
              );
            } else {
              return (
                <button className="btn cancel" onClick={cancel}>
                  Cancel
                </button>
              );
            }
          } else if (user.role_id == 3) {
            return (
              <div className="buttons">
                <button className="btn cancel" onClick={cancel}>
                  Cancel
                </button>
                <button
                  className="btn del"
                  onClick={() => {
                    delCourse(course.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          }
        }
      })()}
    </div>
  );
};

export default Detail;
