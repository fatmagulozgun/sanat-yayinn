import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaWhatsapp } from "react-icons/fa";

const MAP_COORDINATES = "36.788437,34.61956";
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${MAP_COORDINATES}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

const Contact = () => {
  const [mapVisible, setMapVisible] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionMeta?.getAttribute("content") || "";

    document.title = "Arvia Sanat İletişim | Adres, Telefon ve Ulaşım Bilgileri";
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Arvia Sanat ile iletişime geçin. Adres, telefon, e-posta ve sosyal medya hesaplarımızı görüntüleyin, Mersin Akdeniz Çamlıbel'deki sanat merkezimize ulaşım için harita bilgilerine bakın."
      );
    }

    // Harita iframe'ini, ilk boyamadan sonra ve tarayıcı boşta kalınca yükle
    let idleId = null;
    let timeoutId = null;

    const revealMap = () => setMapVisible(true);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(revealMap, { timeout: 1500 });
    } else {
      timeoutId = window.setTimeout(revealMap, 1200);
    }

    return () => {
      document.title = previousTitle;
      if (descriptionMeta) {
        descriptionMeta.setAttribute("content", previousDescription);
      }
      if (idleId !== null && typeof window !== "undefined" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);
  return (
    <main className="contact-page">
      <div className="container">
        <div className="contact-grid">
          <section className="contact-box contact-info-section">
            <h2 className="contact-section-title">İletişim Bilgileri</h2>
            <div className="contact-cards">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${MAP_COORDINATES}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-card-icon">
                  <FaMapMarkerAlt aria-hidden />
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">Adres</h3>
                  <p className="contact-card-text">Hamidiye Mh. 4201 Sokak No: 4, Çamlıbel, Akdeniz / MERSİN</p>
                </div>
              </a>
              <a href="tel:+905532109933" className="contact-card">
                <div className="contact-card-icon">
                  <FaPhone aria-hidden />
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">Telefon</h3>
                  <p className="contact-card-text">+90 (553) 210 99 33</p>
                </div>
              </a>
              <a href="mailto:arvia@gmail.com" className="contact-card">
                <div className="contact-card-icon">
                  <FaEnvelope aria-hidden />
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">E-posta</h3>
                  <p className="contact-card-text">arvia@gmail.com</p>
                </div>
              </a>
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
                <a href={`https://www.google.com/maps/search/?api=1&query=${MAP_COORDINATES}`} target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Google Maps">
                <FaMapMarkerAlt />
                </a>
              </div>
            </div>
          </section>

          <aside className="contact-box contact-map-section">
            <h2 className="contact-section-title">Harita</h2>
            <div className="contact-map-wrapper">
              {mapVisible ? (
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
              ) : (
                <button
                  type="button"
                  className="contact-card contact-card-static"
                  style={{ width: "100%", height: "100%", cursor: "pointer" }}
                  onClick={() => setMapVisible(true)}
                >
                  <div className="contact-card-icon">
                    <FaMapMarkerAlt aria-hidden />
                  </div>
                  <div className="contact-card-content">
                    <h3 className="contact-card-title">Haritayı Göster</h3>
                    <p className="contact-card-text">
                      Konumu görmek için tıklayın. Harita yalnızca ihtiyaç duyulduğunda yüklenir.
                    </p>
                  </div>
                </button>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Contact;
