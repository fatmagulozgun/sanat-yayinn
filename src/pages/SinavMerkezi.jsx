import React from "react";
import { Link } from "react-router-dom";

const SinavMerkezi = () => {
  return (
    <main className="sinav-page brans-page">
      <div className="container">
        <header className="brans-header">
          <h1 className="brans-page-title">Uluslararası Sınav Merkezi</h1>
          <p className="brans-intro">
            Arvia Sanat olarak, öğrencilerimizin uluslararası standartlarda ölçme ve değerlendirme
            süreçlerine katılmalarını önemsiyoruz. Bu doğrultuda akademimiz;
          </p>
        </header>

        <section className="sinav-section">
          <div className="sinav-section-inline">
            <ul className="sinav-list">
              <li><Link to="https://www.abrsm.org" target="_blank" rel="noopener noreferrer">Royal School of Music (ABRSM)</Link></li>
              <li><Link to="https://www.lcm.org.uk" target="_blank" rel="noopener noreferrer">London College of Music</Link></li>
              <li><Link to="https://www.rock-school.org" target="_blank" rel="noopener noreferrer">Rock School</Link></li>
            </ul>
            <span className="sinav-intro-end">
              sınavlarının uygulandığı yetkili sınav merkezlerinden biridir.
            </span>
          </div>
        </section>

        <section className="sinav-content">
          <p>
            Öğrencilerimiz, dünya çapında geçerliliğe sahip bu sınav sistemleri aracılığıyla
            performanslarını uluslararası kriterlere göre değerlendirme ve sertifikalandırma
            imkânı bulmaktadır.
          </p>
          <p>
            Akademimiz, sınav süreçlerinin hazırlık aşamasından uygulama sürecine kadar gerekli
            akademik ve teknik altyapıyı sağlayarak öğrencilerini profesyonel standartlarda
            desteklemektedir.
          </p>
        </section>
      </div>
    </main>
  );
};

export default SinavMerkezi;
