import React from 'react'
import { FiSearch } from 'react-icons/fi';

function Locations() {
  return (
    <>
        <div className="store-locator-container d-flex flex-column align-items-center justify-content-around text-center">
      <div className="row w-100">
        <div className="col-md-2 d-flex justify-content-center m-auto">
          <img 
            src="https://dynl.mktgcdn.com/p/VwNdp7s4fTlSKnw6hsPr25OiYxyBxaAkTSZL9N2FEwM/2100x2112.jpg" 
            alt="Aéropostale" 
            className="img-fluid store-locator-image"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="store-locator-title">FIND YOUR AERO STORE</h2>
          <div className="input-group mt-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter your search" 
              aria-label="Search"
            />
             <button className="btn btn-outline-secondary" type="button">
              <FiSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Locations