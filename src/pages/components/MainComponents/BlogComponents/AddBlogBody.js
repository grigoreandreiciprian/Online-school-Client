import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import formImage from "../../../../imgs/loginImage.jpg";
import { FileUploader } from "react-drag-drop-files";

const AddBlogBody = ({ handlechanger, addBlog }) => {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [picture, setPicture] = useState("");

  const fileTypes = ["JPG", "PNG", "GIF"];

  const navigate = useNavigate();

  useEffect(() => {
    handlechanger(title, description, picture);
  });

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

    console.log(title, description);
  };

  const handleChange = async (file) => {
    let buufer = await file.arrayBuffer();

    setPicture(buufer);
  };

  return (
    <section className="formBody">
      <div className="inputs" onChange={onChange}>
        <h1>Update your course</h1>

        <div className="input">
          <input type="text" className="title" placeholder="Blog Title"></input>
        </div>

        <div className="input">
          <textarea
            className="description"
            placeholder="Blog short description"
          ></textarea>
        </div>

        <div className="input">
          <h1>Blog picture</h1>
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
        </div>

        <div className="buttons">
          <button className="btn enroll" onClick={addBlog}>
            Add
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

export default AddBlogBody;
