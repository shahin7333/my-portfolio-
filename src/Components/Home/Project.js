import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Project.css"

const Project = ({img,link,live,name}) => {
    const navigate=useNavigate()
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
        <a className="details" href={live} >Details</a>
       </div>
    );
};

export default Project;