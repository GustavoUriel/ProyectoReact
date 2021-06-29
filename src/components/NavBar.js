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
              <NavDropdown.Item href="/props/loans">Préstamos</NavDropdown.Item>
              <NavDropdown.Item href="/props/refinance">Refinanciaciones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/props/insLife">Seguros de vida</NavDropdown.Item>
              <NavDropdown.Item href="/props/insHome">Seguros de hogar</NavDropdown.Item>
              <NavDropdown.Item href="/props/insBusiness">Seguros de comercios</NavDropdown.Item>
              <NavDropdown.Item href="/props/insVehicle">Seguros de vehículos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/props/mortgage">Planes para vivienda</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/aboutUs">Nosotros</Nav.Link>
            <Nav.Link href="/contact">Contanos algo</Nav.Link>
            <Nav.Link href="/salaries">Comparativas de sueldos</Nav.Link>
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