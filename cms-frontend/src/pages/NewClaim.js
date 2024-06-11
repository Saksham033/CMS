import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewClaim.css';

const NewClaim = () => {
  const [claimDetails, setClaimDetails] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/claims', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ details: claimDetails }),
      });

      if (response.ok) {
        console.log('New Claim Submitted:', claimDetails);
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
          <label>Claim Details:</label>
          <textarea
            value={claimDetails}
            onChange={(e) => setClaimDetails(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Claim</button>
      </form>
    </div>
  );
};

export default NewClaim;
