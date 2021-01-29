import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import AllPolls from "./AllPolls";
import Header from "./Header";
import Login from "./Login";
import Polls from "./Polls";
import Signup from "./Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    axios
      .get("/user")
      .then(({ data }) => setIsLoggedIn(data.user))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/polls" component={Polls} />
        <Route path="/allpolls" component={AllPolls} />
      </Switch>
    </>
  );
}

export default App;
