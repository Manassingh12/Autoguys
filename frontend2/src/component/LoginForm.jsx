// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../store/auth";
// import { toast } from "react-toastify";
// import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';

// const URL = "http://localhost:5000/api/auth/login";

// function LoginForm() {
//   const [user, setUser] = useState({
//     mobile: "",
//     password: "",
//   });

//   const navigate = useNavigate();
//   const { storeTokenInLS } = useAuth();

//   const handleInputs = (value, metadata) => {
//     setUser({
//       ...user,
//       mobile: value,
//     });
//   };

//   const hendleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });

//       console.log("login form", response);
//       const responseData = await response.json();

//       if (response.ok) {
//         alert("login successfully");
//         // store token in localhost
//         storeTokenInLS(responseData.token);

//         setUser({ mobile: "", password: "" });
//         navigate("/");
//       } else {
//         toast.error(responseData.extraDetial ? responseData.extraDetial : responseData.message);
//         console.log("invalid");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <form className="LoginForm mx-auto" onSubmit={hendleLogin}>
//         <h1 className="text-center">
//           <Link to="/Login">Login</Link>
//         </h1>
//         <div className="mb-3 mt-5">
//           <label htmlFor="mobile" className="form-label my-3">
//             Mobile Number
//           </label>
//           <PhoneInput
//             defaultCountry="IN"
//             value={user.mobile}
//             onChange={handleInputs}
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your Mobile number and password with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">
//             Password
//           </label>
//           <input
//             placeholder="Password"
//             value={user.password}
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//             name="password"
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//           />
//           <div id="emailHelp" className="form-text">
//             <a href="#">Forget password ?</a>
//           </div>
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//         <Link to="/Signup" className="btn my-2">
//           Signup Now.
//         </Link>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const URL1 = "http://localhost:5000/api/auth/login";

function LoginForm() {
    const [user, setUser] = useState({
        mobile: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS, isLoggedIn } = useAuth();

    const handleInputs = (value, metadata) => {
        setUser({
            ...user,
            mobile: value,
        });
    };

 

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL1, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            console.log("login form", response);
            const responseData = await response.json();

            if (response.ok) {
                toast.success("login successfully");
                // store token in localhost
                storeTokenInLS(responseData.token);

                setUser({ mobile: "", password: "" });
                navigate("/");
            } else {
                toast.error(responseData.extraDetail ? responseData.extraDetail : responseData.message);
                console.log("invalid");
            }
        } catch (error) {
            console.log(error);
        }
    };
    
  useEffect(() => {
    // Redirect to the dashboard if the user is already authenticated
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

    return (
        <div className="container-fluid">
            <form className="LoginForm mx-auto" onSubmit={handleLogin}>
                <h1 className="text-center">
                    <Link to="/Login">Login</Link>
                </h1>
                <div className="mb-3 mt-5">
                    <label htmlFor="mobile" className="form-label my-3">
                        Mobile Number
                    </label>
                    <PhoneInput
                        defaultCountry="IN"
                        value={user.mobile}
                        onChange={handleInputs}
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your Mobile number and password with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        name="password"
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                    <div id="emailHelp" className="form-text">
                       <Link to="/forget-password">Forget password ?</Link>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    Login
                </button>
                <Link to="/Signup" className="btn my-2">
                    Signup Now.
                </Link>
            </form>
        </div>
    );
}

export default LoginForm;
