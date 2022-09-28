import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('world');

  useEffect(() => {
    document.title = `Hello, ${name}`;
  });
  
  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <button onClick={() => setName('Harrison')}>
        Click me to change the name
      </button>
    </div>
  );
}

export default App;
