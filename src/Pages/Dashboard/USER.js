import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const USER = ({ index, user, refetch }) => {
    const { email, role } = user;
    const makeadmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Amin added')
                    refetch()
                }
            })

    }
    return (

        <tr>
            <td>{`${index + 1}`}</td>
            <td>{user?.email}</td>

            {role === 'admin' ? <td></td> : <td>
                <button onClick={makeadmin} type="button" class="btn btn-sm btn-success">
                    Admin
                </button>
            </td>}
        </tr>

    );
};

export default USER;