import React, { useEffect, useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
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
    fetchClaims();
  }, []);

  const handleAccept = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/claims/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'Accepted' }),
      });
      if (!response.ok) {
        throw new Error('Failed to accept claim');
      }
      setClaims((prevClaims) =>
        prevClaims.map((claim) =>
          claim._id === id ? { ...claim, status: 'Accepted' } : claim
        )
      );
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/claims/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'Rejected' }),
      });
      if (!response.ok) {
        throw new Error('Failed to reject claim');
      }
      setClaims((prevClaims) =>
        prevClaims.map((claim) =>
          claim._id === id ? { ...claim, status: 'Rejected' } : claim
        )
      );
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="admin-container">
      <h2>Pending Claims</h2>
      <ul>
        {claims.map((claim) => (
          <li key={claim._id}>
            <p>Policy ID: {claim.policyId}</p>
            <p>User ID: {claim.userId}</p>
            <p>Claim Amount: {claim.claimAmount}</p>
            <p>Status: {claim.status}</p>
            {claim.status === 'Pending' && (
              <div className="button-container">
                <button onClick={() => handleAccept(claim._id)}>Accept</button>
                <button onClick={() => handleReject(claim._id)}>Reject</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
