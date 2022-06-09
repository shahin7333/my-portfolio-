import React from 'react';
import About from './About';
import Contact from './Contact';
import Intro from './Intro';
import ProjectList from './ProjectList';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <About></About>
            <ProjectList></ProjectList>
            <Contact></Contact>
        </div>
    );
};

export default Home;