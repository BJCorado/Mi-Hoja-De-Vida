import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className="custom-navbar shadow"
    >
      <Container>
        {/* Solo título visual, sin redirección */}
        <Navbar.Brand className="d-flex align-items-center gap-2 text-white">
          Mi Hoja De Vida
        </Navbar.Brand>

        {/* Ícono personalizado en el botón Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <GiHamburgerMenu color="white" size={24} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio" onClick={() => setExpanded(false)}>Inicio</Nav.Link>
            <Nav.Link href="#formacion" onClick={() => setExpanded(false)}>Formación Académica</Nav.Link>
            <Nav.Link href="#experiencia" onClick={() => setExpanded(false)}>Experiencia Académica</Nav.Link>
            <Nav.Link href="#habilidades" onClick={() => setExpanded(false)}>Habilidades Técnicas</Nav.Link>
            <Nav.Link href="#contacto" onClick={() => setExpanded(false)}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
