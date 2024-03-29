import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const defBookingForm = {
  Fullname: "",
  email: "",
  mobile: "",
  Address: "",
  selectedCar: "",
  selectedModel: "",
  service: "",
  time: "",
  bookingDetails: "Some booking details here",
  user:"",
};

function BookingForm() {
  const [booking, setBooking] = useState(defBookingForm);
  // const navigate = useNavigate()

  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      setBooking((prevBooking) => ({
        ...prevBooking,
        Fullname: user.Fullname,
      }));
    }
  }, [user]);

  const hendleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value !== undefined ? value : "",
    }));
  };

  const hendlebooking = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:5000/api/form/Booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        
        },
        body: JSON.stringify(booking),
      });
      if (response.ok) {
        setBooking(defBookingForm);
        const data = await response.json();
        console.log(data);
        alert("Booking is successful");
      } else {
        console.log(response);
        alert("Booking not successful");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Booking not found");
    }
  };


  return (
    <>
      <div className="container-fluid">
        <form className=" booking mx-auto" onSubmit={hendlebooking}>
          <h1 className="text-center">
            <Link to="/BookingForm">Booking form</Link>
          </h1>
          <div className="mb-3 mt-5">
            <label htmlFor="exampleInputEmail1" className="form-label ">
              Full Name:
            </label>
            <input
              value={booking.Fullname}
              onChange={hendleInputs}
              name="Fullname"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputEmail1" className="form-label my-3">
              Email:
            </label>
            <input
              value={booking.email}
              onChange={hendleInputs}
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputEmail1" className="form-label my-3">
              Mobile Number:
            </label>
            <input
              value={booking.mobile}
              onChange={hendleInputs}
              name="mobile"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div className="form-floating my-2">
              <textarea
                value={booking.Address}
                onChange={hendleInputs}
                name="Address"
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label htmlFor="floatingTextarea">Address</label>
            </div>
            <div className="Carselect my-1">
              {/* Car Dropdown */}
              <label htmlFor="car" className="lable1 my-3">
                Select Car:
              </label>
       
              <input
                value={booking.selectedCar}
                onChange={hendleInputs}
                name="selectedCar"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
         

              {/* Model Dropdown */}
              <label htmlFor="model" className="my-3">
                Select Model:
              </label>
              <input
                value={booking.selectedModel}
                onChange={hendleInputs}
                name="selectedModel"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="input-group mb-4">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Services
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              value={booking.service}
              onChange={hendleInputs}
              name="service"
            >
              <option selected>Choose...</option>
              <option defaultValue="1">Engine repair</option>
              <option defaultValue="2">Tire repair and change</option>
              <option defaultValue="3">Oil & fluids</option>
              <option defaultValue="4">Car batteries</option>
              <option defaultValue="5">etc.</option>
            </select>
          </div>
          <div className="input-group mb-4">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Time
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              value={booking.time}
              onChange={hendleInputs}
              name="time"
            >
              <option selected>Choose...</option>
              <option defaultValue="1">10:00 Am</option>
              <option defaultValue="2">12:00 PM</option>
              <option defaultValue="3">02:00 PM</option>
              <option defaultValue="4">04:00 PM</option>
              <option defaultValue="5">06:00 PM</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Book Appoinment
          </button>
        </form>
      </div>
    </>
  );
}

export default BookingForm;