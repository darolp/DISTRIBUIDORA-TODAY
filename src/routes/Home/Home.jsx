import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';

function Home() {
  return (
    <>
      <Navbar />
      <Hero>
        <h1>Te resolvemos la comida <br/> de <span>hoy</span> y la de <span>todos los días</span></h1>
        <p>Nuestros productos son 100% caseros y te los entregamos congelados para que los disfrutes cuando quieras. ¡Es súper fácil!</p>
        <button>Conocé nuestros productos</button>
      </Hero>
      <Footer />
    </>
  )
}

export default Home;