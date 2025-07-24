import React from 'react';

const Experiencia = () => {
  return (
     <section className="section">
      <div className="container text-center p-5">
        <h2 className="text-center mb-4">Experiencia Académica</h2>

        <div className="mb-4">
          <h4>📌 Sistema de Gestión de Tareas Personales</h4>
          <p><strong>Rol:</strong> Desarrollador</p>
          <p><strong>Tecnologías:</strong> ASP.NET Core, Razor Pages, C#, MySQL, Entity Framework</p>
          <p>
            Desarrollo de un sistema para administrar tareas personales, con funcionalidades como creación, edición, autenticación de usuarios, prioridad de tareas y gestión por sesión.
          </p>
          <p className="h5" style={{ color: '#FFD700' }}>
            Aprendí a implementar arquitectura por capas, usar ORM para persistencia de datos, y configurar sesiones seguras en una aplicación web moderna.
          </p>
          <img src="/gestor de tareas.jpg" alt="Gestor De Tareas" className="img-fluid proyecto-imagen mb-3" style={{ borderRadius: '24px' }}/>
        </div>

        <div className="mb-4">
          <h4>📌 Sistema de Gestión de Nómina</h4>
          <p><strong>Rol:</strong> Desarrollador</p>
          <p><strong>Tecnologías:</strong> ASP.NET Core Web API, C#, SQL Server, Entity Framework, JWT, Swagger, QuestPDF</p>
          <p>
            Sistema para la administración de nómina de empleados. Incluye gestión de empleados, departamentos, descuentos legales, generación de reportes en PDF, autenticación JWT y documentación de endpoints con Swagger.
          </p>
          <p className="h5" style={{ color: '#FFD700' }}>
            Reforcé el uso de APIs REST seguras, separación de capas, e integración de librerías profesionales para documentación y generación de informes.
          </p>
          <img src="/sistema nomina.jpg" alt="Sistema de Nómina" className="img-fluid proyecto-imagen mb-3" style={{ borderRadius: '24px' }}/>
          <img src="/sistema nomina 2.jpg" alt="Sistema de Nómina2" className="img-fluid proyecto-imagen mb-3" style={{ borderRadius: '24px' }}/>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
