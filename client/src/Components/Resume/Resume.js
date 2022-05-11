import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animation'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    const ResumeHeading = (props) => {
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + "_" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>
        </div>
    };

    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Word History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"},
    ]

    const programingSkillDetails = [
        {skill: "JavaScript", ratingPercentage: 85},
        {skill: "React JS", ratingPercentage: 80},
        {skill: "Express JS", ratingPercentage: 70},
        {skill: "Node JS", ratingPercentage: 70},
        {skill: "Mongo DB", ratingPercentage: 75},
        {skill: "SQL", ratingPercentage: 75},
        {skill: "HTML", ratingPercentage: 80},
        {skill: "CSS", ratingPercentage: 80},
    ]

    const projectDetails = [
        {
            title: "Personal Portfolio WebSite",
            duration: {fromDate: "2020", toDate: "2021"}
        }
    ]

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return;
        Animation.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    return (
        <div className='resume-container screen-container' id={props.id || ''}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={"My Formal Bio Details"} />
            </div>
        </div>
    )
}
