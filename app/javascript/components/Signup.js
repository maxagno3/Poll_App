import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let headers = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
    };

    axios
      .post("/signup", { name, email, password, passwordConfirmation }, headers)
      .then((res) => {
        if (res.data.user) {
          history.push("/login");
        } else {
          setErrors(res.data.error);
        }
      })
      .catch((err) => setErrors(err));
    // if (errors !== []) {
    //   history.push("/login");
    // }
  };

  return (
    <div className="container w-25">
      <div className="login-form mt-5">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center display-4 m-3">Sign up</h2>
          <div className="form-group">
            <small
              className="d-flex justify-content-center"
              style={{ color: "red", fontSize: "13px" }}
            >
              {errors ? errors : ""}
            </small>
            <input
              type="text"
              className="form-control"
              name={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name here..."
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here..."
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name={password}
              onChange={(e) => setPassword(e.target.value)}
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              name={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required="required"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Sign up
            </button>
          </div>
        </form>
        <p className="text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
