import React from "react";
import { Link } from "react-router-dom";
import formatDate from "../../helpers/timeFormatter";
import { Feature } from "../../types";

const EarthquakesTableItem = ({id, properties: {place, mag, time}}: Feature) => {
  return (
    <tr>
      <td><Link to={`/details/${id}`}>{place}</Link></td>
      <td>{mag}</td>
      <td>{formatDate(time)}</td>
    </tr>
  )
};

export default EarthquakesTableItem;