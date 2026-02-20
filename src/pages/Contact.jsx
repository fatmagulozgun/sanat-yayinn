import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaWhatsapp } from "react-icons/fa";

const MAP_ADDRESS = "Hamidiye+mah,+4201+sokak+no:4+camlibel+akdeniz+mersin";
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${MAP_ADDRESS}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

const Contact = () => {
  return (
    <main className="contact-page">
      <div className="container">
        <div className="contact-grid">
          <section className="contact-box contact-info-section">
            <h2 className="contact-section-title">İletişim Bilgileri</h2>
            <div className="contact-cards">
              <div className="contact-card contact-card-static">
                <div className="contact-card-icon">
                  <FaMapMarkerAlt aria-hidden />
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">Adres</h3>
                  <p className="contact-card-text">Hamidiye Mah. 4201 Sokak No:4, Çamlıbel, Akdeniz / Mersin</p>
                </div>
              </div>
              <div className="contact-card contact-card-static">
                <div className="contact-card-icon">
                  <FaPhone aria-hidden />
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">Telefon</h3>
                  <p className="contact-card-text">0553 210 99 33</p>
                </div>
              </div>
              <div className="contact-card contact-card-static">
                <div className="contact-card-icon">
                  <FaEnvelope aria-hidden />
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">E-posta</h3>
                  <p className="contact-card-text">Arvia@gmail.com</p>
                </div>
              </div>
              <div className="contact-card contact-card-static">
                <div className="contact-card-icon">
                  <FaClock aria-hidden />
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">Çalışma Saatleri</h3>
                  <p className="contact-card-text">09:00 - 22:00</p>
                </div>
              </div>
            </div>
            <div className="contact-social">
              <h3 className="contact-social-title">Sosyal Medya</h3>
              <div className="contact-social-links">
                <a href="https://instagram.com/arvia.sanat" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://wa.me/905532109933" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=Hamidiye+mah,+4201+sokak+no:4,+%C3%87aml%C4%B1bel,+Akdeniz,+Mersin" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Google Maps">
                <FaMapMarkerAlt />
                </a>
              </div>
            </div>
          </section>

          <aside className="contact-box contact-map-section">
            <h2 className="contact-section-title">Harita</h2>
            <div className="contact-map-wrapper">
              <iframe
                title="Arvia Sanat Konum"
                src={MAP_EMBED_URL}
                width="100%"
                height="490"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Contact;
