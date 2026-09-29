import React, { useState } from 'react';
import { Search, Star, Clock, MapPin, Calendar, Award, Stethoscope, Filter, UserCheck } from 'lucide-react';
import { DOCTORS, DEPARTMENTS } from '../data/hospitalData';
import defaultDoctorAvatar from '../assets/default_doctor_avatar.svg';

export default function DoctorDirectory({ onSelectDoctor, selectedDepartment, setSelectedDepartment }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesDept = !selectedDepartment || doc.department.toLowerCase().includes(selectedDepartment.toLowerCase());
    const matchesSearch = !searchQuery || 
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  return (
    <section style={{ padding: '4.5rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag">
            <UserCheck size={16} /> World-Class Specialists
          </div>
          <h2 className="section-title">Find Doctor & Book OPD Consultation</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Choose from our renowned senior consultants, department heads, and international fellowship doctors.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="glass-card" style={{
          padding: '1.25rem 1.5rem',
          marginBottom: '2.5rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          flexWrap: 'wrap',
          maxWidth: '100%'
        }}>
          {/* Department Select Filter */}
          <div style={{ flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '0.6rem', maxWidth: '100%' }}>
            <Filter size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
            <select 
              className="form-select"
              value={selectedDepartment || ''}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              style={{ margin: 0 }}
            >
              <option value="">All Departments (8 Specialities)</option>
              {DEPARTMENTS.map(d => (
                <option key={d.id} value={d.name}>{d.name}</option>
              ))}
            </select>
          </div>

          {/* Text Search Input */}
          <div style={{ flex: '1 1 240px', position: 'relative', maxWidth: '100%' }}>
            <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text"
              className="form-input"
              placeholder="Search doctor, specialty, condition..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '2.75rem', margin: 0 }}
            />
          </div>

          {/* Clear Filters */}
          {(selectedDepartment || searchQuery) && (
            <button 
              onClick={() => { setSelectedDepartment(''); setSearchQuery(''); }}
              className="btn btn-secondary"
              style={{ fontSize: '0.85rem', padding: '0.65rem 1rem' }}
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Doctors Grid */}
        {filteredDoctors.length === 0 ? (
          <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
            <Stethoscope size={48} color="var(--text-light)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>No Doctors Found</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.4rem' }}>
              Try adjusting your search query or selecting a different department filter.
            </p>
            <button 
              onClick={() => { setSelectedDepartment(''); setSearchQuery(''); }}
              className="btn btn-primary"
              style={{ marginTop: '1.25rem' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid-2">
            {filteredDoctors.map((doctor) => (
              <div 
                key={doctor.id}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  maxWidth: '100%'
                }}
              >
                {/* Doctor Photo */}
                <div style={{ position: 'relative', margin: '0 auto' }}>
                  <img 
                    src={doctor.image || defaultDoctorAvatar} 
                    alt={doctor.name}
                    onError={(e) => { e.currentTarget.src = defaultDoctorAvatar; }}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '20px',
                      objectFit: 'cover',
                      border: '3px solid var(--bg-card-solid)',
                      boxShadow: 'var(--shadow-md)',
                      background: '#f1f5f9'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#ffffff',
                    padding: '0.15rem 0.6rem',
                    borderRadius: '9999px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.2rem',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#0f172a'
                  }}>
                    <Star size={12} fill="#f59e0b" color="#f59e0b" /> {doctor.rating}
                  </div>
                </div>

                {/* Doctor Specs & Booking */}
                <div style={{ flex: '1 1 200px', minWidth: 0, maxWidth: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <span className="badge badge-info" style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                        {doctor.department}
                      </span>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem' }}>
                        {doctor.name}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>
                        {doctor.title}
                      </p>
                    </div>

                    <div style={{ textAlign: 'left' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Consultation</span>
                      <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
                        ₹{doctor.fee}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0.6rem 0' }}>
                    <strong>Qualifications:</strong> {doctor.qualifications}
                  </p>

                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    margin: '0.75rem 0'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Award size={14} color="var(--accent)" /> {doctor.experience}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={14} color="var(--accent)" /> {doctor.timing}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <MapPin size={14} color="var(--accent)" /> {doctor.roomNo}
                    </span>
                  </div>

                  {/* Specialties tags */}
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                    {doctor.specialties.map((spec, i) => (
                      <span key={i} style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        background: 'var(--bg-main)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-muted)'
                      }}>
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Book CTA */}
                  <button 
                    onClick={() => onSelectDoctor(doctor)}
                    className="btn btn-primary"
                    style={{ width: '100%', fontSize: '0.9rem', padding: '0.7rem' }}
                  >
                    <Calendar size={16} /> Book Appointment with {doctor.name}
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
