import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartPulse, Phone, Mail, MapPin, Clock, ShieldCheck, Award } from 'lucide-react';
import logoImg from '../assets/Jeevandaan Logo.png';
import whatsappImg from '../assets/whatsapp.png';

export default function Footer({ setActiveTab, onOpenAppointment, onOpenEmergency }) {
  const navigate = useNavigate();

  const footerLinks = [
    { path: '/', id: 'home', label: 'Home' },
    { path: '/about', id: 'about', label: 'About Us' },
    { path: '/services', id: 'services', label: 'Services & Departments' },
    { path: '/facilities', id: 'facilities', label: 'Patient Facilities & Tech' },
    { path: '/blog', id: 'blog', label: 'Blog & Health Updates', isNew: true },
    { path: '/gallery', id: 'gallery', label: 'Hospital Photo Gallery' },
    { path: '/contact', id: 'contact', label: 'Contact Us' },
    { path: '/career', id: 'career', label: 'Careers & Recruitment' }
  ];

  const handleFooterNav = (link) => {
    navigate(link.path);
    if (setActiveTab) setActiveTab(link.id);
  };

  return (
    <footer 
      className="hospital-global-footer"
      style={{
        background: 'var(--bg-card-solid)',
        borderTop: '1px solid var(--border-color)',
        padding: '3.5rem 0 2rem',
        marginTop: '3rem'
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .hospital-global-footer {
            margin-top: 1rem !important;
            padding: 2rem 0 1.5rem !important;
          }
        }
      `}</style>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: '2.5rem',
          marginBottom: '3rem'
        }} className="footer-grid">
          
          {/* Col 1: Logo & About */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img 
                src={logoImg} 
                alt="Jeevandaan Hospital Logo" 
                style={{
                  height: '46px',
                  width: 'auto',
                  objectFit: 'contain'
                }} 
              />
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>JEEVANDAAN <span style={{ color: 'var(--accent)' }}>HOSPITAL</span></h3>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--primary)' }}>सर्वे सन्तु निरामया: • CARE BEYOND CURE</p>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Jeevandaan Multispeciality Hospital is dedicated to advanced patient care, emergency trauma triage, and clinical excellence with 500+ beds and 150+ specialist consultants.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <span className="badge badge-success"><ShieldCheck size={14} /> NABH Accredited</span>
              <span className="badge badge-info"><Award size={14} /> NABL Certified Lab</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {footerLinks.map(link => (
                <button
                  key={link.path}
                  onClick={() => handleFooterNav(link)}
                  style={{
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <span>› {link.label}</span>
                  {link.isNew && (
                    <span style={{
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      padding: '0.1rem 0.45rem',
                      borderRadius: '9999px',
                      background: 'var(--primary-gradient)',
                      color: '#ffffff',
                      letterSpacing: '0.04em'
                    }}>
                      UPDATES
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: OPD Timings */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Hospital Hours
            </h4>
            <ul style={{ listStyle: 'none', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 2 }}>
              <li><strong>Emergency & Trauma:</strong> 24 Hours / 7 Days</li>
              <li><strong>OPD Consultation:</strong> 08:00 AM - 08:00 PM</li>
              <li><strong>Visiting Hours:</strong> 04:00 PM - 07:00 PM</li>
              <li><strong>Pharmacy & Blood Bank:</strong> Open 24 Hours</li>
              <li><strong>Diagnostic Lab:</strong> Open 24 Hours</li>
            </ul>
          </div>

          {/* Col 4: Emergency Contacts & Location */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Emergency & Location
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>Kishan Market, 270/1 Berasia Road, Near Bijli Office, Lambhakheda, Bhopal (MP) - 462037</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>Helplines: <strong>9098852357</strong> / <strong>9079036458</strong> / <strong>8269900698</strong></span>
              </div>

              <a
                href="https://wa.me/919098852357?text=Hello%20Jeevandaan%20Hospital!%20I%20would%20like%20to%20inquire%20about%20OPD%20appointments%20and%20hospital%20services."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  textDecoration: 'none',
                  color: 'var(--text-main)',
                  fontWeight: 600,
                  transition: 'opacity 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.85'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
              >
                <img src={whatsappImg} alt="WhatsApp" style={{ width: '18px', height: '18px', borderRadius: '50%', flexShrink: 0 }} />
                <span>WhatsApp: <strong style={{ color: '#25D366' }}>+91 90988 52357</strong> (Chat Directly)</span>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>Jeevandanhospital508@gmail.com</span>
              </div>
            </div>

            <button 
              onClick={onOpenEmergency}
              className="btn btn-emergency"
              style={{ width: '100%', marginTop: '1.25rem', fontSize: '0.9rem' }}
            >
              <Phone size={16} /> 24x7 Emergency SOS
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
          maxWidth: '100%'
        }}>
          <div>
            © {new Date().getFullYear()} Jeevandaan Hospital & Medical Research Center. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <span>Privacy Policy</span>
            <span>Patient Rights</span>
            <span>Terms of Service</span>
            <span>NABH Mandate</span>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
