import React from 'react';
import Reactmodal from '../Reactmodal/Reactmodal';
import './Singleproduct.css'

const Singleproduct = (props) => {
    const {title, image} = props.product;
    const {cartCount} = props;
    console.log(props)
    return (
        <div data-aos="flip-left" className='col-md-4'>
           <div className='card p-3 border   '>
            <img className='width' src={image} alt="" />
             <h2>{title.slice(0,10)}</h2>
                <div className='d-flex  justify-content-around'>
                    <button onClick={cartCount} className='btn btn-primary'>Add to Cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    <Reactmodal product = {props.product}></Reactmodal>
                    
                </div>
            </div>
        </div>
              
    );
};

export default Singleproduct;