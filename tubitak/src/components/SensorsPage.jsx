import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import image_0 from '../img/image_0.png'; 
import image_1 from '../img/image_1.png'; 
import image_2 from '../img/image_2.png'; 
// Yeni oluşturduğumuz bileşeni import ediyoruz.
// Dosya yolunu projenize göre ayarlayın.
import LoRaWanDiagrams from './LoRaWanDiagrams'; 

function SensorsPage() {
  return (
    <Container className="mt-5 mb-5">
      {/* BAŞLIK ALANI */}
      <div className="p-5 mb-4 bg-light rounded-3 border shadow-sm">
        <h1 className="display-5 fw-bold">LoRaWAN ve Sensör Katmanı</h1>
        <p className="col-md-8 fs-4 text-muted">
            Projemiz, çevresel verilerin güvenli, kesintisiz ve gerçek zamanlı toplanması için 
            düşük güç tüketimli uzun menzilli geniş alan ağı (LoRaWAN) mimarisini kullanmaktadır.
        </p>
      </div>
      
     
     

      <Row>
        {/* SOL SÜTUN: DONANIMLAR VE TEKNİK DETAYLAR */}
        <Col lg={8}>
            {/* SENSÖR DÜĞÜMÜ KARTI */}
            <Card className="mb-4 shadow-sm border-0">
                <Card.Header as="h4" className="bg-primary text-white">Sensör Düğümü Mimarisi</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Sistemin uç noktasında yer alan sensör katmanı, üç temel bileşenden oluşan sensör düğümlerini içerir. 
                        Tüm veriler <strong>LILYGO LoRa32 (TTGO LoRa32)</strong> geliştirme kartı aracılığıyla toplanır. 
                        Bu kart, ESP32 mikrodenetleyici ile SX1276 LoRa modülünü tek donanımda birleştirerek enerji verimliliği sağlar.
                    </Card.Text>
                    
                    <h5 className="mt-4 text-primary">Kullanılan Sensör Teknolojileri:</h5>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">1. MH-Z14 (CO2 Sensörü)</div>
                                Ortamdaki karbondioksit yoğunluğunu yüksek hassasiyetle ölçer. Analog hat gürültüsünü engellemek için <em>dijital UART çıkışı</em> kullanılır.
                            </div>
                            <Badge bg="primary" pill>Gaz</Badge>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">2. MQ-7 (CO Sensörü)</div>
                                Karbonmonoksit gazını analog olarak tespit eder. Zehirlenme riskine karşı anlık değişimleri mikrodenetleyiciye iletir.
                            </div>
                            <Badge bg="danger" pill>Zehirli Gaz</Badge>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">3. DHT-22 (Sıcaklık ve Nem)</div>
                                Ortamın termal konforunu ve yangın riskini dolaylı olarak izlemek için sıcaklık ve nem verilerini dijital formatta iletir.
                            </div>
                            <Badge bg="warning" text="dark" pill>Çevresel</Badge>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

            {/* GATEWAY KARTI */}
            <Card className="mb-4 shadow-sm border-0">
                <Card.Header as="h4" className="bg-dark text-white">Ağ Geçidi (Gateway) ve İletişim</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Verilerin toplanma merkezi olarak <strong>Seeed Studio WM1302 Long Range Gateway Module</strong> kullanılmaktadır. 
                        Bu modül, Raspberry Pi 5 işlem birimi ile entegre edilerek hem veri iletim köprüsü hem de yerel ağ yöneticisi 
                        görevini üstlenir.
                    </Card.Text>
                    <Row xs={1} md={3} className="g-3 text-center mt-3">
                        <Col>
                            <Card className="h-100 bg-light border-0">
                                <Card.Body>
                                    <h6 className="card-subtitle mb-2 text-muted">Frekans</h6>
                                    <p className="card-text fw-bold">868 MHz (ISM)</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 bg-light border-0">
                                <Card.Body>
                                    <h6 className="card-subtitle mb-2 text-muted">Protokol</h6>
                                    <p className="card-text fw-bold">MQTT-SN</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 bg-light border-0">
                                <Card.Body>
                                    <h6 className="card-subtitle mb-2 text-muted">Sunucu</h6>
                                    <p className="card-text fw-bold">ChirpStack</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>

        {/* SAĞ SÜTUN: GÜVENLİK VE AVANTAJLAR */}
        <Col lg={4}>
            <Card className="mb-4 border-success shadow-sm">
                <Card.Header className="bg-success text-white fw-bold">Güvenlik Protokolleri</Card.Header>
                <Card.Body>
                    <Card.Title className="h5">Uçtan Uca Şifreleme</Card.Title>
                    <Card.Text>
                        Sistem güvenliği için LoRaWAN'ın sağladığı <strong>AES-128 bit şifreleme</strong> yöntemi kullanılmaktadır. 
                        Ayrıca ağ erişimleri TLS protokolleri ile korunarak veri bütünlüğü garanti altına alınır.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="mb-4 shadow-sm">
                <Card.Header className="fw-bold">Neden LoRaWAN?</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>⚡ Düşük Güç Tüketimi</ListGroup.Item>
                    <ListGroup.Item>📡 Geniş Kapsama Alanı</ListGroup.Item>
                    <ListGroup.Item>🧱 Engellerden Sinyal Geçişi</ListGroup.Item>
                    <ListGroup.Item>💰 Düşük İletişim Maliyeti</ListGroup.Item>
                </ListGroup>
                <Card.Footer className="text-muted small">
                    Kaynak: Proje Dokümanı
                </Card.Footer>
            </Card>

            <div className="d-grid gap-2">
                 <Badge bg="info" className="p-3 fs-6">Veri Frekansı: Dakikada 2 Gözlem</Badge>
                 <Badge bg="warning" text="dark" className="p-3 fs-6">Anten Gücü: 5 dBi</Badge>
            </div>
        </Col>
      </Row>


 <LoRaWanDiagrams />


    </Container>
  );
}

export default SensorsPage;
