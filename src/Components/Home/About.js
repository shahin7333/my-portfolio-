import React from 'react';
import { useNavigate } from 'react-router-dom';
import cover from "../../img/cover1.png"

const About = () => {
    const navigate=useNavigate();
    return (
        <div id='about' class="hero my-12" style={{
            background: `url(${cover})`
        }}>
  <div class="hero-overlay bg-opacity-20"></div>
  <div class="hero-content text-center p-12">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">About Me</h1>
      <p class="mb-5">Hello, I'm a junior Web Developer having experience on HTML5, CSS, Bootstarp, Tailwid css, Javascript, React.js, Node.js, MongoDb, Express, JWT and other things.</p>
      <p className='mb-5'>Do you want to know details, you can ask anything int the contact form below.</p>
      <button onClick={()=>navigate("/contact")} className="btn bg-rose-500 border-0 px-8 m-3">Any Message?</button>
    </div>
  </div>
</div>
    );
};

export default About;