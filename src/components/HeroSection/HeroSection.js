import React from 'react';
//import { Link} from 'react-router-dom';
import './HeroSection.css';

function HeroSection({
    lightBg,
    date,
    projectName,
    projectTags,
    description, 
    img,
    alt,
    imgStart
}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section light' : 'home__hero-section darkBg'}
            >
                <div className="container">
                    <div className="row home__hero-row"
                        style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                    >
                        <div className ="col">
                            <div className="home__hero-text-wrapper">
                                <div className="date">
                                    {date}
                                </div>
                                <h1 className='projectName'>{projectName}</h1>
                                <h3 className='projectTags'>
                                    {projectTags}
                                </h3>
                                <p className = 'description'>
                                    {description}
                                </p>
                                </div>    
                        </div>
                        <div className="col">
                             <div className="home__hero-img-wrapper">
                                 <img src={img} alt={alt} className="home__hero-img"/>
                             </div> 
                        </div>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default HeroSection