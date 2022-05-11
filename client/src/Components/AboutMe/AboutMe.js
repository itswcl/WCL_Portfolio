import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animation from '../../utilities/Animation'
import { Link } from 'react-router-dom'
import './AboutMe.css';

const AboutMe = ({ id }) => {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== id) return;
        Animation.animations.fadeInScreen(id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
    const SCREEN_CONSTANTS = {
        description: "Full Stack web developer with background knowledge of MERN stacks",
        highlights: {
            bullets: [
                "Full Stack Web Development",
                "Interactive Front End Design",
                "Building REST API",
                "Managing database",
            ],
            heading: "Here are a few Highlights:"
        }
    }

    const renderHighlight = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value, idx) => (
                <div className='highlight' key={idx}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

    return (
        <div className='about-me-container screen-container' id={id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
                <div className='about-me-card'>
                    {/* <div className='about-me-profile'></div> */}
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className='about-me-option'>
                            <button className='btn primary-btn'>
                                Contact
                            </button>
                            {/* access the file thru /Resumexxx.pdf from public folder */}
                            <Link to="/Resume_Wayne_Lee.pdf" target="_blank">
                                <button className='btn highlighted-btn'>Resume</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe