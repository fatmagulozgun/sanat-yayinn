import React, { useMemo, useState, useEffect } from "react";
import img2K from "../resimler/im2K.webp";
import img9K from "../resimler/im9K.webp";
import sepetK from "../resimler/sepetK.webp";
import mandalaK from "../resimler/mandalaK.webp";
import keceK from "../resimler/keceK.webp";
import icimdekiCocukK from "../resimler/icimdekiCocukK.webp";
import parfumK from "../resimler/parfumK.webp";
import baglamaK from "../resimler/baglamK.webp";
import baterK from "../resimler/baterK.webp";
import klarnetK from "../resimler/klarnetK.webp";
import ne2K from "../resimler/ne2K.webp";
import ne3K from "../resimler/ne3K.webp";
import ne4K from "../resimler/ne4K.webp";
import ne7K from "../resimler/ne7K.webp";
import sa1K from "../resimler/sa1K.webp";
import sa5K from "../resimler/sa5K.webp";
import sa7K from "../resimler/sa7K.webp";
import sa8K from "../resimler/sa8K.webp";
import imageeeeK from "../resimler/imageeeeK.webp";
import ucK from "../resimler/3K.webp";
import kck1 from "../resimler/kck1.webp";
import kck2 from "../resimler/kck2.webp";
import kck3 from "../resimler/kck3.webp";
import kck4 from "../resimler/kck4.webp";
import kck5 from "../resimler/kck5.webp";
import kck6 from "../resimler/kck6.webp";
import kck7 from "../resimler/kck7.webp";
import kck9 from "../resimler/kck9.webp";
import kck10 from "../resimler/kck10.webp";
import kck11 from "../resimler/kck11.webp";


const galeriResimleri = [
  { srcPath: "../resimler/im2.webp", thumb: img2K, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/bater.webp", thumb: baterK, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/im9.webp", thumb: img9K, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/klarnet.webp", thumb: klarnetK, alt: "Arvia Sanat atölye" },

  { srcPath: "../resimler/sa1.webp", thumb: sa1K, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/sepet.webp", thumb: sepetK, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/kece.webp", thumb: keceK, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/byk10.webp", thumb: kck10, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/parfum.webp", thumb: parfumK, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/sa8.webp", thumb: sa8K, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/baglam.webp", thumb: baglamaK, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/ne7.webp", thumb: ne7K, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/ne2.webp", thumb: ne2K, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/mandala.webp", thumb: mandalaK, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/ne4.webp", thumb: ne4K, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/byk2.webp", thumb: kck2, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/3.webp", thumb: ucK, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/ne3.webp", thumb: ne3K, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/sa7.webp", thumb: sa7K, alt: "Arvia Sanat atölye" },

  { srcPath: "../resimler/imageeee.webp", thumb: imageeeeK, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/sa5.webp", thumb: sa5K, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/byk1.webp", thumb: kck1, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/icimdekiCocuk.webp", thumb: icimdekiCocukK, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/byk3.webp", thumb: kck3, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/byk4.webp", thumb: kck4, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/byk6.webp", thumb: kck6, alt: "Arvia Sanat atölye" },

  { srcPath: "../resimler/byk5.webp", thumb: kck5, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/byk7.webp", thumb: kck7, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/byk9.webp", thumb: kck9, alt: "Arvia Sanat atölye" },
  { srcPath: "../resimler/byk11.webp", thumb: kck11, alt: "Arvia Sanat atölye" },
];


const Galeri = () => {
  const [seciliIndex, setSeciliIndex] = useState(null);
  const [fullSrcByIndex, setFullSrcByIndex] = useState({});
  const [visibleCount, setVisibleCount] = useState(8);

  const fullImageLoaders = useMemo(() => {
    // Tam boy görselleri sadece gerektiğinde (modal açılınca) yükle.
    return import.meta.glob("../resimler/*.webp");
  }, []);

  const handleResimClick = (index) => {
    setSeciliIndex(index);
  };

  const handleKapat = () => {
    setSeciliIndex(null);
  };

  useEffect(() => {
    // İlk boyamada sadece ilk ekranı dolduracak kadar kart çiz.
    // Sonrasında tarayıcı boşta kalınca kalanları ekle.
    let timeoutId = null;
    let idleId = null;

    const revealAll = () => setVisibleCount(galeriResimleri.length);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(revealAll, { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(revealAll, 700);
    }

    return () => {
      if (idleId !== null && typeof window !== "undefined" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  const goOnceki = () => {
    if (seciliIndex === null) return;
    setSeciliIndex((prev) =>
      prev === 0 ? galeriResimleri.length - 1 : prev - 1
    );
  };

  const goSonraki = () => {
    if (seciliIndex === null) return;
    setSeciliIndex((prev) =>
      prev === galeriResimleri.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (seciliIndex === null) return;

    const selected = galeriResimleri[seciliIndex];
    if (selected?.srcPath && !fullSrcByIndex[seciliIndex]) {
      const loader = fullImageLoaders[selected.srcPath];
      if (loader) {
        loader().then((mod) => {
          const url = mod?.default;
          if (!url) return;
          setFullSrcByIndex((prev) => {
            if (prev[seciliIndex]) return prev;
            return { ...prev, [seciliIndex]: url };
          });
        });
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goSonraki();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goOnceki();
      } else if (event.key === "Escape") {
        event.preventDefault();
        handleKapat();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [seciliIndex, fullImageLoaders, fullSrcByIndex]);

  return (
    <main className="galeri-page">
      <div className="container">
        <header className="galeri-header">
          <h1 className="galeri-page-title">GALERİ</h1>
          <p className="galeri-intro">
            Arvia Sanat atölyelerinden, eğitim programlarından ve sanatsal çalışmalarımızdan
            kareler. Müzik, resim, dans ve tiyatro alanındaki yolculuğumuzu keşfedin.
          </p>
        </header>

        <div className="galeri-grid">
          {galeriResimleri.slice(0, visibleCount).map((resim, index) => (
            <button
              key={index}
              type="button"
              className="galeri-kart"
              onClick={() => handleResimClick(index)}
              aria-label={`${resim.alt} - Büyütmek için tıklayın`}
            >
              <div className="galeri-kart-image">
                <img
                  src={resim.thumb || resim.src}
                  alt={resim.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                  width={600}
                  height={450}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {seciliIndex !== null && (
        <div
          className="galeri-modal-overlay"
          onClick={handleKapat}
          role="dialog"
          aria-modal="true"
          aria-label="Resim önizleme"
        >
          <button
            type="button"
            className="galeri-modal-kapat"
            onClick={handleKapat}
            aria-label="Kapat"
          >
            ×
          </button>
          <div
            className="galeri-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="galeri-modal-counter">
              {seciliIndex + 1}/{galeriResimleri.length}
            </div>
            <button
              type="button"
              className="galeri-modal-arrow galeri-modal-arrow-left"
              onClick={(e) => {
                e.stopPropagation();
                goOnceki();
              }}
              aria-label="Önceki resim"
            >
              ‹
            </button>
            <div className="galeri-modal-image">
              <img
                src={fullSrcByIndex[seciliIndex] || galeriResimleri[seciliIndex].thumb}
                alt={galeriResimleri[seciliIndex].alt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <button
              type="button"
              className="galeri-modal-arrow galeri-modal-arrow-right"
              onClick={(e) => {
                e.stopPropagation();
                goSonraki();
              }}
              aria-label="Sonraki resim"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Galeri;
