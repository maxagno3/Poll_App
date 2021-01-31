// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the index.html.erb file inside app/views/pages.

import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
      <App />,
    document.body.appendChild(document.createElement("div"))
  );
});
