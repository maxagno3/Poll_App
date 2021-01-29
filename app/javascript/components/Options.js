import axios from "axios";
import React, { useEffect, useState } from "react";
import uuid from "react-uuid";

function Options(props) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const url = `/polls/${props.options}`;
    axios
      .get(url)
      .then(({ data }) => setOptions(data.options))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {options?.map((option) => {
        return (
          <div className="panel-body" key={uuid()}>
            <ul className="list-group">
              <li className="list-group-item">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value="" /> {option.name}
                  </label>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Options;
