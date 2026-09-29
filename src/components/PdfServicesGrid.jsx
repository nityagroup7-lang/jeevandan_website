import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Stethoscope, Activity, Ambulance, Bone, ShieldAlert, HeartPulse, 
  Baby, User, Sparkles, ShieldCheck, Award, Calendar, ArrowRight 
} from 'lucide-react';
import { DEPARTMENTS } from '../data/hospitalData';

export default function PdfServicesGrid({ onOpenAppointment, setSelectedDepartment, setActiveTab }) {
  const navigate = useNavigate();

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope size={26} color="var(--primary)" />;
      case 'Ambulance': return <Ambulance size={26} color="#dc2626" />;
      case 'Bone': return <Bone size={26} color="#ea580c" />;
      case 'ShieldAlert': return <ShieldAlert size={26} color="#06b6d4" />;
      case 'HeartPulse': return <HeartPulse size={26} color="#b91c1c" />;
      case 'Baby': return <Baby size={26} color="#ec4899" />;
      case 'User': return <User size={26} color="#8b5cf6" />;
      case 'Sparkles': return <Sparkles size={26} color="#f59e0b" />;
      case 'ShieldCheck': return <ShieldCheck size={26} color="#06b6d4" />;
      case 'Award': return <Award size={26} color="#b91c1c" />;
      default: return <Activity size={26} color="var(--accent)" />;
    }
  };

  const handleDepartmentClick = (deptName) => {
    if (setSelectedDepartment) setSelectedDepartment(deptName);
    if (setActiveTab) setActiveTab('doctors');
    navigate('/doctors');
  };

  return (
    <section style={{ padding: '4rem 0', background: 'var(--bg-main)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ background: 'rgba(185, 28, 28, 0.12)', color: 'var(--primary)' }}>
            <span>Comprehensive Medical Care</span>
          </div>
          <h2 className="section-title">16 Key Clinical Services & Departments</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', fontSize: '1.05rem' }}>
            From 24x7 emergency trauma triage and advanced laparoscopic surgeries to specialized pediatric NICU and dialysis care—all under one roof.
          </p>
        </div>

        {/* 16 Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem'
        }} className="grid-4">
          
          {DEPARTMENTS.map((dept, index) => (
            <div 
              key={dept.id || index}
              className="glass-card"
              style={{
                padding: '1.5rem',
                borderRadius: '18px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              <div>
                {/* Top Badge & Icon */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'rgba(234, 88, 12, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {getServiceIcon(dept.iconName)}
                  </div>

                  <span className="badge badge-info" style={{ fontSize: '0.72rem' }}>
                    {dept.badge || 'Specialized Care'}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  marginBottom: '0.5rem',
                  color: 'var(--text-main)',
                  lineHeight: 1.3
                }}>
                  {dept.name}
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                  marginBottom: '1.25rem'
                }}>
                  {dept.shortDesc}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{
                paddingTop: '0.85rem',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <button
                  onClick={() => handleDepartmentClick(dept.name)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--primary)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: 0
                  }}
                >
                  View Specialists <ArrowRight size={14} />
                </button>

                <button
                  onClick={onOpenAppointment}
                  title="Book Doctor Appointment"
                  style={{
                    background: 'rgba(234, 88, 12, 0.12)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Calendar size={15} />
                </button>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom Banner */}
        <div style={{
          marginTop: '3.5rem',
          background: 'var(--primary-gradient)',
          borderRadius: '20px',
          padding: '2rem 1.5rem',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          boxShadow: '0 12px 32px rgba(185, 28, 28, 0.25)'
        }}>
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.4rem', color: '#ffffff' }}>
              Looking for a Specific Doctor or Consultation Time?
            </h3>
            <p style={{ fontSize: '0.98rem', opacity: 0.9 }}>
              Book an appointment with Bhopal’s senior super specialists or call our 24/7 hotline.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              onClick={onOpenAppointment}
              className="btn"
              style={{
                background: '#ffffff',
                color: 'var(--primary)',
                fontWeight: 800,
                padding: '0.85rem 1.75rem',
                borderRadius: '12px'
              }}
            >
              <Calendar size={18} /> Book Appointment
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .grid-4 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
