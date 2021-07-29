import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import {projectObjOne, projectObjTwo} from '../Projects/Data';

/* eventually add menu of projects, drop down menu, snap scroll*/
function Projects() {
    return (
        <>
           <HeroSection {...projectObjOne}/>
           {/* <HeroSection {...projectObjTwo}/> */}
        </>
    )
}

export default Projects