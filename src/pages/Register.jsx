import React from "react";

import "./register.css";
import { Divider } from "@mui/material";

function Register() {
  return (
    <div
      className="container d-flex justify-content-center  my-5 "
      style={{ width: "100%" }}
    >
      <div
        className="row justify-content-center align-items-center register-container"
        // style={{ margin: "0 0", width: "100%" }}
      >
        <div className=" col-sm-12 col-md-6 col-lg-6 w-50 register-form-container">
          <h4 className="mb-5 d-flex justify-content-center">
            New To Extremes
          </h4>
          <form action="submit">
            <div className="row my-3">
              <div className="col-6">
                <label htmlFor="firstName" className="form-label">
                  {" "}
                  First Name <span style={{ color: "red" }}> &#42;</span>
                </label>
                <input type="text" id="firstName" className="form-control" />
              </div>
              <div className="col-6">
                {" "}
                <label htmlFor="lastName" className="form-label">
                  {" "}
                  Last Name <span style={{ color: "red" }}> &#42;</span>
                </label>
                <input type="text" id="lastName" className="form-control" />
              </div>
            </div>

            <label htmlFor="inputEmail" className="form-label">
              Enter Email/Mobile number
              <span style={{ color: "red" }}> &#42;</span>
            </label>
            <input type="text" id="inputEmail" className="form-control" />

            <label htmlFor="inputPassword" className="form-label mt-3">
              Enter Password <span style={{ color: "red" }}> &#42;</span>
            </label>
            <input type="text" id="inputPassword" className="form-control" />
            <div className="row justify-content-center ">
              <button type="submit" className="btn btn-success  my-4 w-25">
                Register
              </button>
            </div>
          </form>{" "}
          <Divider sx={{ padding: "30px 0" }}> Or</Divider>
          <div className="row justify-content-center align-items-center">
            <button
              className="btn btn-primary d-flex justify-content-center align-items-center"
              style={{ width: "60%", fontWeight: 600 }}
            >
              <span style={{ backgroundColor: "white", margin: "0 15px" }}>
                {" "}
                <img src="/google_1.png" alt="google" style={{ padding: 2 }} />
              </span>{" "}
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
