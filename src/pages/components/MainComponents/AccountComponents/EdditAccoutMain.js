import React from "react";
import { useState, useEffect } from "react";
import Data from "../../../../Api";

import EdditAccountBody from "./EdditAccountBody";

import { useSelector } from "react-redux";
import PhotoData from "../../../../ApiPhoto";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../../../Context/Context";

const EdditAccoutMain = () => {
  const [user, setUser] = useContext(Context);

  const [logUser, setLogged] = useState("");

  const api = new Data();

  const navigate = useNavigate();

  const [firstName, setFirst] = useState("");

  const [lastName, setLast] = useState("");

  const [email, setEmail] = useState("");

  const [age, setAge] = useState("");

  const [picture, setPicture] = useState(logUser.picture);

  const id = logUser.id;

  const userDetails = async () => {
    const users = await api.getUsers();

    const logUser = users.filter((e) => e.id == user.id)[0];

    setLogged(logUser);
  };

  function toBase64(arr) {
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  }

  useEffect(() => {
    if (logUser.picture != null && logUser.picture != 0) {
      setPicture(`data:image/png;base64,${toBase64(logUser.picture.data)}`);
    }
  }, [logUser]);

  const handleChanger = (firstName, lastName, email, age, picture) => {
    setFirst(firstName);
    setLast(lastName);
    setEmail(email);
    setAge(age);
    setPicture(picture);
  };

  const updateProfile = async () => {
    try {
      let data = new Data();

      let response = await data.updateUser({
        id,
        firstName,
        lastName,
        email,
        age,
      });

      let photoData = new PhotoData();

      let image = await photoData.uploadPhoto(id, picture);

      if (response.status == 204) {
        navigate("/LogIn");

        user = "";
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  const updatePhoto = async () => {
    let data = new PhotoData();

    console.log(picture);

    let image = await data.uploadPhoto(id, picture);

    console.log(image);

    try {
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <section class="formAcc">
      <EdditAccountBody
        handleChanger={handleChanger}
        updateProfile={updateProfile}
        updatePhoto={updatePhoto}
        picture={picture}
        logUser={logUser}
      />
    </section>
  );
};

export default EdditAccoutMain;
