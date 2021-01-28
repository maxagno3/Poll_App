import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Polls from "./Polls";
import Signup from "./Signup";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/polls" component={Polls} />
      </Switch>
    </>
  );
}

export default App;
