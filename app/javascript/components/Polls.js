import axios from "axios";
import uuid from "react-uuid";
import React, { useEffect, useState } from "react";
import SinglePoll from "./SinglePoll";

function Polls() {
  const [allPolls, setAllPolls] = useState([]);
  const [votes, setVotes] = useState();
  const [voted, setVoted] = useState(false);
  const [error, settError] = useState();

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

  const handleVote = (pollId, optionId) => {
    let headers = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
    };
    axios
      .post("/vote", { poll_id: pollId, option_id: optionId }, headers)
      .then((res) => {
        if (res.data.votes) {
          setVotes(res.data.votes);
          setVoted(true);
        } else {
          setVoted(false);
          settError(res.data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {allPolls?.map((poll) => {
        return (
          <SinglePoll
            poll={poll}
            key={uuid()}
            handleVote={handleVote}
            votes={votes}
            voted={voted}
            error={error}
          />
        );
      })}
    </div>
  );
}

export default Polls;
