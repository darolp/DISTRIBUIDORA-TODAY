import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PreguntasFrecuentes from '../../components/PreguntasFrecuentes/PreguntasFrecuentes';

function FAQ() {
  return (
    <>
      <Navbar />
      <PreguntasFrecuentes/>
      <Footer />
    </>
  )
}

export default FAQ;