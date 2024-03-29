import React from "react";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
function Contact() {
  return (
    <>
      <div className="contact container">
        <div className="ContactTop container">
        <h1>let us talk</h1>
        </div>
        <div className="container">
          <div className="frists ">
            <div className="innerfrist">
            <h2>Meet us</h2>
            <h4> <IoCallOutline /> +91 00000000</h4>
            <h4> <MdAlternateEmail /> contact@gmail.com</h4>
            <h4> <IoLocationOutline /> adderss from admin</h4>
            </div>
          </div>
          <div className="frists frist2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44134.03124798147!2d81.56112684512345!3d27.574398905616487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999a957005f1d65%3A0x5df751d83e3a7717!2sBahraich%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1706545148482!5m2!1sen!2sin"
              width="400"
              height="400"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="frists frists3">
            <div className="innerfrist3">
            <h1>Pitch us</h1>
            <p>hello,</p>
            <p>my name is --- my emai address is ------ and <br />
               i would like to disucc about servicess</p>
               </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
