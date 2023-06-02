import React from 'react';
import Nosotros from '../../components/Nosotros/Nosotros';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';

function About() {
  return (
    <>
      <Navbar />
      <Hero>
        <h2 className='heroTitle'>¿Quiénes somos?</h2>
        <p>TODAY es una empresa Mendocina, ubicada exactamente en Guaymallen, que distribuye una amplia variedad de productos congelados.
          Nació aproximadamente en 2020, post pandemia, debido a la necesidad de buscar una alternativa económica para sortear la situación y rápidamente se convirtió en un proyecto en alza gracias a la excelente respuesta de la comunidad.
          Se arrancó con la compra y distribución de medialunas y tortitas congeladas. Con el tiempo se fueron incorporando nuevos productos hasta solidificar un catálogo con más de 40 opciones y los objetivos están puestos en conquistar nuevos horizontes.</p>
      </Hero>
      <Nosotros />
      <Footer />
    </>
  )
}

export default About;