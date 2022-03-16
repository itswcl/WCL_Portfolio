import React from 'react'
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
                </div>
            </div>
        </div >
    )
}

export default Profile