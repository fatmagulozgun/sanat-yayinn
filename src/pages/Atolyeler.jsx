import React, { useState, useEffect } from "react";
import { FaPalette, FaHandSparkles, FaTheaterMasks, FaPaintBrush } from "react-icons/fa";
import b from "../resimler/b.png";
import c from "../resimler/c.png";
import kk from "../resimler/kk.jpeg";
import dd from "../resimler/dd.jpg";
import rrr from "../resimler/rrr.webp";
import tt from "../resimler/tt.jpg";
import cc from "../resimler/cc.png";
import hh from "../resimler/hh.jpeg";

const atolyeler = [
  {
    id: "seramik-bardak",
    baslik: "Seramik Bardak Yapımı",
    kategori: "seramik-dogal",
    aciklama:
      "Bu atölyede katılımcılar, seramik sanatının temel şekillendirme tekniklerini uygulamalı olarak deneyimler. Tasarım süreci; çamurun hazırlanması, form verilmesi ve yüzey düzenleme aşamalarını kapsayacak şekilde planlanır. Katılımcılar kendi tasarladıkları bardakları üretme fırsatı bulur; üretim sürecinde sabır, el becerisi ve estetik bakış açısı geliştirir. Atölye sonunda ortaya çıkan özgün çalışmalar, sanatsal üretimin somut ve kalıcı bir deneyime dönüşmesini sağlar.",
  },
  {
    id: "bambu-sepet",
    baslik: "Bambudan Sepet Yapımı",
    kategori: "seramik-dogal",
    aciklama:
      "Doğal malzeme ile üretim bilincini geliştirmeyi amaçlayan bu atölye, el sanatları geleneğini çağdaş bir yaklaşımla buluşturur. Katılımcılar bambu malzemenin yapısını tanır, temel örme tekniklerini öğrenir ve kendi sepet tasarımlarını oluşturur. Süreç boyunca el-göz koordinasyonu, dikkat ve sabır becerileri desteklenir. Bu çalışma aynı zamanda sürdürülebilir üretim anlayışını teşvik eden bir içerik sunar.",
  },
  {
    id: "kabak-susleme",
    baslik: "Kabak Süsleme",
    kategori: "seramik-dogal",
    aciklama:
      "Kabak Süsleme Atölyesi, doğal malzeme üzerinde dekoratif tasarım uygulamalarını öğretir. Katılımcılar yüzey süsleme teknikleri ile estetik ve özgün ürünler tasarlar.",
  },
  {
    id: "makrome",
    baslik: "Makrome",
    kategori: "seramik-dogal",
    aciklama:
      "Makrome Atölyesi, düğüm teknikleri ve ip düzenleme yöntemlerini sistemli bir şekilde öğretir. Katılımcılar el becerilerini geliştirirken dekoratif ve fonksiyonel tasarımlar üretir.",
  },
  {
    id: "bez-canta",
    baslik: "Bez Çanta Boyama",
    kategori: "boyama-yuzey",
    aciklama:
      "Bez Çanta Boyama Atölyesi, tekstil yüzey üzerinde tasarım ve renk uygulama tekniklerini öğretir. Katılımcılar kendi özgün desenlerini oluşturur ve günlük kullanım için estetik ve işlevsel ürünler tasarlar.",
  },
  {
    id: "ahsap-boyama",
    baslik: "Ahşap Boyama",
    kategori: "boyama-yuzey",
    aciklama:
      "Ahşap Boyama Atölyesi, yüzey hazırlama ve dekoratif boyama tekniklerini uygulamalı olarak sunar. Katılımcılar renk, desen ve doku çalışmalarıyla estetik bakış açılarını geliştirir.",
  },
  {
    id: "mandala",
    baslik: "Mandala",
    kategori: "boyama-yuzey",
    aciklama:
      "Mandala Atölyesi, tekrar eden desenler ve noktalama tekniği ile konsantrasyon ve içsel dengeyi destekler. Katılımcılar tuval veya taş yüzey üzerinde ritmik ve simetrik tasarımlar oluşturur.",
  },
  {
    id: "string-art",
    baslik: "String Art",
    kategori: "boyama-yuzey",
    aciklama:
      "String Art Atölyesi, çivi ve ip kullanarak geometrik ve figüratif tasarımlar oluşturmayı öğretir. Katılımcılar planlama, ölçü ve kompozisyon becerilerini geliştirerek özgün çalışmalar üretir.",
  },
  {
    id: "igne-kece",
    baslik: "İğne Keçe Figür",
    kategori: "tekstil-lif",
    aciklama:
      "İğne Keçe Atölyesi, yün liflerinin şekillendirilmesiyle üç boyutlu figürler oluşturmayı öğretir. Katılımcılar detay odaklı çalışma ve el koordinasyonu becerilerini geliştirir.",
  },
  {
    id: "kece-bros",
    baslik: "Keçe Broş",
    kategori: "tekstil-lif",
    aciklama:
      "Keçe Broş Tasarımı Atölyesi, tekstil temelli aksesuar üretimine odaklanır. Katılımcılar özgün tasarımlar geliştirir ve el emeği ürünler ortaya koyar.",
  },
  {
    id: "hat-sanati",
    baslik: "Hat Sanatı",
    kategori: "geleneksel-estetik",
    aciklama:
      "Hat Sanatı Atölyesi, geleneksel yazı sanatının temel tekniklerini öğretir. Katılımcılar harf formu, ölçü ve estetik denge üzerine çalışarak disiplinli bir üretim süreci deneyimler.",
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
      "Parfüm Yapımı Atölyesi, koku notalarının yapısını ve uyumunu öğretmeyi amaçlar. Katılımcılar üst, orta ve alt notaları tanır; kendi kişisel koku formüllerini oluşturur. Bu süreç, duyusal farkındalığı ve yaratıcı üretim becerisini destekler.",
  },
];

const atolyeGruplari = [
  {
    id: "seramik-dogal",
    baslik: "Seramik & Doğal Malzeme Atölyeleri",
    aciklama:
      "Bu atölyede katılımcılar, seramik sanatının temel şekillendirme tekniklerini uygulamalı olarak deneyimler. Tasarım süreci; çamurun hazırlanması, form verilmesi ve yüzey düzenleme aşamalarını kapsayacak şekilde planlanır. Katılımcılar kendi tasarladıkları bardakları üretme fırsatı bulur; üretim sürecinde sabır, el becerisi ve estetik bakış açısı geliştirir. Atölye sonunda ortaya çıkan özgün çalışmalar, sanatsal üretimin somut ve kalıcı bir deneyime dönüşmesini sağlar.",
    img: b,
    icon: FaHandSparkles,
  },
  {
    id: "boyama-yuzey",
    baslik: "Boyama & Yüzey Tasarım Atölyeleri",
    aciklama:
      "Doğal malzeme ile üretim bilincini geliştirmeyi amaçlayan bu atölye, el sanatları geleneğini çağdaş bir yaklaşımla buluşturur. Katılımcılar bambu malzemenin yapısını tanır, temel örme tekniklerini öğrenir ve kendi sepet tasarımlarını oluşturur. Süreç boyunca el-göz koordinasyonu, dikkat ve sabır becerileri desteklenir. Bu çalışma aynı zamanda sürdürülebilir üretim anlayışını teşvik eden bir içerik sunar.",
    img: c,
    icon: FaPalette,
  },
  {
    id: "tekstil-lif",
    baslik: "Tekstil & Lif Sanatları",
    aciklama:
      "Psikoloji ve müziği bir araya getiren disiplinler arası bir çalışmadır. Uzman psikolog eşliğinde gerçekleştirilen bilgilendirme sürecinin ardından, canlı piyano dinletisi eşliğinde katılımcılar çocukluklarına ait bir anıyı resimle ifade eder; çalışmalar psikolojik değerlendirme ve farkındalık süreciyle ele alınır. Atölye, çocukluklarına yazılan mektuplarla tamamlanır ve katılımcıların duygusal içgörü geliştirmeleri hedeflenir.",
    img: kk,
    icon: FaTheaterMasks,
  },
  {
    id: "geleneksel-estetik",
    baslik: "Geleneksel & Estetik Sanatlar",
    aciklama:
      "Parfüm Yapımı Atölyesi, koku notalarının yapısını ve uyumunu öğretmeyi amaçlar. Katılımcılar üst, orta ve alt notaları tanır; kendi kişisel koku formüllerini oluşturur. Bu süreç, duyusal farkındalığı ve yaratıcı üretim becerisini destekler.",
    img: dd,
    icon: FaPaintBrush,
  },
  {
    id: "psikoloji-farkindalik",
    baslik: "Psikoloji & Farkındalık Atölyeleri",
    aciklama:
      "\"İçimdeki Çocukluğa Yolculuk\" atölyesi; psikoloji ve müziği bir araya getiren disiplinler arası bir çalışmadır. Uzman psikolog eşliğinde gerçekleştirilen bilgilendirme sürecinin ardından, canlı piyano dinletisi eşliğinde katılımcılar çocukluklarına ait bir anıyı resimle ifade eder; çalışmalar psikolojik değerlendirme ve farkındalık süreciyle ele alınır. Atölye, çocukluklarına yazılan mektuplarla tamamlanır ve katılımcıların duygusal içgörü geliştirmeleri hedeflenir.",
    img: cc,
    icon: FaTheaterMasks,
  },
  {
    id: "duyusal-yaratici",
    baslik: "Duyusal & Yaratıcı Üretim",
    aciklama:
      "Parfüm Yapımı Atölyesi, koku notalarının yapısını ve uyumunu öğretmeyi amaçlar. Katılımcılar üst, orta ve alt notaları tanır; kendi kişisel koku formüllerini oluşturur. Bu süreç, duyusal farkındalığı ve yaratıcı üretim becerisini destekler.",
    img: hh,
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
          <p className="brans-intro">
            Arvia Sanat olarak yalnızca düzenli eğitim programları sunmakla kalmıyor; deneyim odaklı,
            disiplinler arası ve üretim temelli atölye çalışmaları da düzenliyoruz. Workshop
            programlarımız, katılımcıların kısa süre içerisinde yoğunlaştırılmış bir içerikle hem
            teknik beceri hem de kişisel farkındalık kazanmalarını hedefler.
          </p>
        </header>

        <div className="brans-list">
          {grupBazliAtolyeler.map((grup, index) => (
            <section
              key={grup.id}
              id={grup.id}
              className={`brans-detail ${index % 2 === 1 ? "brans-detail-reverse" : ""}`}
            >
              <div className="brans-detail-image">
                <img src={grup.img} alt={grup.baslik} loading="lazy" />
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
