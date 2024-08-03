import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Description() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/women-product/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.img} alt={product.title} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1>{product.title}</h1>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                    <h4>Details</h4>
                    <p>{product.details}</p>
                    <h4>Available Sizes</h4>
                    <ul>
                        {product.sizes.map((size, index) => (
                            <li key={index}>{size}</li>
                        ))}
                    </ul>
                    <h4>Available Colors</h4>
                    <ul>
                        {product.colors.map((color, index) => (
                            <li key={index}>{color}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Description;
