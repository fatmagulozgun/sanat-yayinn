import React, { useState, useEffect } from "react";
import { FaPalette, FaHandSparkles, FaTheaterMasks, FaPaintBrush } from "react-icons/fa";

import sepetA from "../resimler/sepetA.webp";

const SEPET_K_PUBLIC = "/images/sepetK.webp";
import mandalaK from "../resimler/mandalaK.webp";
import mandalaA from "../resimler/mandalaA.webp";
import keceK from "../resimler/keceK.webp";
import kece from "../resimler/kece.webp";
import ddK from "../resimler/ddK.webp";
import dd from "../resimler/dd.webp";
import icimdekiCocukK from "../resimler/icimdekiCocukK.webp";
import icimdekiCocuk from "../resimler/icimdekiCocuk.webp";
import parfumK from "../resimler/parfumK.webp";
import parfumS from "../resimler/parfumS.webp";

const atolyeler = [
  {
    id: "seramik-bardak",
    baslik: "Seramik Bardak Yapımı",
    kategori: "seramik-dogal",
    aciklama:
      "Katılımcılar seramik çamuruyla kendi bardak tasarımlarını oluşturur ve temel şekillendirme tekniklerini öğrenir. Form verme, düzeltme ve yüzey detaylandırma aşamaları uygulamalı olarak deneyimlenir. Atölye sonunda kişiye özel, kullanıma hazır özgün bir seramik bardak ortaya çıkar.",
  },
  {
    id: "bambu-sepet",
    baslik: "Bambudan Sepet Yapımı",
    kategori: "seramik-dogal",
    aciklama:
      "Doğal bambu malzemesiyle geleneksel örme teknikleri uygulanarak işlevsel sepetler üretilir. Katılımcılar sabır ve el koordinasyonu gerektiren üretim sürecini adım adım deneyimler. Çalışma sonunda hem dekoratif hem de kullanılabilir bir tasarım elde edilir.",
  },
  {
    id: "kabak-susleme",
    baslik: "Kabak Süsleme",
    kategori: "seramik-dogal",
    aciklama:
      "Doğal kabak yüzeyleri temizlenir, oyma ve desen teknikleriyle özgün tasarımlar oluşturulur. Katılımcılar ışık ve form ilişkisini keşfederek dekoratif objeler tasarlar. Atölye sonunda estetik ve el yapımı bir dekor ürünü ortaya çıkar.",
  },
  {
    id: "makrome",
    baslik: "Makrome",
    kategori: "seramik-dogal",
    aciklama:
      "Makrome atölyesinde düğüm teknikleri öğrenilerek dekoratif tasarımlar hazırlanır. Katılımcılar ip ile form oluşturmanın temel prensiplerini uygulamalı şekilde deneyimler. Süreç sonunda duvar süsü ya da aksesuar olarak kullanılabilecek özgün bir ürün ortaya çıkar.",
  },
  {
    id: "bez-canta",
    baslik: "Bez Çanta Boyama",
    kategori: "boyama-yuzey",
    aciklama:
      "Tekstil yüzey üzerinde tasarım ve renk uygulama tekniklerini öğretir. Katılımcılar kendi özgün desenlerini oluşturur ve günlük kullanım için estetik ve işlevsel ürünler tasarlar.",
  },
  {
    id: "ahsap-boyama",
    baslik: "Ahşap Boyama",
    kategori: "boyama-yuzey",
    aciklama:
      "Yüzey hazırlama ve dekoratif boyama tekniklerini uygulamalı olarak sunar. Katılımcılar renk, desen ve doku çalışmalarıyla estetik bakış açılarını geliştirir.",
  },
  {
    id: "mandala",
    baslik: "Mandala",
    kategori: "boyama-yuzey",
    aciklama:
      "Tekrar eden desenler ve noktalama tekniği ile konsantrasyon ve içsel dengeyi destekler. Katılımcılar tuval veya taş yüzey üzerinde ritmik ve simetrik tasarımlar oluşturur.",
  },
  {
    id: "string-art",
    baslik: "String Art (İp Çivi Sanatı)",
    kategori: "boyama-yuzey",
    aciklama:
      "Çivi ve ip kullanarak geometrik ve figüratif tasarımlar oluşturmayı öğretir. Katılımcılar planlama, ölçü ve kompozisyon becerilerini geliştirerek özgün çalışmalar üretir.",
  },
  {
    id: "igne-kece",
    baslik: "İğne Keçe Figür",
    kategori: "tekstil-lif",
    aciklama:
      "Yün liflerinin şekillendirilmesiyle üç boyutlu figürler oluşturmayı öğretir. Katılımcılar detay odaklı çalışma ve el koordinasyonu becerilerini geliştirir.",
  },
  {
    id: "kece-bros",
    baslik: "Keçe Broş",
    kategori: "tekstil-lif",
    aciklama:
      "Tekstil temelli aksesuar üretimine odaklanır. Katılımcılar özgün tasarımlar geliştirir ve el emeği ürünler ortaya koyar.",
  },
  {
    id: "hat-sanati",
    baslik: "Hat Sanatı",
    kategori: "geleneksel-estetik",
    aciklama:
      "Geleneksel yazı sanatının temel tekniklerini öğretir. Katılımcılar harf formu, ölçü ve estetik denge üzerine çalışarak disiplinli bir üretim süreci deneyimler.",
  },
  {
    id: "icimdeki-cocukluk",
    baslik: "İçimdeki Çocukluğa Yolculuk",
    kategori: "psikoloji-farkindalik",
    aciklama:
      "\"İçimdeki Çocukluğa Yolculuk\" atölyesi; psikoloji ve müziği bir araya getiren disiplinler arası bir çalışmadır. Uzman psikolog eşliğinde gerçekleştirilen bilgilendirme sürecinin ardından, canlı piyano dinletisi eşliğinde katılımcılar çocukluklarına ait bir anıyı resimle ifade eder; çalışmalar psikolojik değerlendirme ve farkındalık süreciyle ele alınır. Atölye, çocukluklarına yazılan mektuplarla tamamlanır ve katılımcıların duygusal içgörü geliştirmeleri hedeflenir.",
  },
  {
    id: "parfum",
    baslik: "Parfüm Yapımı",
    kategori: "duyusal-yaratici",
    aciklama:
      "Koku notalarının yapısını ve uyumunu öğretmeyi amaçlar. Katılımcılar üst, orta ve alt notaları tanır; kendi kişisel koku formüllerini oluşturur. Bu süreç, duyusal farkındalığı ve yaratıcı üretim becerisini destekler.",
  },
];

const atolyeGruplari = [
  {
    id: "seramik-dogal",
    baslik: "Seramik & Doğal Malzeme Atölyeleri",
    aciklama:
      "Bu atölyede katılımcılar, seramik sanatının temel şekillendirme tekniklerini uygulamalı olarak deneyimler. Tasarım süreci; çamurun hazırlanması, form verilmesi ve yüzey düzenleme aşamalarını kapsayacak şekilde planlanır. Katılımcılar kendi tasarladıkları bardakları üretme fırsatı bulur; üretim sürecinde sabır, el becerisi ve estetik bakış açısı geliştirir. Atölye sonunda ortaya çıkan özgün çalışmalar, sanatsal üretimin somut ve kalıcı bir deneyime dönüşmesini sağlar.",
    img: SEPET_K_PUBLIC,
    imgLarge: sepetA,
    icon: FaHandSparkles,
  },
  {
    id: "boyama-yuzey",
    baslik: "Boyama & Yüzey Tasarım Atölyeleri",
    aciklama:
      "Bu atölyede katılımcılar farklı yüzeyler üzerinde renk, doku ve desen uygulamalarını deneyimleyerek yaratıcı ifade alanlarını geliştirir. Ahşap, seramik ya da tuval gibi çeşitli materyaller üzerinde teknik bilgi ve estetik bakış açısı birlikte ele alınır. Süreç sonunda ortaya çıkan çalışmalar, katılımcının özgün tasarım anlayışını yansıtan kalıcı sanat ürünlerine dönüşür.",
    img: mandalaK,
    imgLarge: mandalaA,
    icon: FaPalette,
  },
  {
    id: "tekstil-lif",
    baslik: "Tekstil & Lif Sanatları",
    aciklama:
      "Bu atölyede katılımcılar yün ve keçe malzemeleriyle üç boyutlu figürler ve özgün broş tasarımları üretir. İğne keçe tekniğiyle liflerin şekillendirilmesi adım adım uygulanarak sabır ve detay odaklı çalışma becerisi geliştirilir. Süreç sonunda hem dekoratif hem de kullanılabilir, tamamen el yapımı özgün tasarımlar ortaya çıkar.",
    img: keceK,
    imgLarge: kece,
    icon: FaTheaterMasks,
  },
  {
    id: "geleneksel-estetik",
    baslik: "Geleneksel & Estetik Sanatlar",
    aciklama:
      "Bu atölyede katılımcılar hat sanatının temel yazı tekniklerini ve estetik kurallarını uygulamalı olarak öğrenir. Harf formu, ölçü ve kompozisyon dengesi üzerinde çalışılarak sabır ve dikkat gerektiren bir üretim süreci deneyimlenir. Atölye sonunda ortaya çıkan çalışmalar, geleneksel sanatın zarafetini yansıtan özgün eserler hâline dönüşür.",
    img: ddK,
    imgLarge: dd,
    icon: FaPaintBrush,
  },
  {
    id: "psikoloji-farkindalik",
    baslik: "Psikoloji & Farkındalık Atölyeleri",
    aciklama:
      "Bu atölye, psikoloji ve sanatı bir araya getirerek katılımcıların içsel farkındalıklarını geliştirmeyi hedefler. Uzman psikolog eşliğinde gerçekleştirilen bilgilendirme sürecinin ardından, müzik ve resim aracılığıyla çocukluk anıları yaratıcı bir şekilde ifade edilir. Çalışma, yazılan mektuplar ve paylaşımlar eşliğinde tamamlanarak katılımcının duygusal içgörü kazanması desteklenir.",
    img: icimdekiCocukK,
    imgLarge: icimdekiCocuk,
    icon: FaTheaterMasks,
  },
  {
    id: "duyusal-yaratici",
    baslik: "Duyusal & Yaratıcı Üretim",
    aciklama:
      "Bu atölyede katılımcılar esans notalarını tanıyarak koku hafızası ve duyusal farkındalık üzerine çalışır. Üst, orta ve alt notaların dengesi keşfedilerek kişiye özel parfüm formülleri oluşturulur. Süreç sonunda her katılımcı, karakterini yansıtan özgün ve imzalı bir parfüm tasarımıyla atölyeyi tamamlar.",
    img: parfumK,
    imgLarge: parfumS,
    icon: FaPaintBrush,
  },
];

const Atolyeler = () => {
  const [seciliAtolye, setSeciliAtolye] = useState(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleAtolyeClick = (atolye) => {
    setSeciliAtolye(atolye);
  };

  const handleModalKapat = () => {
    setSeciliAtolye(null);
  };

  const aktifGrup =
    seciliAtolye &&
    atolyeGruplari.find((grup) => grup.id === seciliAtolye.kategori);

  const ModalIcon = aktifGrup?.icon ?? FaPalette;

  const grupBazliAtolyeler = atolyeGruplari.map((grup) => ({
    ...grup,
    atolyeler: atolyeler.filter((a) => a.kategori === grup.id),
  }));

  return (
    <main className="brans-page">
      <div className="container">
        <header className="brans-header">
          <h1 className="brans-page-title">ATÖLYE (WORKSHOP) ÇALIŞMALARI</h1>
        </header>

        <div className="brans-list">
          {grupBazliAtolyeler.map((grup, index) => (
            <section
              key={grup.id}
              id={grup.id}
              className={`brans-detail ${index % 2 === 1 ? "brans-detail-reverse" : ""}`}
              style={index > 0 ? { contentVisibility: 'auto', containIntrinsicSize: '0 500px' } : undefined}
            >
              <div className="brans-detail-image">
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet={grup.imgLarge}
                  />
                  <img
                    src={grup.img}
                    alt={grup.baslik}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "low"}
                    decoding="async"
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </picture>
              </div>
              <div className="brans-detail-content">
                <div className="brans-detail-header">
                  <div className="brans-detail-icon">
                    <grup.icon aria-hidden />
                  </div>
                  <h2 className="brans-detail-title">{grup.baslik}</h2>
                </div>
                <p className="brans-detail-aciklama">{grup.aciklama}</p>
                {grup.atolyeler.length > 0 && (
                  <div className="enstruman-listesi">
                    {grup.atolyeler.map((atolye) => (
                      <div
                        key={atolye.id}
                        className="enstruman-kutusu"
                        onClick={() => handleAtolyeClick(atolye)}
                      >
                        {atolye.baslik}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>

      {seciliAtolye && (
        <div
          className="enstruman-modal-overlay"
          onClick={handleModalKapat}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="enstruman-modal-balon"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="enstruman-modal-kapat"
              onClick={handleModalKapat}
              aria-label="Kapat"
            >
              ×
            </button>
            <div
              className="enstruman-modal-ornament enstruman-modal-ornament-sol"
              aria-hidden="true"
            >
              <ModalIcon />
            </div>
            <div
              className="enstruman-modal-ornament enstruman-modal-ornament-sag"
              aria-hidden="true"
            >
              <ModalIcon />
            </div>
            <div className="enstruman-modal-eyebrow">ATÖLYE PROGRAMI</div>
            <h3 className="enstruman-modal-baslik">{seciliAtolye.baslik}</h3>
            <p className="enstruman-modal-metin">{seciliAtolye.aciklama}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Atolyeler;
