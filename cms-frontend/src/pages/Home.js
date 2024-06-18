import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [policies, setPolicies] = useState([]);
  const [claims, setClaims] = useState([]);
  const [filteredClaims, setFilteredClaims] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId;

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/policies');
        if (!response.ok) {
          throw new Error('Failed to fetch policies');
        }
        const policyData = await response.json();
        setPolicies(policyData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchClaims = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/claims');
        if (!response.ok) {
          throw new Error('Failed to fetch claims');
        }
        const claimsData = await response.json();
        setClaims(claimsData);
        const userClaims = claimsData.filter(claim => claim.userId === userId);
        setFilteredClaims(userClaims);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPolicies();
    fetchClaims();
  }, [userId]);

  const handleNewClaim = () => {
    navigate('/new-claim');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="home-container">
      <div className="header">
        <h2>Your Policies</h2>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      <ul>
        {policies.map((policy) => (
          <li key={policy.policy_id}>
            <h3>{policy.policy_name}</h3>
            <p>Amount: {policy.amount}</p>
            <p>Premium Amount: {policy.premium_amount}</p>
            <p>Duration: {policy.duration}</p>
          </li>
        ))}
      </ul>
      <div className="header">
        <h2>Your Claims</h2>
      </div>
      <ul>
        {filteredClaims.map((claim) => (
          <li key={claim._id}>
            <p>User ID: {claim.userId}</p>
            <p>Policy ID: {claim.policyId}</p>
            <p>Claim Status: {claim.status}</p>
            <p>Amount: {claim.claimAmount}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleNewClaim}>Create New Claim</button>
    </div>
  );
};

export default Home;
