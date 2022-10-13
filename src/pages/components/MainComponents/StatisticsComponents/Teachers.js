import React, { useEffect, useState } from "react";
import Data from "../../../../Api";

import { Navigate, useNavigate } from "react-router-dom";

import Teacher from "./Teacher";

import Pagination from "react-bootstrap/Pagination";
import PhotoData from "../../../../ApiPhoto";

const Teachers = () => {
  const navigate = useNavigate();

  const [newUsers, setNewUsers] = useState([]);

  const [teachers, setTeachers] = useState([]);

  const [paginatioTeachers, setPaginationTeachers] = useState([]);

  const [removePic, setRemovePic] = useState("");

  useEffect(() => {
    pagination(1);
    getTeachers();
  }, []);

  const getTeachers = async () => {
    try {
      let data = new Data();

      let users = await data.getUsers();

      let teachers = users.filter((e) => e.role_id == 2);

      setTeachers(teachers);
    } catch (e) {
      console.log(e);
    }
  };

  const remove = async (key) => {
    try {
      let data = new Data();

      let users = await data.getUsers();

      let photo = new PhotoData();

      let user = users.filter((e) => e.id == key);

      await photo.uploadPhoto(user[0].id, removePic);

      let remainingUsers = users.filter((e) => e.id != key);

      let newUsers = remainingUsers.filter((e) => e.role_id == 2);

      setPaginationTeachers(newUsers);

      await data.removeUser(user[0]);
    } catch (e) {
      console.log(e);
    }
  };

  let pagination = async (number) => {
    try {
      let data = new Data();

      let users = await data.getUsers();

      let teachers = users.filter((e) => e.role_id == 2);

      let nou = [];
      for (
        let i = 3 * (number - 1);
        i < 3 * number && i < teachers.length;
        i++
      ) {
        nou.push(teachers[i]);
      }
      // console.log(nou);
      setPaginationTeachers(nou);
    } catch (e) {
      throw new Error(e);
    }
  };

  let paginationButtons = () => {
    let active = 1;
    let items = [];
    let total = 0;

    if (teachers.length > 0) {
      total = Math.floor(teachers.length / 3) + 1;
    } else {
      total = Math.floor(teachers.length / 3) + 1;
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
      <div className="teachers">
        {paginatioTeachers.length > 0 ? (
          paginatioTeachers.map((e) => {
            return <Teacher teacher={e} key={e.id} remove={remove} />;
          })
        ) : (
          <p>Ceva nu a mers</p>
        )}
      </div>

      <div className="pagination">
        <Pagination>{paginationButtons()}</Pagination>
      </div>
    </>
  );
};

export default Teachers;
