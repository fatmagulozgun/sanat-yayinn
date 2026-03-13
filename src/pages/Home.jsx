import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAward, FaPalette } from "react-icons/fa";
import musicImg from "../resimler/musicK.webp";
import resimImg from "../resimler/resimK.webp";
import dansImg from "../resimler/dansK.webp";
import tiyatroImg from "../resimler/tiyatroK.webp";
import img1 from "../resimler/im1S.webp";
import img2 from "../resimler/im2S.webp";
import img3 from "/public/images/im3S.webp";
import img9 from "../resimler/im9S.webp";
import parfum from "../resimler/parfumS.webp";
import sepet from "../resimler/sepetA.webp";
import parfumA from "../resimler/parfumA.webp";
import mandala from "../resimler/mandalaA.webp";

const slides = [
  { id: 0, src: img3, alt: "Arvia Sanat atölye görseli 1" },
  { id: 2, src: img1, alt: "Arvia Sanat atölye görseli 2" },
  { id: 4, src: img2, alt: "Arvia Sanat atölye görseli 3" },
  { id: 6, src: img9, alt: "Arvia Sanat atölye görseli 4" },
  { id: 7, src: parfum, alt: "Arvia Sanat atölye görseli 5" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // currentIndex : hangi görsel gösteriliyor.0:ilk görsel..

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length); // prev : 0 --> 1 % 7 = 1.görseli göster 5sn
    }, 5000);                                                // prev : 1 --> 2 % 7 = 2.görseli göster 5sn..
    return () => clearInterval(interval);
  }, [slides.length]);

  const branslar = [
    {
      baslik: "MÜZİK BÖLÜMÜ",
      aciklama: "Piyano, gitar ve daha fazlası ile profesyonel eğitmenlerle müzik yolculuğunuza başlayın.",
      img: musicImg,
      link: "/branslarimiz#muzik",
    },
    {
      baslik: "RESİM BÖLÜMÜ",
      aciklama: "Tuval boyama, yağlı boya, seramik ve desen dersleri ile yaratıcılığınızı keşfedin.",
      img: resimImg,
      link: "/branslarimiz#resim",
    },
    {
      baslik: "DANS BÖLÜMÜ",
      aciklama: "Modern dans, bale ve K-Pop ile ritim ve hareketin gücünü deneyimleyin.",
      img: dansImg,
      link: "/branslarimiz#dans",
    },
    {
      baslik: "TİYATRO BÖLÜMÜ",
      aciklama: "Drama, çocuk ve yetişkin tiyatrosu atölyeleri ile sahne sanatlarında kendinizi ifade edin.",
      img: tiyatroImg,
      link: "/branslarimiz#tiyatro",
    },
  ];

  const atolyeler = [
    { baslik: "Seramik & Doğal Malzeme Atölyeleri", link: "/atolyelerimiz#seramik-dogal" },
    { baslik: "Boyama & Yüzey Tasarım Atölyeleri", link: "/atolyelerimiz#boyama-yuzey" },
    { baslik: "Tekstil & Lif Sanatları", link: "/atolyelerimiz#tekstil-lif" },
    { baslik: "Geleneksel & Estetik Sanatlar", link: "/atolyelerimiz#geleneksel-estetik" },
    { baslik: "Psikoloji & Farkındalık Atölyeleri", link: "/atolyelerimiz#psikoloji-farkindalik" },
    { baslik: "Duyusal & Yaratıcı Üretim", link: "/atolyelerimiz#duyusal-yaratici" },
  ];

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          {/* Sol Metin Alanı*/}
          <div className="hero-left">
            <p className="hero-eyebrow">SANATLA KENDİNİ KEŞFET</p>
            <h1 className="hero-title">
              Arvia Sanat Atölyeleri ile
              Yaratıcılığını Özgür Bırak
            </h1>
            <p className="hero-description">
              Resim, seramik, heykel ve çocuk atölyeleri ile her yaşa uygun sanat
              deneyimi sunuyoruz. Şehrin merkezinde, ilham verici bir ortamda
              yaratıcı yolculuğuna şimdi başla.
            </p>

            <div className="hero-actions">
              <Link to="/atolyelerimiz" className="btn btn-primary">
                Atölyeleri İncele
              </Link>
              <Link to="/iletisim" className="btn btn-secondary">
                İletişime Geç
              </Link>
            </div>
          </div>

          {/* Sağ Slider Alanı*/}
          <div className="hero-right">
            <div className="hero-slider">
              <div
                className="hero-slider-image-wrapper"
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  const tiklananAlan = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - tiklananAlan.left) / tiklananAlan.width;
                  if (x < 0.4) {
                    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
                  } else if (x > 0.6) {
                    setCurrentIndex((prev) => (prev + 1) % slides.length);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
                  if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev + 1) % slides.length);
                }}
              >
                <img
                  src={slides[currentIndex].src}
                  alt={slides[currentIndex].alt}
                  className="hero-slider-image is-active"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={800}
                  height={480}
                />

                <button
                  type="button"
                  className="hero-slider-arrow hero-slider-arrow-left"
                  aria-label="Önceki görsel"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
                  }}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="hero-slider-arrow hero-slider-arrow-right"
                  aria-label="Sonraki görsel"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex((prev) => (prev + 1) % slides.length);
                  }}
                >
                  ›
                </button>
              </div>

              <div className="hero-slider-indicators" aria-hidden="true">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`hero-slider-indicator${index === currentIndex ? " is-active" : ""
                      }`}
                    aria-label={`${index + 1}. görsel`}
                    aria-current={index === currentIndex ? "true" : "undefined"}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branşlarımız ve Atölyelerimiz Bölümü*/}
      <section className="home-programs">
        <div className="container">
          <h2 className="home-section-title">Branşlarımız</h2>
          <div className="branslar-grid">
            {branslar.map((brans) => (
              <div key={brans.baslik} className="brans-card">
                <div className="brans-card-image">
                  <img
                    src={brans.img}
                    alt={brans.baslik}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={400}
                  />
                </div>
                <h3 className="brans-title">{brans.baslik}</h3>
                <p className="brans-aciklama">{brans.aciklama}</p>
                <Link to={brans.link} className="btn btn-brans">
                  Detaylı Bilgi İçin
                </Link>
              </div>
            ))}
          </div>

          {/* Atölyelerimiz Bölümü*/}
          <h2 className="home-section-title">Atölyelerimiz</h2>
          <div className="atolyeler-images-row">
            <div className="atolyeler-image-card">
              <img
                src={mandala}
                alt="Arvia Sanat atölye görseli 1"
                loading="lazy"
                decoding="async"
                width={600}
                height={220}
              />
            </div>
            <div className="atolyeler-image-card">
              <img
                src={parfumA}
                alt="Arvia Sanat atölye görseli 2"
                loading="lazy"
                width={600}
                decoding="async"
                height={220}
              />
            </div>
            <div className="atolyeler-image-card">
              <img
                src={sepet}
                alt="Arvia Sanat atölye görseli 3"
                loading="lazy"
                width={600}
                decoding="async"
                height={220}
              />
            </div>
          </div>
          <div className="atolyeler-grid">
            {atolyeler.map((atolye) => (
              <Link key={atolye.baslik} to={atolye.link} className="atolye-card">
                {atolye.baslik}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Bloklarımız Bölümü*/}
      <section className="home-premium-blocks">
        <div className="container premium-blocks-inner">
          <div className="premium-block">
            <div className="premium-block-header">
              <div className="premium-block-icon">
                <FaAward aria-hidden />
              </div>
              <h3 className="premium-block-title">Uluslararası Sınav Merkezi</h3>
            </div>
            <p className="premium-block-text">
              ABRSM, London College of Music ve Rock School sınavlarının uygulandığı yetkili merkez.{' '}
              <Link to="/uluslararasi-sinav-merkezi" className="premium-block-link">Tıklayınız</Link>
            </p>
          </div>
          <div className="premium-block">
            <div className="premium-block-header">
              <div className="premium-block-icon">
                <FaPalette aria-hidden />
              </div>
              <h3 className="premium-block-title">Güzel Sanatlar ve Konservatuvar Hazırlık Programları</h3>
            </div>
            <p className="premium-block-text">
              Güzel sanatlar fakülteleri ve konservatuvarlara giriş sınavlarına hazırlık. Deneyimli kadromuz ile portfolyo ve yetenek sınavlarına yönelik birebir destek sunuyoruz.{' '}
                <Link to="/guzel-sanatlar" className="premium-block-link">Tıklayınız</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
