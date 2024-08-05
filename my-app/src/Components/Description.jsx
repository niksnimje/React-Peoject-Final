import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Nav, Tab, Row, Col } from 'react-bootstrap';
// import './Css/Description.css'; // Import a separate CSS file for custom styles

function Description() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [desdata, setdesdata] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/women-product/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
    DesProduct();
  }, [id]);

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
        <div className="row flex-wrap p-2 p-lg-5 pt-0">
          <div className="col-12 col-lg-7">
            <Tab.Container defaultActiveKey="img1">
              <Row>
                <Col sm={12} className="d-none d-lg-flex ">
                  <div className="d-flex flex-column flex-lg-row flex-wrap gap-1">
                    <img src={product.img} alt={product.title} className="img-fluid mb-2" />
                    <img src={product.img2} alt={product.title} className="img-fluid mb-2" />
                    </div>
                    </Col>
                
                <Col sm={12} className="d-none d-lg-flex ">
                  <div className="d-flex flex-column flex-lg-row flex-wrap gap-1">
                    <img src={product.img3} alt={product.title} className="img-fluid mb-2" />
                    <img src={product.img4} alt={product.title} className="img-fluid mb-2" />
                  </div>
                </Col>
                <Col sm={12} className="d-lg-none">
                  <Nav variant="tabs" className="flex-row justify-content-evenly">
                    <Nav.Item>
                      <Nav.Link eventKey="img1">
                      <img src={product.img} alt={product.title} className="img-fluid mb-2" height={100} width={50} />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="img2">
                      <img src={product.img2} alt={product.title} className="img-fluid mb-2" height={100} width={50} />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="img3">
                      <img src={product.img3} alt={product.title} className="img-fluid mb-2 p-0"  height={100} width={50}/>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="img1">
                      <img src={product.img} alt={product.title} className="img-fluid mb-2" />
                    </Tab.Pane>
                    <Tab.Pane eventKey="img2">
                      <img src={product.img2} alt={product.title} className="img-fluid mb-2" />
                    </Tab.Pane>
                    <Tab.Pane eventKey="img3">
                      <img src={product.img3} alt={product.title} className="img-fluid mb-2" />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
          <div className="col-12 col-lg-5">
            <div className="product-details text-center text-lg-start" style={{ textAlign: "left", marginLeft: "5%" }}>
              <h1>{product.title}</h1>
              <h4>Price: ${product.price}</h4>
              <p>{product.description}</p>
              <h4>Details</h4>
              <p>{product.details}</p>
              <h4>Available Sizes</h4>
              <ul className='p-0 d-flex justify-content-center justify-content-lg-start  ' style={{ listStyle: "none", gap: "10px"}}>
                {product.sizes.map((size, index) => (
                  <li key={index}>{size}</li>
                ))}
              </ul>
              <h4>Available Colors</h4>
              <ul className='p-0' style={{ listStyle: "none" }}>
                {product.colors.map((color, index) => (
                  <li key={index}>{color}</li>
                ))} <br />
                <button className=' btn btn-primary'>Add To Bag</button>
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
