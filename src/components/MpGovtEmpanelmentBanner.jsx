import React from 'react';
import { Building2, ShieldCheck, CheckCircle2, PhoneCall, Award, FileText } from 'lucide-react';
import { PDF_BOOKLET_DATA } from '../data/hospitalData';
import mpGovtSeal from '../assets/mp_govt_seal.png';

export default function MpGovtEmpanelmentBanner({ onOpenEmergency, onOpenAppointment }) {
  const { mpGovtEmpanelment } = PDF_BOOKLET_DATA;

  return (
    <section style={{
      padding: '3rem 0',
      background: 'linear-gradient(135deg, rgba(185, 28, 28, 0.04) 0%, rgba(234, 88, 12, 0.08) 100%)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        
        <div className="glass-card" style={{
          padding: '2.25rem',
          borderRadius: '24px',
          border: '1px solid var(--border-highlight)',
          background: 'var(--bg-card-solid)',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative'
        }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 0.6fr',
            gap: '2rem',
            alignItems: 'center'
          }} className="empanelment-grid">

            {/* Left Content */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(185, 28, 28, 0.12)',
                color: 'var(--primary)',
                fontWeight: 700,
                fontSize: '0.85rem',
                marginBottom: '1rem'
              }}>
                <Award size={16} /> Official Government Empanelment
              </div>

              <h2 style={{
                fontSize: '1.9rem',
                fontWeight: 800,
                color: 'var(--text-main)',
                lineHeight: 1.25,
                marginBottom: '0.75rem'
              }}>
                Recognized as a Deemed Empanelled Hospital by the <span style={{ color: 'var(--primary)' }}>Government of Madhya Pradesh</span>
              </h2>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 600 }}>
                {mpGovtEmpanelment.coverage}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.75rem 1rem',
                background: 'rgba(234, 88, 12, 0.08)',
                borderRadius: '12px',
                borderLeft: '4px solid var(--accent)',
                marginBottom: '1.5rem',
                fontSize: '0.9rem',
                color: 'var(--text-main)',
                fontWeight: 600
              }}>
                <FileText size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                <span>Medical expenses are reimbursable under <strong>MP Civil Services (Medical Attendance) Rules, 2022</strong>.</span>
              </div>

              {/* Department Badges Grid */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-light)', marginBottom: '0.6rem', fontWeight: 700 }}>
                  Covered MP Government Departments:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {mpGovtEmpanelment.departments.map((dept, idx) => (
                    <span 
                      key={idx}
                      style={{
                        padding: '0.3rem 0.75rem',
                        borderRadius: '8px',
                        background: 'var(--bg-main)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--text-main)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <CheckCircle2 size={13} color="var(--accent)" /> {dept}
                    </span>
                  ))}
                  <span style={{ padding: '0.3rem 0.6rem', fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)' }}>
                    & Many More...
                  </span>
                </div>
              </div>

              <div style={{
                padding: '0.85rem 1.25rem',
                background: 'var(--primary-gradient)',
                borderRadius: '12px',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.95rem',
                display: 'inline-block'
              }}>
                {mpGovtEmpanelment.callout}
              </div>

            </div>

            {/* Right Card / Seal & Direct Helpline */}
            <div style={{
              background: 'var(--bg-main)',
              padding: '1.75rem',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              textAlign: 'center'
            }}>
              {mpGovtSeal ? (
                <img 
                  src={mpGovtSeal} 
                  alt="MP Government Seal" 
                  style={{ height: '90px', width: 'auto', margin: '0 auto 1rem', objectFit: 'contain' }}
                />
              ) : (
                <Building2 size={64} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
              )}

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                Government Employees & Dependents Helpline
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Dedicated desk for reimbursement guidance, cashless query, & smooth admission assistance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {mpGovtEmpanelment.helplines.map((num, i) => (
                  <a 
                    key={i}
                    href={`tel:${num}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(234, 88, 12, 0.1)',
                      color: 'var(--primary)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      textDecoration: 'none'
                    }}
                  >
                    <PhoneCall size={16} /> +91 {num}
                  </a>
                ))}
              </div>

              <button 
                onClick={onOpenAppointment}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.75rem', fontSize: '0.9rem' }}
              >
                Book Priority Consultation
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .empanelment-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
