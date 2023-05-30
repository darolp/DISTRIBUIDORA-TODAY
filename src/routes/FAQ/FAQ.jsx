import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function FAQ() {
  return (
    <>
      <Navbar />
      <Link to={'/'}>volver</Link>
      <Footer />
    </>
  )
}

export default FAQ;