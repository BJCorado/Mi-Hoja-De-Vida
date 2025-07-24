import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Formacion from './components/Formacion';
import Experiencia from './components/Experiencia';
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
        <section id="inicio">
          <div className="container seccion">
            <Header />
          </div>
        </section>
        </FadeInSection>
        <FadeInSection>
        <section id="formacion" >
          <div className="container seccion">
            <Formacion />
          </div>
        </section>
        </FadeInSection>

        <FadeInSection>
        <section id="experiencia">
          <div className="container seccion">
            <Experiencia />
          </div>
        </section>
        </FadeInSection>
        
        <FadeInSection>
        <section id="habilidades">
          <div className="container seccion">
            <Habilidades />
          </div>
        </section>
        </FadeInSection>
        
        <FadeInSection>
        <section id="contacto">
          <div className="container seccion">
            <Contacto />
          </div>
        </section>
        </FadeInSection>
      </div>
      <Footer />
    </>
  );
}

export default App;



