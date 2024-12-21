import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.tsx'; 
import Notifications from './Notifications.tsx'; 
import './Home.css';

const Home = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) setUsername(storedUsername);
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="home-container">
      <Navbar onNotificationClick={toggleNotifications} />
      {showNotifications && <Notifications />} 

      <h1>Bem-vindo, {username ? username : 'usuário'}!</h1>
    </div>
  );
};

export default Home;
