import axios from "axios";
import React, { useState } from "react";

function Polls() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let headers = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
    };

    axios
      .post("/polls", { title }, headers)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title of your poll..."
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Create Poll</button>
      </form>
    </div>
  );
}

export default Polls;
