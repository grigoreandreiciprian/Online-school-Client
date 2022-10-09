import React from "react";

const HeaderCards = () => {
  return (
    <div className="headerCards">
      <div className="headerCard">
        <div className="cardTitle">
          <i className="fa-solid fa-book"></i>
          <h2>New classes</h2>
        </div>

        <p>
          In the history of modern astronomy, there is probably no one greater
          leap forward.
        </p>
      </div>

      <div className="headerCard">
        <div className="cardTitle">
          <i className="fa-solid fa-trophy"></i>
          <h2>Top courses</h2>
        </div>

        <p>
          In the history of modern astronomy, there is probably no one greater
          leap forward.
        </p>
      </div>

      <div className="headerCard">
        <div className="cardTitle">
          <i className="fa-solid fa-desktop"></i>
          <h2>Full E-Books</h2>
        </div>

        <p>
          In the history of modern astronomy, there is probably no one greater
          leap forward.
        </p>
      </div>
    </div>
  );
};

export default HeaderCards;
