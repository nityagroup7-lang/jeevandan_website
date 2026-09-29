import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartPulse, Brain, Bone, Baby, Activity, Stethoscope, ShieldAlert, Ambulance, ChevronRight, X, CheckCircle, Calendar } from 'lucide-react';
import { DEPARTMENTS } from '../data/hospitalData';

export default function Departments({ onOpenAppointment, setSelectedDepartment, setActiveTab }) {
  const navigate = useNavigate();
  const [selectedDeptModal, setSelectedDeptModal] = useState(null);

  const getDepartmentIcon = (iconName, color) => {
    const props = { size: 32, color };
    switch(iconName) {
      case 'HeartPulse': return <HeartPulse {...props} />;
      case 'Brain': return <Brain {...props} />;
      case 'Bone': return <Bone {...props} />;
      case 'Baby': return <Baby {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'Ambulance': return <Ambulance {...props} />;
      default: return <Activity {...props} />;
    }
  };

  const handleBookDeptDoctor = (deptName) => {
    if (setSelectedDepartment) setSelectedDepartment(deptName);
    setSelectedDeptModal(null);
    if (setActiveTab) setActiveTab('doctors');
    navigate('/doctors');
  };

  return (
    <section style={{ padding: '4.5rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Stethoscope size={16} /> Clinical Excellence
          </div>
          <h2 className="section-title">Centres of Excellence & Departments</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Powered by international-standard technology, super-specialist surgeons, and round-the-clock emergency support.
          </p>
        </div>

        {/* Department Grid */}
        <div className="grid-4">
          {DEPARTMENTS.map((dept) => (
            <div 
              key={dept.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: `${dept.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {getDepartmentIcon(dept.iconName, dept.color)}
                  </div>
                  <span className="badge badge-info" style={{ fontSize: '0.72rem' }}>
                    {dept.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                  {dept.name}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {dept.shortDesc}
                </p>
              </div>

              <div>
                <div style={{
                  padding: '0.6rem 0.85rem',
                  borderRadius: '8px',
                  background: 'var(--bg-main)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <CheckCircle size={14} color={dept.color} /> {dept.stats}
                </div>

                <button 
                  onClick={() => setSelectedDeptModal(dept)}
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.88rem', justifyContent: 'space-between' }}
                >
                  Explore Department <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Department Detail Modal */}
      {selectedDeptModal && (
        <div className="modal-overlay" onClick={() => setSelectedDeptModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: `${selectedDeptModal.color}18`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {getDepartmentIcon(selectedDeptModal.iconName, selectedDeptModal.color)}
                </div>
                <div>
                  <span className="badge badge-info">{selectedDeptModal.badge}</span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '0.2rem' }}>{selectedDeptModal.name}</h3>
                </div>
              </div>
              <button 
                onClick={() => setSelectedDeptModal(null)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>
            </div>

            <div style={{ marginBottom: '1.5rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
              <p style={{ marginBottom: '1rem' }}>{selectedDeptModal.fullDesc}</p>
              <div style={{
                padding: '1rem',
                borderRadius: '12px',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <CheckCircle size={20} color={selectedDeptModal.color} />
                <div>
                  <strong style={{ fontSize: '0.92rem', color: 'var(--text-main)' }}>Key Department Highlight:</strong>
                  <div style={{ fontSize: '0.88rem' }}>{selectedDeptModal.stats}</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                onClick={() => handleBookDeptDoctor(selectedDeptModal.name)}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <Calendar size={18} /> View {selectedDeptModal.name} Doctors
              </button>
              <button 
                onClick={() => setSelectedDeptModal(null)}
                className="btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
