import React from 'react';
import { ShieldCheck, Check, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { HEALTH_PACKAGES } from '../data/hospitalData';

export default function HealthPackages({ onOpenAppointment }) {
  return (
    <section style={{ padding: '4.5rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ background: 'rgba(245, 158, 11, 0.12)', color: '#d97706' }}>
            <Sparkles size={16} /> Preventive Healthcare
          </div>
          <h2 className="section-title">Comprehensive Health Checkup Packages</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Early detection saves lives. Choose customized health checkup packages curated by senior hospital physicians.
          </p>
        </div>

        {/* Health Packages Grid */}
        <div className="grid-2">
          {HEALTH_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className="glass-card"
              style={{
                padding: '1.5rem',
                position: 'relative',
                border: pkg.popular ? '2px solid var(--accent)' : '1px solid var(--border-color)',
                boxShadow: pkg.popular ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                maxWidth: '100%',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                <div>
                  {pkg.popular && (
                    <div style={{
                      background: 'var(--primary-gradient)',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '0.2rem 0.65rem',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 12px rgba(0,180,216,0.4)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      marginBottom: '0.4rem'
                    }}>
                      <Sparkles size={12} /> MOST POPULAR
                    </div>
                  )}
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {pkg.name}
                  </h3>
                  <span style={{ fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 700 }}>
                    {pkg.testsCount}
                  </span>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className="badge badge-danger" style={{ marginBottom: '0.2rem' }}>
                    {pkg.discount}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                    <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      ₹{pkg.price}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                      ₹{pkg.originalPrice}
                    </span>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem', background: 'var(--bg-main)', padding: '0.5rem 0.75rem', borderRadius: '6px' }}>
                👤 <strong>Ideal For:</strong> {pkg.idealFor}
              </p>

              {/* Tests included */}
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ fontSize: '0.9rem', color: 'var(--text-main)', display: 'block', marginBottom: '0.75rem' }}>
                  Included Diagnostics & Tests:
                </strong>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem' }}>
                  {pkg.tests.map((test, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-muted)', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                      <Check size={14} color="#10b981" style={{ flexShrink: 0 }} />
                      <span>{test}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={onOpenAppointment}
                className="btn btn-primary"
                style={{ width: '100%', fontSize: '0.95rem' }}
              >
                <Calendar size={18} /> Book Checkup Package @ ₹{pkg.price}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
