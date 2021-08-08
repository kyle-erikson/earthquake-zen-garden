import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import HeaderBar from "./components/layout/HeaderBar";
import ProfilePage from "./views/ProfilePage";

const App: React.FC<{}> = () => {
  return (
    <Router>
      <HeaderBar />
      <Switch>
        <Route exact path="/">
          {/* <HomePage /> */}
        </Route>
        <Route exact path="/details/:id">
          {/* <DetailPage /> */}
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/hello">
          <h1>Hello</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;