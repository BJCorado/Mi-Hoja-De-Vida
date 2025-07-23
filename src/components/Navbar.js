import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="custom-navbar shadow"
    >
      <Container>
        <Navbar.Brand href="#inicio" className="d-flex align-items-center gap-2 text-white">
          <GiHamburgerMenu /> Mi Hoja De Vida
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#formacion">Formación Académica</Nav.Link>
            <Nav.Link href="#habilidades">Habilidades Técnicas</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
