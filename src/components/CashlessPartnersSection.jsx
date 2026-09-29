import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, Search, CheckCircle2, Clock, FileText, PhoneCall, 
  HelpCircle, AlertCircle, Award, ArrowRight, UserCheck, HeartHandshake, 
  Building2, Sparkles, Download, Check 
} from 'lucide-react';
import cardInsurance from '../assets/card_cashless_insurance.png';
import cardCheckup from '../assets/card_health_checkup.png';
import cardSchemes from '../assets/card_national_schemes.png';
import ayushmanLogo from '../assets/ayushman_logo.png';
import { PDF_BOOKLET_DATA } from '../data/hospitalData';

export default function CashlessPartnersSection({ onOpenAppointment }) {
  const [activeTab, setActiveTab] = useState('insurance'); // 'insurance' | 'ayushman' | 'wellness' | 'guide'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all' | 'insurance' | 'tpa'

  const { contact } = PDF_BOOKLET_DATA;

  // Comprehensive list of empanelled insurers and TPAs from booklet and MP healthcare network
  const partnersList = [
    { name: 'SBI General Insurance', type: 'insurance', category: 'General Insurer', rating: 'Direct Tie-Up', preAuthTime: '2-3 Hours', featured: true },
    { name: 'HDFC ERGO General Insurance', type: 'insurance', category: 'General Insurer', rating: 'Direct Tie-Up', preAuthTime: '2-4 Hours', featured: true },
    { name: 'Care Health Insurance (Religare)', type: 'insurance', category: 'Standalone Health', rating: 'Direct Tie-Up', preAuthTime: '1-2 Hours', featured: true },
    { name: 'Universal Sompo General Insurance', type: 'insurance', category: 'General Insurer', rating: 'Direct Tie-Up', preAuthTime: '2-3 Hours', featured: true },
    { name: 'Chola MS General Insurance', type: 'insurance', category: 'General Insurer', rating: 'Direct Tie-Up', preAuthTime: '2-4 Hours', featured: true },
    { name: 'ACKO General Insurance', type: 'insurance', category: 'Digital Insurer', rating: 'Direct Tie-Up', preAuthTime: 'Instant / 1 Hr', featured: true },
    { name: 'Liberty General Insurance', type: 'insurance', category: 'General Insurer', rating: 'Direct Tie-Up', preAuthTime: '2-3 Hours', featured: true },
    { name: 'Volo Insurance', type: 'insurance', category: 'Health Partner', rating: 'Direct Tie-Up', preAuthTime: '2-3 Hours', featured: true },
    { name: 'SAFEWAY Insurance TPA', type: 'tpa', category: 'Third Party Administrator', rating: 'Empanelled TPA', preAuthTime: '2-4 Hours', featured: true },
    { name: 'Star Health & Allied Insurance', type: 'insurance', category: 'Standalone Health', rating: 'Empanelled Insurer', preAuthTime: '2-3 Hours', featured: false },
    { name: 'ICICI Lombard General Insurance', type: 'insurance', category: 'General Insurer', rating: 'Empanelled Insurer', preAuthTime: '2-4 Hours', featured: false },
    { name: 'Bajaj Allianz General Insurance', type: 'insurance', category: 'General Insurer', rating: 'Empanelled Insurer', preAuthTime: '2-4 Hours', featured: false },
    { name: 'Niva Bupa Health Insurance (Max Bupa)', type: 'insurance', category: 'Standalone Health', rating: 'Empanelled Insurer', preAuthTime: '2-3 Hours', featured: false },
    { name: 'Reliance General Insurance', type: 'insurance', category: 'General Insurer', rating: 'Empanelled Insurer', preAuthTime: '3-4 Hours', featured: false },
    { name: 'Medi Assist Insurance TPA', type: 'tpa', category: 'Third Party Administrator', rating: 'Empanelled TPA', preAuthTime: '2-3 Hours', featured: false },
    { name: 'MDIndia Health Insurance TPA', type: 'tpa', category: 'Third Party Administrator', rating: 'Empanelled TPA', preAuthTime: '2-4 Hours', featured: false },
    { name: 'Paramount Health Services TPA', type: 'tpa', category: 'Third Party Administrator', rating: 'Empanelled TPA', preAuthTime: '2-4 Hours', featured: false },
    { name: 'Heritage Health Insurance TPA', type: 'tpa', category: 'Third Party Administrator', rating: 'Empanelled TPA', preAuthTime: '3-4 Hours', featured: false },
    { name: 'Vidal Health TPA', type: 'tpa', category: 'Third Party Administrator', rating: 'Empanelled TPA', preAuthTime: '2-4 Hours', featured: false },
    { name: 'United India Insurance (via TPAs)', type: 'insurance', category: 'Public Sector Insurer', rating: 'TPA Network', preAuthTime: '3-4 Hours', featured: false },
    { name: 'National Insurance Company (via TPAs)', type: 'insurance', category: 'Public Sector Insurer', rating: 'TPA Network', preAuthTime: '3-4 Hours', featured: false },
    { name: 'New India Assurance (via TPAs)', type: 'insurance', category: 'Public Sector Insurer', rating: 'TPA Network', preAuthTime: '3-4 Hours', featured: false },
    { name: 'Oriental Insurance Company (via TPAs)', type: 'insurance', category: 'Public Sector Insurer', rating: 'TPA Network', preAuthTime: '3-4 Hours', featured: false },
  ];

  // Wellness checkup platforms from booklet
  const wellnessPlatforms = [
    { name: 'MediBuddy', type: 'Corporate Wellness & OPD', desc: 'Book full body health packages and specialist teleconsultations directly at Jeevandaan Hospital.' },
    { name: 'Visit Health Urgent Care', type: 'Digital Primary Care', desc: 'On-demand corporate clinic vouchers and diagnostic appointments.' },
    { name: 'Mediwheel', type: 'Diagnostic & Wellness Network', desc: 'Preventive health check-ups and employee annual wellness screening.' },
    { name: 'Zyla Health', type: 'Chronic Disease Management', desc: 'Personalized care plans for diabetes, cardiac health, and hypertension.' },
    { name: 'MDIndia Wellness', type: 'Preventive Health Network', desc: 'Annual corporate screening and routine lab investigations.' },
    { name: 'Health Quarters', type: 'Executive Health Checkups', desc: 'Tailored health profiles and executive physical examinations.' },
  ];

  // Filtered partners based on search and category
  const filteredPartners = useMemo(() => {
    return partnersList.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || p.type === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section 
      id="cashless-section"
      style={{
        padding: '5rem 0',
        background: 'var(--bg-main)',
        color: 'var(--text-main)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)'
      }}
    >
      {/* Soft ambient background tint */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '350px',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(185, 28, 28, 0.04) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag" style={{ background: 'rgba(185, 28, 28, 0.08)', color: 'var(--primary)', marginBottom: '0.85rem' }}>
            <ShieldCheck size={16} /> 100% Cashless Medical Services
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3vw, 2.75rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '0.75rem',
            color: 'var(--text-main)'
          }}>
            Cashless Insurance, Ayushman Bharat & Wellness Network
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            maxWidth: '740px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Experience hassle-free, zero-worry healthcare. We support 35+ major health insurance companies, Ayushman PM-JAY, and leading digital wellness platforms.
          </p>

          {/* Value Badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            marginTop: '1.5rem'
          }}>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              color: 'var(--text-main)',
              background: 'var(--bg-card-solid)',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <CheckCircle2 size={16} color="#16a34a" /> 24/7 Dedicated TPA Desk
            </span>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              color: 'var(--text-main)',
              background: 'var(--bg-card-solid)',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <CheckCircle2 size={16} color="#16a34a" /> Instant Pre-Authorization Guidance
            </span>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              color: 'var(--text-main)',
              background: 'var(--bg-card-solid)',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <CheckCircle2 size={16} color="#16a34a" /> Transparent Zero-Worry Approvals
            </span>
          </div>
        </div>

        {/* Classy Navigation Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '2.5rem'
        }}>
          {[
            { id: 'insurance', label: 'Cashless Insurance & TPAs', icon: <Building2 size={17} />, badge: `${partnersList.length}+ Partners` },
            { id: 'ayushman', label: 'Ayushman Bharat – PMJAY', icon: <Award size={17} />, badge: '₹5 Lakh Free' },
            { id: 'wellness', label: 'Health Check-up Platforms', icon: <HeartHandshake size={17} />, badge: '6 Networks' },
            { id: 'guide', label: 'Cashless Admission Guide', icon: <FileText size={17} />, badge: '4 Steps' },
          ].map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.75rem 1.3rem',
                  borderRadius: '12px',
                  border: isActive ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                  background: isActive ? 'var(--primary-gradient)' : 'var(--bg-card-solid)',
                  color: isActive ? '#ffffff' : 'var(--text-main)',
                  fontWeight: isActive ? 800 : 600,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 6px 18px rgba(185, 28, 28, 0.28)' : 'var(--shadow-sm)',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span style={{
                  padding: '0.15rem 0.55rem',
                  borderRadius: '9999px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  background: isActive ? 'rgba(255, 255, 255, 0.22)' : 'rgba(234, 88, 12, 0.1)',
                  color: isActive ? '#ffffff' : 'var(--accent)'
                }}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: Insurance Companies & TPAs Search & Filter */}
        {activeTab === 'insurance' && (
          <div>
            {/* Search & Category Filter Bar */}
            <div className="glass-card" style={{
              padding: '1.25rem 1.5rem',
              borderRadius: '18px',
              marginBottom: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--bg-card-solid)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              {/* Search Box */}
              <div style={{
                position: 'relative',
                flex: 1,
                minWidth: '280px'
              }}>
                <Search 
                  size={18} 
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--primary)'
                  }} 
                />
                <input 
                  type="text"
                  placeholder="Search your Insurance Company or TPA (e.g. SBI, HDFC, Care, Star, Safeway)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 2.6rem',
                    borderRadius: '10px',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Category Pills */}
              <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                {[
                  { id: 'all', label: 'All Partners' },
                  { id: 'insurance', label: 'Insurance Companies' },
                  { id: 'tpa', label: 'TPAs (Administrators)' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      padding: '0.5rem 0.9rem',
                      borderRadius: '8px',
                      border: selectedCategory === cat.id ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                      background: selectedCategory === cat.id ? 'rgba(185, 28, 28, 0.1)' : 'var(--bg-main)',
                      color: selectedCategory === cat.id ? 'var(--primary)' : 'var(--text-muted)',
                      fontWeight: selectedCategory === cat.id ? 800 : 600,
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Partners Cards Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem'
            }}>
              {filteredPartners.map((partner, idx) => (
                <div 
                  key={idx}
                  className="glass-card"
                  style={{
                    borderRadius: '16px',
                    padding: '1.35rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: partner.featured ? '1.5px solid rgba(234, 88, 12, 0.35)' : '1px solid var(--border-color)',
                    background: partner.featured 
                      ? 'linear-gradient(135deg, var(--bg-card-solid) 0%, rgba(234, 88, 12, 0.04) 100%)' 
                      : 'var(--bg-card-solid)',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span style={{
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        background: partner.type === 'insurance' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(168, 85, 247, 0.1)',
                        color: partner.type === 'insurance' ? '#2563eb' : '#9333ea'
                      }}>
                        {partner.category}
                      </span>

                      {partner.featured && (
                        <span style={{
                          padding: '0.15rem 0.5rem',
                          borderRadius: '6px',
                          fontSize: '0.68rem',
                          fontWeight: 800,
                          background: 'rgba(234, 88, 12, 0.12)',
                          color: 'var(--accent)'
                        }}>
                          ★ Booklet Partner
                        </span>
                      )}
                    </div>

                    <h4 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 0.5rem', lineHeight: 1.35 }}>
                      {partner.name}
                    </h4>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      <Check size={15} color="#16a34a" /> Cashless Treatment Supported
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      <Clock size={14} color="var(--accent)" /> Pre-Auth Turnaround: <strong>{partner.preAuthTime}</strong>
                    </div>
                  </div>

                  <div style={{
                    marginTop: '1.25rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 700 }}>
                      ✓ {partner.rating}
                    </span>
                    <a
                      href={`tel:${contact.phones[0]}`}
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--text-main)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontWeight: 700
                      }}
                    >
                      <PhoneCall size={13} color="var(--primary)" /> TPA Helpdesk
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Classy Helpline & Booklet Graphic Banner */}
            <div className="glass-card partner-banner-split" style={{
              borderRadius: '20px',
              padding: '2.25rem',
              border: '1px solid var(--border-color)',
              background: 'linear-gradient(135deg, var(--bg-card-solid) 0%, rgba(185, 28, 28, 0.03) 100%)',
              display: 'grid',
              gridTemplateColumns: '1.25fr 0.75fr',
              gap: '2.5rem',
              alignItems: 'center',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div>
                <span className="section-tag" style={{ background: 'rgba(234, 88, 12, 0.12)', color: 'var(--accent)', marginBottom: '0.75rem' }}>
                  24/7 Patient Insurance Desk
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                  Can't Find Your Specific Insurance Policy or TPA Card?
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Don't worry! Jeevandaan Hospital assists with all commercial and government insurance claims. Our dedicated TPA desk coordinates with insurance surveyors to ensure swift approvals and zero delays.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a 
                    href={`tel:${contact.phones[0]}`}
                    className="btn btn-primary"
                    style={{
                      padding: '0.75rem 1.4rem',
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      textDecoration: 'none'
                    }}
                  >
                    <PhoneCall size={16} /> Call TPA Desk: {contact.phones[0]}
                  </a>
                  <button
                    onClick={onOpenAppointment}
                    className="btn btn-secondary"
                    style={{
                      padding: '0.75rem 1.4rem',
                      fontSize: '0.9rem'
                    }}
                  >
                    Book Consultation
                  </button>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <img 
                  src={cardInsurance} 
                  alt="Cashless Insurance Partners" 
                  style={{
                    width: '100%',
                    maxWidth: '380px',
                    height: 'auto',
                    borderRadius: '16px',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid var(--border-color)',
                    background: '#ffffff',
                    padding: '6px'
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Ayushman Bharat – PMJAY Feature Block */}
        {activeTab === 'ayushman' && (
          <div>
            <div className="glass-card" style={{
              borderRadius: '24px',
              padding: '2.5rem',
              border: '1px solid var(--border-highlight)',
              background: 'linear-gradient(135deg, var(--bg-card-solid) 0%, rgba(234, 88, 12, 0.04) 100%)',
              marginBottom: '2.5rem',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: '2.5rem',
                alignItems: 'center'
              }} className="ayushman-grid">
                <div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.35rem 0.9rem',
                    borderRadius: '9999px',
                    background: 'rgba(185, 28, 28, 0.12)',
                    color: 'var(--primary)',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    marginBottom: '1rem'
                  }}>
                    <Award size={16} /> National Health Mission PM-JAY
                  </div>

                  <h3 style={{
                    fontSize: 'clamp(1.8rem, 2.5vw, 2.3rem)',
                    fontWeight: 800,
                    lineHeight: 1.25,
                    marginBottom: '1rem',
                    color: 'var(--text-main)'
                  }}>
                    Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana
                  </h3>

                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem'
                  }}>
                    Jeevandaan Multi-Speciality Hospital is proud to serve Ayushman Bharat beneficiaries with world-class, 100% cashless treatments under Government of India guidelines.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                    {[
                      'Free treatments up to ₹5,00,000 per eligible family per year.',
                      'Full coverage for surgeries, ICU critical care, laparoscopic interventions, and oncology.',
                      'Free pre-hospitalization tests, medicines during admission, and post-discharge recovery kits.',
                      'Dedicated Ayushman Mitra helpdesk for instant biometric registration and hassle-free admission.'
                    ].map((benefit, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <CheckCircle2 size={19} color="#16a34a" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                        <span style={{ fontSize: '0.94rem', color: 'var(--text-main)', lineHeight: 1.5, fontWeight: 500 }}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a
                      href={`tel:${contact.phones[0]}`}
                      className="btn btn-primary"
                      style={{
                        padding: '0.85rem 1.6rem',
                        fontSize: '0.95rem',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <PhoneCall size={18} /> Ayushman Helpline: {contact.phones[0]}
                    </a>
                  </div>
                </div>

                {/* Right Card: Ayushman Helpdesk Details */}
                <div style={{
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  padding: '2rem',
                  borderRadius: '20px',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  {ayushmanLogo ? (
                    <img 
                      src={ayushmanLogo} 
                      alt="Ayushman Bharat Logo" 
                      style={{ height: '75px', width: 'auto', margin: '0 auto 1.25rem', objectFit: 'contain' }}
                    />
                  ) : (
                    <Award size={64} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                  )}

                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.4rem' }}>
                    PMJAY Beneficiary Helpdesk
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                    Bring your Golden Card or Aadhaar to Room No. 04 (Ground Floor) for priority enrollment.
                  </p>

                  <div style={{
                    background: 'var(--bg-card-solid)',
                    borderRadius: '12px',
                    padding: '1rem',
                    textAlign: 'left',
                    marginBottom: '1.25rem',
                    border: '1px solid var(--border-color)'
                  }}>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--text-main)', display: 'block', marginBottom: '0.4rem' }}>
                      Documents Required for Ayushman Admission:
                    </strong>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      <li>Ayushman Card (PVC Card or Digital ABHA QR)</li>
                      <li>Aadhaar Card (Patient & Family Head)</li>
                      <li>Samagra ID / MP Ration Card</li>
                      <li>Previous Doctor Prescription / Referral slip</li>
                    </ul>
                  </div>

                  <button 
                    onClick={onOpenAppointment}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.75rem', fontSize: '0.9rem' }}
                  >
                    Check Eligibility & Book
                  </button>
                </div>
              </div>
            </div>

            {/* Scheme Graphic from Booklet */}
            <div style={{ textAlign: 'center' }}>
              <img 
                src={cardSchemes} 
                alt="National Schemes - Ayushman Bharat" 
                style={{
                  width: '100%',
                  maxWidth: '460px',
                  borderRadius: '18px',
                  background: '#ffffff',
                  border: '1px solid var(--border-color)',
                  padding: '6px',
                  boxShadow: 'var(--shadow-md)'
                }}
              />
            </div>
          </div>
        )}

        {/* TAB 3: Health Check-up Partner Network */}
        {activeTab === 'wellness' && (
          <div>
            <div style={{
              textAlign: 'center',
              maxWidth: '740px',
              margin: '0 auto 2.5rem'
            }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                Corporate Wellness & Health Check-up Network
              </h3>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)' }}>
                Registered users of these digital health platforms can redeem wellness vouchers, book preventive diagnostics, and access corporate consultations at Jeevandaan Hospital.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {wellnessPlatforms.map((plat, i) => (
                <div 
                  key={i}
                  className="glass-card"
                  style={{
                    background: 'var(--bg-card-solid)',
                    borderRadius: '18px',
                    padding: '1.5rem',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(234, 88, 12, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent)',
                        fontWeight: 900,
                        fontSize: '1.1rem'
                      }}>
                        {plat.name.charAt(0)}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.12rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                          {plat.name}
                        </h4>
                        <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700 }}>
                          {plat.type}
                        </span>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                      {plat.desc}
                    </p>
                  </div>

                  <div style={{
                    marginTop: '1.25rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 700 }}>
                      ✓ Online Vouchers Accepted
                    </span>
                    <button
                      onClick={onOpenAppointment}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--primary)',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        padding: 0
                      }}
                    >
                      Redeem Slot <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkup Graphic from Booklet */}
            <div style={{ textAlign: 'center' }}>
              <img 
                src={cardCheckup} 
                alt="Health Check-up Partner Network" 
                style={{
                  width: '100%',
                  maxWidth: '460px',
                  borderRadius: '18px',
                  background: '#ffffff',
                  border: '1px solid var(--border-color)',
                  padding: '6px',
                  boxShadow: 'var(--shadow-md)'
                }}
              />
            </div>
          </div>
        )}

        {/* TAB 4: 4-Step Cashless Claim Guide */}
        {activeTab === 'guide' && (
          <div>
            <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 3rem' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                How Does Cashless Hospitalization Work?
              </h3>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)' }}>
                Follow our streamlined 4-step cashless process designed to minimize waiting times and maximize claim coverage.
              </p>
            </div>

            {/* 4 Step Process Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              marginBottom: '3rem'
            }} className="grid-4-steps">
              {[
                {
                  step: '01',
                  title: 'Admission & TPA Desk',
                  desc: 'Visit our 24/7 TPA Desk with your health insurance e-card, Aadhaar, and doctor’s admission advice.'
                },
                {
                  step: '02',
                  title: 'Pre-Auth Submission',
                  desc: 'Our billing team completes the pre-authorization form and submits estimated medical costs directly to your insurer.'
                },
                {
                  step: '03',
                  title: 'Cashless Approval',
                  desc: 'Insurance company grants cashless sanction (usually in 2-4 hours). Patient begins treatment with zero upfront deposit.'
                },
                {
                  step: '04',
                  title: 'Discharge Settlement',
                  desc: 'At discharge, the final bill is settled directly by your insurer. Patient only pays non-medical consumables as per policy.'
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="glass-card"
                  style={{
                    background: 'var(--bg-card-solid)',
                    borderRadius: '18px',
                    padding: '1.75rem',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)',
                    position: 'relative'
                  }}
                >
                  <span style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: 'var(--accent)',
                    opacity: 0.18,
                    position: 'absolute',
                    top: '1rem',
                    right: '1.25rem',
                    lineHeight: 1
                  }}>
                    {item.step}
                  </span>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                    Phase {item.step}
                  </div>
                  <h4 style={{ fontSize: '1.12rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Checklist of Documents to Bring */}
            <div className="glass-card" style={{
              borderRadius: '20px',
              padding: '2rem',
              background: 'var(--bg-card-solid)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileText size={20} /> Documents Checklist for Cashless Admission:
              </h4>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem'
              }}>
                {[
                  'Health Insurance Digital Card or Policy Schedule',
                  'Patient Government Photo ID (Aadhaar / Voter ID)',
                  'Doctor Consultation Prescription & Lab Reports',
                  'Policy Proposer (Insured) KYC / PAN Card',
                  'Corporate Employee ID Card (if corporate group policy)',
                  'Cancelled Cheque of the primary policyholder'
                ].map((doc, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 500 }}>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 960px) {
          .ayushman-grid { grid-template-columns: 1fr !important; }
          .partner-banner-split { grid-template-columns: 1fr !important; }
          .grid-4-steps { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .grid-4-steps { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
