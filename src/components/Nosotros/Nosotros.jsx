import React from 'react';
import ojo from '../../assets/imgs/ojo.png';
import cohete from '../../assets/imgs/cohete.png';
import mira from '../../assets/imgs/mira.png';
import { Link } from 'react-router-dom';
import facebook from '../../assets/imgs/Icono_facebook.png';
import instagram from '../../assets/imgs/Icono_instagram.png';

function Nosotros() {
  return (
    <>
      <section className='nosotrosContainer'>
        <section className='nosotrosInfoContainer'>
          <div className='nosotrosCard'>
            <div className='nosotrosMarco'>
              <img src={cohete} alt='cohete' />
              <h2>Misión</h2>
              <p>Acercar al consumidor una opción casera, rica y accesible, que le ahorre tiempo y resuelva sus comidas diarias.</p>
            </div>
          </div>
          <div className='nosotrosCard'>
            <div className='nosotrosMarco'>
              <img src={ojo} alt='ojo'></img>
              <h2>Visión</h2>
              <p>Ser la distribuidora líder llevando nuestros productos
                a más hogares y comercios para optimizar las comidas y el tiempo de nuestros consumidores.</p>
            </div>
          </div>
          <div className='nosotrosCard'>
            <div className='nosotrosMarco'>
              <img src={mira} alt='mira'></img>
              <h2>Propósito</h2>
              <p>Acompañar a nuestros clientes a la hora de elegir que comer cada día y para que se sienta tranquilo y satisfecho.</p>
            </div>
          </div>
        </section>
        <section className='nosotrosRedes'>
          <div className='seguinos'>
            <p>Seguinos en nuestras redes</p>
          </div>
          <div className='redes'>
            <Link target='_blank' to='https://www.facebook.com/todayhechocomoencasa/'><img src={facebook} alt='redes' /></Link>
            <Link target='_blank' to='https://www.instagram.com/todayproductoscongelados/'><img src={instagram} alt='redes' /></Link>
          </div>
          <div className='navNosotros'>
            <ul>
              <li className='firstItem'><Link to='/nosotros'>Nosotros</Link></li>
              <li> <Link to='/productos'> Productos</Link></li>
              <li><Link to='/contact'>Contacto</Link></li>
              <li><Link to='/FAQ'>Preguntas frecuentes</Link></li>
            </ul>
          </div>
        </section>
      </section>
    </>
  )
}

export default Nosotros