import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="text-center p-5 section">
      <img src="/mi foto.jpg" alt="Foto personal" className="rounded-circle mb-3" width="150"   style={{
    border: '4px solid white',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  }} />
      <h1>Brayan Josué Corado Robles</h1>
        <p className="d-flex justify-content-center align-items-center gap-2">
        <FaMapMarkerAlt style={{ color: 'red' }} />
        <span>Ciudad Pedro De Alvarado,Moyuta,Jutiapa,Guatemala</span>
      </p>
      <h2 className="h5 text-muted">OBJETIVO │ Desarrollador De Software Funcional</h2>
      <p className="lead">
        Actual Estudiante de 8º Ciclo de Ingeniería En Sistemas 
        De La Universidad Mariano Gálvez De Guatemala
      </p>
        <p className="fst-italic">
        Apasionado por la creación de soluciones tecnológicas eficientes y funcionales.
      </p>
    </header>
  );
};

export default Header;

