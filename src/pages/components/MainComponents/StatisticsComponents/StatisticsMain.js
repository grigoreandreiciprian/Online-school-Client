import React, { useEffect, useState } from "react";

import StatisticsBody from "./Teachers";

import Footer from "../../Footer";

import CourseDetailHead from "../../CourseDetailHead";

import Teachers from "./Teachers";
import Data from "../../../../Api";

const StatisticsMain = () => {
  return (
    <section className="statistics">
      <h1>Schooll Staff</h1>
      <h1>Our tutors</h1>

      <Teachers />
    </section>
  );
};

export default StatisticsMain;
