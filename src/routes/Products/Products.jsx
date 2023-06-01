import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Productos from '../../components/Productos/Productos';
import Hero from '../../components/Hero/Hero';

function Products() {
  return (
    <>
      <Navbar />
      <Hero>
        <h1>Conocé nuestra variedad de productos</h1>
        <p>Contamos con una amplia variedad de productos congelados para que </p> 
        <p> puedas disfrutar del desayuno a la cena. Y lo mejor, están listos en </p>
         <p> minutos para que los disfrutes cuando quieras.</p>        
      </Hero>
      <Productos/>
      <Footer />
    </>
  )
}

export default Products;