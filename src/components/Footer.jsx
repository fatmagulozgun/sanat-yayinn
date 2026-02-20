import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import logoImg from "../resimler/resim-logo.webp";

export default function Footer() {
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
              <li><Link to="/">Anasayfa</Link></li>
              <li><Link to="/hakkimizda">Hakkımızda</Link></li>
              <li><Link to="/branslarimiz">Branşlarımız</Link></li>
              <li><Link to="/atolyelerimiz">Atölyeler</Link></li>
              <li><Link to="/uluslararasi-sinav-merkezi">Uluslararası Sınav Merkezi</Link></li>
              <li><Link to="/guzel-sanatlar">Hazırlık Programları</Link></li>
              <li><Link to="/iletisim">İletişim</Link></li>
            </ul>
          </div>

          {/* 3. İletişim Bilgileri */}
          <div className="footer-col">
            <h4 className="footer-heading">İletişim Bilgileri</h4>
            <ul className="footer-contact-list">
              <li>0553 210 99 33</li>
              <li>Arvia@gmail.com</li>
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
