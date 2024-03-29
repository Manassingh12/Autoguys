import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export default function AdminBooking() {
  const [bookings , setBookings] = useState([])
  const { authorizationToken } = useAuth();
 const getAllBookingData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/booking", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`Bookings`, data )
      if(response.ok){
       setBookings(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBookingData();
  }, []);
  return (
    <>
      <section className="admin-users-section">
      <div className="container">
        <h1>Admin All Bookings</h1>
      </div>
      <div className="container">
      <table className=" table table-info ">
  <thead>
    <tr>
      
      <th scope="col">Fullname</th>
      <th scope="col">Email</th>
      <th scope="col">number</th>
      <th scope="col">address</th>
      <th scope="col">car</th>
      <th scope="col">car model</th>
      <th scope="col">service</th>
      <th scope="col">time</th>

  
    </tr>
  </thead>
  <tbody className="body table-group-divider">
  {bookings.map((curUser, index) => {
        return <tr  key={index}>
          <td>{curUser.Fullname}</td>
          <td>{curUser.email}</td>
          <td>{curUser.mobile}</td>
          <td>{curUser.Address}</td>
          <td>{curUser.selectedCar}</td>
          <td>{curUser.selectedModel}</td>
          <td>{curUser.service}</td>
          <td>{curUser.time}</td>


        </tr>
      })}

  </tbody>
</table>
      </div>
  
    </section>
    </>
  );
}
