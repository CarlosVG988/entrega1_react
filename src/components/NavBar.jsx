import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Componentes Electrónicos</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
