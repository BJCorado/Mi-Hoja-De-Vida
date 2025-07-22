import React from 'react';
import Header from './components/Header';
import Formacion from './components/Formacion';

function App() {
  return (
    <div>
      <section className="bg-white">
        <Header />
      </section>

      <section className="bg-light py-5">
        <Formacion />
      </section>
    </div>
  );
}

export default App;


