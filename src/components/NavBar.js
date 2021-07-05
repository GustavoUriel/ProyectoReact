import React from 'react';
import '../css/NavBar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" className="Nav-Style" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Propuestas">
              <NavDropdown.Item as={Link} to="/props/loans">Préstamos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/props/refinance">Refinanciaciones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/props/insLife">Seguros de vida</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/props/insHome">Seguros de hogar</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/props/insBusiness">Seguros de comercios</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/props/insVehicle">Seguros de vehículos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/props/mortgage">Planes para vivienda</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/aboutUs">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contanos algo</Nav.Link>
            <Nav.Link as={Link} to="/salaries">Comparativas de sueldos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
    </div>
    );
}
export default NavBar
