import React from 'react'
import Typical from 'react-typical'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>

                    <div className='colz'>
                        {/* use pathname to link to direct link */}
                        {/* target with _blank to open new window*/}
                        <Link to={{ pathname: 'https://www.linkedin.com/in/weicheng-lee/' }} target="_blank">
                            <i class="fa fa-linkedin-square"></i>
                        </Link>
                        <Link to={{ pathname: 'https://github.com/itswcl' }} target="_blank">
                            <i class="fa fa-github-square"></i>
                        </Link>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, It's <span className='highlighted-text'>Wei</span>
                        </span>
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
                        </span>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Profile