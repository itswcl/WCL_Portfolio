import React from 'react'
import Typical from 'react-typical'
import { Link } from 'react-router-dom'
import './Profile.css';

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>

                    <div className='colz'>
                        <div className='colz-icon'>
                            {/* use pathname to link to direct link */}
                            {/* target with _blank to open new window*/}
                            <Link to={{ pathname: 'https://www.linkedin.com/in/weicheng-lee/' }} target="_blank">
                                <i class="fa fa-linkedin-square"></i>
                            </Link>
                            <Link to={{ pathname: 'https://github.com/itswcl' }} target="_blank">
                                <i class="fa fa-github-square"></i>
                            </Link>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            Hello, It's <span className='highlighted-text'>Wei</span>
                        </span  >
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {/* we use typical to type out effect */}
                            <h1>
                                <Typical
                                    // loop the element infinity
                                    loop={Infinity}
                                    // use the element below with the 2 sec setup
                                    // use command + ctrl + space to insert emoji
                                    steps={[
                                        "Full Stack Software Engineer 👍",
                                        2000,
                                        "Software Developer 🤠",
                                        2000,
                                        "Programmer 📌",
                                        2000,
                                        "FrontEnd Developer 👽",
                                        2000,
                                        "React Developer 🌍",
                                        2000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Focusing in Fintech technology and willing to be involved in any area of business.
                            </span>
                        </span>
                    </div>

                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            Contact
                        </button>
                        {/* access the file thru /Resumexxx.pdf from public folder */}
                        <Link to="/Resume_Wayne_Lee.pdf" target="_blank">
                            <button className='btn highlighted-btn'>Resume</button>
                        </Link>
                    </div>
                </div>

                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>

            </div>
        </div >
    )
}

export default Profile