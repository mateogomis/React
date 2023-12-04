// useUserData.js

import { useState, useEffect } from 'react';

const useUserData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=5&nat=es&inc=picture,image,name,nat,login&noinfo');
        const data = await response.json();
        setUserData(data.results); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return userData;
};

export default useUserData;
