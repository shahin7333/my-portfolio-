import React from 'react';
import Contact from './Contact';
import Intro from './Intro';
import ProjectList from './ProjectList';
import Progress from './Progress';
import About from './About';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <Progress></Progress>
            <About></About>
            <ProjectList></ProjectList>
            <Contact></Contact>
        </div>
    );
};

export default Home;