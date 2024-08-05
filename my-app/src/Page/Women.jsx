import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import './Css/Women.css';



function Women() {
  const [womendata, setwomendata] = useState([]);
  const [page, setpage] = useState(1);

  const WomensProduct = () => {
    axios
      .get(`http://localhost:3000/women-product?_page=${page}&_per_page=10`)
      .then((res) => setwomendata(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    WomensProduct();
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
              {womendata.map((el) => (
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
             <button className='btn btn-primary ' onClick={()=>setpage(page-1)}>Prev</button>
              <span>{page}</span>
              <button className='btn btn-primary' onClick={()=>setpage(page+1)}>Next</button>
             </div>
          </div>
        </div>
      </div>


      
    </>
  );
}

export default Women;
