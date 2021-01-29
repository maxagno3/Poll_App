import axios from "axios";
import uuid from "react-uuid";
import React, { useEffect, useState } from "react";
import SinglePoll from "./SinglePoll";

function AllPolls() {
  const [allPolls, setAllPolls] = useState([]);

  useEffect(() => {
    let headers = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
    };

    axios
      .get("/polls", headers)
      .then(({ data }) => setAllPolls(data.polls))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {allPolls?.map((poll) => {
        return <SinglePoll poll={poll} key={uuid()} />;
      })}
    </div>
  );
}

export default AllPolls;
