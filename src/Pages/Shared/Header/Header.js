import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../img/logo.png'

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  }

    return (
        <>
              <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
  <Container>
  <Navbar.Brand as={Link} to="/">
      <img src={logo} height={50} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="about">About</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
      {
        user ?
        <button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>Sign out</button>
        :
        <Nav.Link as={Link} to="login">
        Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;