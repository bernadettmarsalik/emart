/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-white py-3 shadow-sm">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold fs-4" href="#">
            LA COLLECTION
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a href="" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-2"></i>
                Login
              </a>
              <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-up me-2"></i>
                Register
              </a>
              <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-2"></i>
                Cart
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
