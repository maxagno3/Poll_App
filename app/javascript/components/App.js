import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Polls from "./Polls";
import Header from "./Header";
import Login from "./Login";
import NewPoll from "./NewPolls";
import Signup from "./Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const history = useHistory();

  useEffect(() => {
    axios
      .get("/user")
      .then(({ data }) => setIsLoggedIn(data.user))
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    let headers = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
    };

    axios.delete("/logout", headers).then((res) => {
      console.log(res.status);
      if (res.status == 200) {
        // isLoggedIn = "";
        history.push("/login");
      }
    });
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
        <Route path="/newPoll" component={NewPoll} />
        <Route path="/allPolls" component={Polls} />
      </Switch>
    </>
  );
}

export default App;
