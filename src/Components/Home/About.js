import React from 'react';
import { useNavigate } from 'react-router-dom';
import cover from "../../img/cover1.png"
import './About.css'

const About = () => {
    const navigate=useNavigate();
    return (
        <div id='about' className="hero my-12" style={{
            background: `url(${cover})`
        }}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center p-12">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">About Me</h1>
      <p className="mb-5">Hello, I'm a junior Web Developer having experience on HTML5, CSS, Bootstarp, Tailwid css, Javascript, React.js, Node.js, MongoDb, Express, JWT and other things.</p>
      <p className='mb-5'>Do you want to know details, you can ask anything int the contact form below.</p>
      <button onClick={()=>navigate("/contact")} className="message">Any Message?</button>
    </div>
  </div>
</div>
    );
};

export default About;