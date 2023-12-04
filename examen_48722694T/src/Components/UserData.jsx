// UserData.js
// UserData.js

import React from 'react';

const UserData = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div className="user-card" key={user.login.uuid}>
          <img src={user.picture.thumbnail} alt="User" />
          <div>
            <h2>{`${user.name.first} ${user.name.last}`}</h2>
            <p>{`@${user.login.username}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserData;
