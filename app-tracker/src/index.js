import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing CSS

const user = {
name: 'Bradley' 
};


function AppName() {
    return ( 
  <>
    <h1>Welcome To TrackerApp</h1>
    
    <p>This is a simple app to track your daily jobs {user.name} applied</p>

    </>
    );
    
}

function userAcc(){

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <AppName/>
    <userAcc/>
  </React.StrictMode>
);

// For performance measurement (optional)
