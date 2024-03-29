
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const URL1 = "http://localhost:5000/api/auth/send-otp";
const URL2 = "http://localhost:5000/api/auth/verify-otp";
const URL3 = "http://localhost:5000/api/auth/signup";

function Signup() {
  const [user, setUser] = useState({
    Fullname: "",
    mobile: "",
    password: "",
    otp: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(URL1, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile: user.mobile }),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        toast.success("OTP sent successfully");
      } else {
        console.error("Send OTP Error:", responseData);
  
        // Check if the error is due to the mobile number already being registered
        if (responseData.message.includes("mobile number is already exist")) {
          toast.error("Mobile number is already registered. Please use a different number.");
        } else {
          toast.error(responseData.extraDetail ? responseData.extraDetail : responseData.message);
        }
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };
  
  const handleVerifyOtp = async () => {
    try {
      const response = await fetch(URL2, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile: user.mobile, otp: user.otp }),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast.success("OTP verification successful");
      } else {
        toast.error(responseData.extraDetail ? responseData.extraDetail : responseData.message);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL3, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Fullname: user.Fullname,
          mobile: user.mobile,
          password: user.password,
          otp: user.otp,
        }),
      });

      const responseData = await response.json();
      console.log(responseData)

      if (response.ok) {
        storeTokenInLS(responseData.token);
        setUser({ Fullname: "", mobile: "", password: "", otp: "" });
        toast.success("Registration successful");
        navigate("/");
      } else {
        toast.error(responseData.extraDetail ? responseData.extraDetail : responseData.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="container-fluid">
      <form className="Signup mx-auto" onSubmit={handleSignup}>
        <h1 className="text-center">
          <Link to="/Signup">Signup</Link>
        </h1>
        <div className="mb-3 mt-5">
          <label htmlFor="Fullname" className="form-label">
            Full Name
          </label>
          <input
            placeholder="Full Name"
            autoComplete="off"
            value={user.Fullname}
            onChange={handleInputs}
            name="Fullname"
            type="text"
            className="form-control"
          />
          <label htmlFor="mobile" className="form-label my-3">
            Mobile Number
          </label>
          <PhoneInput
            defaultCountry="IN"
            value={user.mobile}
            onChange={(value) => handleInputs({ target: { name: "mobile", value } })}
          />
          {user.mobile && (
            <div>
              <label htmlFor="otp" className="form-label my-3">
                OTP
              </label>
              <input
                placeholder="OTP"
                autoComplete="off"
                value={user.otp}
                onChange={handleInputs}
                name="otp"
                type="text"
                className="form-control"
              />
              <button type="button" className="btn btn-secondary" onClick={handleVerifyOtp}>
                Verify OTP
              </button>
            </div>
          )}
          <label htmlFor="password" className="form-label my-3">
            Password
          </label>
          <input
            placeholder="Password"
            autoComplete="off"
            value={user.password}
            onChange={handleInputs}
            name="password"
            type="password"
            className="form-control"
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleSendOtp}>
          Send OTP
        </button>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
        <Link to="/Login" className="btn my-2">
          Already Login?
        </Link>
      </form>
    </div>
  );
}

export default Signup;
