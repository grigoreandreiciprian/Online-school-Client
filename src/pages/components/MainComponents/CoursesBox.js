import React, { useContext, useEffect, useState } from "react";

import Course from "./Course";

import { Link, useNavigate } from "react-router-dom";
import Data from "../../../Api";
import { Context } from "../../../Context/Context";

import { useDispatch, useSelector } from "react-redux";

import Pagination from "react-bootstrap/Pagination";

import Filter from "./Filter";

const CourseBox = () => {
  const navigate = useNavigate();

  // const logedUser = useSelector((state) => state.logedUser.user);

  const [user, setUser] = useContext(Context);

  const [createdAt, setCreated] = useState("");

  const [courses, setCourses] = useState([]);

  const [filter, setFilterValue] = useState("");

  const [filteredCourses, setFilteredCourses] = useState([]);

  const [paginatioCourses, setPaginationCourses] = useState([]);

  const [newCourse, setNew] = useState([]);

  useEffect(() => {
    getAll();
    pagination(1);
    getCurrentTimestamp();
  }, []);

  useEffect(() => {
    filtering();
  }, [filter]);

  let getAll = async () => {
    try {
      let data = new Data();

      let course = await data.getCourses();

      setCourses(course);
    } catch (e) {
      throw new Error(e);
    }
  };

  const add = () => {
    navigate("/add");
  };

  let paginationButtons = () => {
    let active = 1;
    let items = [];
    let total = 0;

    if (filteredCourses.length > 0) {
      total = Math.floor(filteredCourses.length / 3) + 1;
    } else {
      total = Math.floor(courses.length / 3) + 1;
    }

    for (let number = 1; number <= total; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number == active}
          onClick={() => {
            pagination(number);
          }}
        >
          {number}
        </Pagination.Item>
      );
    }

    return items;
  };

  let pagination = async (number) => {
    try {
      let data = new Data();

      let cursuri = await data.getCourses();

      let nou = [];
      for (
        let i = 3 * (number - 1);
        i < 3 * number && i < cursuri.length;
        i++
      ) {
        nou.push(cursuri[i]);
      }
      setPaginationCourses(nou);
    } catch (e) {
      throw new Error(e);
    }
  };

  const delCourse = async (id) => {
    try {
      let data = new Data();

      let courses = await data.getCourses();

      let course = courses.filter((e) => e.id == id);

      await data.deleteCourse(course[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const toUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const toDetails = (id) => {
    navigate(`/details/${id}`);
  };

  const getCurrentTimestamp = () => {
    const date = new Date();

    const year =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    setCreated(year);
  };

  const handleChanger = (filter) => {
    setFilterValue(filter);
  };

  const enrolment = async (User_id, course_id) => {
    try {
      let data = new Data();

      await data.addEnrolment({ User_id, course_id, createdAt });

      alert("Enrollment succesful");
    } catch (e) {
      console.log(e);
    }
  };

  const filtering = () => {
    if (filter == "all") {
      pagination(1);
      setFilteredCourses([]);
    } else {
      let filtered = courses.filter((e) => e.category == filter);
      setFilteredCourses(filtered);
    }
  };

  return (
    <>
      <Filter handleChanger={handleChanger} filtering={filtering} />

      <section className="courses">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((e) => {
            return (
              <Course
                course={e}
                delCourse={delCourse}
                toUpdate={toUpdate}
                enrolment={enrolment}
                toDetails={toDetails}
                key={e.id}
              />
            );
          })
        ) : paginatioCourses.length > 0 ? (
          paginatioCourses.map((e) => {
            return (
              <Course
                course={e}
                delCourse={delCourse}
                toUpdate={toUpdate}
                enrolment={enrolment}
                toDetails={toDetails}
                key={e.id}
              />
            );
          })
        ) : (
          <h1>
            We dont have courses avalabile at the moment , plase come back later
          </h1>
        )}
      </section>

      <div className="buttonsCourse">
        {(() => {
          if (user) {
            if (user.role_id == 2) {
              return (
                <button className="enroll courseBtn" onClick={add}>
                  Add new course
                </button>
              );
            }
          }
        })()}
        <div className="pagination">
          <Pagination>{paginationButtons()}</Pagination>
        </div>
      </div>
    </>
  );
};

export default CourseBox;
