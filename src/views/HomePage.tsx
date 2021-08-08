import React from "react";
import { Link } from "react-router-dom";
import data from "../data/index.json";
import { EarthquakeData, Feature } from "../types";
var moment = require('moment-timezone');

// https://www.w3schools.com/howto/howto_js_sort_table.asp

// https://www.smashingmagazine.com/2020/03/sortable-tables-react/

const {
  metadata: { title },
  features,
} = data.data as EarthquakeData;

const formatDate = (unixTime: number) => {
  return moment.tz(unixTime, "America/Los_Angeles").format('MMM DD, YYYY, hh:mm A');
};

const EarthquakesTableItem = ({id, properties: {place, mag, time}}: Feature) => {
  return (
    <tr>
      <td><Link to={`/details/${id}`}>{place}</Link></td>
      <td>{mag}</td>
      <td>{formatDate(time)}</td>
    </tr>
  )
};

const HomePage = () => {
  return (
    <article className="container">
      <h3>{title}</h3>
      <div className="pageContent">
        <table id="earthquakeListTable">
          <tr>
            <th>Title</th>
            <th>Magnitude</th>
            <th>Time</th>
          </tr>
          {features.map((feature) => {
            return <EarthquakesTableItem {...feature} />
          })}
        </table>
      </div>
    </article>
  );
};

export default HomePage;
