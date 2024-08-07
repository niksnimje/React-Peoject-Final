import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Highlighted: useLocation for capturing query params
import Sidebar from '../Components/Sidebar';
import './Css/Women.css';

function Women() {
  const [womendata, setwomendata] = useState([]);
  const [page, setpage] = useState(1);
  const [order, setorder] = useState(null);
  const [selectcategory, setcategory] = useState(null);
  const location = useLocation(); // Highlighted: useLocation hook

  const WomensProduct = () => {
    const params = new URLSearchParams(location.search); // Highlighted: Parse URL search params
    const searchQuery = params.get('q'); // Highlighted: Get the search query from URL

    axios
      .get('http://localhost:3000/women-product', {
        params: {
          _page: page,
          _limit: 10,
          category: selectcategory || undefined,
          _sort: "price",
          _order: order,
          q: searchQuery || undefined, // Highlighted: Include search query in params
        },
      })
      .then((res) => setwomendata(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    WomensProduct();
  }, [page, order, selectcategory, location.search]); // Highlighted: Add location.search as a dependency

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3">
            <Sidebar />
          </div>
          
          <div className="col-12 col-md-9 offset-md-3">
            <div className="row">
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                  <select name="" id="" className='select-main' onChange={(e) => setcategory(e.target.value)}>
                    <option value="">Show Filters</option>
                    <option value="Featured">Featured</option>
                    <option value="Best">Best Seller</option>
                    <option value="Newest">Newest</option>
                  </select>
                </div>

                <div>
                  <button onClick={() => setorder("desc")}>High To Low</button>
                  <button onClick={() => setorder("asc")}>Low To High</button>
                </div>
              </div>
              {womendata.map((el) => (
                <div key={el.id} className="pt-5 col-12 col-sm-6 col-md-4 col-lg-3 mb-4 text-center">
                  <Link to={`/description/${el.id}`}> {/* Fixed template string syntax */}
                    <img src={el.img} alt={el.title} className="img-fluid" />
                  </Link>
                  <h5>{el.title}</h5>
                  <p>${el.price}</p>
                </div>
              ))}
            </div>
            <div className="btn-class text-center">
              <button className='btn btn-primary' disabled={page === 0} onClick={() => setpage(page - 1)}>Prev</button>
              <span>{page}</span>
              <button className='btn btn-primary' disabled={womendata.length < 10} onClick={() => setpage(page + 1)}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Women;
