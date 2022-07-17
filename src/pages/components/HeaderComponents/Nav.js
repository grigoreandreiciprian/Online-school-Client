import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../../../Context/Context";

import Button from 'react-bootstrap/Button';

export default () => {
  const [user, setUser] = useContext(Context);

  const out = () =>{
    setUser("")
  }

  return (
    <nav>
      {user? (
       
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
