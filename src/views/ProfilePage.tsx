import React from "react";
import TableItem from "../components/shared/TableItems";
import data from "../data/index.json";
import { ApplicationData, ProfileData } from "../types";

const { profile } = data as ApplicationData;

interface TitleMap {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  bio: string;
}

const titleMap = {
  firstName: "First name",
  lastName: "Last name",
  phone: "Phone",
  email: "Email",
  bio: "Bio"
};

const ProfilePage = () => {
  return (
    <article className="container">
      <h3>Profile</h3>
      <div id="profileContent">
        <div>
          <img id="avatar" src={profile.avatarImage} />
        </div>
        <div>
          <table>
            {Object.keys(profile).map((key) => {
              if (key !== "avatarImage") {
                return <TableItem title={titleMap[key as keyof TitleMap]} value={profile[key as keyof ProfileData]} />
              }
              return null;
            })}
          </table>
        </div>
      </div>
    </article>
  );
};

export default ProfilePage;
