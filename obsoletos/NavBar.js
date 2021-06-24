import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget.js'

class NavBar extends Component {
  render() {
    return (

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"> HOME </Navbar.Brand>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"> Primero </Nav.Link>
      <Nav.Link href="#link"> Segundo </Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#1"> sub1 </NavDropdown.Item>
        <NavDropdown.Item href="#2"> sub2 </NavDropdown.Item>
        <NavDropdown.Item href="#3"> sub3 </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>

</Navbar>
      );
  }
}
  
export default NavBar;

