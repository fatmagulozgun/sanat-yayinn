import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import logoImg from "../resimler/resim-logo.webp";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path) => (e) => {

    // zaten o sayfadaysak yönlendirmeyi iptal et
    if (location.pathname === path) {
      e.preventDefault();
  
      // gerçek scroll container (bizim main)
      const main = document.querySelector("main");
      if (main) {
        main.scrollTo({ top: 0, behavior: "smooth" });
      }
  
      // garanti
      window.scrollTo(0,0);
    }
  };

  const goHome = (e) => {
    e.preventDefault();

    // zaten anasayfadaysak sadece yukarı çık
    if (location.pathname === "/") {
      // Farklı tarayıcı ve layout'larda güvenli şekilde en üste al
      const scrollOptions = { top: 0, behavior: "smooth" };

      if (document.documentElement) {
        document.documentElement.scrollTo(scrollOptions);
      }
      if (document.body) {
        document.body.scrollTo(scrollOptions);
      }
      window.scrollTo(scrollOptions);
    } else {
      // başka sayfadaysak normal yönlendir
      navigate("/");
    }
  };


  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-inner">
          {/* 1. Logo + Kurumsal Açıklama */}
          <div className="footer-col footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logoImg} alt="Arvia Sanat" className="footer-logo-img" />
            </Link>
            <p className="footer-desc">
              Müzik, resim, dans ve tiyatro alanlarında profesyonel eğitim sunan, öğrencilerini çok yönlü gelişime teşvik eden bir sanat akademisi
            </p>
          </div>

          {/* 2. Hızlı Menü */}
          <div className="footer-col">
            <h4 className="footer-heading">Hızlı Menü</h4>
            <ul className="footer-menu">
              <li>
                <Link to="/" onClick={handleNavClick("/")}>
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" onClick={handleNavClick("/hakkimizda")}>
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/branslarimiz" onClick={handleNavClick("/branslarimiz")}>
                  Branşlarımız
                </Link>
              </li>
              <li>
                <Link to="/atolyelerimiz" onClick={handleNavClick("/atolyelerimiz")}>
                  Atölyeler
                </Link>
              </li>
              <li>
                <Link
                  to="/uluslararasi-sinav-merkezi"
                  onClick={handleNavClick("/uluslararasi-sinav-merkezi")}
                >
                  Uluslararası Sınav Merkezi
                </Link>
              </li>
              <li>
                <Link to="/guzel-sanatlar" onClick={handleNavClick("/guzel-sanatlar")}>
                  Hazırlık Programları
                </Link>
              </li>
              <li>
                <Link to="/iletisim" onClick={handleNavClick("/iletisim")}>
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. İletişim Bilgileri */}
          <div className="footer-col">
            <h4 className="footer-heading">İletişim Bilgileri</h4>
            <ul className="footer-contact-list">
              <li>+90 (553) 210 99 33</li>
              <li>arvia@gmail.com</li>
              <li>Hamidiye Mah. 4201 Sokak No:4, Çamlıbel, Akdeniz / Mersin</li>
              <li>Çalışma Saatleri: 09:00 - 22:00</li>
            </ul>
          </div>

          {/* 4. Sosyal Medya */}
          <div className="footer-col footer-col-social">
            <h4 className="footer-heading">Sosyal Medya</h4>
            <div className="footer-social">
              <a href="https://instagram.com/arvia.sanat" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/905532109933" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=Hamidiye+mah,+4201+sokak+no:4,+%C3%87aml%C4%B1bel,+Akdeniz,+Mersin" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Google Maps">
                <FaMapMarkerAlt />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Footer */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span className="footer-copy">© {new Date().getFullYear()} Arvia Sanat. Tüm hakları saklıdır.</span>
        </div>
      </div>
    </footer>
  );
}
