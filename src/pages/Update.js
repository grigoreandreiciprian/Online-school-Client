import React from "react";

import UpdateForm from "./components/MainComponents/UpdateComponents/UpdateForm";

import { useSelector } from "react-redux";

import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Update = () => {
  const user = useSelector((state) => state.logedUser.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (user === "undefined" || user === "") {
      navigate("/LogIn");
    }
  }, [user, navigate]);
  return (
    <>
      <UpdateForm />
    </>
  );
};

export default Update;
