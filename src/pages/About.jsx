import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import mudurImg from "../resimler/mudurrH.webp";
import tanitimVideo from "../resimler/Tanitim-film.mp4";

const About = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => { });
    }
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
                  loading="lazy"
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
              controls
              muted
              playsInline
              autoPlay
              loop
              preload="auto"
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
