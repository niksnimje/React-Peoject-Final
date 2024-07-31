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

    <br />
    <br />
    <br /> 
    {/* secound-img */}


        <Link to={"/women"}>
        <div className="container-fluid kitty-bg p-0 d-flex " style={{justifyContent:"center",alignContent:"center"}}>
           <div className="col-12 col-sm-8 col-md-8 col-lg-6  im-4 img-fluid text-center" >
           </div>
        </div>
        </Link>

      <br /><br />

    
      {/* blue Image */}
      <Link to={"/women"}>
      <div className="container-fluid blue-img ">
        <div className="row g-3 g-sm-0 text-center d-flex align-items-center pt-4 align-content-center flex-column flex-sm-row flex-md-row flex-lg-row">
          <div className="col-3"></div>
          <div className="col-12 col-sm-3 col-md-3">
            <h1  style={{color:"#f7d309",fontWeight:"700"}}>
            A SHORT STORY</h1>
          </div>
          <div className="col-12 col-sm-3 col-md-3 ">
            <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw25fa6242/images/2024/Home/072424/Shorts%20Badge-min.png" width={200} alt="" />
          </div>
          <div className="col-12 col-md-3">
          <button className='btn-women-men ' ><Link to={"/women"} className=' women-btn '>Women</Link> &nbsp;&nbsp;&nbsp;&nbsp; <Link to={"/men"} className='men-btn'>Men</Link> </button>
          </div>
        </div>
      </div>
      </Link>

    <br />

      {/* Uniform Image */}

      <Link to={"/women"}>
      <div className="container-fluid uniform-img ">

      </div>
      </Link>

      <br />
      {/* blue Image 2*/}
      <Link to={"/women"}>
      <div className="container-fluid blue-img ">
        <div className="row g-3 g-sm-0 text-center d-flex align-items-center pt-5 align-content-center flex-column flex-sm-row flex-md-row flex-lg-row">
          <div className="col-3"></div>
          <div className="col-4">
            <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw29167b48/images/2024/Home/071024/50-70%20OFF_DT.png" width={800} alt="" />
          </div>
          <div className="col-1"></div>
          
          <div className="col-12 col-md-3">
          <button className='btn-women-men ' ><Link to={"/women"} className=' women-btn '>Women</Link> &nbsp;&nbsp;&nbsp;&nbsp; <Link to={"/men"} className='men-btn'>Men</Link> </button>
          </div>
        </div>
      </div>
      </Link>





  



    </>
  );
}


export default Homepage;
