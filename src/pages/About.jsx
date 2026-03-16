import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import mudurImg from "../resimler/mudurr.webp";
import videoPoster from "../resimler/mudurrH.webp";
import tanitimVideo from "../resimler/Revizee2.mp4";

const About = () => {
  const videoRef = useRef(null); //useRef ile video etiketini bul

  useEffect(() => {
    const previousTitle = document.title;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionMeta?.getAttribute("content") || "";

    document.title = "Arvia Sanat Hakkımızda | Sanat Akademisi ve Eğitim Yaklaşımı";
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Arvia Sanat hakkında bilgi edinin. Kurum müdürü Erol Ermetal liderliğinde müzik, resim, dans ve tiyatro alanlarında nasıl bir eğitim yaklaşımı benimsiyoruz, değerlerimiz ve vizyonumuz neler öğrenin."
      );
    }

    const video = videoRef.current; //html video etiketini bul
    if (video) {
      video.muted = true; //video sesi kapat
      video.play().catch(() => { }); //video oynatılırken hata olursa hata yakalama
    }

    return () => {
      document.title = previousTitle;
      if (descriptionMeta) {
        descriptionMeta.setAttribute("content", previousDescription);
      }
    };
  }, []);

  return (
    <main className="about-page">
      <div className="container">
        <section className="about-hero-grid">
          <div className="about-hero-left">
            <h3 className="about-hero-subtitle">KURUMUMUZ HAKKINDA</h3>
            <h2 className="about-hero-heading">
              Sanat Hayallerinizi Gerçeğe Dönüştürüyoruz
            </h2>
            <div className="about-hero-intro">
              <div className="about-hero-mudur-photo">
                <img
                  src={mudurImg}
                  alt="Erol Ermetal - Arvia Sanat Kurum Müdürü"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={280}
                  height={420}
                />
              </div>
              <div className="about-hero-text">
                <p>
                  Yılların deneyimini sanatsal tutkuyla birleştirerek Arvia Sanat'ta müzik,
                  resim, dans ve tiyatro alanlarında yenilikçi bir eğitim modeli sunuyoruz.
                  Öğrencilerimizin sanatsal potansiyelini keşfetmelerine ve kendilerini özgürce
                  ifade etmelerine alan açıyoruz.
                </p>

                <p>
                  Disiplinli çalışma, bireysel gelişim ve estetik bakış açısıyla geleceğin
                  sanatçılarını yetiştiriyor; her yaştan bireyin sanatla buluştuğu bir akademi
                  olarak yolculuğumuza devam ediyoruz. Sanatı yaşamın doğal bir parçası haline
                  getiren bir eğitim anlayışı benimsiyoruz.
                </p>
                <Link to="/hakkimizda-bilgi" className="about-hero-cta">
                  DAHA FAZLA
                  <FaExternalLinkAlt className="about-hero-cta-icon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="about-hero-video-section">
            <video
              ref={videoRef}
              src={tanitimVideo}
              poster={videoPoster}
              controls
              muted
              playsInline
              autoPlay
              loop
              preload="metadata"
            >
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
