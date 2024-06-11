import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewClaim.css';

const NewClaim = () => {
  const [policyId, setPolicyId] = useState('');
  const [userId, setUserId] = useState('');
  const [claimAmount, setClaimAmount] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/claims', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          policyId: policyId,
          userId: userId,
          claimAmount: claimAmount,
        }),
      });

      if (response.ok) {
        console.log('New Claim Submitted');
        navigate('/home');
      } else {
        console.error('Failed to submit claim');
        // Handle error, show alert or error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error, show alert or error message to the user
    }
  };

  return (
    <div className="new-claim-container">
      <h2>Create New Claim</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Policy ID:</label>
          <input
            type="text"
            value={policyId}
            onChange={(e) => setPolicyId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Claim Amount:</label>
          <input
            type="number"
            value={claimAmount}
            onChange={(e) => setClaimAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Claim</button>
      </form>
    </div>
  );
};

export default NewClaim;
