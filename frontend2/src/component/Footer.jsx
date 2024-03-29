import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
      
        <div className="img">
        <img   src="./public/image1.png" alt=""/>
        </div>
        <div className="content3">
          <div className="about">
            <h4>Page</h4>
            <h6><Link  to="/">Home</Link> </h6>
            <h6><Link  to="/About">about</Link> </h6>
            <h6><Link  to="/BookingForm">Booking</Link> </h6>
          </div>
          <div className="Legal">
            <h4>Legal</h4>
            <h6><Link  to="#">privacy</Link> </h6>
            <h6><Link  to="#">Refund policy</Link> </h6>
            <h6><Link  to="#">cookies police</Link> </h6>
          </div>
          <div className="contact">
           <h4>contact</h4>
            <h6>+910000000000</h6>
            <h6>
              address- meera khel <br /> pura bahraich, bahraich
              <br />
              pin/zip code- 271801
            </h6>
          </div>
          <div className="icon">
            <a href=""><i className="ri-facebook-circle-fill"></i></a>
            <a href=""><i className="ri-twitter-x-fill"></i></a>
            <a href=""><i className="ri-instagram-fill"></i></a>
          </div>
          </div>
         
        
      </footer>
    </>
  );
}

export default Footer;
