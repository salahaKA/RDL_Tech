// Login.jsx
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="container mt-5">
      <form className="login-form">
        <h2>Login Page</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log in
        </button>
        <div className="form-check mt-3">
          <input type="checkbox" className="form-check-input" id="termsCheck" />
          <label className="form-check-label" htmlFor="termsCheck">
            You are Agree with terms & conditions
          </label>
        </div>
      </form>
    </div>
  );
}

export default Login;
