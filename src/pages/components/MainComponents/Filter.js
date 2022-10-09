import React from "react";

import { useState, useEffect } from "react";

const Filter = ({ handleChanger, filtering }) => {
  const [filter, setFilterValue] = useState("");

  const onChange = (e) => {
    let obj = e.target;

    setFilterValue(obj.value);
  };

  useEffect(() => {
    handleChanger(filter);
  });

  useEffect(() => {
    filtering();
  }, [filter]);

  return (
    <>
      <div className="filter" onClick={onChange}>
        <select onChange={filtering}>
          <option value="all">All</option>
          <option value="graphic">Graphic design</option>
          <option value="programing">Programing</option>
          <option value="fitness">Fitness</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
