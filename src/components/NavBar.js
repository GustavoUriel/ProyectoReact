import React from 'react';
import '../css/NavBar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" className="Nav-Style" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Propuestas">
              <NavDropdown.Item href="#">Préstamos</NavDropdown.Item>
              <NavDropdown.Item href="#">Refinanciaciones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Seguros de vida</NavDropdown.Item>
              <NavDropdown.Item href="#">Seguros de hogar</NavDropdown.Item>
              <NavDropdown.Item href="#">Seguros de comercios</NavDropdown.Item>
              <NavDropdown.Item href="#">Seguros de vehículos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Planes para vivienda</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/au">Nosotros</Nav.Link>
            <Nav.Link href="#">Contanos algo</Nav.Link>
            <Nav.Link href="#">Comparativas de sueldos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
    </div>
    );
}
/* btn btn-block nav-link btn-warning font-weight-bold */
export default NavBar

function Register()
{
console.log ('me registro')
}