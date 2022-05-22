import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../src/MicroCenter.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
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
                            <Nav.Link className='nav-link' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className='nav-link' as={Link} to="/all-items">All Items</Nav.Link>
                            <Nav.Link className='nav-link' as={Link} to="blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav className='navbar-link'>
                            {
                                user && <>

                                    <Nav.Link className='nav-link' as={Link} to="all-items">All Items</Nav.Link>
                                </>
                            }



                            {
                                user ? <button className='border-0 p-2' onClick={handleSignOut}>Sign out</button> :
                                    <Nav.Link className='nav-title' as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;