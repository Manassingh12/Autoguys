
import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';

function App() {
  const {user} = useAuth
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Assuming you have a user authentication mechanism and obtain the user ID
    const userId = user; // Replace with the actual user ID

    // Fetch Bookings for the logged-in user
    fetch(`http://localhost:5000/api/form/Mybooking/${userId}`)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error('Error fetching bookings:', error));
  }, []);

  return (
    <div>
      <h1>User Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            <strong>Date:</strong> {booking.date}<br />
            <strong>Fullname:</strong> {booking.Fullname}<br />
            <strong>email:</strong> {booking.email}<br />
            <strong>mobile:</strong> {booking.mobile}<br />
            <strong>Address:</strong> {booking.Address}<br />
            <strong>selectedCar:</strong> {booking.selectedCar}<br />
            <strong>selectedModel:</strong> {booking.selectedModel}<br />
            <strong>service:</strong> {booking.service}<br />
            <strong>time:</strong> {booking.time}<br/><br/><br/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
