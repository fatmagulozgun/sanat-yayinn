import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImg from "../resimler/resim-logo.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logoImg} alt="Arvia Sanat" className="navbar-logo-img" />
        </NavLink>

        <button type="button" className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={menuOpen}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`navLinks ${menuOpen ? "is-open" : ""}`}>
          <NavLink end className="navLink" to="/" onClick={closeMenu}>Ana Sayfa</NavLink>
          <NavLink className="navLink" to="/hakkimizda" onClick={closeMenu}>Hakkımızda</NavLink>
          <NavLink className="navLink" to="/branslarimiz" onClick={closeMenu}>Branşlarımız</NavLink>
          <NavLink className="navLink" to="/atolyelerimiz" onClick={closeMenu}>Atölyelerimiz</NavLink>
          <NavLink className="navLink" to="/galeri" onClick={closeMenu}>Galeri</NavLink>
          <NavLink className="navLink" to="/iletisim" onClick={closeMenu}>İletişim</NavLink>
        </div>
        <div className="navbar-spacer" aria-hidden="true" />
      </div>
    </nav>
  );
}
