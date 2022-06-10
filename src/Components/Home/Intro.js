import React from 'react';
import "./Intro.css"
import image from "../../img/shahin.png"
import cover from "../../img/cover1.png"

const Intro = () => {
 

    return (
        <div className="hero min-h-screen bg-base-300" style={{
            background: `url(${cover})`
        }}>
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} />
          <div>
              <h1 className='text-xl font-bold mb-2'>Hello, I'm</h1>
            <h1 className="text-5xl font-bold">SHAHAPORAN SHAHIN</h1>
            <p className='text-sm font-bold text-rose-500'>Web Developer</p>
            <p className="py-6">I develop services for customers of all sizes, speciallizing in creating stylish, mordern, web services and online stores</p>
            <a className="btn bg-rose-500 border-0 px-8" target="_blank" href="https://drive.google.com/file/d/1osVay_nO6w_JMbZJg2RpLTB2zUVDJ-qt/view?usp=sharing">Download Resume</a><br />
            
            
          </div>
         
        </div>
      </div>
    );
};

export default Intro;