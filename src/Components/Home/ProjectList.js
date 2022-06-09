import React from 'react';
import Project from './Project';
import "./ProjectList.css"
import spark from "../../img/spark.png"
import bicycle from "../../img/bicycle.png"
import memory from "../../img/memory.png"

const ProjectList = () => {
    return (
        <div className='project-list mt-16 mx-8'>
            <div className='texts'>
                <h1 className='mb-3 text-3xl font-bold text-center'>Create and Explore</h1>
                <p className='text-center'>Here's some collection of my projects. </p>
            </div>
            <div className='lists grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-16'>
                <Project title="Electrical Spark" img={spark} ></Project>
                <Project title="Bicycle Warehouse" img={bicycle} ></Project>
                <Project title="The Memory Maker" img={memory} ></Project>
            </div>
        </div>
    );
};

export default ProjectList;