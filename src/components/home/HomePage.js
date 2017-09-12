import React from 'react';
import HomeInfo from './HomeInfo';

const HomePage = () => {
  let message = 'a message passed down from Home Page';
  return (
    <div>
      <div className="home-message flex-column">
        <label className="home-title">Welcome To Ps-Gift-Card UI</label>
        <HomeInfo msg={message}/>
      </div>
    </div>
  )
};

export default HomePage;
