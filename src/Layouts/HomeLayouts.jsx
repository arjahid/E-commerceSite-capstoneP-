import React from 'react';
import NavBar from '../NavBar';
import Carosel from './Carosel';

const HomeLayouts = () => {
    return (
        <div className='container mx-auto'> 
            <NavBar></NavBar>
            <Carosel></Carosel>
            <main></main>
        </div>
    );
};

export default HomeLayouts;