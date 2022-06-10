import React from 'react';
import "./Project.css"

const Project = ({img,link,live,name}) => {
    return (
       <div className='card'>
            <div className='list-card'>
            <div className='list-browser'>
            <div className='list-circle'></div>
            <div className='list-circle'></div>
            <div className='list-circle'></div>
            </div>
            <a href={link} target="_blank" rel='noreferrer'></a>
            <img src={img} alt="" className='img-card' />
        </div>
        <h2 className='text-xl font-bold mb-3'>{name}</h2>
        <a className="btn bg-rose-500 border-0 px-8" href={live}>Details</a>
       </div>
    );
};

export default Project;