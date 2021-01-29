import React from "react";
import Options from "./Options";

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
          <Options options={props.poll.id} />
          <div className="panel-footer text-center">
            <button type="button" className="btn btn-primary btn-block btn-sm">
              Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePoll;
