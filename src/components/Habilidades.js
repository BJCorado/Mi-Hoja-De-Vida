import React, { useEffect, useState } from 'react';
import {
  SiJavascript, SiReact, SiDotnet, SiNodedotjs,
  SiMysql, SiGit, SiFigma, SiHtml5, SiCss3
} from 'react-icons/si';
import { FaDatabase, FaCode } from 'react-icons/fa'; // íconos alternativos


const Habilidades = () => {
  const [animacion, setAnimacion] = useState(false);

  useEffect(() => {
    // Simula carga inicial
    setTimeout(() => setAnimacion(true), 300);
  }, []);

  const lenguajes = [
    { nombre: 'JavaScript', icono: <SiJavascript />, nivel: 35 },
    { nombre: 'C#', icono: <SiDotnet />, nivel: 50 }
    
  ];
  const marcacionYEstilo = [
  { nombre: 'HTML5', icono: <SiHtml5 />, nivel: 25 },
  { nombre: 'CSS3', icono: <SiCss3 />, nivel: 20 }
];


  const tecnologias = [
    { nombre: 'React', icono: <SiReact />, nivel: 20 },
    { nombre: '.NET Framework', icono: <SiDotnet />, nivel: 40 },
    { nombre: 'Node.js', icono: <SiNodedotjs />, nivel: 35 },
    { nombre: 'SQL Server', icono: <FaDatabase />, nivel: 35 },
    { nombre: 'MySQL', icono: <SiMysql />, nivel: 25 },
    { nombre: 'Git y GitHub', icono: <SiGit />, nivel: 35 }
  ];

  const herramientas = [
    { nombre: 'Visual Studio', icono: <FaCode />, nivel: 35 },
    { nombre: 'Figma', icono: <SiFigma />, nivel: 35 },
  ];

  const renderSkills = (skills) => (
    <>
      {skills.map((skill, index) => (
        <div key={index} className="mb-3">
          <label className="form-label fw-bold d-flex align-items-center gap-2">
            <span style={{ fontSize: '1.4em' }}>{skill.icono}</span> {skill.nombre}
          </label>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: animacion ? `${skill.nivel}%` : '0%',
                transition: 'width 1s ease-in-out'
              }}
              aria-valuenow={skill.nivel}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {animacion ? `${skill.nivel}%` : ''}
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <section className="container my-5 p-4 border rounded bg-white shadow-sm">
      <h2 className="text-center mb-4">Habilidades Técnicas</h2>

      <div className="mb-4">
        <h4>Lenguajes de programación</h4>
        {renderSkills(lenguajes)}
      </div>

      <div className="mb-4">
        <h4>Lenguajes de Marcado y Estilo</h4>
        {renderSkills(marcacionYEstilo)}
      </div>


      <div className="mb-4">
        <h4>Tecnologías</h4>
        {renderSkills(tecnologias)}
      </div>

      <div className="mb-4">
        <h4>Herramientas o software</h4>
        {renderSkills(herramientas)}
      </div>
    </section>
  );
};

export default Habilidades;
