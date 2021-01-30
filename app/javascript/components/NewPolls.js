import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Polls() {
  const [title, setTitle] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let headers = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
    };

    let payload = {
      poll: {
        title,
        options_attributes: [
          { name: optionOne },
          { name: optionTwo },
          { name: optionThree },
          { name: optionFour },
        ],
      },
    };

    axios
      .post("/polls", payload, headers)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    if (optionOne && optionTwo && optionThree && optionFour) {
      history.push("/allPolls");
    }
  };

  return (
    <div className="container w-25">
      <div className="login-form mt-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter title of your poll..."
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <input
            type="text"
            className="form-control mt-3 mb-3"
            placeholder="Enter options one"
            name="optionOne"
            value={optionOne}
            onChange={(e) => setOptionOne(e.target.value)}
          />
          <input
            type="text"
            className="form-control mt-3 mb-3"
            placeholder="Enter options two"
            name="optionTwo"
            value={optionTwo}
            onChange={(e) => setOptionTwo(e.target.value)}
          />
          <input
            type="text"
            className="form-control mt-3 mb-3"
            placeholder="Enter options three"
            name="optionThree"
            value={optionThree}
            onChange={(e) => setOptionThree(e.target.value)}
          />
          <input
            type="text"
            className="form-control mt-3 mb-3"
            placeholder="Enter options four"
            name="optionFour"
            value={optionFour}
            onChange={(e) => setOptionFour(e.target.value)}
          />
          <button className="btn btn-secondary btn-block">Create Poll</button>
        </form>
        <Link to="/allPolls">View Polls</Link>
      </div>
    </div>
  );
}

export default Polls;
