import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [policies, setPolicies] = useState([]);
  const [claims, setClaims] = useState([]);
  const navigate = useNavigate();

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
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPolicies();
    fetchClaims();
  }, []);

  const handleNewClaim = () => {
    navigate('/new-claim');
  };

  const handleLogout = () => {
    navigate('/');
  };

  const getClaimStatus = (policyId) => {
    const claim = claims.find(claim => claim.policyId === policyId);
    return claim ? claim.status : 'No Claim';
  };

  const getUserId = (policyId) => {
    const claim = claims.find(claim => claim.policyId === policyId);
    return claim ? claim.userId : 'Unknown User';
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
            <p>User ID: {getUserId(policy.policy_id)}</p>
            <p>Claim Status: {getClaimStatus(policy.policy_id)}</p>
            <p>Amount: {policy.amount}</p>
            <p>Premium Amount: {policy.premium_amount}</p>
            <p>Duration: {policy.duration}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleNewClaim}>Create New Claim</button>
    </div>
  );
};

export default Home;