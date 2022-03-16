import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <Link to='#'>
                            <i class="fa fa-linkedin-square"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile