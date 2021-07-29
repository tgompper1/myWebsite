import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import {experienceFord, experienceObjTwo} from '../Experience/Data';

function Experience() {
    return (
        <>
           <HeroSection {...experienceFord}/>
           {/* <HeroSection {...experienceObjTwo}/> */}
        </>
    )
}

export default Experience