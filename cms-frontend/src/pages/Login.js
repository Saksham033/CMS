import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // Add state for username
  const [isRegistering, setIsRegistering] = useState(false); // Add state for registration mode
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/users');
      const users = await response.json();
      
      // Find user by email
      const user = users.find(user => user.email === email);
      
      if (!user) {
        alert('User not found. Please register or check your credentials.');
        return;
      }
      
      // Check if password matches
      if (user.password !== password) {
        alert('Incorrect password. Please try again.');
        return;
      }
      
      // If user exists and password matches, navigate to homepage
      if(user.isAdmin){  
        navigate('/admin');
      }
      else{
        navigate('/home');
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, username }),
      });
      if (response.ok) {
        alert('Registration successful! Please login with your credentials.');
        setIsRegistering(false); // Switch back to login mode after registration
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleSubmit}>
        {isRegistering && (
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      <p>{isRegistering ? 'Already have an account?' : "Don't have an account?"} <button onClick={() => setIsRegistering(!isRegistering)}>{isRegistering ? 'Login' : 'Register'}</button></p>
    </div>
  );
};

export default Login;
