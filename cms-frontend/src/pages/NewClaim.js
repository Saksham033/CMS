import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewClaim.css';

const NewClaim = () => {
  const [claimDetails, setClaimDetails] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Placeholder for actual claim submission logic, replace with API call
    console.log('New Claim Submitted:', claimDetails);
    navigate('/home');
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
