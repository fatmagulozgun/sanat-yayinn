import React from "react";
import mudurImg from "../resimler/mudurr.webp";
import tanitimVideo from "../resimler/Tanıtım-filmi.mp4";

const About = () => {
  return (
    <main className="about-page">
      <div className="container">
        <section className="about-hero">  
          <div className="about-media-section">
            <div className="about-media-block">
              <div className="about-hero-video">
                <video
                  src={tanitimVideo}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                >
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>
              </div>
              <div className="about-hero-image">
                <img
                  src={mudurImg}
                  alt="Erol Ermetal - Kurum Müdürü"
                  loading="lazy"
                  width={280}
                  height={420}
                />
              </div>
            </div>
            <div className="about-media-text">
              <h3 className="about-subtitle">Kurum Müdürü: Erol Ermetal</h3>
              <p>
                Sanat yolculuğuma yıllar önce müzikle başladım ve bugün 18 yıllık öğretmenlik deneyimimin birikimiyle Arvia Sanat'ı yönetiyorum. Benim için müzik hiçbir zaman yalnızca bir ders olmadı; bir ifade biçimi, bir disiplin ve bir yaşam anlayışı oldu.
              </p>
              <p>
                Doğu Akdeniz Üniversitesi Müzik Öğretmenliği Bölümü'nden mezun olduktan sonra akademik yolculuğumu Londra'da sürdürdüm. London King's College Üniversitesi'nde müzikoloji alanında yüksek lisans eğitimimi tamamladım. Bu süreç, müziğe yalnızca uygulamalı değil; teorik, tarihsel ve analitik bir perspektiften bakmamı sağladı.
              </p>
              <p>
                Londra'da öğretmenlik yaptım; farklı kültürlerden öğrencilerle çalışma fırsatı buldum. Müzik bölüm başkanlığı görevini üstlendim ve İngilizce müzik eğitimi üzerine dersler vererek akademik çalışmalar yürüttüm. Uluslararası eğitim ortamında edindiğim disiplin, planlama ve kalite anlayışını bugün Arvia Sanat'ın temel yapı taşlarından biri olarak görüyorum.
              </p>
              <p>
                Bugün Arvia Sanat'ta amacım yalnızca nota öğretmek değil; öğrencilerimin özgüven kazandığı, sahneye çıkabildiği ve sanatla kendini ifade edebildiği bir gelişim ortamı oluşturmak. Her öğrencinin öğrenme hızının ve yeteneğinin farklı olduğuna inanıyorum, bu nedenle eğitim programlarını bireysel gelişime göre planlıyorum. Disiplinli ama keyifli bir eğitim anlayışıyla, sanatın hayat boyu süren bir kazanım olduğuna inanan bireyler yetiştirmeyi hedefliyorum.
              </p>
            </div>
          </div>

          <div className="about-content-full">
            <h2 className="about-section-title">Eğitim Anlayışı</h2>
            <div className="about-content">
              <p>
                Teknik yeterliliğin yanında özgüven, sahne duruşu ve estetik bakış açısı kazandırmaya dayanır. Amacım, öğrencilerimin yalnızca bir enstrüman çalabilen bireyler değil; sanatla düşünebilen, üretebilen ve kendini ifade edebilen güçlü bireyler olarak yetişmeleridir.
              </p>
              <p>
                Arvia Sanat'ı kurarken hedefim; çok disiplinli, sistemli ve sürdürülebilir bir sanat eğitimi modeli oluşturmaktı. Bugün akademimizde müzik, resim, dans ve tiyatro alanlarında yürüttüğümüz çalışmalarla bu vizyonu her geçen gün daha da güçlendiriyoruz.
              </p>
              <p>
                Sanata inanan, emeğe değer veren ve disiplinli çalışmanın başarının anahtarı olduğuna inanan bir eğitimci olarak, yolculuğuma aynı tutkuyla devam ediyorum.
              </p>
            </div>

            <h2 className="about-section-title">Vizyonumuz</h2>
            <div className="about-content">
              <p>
                Sanat eğitiminde kalite, disiplin ve sürdürülebilir başarı anlayışıyla hareket eden; ulusal ve uluslararası düzeyde yetkin bireyler yetiştiren saygın bir sanat kurumu olmak.
              </p>
              <p>
                Arvia Sanat olarak; sanatsal üretimi destekleyen, çağdaş eğitim yöntemlerini benimseyen ve öğrencilerini çok yönlü gelişime teşvik eden öncü bir akademi olmayı hedefliyoruz.
              </p>
            </div>

            <h2 className="about-section-title">Misyonumuz</h2>
            <div className="about-content">
              <p>
                Her yaştan bireyin sanatsal potansiyelini sistemli ve bilimsel yöntemlerle geliştirmek; teknik yeterlilik ile estetik bakış açısını bir arada kazandırmak temel misyonumuzdur.
              </p>
              <p>
                Öğrencilerimizi yalnızca branşlarında yetkin bireyler olarak değil; disiplinli, özgüvenli, üretken ve toplumsal sorumluluk bilincine sahip bireyler olarak yetiştirmeyi amaçlıyoruz.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
