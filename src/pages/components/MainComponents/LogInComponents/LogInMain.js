import React from "react";

import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import LogInFormBody from "./LogInFormBody";

import { logIN } from "../../../../Actions/LogActions";
import { useContext } from "react";

import Data from "../../../../Api";

import Cookies from "js-cookie";
import { Context } from "../../../../Context/Context";

const LogInMain = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [err, setErr] = useState([]);

  const [user, setUser] = useContext(Context);

  const distpatch = useDispatch();

  const navigate = useNavigate();

  const handleChanger = (email, password) => {
    setEmail(email);
    setPassword(password);
  };

  let check = () => {
    setErr([]);

    if (email == "") {
      setErr((prev) => {
        return [...prev, "Email is required"];
      });
    }

    if (password == "") {
      setErr((prev) => {
        return [...prev, "Pasword is required"];
      });
    }
  };

  const logIn = async () => {
    check();

    if (err == "") {
      let data = new Data();

      let rez = await data.logIn({ email, password });

      if (rez.id) {
        setUser(rez);
        Cookies.set("authentificatedUser", JSON.stringify(rez));
        navigate("/");
      } else {
        alert(rez.error.message);
        setErr((prev) => {
          return [...prev, rez];
        });
      }
    }
  };
  // const reduxLog = () => {
  //   try {
  //     check();

  //     if (err == "") {
  //       distpatch(logIN({ email, password }));

  //       if (user.error || user == "") {
  //         navigate("/LogIn");
  //         alert("Nume sau parola incorecte");
  //       } else {
  //         navigate("/");
  //       }
  //     } else {
  //       setErr((prev) => {
  //         alert("Nume sau parola incorecte");
  //         return [...prev];
  //       });
  //     }
  //   } catch (e) {
  //     throw new Error(e);
  //   }
  // };

  useEffect(() => {
    check();
  }, [email, password]);

  return (
    <>
      <section className="formLog">
        <LogInFormBody handleChanger={handleChanger} log={logIn} />
      </section>
    </>
  );
};

export default LogInMain;
