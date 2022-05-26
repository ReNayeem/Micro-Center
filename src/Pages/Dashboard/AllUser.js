import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import USER from './USER';

const AllUser = () => {
  const [user] = useAuthState(auth)
  // const { data: allUsers, isloading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
  //   method: 'GET'
  // })
  //   .then(res => res.json()))

  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setAllUsers(data))
  }, [allUsers])


  return (
    <div>
      <h2>All Users</h2>
      <div className='my-5 text-center'>
      </div>

      <table class="table OverflowX table-borderless table-info container border mt-5 shadow border-warning">
        <thead className='table-dark'>
          <tr>

            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Make Admin</th>

          </tr>
        </thead>
        <tbody>

          {
            allUsers?.map((user, index) => <USER index={index} user={user}></USER>)

          }



        </tbody>
      </table>

    </div>
  );
};

export default AllUser;