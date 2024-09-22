import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing CSS

const user = {
};



function AppName() {
  return ( 
<>
  <h1>Welcome To TrackerApp</h1>
  
  <p>This is a simple app to track your daily jobs {user.name} applied</p>

  </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AppName/>

 
  </React.StrictMode>
);

