import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import image0 from '../img/image_0.png';
import image1 from '../img/image_1.png';
import image2 from '../img/image_2.png';
import kitchenResmi from '../img/kitchen.jpg';

function CreditsPage() {
  return (
    <Container className="py-5 mt-5">
      <h2 className="mb-4">Yasal Bildirim ve Kaynakca</h2>

      <div className="alert alert-info" role="alert">
        <strong>Proje Bilgisi:</strong> Bu site, TUBITAK 2209-A projesi kapsaminda egitim ve akademik tanitim amaciyla hazirlanmistir. Ticari bir amac gütmemektedir.
      </div>

      <h4 className="mt-5 mb-3">Gorsel Kaynak Dokumu</h4>
      <p>Projede kullanilan tum gorsellerin kaynaklari ve lisans durumlari asagida listelenmistir.</p>

      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th style={{ width: '150px' }}>Onizleme</th>
            <th>Kullanildigi Yer</th>
            <th>Kaynak / Lisans</th>
            <th>Detay / Link</th>
          </tr>
        </thead>
        <tbody>
          {/* --- BOLUM 1: ANA SAYFA SLIDER (HERO) --- */}

          <tr>
            <td className="text-center">
              <Image src={kitchenResmi} thumbnail style={{ maxHeight: '100px' }} />
            </td>
            <td>Ana Sayfa - Hero Slider - Mutfak</td>
            <td>AI Generated (Gemini, CC0)</td>
            <td>
              <span className="text-muted">Gemini ile üretildi.</span>
            </td>
          </tr>

          <tr>
            <td className="text-center">
              <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=200" thumbnail style={{ maxHeight: '100px' }} />
            </td>
            <td>Ana Sayfa - Hero Slider - IoT Teknoloji</td>
            <td>Unsplash (CC0 - Ucretsiz)</td>
            <td>
              <a href="https://unsplash.com/photos/internet-of-things-ZSLi9j3qcns" target="_blank" rel="noreferrer">
                Orijinal Kaynaga Git
              </a>
            </td>
          </tr>

          <tr>
            <td className="text-center">
              <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200" thumbnail style={{ maxHeight: '100px' }} />
            </td>
            <td>Ana Sayfa - Hero Slider - Veri Analizi</td>
            <td>Unsplash (CC0 - Ucretsiz)</td>
            <td>
              <a href="https://unsplash.com/photos/data-analysis-v9FQR4tbIq8" target="_blank" rel="noreferrer">
                Orijinal Kaynaga Git
              </a>
            </td>
          </tr>

          <tr>
            <td className="text-center">
              <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200" thumbnail style={{ maxHeight: '100px' }} />
            </td>
            <td>Ana Sayfa ve Mobil - Telefon/Player Gorseli</td>
            <td>Unsplash (CC0 - Ucretsiz)</td>
            <td>
              <a href="https://unsplash.com/photos/mobile-phone-displaying-music-player-application-QeqD_r31g3c" target="_blank" rel="noreferrer">
                Orijinal Kaynaga Git
              </a>
            </td>
          </tr>

          {/* --- BOLUM 2: PROJE BILESEN KARTLARI (INFO CARDS) --- */}

          <tr>
            <td className="text-center">
              <Image src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=200" thumbnail style={{ maxHeight: '100px' }} />
            </td>
            <td>Info Cards - LoRaWAN Sensor Agi</td>
            <td>Unsplash (CC0 - Ucretsiz)</td>
            <td>
              <a href="https://unsplash.com/photos/black-circuit-board-a72e53ae2d4f" target="_blank" rel="noreferrer">
                Orijinal Kaynaga Git
              </a>
            </td>
          </tr>

          <tr>
            <td className="text-center">
              <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200" thumbnail style={{ maxHeight: '100px' }} />
            </td>
            <td>Info Cards - Yapay Zeka Analizi</td>
            <td>Unsplash (CC0 - Ucretsiz)</td>
            <td>
              <a href="https://unsplash.com/photos/artificial-intelligence-text-bcc4688e7485" target="_blank" rel="noreferrer">
                Orijinal Kaynaga Git
              </a>
            </td>
          </tr>

          <tr>
            <td className="text-center">
              <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200" thumbnail style={{ maxHeight: '100px' }} />
            </td>
            <td>Info Cards ve Mobil Page - Mobil Erken Uyari</td>
            <td>Unsplash (CC0 - Ucretsiz)</td>
            <td>
              <a href="https://unsplash.com/photos/mobile-phone-displaying-music-player-application-QeqD_r31g3c" target="_blank" rel="noreferrer">
                Orijinal Kaynaga Git
              </a>
            </td>
          </tr>

          {/* --- BOLUM 3: LOKAL DIYAGRAMLAR (Sensors & LoRaWanDiagrams) --- */}

          <tr>
            <td className="text-center">
              <Image src={image0} thumbnail style={{ maxHeight: '100px' }} />
            </td>
            <td>LoRaWAN Protokol Mimarisi Diyagrami</td>
            <td>ThingPark Community (What is LoRaWAN) + Yerel dosya</td>
            <td>
              <a href="https://community.thingpark.org/what-is-lorawan/" target="_blank" rel="noreferrer">Kaynak makale</a>
              <br />
              <a href={image0} target="_blank" rel="noreferrer">Yerel: src/img/image_0.png</a>
            </td>
          </tr>

          <tr>
            <td className="text-center">
              <Image src={image1} thumbnail style={{ maxHeight: '100px' }} />
            </td>
            <td>Kablosuz Teknolojiler Karsilastirmasi Diyagrami</td>
            <td>ThingPark Community (What is LoRaWAN) + Yerel dosya</td>
            <td>
              <a href="https://community.thingpark.org/what-is-lorawan/" target="_blank" rel="noreferrer">Kaynak makale</a>
              <br />
              <a href={image1} target="_blank" rel="noreferrer">Yerel: src/img/image_1.png</a>
            </td>
          </tr>

          <tr>
            <td className="text-center">
              <Image src={image2} thumbnail style={{ maxHeight: '100px' }} />
            </td>
            <td>Ag Topolojisi ve Roaming Diyagrami</td>
            <td>ThingPark Community (What is LoRaWAN) + Yerel dosya</td>
            <td>
              <a href="https://community.thingpark.org/what-is-lorawan/" target="_blank" rel="noreferrer">Kaynak makale</a>
              <br />
              <a href={image2} target="_blank" rel="noreferrer">Yerel: src/img/image_2.png</a>
            </td>
          </tr>

          {/* --- BOLUM 4: GENEL TEMSILI GORSELLER --- */}

          <tr>
            <td className="text-center">
              <div style={{ width: '100%', height: '80px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#555' }}>
                AI Gorsel
              </div>
            </td>
            <td>Blog - Teknoloji Gelecegi Yazisi</td>
            <td>Yapay Zeka (Gemini Advanced)</td>
            <td>Google Gemini tarafindan uretilmistir.</td>
          </tr>

          <tr>
            <td className="text-center">
              <div style={{ width: '100%', height: '80px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#555' }}>
                Grafik/Şema
              </div>
            </td>
            <td>İstatistik Sayfasi - Kullanim Grafigi</td>
            <td>Alinti (Fair Use / Adil Kullanim)</td>
            <td>Egitim amacli kaynaklardan alinmistir.</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default CreditsPage;
