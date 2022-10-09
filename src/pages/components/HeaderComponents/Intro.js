import Cookies from "js-cookie";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Context } from "../../../Context/Context";

import introImg from "../../../imgs/introImg.png";

const Intro = () => {
  const [user, setUser] = useContext(Context);

  useEffect(() => {}, [Context]);

  const studentLog = () => {
    return (
      <>
        <h2>
          Welcome {user.firstName} {user.lastName}
        </h2>
        <h1>Take the first step to learn with us</h1>
        <p>
          Check our vast selection of courses and chose those that suit you the
          most !
        </p>
      </>
    );
  };

  const teacherLog = () => {
    return (
      <>
        <h2>
          Welcome Mr/s {user.firstName} {user.lastName}
        </h2>
        <h1>Did you know that</h1>
        <p>
          In the history of modern astronomy, there is probably no one greater
          leap forward than the building and launch of the space telescope known
          as the Hubble.
        </p>
      </>
    );
  };

  return (
    <div className="intro">
      <div className="introText">
        <div className="textBox">
          {(() => {
            if (typeof user == "object") {
              if (user.role_id == 1) {
                return studentLog();
              } else if (user.role_id == 2 || user.role_id == 3) {
                return teacherLog();
              }
            } else {
              return (
                <>
                  <h1>Welcome to our academy</h1>

                  <p>
                    Check our vast selection of courses and chose those that
                    suit you the most !
                  </p>
                </>
              );
            }
          })()}
        </div>
      </div>

      <div className="introImg">
        <img src={introImg}></img>
      </div>
    </div>
  );
};

export default Intro;
