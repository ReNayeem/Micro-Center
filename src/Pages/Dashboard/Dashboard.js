import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './style.css'

const Dashboard = () => {
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
                </div>
            </div>

        </div>
    );
};

export default Dashboard;