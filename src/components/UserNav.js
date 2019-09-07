import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import SignIn from './LogIn'

function UserNav(){

  var myStyle = {
    background: "#E23425"
  }

  return (
    <Navbar style={myStyle} expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <SignIn />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default UserNav;
