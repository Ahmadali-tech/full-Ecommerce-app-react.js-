import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    return email.includes('@');
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
    } else if (!isValidPassword(formData.password)) {
      alert("Please enter a valid eight-character password.");
    } else {
      const user = { id: 1, username: '' };
      console.log('User registered:', user);
    }
  };

  return (
    <div>
      <div className='Registration'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account? <Link to="/LoginComponent">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
