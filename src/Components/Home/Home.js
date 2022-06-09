import React from 'react';
import About from './About';
import Intro from './Intro';
import ProjectList from './ProjectList';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <About></About>
            <ProjectList></ProjectList>
        </div>
    );
};

export default Home;