import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './style.css'
const UserProfile = () => {
    const [user] = useAuthState(auth)
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setProfiles(data[0])

            }
            )
    }, [user])




    const [updateProfileButton, setUpdateProfileButton] = useState(true)
    const [saveProfileButton, setSaveProfileButton] = useState(false)


    const editProfile = (e) => {
        e.preventDefault()

        setUpdateProfileButton(false)
    }

    const saveProfile = (e) => {


        const address = e.target?.address.value
        const email = user?.email
        const phone = e.target?.phone.value
        const social = e.target?.social.value
        const education = e.target?.education.value
        const UpdateProfile = { social, email, phone, education, address }
        // console.log(e.target?.address.value);
        // console.log(e.target?.education.value);
        // console.log(e.target?.phone.value);
        // console.log(e.target?.social.value);
        const url = `http://localhost:5000/users/${user?.email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateProfile)
        })
            .then((res) => res.json())
            .then((data) => {

                setProfiles(UpdateProfile);
                console.log('data success', data);

            });
        setUpdateProfileButton(true)
        e.preventDefault()
    }

    return (
        <div>
            <h1>{user.displayName}</h1>
            <hr />
            <h5 className='mb-5'>{user.email}</h5>
            <form onSubmit={saveProfile} className='d-flex mb-2 mx-auto flex-column user-profile-container'>

                {updateProfileButton === true ? <h4>Address :{profiles?.address?.slice(0, 10)}</h4> : <input required name='address' className='mb-2' placeholder='address' />}
                {updateProfileButton === true ? <h4>Education:{profiles?.education} </h4> : <input required className='mb-2' placeholder='education' name='education' />}
                {updateProfileButton === true ? <h4>Phone: {profiles?.phone} </h4> : <input required className='mb-2' placeholder='phone number' name='phone' />}
                {updateProfileButton === true ? <h4>Linkedin: {profiles?.social} </h4> : <input required className='mb-2' placeholder='Linkedin: ' name='social' />}
                {
                    updateProfileButton === true ? <button

                        className='mb-5 btn btn-primary text-uppercase' onClick={editProfile}>Update profile</button> : <button
                            type='submit' className='mb-5 text-uppercase btn btn-success' >save</button>
                }
            </form>



        </div>
    );
};

export default UserProfile;