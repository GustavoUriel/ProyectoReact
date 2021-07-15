import React from 'react';
import '../css/NavBar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WidgetUser from './WidgetUser.js'
import logo from '../img/pesos.png'
import InsertImage from './InsertImage'


function NavBar() {
  const [logoSize, setLogoSize] = React.useState(80);


  return (
    <div>
      <Navbar collapseOnSelect expand="md" className="Nav-Style navbar navbar-dark navbar-expand-sm fixed-top" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <div className='header-logo'>
              <InsertImage src={logo} Size={logoSize} />
            </div>

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
            <Nav.Link as={Link} to="/aboutYou">TUS SERVICIOS</Nav.Link>
            <Nav.Link as={Link} to="/aboutUs">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contanos algo</Nav.Link>
            <Nav.Link as={Link} to="/salaries">Comparativas de sueldos</Nav.Link>

            <div className='header-widgetUser'>
              <WidgetUser />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
      <br /><br /><br /><br /><br />
      </div>
    </div>
  );
}
export default NavBar
