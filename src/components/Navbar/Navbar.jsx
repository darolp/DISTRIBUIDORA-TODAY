import logo from '../../assets/imgs/logo.png'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <header>
      <nav className='navbar'>
        <img src={logo} alt="Arcoiris con la palabra today dentro" />
        <ul>
          <li><NavLink to='/nosotros'>Nosotros</NavLink></li>
          <li><NavLink to='/productos'>Rodrigo</NavLink></li>
          <li><NavLink to='/contacto'>Contacto</NavLink></li>
          <li><NavLink to='/FAQ'>Preguntas frecuentes</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar