import React, { useContext, useState, useEffect } from "react";

import UpperHeader from "../../HeaderComponents/UpperHeader";
import AddFormBody from "./AddFormBody";
import Data from "../../../../Api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../../Context/Context";

const AddFormMain = () => {
  const navigate = useNavigate();

  const [user, setUser] = useContext(Context);

  const [logedUser, setLogged] = useState("");

  const [courseName, setCourseName] = useState("");

  const [lectures, setLectures] = useState(0);

  const [hours, setHours] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const [perMonth, setPerMonth] = useState(0);

  const [creatorFirstName, setCreatorFirst] = useState("");

  const [creatorLastName, setCreatorLast] = useState("");

  const [creatorId, setId] = useState(0);

  const [minEffort, setMin] = useState(0);

  const [maxEffort, setMax] = useState(0);

  const [category, setCategory] = useState("");

  const [creatorPicture, setCreatorPicture] = useState("");

  const Api = new Data();

  const userDetails = async () => {
    const users = await Api.getUsers();

    if (typeof user == "object") {
      const logUser = users.filter((e) => e.id == user.id)[0];

      setLogged(logUser);
    }
  };

  useEffect(() => {
    userDetails();
  }, [user]);

  useEffect(() => {
    if (typeof logedUser == "object") {
      setCreatorFirst(logedUser.firstName);
      setCreatorLast(logedUser.lastName);
      setCreatorPicture(logedUser.picture.data);
      setId(logedUser.id);
    }
  });

  const handlechanger = (
    courseName,
    lectures,
    hours,
    totalPrice,
    perMonth,
    minEffort,
    maxEffort,
    category
  ) => {
    setCourseName(courseName);
    setLectures(lectures);
    setHours(hours);
    setTotalPrice(totalPrice);
    setPerMonth(perMonth);
    setMin(minEffort);
    setMax(maxEffort);
    setCategory(category);
  };

  const addCourse = async () => {
    try {
      let data = new Data();

      let response = await data.addCourse({
        courseName,
        lectures,
        creatorId,
        creatorFirstName,
        creatorLastName,
        hours,
        totalPrice,
        perMonth,
        minEffort,
        maxEffort,
        category,
        creatorPicture,
      });

      if (response.status == 204) {
        navigate("/");
      } else {
        alert("Completati toate campurile");
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <section className="form">
      <AddFormBody handlechanger={handlechanger} add={addCourse} />
    </section>
  );
};

export default AddFormMain;
