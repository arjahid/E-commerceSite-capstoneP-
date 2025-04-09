import React from 'react';
import Marquee from 'react-fast-marquee';

const Divider = () => {
    return (
        <div className=" py-3">
           <Marquee>
        <h2 className="text-2xl font-bold">
          🔥 Mega Sale Live! Up to 50% OFF – Shop Now! 🔥
        </h2>
      </Marquee>
        </div>
    );
};

export default Divider;