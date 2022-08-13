import React, { useEffect, useState } from 'react';
import Singleproduct from '../Singleproduct/Singleproduct';

const Allproducts = (props) => {
    const {cartCount} = props;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    return (
        <div>
           <h2>All Products</h2>
           <div>
            <div className="row">
                {
                 products.map(product => <Singleproduct
                cartCount = {cartCount}
                key = {product.id}
                 product={product}
                 ></Singleproduct>)
               } 
            </div>
           </div>
           
        </div>
    );
};

export default Allproducts;