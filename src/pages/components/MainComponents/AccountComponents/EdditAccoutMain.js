import React from "react";
import { useState } from "react";
import Data from "../../../../Api";

import EdditAccountBody from "./EdditAccountBody";

import PhotoData from "../../../../ApiPhoto";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../../../Context/Context";

const EdditAccoutMain = () => {
  const navigate = useNavigate();

  const [user, setUser] = useContext(Context);

  const [firstName, setFirst] = useState("");

  const [lastName, setLast] = useState("");

  const [email, setEmail] = useState("");

  const [age, setAge] = useState("");

  const [picture, setPicture] = useState("");

  const [id, setId] = useState(0);

  useEffect(() => {
    if (typeof user == "object") {
      setId(user.id);
    }
  }, [user]);

  console.log(id);

  const handleChanger = (firstName, lastName, email, age, buffer) => {
    setFirst(firstName);
    setLast(lastName);
    setEmail(email);
    setAge(age);
    setPicture(buffer);
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

      coursesUpdate();

      let photoData = new PhotoData();

      if (picture != undefined) {
        await photoData.uploadPhoto(id, picture);
      }

      if (response.status == 204) {
        navigate(`/MyAccount/${id}`);
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  const coursesUpdate = async () => {
    try {
      let data = new Data();
      let photoData = new PhotoData();
      let courses = await data.getCourses();

      let profesorCourses = courses.filter((e) => e.creatorId == user.id);

      profesorCourses.forEach(async (e) => {
        if (firstName != undefined && lastName != undefined) {
          let obj = {
            id: e.id,
            creatorFirstName: firstName,
            creatorLastName: lastName,
          };
          await data.updateCourse(obj);
        } else if (firstName != undefined) {
          let obj = {
            id: e.id,
            creatorFirstName: firstName,
          };

          await data.updateCourse(obj);
        } else if (lastName != undefined) {
          let obj = {
            id: e.id,
            creatorLastName: lastName,
          };

          await data.updateCourse(obj);
        }
      });

      profesorCourses.forEach(async (e) => {
        if (picture != undefined) {
          await photoData.uploadCoursePhoto(e.id, picture);
        }
      });
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <section className="formAcc">
      <EdditAccountBody
        handleChanger={handleChanger}
        updateProfile={updateProfile}
        picture={picture}
      />
    </section>
  );
};

export default EdditAccoutMain;
