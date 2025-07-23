import React from 'react';
import { FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contacto = () => {
  return (
    <section className="container my-5 p-4 section">
      <h2 className="text-center mb-4">Contacto</h2>
      <div className="d-flex justify-content-center gap-4">
        {/* Email */}
        <a href="mailto:brayancorado454@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white fs-2">
          <FaEnvelope />
        </a>
        {/* Instagram */}
        <a href="https://www.instagram.com/bj.corado?igsh=YXBkazF1NzIwN281" target="_blank" rel="noopener noreferrer" className="text-white fs-2">
          <FaInstagram />
        </a>
        {/* Facebook */}
        <a href="https://www.facebook.com/share/1Y46QZ9Zby/" target="_blank" rel="noopener noreferrer" className="text-white fs-2">
          <FaFacebook />
        </a>
      </div>
    </section>
  );
};

export default Contacto;
