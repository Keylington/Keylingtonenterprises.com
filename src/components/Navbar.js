import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Keylington Enterprises</div>
      <ul className="nav-links">
        <li><a href="#services">Servicios</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}
