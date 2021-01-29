import React from "react";
import { Link } from "react-router-dom";

function AuthHeader(props) {
  return (
    <header className="bg-primary">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-0">
        <Link className="navbar-brand p-right-5 w-75" to="/">
          <h2>Poll App</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="actions d-flex justify-content-between align-items-center flex-wrap my-2 my-lg-0">
            <div>
              <button className="btn btn-link mx-2">{props.isLoggedIn.name}</button>
            </div>
            <div>
              <Link to="/signup" className="btn btn-link mx-2">
                <button className="btn btn-link mx-2">Log out</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AuthHeader;
