import React from "react";

import AddBlogMain from "./components/MainComponents/BlogComponents/AddBlogMain";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

const AddBlog = () => {
  const user = useSelector((state) => state.logedUser.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (user == "undefined" || user == "") {
      navigate("/LogIn");
    }
  }, []);
  return <AddBlogMain />;
};

export default AddBlog;
