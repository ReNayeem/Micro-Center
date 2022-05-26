import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import './style.css'

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div>
            <div className='container dashboard d-flex justify-content-start mt-5'>
                <button class="dashboard-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Open Dashboard</button>
            </div>
            <div className="container">
                <Outlet></Outlet>
            </div>

            <div class="offcanvas side-nav offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body text-start">
                    <NavLink className={({ isActive }) => (isActive ? "dashboard-link nav-link" : "dashboard-link-inactive nav-link ")} as={Link} to="/dashboard/profile">Profile</NavLink>

                    <NavLink id='dashboard-link' className={({ isActive }) => (isActive ? "dashboard-link nav-link" : "dashboard-link-inactive nav-link ")} as={Link} to="/dashboard/my-orders">My orders</NavLink>

                    <NavLink id='dashboard-link' className={({ isActive }) => (isActive ? "dashboard-link nav-link" : "dashboard-link-inactive nav-link ")} as={Link} to="/dashboard/add-review">Add a review</NavLink>

                    <NavLink id='dashboard-link' className={({ isActive }) => (isActive ? "dashboard-link nav-link" : "dashboard-link-inactive nav-link ")} as={Link} to="/dashboard/add-item">Add Item</NavLink>

                    <NavLink id='dashboard-link' className={({ isActive }) => (isActive ? "dashboard-link nav-link" : "dashboard-link-inactive nav-link ")} as={Link} to="/dashboard/manage-item">Manage Item</NavLink>


                    <NavLink id='dashboard-link' className={({ isActive }) => (isActive ? "dashboard-link nav-link" : "dashboard-link-inactive nav-link ")} as={Link} to="/dashboard/manage-order">Manage Orders</NavLink>

                    <NavLink id='dashboard-link' className={({ isActive }) => (isActive ? "dashboard-link nav-link" : "dashboard-link-inactive nav-link ")} as={Link} to="/dashboard/all-users">All Users</NavLink>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;