import React from "react";

import defaultPicture from "../../../../imgs/defaultProfile.jpg";

import { useNavigate } from "react-router-dom";

import { FileUploader } from "react-drag-drop-files";

import { useState } from "react";
import { useEffect } from "react";

import Data from "../../../../Api";
import { useContext } from "react";
import { Context } from "../../../../Context/Context";

const EdditAccoutBody = ({ handleChanger, updateProfile }) => {
  const navigate = useNavigate();

  const [user, setUser] = useContext(Context);

  const [logUser, setLogged] = useState("");

  const [Userpicture, setUserPicture] = useState("");

  const [firstName, setFirst] = useState(logUser.firstName);

  const [lastName, setLast] = useState(logUser.lastName);

  const [email, setEmail] = useState(logUser.email);

  const [age, setAge] = useState(logUser.age);

  const [buffer, setBuffer] = useState(logUser.picture);

  // console.log(buffer);

  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null);

  const api = new Data();

  const userDetails = async () => {
    let users = await api.getUsers();

    if (typeof user == "object") {
      let logedUser = users.filter((e) => e.id == user.id)[0];

      setLogged(logedUser);
    }
  };

  useEffect(() => {
    userDetails();
  }, [user]);

  useEffect(() => {
    handleChanger(firstName, lastName, email, age, buffer);
  }, [firstName, lastName, email, age, buffer]);

  useEffect(() => {
    if (logUser.picture != null && logUser.picture != 0) {
      setUserPicture(`data:image/png;base64,${toBase64(logUser.picture.data)}`);
    }
  }, [logUser]);

  function toBase64(arr) {
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  }

  const cancel = () => {
    navigate(`/MyAccount/${logUser.id}`);
  };

  const handleChange = async (file) => {
    let buufer = await file.arrayBuffer();

    setBuffer(buufer);
  };

  const onChange = (e) => {
    let obj = e.target;

    if (obj.classList.contains("firstName")) {
      setFirst(obj.value);
    } else if (obj.classList.contains("lastName")) {
      setLast(obj.value);
    } else if (obj.classList.contains("age")) {
      setAge(obj.value);
    } else if (obj.classList.contains("email")) {
      setEmail(obj.value);
    }
  };

  return (
    <section className="AccformBody">
      <h1>Account details</h1>

      <div className="profilePic">
        {(() => {
          if (Userpicture !== "null") {
            return <img src={Userpicture} alt="" />;
          } else {
            return <img src={defaultPicture} alt="" />;
          }
        })()}
        <div className="picInput">
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
        </div>

        {/* <input type="file" classNameName="picture"  name="picture" onChange={e=> setPicture(e.target.files[0])}></input> */}
      </div>
      <div className="inputs" onChange={onChange}>
        <div className="name">
          <div className="nameBox">
            <h1>First name</h1>

            <div className="inputAcc">
              <input
                type="text"
                className="firstName"
                placeholder="First Name"
                defaultValue={logUser.firstName}
              ></input>
            </div>
          </div>
          <div className="nameBox">
            <h1>Last name</h1>
            <div className="inputAcc">
              <input
                type="text"
                className="lastName"
                placeholder="Last Name"
                defaultValue={logUser.lastName}
              ></input>
            </div>
          </div>
        </div>

        <div className="profileBox">
          <h1>Email</h1>

          <div className="inputAcc">
            <input
              type="text"
              className="email"
              placeholder="Email"
              defaultValue={logUser.email}
            ></input>
          </div>
        </div>

        <div className="profileBox">
          <h1>Age</h1>

          <div className="inputAcc">
            <input
              type="number"
              className="age"
              placeholder="Age"
              defaultValue={logUser.age}
            ></input>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button className="btn enroll" onClick={updateProfile}>
          Save changes
        </button>
        <button className="btn unroll" onClick={cancel}>
          Cancel
        </button>
      </div>
    </section>
  );
};

export default EdditAccoutBody;
