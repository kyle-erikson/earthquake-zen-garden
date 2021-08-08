import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import HeaderBar from "./components/layout/HeaderBar";

const App: React.FC<{}> = () => {
  return (
    <Router>
      <HeaderBar />
      <Switch>
        <Route exact path="/">
          {/* <HomePage /> */}
        </Route>
        <Route path="/:id">
          {/* <DetailPage /> */}
        </Route>
        <Route exact path="/profile">
          {/* <ProfilePage /> */}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;