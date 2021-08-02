import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import {projectWebsite, projectShine} from '../Projects/Data';

/* eventually add menu of projects, drop down menu, snap scroll*/
function Projects() {
    return (
        <>
           <HeroSection {...projectWebsite}/>
           <HeroSection {...projectShine}/> 
        </>
    )
}

export default Projects