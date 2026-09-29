import React from 'react';
import { Target, HeartPulse, Quote, CheckCircle2, User, Building2, Award, Star } from 'lucide-react';
import { PDF_BOOKLET_DATA } from '../data/hospitalData';
import directorImg from '../assets/raja_choudhary.jpg';

export default function AboutPdfSection({ onOpenAppointment }) {
  const { aboutOverview, mission, vision, director, whyChooseUs, rating } = PDF_BOOKLET_DATA;

  return (
    <section style={{ padding: '4rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Section Header - Split Left & Right */}
        <div 
          className="about-split-header" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1.15fr', 
            gap: '3rem', 
            alignItems: 'center', 
            marginBottom: '3.5rem' 
          }}
        >
          {/* Left Column: Badge & Title */}
          <div>
            <div 
              className="section-tag" 
              style={{ 
                background: 'rgba(234, 88, 12, 0.12)', 
                color: 'var(--accent)',
                display: 'inline-flex',
                marginBottom: '1rem'
              }}
            >
              <Building2 size={16} /> About Jeevandaan Hospital
            </div>
            <h2 
              className="section-title" 
              style={{ 
                fontSize: '2.5rem', 
                lineHeight: 1.25, 
                fontWeight: 800,
                color: 'var(--text-main)',
                margin: 0
              }}
            >
              Trusted Healthcare for Individuals & Families
            </h2>
          </div>

          {/* Right Column: Overview Paragraph */}
          <div style={{ 
            borderLeft: '3px solid var(--accent)', 
            paddingLeft: '1.75rem' 
          }}>
            <p style={{ 
              fontSize: '1.05rem', 
              lineHeight: 1.8, 
              color: 'var(--text-muted)', 
              margin: 0 
            }}>
              {aboutOverview}
            </p>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }} className="grid-2">
          
          <div className="glass-card" style={{ padding: '2rem', borderTop: '4px solid var(--primary)' }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '14px',
              background: 'rgba(185, 28, 28, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
              marginBottom: '1.25rem'
            }}>
              <Target size={28} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              Our Mission
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.98rem' }}>
              {mission}
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderTop: '4px solid var(--accent)' }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '14px',
              background: 'rgba(234, 88, 12, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent)',
              marginBottom: '1.25rem'
            }}>
              <HeartPulse size={28} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              Our Vision
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.98rem' }}>
              {vision}
            </p>
          </div>

        </div>

        {/* Director's Message Block (Page 2 of PDF) */}
        <div className="glass-card" style={{
          padding: '2.5rem',
          borderRadius: '24px',
          marginBottom: '3.5rem',
          background: 'linear-gradient(135deg, var(--bg-card-solid) 0%, rgba(234, 88, 12, 0.04) 100%)',
          border: '1px solid var(--border-highlight)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '0.35fr 1fr',
            gap: '2.5rem',
            alignItems: 'center'
          }} className="director-grid">

            {/* Director Photo Frame */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                position: 'relative',
                display: 'inline-block',
                borderRadius: '20px',
                padding: '6px',
                background: 'var(--primary-gradient)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <img 
                  src={directorImg} 
                  alt={director.name}
                  style={{
                    width: '180px',
                    height: '240px',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{
                  display: 'none',
                  width: '180px',
                  height: '240px',
                  borderRadius: '16px',
                  background: 'var(--bg-main)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}>
                  <User size={64} color="var(--primary)" />
                </div>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {director.name}
                </h4>
                <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)' }}>
                  {director.title}
                </p>
              </div>
            </div>

            {/* Director Message Content */}
            <div style={{ position: 'relative' }}>
              <Quote size={48} color="var(--accent)" style={{ opacity: 0.25, position: 'absolute', top: '-15px', left: '-10px' }} />
              
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.3rem 0.85rem',
                borderRadius: '9999px',
                background: 'rgba(185, 28, 28, 0.12)',
                color: 'var(--primary)',
                fontWeight: 700,
                fontSize: '0.82rem',
                marginBottom: '1rem'
              }}>
                <Award size={14} /> Leadership Message
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-main)' }}>
                Director's Message
              </h3>

              <p style={{
                fontSize: '1.08rem',
                color: 'var(--text-main)',
                fontStyle: 'italic',
                lineHeight: 1.7,
                marginBottom: '1.25rem',
                position: 'relative',
                zIndex: 1
              }}>
                "{director.message}"
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-color)'
              }}>
                <div style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '8px',
                  background: 'rgba(245, 158, 11, 0.12)',
                  color: '#d97706',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <span>{rating} Google Rating</span>
                </div>

                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  Patient-First Ethical Medical Care
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Why Choose Jeevandaan Section (7 Pillars from Page 2 of PDF) */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-tag">
              <span>7 Key Pillars</span>
            </div>
            <h2 className="section-title">Why Choose Jeevandaan Multi-Speciality Hospital?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We are committed to providing compassionate, transparent, and high-quality healthcare at every step of your journey.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }} className="grid-3">
            {whyChooseUs.map((pillar, idx) => (
              <div 
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  borderRadius: '16px'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(234, 88, 12, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0
                }}>
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                    {pillar}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    Delivering world-class clinical standards & compassionate support in Bhopal.
                  </p>
                </div>
              </div>
            ))}

            {/* Extra Card for CTA */}
            <div 
              className="glass-card"
              style={{
                padding: '1.5rem',
                background: 'var(--primary-gradient)',
                color: '#ffffff',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem', color: '#ffffff' }}>
                Need Specialist Consultation?
              </h4>
              <p style={{ fontSize: '0.85rem', opacity: 0.9, marginBottom: '1rem' }}>
                Our expert doctors are ready to assist you round the clock.
              </p>
              <button 
                onClick={onOpenAppointment}
                style={{
                  background: '#ffffff',
                  color: 'var(--primary)',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '10px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer'
                }}
              >
                Book OPD Token
              </button>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-split-header { 
            grid-template-columns: 1fr !important; 
            gap: 1.5rem !important; 
          }
          .about-split-header div:last-child {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 2px solid var(--accent);
            padding-top: 1rem;
          }
          .director-grid { grid-template-columns: 1fr !important; text-align: center; }
        }
      `}</style>
    </section>
  );
}
