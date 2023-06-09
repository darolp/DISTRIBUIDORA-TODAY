import React from 'react'
import { Link } from 'react-router-dom'
import olla from '../../assets/imgs/olla.png'
import camion from '../../assets/imgs/camion.png'
import wp from '../../assets/imgs/Icono_whatsapp.png'
import gallery1 from '../../assets/imgs/gallery1.png'
import gallery2 from '../../assets/imgs/gallery2.png'
import gallery3 from '../../assets/imgs/gallery3.png'
import gallery4 from '../../assets/imgs/gallery4.png'
import gallery5 from '../../assets/imgs/gallery5.png'
import gallery6 from '../../assets/imgs/gallery6.png'
import facebook from '../../assets/imgs/Icono_facebook.png'
import instagram from '../../assets/imgs/Icono_instagram.png'


function HomeContent() {
  return (
    <>
      <section className='homeContent'>
        <section className='homeInfoContainer'>
          <div className='homeCard'>
            <div className='marco'>
              <img src={olla} alt='olla' />
              <h2>100% caseros</h2>
              <p>Te ofrecemos una variedad de productos que vas a poder disfrutar desde el desayuno hasta la cena. De nuestras manos a tu mesa.</p>
            </div>
          </div>
          <div className='homeCard'>
            <div className='marco'>
              <img src={camion} alt='camion'></img>
              <h2>Envío rápido</h2>
              <p>Contamos con envíos a domicilio en menos de 24 hs para que no tengas que moverte de tu casa o local.</p>
            </div>
          </div>
          <div className='homeInfoItem'>
            <h2>¡Hace tu pedido ahora!</h2>
            <Link target='_blank' to={'https://wa.me/message/KC3ZX6SX4OU7N1'}><img src={wp} />0261 334-0137</Link>
          </div>
        </section>
        <section className='homeGallery'>
          <div className='galleryText'>
            <h2>Conocé nuestros productos</h2>
            <p>Explorá nuestras variedades de productos congelados salados y dulces para disfrutar cuando quieras</p>
          </div>
          <div className='galleyContainer'>
            <img src={gallery1} alt='gallery' />
            <img src={gallery2} alt='gallery' />
            <img src={gallery3} alt='gallery' />
            <img src={gallery4} alt='gallery' />
            <img src={gallery5} alt='gallery' />
            <img src={gallery6} alt='gallery' />
          </div>
          <div className='galleryButton'>
            <Link to={'/productos'}>Ver todos los productos</Link>
          </div>
        </section>
        <section className='homeRedes'>
          <div className='seguinos'>
            <p>Seguinos en nuestras redes</p>
          </div>
          <div className='redes'>
            <Link target='_blank' to='https://www.facebook.com/todayhechocomoencasa/'><img src={facebook} alt='redes' /></Link>
            <Link target='_blank' to='https://www.instagram.com/todayproductoscongelados/'><img src={instagram} alt='redes' /></Link>
          </div>
          <div className='navHome'>
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

export default HomeContent