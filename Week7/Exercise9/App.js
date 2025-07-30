import React, { useState } from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true); // 🔄 state to control view

  const toggleView = () => {
    setFlag(!flag); // Flip the flag on button click
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>🏏 Cricket App</h1>

      <button onClick={toggleView} style={{ marginBottom: '20px' }}>
        {flag ? "Switch to IndianPlayers View" : "Switch to ListofPlayers View"}
      </button>

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;

