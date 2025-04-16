import React from 'react';
import NavBar from '../NavBar';
import Nav2 from './Nav2';
import ElectrinicsData from './ElectrinicsData';
import FashonData from './FashonData';

const NewArrival = () => {
    return (
        <div className='container mx-auto' >
            <Nav2></Nav2>
            <NavBar></NavBar>
            <ElectrinicsData></ElectrinicsData>
            <FashonData></FashonData>
        </div>
    );
};

export default NewArrival;