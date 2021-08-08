import React from "react";
import { RouteComponentProps } from "react-router-dom";
import TableItem from "../components/shared/DoubleColumnTableItem";
import data from "../data/index.json";

type DetailPageParams = {
  id: string;
};

type ReportPageProps = RouteComponentProps<DetailPageParams>;

interface EarthquakeDetails {
  title: string;
  mag: string;
  time: number;
  status: string;
  tsunami: number;
  type: string;
}

const titleMap = {
  title: "Title",
  mag: "Magnitude",
  time: "Time",
  status: "Status",
  tsunami: "Tsunami",
  type: "Type",
};

const getEarthquakeDetails = (id: string) => {
  const propertyForId = data.data.features.filter(
    (feature) => feature.id === id
  )[0].properties;

  const earthquakeDetails = Object.fromEntries(
    Object.entries(propertyForId).filter(([key]) =>
      Object.keys(titleMap).includes(key)
    )
  );
  
  return earthquakeDetails;
};

const ProfilePage = ({
  match: {
    params: { id },
  },
}: ReportPageProps) => {
  const earthquakeDetails = getEarthquakeDetails(id);

  return (
    <article className="container">
      <div id="detailsContainer">
        <h3>{earthquakeDetails.title}</h3>
        <div className="pageContent">
          <table id="profileTable">
            {Object.keys(titleMap).map((key) => {
              return (
                <TableItem
                  key={key}
                  title={titleMap[key as keyof EarthquakeDetails]}
                  value={earthquakeDetails[key as keyof EarthquakeDetails]}
                />
              );
            })}
          </table>
        </div>
      </div>
    </article>
  );
};

export default ProfilePage;
