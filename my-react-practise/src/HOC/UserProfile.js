import React from 'react';

export const UserProfile = (props) => {

  return (
    <div className="user-profile">
      <h2>{props.user.name}</h2>
      <p>{props.user.email}</p>
      <p>{props.user.bio}</p>
    </div>
  );
};

export default UserProfile;