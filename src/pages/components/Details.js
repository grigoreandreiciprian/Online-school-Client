import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Data from "../../Api";

import Detail from "./MainComponents/DetailsComponents/Detail";

const Details = () => {
  const [course, setCourse] = useState("");

  let id = useParams().courseId;

  const findCourse = async () => {
    try {
      let data = new Data();

      let courses = await data.getCourses();

      let course = courses.filter((e) => e.id == id)[0];

      setCourse(course);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    findCourse();
  }, []);

  return (
    <section className="details">
      <Detail course={course} />
    </section>
  );
};

export default Details;
