import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../../../Context/Context";

import Cookies from "js-cookie";

const Nav = () => {
  const [user, setUser] = useContext(Context);

  const out = () => {
    Cookies.set("authentificatedUser", "");
  };

  return (
    <nav>
      {user ? (
        <>
          <div className="text">
            <p>Bine ai venit {user.lastName}</p>
          </div>
          <Link className="link" to={"/LogIn"} onClick={out}>
            Log out
          </Link>
        </>
      ) : (
        <div>
          <Link className="link" to={"/LogIn"}>
            Log in
          </Link>
          <Link className="link" to={"/SignUp"}>
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
