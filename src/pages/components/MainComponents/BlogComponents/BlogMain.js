import React, { useContext, useEffect, useState } from "react";
import Data from "../../../../Api";
import { Context } from "../../../../Context/Context";

import { useNavigate } from "react-router-dom";

import BlogPost from "./BlogPost";

import Pagination from "react-bootstrap/Pagination";

import { useSelector } from "react-redux";
import PhotoData from "../../../../ApiPhoto";

const BlogMain = () => {
  const [blogs, setBlogs] = useState([]);

  const [user, setUser] = useContext(Context);

  const [newBlogs, setNew] = useState([]);

  const [paginatioBlogs, setPaginationBlogs] = useState([]);

  const logedUser = useSelector((state) => state.logedUser.user);

  const [removePic, setRemovePic] = useState("null");

  const navigate = useNavigate();

  useEffect(() => {
    getBlogs();
    pagination(1);
  }, []);

  const getBlogs = async () => {
    try {
      let data = new Data();

      let blogs = await data.getBlogs();

      setBlogs(blogs);
    } catch {}
  };

  const add = () => {
    navigate("/addBlog");
  };

  const delBlog = async (id) => {
    try {
      let data = new Data();

      let picData = new PhotoData();

      let blogs = await data.getBlogs();

      let blog = blogs.filter((e) => e.id == id);

      await picData.uploadBlogPhoto(blog[0].id, removePic);

      let newBlogs = blogs.filter((e) => e.id != id);

      setPaginationBlogs(newBlogs);

      await data.deleteBlog(blog[0]);
    } catch (e) {
      console.log(e);
    }
  };

  let pagination = async (number) => {
    try {
      let data = new Data();

      let blogs = await data.getBlogs();

      let nou = [];
      for (let i = 3 * (number - 1); i < 3 * number && i < blogs.length; i++) {
        nou.push(blogs[i]);
      }
      // console.log(nou);
      setPaginationBlogs(nou);
    } catch (e) {
      throw new Error(e);
    }
  };

  let paginationButtons = () => {
    let active = 1;
    let items = [];
    let total = 0;

    if (blogs.length > 0) {
      total = Math.floor(blogs.length / 4) + 1;
    } else {
      total = Math.floor(blogs.length / 4) + 1;
    }

    for (let number = 1; number <= total; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number == active}
          onClick={() => {
            pagination(number);
          }}
        >
          {number}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <>
      <section className="blog">
        <h3>Our blog</h3>
        <h1>Recent posts from blog</h1>

        <div className="blogPosts">
          {paginatioBlogs.length > 0 ? (
            paginatioBlogs.map((e) => {
              return <BlogPost blogs={e} delBlog={delBlog} key={e.id} />;
            })
          ) : (
            <p>NU s-au postat bloguri momentan</p>
          )}
        </div>

        {(() => {
          if (logedUser) {
            if (logedUser.role_id == 2) {
              return (
                <div className="buttons">
                  <button className="update blogBtn" onClick={add}>
                    Add new blog
                  </button>
                </div>
              );
            }
          }
        })()}

        <div className="pagination">
          <Pagination>{paginationButtons()}</Pagination>
        </div>
      </section>
    </>
  );
};

export default BlogMain;
