import React from 'react';

function IndianPlayers() {
  const allPlayers = ["Kohli", "Rohit", "Dhawan", "Shreyas", "Surya", "Hardik"];

  // 🟦 Even Index Players (0, 2, 4...)
  const evenTeam = allPlayers.filter((_, index) => index % 2 === 0);

  // 🟥 Odd Index Players (1, 3, 5...)
  const oddTeam = allPlayers.filter((_, index) => index % 2 !== 0);

  // 🧩 Destructuring example
  const [firstPlayer, secondPlayer, ...others] = allPlayers;

  // 🟨 Merge Arrays (T20 + Ranji)
  const T20Players = ["Iyer", "Kishan"];
  const RanjiPlayers = ["Pujara", "Rahane"];
  const mergedTeam = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>🟦 Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>🟥 Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>🧩 Destructuring</h2>
      <p>First Player: {firstPlayer}</p>
      <p>Second Player: {secondPlayer}</p>
      <p>Remaining: {others.join(", ")}</p>

      <h2>🟨 Merged Team (T20 + Ranji)</h2>
      <ul>
        {mergedTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;

