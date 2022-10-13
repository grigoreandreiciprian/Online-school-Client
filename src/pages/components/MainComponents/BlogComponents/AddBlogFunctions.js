import React, { useContext, useEffect, useState } from "react";

import AddBlogBody from "./AddBlogBody";

import UpperHeader from "../../HeaderComponents/UpperHeader";
import { Context } from "../../../../Context/Context";
import Data from "../../../../Api";

import Footer from "../../Footer";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import PhotoData from "../../../../ApiPhoto";

const AddBlogFuntions = () => {
  const [user, setUser] = useContext(Context);

  const [title, setTitle] = useState("");

  const [createdBy, setCreator] = useState("");

  const [date, setDate] = useState("");

  const [description, setDescription] = useState("");

  const [picture, setPicture] = useState("");

  const [id, setId] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (typeof user == "object") {
      setCreator(user.lastName);
      getCurrentTimestamp();
    }
  });

  useEffect(() => {
    randomId();
  }, []);

  const getCurrentTimestamp = () => {
    const date = new Date();

    const year =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    setDate(year);
  };

  const handlechanger = (title, description, picture) => {
    setTitle(title);
    setDescription(description);
    setPicture(picture);
  };

  const randomId = () => {
    let id = Math.floor(Math.random() * 999) + 1;

    setId(id);
  };

  const addBlog = async () => {
    try {
      let data = new Data();

      let blog = await data.addBlog({
        id,
        title,
        createdBy,
        date,
        description,
      });

      let photoData = new PhotoData();

      await photoData.uploadBlogPhoto(blog.id, picture);

      navigate("/");
    } catch (e) {
      throw new Error(e);
    }
  };

  return <AddBlogBody handlechanger={handlechanger} addBlog={addBlog} />;
};

export default AddBlogFuntions;
