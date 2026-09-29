import React, { useState } from 'react';
import { X, Phone, Ambulance, MapPin, AlertTriangle, ShieldAlert, CheckCircle2, Navigation } from 'lucide-react';

export default function EmergencyModal({ isOpen, onClose }) {
  const [dispatchStatus, setDispatchStatus] = useState('idle'); // idle, locating, dispatched
  const [patientLocation, setPatientLocation] = useState('Detecting current GPS coordinates...');
  const [ambulanceETA, setAmbulanceETA] = useState('6 - 8 Minutes');

  if (!isOpen) return null;

  const handleTriggerAmbulance = () => {
    setDispatchStatus('locating');
    setTimeout(() => {
      setPatientLocation('Latitude: 21.1458° N, Longitude: 79.0882° E (Sector 14, Main Road)');
      setDispatchStatus('dispatched');
    }, 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px', border: '2px solid #ef4444', width: '100%', boxSizing: 'border-box' }}>
        
        {/* Emergency Modal Header */}
        <div style={{
          background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
          color: '#ffffff',
          padding: '1rem 1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div className="live-pulse" style={{ background: '#ffffff', width: '10px', height: '10px', flexShrink: 0 }} />
            <div>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Code Red 24/7 Casualty
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '0.1rem' }}>
                Emergency Ambulance Dispatch
              </h3>
            </div>
          </div>

          <button 
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '1.25rem' }}>
          
          {/* Hotline Quick Call box */}
          <div style={{
            background: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '16px',
            padding: '1.25rem',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#dc2626' }}>
              DIRECT TO CASUALTY DESK
            </span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#dc2626', margin: '0.2rem 0' }}>
              📞 +91 9098852357
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Alternate Emergency Line: <strong>+91 8269900698</strong>
            </p>
          </div>

          {dispatchStatus === 'idle' && (
            <div>
              <div style={{ marginBottom: '1.5rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                <p style={{ fontSize: '0.95rem' }}>
                  Clicking the button below will immediately transmit your GPS position to Jeevandaan Hospital’s ICU Mobile Ambulance Control Room.
                </p>
              </div>

              <button 
                onClick={handleTriggerAmbulance}
                className="btn btn-emergency"
                style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', gap: '0.6rem' }}
              >
                <Ambulance size={24} /> Dispatch Advanced ICU Ambulance Now
              </button>
            </div>
          )}

          {dispatchStatus === 'locating' && (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <Navigation size={42} color="var(--primary)" style={{ animation: 'spin 1.5s infinite linear' }} />
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: '1rem' }}>
                Acquiring GPS Signal & Assigning Nearest Ambulance...
              </h4>
            </div>
          )}

          {dispatchStatus === 'dispatched' && (
            <div style={{
              background: 'var(--bg-main)',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <CheckCircle2 size={28} color="#10b981" />
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10b981' }}>Ambulance Unit #04 En Route!</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Driver: Rajesh Kumar (Mob: +91 98230 11223)</p>
                </div>
              </div>

              <div style={{
                background: 'var(--bg-card-solid)',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                marginBottom: '1rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Estimated Arrival Time (ETA):</span>
                  <strong style={{ color: '#dc2626', fontSize: '1rem' }}>⏱ {ambulanceETA}</strong>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={14} color="var(--primary)" />
                  <span>{patientLocation}</span>
                </div>
              </div>

              <button 
                onClick={onClose}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Understood • Keep Line Open
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
