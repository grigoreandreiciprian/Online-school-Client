import React, { useContext } from "react";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../../../Context/Context";

import UpdateBlogBody from "./UpdateBlogBody";

import UpperHeader from "../../HeaderComponents/UpperHeader";

import Data from "../../../../Api";

const UpdateBlogMain = () => {
  const navigate = useNavigate();

  const [user, setUser] = useContext(Context);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState(0);

  const [createdBy, setCreator] = useState(0);

  const [date, setDate] = useState(0);

  let id = useParams().blogId;

  const handlechanger = (title, description) => {
    setTitle(title);
    setDescription(description);
  };

  const updateBlog = async () => {
    try {
      let data = new Data();

      let update = await data.updateBlog({ id, title, description });

      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="form">
      <UpdateBlogBody updateBlog={updateBlog} handleChanger={handlechanger} />
    </section>
  );
};

export default UpdateBlogMain;
