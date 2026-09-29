import React, { useState } from 'react';
import { Bed, Activity, RefreshCw, AlertCircle, CheckCircle, Clock, ShieldAlert } from 'lucide-react';
import { INITIAL_BED_DATA } from '../data/hospitalData';

export default function BedTracker({ onOpenEmergency }) {
  const [beds, setBeds] = useState(INITIAL_BED_DATA);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('Just Now');

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      // Simulate slight dynamic bed updates
      setBeds(prev => prev.map(b => {
        const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        const newAvailable = Math.max(1, Math.min(b.total, b.available + delta));
        return {
          ...b,
          available: newAvailable,
          occupied: b.total - newAvailable
        };
      }));
      setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setIsRefreshing(false);
    }, 600);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Urgent':
        return <span className="badge badge-danger"><ShieldAlert size={12} /> Critical (Limited)</span>;
      case 'High Demand':
        return <span className="badge badge-warning"><AlertCircle size={12} /> High Demand</span>;
      default:
        return <span className="badge badge-success"><CheckCircle size={12} /> Beds Available</span>;
    }
  };

  return (
    <section style={{ padding: '4rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <div className="section-tag">
              <Activity size={16} /> Live Bed Availability Matrix
            </div>
            <h2 className="section-title">Hospital Bed & ICU Status</h2>
            <p className="section-subtitle">
              Real-time synchronization with Jeevandaan Hospital Central Nursing & Admission Desk.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={14} /> Last Sync: {lastUpdated}
            </span>
            <button 
              onClick={handleRefresh}
              className="btn btn-secondary"
              disabled={isRefreshing}
              style={{ gap: '0.4rem', padding: '0.6rem 1.1rem' }}
            >
              <RefreshCw size={16} style={{ animation: isRefreshing ? 'spin 1s linear infinite' : 'none' }} />
              Refresh Status
            </button>
          </div>
        </div>

        {/* Beds Cards Grid */}
        <div className="grid-3">
          {beds.map((bed, idx) => {
            const occupancyPct = Math.round((bed.occupied / bed.total) * 100);
            return (
              <div key={idx} className="glass-card" style={{ padding: '1.75rem', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      {bed.category}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '0.1rem' }}>
                      {bed.type}
                    </h3>
                  </div>
                  {getStatusBadge(bed.status)}
                </div>

                {/* Big Count Indicator */}
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.5rem',
                  margin: '1.25rem 0'
                }}>
                  <span style={{ fontSize: '2.8rem', fontWeight: 800, color: bed.available <= 3 ? 'var(--emergency-red)' : 'var(--primary)', lineHeight: 1 }}>
                    {bed.available}
                  </span>
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    / {bed.total} Beds Free
                  </span>
                </div>

                {/* Progress Bar */}
                <div style={{ margin: '1rem 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Occupancy Level</span>
                    <strong style={{ color: 'var(--text-main)' }}>{occupancyPct}%</strong>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'var(--border-color)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${occupancyPct}%`,
                      background: occupancyPct > 85 ? 'var(--emergency-red)' : 'var(--primary-gradient)',
                      transition: 'width 0.5s ease'
                    }} />
                  </div>
                </div>

                {/* Action button */}
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
                  <button 
                    onClick={onOpenEmergency}
                    className="btn btn-secondary"
                    style={{ flex: 1, fontSize: '0.85rem', padding: '0.6rem' }}
                  >
                    Reserve Bed
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Critical Admission Disclaimer */}
        <div className="glass-card" style={{
          marginTop: '2.5rem',
          padding: '1.25rem 1.5rem',
          background: 'rgba(239, 68, 68, 0.06)',
          borderColor: 'rgba(239, 68, 68, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          maxWidth: '100%'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: '1 1 240px' }}>
            <AlertCircle size={26} color="#dc2626" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ fontSize: '1rem', color: 'var(--text-main)' }}>Emergency Admission Helpline</strong>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                For immediate ICU, Ventilator, or Ambulance bed reservation, call our 24/7 Casualty Desk directly.
              </p>
            </div>
          </div>
          <button onClick={onOpenEmergency} className="btn btn-emergency" style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
            Call Casualty Desk (+91 9098852357)
          </button>
        </div>

      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
