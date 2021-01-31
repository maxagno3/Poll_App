import React from "react";
import uuid from "react-uuid";

function SinglePoll(props) {
  return (
    <div className="container">
      <div className="col-md-4">
        <div className="panel panel-primary">
          <div className="panel-heading mt-3 mb-3">
            <h3 className="panel-title">
              <span className="fa fa-line-chart"></span> {props.poll.title}
            </h3>
          </div>
          {props.error ? <small style={{color: "red", fontSize: "13px"}}>{props.error}</small> : ""}
          {props.poll.options?.map((option) => {
            return (
              <div className="panel-body" key={uuid()}>
                <ul className="list-group">
                  <li className="list-group-item">
                    <div className="d-flex p-2 justify-content-between">
                      <div
                        className="checkbox"
                        onClick={() =>
                          props.handleVote(props.poll.id, option.id)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        {option.name}
                      </div>
                      <div>
                        <h1>{option.vote_count} votes have been casted</h1>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SinglePoll;
