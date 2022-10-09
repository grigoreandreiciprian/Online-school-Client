import React from "react";

import MyCoursesMain from "./components/MainComponents/AccountComponents/MyCoursesMain";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { useEffect } from "react";

const MyCourses = () => {
  const user = useSelector((state) => state.logedUser.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (user === "undefined" || user === "") {
      navigate("/LogIn");
    }
  }, [user, navigate]);
  return <MyCoursesMain />;
};

export default MyCourses;
