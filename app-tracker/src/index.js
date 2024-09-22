import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing CSS


function Hello() {
    return <h1>Hello, world!</h1>;
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);

// For performance measurement (optional)
