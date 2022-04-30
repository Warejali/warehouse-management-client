import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='bg-primary'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/'>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>

                            {
                                user && <>
                                    <Nav.Link as={Link} to="AddNewItems">Add Items</Nav.Link>
                                    <Nav.Link as={Link} to="manageInventories">Manage Inventories</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;