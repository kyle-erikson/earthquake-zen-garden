import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/index.json";
import { ApplicationData, SiteData } from "../../types";

const {site, profile}  = data as ApplicationData;

const HeaderBar: React.FC<{}> = () => {
  return (
    <div id="headerBar">
      <div>
        <Link to="/">
          <img id="logo" src={site.logoImage} />
        </Link>
      </div>
      <h1>{site.title}</h1>
      <div id="profileLink">
        <Link to="/profile"><b>Welcome {profile.firstName}</b></Link>
      </div>
    </div>
  );
};

export default HeaderBar;
