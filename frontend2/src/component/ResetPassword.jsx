// ResetPassword.js

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const ResetPassword = () => {
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('Internal server error.');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <div>{message}</div>
      <input
        type="text"
        placeholder="Enter the reset token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Enter your new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <button type="button" onClick={handleResetPassword}>
        Submit
      </button>
    </div>
  );
};

export default ResetPassword;
