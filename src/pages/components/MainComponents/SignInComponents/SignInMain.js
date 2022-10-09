import React, { useState } from "react";

import UpperHeader from "../../HeaderComponents/UpperHeader";

import SingInformBody from "./SingInformBody";

import Footer from "../../Footer";

import { useNavigate } from "react-router-dom";
import Data from "../../../../Api";
import PhotoData from "../../../../ApiPhoto";
import { useEffect } from "react";

const SignInMain = () => {
  let [firstName, setFirst] = useState("");

  let [lastName, setLast] = useState("");

  let [email, setEmail] = useState("");

  let [age, setAge] = useState(0);

  let [password, setPassword] = useState("");

  let [role_id, setRole] = useState(0);

  const [picture, setPicture] = useState("");

  const [id, setId] = useState(0);

  const navigate = useNavigate();

  const log = () => {
    navigate("/LogIn");
  };

  const randomId = () => {
    let id = Math.floor(Math.random() * 999) + 1;

    setId(id);
  };

  const handlechanger = (
    firstName,
    lastName,
    email,
    age,
    password,
    role_id,
    picture
  ) => {
    setFirst(firstName);
    setLast(lastName);
    setEmail(email);
    setAge(age);
    setPassword(password);
    setRole(role_id);
    setPicture(picture);
  };

  const signStudent = async () => {
    try {
      let data = new Data();

      let student = await data.addStudent({
        id,
        firstName,
        lastName,
        email,
        age,
        password,
        role_id,
      });

      let photoData = new PhotoData();

      let image = await photoData.uploadPhoto(student.id, picture);

      log();
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    randomId();
  }, []);

  return (
    <>
      <section className="form">
        <SingInformBody
          handlechanger={handlechanger}
          signStudent={signStudent}
        />
      </section>
    </>
  );
};

export default SignInMain;
