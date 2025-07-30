import React from 'react';
import Counter from './Counter';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>🧪 React Event Examples App</h1>
      <Counter />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
