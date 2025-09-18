import React, { useEffect, useState } from 'react';
import UserCard from './component/UserCard';
import { TailSpin } from 'react-loader-spinner';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const getUsersData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

     const formattedData = data.map(eachItem => ({
  id: eachItem.id,
  name: eachItem.name,
  email: eachItem.email,
  phone: eachItem.phone,
  company: eachItem.company,
  website: eachItem.website,
  address: eachItem.address,
}));
      setUsersData(formattedData);
      setIsLoading(false);
    };

    getUsersData();
  }, []);

  return (
    <div className="user-list-container">
      {isLoading ? (
        <TailSpin color="#00BFFF" height={50} width={50} />
      ) : (
        usersData.map(user => <UserCard userData={user} key={user.id} />)
      )}
    </div>
  );
};

export default App;