import React from 'react';
import { 
  Target, HeartPulse, Quote, CheckCircle2, User, Building2, 
  Award, Star, Download, Calendar, ShieldCheck, MapPin, PhoneCall, Sparkles 
} from 'lucide-react';
import { PDF_BOOKLET_DATA, HOSPITAL_STATS } from '../data/hospitalData';
import directorImg from '../assets/raja_choudhary.jpg';
import bookletPdf from '../assets/Jeevandaan Company Profile Booklet.pdf';

export default function AboutUs({ onOpenAppointment }) {
  const { 
    aboutOverview, 
    mission, 
    vision, 
    director, 
    whyChooseUs, 
    rating, 
    ratingSource,
    mpGovtEmpanelment,
    contact 
  } = PDF_BOOKLET_DATA;

  const pillarDescriptions = [
    'Leading senior consultants and super-specialist surgeons providing evidence-based healthcare.',
    'Advanced diagnostic pathology and 24/7 imaging under one single roof for swift care.',
    'Ultra-modern modular OTs, Level-III NICU, and advanced critical care ICU suites.',
    'Transparent, budget-friendly healthcare packages with zero hidden hospital costs.',
    'Round-the-clock emergency triage, trauma resuscitation bays, and ICU-on-wheels ambulance.',
    'Compassionate medical care focusing on patient comfort, safety, dignity, and family trust.',
    'Hassle-free insurance pre-authorization, TPA coordination, and prompt discharge support.'
  ];

  return (
    <section style={{ padding: '3.5rem 0 5rem', background: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Top Breadcrumb / Tagline */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2.5rem',
          paddingBottom: '1.25rem',
          borderBottom: '1px solid var(--border-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div className="section-tag" style={{ background: 'rgba(234, 88, 12, 0.12)', color: 'var(--accent)' }}>
              <Building2 size={16} /> About Jeevandaan Hospital
            </div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              background: 'rgba(245, 158, 11, 0.12)',
              color: '#d97706',
              fontSize: '0.85rem',
              fontWeight: 700
            }}>
              <Star size={15} fill="#f59e0b" color="#f59e0b" />
              <span>{rating} {ratingSource}</span>
            </div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              background: 'rgba(185, 28, 28, 0.1)',
              color: 'var(--primary)',
              fontSize: '0.85rem',
              fontWeight: 700
            }}>
              <MapPin size={14} />
              <span>Lambakheda, Bhopal</span>
            </div>
          </div>

          {/* Download Official Booklet Button */}
          <a
            href={bookletPdf}
            download="Jeevandaan_Company_Profile_Booklet.pdf"
            className="btn btn-secondary"
            style={{
              padding: '0.55rem 1.15rem',
              fontSize: '0.88rem',
              fontWeight: 700,
              gap: '0.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none'
            }}
          >
            <Download size={16} /> Download Official Booklet PDF
          </a>
        </div>

        {/* Section Header - Split Layout */}
        <div 
          className="about-split-header" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.05fr 1.15fr', 
            gap: '3rem', 
            alignItems: 'center', 
            marginBottom: '3.5rem' 
          }}
        >
          {/* Left Column: Heading & Badge */}
          <div>
            <span style={{ 
              color: 'var(--accent)', 
              fontWeight: 800, 
              fontSize: '0.95rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              display: 'block',
              marginBottom: '0.5rem'
            }}>
              Bhopal's Trusted Multi-Speciality Center
            </span>
            <h1 
              style={{ 
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', 
                lineHeight: 1.2, 
                fontWeight: 800,
                color: 'var(--text-main)',
                margin: 0
              }}
            >
              Trusted Healthcare for <span style={{
                background: 'var(--primary-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Individuals & Families</span>
            </h1>
          </div>

          {/* Right Column: PDF Page 2 Overview Text */}
          <div style={{ 
            borderLeft: '4px solid var(--accent)', 
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

        {/* Mission & Vision Cards (Page 2 of Booklet) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.75rem',
          marginBottom: '3.5rem'
        }} className="grid-2">
          
          {/* Our Mission */}
          <div className="glass-card" style={{ 
            padding: '2.25rem', 
            borderTop: '5px solid var(--primary)',
            borderRadius: '20px',
            position: 'relative'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'rgba(185, 28, 28, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
              marginBottom: '1.25rem'
            }}>
              <Target size={30} />
            </div>
            <div style={{
              display: 'inline-block',
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--primary)',
              marginBottom: '0.35rem'
            }}>
              Guiding Principle
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.85rem', color: 'var(--text-main)' }}>
              Our Mission
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '1rem', margin: 0 }}>
              {mission}
            </p>
          </div>

          {/* Our Vision */}
          <div className="glass-card" style={{ 
            padding: '2.25rem', 
            borderTop: '5px solid var(--accent)',
            borderRadius: '20px',
            position: 'relative'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'rgba(234, 88, 12, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent)',
              marginBottom: '1.25rem'
            }}>
              <HeartPulse size={30} />
            </div>
            <div style={{
              display: 'inline-block',
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--accent)',
              marginBottom: '0.35rem'
            }}>
              Long-term Aspiration
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.85rem', color: 'var(--text-main)' }}>
              Our Vision
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '1rem', margin: 0 }}>
              {vision}
            </p>
          </div>

        </div>

        {/* Director's Message Block (Page 2 of Booklet - Raja Choudhary) */}
        <div className="glass-card" style={{
          padding: '2.75rem',
          borderRadius: '24px',
          marginBottom: '4rem',
          background: 'linear-gradient(135deg, var(--bg-card-solid) 0%, rgba(234, 88, 12, 0.05) 100%)',
          border: '1px solid var(--border-highlight)',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '0.38fr 1fr',
            gap: '2.75rem',
            alignItems: 'center'
          }} className="director-grid">

            {/* Director Photo Frame */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                position: 'relative',
                display: 'inline-block',
                borderRadius: '22px',
                padding: '6px',
                background: 'var(--primary-gradient)',
                boxShadow: '0 12px 30px rgba(185, 28, 28, 0.25)'
              }}>
                <img 
                  src={directorImg} 
                  alt={director.name}
                  style={{
                    width: '200px',
                    height: '260px',
                    objectFit: 'cover',
                    borderRadius: '18px',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{
                  display: 'none',
                  width: '200px',
                  height: '260px',
                  borderRadius: '18px',
                  background: 'var(--bg-main)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}>
                  <User size={64} color="var(--primary)" />
                </div>
              </div>

              <div style={{ marginTop: '1.25rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 0.25rem' }}>
                  {director.name}
                </h4>
                <p style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent)', margin: 0 }}>
                  {director.title}
                </p>
              </div>
            </div>

            {/* Director Message Content */}
            <div style={{ position: 'relative' }}>
              <Quote size={52} color="var(--accent)" style={{ opacity: 0.2, position: 'absolute', top: '-18px', left: '-12px' }} />
              
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.9rem',
                borderRadius: '9999px',
                background: 'rgba(185, 28, 28, 0.12)',
                color: 'var(--primary)',
                fontWeight: 700,
                fontSize: '0.82rem',
                marginBottom: '1rem'
              }}>
                <Award size={15} /> Director's Leadership Address
              </div>

              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.2rem', color: 'var(--text-main)' }}>
                Director's Message
              </h3>

              <blockquote style={{
                fontSize: '1.12rem',
                color: 'var(--text-main)',
                fontStyle: 'italic',
                lineHeight: 1.8,
                marginBottom: '1.75rem',
                margin: '0 0 1.5rem',
                position: 'relative',
                zIndex: 1
              }}>
                "{director.message}"
              </blockquote>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-color)'
              }}>
                <div style={{
                  padding: '0.45rem 0.95rem',
                  borderRadius: '10px',
                  background: 'rgba(245, 158, 11, 0.14)',
                  color: '#d97706',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <span>{rating} Average Rating on Google</span>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600
                }}>
                  <ShieldCheck size={18} color="var(--primary)" />
                  <span>Compassionate & Ethical Healthcare</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Why Choose Jeevandaan Section (7 Pillars from Page 2 of Booklet) */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag" style={{ background: 'rgba(234, 88, 12, 0.12)', color: 'var(--accent)' }}>
              <Sparkles size={16} /> 7 Core Pillars of Excellence
            </div>
            <h2 className="section-title">Why Choose Jeevandaan Multi-Speciality Hospital?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '720px' }}>
              From emergency critical care to transparent packages and dedicated patient coordinators, here is why families across Central India place their trust in us.
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
                  padding: '1.75rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.15rem',
                  borderRadius: '18px',
                  transition: 'all 0.3s ease',
                  borderTop: idx === 0 ? '4px solid var(--primary)' : '1px solid var(--border-color)'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(234, 88, 12, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0
                }}>
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                    Pillar 0{idx + 1}
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.35rem', lineHeight: 1.35 }}>
                    {pillar}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                    {pillarDescriptions[idx] || 'Committed to clinical excellence, compassion, and transparent healthcare in Bhopal.'}
                  </p>
                </div>
              </div>
            ))}

            {/* 8th Card: Official Empanelment Spotlight */}
            <div 
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.15rem',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, rgba(185, 28, 28, 0.08) 0%, rgba(234, 88, 12, 0.08) 100%)',
                border: '1px solid var(--border-highlight)'
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'var(--primary-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                flexShrink: 0
              }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  Deemed Empanelment
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.35rem', lineHeight: 1.35 }}>
                  MP Government Recognized
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  Medical expenses reimbursable under MP Civil Services Rules, 2022 for all MP state departments.
                </p>
              </div>
            </div>

            {/* 9th Card: Download Booklet Card */}
            <div 
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '18px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-main)'
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  Hospital Profile
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                  Official Booklet PDF
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  Download the full company profile booklet with all clinical specialities & partners.
                </p>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <a
                  href={bookletPdf}
                  download="Jeevandaan_Company_Profile_Booklet.pdf"
                  className="btn btn-primary"
                  style={{
                    padding: '0.6rem 1.1rem',
                    fontSize: '0.85rem',
                    width: '100%',
                    justifyContent: 'center',
                    textDecoration: 'none'
                  }}
                >
                  <Download size={15} /> Download PDF (4 Pages)
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Call to Action Footer */}
        <div style={{
          background: 'var(--primary-gradient)',
          borderRadius: '24px',
          padding: '2.5rem 2rem',
          color: '#ffffff',
          boxShadow: '0 16px 36px rgba(185, 28, 28, 0.28)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.3rem 0.8rem',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.2)',
              fontSize: '0.82rem',
              fontWeight: 700,
              marginBottom: '0.75rem'
            }}>
              <PhoneCall size={14} /> 24/7 Front Desk & Helplines
            </div>
            <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, margin: '0 0 0.5rem', color: '#ffffff' }}>
              Have Questions or Need Doctor Consultation?
            </h3>
            <p style={{ fontSize: '1rem', opacity: 0.95, margin: 0, maxWidth: '640px' }}>
              Call our dedicated coordinators at <strong>+91 {contact.phones[0]}</strong> or book an appointment online today.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenAppointment}
              className="btn"
              style={{
                background: '#ffffff',
                color: 'var(--primary)',
                padding: '0.9rem 1.8rem',
                fontSize: '1rem',
                fontWeight: 800,
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <Calendar size={18} /> Book OPD Appointment
            </button>

            <a
              href={bookletPdf}
              download="Jeevandaan_Company_Profile_Booklet.pdf"
              className="btn"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                padding: '0.9rem 1.5rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                borderRadius: '12px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Download size={18} /> Download Booklet
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-split-header {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .director-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .grid-2 {
            grid-template-columns: 1fr !important;
          }
          .grid-3 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
