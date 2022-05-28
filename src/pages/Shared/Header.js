import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import logo from './../../../src/MicroCenter.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const handleSignOut = () => {
    console.log(user);
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
  return (
    <>
      <Navbar className='navbar' collapseOnSelect expand="lg" sticky='top'>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className='logo' src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle className='custom-toggler' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navbar-link">
              <NavLink className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")} as={Link} to="/">Home</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")} as={Link} to="/allproducts">Products</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")} as={Link} to="/myportfolio">Portfolio</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")} as={Link} to="blogs">Blogs</NavLink>
            </Nav>
            <Nav className='navbar-link'>
              {
                user && <>

                  <NavLink className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")} as={Link} to="dashboard/profile">Dashboard</NavLink>
                </>
              }

              {
                user ? <button className='border-0 p-2 sign-out' onClick={handleSignOut}>Sign out</button>
                  :
                  <NavLink className={({ isActive }) => (isActive ? "active-link nav-link" : "link nav-link ")} as={Link} to="/login">
                    Login
                  </NavLink>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default Header;