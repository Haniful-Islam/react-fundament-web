import React, { useEffect, useState } from 'react';
import Singleproduct from '../Singleproduct/Singleproduct';

const Allproducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    return (
        <div>
           <h2>All Products</h2>
           {
            products.map(product => <Singleproduct
                key = {product.id}
                 product={product}
                 ></Singleproduct>)
           } 
           
        </div>
    );
};

export default Allproducts;