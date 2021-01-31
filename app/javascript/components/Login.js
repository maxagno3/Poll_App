import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

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
      .post("/login", { email, password }, headers)
      .then((res) => {
        if (res.data.user) {
          history.push("/");
        }
      })
      .catch((err) => setErrors(err));
  };

  return (
    <>
      <div className="container w-25">
        <div className="login-form mt-5">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center display-4 m-3">Login</h2>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                placeholder="Password"
                required="required"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Log in
              </button>
            </div>
          </form>
          <p className="text-center">
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
