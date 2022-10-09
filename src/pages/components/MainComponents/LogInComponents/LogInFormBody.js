import React from "react";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const LongInFormBody = ({ handleChanger, log }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signUp = () => {
    navigate("/SignUp");
  };

  const onChange = (e) => {
    let obj = e.target;

    if (obj.classList.contains("email")) {
      setEmail(obj.value);
    } else if (obj.classList.contains("password")) {
      setPassword(obj.value);
    }
  };

  useEffect(() => {
    handleChanger(email, password);
  });

  return (
    <section className="LogformBody">
      <div className="inputs" onChange={onChange}>
        <h1>Log In </h1>

        <div className="input">
          <input type="text" className="email" placeholder="Email"></input>
        </div>

        <div className="input">
          <input
            type="password"
            className="password"
            placeholder="Password"
          ></input>
        </div>

        <div className="buttons">
          <button className="btn enroll" onClick={log}>
            Log in
          </button>
        </div>

        <div className="signWith">
          <h3>Or log in with</h3>

          <div className="buttons">
            <button className="btn cancel">
              <i className="fa-brands fa-facebook-f"></i>
              Facebook
            </button>

            <p>OR</p>
            <button className="btn cancel">
              <i className="fa-brands fa-google"></i>
              Google
            </button>
          </div>
        </div>

        <div className="logSign">
          <h3>Not a member yet ?</h3>
          <h4 onClick={signUp}>Sign up now</h4>
        </div>
      </div>
    </section>
  );
};

export default LongInFormBody;
