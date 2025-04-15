import React from 'react';
import NavBar from '../NavBar';
import Nav2 from './Nav2';

const AddToCart = () => {
    return (
        <div>
            <Nav2></Nav2>
            <NavBar></NavBar>
            <div className='pt-5 justify-center items-center flex flex-col'>
                <p>Added to cart</p>
            </div>
        </div>
    );
};

export default AddToCart;