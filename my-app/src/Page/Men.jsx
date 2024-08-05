import React, { useEffect, useState } from 'react';
import './Css/Men.css';
import axios from 'axios';
import Sidebar from '../Components/Sidebar';
import { Link } from 'react-router-dom';


function Men() {

  const [mendata, setmendata] = useState([]);
  const [page, setpage] = useState(1);

  const MensProduct = () => {
    axios
      .get(`http://localhost:3000/men-product?_page=${page}&_per_page=12`)
      .then((res) => setmendata(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    MensProduct();
  }, [page]);


  return (
    <>

<div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3">
            <Sidebar />
          </div>
          <div className="col-12 col-md-9 offset-md-3">
            <div className="row">
              {mendata.map((el) => (
                <div key={el.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 text-center">
                   <Link to={`/description/${el.id}`}>
                    <img src={el.img} alt={el.title} className="img-fluid" />
                  </Link>
                  <h5>{el.title}</h5>
                  <p>${el.price}</p>
                </div>
              ))}
            </div>
             <div className="btn-class text-center">
             <button className='btn btn-primary '  onClick={()=>setpage(page-1)}>Prev</button>
              <span>{page}</span>
              <button className='btn btn-primary' onClick={()=>setpage(page+1)}>Next</button>
             </div>
          </div>
        </div>
      </div>



    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h2>The Latest In Guys' Clothes</h2>
          <p>
            Our selection of teen men's clothes have all you need to stay on-trend for school, work and play. Explore our staple clothes for teenage guys to form your look.
          </p>
          <ul>
            <li>
              <strong>Guys' Shirts:</strong> No matter where the day takes you, be ready for whatever comes next with Aéropostale's teen's tops and shirts. Count on our <a href="#">teen guys' tops</a> selection for the graphic tees, hoodies, shirts and polos you need to build trendy outfits for guys. Find that just-right tee to match your new joggers, or dress things up a bit with chinos and a new button-down or polo.
            </li>
            <li>
              <strong>Teen Boy's Pants and Shorts:</strong> Browse our <a href="#">guys' bottoms</a> to find teen boys' clothing must-haves, including jeans, joggers, shorts and sweats. Mix and match your favorite pants with our men's and teen guys' tops to create a stylish fit for you, all the time. When things heat up in the warmer months, transition into shorts and swimwear to keep your style cool and relaxed.
            </li>
            <li>
              <strong>Men's Outerwear:</strong> Get out and about in this season's jackets, coats and vests. Layer up in an active jacket with water-resistant fabric designed to keep you dry. For an edgy vibe that looks good any time of year, go for a denim trucker jacket in a perfectly faded light wash with subtle distressed whiskering. Lighter guy jackets like our windbreakers protect you from the elements without adding bulk, perfect for chilly spring or fall days.
            </li>
            <li>
              <strong>Teen Guy's Accessories:</strong> The right <a href="#">guys' accessories</a> should be simple yet pack an eye-catching style punch. Complete your outfits for teenage guys with hats and caps, sunglasses and socks, then shop our <a href="#">men's cologne</a> and grooming products for the crucial finishing touch. For cold weather, trade in your baseball cap for a beanie and a matching scarf in a trendy color or pattern.
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <h5>Need a new on-trend look?</h5>
          <p>The collection of boys' clothes at Aéropostale brings you the latest styles made with high-quality materials for fresh outfits for teenage guys and young men. Comfy, stylish and bursting with vibrant prints and cool colors, Aero has teen boys' clothing to keep you looking your best for every activity.</p>
          <h5>Up Your Style Game With Trendy Outfits For Guys</h5>
          <p>Put together a variety of outfits to complete your chill, laidback vibe. Start with new bottoms like jeans and joggers, then add a mix of graphic tees and hoodies to go with your fashion sneakers. For casual outings, you can't go wrong with <a href="#">super-soft teen guys' activewear</a> like utility shorts, colorblock tees, fleece sweatpants and track pants.</p>
          <h5>Go-To Clothes For Teenage Guys</h5>
          <p>From the season's latest looks to timeless classics, our selection of trendy teen boy clothes is made to let you shine. Check out our <a href="#">guys' new arrivals</a> for the latest in men's trendy clothing when your look needs a refresh, or browse our <a href="#">guys' clearance</a> section for teen boy's clothing at deep-discount prices. Whether you're looking for a full outfit or a finishing touch, Aéropostale is your top choice for teens and young guys.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Men