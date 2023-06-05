import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import HomeContent from '../../components/HomeContent/HomeContent';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Navbar />
      <Hero>
        <h1 className='heroTitle'>Te resolvemos la comida <br /> de <span>hoy</span> y la de <span>todos los días</span></h1>
        <p>Nuestros productos son 100% caseros y te los entregamos congelados para que los disfrutes cuando quieras. ¡Es súper fácil!</p>
        <Link to={'/productos'}>Conocé nuestros productos</Link>
      </Hero>
      <HomeContent />
      <Footer />
    </>
  )
}

export default Home;