import React from 'react';
import "./Project.css"

const Project = ({img,link}) => {
    return (
        <div className='list-card'>
            <div className='list-browser'>
            <div className='list-circle'></div>
            <div className='list-circle'></div>
            <div className='list-circle'></div>
            </div>
            <a href={link} target="_blank" rel='noreferrer'></a>
            <img src={img} alt="" className='img-card' />
        </div>
    );
};

export default Project;