import React from 'react';
import NavBar from '../NavBar';
import Nav2 from './Nav2';
import ElectrinicsData from './ElectrinicsData';

const NewArrival = () => {
    return (
        <div className='container mx-auto' >
            <Nav2></Nav2>
            <NavBar></NavBar>
            <ElectrinicsData></ElectrinicsData>
        </div>
    );
};

export default NewArrival;