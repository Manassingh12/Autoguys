import React from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { useAuth } from "../../store/auth";

export default function AdminLaout() {
  const { user, isLodding } = useAuth();
  if(isLodding){
    return <h1>Loading.....</h1>
  }
  if(!user.isAdmin){
    return <Navigate to="/" />
  }
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar bg-body-tertiary">
            <ul className="nav justify-content-center ms-auto">
              <li className="nav-item ">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/admin/users"
                >
                  <FaUser />
                  User Detial
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/Booking">
                  <TbBrandBooking />
                  Booking Detial
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />
      </header>
    </>
  );
}
