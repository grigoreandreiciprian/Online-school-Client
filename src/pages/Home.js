import React, { useContext, useEffect } from "react";

import Header from "./components/Header";

import Main from "./components/Main";
import { useNavigate } from "react-router-dom";

import Footer from "./components/Footer";

import { useSelector } from "react-redux";
import { Context } from "../Context/Context";
import Cookies from "js-cookie";

const Home = () => {
  const [user, setUser] = useContext(Context);

  let navigate = useNavigate();

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
