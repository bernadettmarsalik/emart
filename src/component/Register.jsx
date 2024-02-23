import React from "react";
import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12 mb-3">
          <h1 className="display-6 fw-bolder text-center">Register</h1>
          <hr />
          <h5 className="mb-3">
            *Sign up now and get 10% off your first order!
          </h5>
          <div className="container d-flex ">
            <h6 className="mb-5">If you already have an account:</h6>
            <NavLink
              to="/login"
              className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover h6 ms-2"
            >
              <i className="fa fa-sign-up me-2"></i>
              Sign in
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container shadow p-5 rounded-3 col-sm-12 col-md-6 ">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-4 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              I sign up for the newsletter for extra offers & giveaways.
            </label>
          </div>
          <div className="text-center mt-5">
            <button type="submit" className="btn btn-lg btn-outline-dark">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
