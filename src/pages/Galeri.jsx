import React, { useState } from "react";
import img1 from "../resimler/im1.webp";
import img2 from "../resimler/im2.webp";
import img3 from "../resimler/im3.webp";
import img4 from "../resimler/im4.webp";
import img7 from "../resimler/im7.webp";
import img9 from "../resimler/im9.webp";
import img10 from "../resimler/im10.webp";
import b from "../resimler/b.webp";
import c from "../resimler/c.webp";
import kk from "../resimler/kk.webp";
import dd from "../resimler/dd.webp";
import tt from "../resimler/tt.webp";
import cc from "../resimler/cc.webp";
import hh from "../resimler/hh.webp";
import baglama from "../resimler/baglam.webp";
import bater from "../resimler/bater.webp";
import klarnet from "../resimler/klarnet.webp";
import gitar from "../resimler/gitar.webp";
const galeriResimleri = [
  { src: img1, alt: "Arvia Sanat atölye" },
  { src: img2, alt: "Arvia Sanat atölye" },
  { src: bater, alt: "Arvia Sanat atölye" },
  { src: img3, alt: "Arvia Sanat atölye" },
  { src: img4, alt: "Arvia Sanat atölye" },
  { src: img7, alt: "Arvia Sanat atölye" },
  { src: img9, alt: "Arvia Sanat atölye" },
  { src: img10, alt: "Arvia Sanat atölye" },
  { src: b, alt: "Arvia Sanat atölye" },
  { src: c, alt: "Arvia Sanat atölye" },
  { src: kk, alt: "Arvia Sanat atölye" },
  { src: gitar, alt: "Arvia Sanat atölye" },
  { src: dd, alt: "Arvia Sanat atölye" },
  { src: klarnet, alt: "Arvia Sanat atölye" },
  { src: rrr, alt: "Arvia Sanat atölye" },
  { src: tt, alt: "Arvia Sanat atölye" },
  { src: cc, alt: "Arvia Sanat atölye" },
  { src: hh, alt: "Arvia Sanat atölye" },
  { src: baglama, alt: "Arvia Sanat atölye" },



];

const Galeri = () => {
  const [seciliIndex, setSeciliIndex] = useState(null);

  const handleResimClick = (index) => {
    setSeciliIndex(index);
  };

  const handleKapat = () => {
    setSeciliIndex(null);
  };

  const handleOnceki = (e) => {
    e.stopPropagation();
    if (seciliIndex === null) return;
    setSeciliIndex((prev) =>
      prev === 0 ? galeriResimleri.length - 1 : prev - 1
    );
  };

  const handleSonraki = (e) => {
    e.stopPropagation();
    if (seciliIndex === null) return;
    setSeciliIndex((prev) =>
      prev === galeriResimleri.length - 1 ? 0 : prev + 1
    );
  };

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
              onClick={handleOnceki}
              aria-label="Önceki resim"
            >
              ‹
            </button>
            <img
              src={galeriResimleri[seciliIndex].src}
              alt={galeriResimleri[seciliIndex].alt}
            />
            <button
              type="button"
              className="galeri-modal-arrow galeri-modal-arrow-right"
              onClick={handleSonraki}
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
