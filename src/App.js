import React from "react";
import Landing from "./components/Landing";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import Register from "./components/Register";
import Login from "./components/Login";
import Reset from "./components/Reset";
import Terms from "./components/Terms";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing}></Route>
      <Switch>
        <Route path="/register">
          <ScrollToTop>
            <Register />
          </ScrollToTop>
        </Route>
        <Route path="/login">
          <ScrollToTop>
            <Login />
          </ScrollToTop>
        </Route>
        <Route path="/reset_password">
          <ScrollToTop>
            <Reset />
          </ScrollToTop>
        </Route>
        <Route path="/terms_and_conditions">
          <ScrollToTop>
            <Terms />
          </ScrollToTop>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
