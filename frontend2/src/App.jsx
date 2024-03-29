import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import AboutPage from "./component/AboutPage";
import Contact from "./component/Contact";
import LoginForm from "./component/LoginForm";
import Signup from "./component/Signup";
import Footer from "./component/Footer";
import BookingForm from "./component/BookingForm";
import Logout from './component/Logout'
import AdminLaout from "./component/layout/AdminLaout";
import AdminUser from "./component/AdminUser";
import AdminBooking from "./component/AdminBooking";
import Middle from "./component/Middle";
import Profile from "./component/Profile";
import MYbookingForm from "./component/MYbookingForm";
import Forgotpassword from "./component/Forgetpassword";
import ResetPassword from "./component/ResetPassword";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Middle />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/BookingForm" element={<BookingForm />} />
          <Route path="/forget-password" element={<Forgotpassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/Mybooking" element={<MYbookingForm />} />
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/admin" element={<AdminLaout/>}>
            <Route path="users" element={<AdminUser/>}/>
            <Route path="Booking" element={<AdminBooking/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
