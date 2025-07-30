import React from 'react';

function ListofPlayers() {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 40 },
    { name: "Dhoni", score: 90 },
    { name: "Raina", score: 30 },
    { name: "Gill", score: 75 },
    { name: "Bumrah", score: 65 },
    { name: "Rahul", score: 20 },
    { name: "Pant", score: 95 },
    { name: "Jadeja", score: 70 },
    { name: "Shami", score: 60 },
    { name: "Ashwin", score: 45 }
  ];

  const filtered = players.filter(player => player.score < 70); // arrow function

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {filtered.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
