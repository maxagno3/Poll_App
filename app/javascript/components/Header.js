import React from "react";
import { Link } from "react-router-dom";
import AuthHeader from "./AuthHeader";
import NonAuthHeader from "./NonAuthHeader";

function Header(props) {
  return (
    <>
      {props.isLoggedIn ? (
        <AuthHeader isLoggedIn={props.isLoggedIn} />
      ) : (
        <NonAuthHeader />
      )}
    </>
  );
}

export default Header;
