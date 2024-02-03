// LoginComponent.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a login action
    const user = { id: 1, username: 'exampleUser' };
    console.log('User logged in:', user);
  };

  return (
    <div className='LOGINFORM'>
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/Register">Register</Link>
      </p>
    </div>
    </div>
  );
};

export default LoginComponent;
