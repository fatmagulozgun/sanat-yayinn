import React, { useState, useEffect } from "react";
import img2 from "../resimler/im2.webp";
import img4 from "../resimler/im4.webp";
import img9 from "../resimler/im9.webp";
import img10 from "../resimler/im10.webp";
import sepet from "../resimler/sepet.webp";
import mandala from "../resimler/mandala.webp";
import kece from "../resimler/kece.webp";
import psikoloji from "../resimler/psikoloji.webp";
import icimdekiCocuk from "../resimler/icimdekiCocuk.webp";
import parfum from "../resimler/parfum.webp";
import baglama from "../resimler/baglam.webp";
import bater from "../resimler/bater.webp";
import klarnet from "../resimler/klarnet.webp";
import ne1 from "../resimler/ne1.webp";
import ne2 from "../resimler/ne2.webp";
import ne3 from "../resimler/ne3.webp";
import ne4 from "../resimler/ne4.webp";
import ne6 from "../resimler/ne6.webp";
import ne7 from "../resimler/ne7.webp";
import pp from "../resimler/pp.webp";
import pp1 from "../resimler/pp1.webp";
import pp2 from "../resimler/pp2.webp";
import pp3 from "../resimler/pp3.webp";
import pp4 from "../resimler/pp4.webp";
import pp5 from "../resimler/pp5.webp";
import pp6 from "../resimler/pp6.webp";
import pp7 from "../resimler/pp7.webp";
import pp8 from "../resimler/pp8.webp";
import pp9 from "../resimler/pp9.webp";

import gitar from "../resimler/gitar.webp";
const galeriResimleri = [
  { src: img2, alt: "Arvia Sanat atölye" },
  { src: bater, alt: "Arvia Sanat atölye" },
  { src: img4, alt: "Arvia Sanat atölye" },
  { src: img9, alt: "Arvia Sanat atölye" },
  { src: pp2, alt: "Arvia Sanat atölye" },
  { src: img10, alt: "Arvia Sanat atölye" },
  { src: sepet, alt: "Arvia Sanat atölye" },
  { src: kece, alt: "Arvia Sanat atölye" },
  { src: gitar, alt: "Arvia Sanat atölye" },
  { src: psikoloji, alt: "Arvia Sanat atölye" },
  { src: pp9, alt: "Arvia Sanat atölye" },
  { src: parfum, alt: "Arvia Sanat atölye" },
  { src: pp, alt: "Arvia Sanat atölye" },
  { src: baglama, alt: "Arvia Sanat atölye" },
  { src: ne1, alt: "Arvia Sanat atölye" },
  { src: ne2, alt: "Arvia Sanat atölye" },
  { src: mandala, alt: "Arvia Sanat atölye" },
  { src: ne4, alt: "Arvia Sanat atölye" },
  { src: ne6, alt: "Arvia Sanat atölye" },
  { src: ne3, alt: "Arvia Sanat atölye" },
  { src: pp2, alt: "Arvia Sanat atölye" },
  { src: klarnet, alt: "Arvia Sanat atölye" },
  { src: pp6, alt: "Arvia Sanat atölye" },
  { src: pp8, alt: "Arvia Sanat atölye" },
  { src: icimdekiCocuk, alt: "Arvia Sanat atölye" },
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
                  src={resim.src}
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
