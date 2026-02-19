import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaMusic, FaPalette, FaChild, FaTheaterMasks } from "react-icons/fa";
import musicImg from "../Images/music.webp";
import resimImg from "../Images/resim.webp";
import dansImg from "../Images/dans.webp";
import tiyatroImg from "../Images/tiyatro.webp";

const enstrumanAciklamalari = {
  "Piyano":
    "Temel teknik becerilerden ileri düzey repertuvar çalışmalarına kadar yapılandırılmış bir eğitim programı uygulanır. Nota okuma, koordinasyon ve müzikal yorum becerileri geliştirilir.",
  "Keman":
    "Doğru duruş ve yay teknikleri temel alınarak sistemli bir eğitim sunulur. Öğrencinin teknik hakimiyeti ve müzikal ifade gücü eş zamanlı olarak geliştirilir.",
  "Gitar":
    "Klasik gitar altyapısı üzerine kurulu programda; akor, arpej ve repertuvar çalışmaları yürütülür. Solo ve eşlik becerileri kazandırılır.",
  "Bateri":
    "Ritim, koordinasyon ve tempo kontrolüne yönelik disiplinli çalışmalar yapılır. Farklı müzik türlerinde performans pratiği sağlanır.",
  "Darbuka-Perküsyon":
    "Geleneksel ve modern ritim kalıpları teknik altyapı ile öğretilir. Ritim algısının güçlendirilmesi hedeflenir.",
  "Bağlama":
    "Türk halk müziği repertuvarı doğrultusunda tezene teknikleri ve yöresel tavırlar sistemli şekilde öğretilir.",
  "Elektro Gitar":
    "Modern müzik türlerine yönelik teknik çalışmalar yürütülür. Solo teknikleri ve sahne performansı geliştirilir.",
  "Bas Gitar":
    "Ritim ve armoni ilişkisi üzerine yapılandırılmış bir program uygulanır. Grup performansına yönelik çalışmalar yapılır.",
  "Viyolonsel":
    "Temel yay ve pozisyon teknikleri üzerine kurulu eğitim; klasik repertuvar ile desteklenir.",
  "Yan Flüt":
    "Nefes kontrolü, ton üretimi ve teknik gelişim üzerine yoğunlaşılır. Solo ve topluluk repertuvarı çalışmaları yapılır.",
  "Klarnet":
    "Nefes ve parmak koordinasyonu geliştirilir. Türk müziği repertuvarı çerçevesinde teknik ve yorum becerileri kazandırılır.",
  "Ud":
    "Geleneksel Türk müziğinin temel çalgılarından biri olan udun teknik ve icra özelliklerini sistemli bir program çerçevesinde öğretmeyi amaçlar. Eğitim sürecinde doğru tutuş ve mızrap teknikleri, makam bilgisi ve repertuvar çalışmaları birlikte yürütülür. Öğrencilerin hem teknik hakimiyet hem de müzikal ifade becerileri geliştirilerek geleneksel müzik kültürüne bilinçli ve donanımlı bir yaklaşım kazanmaları hedeflenir.",
  "Tuval Boyama":
    "Kompozisyon ve renk bilgisi temelli çalışmalar yürütülür. Öğrencinin bireysel sanat dili geliştirilir.",
  "Yağlı Boya":
    "Katmanlı çalışma teknikleri ve doku oluşturma yöntemleri öğretilir. Akademik ve çağdaş yaklaşımlar bir arada sunulur.",
  "Kara Kalem":
    "Işık-gölge, oran-orantı ve perspektif çalışmalarıyla temel çizim disiplini kazandırılır.",
  "Seramik":
    "Üç boyutlu tasarım anlayışı geliştirilir. Şekillendirme ve sırlama teknikleri uygulamalı olarak öğretilir.",
  "Ahşap Boyama":
    "Dekoratif tasarım ve yüzey uygulama teknikleri öğretilir. Yaratıcı üretim süreçleri desteklenir.",
  "Desen":
    "Desen eğitimi; görsel sanatların temelini oluşturan çizim disiplinini sistemli bir yaklaşımla kazandırmayı amaçlar. Program kapsamında oran–orantı, perspektif, kompozisyon ve ışık–gölge çalışmaları yürütülerek gözlem yeteneği ve teknik doğruluk geliştirilir. Bu ders, öğrencilerin hem akademik sanat eğitimi hem de ileri seviye resim çalışmalarına sağlam bir altyapı oluşturmalarını sağlar.",
  "Modern Dans":
    "Beden farkındalığı ve teknik hareket çalışmaları yürütülür. Yaratıcı koreografi geliştirme süreçleri desteklenir.",
  "Bale":
    "Klasik bale disiplinine uygun teknik eğitim verilir. Esneklik, denge ve estetik duruş geliştirilir.",
  "Latin Dansları (Salsa, Bachata, Tango)":
    "Ritim algısı, partner uyumu ve sahne performansı üzerine sistemli çalışmalar yapılır.",
  "K-Pop":
    "K-Pop dans eğitimi; güçlü koreografi yapısı, senkronizasyon ve sahne enerjisi üzerine yapılandırılmıştır. Program kapsamında ritim duygusu, beden koordinasyonu ve grup uyumu geliştirilirken, performans odaklı çalışmalarla sahne hakimiyeti desteklenir. Öğrenciler, güncel koreografiler üzerinden teknik ve estetik açıdan disiplinli bir çalışma süreci deneyimler.",
  "Drama":
    "Doğaçlama, rol çalışmaları ve temel sahne teknikleri ile iletişim ve ifade becerileri geliştirilir.",
  "Çocuk Tiyatrosu":
    "Çocukların özgüven, sosyal iletişim ve sahne deneyimi kazanmalarını sağlayan yaşa uygun çalışmalar yürütülür.",
  "Yetişkin Tiyatrosu":
    "Metin analizi, karakter çözümleme ve sahne pratiği üzerine kapsamlı çalışmalar yapılır.",
};

const branslar = [
  {
    id: "muzik",
    baslik: "Müzik Bölümü",
    aciklama: "Bireysel enstrüman eğitimi, teorik altyapı ve performans deneyimini bütüncül bir sistem içerisinde sunar. Eğitim süreci; teknik gelişim, müzikal ifade ve sahne deneyimi olmak üzere üç temel eksende ilerler.",
    img: musicImg,
    icon: FaMusic,
    enstrumanlar: [
      "Piyano", "Keman", "Gitar", "Bağlama", "Bateri", "Darbuka-Perküsyon",
      "Elektro Gitar", "Bas Gitar", "Viyolonsel", "Yan Flüt", "Klarnet", "Ud"
    ],
  },
  {
    id: "resim",
    baslik: "Resim Bölümü",
    aciklama:
      "Gözlem yeteneği, teknik beceri ve estetik algının sistemli şekilde geliştirilmesini amaçlar. Öğrencilerin özgün üretim süreçleri desteklenir.",
    img: resimImg,
    icon: FaPalette,
    enstrumanlar: [
      "Tuval Boyama",
      "Yağlı Boya",
      "Kara Kalem",
      "Seramik",
      "Ahşap Boyama",
      "Desen",
    ],
  },
  {
    id: "dans",
    baslik: "Dans Bölümü",
    aciklama:
      "Dans bölümü; teknik disiplin, beden koordinasyonu ve sahne estetiği üzerine yapılandırılmıştır. Öğrencinin fiziksel gelişimi ve sahne özgüveni birlikte ele alınır.",
    img: dansImg,
    icon: FaChild,
    enstrumanlar: [
      "Modern Dans",
      "Bale",
      "Latin Dansları (Salsa, Bachata, Tango)",
      "K-Pop",
    ],
  },
  {
    id: "tiyatro",
    baslik: "Tiyatro Bölümü",
    aciklama:
      "Tiyatro bölümü; ifade gücü, özgüven ve sahne bilincini geliştirmeye yönelik yapılandırılmış bir eğitim programı sunar.",
    img: tiyatroImg,
    icon: FaTheaterMasks,
    enstrumanlar: [
      "Drama",
      "Çocuk Tiyatrosu",
      "Yetişkin Tiyatrosu",
    ],
  },
];


const Branslarimiz = () => {
  const { hash } = useLocation();
  const [seciliEnstruman, setSeciliEnstruman] = useState(null);

  const handleEnstrumanClick = (enstruman) => {
    setSeciliEnstruman(enstruman);
  };

  const handleModalKapat = () => {
    setSeciliEnstruman(null);
  };

  const aktifBrans =
    seciliEnstruman &&
    branslar.find(
      (brans) =>
        Array.isArray(brans.enstrumanlar) &&
        brans.enstrumanlar.includes(seciliEnstruman)
    );

  let ModalIcon = FaMusic;
  if (aktifBrans?.id === "resim") {
    ModalIcon = FaPalette;
  } else if (aktifBrans?.id === "dans") {
    ModalIcon = FaChild;
  } else if (aktifBrans?.id === "tiyatro") {
    ModalIcon = FaTheaterMasks;
  }

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return (
    <main className="brans-page">
      <div className="container">
        <header className="brans-header">
          <h1 className="brans-page-title">Branşlarımız</h1>
          <p className="brans-intro">
            Arvia Sanat olarak müzik, resim, dans ve tiyatro alanlarında kapsamlı eğitim programları sunuyoruz.
            Her branşta deneyimli eğitmenlerimiz ve çağdaş eğitim yöntemlerimizle yanınızdayız.
            Uluslararası sınav hazırlıkları, güzel sanatlar ve konservatuvar hazırlık programları ile birlikte
            her yaştan öğrencimize disiplinli, sistemli ve sürdürülebilir bir sanat eğitimi sunuyoruz.
          </p>
        </header>

        <div className="brans-list">
          {branslar.map((brans, index) => (
            <section
              key={brans.id}
              id={brans.id}
              className={`brans-detail ${index % 2 === 1 ? "brans-detail-reverse" : ""}`}
            >
              <div className="brans-detail-image">
                <img src={brans.img} alt={brans.baslik} loading="lazy" />
              </div>
              <div className="brans-detail-content">
                <div className="brans-detail-header">
                  <div className="brans-detail-icon">
                    <brans.icon aria-hidden />
                  </div>
                  <h2 className="brans-detail-title">{brans.baslik}</h2>
                </div>
                <p className="brans-detail-aciklama">{brans.aciklama}</p>
                {brans.enstrumanlar && (
                  <div
                    className={`enstruman-listesi ${
                      brans.id === "dans" ? "enstruman-listesi-iki-kolon" : ""
                    }`}
                  >
                    {brans.enstrumanlar.map((enstruman, i) => (
                      <div
                        key={i}
                        className="enstruman-kutusu"
                        onClick={() => handleEnstrumanClick(enstruman)}
                      >
                        {enstruman}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
      {seciliEnstruman && (
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
            <div className="enstruman-modal-eyebrow">EĞİTİM PROGRAMI</div>
            <h3 className="enstruman-modal-baslik">{seciliEnstruman}</h3>
            <p className="enstruman-modal-metin">
              {enstrumanAciklamalari[seciliEnstruman] ||
                "Bu enstrüman için detaylı program, seviye ve yaş grubu bilgileri için bize ulaşabilirsiniz. Sizin için en uygun eğitim planını birlikte şekillendirelim."}
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Branslarimiz;
