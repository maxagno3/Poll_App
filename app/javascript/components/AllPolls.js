import axios from "axios";
import uuid from "react-uuid";
import React, { useEffect, useState } from "react";
import SinglePoll from "./SinglePoll";
import { Link } from "react-router-dom";

function AllPolls() {
  const [allPolls, setAllPolls] = useState([]);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    let headers = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
    };
    axios
      .get("/polls", headers)
      .then(({ data }) => setAllPolls(data))
      .catch((err) => console.log(err));
  }, [allPolls.length]);

  const handleVote = (pollId) => {
    let headers = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
    };
    axios
      .post("/vote", { poll_id: pollId }, headers)
      .then(({ data }) => setVoted(data.voted))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>
        <Link to="/polls" className="btn btn-link mx-2">
          Create new poll
        </Link>
      </h3>
      {allPolls?.map((poll) => {
        return (
          <SinglePoll
            poll={poll}
            key={uuid()}
            handleVote={handleVote}
            voted={voted}
          />
        );
      })}
    </div>
  );
}

export default AllPolls;
