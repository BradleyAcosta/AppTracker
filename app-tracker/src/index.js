import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
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
          
                <label htmlFor="username" >Username:</label>
                <input
                  placeholder="username"
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


                <h3> Have an account? <Link to = "/Login">Login</Link></h3>
              
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
