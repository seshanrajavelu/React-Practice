import React from "react";
import withAuthentication from "./withAuthentication";
import UserProfile from "./UserProfile";

const user = {
  name: "Seshan Rajavelu",
  email: "seshan05677@gmail.com",
  bio: "ReactJs Developer",
};

const AuthenticatedUserProfile = withAuthentication(UserProfile);

export const hoc = () => {
  return (
    <div className="app">
      <AuthenticatedUserProfile user={user} />
    </div>
  );
};

export default hoc;
