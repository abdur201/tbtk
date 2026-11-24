import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function AboutPage() {

  // Mail adresini tooltip içinde göstermek için yardımcı fonksiyon
  const renderTooltip = (email) => (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {email}
    </Tooltip>
  );

  return (
    <Container className="mt-5 mb-5">
      {/* ÜST KISIM: VİZYON */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Hakkımızda</h1>
        <p className="lead text-muted">
          Teknolojiyi güvenlikle buluşturuyoruz.
        </p>
        <p className="w-75 mx-auto">
          Biz, Sakarya Üniversitesi Bilgisayar ve Bilişim Bilimleri Fakültesi öğrencileri olarak; 
          restoran ve otel mutfaklarında yaşanan güvenlik sorunlarına modern IoT ve Yapay Zeka 
          çözümleri getirmek amacıyla bir araya geldik. TÜBİTAK 2209-A programı kapsamında 
          geliştirdiğimiz bu proje ile iş sağlığı ve güvenliği standartlarını yükseltmeyi hedefliyoruz.
        </p>
      </div>

      <hr className="my-5" />

      {/* DANIŞMAN HOCA */}
      <h3 className="text-center mb-4">Akademik Danışmanımız</h3>
      <Row className="justify-content-center mb-5">
        <Col md={4}>
          <Card className="text-center shadow-sm border-0 h-100">
            <Card.Body>
              <div className="mb-3">
                <Image 
                  src="https://ui-avatars.com/api/?name=Ismail+Butun&background=0D6EFD&color=fff&size=128" 
                  roundedCircle 
                  thumbnail 
                />
              </div>
              
              {/* İsmail Bütün - Mail Entegrasyonu */}
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip('ibutun@sakarya.edu.tr')}
              >
                <Card.Title>
                  <a href="mailto:ibutun@sakarya.edu.tr" className="text-decoration-none text-dark stretched-link">
                    Doç. Dr. İsmail BÜTÜN
                  </a>
                </Card.Title>
              </OverlayTrigger>

              <Card.Subtitle className="mb-2 text-muted">Proje Danışmanı</Card.Subtitle>
              <Card.Text>
                Sakarya Üniversitesi<br/>
                CyberSense Laboratory Kurucusu.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* PROJE EKİBİ */}
      <h3 className="text-center mb-4">Proje Ekibimiz</h3>
      <Row xs={1} md={2} lg={4} className="g-4">
        {/* 1. Üye: Kerem Berk ŞENOL (Mail adresi verilmediği için standart bırakıldı) */}
        <Col>
          <Card className="text-center h-100 shadow-sm border-0 hover-effect">
            <Card.Body>
              <Image src="https://ui-avatars.com/api/?name=Kerem+Berk&background=random&size=100" roundedCircle className="mb-3" />
            
             <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip('keremberksenol@gmail.com')}
              >
                <Card.Title style={{fontSize: '1.1rem'}}>
                    <a href="mailto:keremberksenol@gmail.com" className="text-decoration-none text-dark stretched-link">
                     
                    </a>
                </Card.Title>
              </OverlayTrigger>
            
              <Card.Title style={{fontSize: '1.1rem'}}>Kerem Berk ŞENOL</Card.Title>
              <Card.Text className="small text-muted">Proje Yürütücüsü</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* 2. Üye: Ali Samet ARMAĞAN */}
        <Col>
          <Card className="text-center h-100 shadow-sm border-0 hover-effect">
            <Card.Body>
              <Image src="https://ui-avatars.com/api/?name=Ali+Samet&background=random&size=100" roundedCircle className="mb-3" />
              
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip('ali.samet.ar@gmail.com')}
              >
                <Card.Title style={{fontSize: '1.1rem'}}>
                    <a href="mailto:ali.samet.ar@gmail.com" className="text-decoration-none text-dark stretched-link">
                        Ali Samet ARMAĞAN
                    </a>
                </Card.Title>
              </OverlayTrigger>

              <Card.Text className="small text-muted">Araştırmacı</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* 3. Üye: Abdurrahman AKÇİT */}
        <Col>
          <Card className="text-center h-100 shadow-sm border-0 hover-effect">
            <Card.Body>
              <Image src="https://ui-avatars.com/api/?name=Abdurrahman+Akcit&background=random&size=100" roundedCircle className="mb-3" />
              
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip('abdurrahman.akcit@ogr.sakarya.edu.tr')}
              >
                 <Card.Title style={{fontSize: '1.1rem'}}>
                    <a href="mailto:abdurrahman.akcit@ogr.sakarya.edu.tr" className="text-decoration-none text-dark stretched-link">
                        Abdurrahman AKÇİT
                    </a>
                </Card.Title>
              </OverlayTrigger>

              <Card.Text className="small text-muted">Araştırmacı</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* 4. Üye: Betül GÜMÜŞ */}
        <Col>
          <Card className="text-center h-100 shadow-sm border-0 hover-effect">
            <Card.Body>
              <Image src="https://ui-avatars.com/api/?name=Betul+Gumus&background=random&size=100" roundedCircle className="mb-3" />
              
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip('betullgumussss@gmail.com')}
              >
                <Card.Title style={{fontSize: '1.1rem'}}>
                    <a href="mailto:betullgumussss@gmail.com" className="text-decoration-none text-dark stretched-link">
                        Betül GÜMÜŞ
                    </a>
                </Card.Title>
              </OverlayTrigger>

              <Card.Text className="small text-muted">Araştırmacı</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <hr className="my-5" />

      {/* LABORATUVAR BİLGİSİ */}
      <Row className="align-items-center bg-light p-4 rounded">
        <Col md={8}>
          <h4>CyberSense Laboratory</h4>
          <p>
            Projemizin veri toplama ve test süreçleri, Sakarya Üniversitesi bünyesindeki 
            <strong> Yenilikçi Siber Güvenlik ve Sensör Teknolojileri Laboratuvarı (CyberSense)</strong> 
            imkanları kullanılarak gerçekleştirilmektedir.
          </p>
        </Col>
        <Col md={4} className="text-center">
            {/* Üniversite logosu temsili */}
            <h1 style={{fontSize: '4rem'}}>🏫</h1>
        </Col>
      </Row>

    </Container>
  );
}

export default AboutPage;