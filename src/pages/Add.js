import React from "react";
import AddFormMain from "./components/MainComponents/AddComponents/AddFormMain";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Add = () => {
  const user = useSelector((state) => state.logedUser.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (user === "undefined" || user === "") {
      navigate("/LogIn");
    }
  }, [user, navigate]);
  return (
    <>
      <AddFormMain />
    </>
  );
};

export default Add;
