import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { Context } from "../../../../Context/Context";

import blogImg from "../../../../imgs/blogImg.jpg";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

const BlogPost = ({ blogs, delBlog }) => {
  const [logedUser, setUser] = useContext(Context);

  const navigate = useNavigate();

  const [image, setImage] = useState("null");

  const toUpdate = (id) => {
    navigate(`/updateBlog/${id}`);
  };

  function toBase64(arr) {
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  }

  useEffect(() => {
    if (blogs.picture != null && blogs.picture != 0) {
      setImage(`data:image/png;base64,${toBase64(blogs.picture.data)}`);
    }
  }, [blogs]);

  return (
    <>
      <div className="blogPost">
        {(() => {
          if (image != "null" && image != 0) {
            return <img src={image} />;
          } else {
            return <img src={blogImg}></img>;
          }
        })()}

        <div className="postDetail">
          <div className="postBy">
            <i className="fa-solid fa-person"></i>
            <p>{blogs.createdBy}</p>
          </div>

          <div className="datePosted">
            <i className="fa-solid fa-calendar"></i>
            <p>{blogs.date}</p>
          </div>
        </div>

        <h1 className="blogTitle">{blogs.title}</h1>

        <p>{blogs.description}</p>

        {(() => {
          if (logedUser) {
            if (
              (logedUser.role_id == 2 &&
                logedUser.lastName == blogs.createdBy) ||
              logedUser.role_id == 3
            ) {
              return (
                <div className="buttons">
                  <button
                    className="blogBtn Update"
                    onClick={() => {
                      toUpdate(blogs.id);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="blogBtn del"
                    onClick={() => {
                      delBlog(blogs.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            }
          }
        })()}
      </div>
    </>
  );
};

export default BlogPost;
