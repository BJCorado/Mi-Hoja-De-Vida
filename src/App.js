import React from 'react';
import Header from './components/Header';
import Formacion from './components/Formacion';
import Habilidades from './components/Habilidades';
import Contacto from './components/Contacto';
import NavigationBar from './components/Navbar';
import FadeInSection from './components/FadeInSection';
import './index.css';

function App() {
  return (
    <>
      <NavigationBar />
      {/* Fondo con blur */}
      <div id="blur-background"></div>
      
      <div className="content-wrapper">
        <FadeInSection>
        <section id="inicio" className="seccion">
          <div className="container">
            <Header />
          </div>
        </section>
        </FadeInSection>
        <FadeInSection>
        <section id="formacion" className="seccion">
          <div className="container">
            <Formacion />
          </div>
        </section>
        </FadeInSection>
        
        <FadeInSection>
        <section id="habilidades" className="seccion">
          <div className="container">
            <Habilidades />
          </div>
        </section>
        </FadeInSection>
        
        <FadeInSection>
        <section id="contacto" className="seccion">
          <div className="container">
            <Contacto />
          </div>
        </section>
        </FadeInSection>
      </div>
    </>
  );
}

export default App;



