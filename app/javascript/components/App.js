import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Polls from "./Polls";
import Header from "./Header";
import Login from "./Login";
import NewPoll from "./NewPolls";
import Signup from "./Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const history = useHistory();

  const getUser = async () => {
    const { data } = await axios.get("/user");
    setIsLoggedIn(data?.user);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = () => {
    let headers = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
    };

    axios.delete("/logout", headers).then((res) => {
      if (res.status == 200) {
        setIsLoggedIn("");
        history.push("/");
      }
    });
  };

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Switch>
        <Route path="/" component={Polls} />
        {isLoggedIn ? (
          <Route path="/newPoll" component={NewPoll} />
        ) : (
          <>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Signup} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
