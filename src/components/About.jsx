import React from 'react';
import NavBar from '../NavBar';
import Nav2 from './Nav2';

const About = () => {
    return (
       <div className='container mx-auto'>
        <Nav2></Nav2>
        <NavBar></NavBar>
         <div className='container mx-auto px-6 py-12 rounded-lg shadow-lg bg-gray-800'>
           
           <h1 className='text-4xl font-extrabold text-center my-8 text-white'>About Us</h1>
           <p className='text-white text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8'>
               Welcome to our platform! We are dedicated to providing the best products and services to our customers.
           </p>
           <div className='mt-10'>
               <h2 className='text-3xl font-bold mb-6 text-white'>Our Story</h2>
               <p className='text-white leading-relaxed'>
                   Founded with a vision to revolutionize online shopping, our platform has grown to become a trusted destination for customers worldwide. 
                   We believe in creating value through quality, innovation, and exceptional service.
               </p>
           </div>
           <div className='mt-10'>
               <h2 className='text-3xl font-bold mb-6 text-white'>Our Mission</h2>
               <p className='text-white leading-relaxed'>
                   Our mission is to make online shopping easy, accessible, and enjoyable for everyone. 
                   We aim to provide a wide range of products that cater to diverse needs while maintaining the highest standards of quality.
               </p>
           </div>
           <div className='mt-10'>
               <h2 className='text-3xl font-bold mb-6 text-white'>Why Choose Us?</h2>
               <ul className='list-disc list-inside text-white space-y-4'>
                   <li>Wide selection of high-quality products.</li>
                   <li>Competitive pricing and exclusive deals.</li>
                   <li>Fast and reliable shipping options.</li>
                   <li>Dedicated customer support team available 24/7.</li>
               </ul>
           </div>
           <div className='mt-10'>
               <h2 className='text-3xl font-bold mb-6 text-white'>Our Commitment</h2>
               <p className='text-white leading-relaxed'>
                   We are committed to sustainability and ethical practices. By partnering with responsible suppliers and adopting eco-friendly initiatives, 
                   we strive to make a positive impact on the environment and society.
               </p>
           </div>
       </div>
       </div>
    );
};

export default About;