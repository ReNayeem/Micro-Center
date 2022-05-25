import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
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
        <div>
            <h1>{user.displayName}</h1>
            <hr />
            <h5 className='mb-5'>{user.email}</h5>
            <form onSubmit={saveProfile} className='d-flex mb-2 mx-auto flex-column user-profile-container text-start'>

                {toggle === true ? (
                    profiles?.address ? <h4>Address<span className='text-white'>....</span>: {profiles?.address}</h4> : ''
                ) : <input required name='address' className='mb-2' placeholder='Address' defaultValue={profiles.address} />}

                {toggle === true ? (
                    profiles?.phone ? <h4>Phone<span className='text-white'>.......</span>: {profiles?.phone} </h4> : ''
                ) : <input required className='mb-2' placeholder='Phone number' name='phone' defaultValue={profiles.phone} />}

                {toggle === true ? (
                    profiles?.education ? <h4>Education: {profiles?.education} </h4> : ''
                ) : <input required className='mb-2' placeholder='Education' name='education' defaultValue={profiles.education} />}

                {toggle === true ? (
                    profiles?.social ? <h4>Linkedin<span className='text-white'>...</span>: {profiles?.social} </h4> : ''
                ) : <input required className='mb-2' placeholder='Linkedin' name='social' defaultValue={profiles.social} />}
                {
                    toggle === true ? <button

                        className='my-5 btn btn-primary text-uppercase' onClick={editProfile}>Edit Profile</button> : <button
                            type='submit' className='mb-5 text-uppercase btn btn-success' >Save changes</button>
                }
            </form>



        </div>
    );
};

export default UserProfile;