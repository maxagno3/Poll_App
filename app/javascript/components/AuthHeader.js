import React from "react";
import { Link, NavLink } from "react-router-dom";

function AuthHeader(props) {
  return (
    <header className="bg-primary">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-0">
        <Link className="navbar-brand p-right-5 w-70" to="/">
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
          <div className="actions d-flex align-items-center flex-wrap my-2 my-lg-0 py-2">
            <div>
              <button className="btn btn-link mx-2">
                {props.isLoggedIn.name}
              </button>
            </div>
            <div>
              <NavLink
                to="/newPoll"
                className="btn btn-link"
                activeClassName="active"
              >
                Create Poll
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/allPolls"
                className="btn btn-link mx-2"
                activeClassName="active"
              >
                View polls
              </NavLink>
            </div>
            <div>
              <button
                className="btn btn-link mx-2"
                onClick={props.handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AuthHeader;
