import React, { useEffect, useState } from "react";

const AboutBilgi = () => {
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionMeta?.getAttribute("content") || "";

    document.title = "Arvia Sanat | Kurum Müdürü ve Eğitim Felsefesi";
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Arvia Sanat Kurum Müdürü Erol Ermetal'in eğitim yaklaşımını, kurumun misyon ve vizyonunu detaylı olarak keşfedin. Sanat eğitimi felsefemiz ve değerlerimiz hakkında bilgi alın."
      );
    }

    // Zaman çizelgesini ilk boyamadan sonra, tarayıcı boşta kalınca yükle
    let idleId = null;
    let timeoutId = null;

    const revealTimeline = () => setTimelineVisible(true);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(revealTimeline, { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(revealTimeline, 900);
    }

    return () => {
      document.title = previousTitle;
      if (descriptionMeta) {
        descriptionMeta.setAttribute("content", previousDescription);
      }
      if (idleId !== null && typeof window !== "undefined" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <main className="about-bilgi-page">
      <div className="container">
        <div className="about-bilgi-layout">
        <section className="about-bilgi-bio">
          <h2 className="about-bilgi-bio-title">Kurum Müdürü: Erol ERMETAL</h2>
          <div className="about-bilgi-bio-content">
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
        </section>

        {timelineVisible && (
        <div className="about-bilgi-timeline">
          <div className="about-bilgi-timeline-line" aria-hidden="true" />

          <div className="about-bilgi-timeline-item about-bilgi-timeline-right">
            <div className="about-bilgi-timeline-side" />
            
            <div className="about-bilgi-timeline-side about-bilgi-timeline-side-card">
              <article className="about-bilgi-card">
                <h3 className="about-bilgi-card-title">Eğitim Anlayışı</h3>
                <div className="about-bilgi-card-content">
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
              </article>
            </div>
          </div>

          <div className="about-bilgi-timeline-item about-bilgi-timeline-left">
            <div className="about-bilgi-timeline-side about-bilgi-timeline-side-card">
              <article className="about-bilgi-card">
                <h3 className="about-bilgi-card-title">Misyonumuz</h3>
                <div className="about-bilgi-card-content">
                  <p>
                    Her yaştan bireyin sanatsal potansiyelini sistemli ve bilimsel yöntemlerle geliştirmek; teknik yeterlilik ile estetik bakış açısını bir arada kazandırmak temel misyonumuzdur.
                  </p>
                  <p>
                    Öğrencilerimizi yalnızca branşlarında yetkin bireyler olarak değil; disiplinli, özgüvenli, üretken ve toplumsal sorumluluk bilincine sahip bireyler olarak yetiştirmeyi amaçlıyoruz.
                  </p>
                </div>
              </article>
            </div>
            
            <div className="about-bilgi-timeline-side" />
          </div>

          <div className="about-bilgi-timeline-item about-bilgi-timeline-right">
            <div className="about-bilgi-timeline-side" />
            
            <div className="about-bilgi-timeline-side about-bilgi-timeline-side-card">
              <article className="about-bilgi-card">
                <h3 className="about-bilgi-card-title">Vizyonumuz</h3>
                <div className="about-bilgi-card-content">
                  <p>
                    Sanat eğitiminde kalite, disiplin ve sürdürülebilir başarı anlayışıyla hareket eden; ulusal ve uluslararası düzeyde yetkin bireyler yetiştiren saygın bir sanat kurumu olmak.
                  </p>
                  <p>
                    Arvia Sanat olarak; sanatsal üretimi destekleyen, çağdaş eğitim yöntemlerini benimseyen ve öğrencilerini çok yönlü gelişime teşvik eden öncü bir akademi olmayı hedefliyoruz.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
        )}
        </div>
      </div>
    </main>
  );
};

export default AboutBilgi;
