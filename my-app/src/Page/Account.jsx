import React from 'react'

import './Css/Account.css';


function Account() {
  return (
    <>
     <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h3 className="mb-3">Sign In</h3>
          <form>
            <div className="form-group mb-3">
              <label>Email Address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group mb-3">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
              <a href="#" className="float-end">Forgot Password?</a>
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign In</button>
          </form>
        </div>
        <div className="col-md-5">
          <h3 className="mb-3">New Customers</h3>
          <p>Create an account for faster checkout, order tracking, a birthday surprise & more!</p>
          <button className="btn btn-outline-secondary w-100 mb-3">Create an Account</button>
          <h3 className="mb-3">Track Your Order</h3>
          <form>
            <div className="form-group mb-3">
              <label>Order Email Address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group mb-3">
              <label>Order Number</label>
              <input type="text" className="form-control" placeholder="Enter order number" />
            </div>
            <div className="form-group mb-3">
              <label>Billing Zip Code</label>
              <input type="text" className="form-control" placeholder="Enter billing zip code" />
            </div>
            <button type="submit" className="btn btn-outline-secondary w-100">Check Status</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Account