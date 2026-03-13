import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import logoImg from "/images/resim-logo.webp";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {

  const location = useLocation();
  const navigate = useNavigate();
  const MAP_COORDINATES = "36.788437,34.61956";

  // Hızlı Menü için tıklanınca en üste gitme fonksiyonu
  const handleNavClick = (path) => (e) => {
    if (location.pathname === path) { //kullanıcı aynı menüye tekrar basarsa
      e.preventDefault(); // yönlendirmeyi iptal et
  
      const main = document.querySelector("main"); //sayfadaki main etiketini bul
      if (main) {
        main.scrollTo({ top: 0, behavior: "smooth" }); //main etiketini en üste kaydır
      }
        window.scrollTo(0,0); //sayfayı en üste kaydır
    }
  };

  // Anasayfaya yönlendirme fonksiyonu
  const goHome = (e) => {
    e.preventDefault(); // yönlendirmeyi iptal et

    if (location.pathname === "/") { //kullanıcı anasayfadayken tekrar anasayfaya yönlendirildiyse
      const scrollOptions = { top: 0, behavior: "smooth" };

      if (document.documentElement) { //document.documentElement : html etiketini bul
        document.documentElement.scrollTo(scrollOptions); //html etiketini en üste kaydır
      }
      if (document.body) { //document.body : body etiketini bul
        document.body.scrollTo(scrollOptions); //body etiketini en üste kaydır
      }
      window.scrollTo(scrollOptions); //sayfayı en üste kaydır
    } else {
      navigate("/"); //anasayfaya yönlendir
    }
  };


  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-inner">
          {/* 1. Logo + Kurumsal Açıklama */}
          <div className="footer-col footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logoImg} alt="Arvia Sanat" onClick={goHome} className="footer-logo-img" width={160} height={60} loading="eager" decoding="async" />
            </Link>
            <p className="footer-desc">
              Müzik, resim, dans ve tiyatro alanlarında profesyonel eğitim sunan, öğrencilerini çok yönlü gelişime teşvik eden bir sanat akademisi.
            </p>
          </div>

          {/* 2. Hızlı Menü */}
          <div className="footer-col">
            <h2 className="footer-heading">Hızlı Menü</h2>
            <ul className="footer-menu">
              <li>
                <Link to="/" onClick={handleNavClick("/")}>
                  Anasayfa
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
                <Link to="/hakkimizda" onClick={handleNavClick("/hakkimizda")}>
                  Hakkımızda
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
            <h2 className="footer-heading">İletişim Bilgileri</h2>
            <ul className="footer-contact-list">
              <li>
                <a href="tel:+905532109933">+90 (553) 210 99 33</a>
              </li>
              <li>
                <a href="mailto:arvia@gmail.com">arvia@gmail.com</a>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${MAP_COORDINATES}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hamidiye Mah. 4201 Sokak No: 4, Çamlıbel, Akdeniz / MERSİN
                </a>
              </li>
              <li>Çalışma Saatleri: 09:00 - 22:00</li>
            </ul>
          </div>

          {/* 4. Sosyal Medya */}
          <div className="footer-col footer-col-social">
            <h2 className="footer-heading">Sosyal Medya</h2>
            <div className="footer-social">
              <a href="https://instagram.com/arvia.sanat" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/905532109933" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href={`https://www.google.com/maps/search/?api=1&query=${MAP_COORDINATES}`} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Google Maps">
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
