import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import {experienceFord, experienceObjTwo, experience84512022} from '../Experience/Data';

function Experience() {
    return (
        <>
           <HeroSection {...experience84512022}/>
           <HeroSection {...experienceFord}/>
           {/* <HeroSection {...experienceObjTwo}/> */}
        </>
    )
}

export default Experience