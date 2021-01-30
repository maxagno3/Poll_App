import axios from "axios";
import React, { useEffect, useState } from "react";
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
          {props.poll.options?.map((option) => {
            return (
              <div className="panel-body" key={uuid()}>
                <ul className="list-group">
                  <li className="list-group-item">
                    {props.voted ? (
                      <div className="checkbox">
                        <label>{option.name}</label>
                      </div>
                    ) : (
                      <div className="checkbox" onClick={() => props.handleVote(props.poll.id)}>
                        <label>
                          <input type="checkbox" value="" /> {option.name}
                        </label>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            );
          })}
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
