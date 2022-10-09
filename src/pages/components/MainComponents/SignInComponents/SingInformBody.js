import React from "react";

import { useState, useEffect } from "react";

import formImage from "../../../../imgs/loginImage.jpg";

import { useNavigate } from "react-router-dom";

import { FileUploader } from "react-drag-drop-files";

const SingInformBody = ({ handlechanger, signStudent }) => {
  const navigate = useNavigate();

  let [firstName, setFirst] = useState("");

  let [lastName, setLast] = useState("");

  let [email, setEmail] = useState("");

  let [age, setAge] = useState(0);

  let [password, setPassword] = useState("");

  let [role_id, setRole] = useState(0);

  const [picture, setPicture] = useState("");

  const fileTypes = ["JPG", "PNG", "GIF"];

  const cancel = () => {
    navigate("/LogIn");
  };

  const onChange = (e) => {
    let obj = e.target;

    if (obj.classList.contains("firstName")) {
      setFirst(obj.value);
    } else if (obj.classList.contains("lastName")) {
      setLast(obj.value);
    } else if (obj.classList.contains("email")) {
      setEmail(obj.value);
    } else if (obj.classList.contains("age")) {
      setAge(obj.value);
    } else if (obj.classList.contains("password")) {
      setPassword(obj.value);
    } else if (obj.classList.contains("type")) {
      if (obj.value == "Student") {
        setRole(1);
      } else if (obj.value == "Profesor") {
        setRole(2);
      }
    }

    console.log(firstName, lastName, email, age, password, role_id);
  };

  const handleChange = async (file) => {
    let buufer = await file.arrayBuffer();

    setPicture(buufer);

    console.log(picture);
  };

  useEffect(() => {
    handlechanger(firstName, lastName, email, age, password, role_id, picture);
  });

  return (
    <>
      <section className="formBody">
        <div className="inputs" onChange={onChange}>
          <h1>Create a free account</h1>

          <div className="input">
            <select className="type" defaultValue="">
              <option value="" disabled>
                Chose account type
              </option>
              <option>Student</option>
              <option>Profesor</option>
            </select>
          </div>

          <div className="input">
            <input
              type="text"
              className="firstName"
              placeholder="First Name"
            ></input>
          </div>

          <div className="input">
            <input
              type="text"
              className="lastName"
              placeholder="Last Name"
            ></input>
          </div>

          <div className="input">
            <input type="email" className="email" placeholder="Email"></input>
          </div>

          <div className="input">
            <input type="number" className="age" placeholder="Age"></input>
          </div>

          <div className="input">
            <input
              type="text"
              className="password"
              placeholder="Password"
            ></input>
          </div>

          <div className="input">
            <h1>Profile pic (optional)</h1>
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
          </div>

          <div className="buttons">
            <button className="btn enroll" onClick={signStudent}>
              Create Account
            </button>
            <button className="btn cancel" onClick={cancel}>
              Cancel
            </button>
          </div>
        </div>

        <div className="formImage">
          <img src={formImage}></img>
        </div>
      </section>
    </>
  );
};

export default SingInformBody;
