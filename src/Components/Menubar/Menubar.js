import React from 'react';
import './Menubar.css';

const Menubar = () => {
    return (
        <div>
            <div className='menu-container d-flex'>
                <div className='col-md-2'>Logo</div>
                <div className='col-md-10 d-flex justify-content-end '>
                        <li className='items me-4'>Home</li>
                        <li className='items me-4'>Contact</li>
                        <li className='items me-4'>blog</li>
                        <li className='items me-4'>about</li>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Menubar;