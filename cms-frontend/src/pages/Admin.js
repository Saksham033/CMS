import React, { useEffect, useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    // Fetch pending claims here, replace with actual API call
    const fetchClaims = async () => {
      // Placeholder data
      const claimsData = [
        { id: 1, details: 'Claim 1 details', status: 'Pending' },
        { id: 2, details: 'Claim 2 details', status: 'Pending' },
      ];
      setClaims(claimsData);
    };
    fetchClaims();
  }, []);

  const handleAccept = (id) => {
    // Placeholder for accept logic, replace with API call
    setClaims((prevClaims) =>
      prevClaims.map((claim) =>
        claim.id === id ? { ...claim, status: 'Accepted' } : claim
      )
    );
  };

  const handleReject = (id) => {
    // Placeholder for reject logic, replace with API call
    setClaims((prevClaims) =>
      prevClaims.map((claim) =>
        claim.id === id ? { ...claim, status: 'Rejected' } : claim
      )
    );
  };

  return (
    <div className="admin-container">
      <h2>Pending Claims</h2>
      <ul>
        {claims.map((claim) => (
          <li key={claim.id}>
            <p>{claim.details}</p>
            <p>Status: {claim.status}</p>
            {claim.status === 'Pending' && (
              <>
                <button onClick={() => handleAccept(claim.id)}>Accept</button>
                <button onClick={() => handleReject(claim.id)}>Reject</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
