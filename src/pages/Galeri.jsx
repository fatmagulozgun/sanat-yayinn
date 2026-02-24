import React, { useState, useEffect } from "react";
import img2 from "../resimler/im2.webp";
import img2K from "../resimler/im2K.webp";
import img4 from "../resimler/im4.webp";
import img4K from "../resimler/im4K.webp";
import img9 from "../resimler/im9.webp";
import img9K from "../resimler/im9K.webp";
import img10 from "../resimler/im10.webp";
import img10K from "../resimler/im10K.webp";
import sepet from "../resimler/sepet.webp";
import sepetK from "../resimler/sepetK.webp";
import mandala from "../resimler/mandala.webp";
import mandalaK from "../resimler/mandalaK.webp";
import kece from "../resimler/kece.webp";
import keceK from "../resimler/keceK.webp";
import psikoloji from "../resimler/psikoloji.webp";
import psikolojiK from "../resimler/psikolojiK.webp";
import icimdekiCocuk from "../resimler/icimdekiCocuk.webp";
import icimdekiCocukK from "../resimler/icimdekiCocukK.webp";
import parfum from "../resimler/parfum.webp";
import parfumK from "../resimler/parfumK.webp";
import baglama from "../resimler/baglam.webp";
import baglamaK from "../resimler/baglamK.webp";
import bater from "../resimler/bater.webp";
import baterK from "../resimler/baterK.webp";
import klarnet from "../resimler/klarnet.webp";
import klarnetK from "../resimler/klarnetK.webp";
import ne2 from "../resimler/ne2.webp";
import ne2K from "../resimler/ne2K.webp";
import ne3 from "../resimler/ne3.webp";
import ne3K from "../resimler/ne3K.webp";
import ne4 from "../resimler/ne4.webp";
import ne4K from "../resimler/ne4K.webp";
import ne6 from "../resimler/ne6.webp";
import ne6K from "../resimler/ne6K.webp";
import ne7 from "../resimler/ne7.webp";
import ne7K from "../resimler/ne7K.webp";
import sa1 from "../resimler/sa1.webp";
import sa1K from "../resimler/sa1K.webp";
import sa2 from "../resimler/sa2.webp";
import sa4 from "../resimler/sa4.webp";
import sa4K from "../resimler/sa4K.webp";
import sa5 from "../resimler/sa5.webp";
import sa5K from "../resimler/sa5K.webp";
import sa7 from "../resimler/sa7.webp";
import sa7K from "../resimler/sa7K.webp";
import sa8 from "../resimler/sa8.webp";
import sa8K from "../resimler/sa8K.webp";
import imageeee from "../resimler/imageeee.webp";
import imageeeeK from "../resimler/imageeeeK.webp";

const galeriResimleri = [
  { src: img2, thumb: img2K, alt: "Arvia Sanat atölye" },
  { src: bater, thumb: baterK, alt: "Arvia Sanat atölye" },
  { src: img4, thumb: img4K, alt: "Arvia Sanat atölye" },
  { src: img9, thumb: img9K, alt: "Arvia Sanat atölye" },
  { src: sa7, thumb: sa7K, alt: "Arvia Sanat atölye" },
  { src: img10, thumb: img10K, alt: "Arvia Sanat atölye" },
  { src: sa1, thumb: sa1K, alt: "Arvia Sanat atölye" },
  { src: sepet, thumb: sepetK, alt: "Arvia Sanat atölye" },
  { src: kece, thumb: keceK, alt: "Arvia Sanat atölye" },
  { src: psikoloji, thumb: psikolojiK, alt: "Arvia Sanat atölye" },
  { src: parfum, thumb: parfumK, alt: "Arvia Sanat atölye" },
  { src: sa8, thumb: sa8K, alt: "Arvia Sanat atölye" },
  { src: baglama, thumb: baglamaK, alt: "Arvia Sanat atölye" },
  { src: ne7, thumb: ne7K, alt: "Arvia Sanat atölye" },
  { src: ne2, thumb: ne2K, alt: "Arvia Sanat atölye" },
  { src: mandala, thumb: mandalaK, alt: "Arvia Sanat atölye" },
  { src: ne4, thumb: ne4K, alt: "Arvia Sanat atölye" },
  { src: sa4, thumb: sa4K, alt: "Arvia Sanat atölye" },
  { src: ne6, thumb: ne6K, alt: "Arvia Sanat atölye" },
  { src: ne3, thumb: ne3K, alt: "Arvia Sanat atölye" },
  { src: klarnet, thumb: klarnetK, alt: "Arvia Sanat atölye" },
  { src: imageeee, thumb: imageeeeK, alt: "Arvia Sanat atölye" },
  { src: sa5, thumb: sa5K, alt: "Arvia Sanat atölye" },
  { src: icimdekiCocuk, thumb: icimdekiCocukK, alt: "Arvia Sanat atölye" },
];


const Galeri = () => {
  const [seciliIndex, setSeciliIndex] = useState(null);

  const handleResimClick = (index) => {
    setSeciliIndex(index);
  };

  const handleKapat = () => {
    setSeciliIndex(null);
  };

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
  }, [seciliIndex]);

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
          {galeriResimleri.map((resim, index) => (
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
                  loading="lazy"
                  width={600}
                  height={450}
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
                src={galeriResimleri[seciliIndex].src}
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
