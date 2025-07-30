import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = () => {
    if (!isNaN(rupees)) {
      const euroValue = (parseFloat(rupees) / 90).toFixed(2);
      setEuros(euroValue);
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <label>Enter amount in ₹ Rupees: </label>
      <input
        type="text"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert to € Euro</button>
      {euros && <p>Converted Amount: € {euros}</p>}
    </div>
  );
}

export default CurrencyConvertor;
