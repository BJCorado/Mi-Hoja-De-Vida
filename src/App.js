import React from 'react';
import Header from './components/Header';
import Formacion from './components/Formacion';
import Habilidades from './components/Habilidades';
import './index.css';
function App() {
  return (
    <>
      {/* Fondo con blur */}
      <div id="blur-background"></div>

      <div className="content-wrapper">
        <section className="seccion">
          <div className="container">
            <Header />
          </div>
        </section>

        <section className="seccion">
          <div className="container">
            <Formacion />
          </div>
        </section>

        <section className="seccion">
          <div className="container">
            <Habilidades />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;



