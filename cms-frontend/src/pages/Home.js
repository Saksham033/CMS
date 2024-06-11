import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [policies, setPolicies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user policies here, replace with actual API call
    const fetchPolicies = async () => {
      // Placeholder data
      const policyData = [
        { id: 1, policyName: 'Policy 1', details: 'Details of policy 1' },
        { id: 2, policyName: 'Policy 2', details: 'Details of policy 2' },
      ];
      setPolicies(policyData);
    };
    fetchPolicies();
  }, []);

  const handleNewClaim = () => {
    navigate('/new-claim');
  };

  return (
    <div className="home-container">
      <h2>Your Policies</h2>
      <ul>
        {policies.map((policy) => (
          <li key={policy.id}>
            <h3>{policy.policyName}</h3>
            <p>{policy.details}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleNewClaim}>Create New Claim</button>
    </div>
  );
};

export default Home;
