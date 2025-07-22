import React from 'react';

const Header = () => {
  return (
    <header className="text-center p-5 bg-light">
      <img src="/mi foto.jpg" alt="Foto personal" className="rounded-circle mb-3" width="150" />
      <h1>Tu Nombre Completo</h1>
      <p className="lead">Desarrollador Web | Estudiante | Otro</p>
    </header>
  );
};

export default Header;
