import React from "react";

import UpdateBlogMain from "./components/MainComponents/UpdateComponents/UpdateBlogMain";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

const BlogUpdate = () => {
  const user = useSelector((state) => state.logedUser.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (user === "undefined" || user === "") {
      navigate("/LogIn");
    }
  }, [navigate, user]);
  return (
    <>
      <UpdateBlogMain />
    </>
  );
};

export default BlogUpdate;
