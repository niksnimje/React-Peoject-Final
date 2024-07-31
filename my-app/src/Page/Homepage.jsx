import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
// import './App.css'


function Homepage() {
  return (
    <>
      {/* promo */}
      <div className="promo-main" style={{ overflow: 'hidden', height:"100px"}}>
        <div className="row d-flex justify-content-around overflow-scroll overflow-y-hidden " style={{flexWrap:"nowrap", gap:"20px"}}>
          <div className="col-10 col-md-4 col-lg-3 bg-dark text-light p-3 mb-3 ms-5" style={{ borderRadius: ".5vw" }}>
            <div className="row d-flex justify-content-around align-content-center align-items-center">
              <div className="col-6">
                <h5>SHORTS</h5>
                <h5>$12 & UP</h5>
              </div>
              <div className="col-6 bg-light p-3 text-center" style={{ borderRadius: "20px" }}>
                <a href="" className="p-2">Women</a>
                <a href="" className="p-2">Men</a>
              </div>
            </div>
          </div>
          <div className="col-10 col-md-4 col-lg-3 bg-dark text-light p-3 mb-3" style={{ borderRadius: ".5vw" }}>
            <div className="row d-flex justify-content-around align-content-center align-items-center">
              <div className="col-6">
                <h5>UP TO 50% OFF</h5>
                <h5>NEW ARRIVALS</h5>
              </div>
              <div className="col-6 bg-light p-3 text-center" style={{ borderRadius: "20px" }}>
                <a href="" className="p-2">Women</a>
                <a href="" className="p-2">Men</a>
              </div>
            </div>
          </div>
          <div className="col-10 col-md-4 col-lg-3 bg-dark text-light p-3 mb-3" style={{ borderRadius: ".5vw" }}>
            <div className="row d-flex justify-content-around align-content-center align-items-center">
              <div className="col-6">
                <h5>NEW TO CLEARANCE</h5>
                <h5>$5.99 & UP</h5>
              </div>
              <div className="col-6 bg-light p-3 text-center" style={{ borderRadius: "20px" }}>
                <a href="" className="p-2">Women</a>
                <a href="" className="p-2">Men</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <br /><br />

      <div className="container-fluid p-0">
        <div className=" yellow-bg-img " >
         <div className='d-flex flex-column justify-content-center align-items-center h-100' >
          <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw956e2e28/images/2024/Home/071024/A_SPOT_BTS%20DEALS_DT.png"   className='yellow-main-img'    alt="" /> <br />
          <p> 
          Stock up for less than your favorite latte. 
          </p>
          
          </div>
         </div>
      </div>

    <br />


    {/* first-img */}

        <Link to={"/jeans"}>
        <div className="container-fluid Jeans-bg p-0 d-flex flex-column flex-sm-column flex-md-column flex-lg-row">
          
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 p-0 im-1 mt-5">
            <div className="frist-image-content text-light text-center" style={{marginTop:"70%"}}> <br /><br />
            <h1>
            + FREE SHIPPING! </h1>
            <button className='btn-women-men ' ><Link to={"/women"} className=' women-btn '>Women</Link> &nbsp;&nbsp;&nbsp;&nbsp; <Link to={"/men"} className='men-btn'>Men</Link> </button>
            </div>
          </div>
        
           <div className="col-12 col-sm-3 col-md-3 col-lg-5 im-2 bottom-0 position-relative img-fluid d-none d-sm-none d-md-none d-lg-block">

           </div>
           <div className="col-12 col-sm-3 col-md-3 col-lg-1 d-none d-sm-none d-md-none d-lg-block im-3 img-fluid">

           </div>
      </div>
        
        </Link>


    {/* <div className="container-fluid p-0">
        <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwc5e174af/images/2024/Home/071024/B_SPOT_JEANSBG_DT-min.png"  className="img-fluid" alt="" />
    </div> */}


    {/* https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw1567981d/images/2024/Home/071024/B_SPOT_EXTENDED-BADGE-DT.gif */}


    {/* <div className="container-fluid p-0">
        <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw7713e973/images/2024/Home/072424/HK%20DT%20HP%20SNEAK%20PEEK%20BG%20DT-min.png"  className="img-fluid" alt="" />
    </div> */}


    <br />


    {/* <div className="container-fluid p-0">
        <img src="https://aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwfd8319c9/images/2024/Home/071024/D_SPOT_SHORTS_BG_DT-min.png"  className="img-fluid" alt="" />
    </div>
    <br />
    <br /> */}


    {/* <div className="container-fluid p-0 bg-black">
        <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwa3958911/images/2024/Home/053024/G_THE%20UNIFORM%20SHOP_DT-min.png"  className="img-fluid" alt="" />
    </div> */}


    {/* <br />
    <div className="container-fluid p-0 bg-black">
        <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwfd8319c9/images/2024/Home/071024/D_SPOT_SHORTS_BG_DT-min.png"  className="img-fluid" alt="" />
    </div> */}
   
    {/* <br />
    <div className="container-fluid p-0 bg-black">
        <img src=" https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwa9560238/images/2024/Home/071024/E_SPOT_AERO%20FOR%20ALL_BG_DT-min.png"  className="img-fluid" alt="" />
    </div> */}


    </>
  );
}


export default Homepage;
