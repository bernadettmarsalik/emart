import React from "react";
import { NavLink } from "react-router-dom";

export default function LogIn() {
  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12 mb-3">
          <h1 className="display-6 fw-bolder text-center">Register</h1>
          <hr />
          <div className="container d-flex ">
            <h6 className="mb-5">If you don't have an account:</h6>
            <NavLink
              to="/register"
              className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover h6 ms-2"
            >
              <i className="fa fa-sign-up me-2"></i>
              Register
            </NavLink>
          </div>
        </div>

        <div className="container shadow p-5 rounded-3 col-sm-12 col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="text-center mt-5">
              <button type="submit" className="btn btn-lg btn-outline-dark">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
