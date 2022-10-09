import React from "react";

import CourseDetailHead from "./components/CourseDetailHead";

import Footer from "./components/Footer";

import Details from "./components/Details";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";

const CourseDetails = () => {
  const [user, setUser] = useContext(Context);

  const navigate = useNavigate();
  // useEffect(() => {
  //   if (user === "undefined" || user === "") {
  //     navigate("/LogIn");
  //   }
  // }, [navigate, user]);

  return (
    <>
      <CourseDetailHead />
      <Details />

      <Footer />
    </>
  );
};

export default CourseDetails;
