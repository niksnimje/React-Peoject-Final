import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Description() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/women-product/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
        DesProduct();

    }, [id]);

    const [desdata, setdesdata] = useState([]);

    const DesProduct = () => {
      axios
        .get('http://localhost:3000/women-product')
        .then((res) => setdesdata(res.data))
        .catch((err) => console.log(err));
    };
  


    if (!product) return <p>Loading...</p>;

    return (
       <>
         <div className="container-fluid mt-4">
            <div className="row flex-wrap p-5 pt-0 ">
                <div className="col-5 ">
                <div className=" col-md-3 col-lg-10 d-flex g-1 gap-1">
                    <img src={product.img} alt={product.title} className="img-fluid" />
                    <img src={product.img2} alt={product.title} className="img-fluid" />
                </div> 
                <div className=" col-md-3 col-lg-10 d-flex g-1 gap-1">
                    <img src={product.img3} alt={product.title} className="img-fluid" />
                    <img src={product.img4} alt={product.title} className="img-fluid" />
                </div> 
                </div>

                <div className="col-6">
                <div className="col-md-6 col-lg-12 pt-5" style={{textAlign:"center",marginLeft:"5%"}}>
                    <h1>{product.title}</h1>
                    <h4>Price: ${product.price}</h4>
                    <p>{product.description}</p>
                    <h4>Details</h4>
                    <p>{product.details}</p>
                    <h4>Available Sizes</h4>
                    <ul style={{listStyle:"none" , display:"flex" , gap:"10px"  , justifyContent:"center"}}>
                        {product.sizes.map((size, index) => (
                            <li key={index}>{size}</li>
                        ))}
                    </ul>
                    <h4>Available Colors</h4>
                    <ul style={{listStyle:"none"}}>
                        {product.colors.map((color, index) => (
                            <li key={index}>{color}</li>
                        ))} <br />
              <button >Add To Bag</button>
                    </ul>
                </div>
                </div>
            </div>
        </div>
                        <br /><br />
        <div className="container">
        <div className="row">
            <h3>You May Also Like</h3>
              {desdata.map((el) => (
                <div key={el.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 text-center">
                   <Link to={`/description/${el.id}`}>
                    <img src={el.img} alt={el.title} className="img-fluid" />
                  </Link>
                  <h5>{el.title}</h5>
                  <p>${el.price}</p>
                </div>
              ))}
            </div>
        </div>

       </>

    );
}

export default Description;
