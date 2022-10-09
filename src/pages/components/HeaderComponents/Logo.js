import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../../../Context/Context";

const Logo = ({ logo }) => {
  const [user, setUser] = useContext(Context);
  return (
    <section className="logo">
      {user ? (
        <Link className="link" to={"/"}>
          <img src={logo}></img>
        </Link>
      ) : (
        <img src={logo}></img>
      )}
    </section>
  );
};

export default Logo;
