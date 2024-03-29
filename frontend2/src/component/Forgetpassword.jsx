import React, { useState } from 'react';

const ForgotPassword = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('Internal server error.');
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp, newPassword }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('Internal server error.');
    }
  };

  return (
    <>
    <div>
      <h2>Forgot Password</h2>
      <div>{message}</div>
      <input
        type="tel"
        placeholder="Enter your mobile number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        required
      />
      <button type="button" onClick={handleForgotPassword}>
        Send OTP
      </button>

      {/* UI for OTP and New Password */}
      <h2>Reset Password</h2>
      <input
        type="text"
        placeholder="Enter the OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
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
    </>
  );
};

export default ForgotPassword;
