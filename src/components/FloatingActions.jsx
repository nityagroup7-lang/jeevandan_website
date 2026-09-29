import React, { useState } from 'react';
import { Phone, X, ChevronUp, Clock, ShieldCheck, HeartPulse } from 'lucide-react';
import { PDF_BOOKLET_DATA } from '../data/hospitalData';
import whatsappImg from '../assets/whatsapp.png';

export default function FloatingActions({ onOpenEmergency }) {
  const [showCallMenu, setShowCallMenu] = useState(false);
  const [isHoveredWa, setIsHoveredWa] = useState(false);
  const [isHoveredCall, setIsHoveredCall] = useState(false);

  const { contact } = PDF_BOOKLET_DATA;
  const primaryPhone = contact.phones[0] || '9098852357';
  const whatsappNumber = '919098852357';
  const whatsappMessage = encodeURIComponent(
    'Hello Jeevandaan Hospital! I would like to inquire about OPD appointments, emergency care, and cashless medical facilities.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const helplines = [
    {
      label: '24/7 Casualty & Emergency Desk',
      phone: contact.phones[0] || '9098852357',
      desc: 'Immediate ambulance & trauma triage',
      color: '#dc2626'
    },
    {
      label: 'Doctor OPD & Consultation',
      phone: contact.phones[1] || '9079036458',
      desc: 'Token inquiry & specialist booking',
      color: '#ea580c'
    },
    {
      label: 'Ayushman & Cashless Insurance',
      phone: contact.phones[2] || '8269900698',
      desc: 'MP Govt reimbursement & TPA help',
      color: '#059669'
    }
  ];

  return (
    <>
      {/* Floating Action Container */}
      <aside 
        className="floating-actions-aside"
        aria-label="Quick Hospital Contact Actions"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '12px',
          pointerEvents: 'none'
        }}
      >
        {/* Quick Call Helplines Modal / Popover */}
        {showCallMenu && (
          <div 
            className="glass-card call-popup-animated"
            style={{
              pointerEvents: 'auto',
              width: '320px',
              maxWidth: 'calc(100vw - 40px)',
              background: 'var(--bg-card-solid)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '1.25rem',
              boxShadow: '0 20px 45px rgba(0,0,0,0.25)',
              marginBottom: '4px'
            }}
          >
            {/* Popover Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(220, 38, 38, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#dc2626'
                }}>
                  <Phone size={17} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    Hospital Helplines
                  </h4>
                  <span style={{ fontSize: '0.72rem', color: '#16a34a', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16a34a', display: 'inline-block' }} />
                    Lines Active 24/7
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowCallMenu(false)}
                aria-label="Close helplines popup"
                style={{
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-muted)'
                }}
              >
                <X size={15} />
              </button>
            </div>

            {/* Helpline List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {helplines.map((line, idx) => (
                <a
                  key={idx}
                  href={`tel:${line.phone}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    padding: '0.75rem 0.9rem',
                    borderRadius: '12px',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = line.color;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0, paddingRight: '0.5rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {line.label}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                      {line.desc}
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: line.color,
                    color: '#ffffff',
                    padding: '0.35rem 0.65rem',
                    borderRadius: '8px',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    flexShrink: 0
                  }}>
                    <Phone size={12} />
                    {line.phone}
                  </div>
                </a>
              ))}

              {/* WhatsApp Direct Chat in Popover */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 0.75rem',
                  borderRadius: '12px',
                  background: 'rgba(37, 211, 102, 0.08)',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  marginTop: '0.25rem'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(37, 211, 102, 0.16)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(37, 211, 102, 0.08)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <img src={whatsappImg} alt="WhatsApp" style={{ width: '22px', height: '22px', borderRadius: '50%' }} />
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#075E54' }}>Chat on WhatsApp</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Online OPD & Admission Help</div>
                  </div>
                </div>

                <div style={{
                  background: '#25D366',
                  color: '#ffffff',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  flexShrink: 0
                }}>
                  90988 52357
                </div>
              </a>
            </div>

            {/* Emergency SOS Prompt inside popover */}
            {onOpenEmergency && (
              <div style={{ marginTop: '0.85rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                <button
                  onClick={() => {
                    setShowCallMenu(false);
                    onOpenEmergency();
                  }}
                  style={{
                    width: '100%',
                    padding: '0.55rem',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)',
                    color: '#ffffff',
                    border: 'none',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    boxShadow: '0 4px 12px rgba(185, 28, 28, 0.35)'
                  }}
                >
                  <HeartPulse size={15} /> Emergency Ambulance & ICU SOS
                </button>
              </div>
            )}
          </div>
        )}

        {/* Buttons Row / Stack */}
        {/* Buttons Row / Stack */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '14px',
          pointerEvents: 'auto'
        }}>
          {/* WhatsApp Direct Chat Button - ON TOP */}
          <div 
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => setIsHoveredWa(true)}
            onMouseLeave={() => setIsHoveredWa(false)}
          >
            {/* Tooltip / Label */}
            <span 
              className="wa-tooltip"
              style={{
                position: 'absolute',
                right: 'calc(100% + 14px)',
                top: '50%',
                transform: isHoveredWa ? 'translateY(-50%) translateX(0)' : 'translateY(-50%) translateX(10px)',
                background: '#075E54',
                color: '#ffffff',
                padding: '0.5rem 0.95rem',
                borderRadius: '12px',
                fontSize: '0.85rem',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                pointerEvents: 'none',
                opacity: isHoveredWa ? 1 : 0,
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                zIndex: 9999,
                maxWidth: 'none',
                width: 'max-content'
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#25D366', flexShrink: 0 }} />
              <span>WhatsApp: <strong>90988 52357</strong></span>
            </span>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Jeevandaan Hospital on WhatsApp: 90988 52357"
              className="floating-btn floating-wa-btn"
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: '#25D366',
                border: '2.5px solid #ffffff',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                padding: '6px',
                boxSizing: 'border-box',
                cursor: 'pointer',
                pointerEvents: 'auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {/* Crisp Solid WhatsApp SVG */}
              <svg viewBox="0 0 24 24" width="28" height="28" fill="#ffffff" style={{ display: 'block', pointerEvents: 'none' }}>
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>

              {/* Pulsing ring */}
              <span className="wa-pulse-ring" style={{ pointerEvents: 'none' }} />
            </a>
          </div>

          {/* Quick Call Button with pulse - BELOW */}
          <div 
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => setIsHoveredCall(true)}
            onMouseLeave={() => setIsHoveredCall(false)}
          >
            {/* Tooltip / Label */}
            <span 
              className="call-tooltip"
              style={{
                position: 'absolute',
                right: 'calc(100% + 14px)',
                top: '50%',
                transform: (isHoveredCall && !showCallMenu) ? 'translateY(-50%) translateX(0)' : 'translateY(-50%) translateX(10px)',
                background: '#991b1b',
                color: '#ffffff',
                padding: '0.5rem 0.95rem',
                borderRadius: '12px',
                fontSize: '0.85rem',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                pointerEvents: 'none',
                opacity: (isHoveredCall && !showCallMenu) ? 1 : 0,
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                zIndex: 9999,
                maxWidth: 'none',
                width: 'max-content'
              }}
            >
              <Phone size={14} color="#ffffff" style={{ flexShrink: 0 }} />
              <span>Helplines: <strong>90988 52357</strong></span>
            </span>

            {/* Call Button */}
            <button
              onClick={() => setShowCallMenu(!showCallMenu)}
              aria-label="Call Hospital Helplines"
              className="floating-btn floating-call-btn"
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: '#dc2626',
                color: '#ffffff',
                border: '2.5px solid #ffffff',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Phone size={24} className="phone-wiggle-icon" />
              
              {/* Badge 24/7 */}
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: '#ffffff',
                color: '#b91c1c',
                fontSize: '0.62rem',
                fontWeight: 900,
                padding: '2px 5px',
                borderRadius: '9999px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                border: '1.5px solid #b91c1c',
                lineHeight: 1
              }}>
                24/7
              </span>
            </button>
          </div>
        </div>
      </aside>

      {/* Floating Action Styles & Micro-animations */}
      <style>{`
        .wa-tooltip, .call-tooltip {
          max-width: none !important;
          width: max-content !important;
        }

        .wa-tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 6px solid #075E54;
        }

        .call-tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 6px solid #991b1b;
        }

        @keyframes waPulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        .floating-wa-btn {
          animation: waPulse 2.8s infinite;
        }

        @keyframes phoneWiggle {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(-12deg); }
          20%, 40% { transform: rotate(12deg); }
          50% { transform: rotate(0deg); }
        }

        .phone-wiggle-icon {
          animation: phoneWiggle 3.5s infinite;
        }

        .call-popup-animated {
          animation: popupFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes popupFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 640px) {
          .floating-actions-aside {
            bottom: 24px !important;
            right: 12px !important;
            gap: 10px !important;
          }
          .wa-tooltip, .call-tooltip {
            display: none !important;
          }
          .floating-btn {
            width: 44px !important;
            height: 44px !important;
          }
          .floating-btn svg {
            width: 22px !important;
            height: 22px !important;
          }
        }
      `}</style>
    </>
  );
}
