import React, { useEffect } from "react";

import { useState } from "react";

import formImage from "../../../../imgs/loginImage.jpg";

import { useNavigate } from "react-router-dom";

const UpdateBlogBody = ({ updateBlog, handleChanger }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState(0);

  const cancel = () => {
    navigate("/");
  };

  let onChange = (e) => {
    let obj = e.target;
    if (obj.classList.contains("title")) {
      setTitle(obj.value);
    } else if (obj.classList.contains("description")) {
      setDescription(obj.value);
    }
  };

  useEffect(() => {
    handleChanger(title, description);
  });
  return (
    <section className="formBody">
      <div className="inputs" onChange={onChange}>
        <h1>Add blog post</h1>

        <div className="input">
          <input type="text" className="title" placeholder="Blog Title"></input>
        </div>

        <div className="input">
          <textarea
            className="description"
            placeholder="Blog short description"
          ></textarea>
        </div>

        <div className="buttons">
          <button className="btn enroll" onClick={updateBlog}>
            Update
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
  );
};

export default UpdateBlogBody;
