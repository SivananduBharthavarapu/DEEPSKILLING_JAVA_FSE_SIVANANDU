import React, { useState } from 'react';
import Guest from './Guest';
import User from './User';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prev => !prev);
  };

  let buttonText = isLoggedIn ? "Logout" : "Login";
  let pageContent = isLoggedIn ? <User /> : <Guest />;

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🛫 Ticket Booking App</h1>
      <button onClick={toggleLogin}>{buttonText}</button>
      <hr />
      {pageContent}
    </div>
  );
}

export default App;

