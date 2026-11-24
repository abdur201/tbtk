import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

// Görsel yollarınızı kontrol edin (src/assets vb.)
import image0 from '../img/image_0.png'; 
import image1 from '../img/image_1.png';
import image2 from '../img/image_2.png';

function LoRaWanDiagrams() {
  return (
    <div className="mb-5">
      
      {/* 1. SLAYT: PROTOKOL MİMARİSİ */}
      <Card className="mb-5 shadow-lg border-0 overflow-hidden">
        <Row className="g-0">
          {/* Görsel Alanı - BÜYÜTÜLDÜ */}
          <Col lg={8} className="bg-white d-flex align-items-center justify-content-center p-3">
             <Card.Img 
                src={image0} 
                alt="LoRaWAN Protokol Mimarisi" 
                style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain' }} 
             />
          </Col>
          {/* Açıklama Alanı */}
          <Col lg={4} className="bg-light">
            <Card.Body className="p-4 h-100 d-flex flex-column justify-content-center">
              <Badge bg="primary" className="mb-2 align-self-start">Protokol Yığını</Badge>
              <Card.Title className="h3 fw-bold mb-3">1. Katmanlı Ağ Mimarisi</Card.Title>
              <Card.Text className="text-muted" style={{ textAlign: 'justify' }}>
                Bu diyagram, LoRaWAN iletişiminin uçtan uca (End-to-End) yolculuğunu gösterir. 
                <br /><br />
                <strong>Cihaz (Device):</strong> Sahadaki sensörler veriyi toplar ve şifreler.
                <br />
                <strong>LoRaWAN L2 & Bölgesel Parametreler:</strong> Veri, EU868 (Avrupa) gibi bölgesel frekans standartlarına göre paketlenir.
                <br />
                <strong>Ağ Geçidi (Gateway):</strong> Havadan gelen radyo dalgalarını (RF) yakalar ve IP paketlerine dönüştürerek sunucuya iletir.
                <br />
                <strong>Uygulama Sunucusu:</strong> Şifrelenmiş veri burada çözülür ve anlamlı bilgiye (sıcaklık, CO2 değeri vb.) dönüştürülür.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      {/* 2. SLAYT: TEKNOLOJİ KIYASLAMASI */}
      <Card className="mb-5 shadow-lg border-0 overflow-hidden">
        <Row className="g-0">
          {/* Görsel Alanı */}
          <Col lg={8} className="bg-white d-flex align-items-center justify-content-center p-3">
             <Card.Img 
                src={image1} 
                alt="Kablosuz Teknolojiler Karşılaştırması" 
                style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain' }} 
             />
          </Col>
          {/* Açıklama Alanı */}
          <Col lg={4} className="bg-light">
            <Card.Body className="p-4 h-100 d-flex flex-column justify-content-center">
              <Badge bg="success" className="mb-2 align-self-start">Pazar Konumu</Badge>
              <Card.Title className="h3 fw-bold mb-3">2. Neden Wi-Fi Değil?</Card.Title>
              <Card.Text className="text-muted" style={{ textAlign: 'justify' }}>
                IoT projelerinde doğru teknolojiyi seçmek kritiktir. Bu grafik, LoRa teknolojisinin diğerlerine göre konumunu özetler:
                <br /><br />
                <strong>Sol Alt (Wi-Fi):</strong> Yüksek veri hızı sunar ancak enerji tüketimi çok fazladır ve menzili kısadır.
                <br />
                <strong>Sol Üst (Bluetooth/Zigbee):</strong> Düşük enerji harcar ancak sadece çok kısa mesafede (ev içi) çalışır.
                <br />
                <strong>Sağ Üst (LoRa):</strong> Projemizin tercih sebebidir. <strong>Düşük Güç (Low Power)</strong> tüketimi ile pille yıllarca çalışabilir ve <strong>Uzun Menzil (Long Range)</strong> sayesinde kilometrelerce öteden veri aktarabilir.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      {/* 3. SLAYT: DOLAŞIM VE AĞ YAPISI */}
      <Card className="mb-5 shadow-lg border-0 overflow-hidden">
        <Row className="g-0">
           {/* Görsel Alanı */}
           <Col lg={8} className="bg-white d-flex align-items-center justify-content-center p-3">
             <Card.Img 
                src={image2} 
                alt="Ağ Topolojisi ve Roaming" 
                style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain' }} 
             />
          </Col>
          {/* Açıklama Alanı */}
          <Col lg={4} className="bg-light">
            <Card.Body className="p-4 h-100 d-flex flex-column justify-content-center">
              <Badge bg="warning" text="dark" className="mb-2 align-self-start">Topoloji</Badge>
              <Card.Title className="h3 fw-bold mb-3">3. Ağ Topolojisi ve Dolaşım</Card.Title>
              <Card.Text className="text-muted" style={{ textAlign: 'justify' }}>
                LoRaWAN "Yıldızların Yıldızı" (Star-of-Stars) topolojisini kullanır.
                <br /><br />
                <strong>Çoklu Kapsama (Macro-diversity):</strong> Görselde görüldüğü üzere, bir cihazdan çıkan sinyal, birden fazla ağ geçidi (Gateway) tarafından aynı anda yakalanabilir. Bu, veri kaybını önler.
                <br />
                <strong>Dolaşım (Roaming):</strong> Cihazlar, "Home Network" (Ev Ağı) dışına çıksa bile "Visited Network" (Ziyaret Edilen Ağ) üzerinden iletişim kurmaya devam edebilir. Bu özellik, sensörlerin yer değiştirdiği lojistik senaryoları için hayati önem taşır.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

    </div>
  );
}

export default LoRaWanDiagrams;