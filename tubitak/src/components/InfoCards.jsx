import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function InfoCards() {
  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Proje Ozet Kartlari</h2>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className="h-100 shadow-sm">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600"
              alt="LoRaWAN sensor agi karti"
              style={{ objectFit: 'cover', maxHeight: '180px' }}
            />
            <Card.Body>
              <Card.Title>LoRaWAN Sensor Agi</Card.Title>
              <Card.Text>
                Uzun menzilli, dusuk guc tuketimli sensor katmanimizi gorun. CO2, CO, sicaklik ve nem verileri aga tasiniyor.
              </Card.Text>
              <Button as={Link} variant="primary" to="/sensors">Detaylar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 shadow-sm">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600"
              alt="AI analizi"
              style={{ objectFit: 'cover', maxHeight: '180px' }}
            />
            <Card.Body>
              <Card.Title>Yapay Zeka Analizi</Card.Title>
              <Card.Text>
                Tahmin ve anomali tespiti icin gelistirilen model akisina goz atin. MQTT ile gelen veriler panelde isleniyor.
              </Card.Text>
              <Button as={Link} variant="success" to="/ai">AI Sayfasi</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 shadow-sm">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600"
              alt="Mobil uygulama"
              style={{ objectFit: 'cover', maxHeight: '180px' }}
            />
            <Card.Body>
              <Card.Title>Mobil Uygulama</Card.Title>
              <Card.Text>
                Gercek zamanli bildirim, konum bazli olaylar ve mini kontrol paneliyle saha ekibi icin kolay erisim.
              </Card.Text>
              <Button as={Link} variant="dark" to="/mobile">Mobil Gorunum</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-center mt-4">
        <Button as={Link} to="/kaynakca" variant="outline-secondary">
          Kaynakca ve Lisanslar
        </Button>
      </div>
    </Container>
  );
}

export default InfoCards;
