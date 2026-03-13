import React, { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import img3 from "../resimler/im3S.webp";

const FaAward = lazy(() => import("react-icons/fa").then(m => ({ default: m.FaAward })));
const FaPalette = lazy(() => import("react-icons/fa").then(m => ({ default: m.FaPalette })));

const slideUrls = [
  { id: 0, src: img3, alt: "Arvia Sanat atölye görseli 1" },
  { id: 2, src: () => import("../resimler/im1S.webp"), alt: "Arvia Sanat atölye görseli 2" },
  { id: 4, src: () => import("../resimler/im2S.webp"), alt: "Arvia Sanat atölye görseli 3" },
  { id: 6, src: () => import("../resimler/im9S.webp"), alt: "Arvia Sanat atölye görseli 4" },
  { id: 7, src: () => import("../resimler/parfumS.webp"), alt: "Arvia Sanat atölye görseli 5" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([{ id: 0, src: img3, alt: "Arvia Sanat atölye görseli 1" }]);
  const [belowFoldImages, setBelowFoldImages] = useState({});

  useEffect(() => {
    const loadSlides = async () => {
      const loaded = await Promise.all(
        slideUrls.map(async (slide) => {
          if (typeof slide.src === "function") {
            const mod = await slide.src();
            return { ...slide, src: mod.default };
          }
          return slide;
        })
      );
      setSlides(loaded);
    };
    const timer = setTimeout(loadSlides, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (slides.length < 2) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const loadBelowFoldImages = () => {
      Promise.all([
        import("../resimler/musicK.webp"),
        import("../resimler/resimK.webp"),
        import("../resimler/dansK.webp"),
        import("../resimler/tiyatroK.webp"),
        import("../resimler/mandalaA.webp"),
        import("../resimler/parfumA.webp"),
        import("../resimler/sepetA.webp"),
      ]).then(([music, resim, dans, tiyatro, mandala, parfumA, sepet]) => {
        setBelowFoldImages({
          music: music.default,
          resim: resim.default,
          dans: dans.default,
          tiyatro: tiyatro.default,
          mandala: mandala.default,
          parfumA: parfumA.default,
          sepet: sepet.default,
        });
      });
    };
    
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(loadBelowFoldImages, { timeout: 200 });
      return () => cancelIdleCallback(id);
    } else {
      const timer = setTimeout(loadBelowFoldImages, 50);
      return () => clearTimeout(timer);
    }
  }, []);

  const branslar = [
    {
      baslik: "MÜZİK BÖLÜMÜ",
      aciklama: "Piyano, gitar ve daha fazlası ile profesyonel eğitmenlerle müzik yolculuğunuza başlayın.",
      imgKey: "music",
      link: "/branslarimiz#muzik",
    },
    {
      baslik: "RESİM BÖLÜMÜ",
      aciklama: "Tuval boyama, yağlı boya, seramik ve desen dersleri ile yaratıcılığınızı keşfedin.",
      imgKey: "resim",
      link: "/branslarimiz#resim",
    },
    {
      baslik: "DANS BÖLÜMÜ",
      aciklama: "Modern dans, bale ve K-Pop ile ritim ve hareketin gücünü deneyimleyin.",
      imgKey: "dans",
      link: "/branslarimiz#dans",
    },
    {
      baslik: "TİYATRO BÖLÜMÜ",
      aciklama: "Drama, çocuk ve yetişkin tiyatrosu atölyeleri ile sahne sanatlarında kendinizi ifade edin.",
      imgKey: "tiyatro",
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
                <div className="brans-card-image" style={{ backgroundColor: "#f5efe6", minHeight: 200 }}>
                  {belowFoldImages[brans.imgKey] && (
                    <img
                      src={belowFoldImages[brans.imgKey]}
                      alt={brans.baslik}
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={400}
                    />
                  )}
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
            <div className="atolyeler-image-card" style={{ backgroundColor: "#f5efe6", minHeight: 220 }}>
              {belowFoldImages.mandala && (
                <img
                  src={belowFoldImages.mandala}
                  alt="Arvia Sanat atölye görseli 1"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={220}
                />
              )}
            </div>
            <div className="atolyeler-image-card" style={{ backgroundColor: "#f5efe6", minHeight: 220 }}>
              {belowFoldImages.parfumA && (
                <img
                  src={belowFoldImages.parfumA}
                  alt="Arvia Sanat atölye görseli 2"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={220}
                />
              )}
            </div>
            <div className="atolyeler-image-card" style={{ backgroundColor: "#f5efe6", minHeight: 220 }}>
              {belowFoldImages.sepet && (
                <img
                  src={belowFoldImages.sepet}
                  alt="Arvia Sanat atölye görseli 3"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={220}
                />
              )}
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
                <Suspense fallback={<span style={{ width: 22, height: 22 }} />}>
                  <FaAward aria-hidden />
                </Suspense>
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
                <Suspense fallback={<span style={{ width: 22, height: 22 }} />}>
                  <FaPalette aria-hidden />
                </Suspense>
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
