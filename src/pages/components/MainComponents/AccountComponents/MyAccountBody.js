import React from "react";
import defaultPicture from "../../../../imgs/defaultProfile.jpg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Data from "../../../../Api";

import Cookies from "js-cookie";
import { useContext } from "react";
import { Context } from "../../../../Context/Context";

const MyAccountBody = () => {
  const navigate = useNavigate();

  const [user, setUser] = useContext(Context);
  const [logedUser, setLogedUser] = useState("");
  const [userPicture, setPicture] = useState("");
  const api = new Data();

  const userDetails = async () => {
    const users = await api.getUsers();

    if (typeof user == "object") {
      const logUser = await users.filter((e) => e.id == user.id)[0];

      setLogedUser(logUser);
    }
  };

  useEffect(() => {
    userDetails();
  }, [user]);

  const courses = () => {
    navigate(`/MyCourses/${user.id}`);
  };

  const cancel = () => {
    navigate("/");
  };

  const editProfile = (user) => {
    navigate(`/EditAccout/${user.id}`);
  };

  function toBase64(arr) {
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  }

  useEffect(() => {
    if (logedUser.picture != null && logedUser.picture != 0) {
      setPicture(`data:image/png;base64,${toBase64(logedUser.picture.data)}`);
    }
  }, [logedUser]);

  return (
    <section className="AccformBody">
      <h1>Account details</h1>

      <div className="profilePic">
        {(() => {
          if (userPicture !== "null" && userPicture !== 0) {
            return <img src={userPicture} alt="" />;
          } else {
            return <img src={defaultPicture} alt=""></img>;
          }
        })()}
      </div>

      {(() => {
        if (typeof user == "object") {
          return (
            <>
              <div className="name">
                <div className="nameBox">
                  <h1>First name</h1>
                  <h1>{logedUser.firstName}</h1>
                </div>
                <div className="nameBox">
                  <h1>Last name</h1>
                  <h1>{logedUser.lastName}</h1>
                </div>
              </div>

              <div className="profileDetailBox">
                <h1>Email: {logedUser.email}</h1>

                <h1>Age: {logedUser.age}</h1>
              </div>

              <div className="buttons">
                <button
                  className="btn enroll"
                  onClick={() => {
                    editProfile(user);
                  }}
                >
                  Edit Profile
                </button>
                <button className="btn cancel" onClick={courses}>
                  My courses
                </button>
                <button className="btn unroll" onClick={cancel}>
                  Cancel
                </button>
              </div>
            </>
          );
        }
      })()}
    </section>
  );
};

export default MyAccountBody;
