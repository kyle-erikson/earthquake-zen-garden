import React from "react";
import EarthquakesTableItem from "../components/homePage/EarthqualesTableItem";
import data from "../data/index.json";
import useSortableData from "../helpers/earthquakeSorter";
import { EarthquakeData } from "../types";

const {
  metadata: { title },
  features,
} = data.data as EarthquakeData;

const HomePage = () => {
  const {sortedItems, sortItems} = useSortableData(features);

  return (
    <article className="container">
      <h3>{title}</h3>
      <div className="pageContent">
        <table id="earthquakeListTable">
          <tr>
            <th onClick={() => sortItems("title")}>Title</th>
            <th onClick={() => sortItems("mag")}>Magnitude</th>
            <th onClick={() => sortItems("time")}>Time</th>
          </tr>
          {sortedItems.map((feature) => {
            return <EarthquakesTableItem key={feature.id} {...feature} />;
          })}
        </table>
      </div>
    </article>
  );
};

export default HomePage;
