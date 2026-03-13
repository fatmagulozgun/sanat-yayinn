import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import logoImg from "/images/resim-logo.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const MAP_COORDINATES = "36.788437,34.61956";
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src={logoImg}
            alt="Arvia Sanat logosu"
            className="navbar-logo-img"
            width={140}
            height={56}
            loading="eager"
            decoding="async"
          />
        </NavLink>

        <button 
        type="button" 
        className="navbar-toggle" 
        onClick={() => setMenuOpen(!menuOpen)} 
        aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`navLinks ${menuOpen ? "is-open" : ""}`}>
          <NavLink end className="navLink" to="/" onClick={closeMenu}>Ana Sayfa</NavLink>
          <NavLink className="navLink" to="/branslarimiz" onClick={closeMenu}>Branşlarımız</NavLink>
          <NavLink className="navLink" to="/atolyelerimiz" onClick={closeMenu}>Atölyelerimiz</NavLink>
          <NavLink className="navLink" to="/galeri" onClick={closeMenu}>Galeri</NavLink>
          <NavLink className="navLink" to="/hakkimizda" onClick={closeMenu}>Hakkımızda</NavLink>
          <NavLink className="navLink" to="/iletisim" onClick={closeMenu}>İletişim</NavLink>
        </div>

        <div className="navbar-social">
          <a
            href="https://instagram.com/arvia.sanat"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-social-link"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/905532109933"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-social-link"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${MAP_COORDINATES}`}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-social-link"
            aria-label="Google Maps"
          >
            <FaMapMarkerAlt />
          </a>
        </div>
      </div>
    </nav>
  );
}
