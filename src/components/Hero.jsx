import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, ShieldCheck, Award, Stethoscope, Bed, ThumbsUp, Activity, ArrowRight, PhoneCall, Star, CheckCircle } from 'lucide-react';
import { DEPARTMENTS, HOSPITAL_STATS, PDF_BOOKLET_DATA } from '../data/hospitalData';

export default function Hero({ onOpenAppointment, onOpenEmergency, setActiveTab, setSelectedDepartment }) {
  const navigate = useNavigate();
  const [selectedDept, setSelectedDept] = useState('');
  const [doctorQuery, setDoctorQuery] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  const handleQuickSearch = (e) => {
    e.preventDefault();
    if (selectedDept && setSelectedDepartment) {
      setSelectedDepartment(selectedDept);
    }
    if (setActiveTab) setActiveTab('doctors');
    navigate('/doctors');
  };

  const getStatIcon = (iconName) => {
    switch(iconName) {
      case 'Award': return <Award size={28} color="var(--primary)" />;
      case 'Stethoscope': return <Stethoscope size={28} color="#10b981" />;
      case 'Bed': return <Bed size={28} color="#8b5cf6" />;
      case 'ThumbsUp': return <ThumbsUp size={28} color="#f59e0b" />;
      default: return <Activity size={28} color="var(--accent)" />;
    }
  };

  return (
    <section style={{
      position: 'relative',
      padding: '3rem 0 2.5rem',
      background: 'radial-gradient(circle at 80% 20%, rgba(234, 88, 12, 0.1) 0%, rgba(185, 28, 28, 0.03) 50%, transparent 100%)',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100vw'
    }}>
      {/* Subtle background decorative shapes */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(234, 88, 12, 0.12) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Top Empanelment & Tagline Ribbon */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '1.25rem'
        }}>
          <div className="section-tag" style={{ background: 'rgba(234, 88, 12, 0.15)', color: 'var(--accent)' }}>
            <ShieldCheck size={16} style={{ flexShrink: 0 }} /> MP Govt Deemed Empanelled Hospital
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            background: 'rgba(245, 158, 11, 0.12)',
            color: '#d97706',
            fontSize: '0.82rem',
            fontWeight: 700
          }}>
            <Star size={15} fill="#f59e0b" color="#f59e0b" />
            <span>4.1 Google Average Rating</span>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            background: 'rgba(16, 185, 129, 0.12)',
            color: '#059669',
            fontSize: '0.82rem',
            fontWeight: 700
          }}>
            <CheckCircle size={15} />
            <span>24x7 Critical & Emergency Response</span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2.5rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Hero Content */}
          <div>
            <h1 className="hero-title" style={{
              fontSize: '3.1rem',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '1.1rem',
              color: 'var(--text-main)',
              wordBreak: 'break-word',
              overflowWrap: 'break-word'
            }}>
              Your Health | Our Priority <br />
              <span style={{
                background: 'var(--primary-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Trusted Care. Seamless Support.
              </span>
            </h1>

            <p style={{
              fontSize: '1.08rem',
              color: 'var(--text-muted)',
              marginBottom: '1.75rem',
              maxWidth: '580px',
              lineHeight: 1.65
            }}>
              Located in Lambakheda, Bhopal, <strong>JEEVANDAAN Multi-Speciality Hospital</strong> blends advanced medical technology, a team of highly qualified doctors, and a patient-first approach to provide trusted healthcare under one roof.
            </p>

            {/* CTA Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.25rem', width: '100%' }}>
              <button 
                onClick={onOpenAppointment}
                className="btn btn-primary"
                style={{ padding: '0.9rem 1.8rem', fontSize: '1.05rem', boxShadow: '0 8px 24px rgba(185, 28, 28, 0.3)' }}
              >
                <Calendar size={20} /> Book Doctor Appointment <ArrowRight size={18} />
              </button>

              <button 
                onClick={onOpenEmergency}
                className="btn btn-emergency"
                style={{ padding: '0.9rem 1.5rem', fontSize: '1.05rem' }}
              >
                <PhoneCall size={20} /> 24x7 Emergency SOS
              </button>
            </div>

            {/* Live OPD Notification banner */}
            <div className="glass-card" style={{
              padding: '0.85rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.75rem',
              borderRadius: '14px',
              borderLeft: '4px solid var(--accent)',
              maxWidth: '100%'
            }}>
              <div className="live-pulse" style={{ flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <strong style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>24/7 OPD & Emergency Desk:</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginLeft: '0.4rem' }}>
                  Call Helpline: <strong>9098852357</strong> / <strong>8269900698</strong>
                </span>
              </div>
              <button 
                onClick={() => {
                  if (setActiveTab) setActiveTab('portal');
                  navigate('/portal');
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  padding: 0
                }}
              >
                Track Live OPD Queue
              </button>
            </div>

          </div>

          {/* Right Hero Image Card & Quick Booking Search */}
          <div>
            <div className="glass-card" style={{ padding: '2rem', borderRadius: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Search size={22} color="var(--primary)" />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Quick Doctor & Slot Search</h3>
              </div>

              <form onSubmit={handleQuickSearch}>
                <div className="form-group">
                  <label className="form-label">Select Speciality (16 Departments)</label>
                  <select 
                    className="form-select"
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                  >
                    <option value="">-- Select Clinical Speciality --</option>
                    {DEPARTMENTS.map(dept => (
                      <option key={dept.id} value={dept.name}>{dept.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Doctor Name (Optional)</label>
                  <input 
                    type="text"
                    className="form-input"
                    placeholder="e.g. Dr. Manohar Malviye"
                    value={doctorQuery}
                    onChange={(e) => setDoctorQuery(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Date</label>
                  <input 
                    type="date"
                    className="form-input"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <button 
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem', padding: '0.85rem' }}
                >
                  <Search size={18} /> Find Specialist Doctors
                </button>
              </form>

              <div style={{
                marginTop: '1.25rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.5rem',
                fontSize: '0.82rem',
                color: 'var(--text-muted)'
              }}>
                <span>✓ Cashless Insurance Supported</span>
                <span>✓ Zero Booking Fee</span>
              </div>
            </div>
          </div>

        </div>

        {/* Key Hospital Statistics Bar */}
        <div style={{
          marginTop: '3.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem'
        }} className="stats-grid">
          {HOSPITAL_STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                borderRadius: '16px'
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'rgba(234, 88, 12, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {getStatIcon(stat.iconName)}
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>
                  {stat.value}
                </h3>
                <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Value Ticker Banner */}
        <div style={{
          marginTop: '2.5rem',
          background: 'rgba(234, 88, 12, 0.08)',
          border: '1px solid var(--border-highlight)',
          borderRadius: '12px',
          padding: '0.75rem 1rem',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          fontSize: '0.85rem',
          fontWeight: 700,
          color: 'var(--primary)',
          maxWidth: '100%'
        }}>
          <span>✦ Personalized Care</span>
          <span>✦ Experienced Professionals</span>
          <span>✦ Advanced Technology</span>
          <span>✦ Preventive Healthcare</span>
          <span>✦ 24x7 Critical Response</span>
        </div>

        {/* 4-Step Patient Journey Section */}
        <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
          <div className="section-tag">
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="section-title">Your Healthcare Journey With Us</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2.5rem' }}>
            We ensure a seamless, transparent, and compassionate experience from initial consultation to complete recovery.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            textAlign: 'left'
          }} className="stats-grid">
            {[
              { num: '01', title: 'Schedule Appointment', desc: 'Book online or call our 24/7 hotline to get an instant OPD token.' },
              { num: '02', title: 'Specialist Consultation', desc: 'Thorough diagnosis & evaluation with Bhopal’s leading senior consultants.' },
              { num: '03', title: 'Personalized Treatment', desc: 'Customized evidence-based medical, surgical, or laparoscopic care.' },
              { num: '04', title: 'Ongoing Recovery', desc: 'Post-treatment follow-ups, rehab therapy, and 24/7 health assistance.' }
            ].map((step, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.75rem', position: 'relative' }}>
                <span style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'var(--accent)',
                  opacity: 0.25,
                  position: 'absolute',
                  top: '1rem',
                  right: '1.25rem'
                }}>
                  {step.num}
                </span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .hero-title { font-size: 1.85rem !important; line-height: 1.25 !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
