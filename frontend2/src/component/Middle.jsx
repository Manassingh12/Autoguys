import React from "react";

export default function Middle() {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className=" carousel slide"
        data-bs-ride="carousel"
      >
        <div className=" carousel-inner">
          <div className=" carousel-item active ">
            <img
              src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-90"
              alt="..."
            />
            <div className="sliderimg">
              <h1>Car Washing</h1>
              <p>
                Welcome to Autoguys where we redefine the shine of your beloved
                vehicle! Our car washing services are designed to give your car
                the pampering it deserves, ensuring it looks as good as new.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="https://images.pexels.com/photos/65623/vehicle-chrome-technology-automobile-65623.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-90"
              alt="..."
            />
            <div className="sliderimg">
              <h1>Engine Repair</h1>
              <p>
                At Autoguys we understand the importance of a reliable engine.
                Trust us to provide unparalleled engine repair services,
                ensuring your vehicle runs at peak performance. Contact us today
                to schedule your engine inspection and experience the difference
                our expertise makes!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/113176/pexels-photo-113176.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-90"
              alt="..."
            />
            <div className="sliderimg">
              <h1>Luxury Car Services </h1>
              <p>
                Welcome to Autoguys where sophistication meets automotive
                excellence. Our commitment is to redefine your driving
                experience by providing unparalleled luxury car services that go
                beyond your expectations. Whether you own a premium sedan, a
                high-performance sports car, or a luxury SUV, our dedicated team
                of experts is here to cater to your every need.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container py-5">
        <h1 className="text-center">My srevices</h1>
        <p className="text-center">
          Ensure the longevity and reliability of your vehicle with Autoguys
          Schedule an appointment today and experience the difference our
          dedication to quality and customer satisfaction can make for your car.
          Your journey begins with us!
        </p>
        <div className="row row-cols-1 row-cols-md-4 g-5 py-5">
          <div className="col">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">
             

                <p className="btn btn-light ">Engine repair</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">

                <p className="btn btn-light ">Detailing Service</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">
                <p className="btn btn-light">Denting & painting</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">

                <p className="btn btn-light ">tyres & Wheel care </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">

                <p className="btn btn-light ">Batteries</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">

                <p className="btn btn-light ">Clutch & Body Part</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">

                <p className="btn btn-light">Suspension & Fitments</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">
                <p className="btn btn-light">Car Sap & Cleaning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container1 ">
        <h1>Why Choose AutoGuys for Car Services in Bahraich?</h1>
        <p>
          Your Car is your asset, your prized possession you care about. But do
          you care about your car the right way? Take care of your car the right
          way with VehicleCare. We bring you India's best Car service near you
          in Gurgaon, at the most affordable prices.
        </p>
        <h5>
          But, why should you choose VehicleCare for your Car related services?
          Let us have a look!
        </h5>
        <h6>We Deliver What we promise at the most Affordable price -</h6>
        <p>
          {" "}
          VehicleCare always keeps the quality of work that it promises to
          deliver. We believe that you bought your car after putting in a lot of
          thought and money, so we understand the sentiments connected to your
          car. That is why every time you visit a VehicleCare workshop, we make
          sure you get exactly what you asked for. To achieve this we employ
          only skilled and certified professionals who are equipped to take care
          of all car-related issues for every make and model.
        </p>
        <h6>Easy Online Booking and Free Pick-Up and Drop -</h6>
        <p>
          {" "}
          Booking a Car service with VehicleCare is a piece of cake. You can
          book an appointment in a few simple steps with the VehicleCare app and
          website. We also offer for your ease, free car pick-up and drop
          service and we are always on time.
        </p>
        <h6>24X7 Customer Support -</h6>
        <p>
          We know that Car trouble never comes. We want to be there, whenever
          you need us. That’s why we give 24x7 customer care assistance for all
          help and support. You can reach us anytime via WhatsApp, e-mail, chat,
          or phone.
        </p>
      </div>
      <div className="slider">
        <div className="slider-under">
          <img
            src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="slider-under">
          <img
            src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
     
       
         
        </div>
      </div>
      
    </>
  );
}

