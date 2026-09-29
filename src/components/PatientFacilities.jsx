import React, { useState } from 'react';
import { 
  Building2, Pill, ShieldAlert, Ambulance, Bed, UtensilsCrossed, 
  Sparkles, CheckCircle2, PhoneCall, Clock, Check, ArrowRight, 
  X, ShieldCheck, HeartPulse, Activity, Zap
} from 'lucide-react';
import { PDF_BOOKLET_DATA } from '../data/hospitalData';

export default function PatientFacilities({ onOpenAppointment, onOpenEmergency }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedFacility, setSelectedFacility] = useState(null);

  const { contact } = PDF_BOOKLET_DATA;
  const helplinePhone = contact.phones[0] || '9098852357';

  const facilitiesList = [
    {
      id: 'pharmacy',
      category: 'support',
      title: '24/7 In-House Pharmacy',
      shortDesc: 'Fully stocked round-the-clock medical dispensary with genuine drugs and urgent ICU medication backup.',
      icon: <Pill size={26} color="#0284c7" />,
      badge: 'Open 24/7',
      badgeColor: '#0284c7',
      timing: '24 Hours / 365 Days',
      highlights: [
        '100% Genuine Prescription Medicines & Life-saving Drugs',
        'Direct Emergency & ICU delivery conduit',
        'Special discounts on chronic illness & monthly medications',
        'Surgical consumables, orthopedic braces & health supplements'
      ],
      equipment: ['Cold-chain storage units for vaccines & insulin', 'Automated inventory & computerized billing', 'Surgical implants & disposable stocks'],
      roomLocation: 'Ground Floor, Adjacent to Main Reception'
    },
    {
      id: 'modular-ot',
      category: 'critical',
      title: 'Advanced Modular Operation Theatres',
      shortDesc: 'Class-100 laminar airflow OTs with HEPA filtration, reducing surgical infection rates to near zero.',
      icon: <Zap size={26} color="#dc2626" />,
      badge: 'Class-100 HEPA Clean',
      badgeColor: '#dc2626',
      timing: 'Round-the-clock Emergency Surgeries',
      highlights: [
        'Laminar air flow with ceiling-mounted HEPA filter banks',
        'High-definition Karl Storz laparoscopic surgical towers',
        'Digital C-Arm fluoroscopy for live orthopedic guidance',
        'Integrated anesthesia workstations with multiplex gas monitoring'
      ],
      equipment: ['High-def Laparoscopy Suite', 'Digital C-Arm Fluoroscopy', 'Multiparameter Anesthesia Stations', 'Harmonic Scalpel & Electrosurgical Units'],
      roomLocation: '2nd Floor, Surgical OT Complex'
    },
    {
      id: 'dialysis',
      category: 'critical',
      title: 'Dialysis & Renal Care Wing',
      shortDesc: 'State-of-the-art hemodialysis center powered by an automated ultra-pure double-RO water treatment plant.',
      icon: <HeartPulse size={26} color="#059669" />,
      badge: 'Ultra-Pure RO Plant',
      badgeColor: '#059669',
      timing: '24/7 Routine & Emergency Dialysis',
      highlights: [
        'Individual motorized dialysis recliner beds with entertainment units',
        'Zero cross-contamination protocols with isolated machines for infectious cases',
        'Continuous bedside monitoring by trained nephrology technicians',
        'Empanelled under Ayushman Bharat for 100% cashless dialysis'
      ],
      equipment: ['Fresenius Advanced Hemodialysis Machines', 'Double Stage RO Purification Plant', 'Continuous Vital Signs Monitors', 'Peritoneal Dialysis Support'],
      roomLocation: '1st Floor, Nephrology Block'
    },
    {
      id: 'ambulance',
      category: 'critical',
      title: '24/7 Advanced Life Support Ambulance',
      shortDesc: 'ICU-on-wheels emergency response vehicles equipped with transport ventilators and trained paramedics.',
      icon: <Ambulance size={26} color="#b91c1c" />,
      badge: 'Immediate GPS Dispatch',
      badgeColor: '#b91c1c',
      timing: 'Average 15-20 Min City Response',
      highlights: [
        'Transport ventilator, portable defibrillator & suction unit onboard',
        'Oxygen cylinder banks with manifold distribution',
        'Qualified emergency medical technician (EMT) and nurse in transit',
        'Direct tele-consultation conduit with ER trauma doctors while on the way'
      ],
      equipment: ['Portable Transport Ventilator', 'Biphasic Defibrillator', 'Spine Boards & Head Immobilizers', 'Multi-parameter Patient Monitors'],
      roomLocation: 'Emergency Portico / Casualty Gate'
    },
    {
      id: 'deluxe-wards',
      category: 'comfort',
      title: 'Deluxe Rooms & Inpatient Wards',
      shortDesc: 'Thoughtfully designed patient recovery suites blending clinical safety with hotel-grade hospitality and hygiene.',
      icon: <Bed size={26} color="#7c3aed" />,
      badge: 'Hygienic & Spacious',
      badgeColor: '#7c3aed',
      timing: 'Patient Visiting: 11 AM - 1 PM & 5 PM - 7 PM',
      highlights: [
        'Motorized electronic beds with nurse calling buzzer system',
        'Private deluxe AC rooms with sofa-cum-bed for family attendant',
        'Air-conditioned semi-private and sanitized general male/female wards',
        'Strict infection-control housekeeping with UV sanitization'
      ],
      equipment: ['Electric Multi-Position Beds', 'Central Oxygen & Medical Gas Outlets', 'Attached Sanitary Bathrooms', 'High-Speed Wi-Fi & Smart TV'],
      roomLocation: '3rd & 4th Floor Inpatient Towers'
    },
    {
      id: 'canteen',
      category: 'comfort',
      title: 'Nutritious Cafeteria & Food Court',
      shortDesc: 'Hygienic in-house dietary kitchen preparing customized physician-prescribed patient meals and fresh meals for attendants.',
      icon: <UtensilsCrossed size={26} color="#d97706" />,
      badge: 'Nutritionist Curated',
      badgeColor: '#d97706',
      timing: '07:00 AM - 10:30 PM Daily',
      highlights: [
        'Dietitian-approved therapeutic diets (Diabetic, Renal, High-Protein, Liquid diet)',
        'Freshly prepared pure vegetarian meals, snacks, and fresh juices',
        'RO drinking water stations and clean seating lounge for attendants',
        'Room-service tray delivery for admitted patients on schedule'
      ],
      equipment: ['Industrial Steam Kitchen', 'Sterilized Crockery Systems', 'Dedicated Inpatient Dietary Service Trolleys'],
      roomLocation: 'Lower Ground Floor'
    }
  ];

  const filteredFacilities = facilitiesList.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section 
      id="patient-facilities"
      style={{
        padding: '5rem 0',
        background: 'var(--bg-main)',
        position: 'relative',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div 
            className="section-tag" 
            style={{ 
              background: 'rgba(185, 28, 28, 0.1)', 
              color: 'var(--primary)',
              marginBottom: '0.85rem'
            }}
          >
            <Building2 size={16} /> World-Class Infrastructure
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '0.85rem',
            color: 'var(--text-main)'
          }}>
            State-of-the-Art Patient Facilities & Amenities
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            maxWidth: '740px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            From round-the-clock emergency pharmacy and modular HEPA Operation Theatres to advanced dialysis suites and comfortable patient recovery rooms.
          </p>

          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginTop: '2rem'
          }}>
            {[
              { id: 'all', label: 'All Facilities (6)' },
              { id: 'critical', label: 'Critical Care & Theatres' },
              { id: 'comfort', label: 'Inpatient Rooms & Dining' },
              { id: 'support', label: 'Pharmacy & Support' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  padding: '0.65rem 1.25rem',
                  borderRadius: '12px',
                  border: activeFilter === tab.id ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                  background: activeFilter === tab.id ? 'var(--primary-gradient)' : 'var(--bg-card-solid)',
                  color: activeFilter === tab.id ? '#ffffff' : 'var(--text-main)',
                  fontWeight: activeFilter === tab.id ? 800 : 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  boxShadow: activeFilter === tab.id ? '0 6px 18px rgba(185, 28, 28, 0.28)' : 'var(--shadow-sm)',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3rem'
        }}>
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              className="glass-card"
              style={{
                borderRadius: '20px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-card-solid)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = 'rgba(185, 28, 28, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div>
                {/* Top Badge & Icon */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    {fac.icon}
                  </div>

                  <span 
                    style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      background: `${fac.badgeColor}18`,
                      color: fac.badgeColor,
                      border: `1px solid ${fac.badgeColor}33`
                    }}
                  >
                    {fac.badge}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 800,
                  color: 'var(--text-main)',
                  marginBottom: '0.6rem'
                }}>
                  {fac.title}
                </h3>

                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem'
                }}>
                  {fac.shortDesc}
                </p>

                {/* Highlights List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {fac.highlights.slice(0, 3).map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.84rem' }}>
                      <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                      <span style={{ color: 'var(--text-main)', lineHeight: 1.4 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={13} color="var(--accent)" />
                  {fac.timing}
                </span>

                <button
                  onClick={() => setSelectedFacility(fac)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--primary)',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    padding: '0.2rem 0.4rem'
                  }}
                >
                  View Details <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Hospital Infrastructure Support Banner */}
        <div 
          className="glass-card" 
          style={{
            borderRadius: '24px',
            padding: '2.25rem',
            border: '1px solid var(--border-highlight)',
            background: 'linear-gradient(135deg, var(--bg-card-solid) 0%, rgba(234, 88, 12, 0.05) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div>
            <span className="section-tag" style={{ background: 'rgba(234, 88, 12, 0.12)', color: 'var(--accent)', marginBottom: '0.6rem' }}>
              Central India Healthcare Benchmark
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 0.4rem' }}>
              Require Inpatient Room Booking or Critical Care Transfer?
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0, maxWidth: '650px' }}>
              Our 24/7 Front Office and TPA admission desk assists with immediate bed allocation, ICU reservations, and cashless authorization.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a
              href={`tel:${helplinePhone}`}
              className="btn btn-primary"
              style={{ padding: '0.8rem 1.4rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.45rem', textDecoration: 'none' }}
            >
              <PhoneCall size={16} /> Call Desk: {helplinePhone}
            </a>
            {onOpenEmergency && (
              <button
                onClick={onOpenEmergency}
                className="btn btn-secondary"
                style={{ padding: '0.8rem 1.4rem', fontSize: '0.9rem' }}
              >
                24/7 Emergency SOS
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedFacility(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1.5rem'
          }}
        >
          <div 
            className="modal-content glass-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--bg-card-solid)',
              borderRadius: '24px',
              maxWidth: '650px',
              width: '100%',
              padding: '2.25rem',
              border: '1px solid var(--border-color)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'var(--bg-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)'
                }}>
                  {selectedFacility.icon}
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: selectedFacility.badgeColor }}>
                    {selectedFacility.badge}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>
                    {selectedFacility.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedFacility(null)}
                style={{
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-muted)'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {selectedFacility.shortDesc}
            </p>

            {/* Key Features & Specs */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                Key Infrastructure Highlights:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.65rem' }}>
                {selectedFacility.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem' }}>
                    <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span style={{ color: 'var(--text-main)' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment & Technology Specs */}
            <div style={{
              background: 'var(--bg-main)',
              borderRadius: '14px',
              padding: '1.15rem',
              border: '1px solid var(--border-color)',
              marginBottom: '1.5rem'
            }}>
              <h5 style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', margin: '0 0 0.5rem' }}>
                Installed Equipment & Tech:
              </h5>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {selectedFacility.equipment.map((eq, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'var(--bg-card-solid)',
                      border: '1px solid var(--border-color)',
                      padding: '0.3rem 0.65rem',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      fontWeight: 600
                    }}
                  >
                    • {eq}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-light)' }}>
                📍 <strong>Location:</strong> {selectedFacility.roomLocation}
              </div>
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={`tel:${helplinePhone}`}
                className="btn btn-primary"
                style={{ flex: 1, padding: '0.75rem', fontSize: '0.9rem', textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
              >
                <PhoneCall size={16} /> Contact Desk: {helplinePhone}
              </a>
              <button
                onClick={() => {
                  setSelectedFacility(null);
                  if (onOpenAppointment) onOpenAppointment();
                }}
                className="btn btn-secondary"
                style={{ flex: 1, padding: '0.75rem', fontSize: '0.9rem' }}
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
