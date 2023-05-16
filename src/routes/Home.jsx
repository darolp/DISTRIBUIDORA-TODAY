import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to={'/contact'}>Contacto</Link>
      <Link to={'/FAQ'}>Preguntas frecuentes</Link>
      <Link to={'/products'}>Productos</Link>
      <Link to={'/about'}>Sobre nosotros</Link>
    </>
  )
}

export default Home;