import React from 'react';
import NavBar from '../NavBar';
import Carosel from './Carosel';
import Marquee from 'react-fast-marquee';
import LeftAside from '../components/MainContent/LeftAside';
import RightAside from '../components/MainContent/RightAside';
import { Outlet } from 'react-router-dom';

const HomeLayouts = () => {
    return (
        <div className='container mx-auto'> 
            <NavBar></NavBar>
            <Carosel></Carosel>
            <Marquee >
                <h2 className='text-2xl font-bold'>🔥 Mega Sale Live! Up to 50% OFF – Shop Now! 🔥</h2>
            </Marquee>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">Main section
            <Outlet></Outlet>
        </section>
       
        <aside className="col-span-3"><RightAside></RightAside></aside>
      </main>
        </div>
    );
};

export default HomeLayouts;