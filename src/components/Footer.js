import React from 'react';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer text-center py-4 text-white">
      <div>
        <FaCopyright className="me-2" />
        {new Date().getFullYear()} BJ Corado – Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
