import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import { IoHome } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { GiEgyptianProfile } from "react-icons/gi";


function Navbar() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <img src="./public/image1.png" alt="" />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
              <IoHome />
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
              <IoIosContact />
                contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
              <GiEgyptianProfile />
                profile
              </Link>
            </li>
          </ul>
          {isLoggedIn ? (
            <ul className="ms-auto">
                  <li className="nav-item mx-2">
                <Link to="/BookingForm" className="btn btn-outline-primary">
                  Booking
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="btn btn-primary">
                  Logout
                </Link>
              </li>
          
            </ul>
          ) : (
            <ul className="ms-auto">
              <li className="nav-item mx-2">
                <Link to="/BookingForm" className="btn btn-outline-primary">
                  Booking
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Signup" className="btn btn-primary m-2">
                  Signup
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
