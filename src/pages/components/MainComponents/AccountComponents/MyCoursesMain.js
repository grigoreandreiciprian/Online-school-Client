import React from "react";
import MyCoursesBody from "./MyCoursesBody";
import CourseDetailHead from "../../CourseDetailHead";
import Footer from "../../Footer";
import { useSelector } from "react-redux";
import Data from "../../../../Api";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyCoursesMain = () => {
  const user = useSelector((state) => state.logedUser.user);

  const navigate = useNavigate();

  const [course, setCourse] = useState([]);

  const courses = async () => {
    try {
      let data = new Data();

      if (user.role_id == 2) {
        let courses = await data.getCourses();

        let profesorCourse = courses.filter((e) => e.creatorId == user.id);

        setCourse(profesorCourse);
      } else if (user.role_id == 1) {
        let enrolments = await data.getEnrolment();

        let courses = await data.getCourses();

        let studentCourses = [];

        enrolments.forEach((enrolment) => {
          let course = courses.filter((e) => e.id == enrolment.course_id);

          if (course.length > 0) {
            studentCourses.push(course[0]);
          }
        });

        console.log(studentCourses);

        setCourse(studentCourses);
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    courses();
  }, []);

  return (
    <>
      <CourseDetailHead />

      <section className="coursesBox">
        <h1 class="title">My courses</h1>

        <section class="courses">
          {/* <h1 class="title">My courses</h1> */}

          {course.length > 0 ? (
            course.map((e) => {
              return <MyCoursesBody course={e} />;
            })
          ) : (
            <h1>Nu sunt cursuri</h1>
          )}
        </section>

        <div class="buttons">
          <button
            class="btn cancel"
            onClick={() => {
              navigate("/");
            }}
          >
            Back home
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MyCoursesMain;
