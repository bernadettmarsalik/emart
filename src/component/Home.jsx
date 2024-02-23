import React from "react";
import bg from "../assets/bg.jpg";
import Products from "./Products";

export default function Home() {
  const containerStyle = {
    height: "500px",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <>
      <div className="hero">
        <div
          className="card text-bg-white border-0 rounded-0"
          style={containerStyle}
        >
          <img
            src={bg}
            className="card-img  rounded-0"
            style={imageStyle}
            alt="Background"
          />
          <div className="card-img-overlay">
            <div className="lg-w-50 w-100">
              <h5 className="card-title display-3 fw-bolder mb-0">
                SEASON ARRIVALS
              </h5>
              <p className="card-text display-4">Discover all the trends.</p>
              <p className="card-text display-5">
                <small>24 SPRING/SUMMER</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
}
