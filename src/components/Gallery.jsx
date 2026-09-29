import React, { useState } from 'react';
import { 
  Camera, Eye, X, ChevronLeft, ChevronRight, Download, 
  Building2, ShieldCheck, HeartPulse, Activity, Stethoscope, Sparkles 
} from 'lucide-react';
import { PDF_BOOKLET_DATA } from '../data/hospitalData';

export default function Gallery({ onOpenAppointment, onOpenEmergency }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const { contact } = PDF_BOOKLET_DATA;
  const helplinePhone = contact.phones[0] || '9098852357';

  const galleryItems = [
    {
      id: 'gal-1',
      title: 'Modern Hospital Infrastructure & Facade',
      category: 'infrastructure',
      categoryName: 'Infrastructure',
      imageUrl: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80',
      description: 'The exterior architecture of Jeevandaan Multi-Speciality Hospital located at Berasia Road, Lambakheda, Bhopal.',
      tag: 'Bhopal Campus'
    },
    {
      id: 'gal-2',
      title: 'Class-100 Modular Operation Theatre',
      category: 'icu-ot',
      categoryName: 'OTs & ICU',
      imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
      description: 'Laminar airflow surgical suite equipped with Karl Storz laparoscopy towers, digital C-arm, and zero-infection HEPA filters.',
      tag: 'Modular OT 1'
    },
    {
      id: 'gal-3',
      title: 'Multi-Bed Critical Care ICU Complex',
      category: 'icu-ot',
      categoryName: 'OTs & ICU',
      imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
      description: '24/7 Intensive Care Unit with high-end invasive ventilators, multi-para monitors, and central telemetry nurses station.',
      tag: '24/7 ICU'
    },
    {
      id: 'gal-4',
      title: 'Advanced 128-Slice CT & Radiology Suite',
      category: 'diagnostic',
      categoryName: 'Diagnostic Labs',
      imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
      description: 'High-speed computerized tomography (CT Scan) and digital X-ray suite delivering instant high-definition diagnostic imaging.',
      tag: 'Radiology Wing'
    },
    {
      id: 'gal-5',
      title: 'Automated Pathology & Biochemistry Laboratory',
      category: 'diagnostic',
      categoryName: 'Diagnostic Labs',
      imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
      description: 'Fully automated hematology and biochemistry analyzers providing NABL-calibrated diagnostic lab investigations within hours.',
      tag: 'NABL Aligned Lab'
    },
    {
      id: 'gal-6',
      title: 'Spacious Outpatient (OPD) Reception & Waiting Lounge',
      category: 'infrastructure',
      categoryName: 'Infrastructure',
      imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
      description: 'Patient-centric front office with automated token display, computerized registration desks, and sanitized waiting chairs.',
      tag: 'Ground Floor'
    },
    {
      id: 'gal-7',
      title: 'State-of-the-Art Hemodialysis Care Wing',
      category: 'icu-ot',
      categoryName: 'OTs & ICU',
      imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
      description: 'Ultra-pure RO water dialysis unit with motorized recliner beds, dedicated renal nurses, and continuous vitals tracking.',
      tag: 'Dialysis Center'
    },
    {
      id: 'gal-8',
      title: 'Specialist Doctor Consultation Room',
      category: 'doctors-care',
      categoryName: 'Doctors & Care',
      imageUrl: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=1200&q=80',
      description: 'Private consultation chambers ensuring confidential patient examinations, diagnostic discussions, and empathetic care.',
      tag: 'OPD Chamber'
    },
    {
      id: 'gal-9',
      title: 'Deluxe Air-Conditioned Inpatient Room',
      category: 'infrastructure',
      categoryName: 'Infrastructure',
      imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
      description: 'Private room with ergonomic motorized bed, attendant sofa-cum-bed, nurse calling buzzer, smart TV, and attached sanitized washroom.',
      tag: 'Deluxe Suite'
    },
    {
      id: 'gal-10',
      title: '24/7 Advanced Life Support Emergency Ambulance',
      category: 'icu-ot',
      categoryName: 'OTs & ICU',
      imageUrl: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1200&q=80',
      description: 'Mobile ICU vehicle equipped with oxygen manifolds, transport ventilator, AED defibrillator, and trained paramedics.',
      tag: 'Casualty Gate'
    },
    {
      id: 'gal-11',
      title: 'High-Resolution Ultrasound & 4D Color Doppler',
      category: 'diagnostic',
      categoryName: 'Diagnostic Labs',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      description: 'Precision ultrasound imaging for prenatal scans, abdominal diagnostics, vascular color doppler, and cardiac evaluation.',
      tag: 'Ultrasound Suite'
    },
    {
      id: 'gal-12',
      title: 'Compassionate Nursing & Post-Operative Ward',
      category: 'doctors-care',
      categoryName: 'Doctors & Care',
      imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
      description: 'Trained, warm nursing staff ensuring continuous bedside medicine delivery, wound dressing, and post-surgery patient comfort.',
      tag: 'Recovery Ward'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos', count: galleryItems.length },
    { id: 'infrastructure', label: 'Infrastructure', count: galleryItems.filter(x => x.category === 'infrastructure').length },
    { id: 'icu-ot', label: 'OTs & ICU', count: galleryItems.filter(x => x.category === 'icu-ot').length },
    { id: 'diagnostic', label: 'Diagnostic Labs', count: galleryItems.filter(x => x.category === 'diagnostic').length },
    { id: 'doctors-care', label: 'Doctors & Care', count: galleryItems.filter(x => x.category === 'doctors-care').length }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextPhoto = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrevPhoto = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="gallery-page-container" style={{ background: 'var(--bg-main)' }}>
      <div className="container">

        {/* Header Title Section */}
        <div className="gallery-header-section" style={{ textAlign: 'center' }}>
          <div 
            className="section-tag" 
            style={{ 
              background: 'rgba(185, 28, 28, 0.1)', 
              color: 'var(--primary)',
              marginBottom: '0.65rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem'
            }}
          >
            <Camera size={16} /> Campus Visual Tour
          </div>

          <h1 className="gallery-title-text" style={{
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '0.75rem',
            color: 'var(--text-main)'
          }}>
            Hospital Gallery & Infrastructure
          </h1>

          <p className="gallery-subtitle-text" style={{
            color: 'var(--text-muted)',
            maxWidth: '740px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Explore our state-of-the-art modular operation theatres, 24/7 advanced ICU, computerized diagnostic imaging labs, and patient recovery facilities.
          </p>

          {/* Category Filter Tabs */}
          <div className="gallery-filter-tabs" style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.55rem'
          }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setLightboxIndex(null);
                }}
                className="gallery-filter-btn"
                style={{
                  borderRadius: '12px',
                  border: activeCategory === cat.id ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                  background: activeCategory === cat.id ? 'var(--primary-gradient)' : 'var(--bg-card-solid)',
                  color: activeCategory === cat.id ? '#ffffff' : 'var(--text-main)',
                  fontWeight: activeCategory === cat.id ? 800 : 600,
                  cursor: 'pointer',
                  boxShadow: activeCategory === cat.id ? '0 6px 18px rgba(185, 28, 28, 0.28)' : 'var(--shadow-sm)',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                <span>{cat.label}</span>
                <span style={{
                  padding: '0.1rem 0.45rem',
                  borderRadius: '9999px',
                  fontSize: '0.72rem',
                  background: activeCategory === cat.id ? 'rgba(255, 255, 255, 0.25)' : 'rgba(185, 28, 28, 0.08)',
                  color: activeCategory === cat.id ? '#ffffff' : 'var(--primary)',
                  fontWeight: 800
                }}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="gallery-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem'
        }}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="glass-card gallery-card"
              onClick={() => handleOpenLightbox(index)}
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-card-solid)',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.12)';
                e.currentTarget.style.borderColor = 'rgba(185, 28, 28, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              {/* Image Container with Zoom Effect */}
              <div style={{
                position: 'relative',
                height: '240px',
                overflow: 'hidden',
                background: 'var(--bg-main)'
              }}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="gallery-img-hover"
                />

                {/* Badge Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  background: 'rgba(15, 23, 42, 0.75)',
                  backdropFilter: 'blur(6px)',
                  color: '#ffffff',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.25)'
                }}>
                  <Sparkles size={12} color="#f59e0b" />
                  {item.tag}
                </div>

                {/* Hover overlay button */}
                <div style={{
                  position: 'absolute',
                  bottom: '14px',
                  right: '14px',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.92)',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                  transition: 'transform 0.2s ease'
                }}>
                  <Eye size={18} />
                </div>
              </div>

              {/* Card Meta Content */}
              <div style={{ padding: '1.25rem 1.4rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: 'var(--accent)',
                    display: 'block',
                    marginBottom: '0.35rem'
                  }}>
                    {item.categoryName}
                  </span>
                  <h3 style={{
                    fontSize: '1.12rem',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    margin: '0 0 0.5rem',
                    lineHeight: 1.35
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '0.86rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                    margin: 0
                  }}>
                    {item.description}
                  </p>
                </div>

                <div style={{
                  marginTop: '1rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.78rem',
                  color: 'var(--primary)',
                  fontWeight: 700
                }}>
                  <span>Click to expand view</span>
                  <Eye size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hospital Visit Banner */}
        <div 
          className="glass-card gallery-visit-banner"
          style={{
            borderRadius: '24px',
            border: '1px solid var(--border-highlight)',
            background: 'linear-gradient(135deg, var(--bg-card-solid) 0%, rgba(185, 28, 28, 0.04) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            padding: '2.25rem',
            gap: '1.5rem',
            marginBottom: '2rem',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div style={{ flex: 1, minWidth: '280px' }}>
            <span className="section-tag" style={{ background: 'rgba(234, 88, 12, 0.12)', color: 'var(--accent)', marginBottom: '0.6rem' }}>
              Campus Tour & Consultation
            </span>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 0.5rem' }}>
              Want to Experience Jeevandaan Care in Person?
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', margin: 0, maxWidth: '680px', lineHeight: 1.6 }}>
              Visit our facility at Kishan Market, 270/1 Berasia Road, Near Bijli Office, Lambakheda, Bhopal. Our patient relationship executives are available to guide you.
            </p>
          </div>

          <div className="gallery-visit-actions" style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a
              href={`tel:${helplinePhone}`}
              className="btn btn-primary"
              style={{ padding: '0.8rem 1.4rem', fontSize: '0.9rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.45rem' }}
            >
              📞 Call Desk: {helplinePhone}
            </a>
            {onOpenAppointment && (
              <button
                onClick={onOpenAppointment}
                className="btn btn-secondary"
                style={{ padding: '0.8rem 1.4rem', fontSize: '0.9rem' }}
              >
                Book OPD Appointment
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Lightbox / Fullscreen Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          className="lightbox-overlay"
          onClick={handleCloseLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.92)',
            backdropFilter: 'blur(8px)',
            zIndex: 1001,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div 
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '900px',
              width: '100%',
              background: 'var(--bg-card-solid)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 30px 70px rgba(0,0,0,0.5)',
              border: '1px solid var(--border-color)',
              position: 'relative'
            }}
          >
            {/* Top Close Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 1.5rem',
              borderBottom: '1px solid var(--border-color)',
              background: 'var(--bg-main)'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase' }}>
                  {filteredItems[lightboxIndex].categoryName} • Photo {lightboxIndex + 1} of {filteredItems.length}
                </span>
                <h4 style={{ margin: '0.2rem 0 0', fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {filteredItems[lightboxIndex].title}
                </h4>
              </div>

              <button
                onClick={handleCloseLightbox}
                aria-label="Close lightbox"
                style={{
                  background: 'var(--bg-card-solid)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-main)'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Preview Image */}
            <div style={{ position: 'relative', background: '#0b0f19', maxHeight: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '520px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />

              {/* Prev Button */}
              <button
                onClick={handlePrevPhoto}
                aria-label="Previous photo"
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backdropFilter: 'blur(4px)'
                }}
              >
                <ChevronLeft size={22} />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextPhoto}
                aria-label="Next photo"
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backdropFilter: 'blur(4px)'
                }}
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Bottom Caption & Information */}
            <div style={{ padding: '1.25rem 1.5rem', background: 'var(--bg-card-solid)' }}>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox, Hover & Mobile Responsive Styles */}
      <style>{`
        .gallery-page-container {
          padding: 3.5rem 0 4.5rem;
        }

        .gallery-header-section {
          margin-bottom: 2.75rem;
        }

        .gallery-title-text {
          font-size: clamp(2.1rem, 3.5vw, 3rem);
        }

        .gallery-subtitle-text {
          font-size: 1.05rem;
        }

        .gallery-filter-tabs {
          margin-top: 2rem;
        }

        .gallery-filter-btn {
          padding: 0.65rem 1.25rem;
          font-size: 0.88rem;
        }

        .gallery-card:hover .gallery-img-hover {
          transform: scale(1.06);
        }

        /* Mobile View Compact Adjustments */
        @media (max-width: 768px) {
          .gallery-page-container {
            padding: 1.25rem 0 0.5rem !important;
            min-height: auto !important;
          }
          .gallery-header-section {
            margin-bottom: 1.25rem !important;
          }
          .gallery-title-text {
            font-size: 1.65rem !important;
            margin-bottom: 0.45rem !important;
          }
          .gallery-subtitle-text {
            font-size: 0.88rem !important;
            line-height: 1.5 !important;
            padding: 0 0.5rem;
          }
          .gallery-filter-tabs {
            margin-top: 1rem !important;
            gap: 0.45rem !important;
          }
          .gallery-filter-btn {
            padding: 0.45rem 0.85rem !important;
            font-size: 0.78rem !important;
            border-radius: 9999px !important;
          }
          .gallery-grid {
            margin-bottom: 1.5rem !important;
            gap: 1.25rem !important;
          }
          .gallery-visit-banner {
            padding: 1.35rem 1.15rem !important;
            border-radius: 16px !important;
            margin-bottom: 0.5rem !important;
            gap: 1.15rem !important;
          }
          .gallery-visit-actions {
            width: 100% !important;
            flex-direction: column !important;
            gap: 0.65rem !important;
          }
          .gallery-visit-actions a,
          .gallery-visit-actions button {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
    </div>
  );
}
