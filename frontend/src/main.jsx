import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>testv2</h1>
      <p>Ready to build!</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
