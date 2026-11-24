import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import emailjs from '@emailjs/browser';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const toggleChat = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getCurrentTime = () => {
    return new Date().toLocaleString('tr-TR');
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // --- MANUEL KONTROL (Tarayıcı kontrolünü kapattığımız için) ---
    // Eğer alanlar boşsa uyarı verip işlemi durduruyoruz.
    if (!formData.user_name || !formData.user_email || !formData.message) {
      alert("Lütfen tüm zorunlu alanları doldurun.");
      return;
    }

    // Parametreleri Hazırla
    const emailParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      subject: formData.subject,
      message: formData.message,
      timestamp: getCurrentTime()
    };

    emailjs
      .send(
        'service_8gt9g7p',       
        'template_oi5qfe1',      
        emailParams,             
        'mSGpKatk3kUoN_lKH'      
      )
      .then(
        () => {
          alert('✅ Mesajınız başarıyla iletildi!');
          setFormData({ user_name: '', user_email: '', subject: '', message: '' });
          setIsOpen(false);
        },
        (error) => {
          console.error('Hata:', error);
          alert('❌ Bir hata oluştu.');
        },
      );
  };

  const widgetStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 9999,
  };

  const buttonStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px'
  };

  return (
    <div style={widgetStyle}>
      {isOpen && (
        <Card className="shadow mb-3" style={{ width: '320px' }}>
          <Card.Header className="d-flex justify-content-between align-items-center bg-primary text-white">
            <span>📩 İletişim Formu</span>
            <CloseButton variant="white" onClick={toggleChat} />
          </Card.Header>
          <Card.Body>
            
            {/* DİKKAT: 'noValidate' özelliği eklendi. 
                Bu sayede tarayıcı o gıcık pop-up baloncuğunu Asla çıkaramaz. 
            */}
            <Form onSubmit={sendEmail} noValidate>
              
              <Form.Group className="mb-2">
                <Form.Label style={{fontSize: '0.85rem', fontWeight:'bold'}}>Adınız Soyadınız</Form.Label>
                <Form.Control 
                  type="text" 
                  name="user_name" 
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="Adınız..." 
                  size="sm"
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label style={{fontSize: '0.85rem', fontWeight:'bold'}}>E-posta Adresiniz</Form.Label>
                {/* type="text" yaptık ki @ işareti veya Türkçe karakterde hata vermesin */}
                <Form.Control 
                  type="text" 
                  name="user_email" 
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="mail@adresiniz.com" 
                  size="sm"
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label style={{fontSize: '0.85rem', fontWeight:'bold'}}>Konu</Form.Label>
                <Form.Control 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Konu başlığı" 
                  size="sm"
                />
              </Form.Group>
              
              <Form.Group className="mb-2">
                <Form.Label style={{fontSize: '0.85rem', fontWeight:'bold'}}>Mesajınız</Form.Label>
                <Form.Control 
                  as="textarea" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3} 
                  placeholder="Sorunuzu buraya yazın..." 
                  size="sm"
                />
              </Form.Group>

              <div className="d-grid mt-3">
                <Button variant="success" size="sm" type="submit">
                  Gönder 🚀
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      )}

      {!isOpen && (
        <Button 
            variant="primary" 
            style={buttonStyle} 
            onClick={toggleChat}
            className="hover-effect"
        >
          💬
        </Button>
      )}
    </div>
  );
}

export default ChatWidget;