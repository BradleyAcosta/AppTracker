import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing CSS

const user = {
};



function Register() {
  return ( 
<>
  <h1>Register</h1>
        <div>
          <form>
            <h2>Create an Account</h2>
          
                <label htmlFor="name" >Name:</label>
                <input
                  placeholder="Name"
                    type="text"
                    id="name"
                    required
                />
                <br />

                <label htmlFor="email">Email:</label>
                <input
                  placeholder="example@example.com"
                  type="email"
                  id="email"
                   
                />
                <br />

                <label htmlFor="password">Password:</label>
                <input
                placeholder="Password"
                    type="password"
                    id="password"
          
                />
                <br />

                <button type="submit">Submit</button>
            </form>
            </div>
</>
  );
  
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Register/>
  
    <userAcc/>
  </React.StrictMode>
);

// For performance measurement (optional)
