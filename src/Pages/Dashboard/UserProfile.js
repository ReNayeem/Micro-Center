import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
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

    const [toggle, setToggle] = useState(true)

    const editProfile = (event) => {
        event.preventDefault()

        setToggle(false)
    }

    const saveProfile = (event) => {


        const address = event.target?.address.value
        const email = user?.email
        const phone = event.target?.phone.value
        const social = event.target?.social.value
        const education = event.target?.education.value
        const UpdateProfile = { social, email, phone, education, address }


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
        toast.success("Profile updated successfully")
        setToggle(true)
        event.preventDefault()
    }

    return (
        <div className='user-profile'>
            <form onSubmit={saveProfile} className='d-flex mb-2 mx-auto flex-column user-profile-container justify-content-center text-start'>

                <h1 className='text-center'>{user.displayName}</h1>
                <hr />
                <h5 className='mb-5 text-center user-email'>{user.email}</h5>

                {toggle === true ? (
                    profiles?.address ? <h4 className="user-profile-h4-text">Address<span className='text-white'>...</span>: <span className='inside-user-profile-h4-text'>{profiles?.address}</span></h4> : ''
                ) : <input name='address' className='mb-2' placeholder='Address' defaultValue={profiles?.address} />}

                {toggle === true ? (
                    profiles?.phone ? <h4 className="user-profile-h4-text">Phone<span className='text-white'>......</span>: <span className='inside-user-profile-h4-text'>{profiles?.phone}</span></h4> : ''
                ) : <input className='mb-2' placeholder='Phone number' name='phone' defaultValue={profiles?.phone} />}

                {toggle === true ? (
                    profiles?.education ? <h4 className="user-profile-h4-text">Education : <span className='inside-user-profile-h4-text'>{profiles?.education}</span></h4> : ''
                ) : <input className='mb-2' placeholder='Education' name='education' defaultValue={profiles?.education} />}

                {toggle === true ? (
                    profiles?.social ? <h4 className="user-profile-h4-text">Linkedin<span className='text-white'>...</span>: <span className='inside-user-profile-h4-text'>{profiles?.social}</span></h4> : ''
                ) : <input className='mb-2' placeholder='Linkedin' name='social' defaultValue={profiles?.social} />}
                {
                    toggle === true ? <button

                        className='my-5 edit-profile-button text-uppercase' onClick={editProfile}>Edit Profile</button> : <button
                            type='submit' className='mb-5 text-uppercase btn btn-success' >Save changes</button>
                }
            </form>


            <PageTitle title="Profile"></PageTitle>
        </div>
    );
};

export default UserProfile;