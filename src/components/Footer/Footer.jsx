import React from 'react'
import logo2 from '../../assets/imgs/logo2.png'


function Footer() {


  return (
    <footer>
    <img src={logo2} alt=""/>
    <p>HECHO COMO EN CASA &#x2764</p>
    <div className="comunicate">
      <p>Comunicate con nosotros </p>
      <div className="comunicateSub">
        <i className="fa-brands fa-whatsapp"></i>
        <p>0261 334-0137</p>
      </div>

    </div>
  </footer>
  )
}

export default Footer