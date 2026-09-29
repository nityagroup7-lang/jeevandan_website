import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Globe, AlertTriangle, ShieldCheck, Car } from 'lucide-react';
import contactDoctorImg from '../assets/contact_doctor.jpg';
import whatsappImg from '../assets/whatsapp.png';
import { PDF_BOOKLET_DATA } from '../data/hospitalData';

export default function ContactUs({ onOpenEmergency }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const { contact } = PDF_BOOKLET_DATA;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section style={{ padding: '4rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Top Callout Banner (Matching Brochure Image) */}
        <div style={{
          background: 'var(--bg-card-solid)',
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

        {/* GET IN TOUCH Main Grid (Matching Brochure Layout) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '3.5rem',
          alignItems: 'center',
          marginBottom: '4.5rem'
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
                      background: 'var(--bg-card-solid)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      fontWeight: 700,
                      textDecoration: 'none'
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

        {/* Secondary Grid: Interactive Form & Emergency Dispatch */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2rem',
          alignItems: 'start'
        }} className="contact-secondary-grid">
          
          {/* Contact Inquiry Form */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              Send Us A Message
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Fill out the form below and our front desk coordination team will reach out within 30 minutes.
            </p>

            {submitted ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid #10b981',
                padding: '2rem',
                borderRadius: '16px',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={48} color="#059669" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#059669' }}>Message Sent Successfully!</h4>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  Thank you for reaching out to Jeevandaan Hospital. Our team will call you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text"
                    required
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input 
                      type="tel"
                      required
                      className="form-input"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email"
                      className="form-input"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject / Department</label>
                  <input 
                    type="text"
                    className="form-input"
                    placeholder="e.g. Doctor inquiry, Lab test, General feedback"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message *</label>
                  <textarea 
                    required
                    className="form-input"
                    rows="4"
                    placeholder="Write your inquiry or message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.9rem', fontSize: '1rem' }}
                >
                  <Send size={18} /> Submit Inquiry Message
                </button>
              </form>
            )}
          </div>

          {/* Quick Helpline & Emergency Ambulance Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(185, 28, 28, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)'
                }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                    24x7 Helpline Numbers
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Immediate Front Desk Support</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {contact.phones.map((ph, idx) => (
                  <a 
                    key={idx}
                    href={`tel:${ph}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.65rem 1rem',
                      borderRadius: '10px',
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border-color)',
                      color: '#7a1a10',
                      fontWeight: 800,
                      fontSize: '1rem',
                      textDecoration: 'none'
                    }}
                  >
                    <Phone size={16} color="var(--primary)" /> +91 {ph}
                  </a>
                ))}
              </div>
            </div>

            {/* Ambulance SOS Box */}
            <div style={{
              background: 'var(--emergency-gradient)',
              borderRadius: '20px',
              padding: '1.5rem',
              color: '#ffffff',
              boxShadow: '0 10px 25px rgba(220, 38, 38, 0.25)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <AlertTriangle size={24} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  24/7 Ambulance SOS
                </h4>
              </div>
              <p style={{ fontSize: '0.88rem', opacity: 0.95, lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Immediate Mobile ICU dispatch for cardiac, trauma & critical emergency patient transport across Bhopal.
              </p>
              <button 
                onClick={onOpenEmergency}
                style={{
                  width: '100%',
                  background: '#ffffff',
                  color: '#dc2626',
                  border: 'none',
                  padding: '0.8rem',
                  borderRadius: '12px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
              >
                Dispatch Emergency Ambulance
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Google Map & Location Details Section */}
        <div style={{
          marginTop: '4.5rem',
          background: 'var(--bg-card-solid)',
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
                  background: 'var(--bg-main)',
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
              background: 'var(--bg-main)',
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
                <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', margin: 0, lineHeight: 1.4, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Car size={16} color="var(--accent)" style={{ flexShrink: 0 }} /> <strong>Free Patient Parking Available</strong>: Safe & spacious car/two-wheeler parking available inside the hospital premises.
                </div>
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
          .get-in-touch-grid, .contact-secondary-grid {
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

