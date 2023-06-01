import { useEffect, useState } from 'react'
import logo from '../../assets/imgs/logo.png'
import { NavLink } from 'react-router-dom'
function Navbar() {
  const [navbarStyle, setNavbarStyle] = useState('navbar');
  useEffect(() => {
    // si hace scroll cambia el estilo del navbar
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarStyle('navbar navbarScrolled')
      } else {
        setNavbarStyle('navbar')
      }
    }

    // agremos el evento scroll a window
    window.addEventListener('scroll', handleScroll);

    // se desmonta el eventListener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={navbarStyle}>
        <NavLink to='/'>
          <img src={logo} alt="Arcoiris con la palabra today dentro" />
        </NavLink>
        <ul>
          <li><NavLink to='/nosotros' className={({isActive}) => isActive ? 'active' : ""}>Nosotros</NavLink></li>
          <li><NavLink to='/productos' className={({isActive}) => isActive ? 'active' : ""}>Productos</NavLink></li>
          <li><NavLink to='/contact' className={({isActive}) => isActive ? 'active' : ""}>Contacto</NavLink></li>
          <li><NavLink to='/FAQ' className={({isActive}) => isActive ? 'active' : ""}>Preguntas frecuentes</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar