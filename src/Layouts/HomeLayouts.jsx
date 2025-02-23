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
        <aside className="left col-span-2">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-8">Main section
            <Outlet></Outlet>
        </section>
       
        <aside className="col-span-2"><RightAside></RightAside></aside>
      </main>
      <footer className='mt-4'>
      <footer className="footer bg-base-200 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
      </footer>
        </div>
    );
};

export default HomeLayouts;