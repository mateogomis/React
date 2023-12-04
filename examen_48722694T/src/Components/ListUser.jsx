// ListUsers.js

import React from 'react';
import useUserData from './hooks/useUserData';
import UserData from './UserData';

const ListUsers = () => {
  const usersData = useUserData();

  return (
    <div>
      {usersData && (
        <div>
          <h1>Lista de usuarios</h1>
          <UserData users={usersData} />
        </div>
      )}
    </div>
  );
};

export default ListUsers;
