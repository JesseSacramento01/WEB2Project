// src/pages/Register.tsx
import React, { useState } from 'react';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className='reg'>
      <h1>Register User</h1>
      
    
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="username">Username:</label>
      <input type="text" id="Username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
    </div>
    
    <div>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Register</button>
    </div> 
      </form>
    </div>
  );
};

export default Register;
