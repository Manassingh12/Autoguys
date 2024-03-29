import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
const AboutPage = () => {
  const { user } = useAuth();
  return (
    <div className="container">
      <h1 className="heading">About Our Car Service
      </h1>
      <h5>Welcome {user ? `${user.Fullname} to our website` : `to our website`}</h5>
      <p className="paragraph">
        Welcome to Autoguys, where we are dedicated to providing top-notch car
        services tailored to your needs. With a passion for excellence and a
        commitment to customer satisfaction, we have been serving our community
        since 2024.
      </p>
      <p className="paragraph">
        At Autoguys, we understand that your journey is more than just reaching
        a destination; it's about the experience along the way. Our team of
        skilled professionals is committed to ensuring your comfort, safety, and
        satisfaction on every ride.
      </p>
      <p className="paragraph">
        Our mission is to redefine the standards of car services by offering
        reliable, efficient, and customer-centric solutions. Whether you're a
        daily commuter, a business traveler, or in need of special event
        transportation,Autoguys is here to make your journey exceptional.
      </p>
      <div className="About container">
        <div className="frist1">
          <h3>Satisfying Coustmer</h3>
          <h1>+50</h1>
        </div>
        <div className="frist2">
        <h3>Bookings</h3>
        <h1>+50</h1>
        </div>
        <div className="frist3">
        <h3>Rateing</h3>
        <h1>4.8</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
