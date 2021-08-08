import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import HeaderBar from "./components/layout/HeaderBar";
import ProfilePage from "./views/ProfilePage";
import HomePage from "./views/HomePage";
import DetailPage from "./views/DetailPage";

const App = () => {
  return (
    <Router>
      <HeaderBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details/:id" component={DetailPage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
  );
};

export default App;