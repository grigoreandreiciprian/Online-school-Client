import { useState, useEffect } from "react";
import formImage from "../../../../imgs/loginImage.jpg";
import { useNavigate } from "react-router-dom";

const AddFormBody = ({ handlechanger, add }) => {
  const navigate = useNavigate();

  const [courseName, setCourseName] = useState("");

  const [lectures, setLectures] = useState(0);

  const [hours, setHours] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const [perMonth, setPerMonth] = useState(0);

  const [minEffort, setMin] = useState(0);

  const [maxEffort, setMax] = useState(0);

  const [category, setCategory] = useState("graphic");

  const cancel = () => {
    navigate("/");
  };

  let onChange = (e) => {
    let obj = e.target;
    if (obj.classList.contains("courseName")) {
      setCourseName(obj.value);
    } else if (obj.classList.contains("lectures")) {
      setLectures(obj.value);
    } else if (obj.classList.contains("hours")) {
      setHours(obj.value);
    } else if (obj.classList.contains("totalPrice")) {
      setTotalPrice(obj.value);
    } else if (obj.classList.contains("mounth")) {
      setPerMonth(obj.value);
    } else if (obj.classList.contains("minEffort")) {
      setMin(obj.value);
    } else if (obj.classList.contains("maxEffort")) {
      setMax(obj.value);
    } else if (obj.classList.contains("category")) {
      setCategory(obj.value);
    }

    console.log(
      courseName,
      lectures,
      hours,
      totalPrice,
      perMonth,
      minEffort,
      maxEffort,
      category
    );
  };

  useEffect(() => {
    handlechanger(
      courseName,
      lectures,
      hours,
      totalPrice,
      perMonth,
      minEffort,
      maxEffort,
      category
    );
  });

  return (
    <section className="formBody">
      <div className="inputs" onChange={onChange}>
        <h1>Add a new course</h1>

        <select className="category">
          <option disabled>Course category</option>
          <option>graphic</option>
          <option>programing</option>
          <option>fitness</option>
        </select>

        <div className="input">
          <input
            type="text"
            className="courseName"
            placeholder="Course Name"
          ></input>
        </div>

        <div className="input">
          <input
            type="number"
            className="lectures"
            placeholder="Number of lectures"
          ></input>
        </div>

        <div className="input">
          <input
            type="number"
            className="hours"
            placeholder="Total Hours"
          ></input>
        </div>

        <div className="input">
          <input
            type="number"
            className="minEffort"
            placeholder="Min Effort"
          ></input>
        </div>

        <div className="input">
          <input
            type="number"
            className="maxEffort"
            placeholder="Max Effort"
          ></input>
        </div>

        <div className="input">
          <input
            type="number"
            className="totalPrice"
            placeholder="Total Price"
          ></input>
        </div>

        <div className="input">
          <input
            type="number"
            className="mounth"
            placeholder="Price per month"
          ></input>
        </div>
        <div className="buttons">
          <button className="btn enroll" onClick={add}>
            Add course
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

export default AddFormBody;
