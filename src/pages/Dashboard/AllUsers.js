import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';
import './Dashboard.css'

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://micro-center.herokuapp.com/users').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="my-5 text-center">
                <h2>Admin</h2>
                <hr />
                <p>Create new Admin here</p>
            </div>
            <div className='order-table'>
                <table class="table">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td className=' w-50'>{user.email}</td>
                                    <td className='admin-btn'>
                                        {user.role !== 'admin' && <button className='btn btn-sm btn-success'
                                            onClick={() => {
                                                fetch(`https://micro-center.herokuapp.com/users/admin/${user.email}`, {
                                                    method: 'PUT',
                                                    headers: {
                                                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                                                    }
                                                })
                                                    .then(res => {
                                                        if (res.status === 403) {
                                                            toast.error('Failed to Make an admin !'
                                                            )
                                                        }
                                                        return res.json()
                                                    })
                                                    .then(data => {
                                                        refetch()
                                                        if (data.modifiedCount > 0) {
                                                            toast.success('Successfully made an admin'
                                                            )

                                                        }
                                                    })
                                            }}
                                        >MAKE ADMIN</button>}
                                        {user.role === 'admin' && <p className='text-center'>ADMIN</p>}
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
            <PageTitle title="All user"></PageTitle>
        </div>
    );
};

export default AllUsers;