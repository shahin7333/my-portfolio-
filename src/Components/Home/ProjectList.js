import React from 'react';
import Project from './Project';
import "./ProjectList.css"
import { projects } from '../../Data';

const ProjectList = () => {
    return (
        <div className='project-list m-16 mx-8'>
            <div className='texts'>
                <h1 className='mb-3 text-3xl font-bold text-center'>Create and Explore</h1>
                <p className='text-center text-rose-500'>Here's some collection of my projects. </p>
            </div>
            <div className='lists grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
{
    projects.map((project)=>(
   <Project img={project.img} key={project.id} link={project.link} live={project.live} name={project.name}></Project>
    ))
}


            </div>
        </div>
    );
};

export default ProjectList;