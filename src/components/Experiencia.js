import React from 'react';

const Experiencia = () => {
  return (
    <section id="experiencia" className="seccion">
      <div className="container">
        <h2 className="text-center mb-4">Experiencia Académica</h2>

        <div className="mb-4">
          <h4>📌 Sistema de Gestión de Tareas Personales</h4>
          <p><strong>Rol:</strong> Desarrollador Full Stack</p>
          <p><strong>Tecnologías:</strong> ASP.NET Core, Razor Pages, C#, MySQL, Entity Framework</p>
          <p>
            Desarrollo de un sistema para administrar tareas personales, con funcionalidades como creación, edición, autenticación de usuarios, prioridad de tareas y gestión por sesión.
          </p>
          <p className="fst-italic text-muted">
            Aprendí a implementar arquitectura por capas, usar ORM para persistencia de datos, y configurar sesiones seguras en una aplicación web moderna.
          </p>
        </div>

        <div className="mb-4">
          <h4>📌 Sistema de Gestión de Nómina</h4>
          <p><strong>Rol:</strong> Desarrollador</p>
          <p><strong>Tecnologías:</strong> ASP.NET Core Web API, C#, SQL Server, Entity Framework, JWT, Swagger, QuestPDF</p>
          <p>
            Sistema para la administración de nómina de empleados. Incluye gestión de empleados, departamentos, descuentos legales, generación de reportes en PDF, autenticación JWT y documentación de endpoints con Swagger.
          </p>
          <p className="fst-italic text-muted">
            Reforcé el uso de APIs REST seguras, separación de capas, e integración de librerías profesionales para documentación y generación de informes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
