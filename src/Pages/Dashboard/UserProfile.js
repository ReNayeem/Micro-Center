import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UserProfile = () => {
    const [user] = useAuthState(auth)

    const [updateProfileButton, setUpdateProfileButton] = useState(true)
    const [saveProfileButton, setSaveProfileButton] = useState(false)


    const editProfile = () => {
        setUpdateProfileButton(false)
    }

    const saveProfile = () => {
        setUpdateProfileButton(true)
    }

    return (
        <div>
            <h1>{user.displayName}</h1>
            <hr />
            <h5 className='mb-5'>{user.email}</h5>
            <form className='d-flex mb-2 mx-auto flex-column user-profile-container'>
                {updateProfileButton === true ? <h4>Address: </h4> : <input required className='mb-2' placeholder='address' />}
                {updateProfileButton === true ? <h4>Education: </h4> : <input required className='mb-2' placeholder='education' />}
                {updateProfileButton === true ? <h4>Phone: </h4> : <input required className='mb-2' placeholder='phone number' />}
                {updateProfileButton === true ? <h4>Linkedin: </h4> : <input required className='mb-2' placeholder='Linkedin: ' />}
            </form>


            {
                updateProfileButton === true ? <button className='mb-5 btn btn-primary text-uppercase' onClick={editProfile}>Update profile</button> : <button className='mb-5 text-uppercase btn btn-success' onClick={saveProfile}>save</button>
            }
        </div>
    );
};

export default UserProfile;