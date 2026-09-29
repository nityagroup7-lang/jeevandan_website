import React from 'react';
import { MapPin, Phone, Mail, Globe, Clock, ShieldCheck } from 'lucide-react';
import contactDoctorImg from '../assets/contact_doctor.jpg';
import whatsappImg from '../assets/whatsapp.png';
import { PDF_BOOKLET_DATA } from '../data/hospitalData';

export default function ContactInfoBar({ onOpenEmergency, onOpenAppointment }) {
  const { contact } = PDF_BOOKLET_DATA;

  return (
    <section style={{
      padding: '4rem 0',
      background: 'var(--bg-card-solid)',
      borderTop: '1px solid var(--border-color)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Top Callout Banner Box */}
        <div style={{
          background: 'var(--bg-main)',
          border: '2px solid #801815',
          borderRadius: '20px',
          padding: '1.5rem 2rem',
          textAlign: 'center',
          maxWidth: '1000px',
          margin: '0 auto 3.5rem auto',
          boxShadow: '0 8px 30px rgba(128, 24, 21, 0.08)'
        }}>
          <p style={{
            fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
            fontWeight: 600,
            color: '#801815',
            marginBottom: '0.4rem',
            lineHeight: 1.3
          }}>
            Government Employees, Insurance Holders, Wellness Members -
          </p>
          <h3 style={{
            fontSize: 'clamp(1.3rem, 2.2vw, 1.85rem)',
            fontWeight: 900,
            color: '#600a12',
            letterSpacing: '0.02em',
            margin: 0
          }}>
            JEEVANDAAN IS HERE FOR YOU!
          </h3>
        </div>

        {/* GET IN TOUCH Main Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="get-in-touch-grid">
          
          {/* Left Column: Direct Info */}
          <div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 2.4vw, 2.3rem)',
              fontWeight: 900,
              color: '#b45309',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
              letterSpacing: '0.02em'
            }}>
              GET IN TOUCH
            </h2>
            
            <div style={{
              width: '110px',
              height: '3px',
              background: '#b45309',
              marginBottom: '2.25rem',
              borderRadius: '2px'
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              
              {/* Phone No. */}
              <div>
                <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  Phone No.
                </p>
                <p style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.3rem)', fontWeight: 800, color: '#7a1a10', lineHeight: 1.4, margin: 0 }}>
                  9098852357, 9079036458, 8269900698
                </p>
              </div>

              {/* WhatsApp Chat Direct */}
              <div>
                <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  WhatsApp Online Helpdesk
                </p>
                <a
                  href="https://wa.me/919098852357?text=Hello%20Jeevandaan%20Hospital!%20I%20would%20like%20to%20inquire%20about%20appointments%20and%20treatments."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    background: 'rgba(37, 211, 102, 0.1)',
                    border: '1px solid rgba(37, 211, 102, 0.4)',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    color: '#075E54',
                    fontWeight: 800,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = 'rgba(37, 211, 102, 0.2)'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'rgba(37, 211, 102, 0.1)'}
                >
                  <img src={whatsappImg} alt="WhatsApp" style={{ width: '22px', height: '22px', borderRadius: '50%' }} />
                  <span>Chat on WhatsApp: +91 90988 52357</span>
                </a>
              </div>

              {/* Website */}
              <div>
                <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  Website
                </p>
                <a 
                  href="http://www.jeevandaanhospital.com" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.3rem)', fontWeight: 800, color: '#7a1a10', textDecoration: 'none', margin: 0 }}
                >
                  www.jeevandaanhospital.com
                </a>
              </div>

              {/* Email */}
              <div>
                <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  Email
                </p>
                <a 
                  href="mailto:Jeevandanhospital508@gmail.com" 
                  style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.3rem)', fontWeight: 800, color: '#7a1a10', textDecoration: 'none', wordBreak: 'break-all', margin: 0 }}
                >
                  Jeevandanhospital508@gmail.com
                </a>
              </div>

              {/* Address */}
              <div>
                <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  Address
                </p>
                <p style={{ fontSize: 'clamp(1.05rem, 1.25vw, 1.25rem)', fontWeight: 800, color: '#7a1a10', lineHeight: 1.5, margin: '0 0 0.85rem 0' }}>
                  Kishan Market, 270/1 Berasia Road, Near Bijli Office, Lambhakheda, Bhopal (MP) - 462037
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Kishan+Market,+270/1+Berasia+Road,+Near+Bijli+Office,+Lambakheda,+Bhopal,+Madhya+Pradesh+462037"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 1.25rem',
                      fontSize: '0.95rem',
                      borderRadius: '10px',
                      textDecoration: 'none'
                    }}
                  >
                    <MapPin size={18} />
                    <span>Get Directions</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Kishan+Market,+270/1+Berasia+Road,+Near+Bijli+Office,+Lambakheda,+Bhopal+MP+462037"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 1.1rem',
                      fontSize: '0.95rem',
                      borderRadius: '10px',
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Globe size={16} color="var(--primary)" />
                    <span>Open in Maps</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Doctor Image */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img 
              src={contactDoctorImg} 
              alt="Jeevandaan Hospital Doctor Helplines & Front Desk Support" 
              style={{
                width: '100%',
                maxWidth: '440px',
                height: 'auto',
                borderRadius: '20px',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)',
                objectFit: 'cover'
              }}
            />
          </div>

        </div>

        {/* Interactive Google Map & Location Details Section */}
        <div style={{
          marginTop: '4.5rem',
          background: 'var(--bg-main)',
          border: '1px solid var(--border-color)',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
        }}>
          {/* Map Header Bar */}
          <div style={{
            padding: '2rem 2.5rem',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            background: 'linear-gradient(135deg, rgba(185, 28, 28, 0.04), transparent)'
          }}>
            <div>
              <div className="section-tag" style={{ background: 'rgba(185, 28, 28, 0.12)', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                <MapPin size={14} />
                <span>Hospital Navigation & Location</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.3rem, 2vw, 1.7rem)', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 0.4rem 0' }}>
                Visit Jeevandaan Multi-Speciality Hospital
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>
                Kishan Market, 270/1 Berasia Road, Near Bijli Office, Lambhakheda, Bhopal (MP) - 462037
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Kishan+Market,+270/1+Berasia+Road,+Near+Bijli+Office,+Lambakheda,+Bhopal,+Madhya+Pradesh+462037"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.4rem',
                  fontSize: '0.95rem',
                  borderRadius: '12px',
                  textDecoration: 'none'
                }}
              >
                <MapPin size={18} />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                href={`tel:${contact.phones[0]}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.95rem',
                  borderRadius: '12px',
                  background: 'var(--bg-card-solid)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <Phone size={16} color="var(--primary)" />
                <span>Call Helpdesk</span>
              </a>
            </div>
          </div>

          {/* Map Grid: Info Strip + Interactive Embed */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '340px 1fr',
            minHeight: '420px'
          }} className="map-embed-grid">
            
            {/* Left Location Features */}
            <div style={{
              padding: '2rem',
              background: 'var(--bg-card-solid)',
              borderRight: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              justifyContent: 'space-between'
            }}>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} color="var(--primary)" /> Key Access & Landmarks
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(185, 28, 28, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--primary)' }}>
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)', margin: '0 0 0.15rem 0' }}>Prominent Landmark</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Near Bijli Office, Kishan Market, Berasia Road</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#059669' }}>
                      <Clock size={16} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)', margin: '0 0 0.15rem 0' }}>24x7 Emergency Entry</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Dedicated Ambulance Ramp & Urgent Casualty Gate</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#0891b2' }}>
                      <Globe size={16} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)', margin: '0 0 0.15rem 0' }}>City Transit Distance</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Bhopal Junction: ~12 km | Halalpur: ~15 km | Airport: ~18 km</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout box */}
              <div style={{
                background: 'rgba(185, 28, 28, 0.05)',
                border: '1px dashed rgba(185, 28, 28, 0.3)',
                padding: '1rem',
                borderRadius: '12px'
              }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', margin: 0, lineHeight: 1.4 }}>
                  🚗 <strong>Free Patient Parking Available</strong>: Safe & spacious car/two-wheeler parking available inside the hospital premises.
                </p>
              </div>
            </div>

            {/* Right Interactive Google Map Embed */}
            <div style={{ position: 'relative', width: '100%', minHeight: '380px' }}>
              <iframe
                title="Jeevandaan Multi-Speciality Hospital Google Maps Location"
                src="https://maps.google.com/maps?q=Kishan+Market,+270/1+Berasia+Road,+Near+Bijli+Office,+Lambhakheda,+Bhopal+MP+462037&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: '380px',
                  display: 'block'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .get-in-touch-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .map-embed-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

