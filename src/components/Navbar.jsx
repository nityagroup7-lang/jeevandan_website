import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Phone, Moon, Sun, AlertTriangle, Menu, X, Calendar, Clock, 
  ChevronDown, Building2, Stethoscope, Bed, ShieldCheck, FileText, UserCheck, Sparkles, BookOpen 
} from 'lucide-react';
import logoImg from '../assets/Jeevandaan Logo.png';
import whatsappImg from '../assets/whatsapp.png';

export default function Navbar({ onOpenAppointment, onOpenEmergency, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Health Blog' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/career', label: 'Career' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const isRouteActive = (link) => {
    if (link.path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === link.path || location.pathname.startsWith(link.path + '/');
  };

  return (
    <header className="navbar-wrapper" style={{ position: 'sticky', top: 0, zIndex: 100, width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      {/* Emergency Top Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #b91c1c 0%, #ea580c 100%)',
        color: '#ffffff',
        padding: '0.35rem 0.75rem',
        fontSize: '0.82rem',
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(185,28,28,0.3)',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 1, minWidth: 0, overflow: 'hidden' }}>
          <span className="live-pulse" style={{ background: '#ffffff', flexShrink: 0 }}></span>
          
          {/* WhatsApp Direct Chat & Number */}
          <a 
            href="https://wa.me/919098852357?text=Hello%20Jeevandaan%20Hospital!%20I%20would%20like%20to%20inquire%20about%20OPD%20appointments%20and%20treatments." 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.35rem', 
              color: '#ffffff', 
              textDecoration: 'none', 
              fontWeight: 800,
              background: 'rgba(37, 211, 102, 0.25)',
              padding: '0.15rem 0.6rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              fontSize: '0.78rem',
              whiteSpace: 'nowrap'
            }}
          >
            <img src={whatsappImg} alt="WhatsApp" style={{ width: '15px', height: '15px', borderRadius: '50%' }} />
            <span>WhatsApp: +91 90988 52357</span>
          </a>

          {/* 24/7 Call Hotline */}
          <span className="top-bar-hotline hide-on-mobile" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Hotline: <a href="tel:+919098852357" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 800 }}>+91 90988 52357</a>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }} className="top-bar-right">
          <span style={{ opacity: 0.9, display: 'flex', alignItems: 'center', gap: '0.3rem', whiteSpace: 'nowrap' }} className="hide-on-mobile">
            <Clock size={14} /> OPD: 8:00 AM - 8:00 PM
          </span>
          <button 
            onClick={onOpenEmergency}
            className="btn-emergency"
            style={{ padding: '0.2rem 0.55rem', fontSize: '0.72rem', borderRadius: '6px', whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            <Phone size={11} /> <span className="hide-on-mobile">Dispatch </span>Ambulance
          </button>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <nav style={{
        background: 'var(--bg-card-solid)',
        borderBottom: '1px solid var(--border-color)',
        padding: '0.5rem 0.75rem',
        transition: 'box-shadow 0.25s ease',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.05)',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          maxWidth: '1400px',
          margin: '0 auto',
          gap: '0.4rem',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          
          {/* Hospital Logo */}
          <div 
            onClick={() => handleNavClick('/')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', flexShrink: 1, minWidth: 0, overflow: 'hidden' }}
          >
            <img 
              src={logoImg} 
              alt="Jeevandaan Hospital Logo" 
              className="navbar-logo-img"
              style={{
                height: '38px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 6px rgba(185, 28, 28, 0.2))',
                flexShrink: 0
              }} 
            />
            <div style={{ flexShrink: 1, minWidth: 0, overflow: 'hidden' }}>
              <h1 className="navbar-title" style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.1, whiteSpace: 'nowrap', letterSpacing: '-0.01em', overflow: 'hidden', textOverflow: 'ellipsis', margin: 0 }}>
                JEEVANDAAN <span style={{ color: 'var(--accent)' }}>HOSPITAL</span>
              </h1>
              <p className="navbar-subtitle" style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.01em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', margin: 0 }}>
                सर्वे सन्तु निरामया: • CARE BEYOND CURE
              </p>
            </div>
          </div>

          {/* Desktop Links (Home, About Us, Services, Contact Us, Career) */}
          {/* Desktop Links (Home, About Us, Services, Blog, Gallery, Contact Us, Career) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = isRouteActive(link);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`nav-menu-btn ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              title="Toggle Dark/Light Mode"
              style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-main)',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
            >
              {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="var(--primary)" />}
            </button>

            {/* Book Appointment CTA */}
            <button 
              onClick={onOpenAppointment}
              className="btn btn-primary desktop-only"
              style={{ gap: '0.4rem', padding: '0.55rem 1.1rem', fontSize: '0.88rem', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              <Calendar size={16} /> Book Appointment
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle Navigation Menu"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-main)',
                cursor: 'pointer',
                padding: '0.25rem',
                display: 'none'
              }}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            padding: '1rem 0',
            borderTop: '1px solid var(--border-color)',
            marginTop: '0.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            {navLinks.map((link) => {
              const isActive = isRouteActive(link);
              return (
                <button 
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  style={{
                    padding: '0.65rem 1rem',
                    textAlign: 'left',
                    fontWeight: isActive ? 800 : 600,
                    border: 'none',
                    borderRadius: '10px',
                    background: isActive ? 'rgba(185, 28, 28, 0.08)' : 'transparent',
                    color: isActive ? 'var(--primary)' : 'var(--text-main)',
                    fontSize: '0.95rem',
                    cursor: 'pointer'
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        )}
      </nav>

      <style>{`
        .nav-menu-btn {
          background: transparent;
          border: 1px solid transparent;
          padding: 0.55rem 1.15rem;
          font-size: 0.96rem;
          font-weight: 600;
          color: var(--text-main);
          border-radius: 9999px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .nav-menu-btn:hover {
          color: var(--primary);
          background: rgba(234, 88, 12, 0.08);
          border-color: rgba(234, 88, 12, 0.25);
          transform: translateY(-1.5px);
        }

        .nav-menu-btn.active {
          color: #ffffff !important;
          background: var(--primary-gradient) !important;
          font-weight: 700;
          box-shadow: 0 4px 14px rgba(185, 28, 28, 0.35);
          border-color: transparent !important;
          transform: translateY(-1px);
        }

        @media (max-width: 1050px) {
          .desktop-nav { display: none !important; }
          .desktop-only { display: none !important; }
          .mobile-toggle { display: block !important; }
        }

        @media (max-width: 640px) {
          .hide-on-mobile { display: none !important; }
          .top-bar-hotline { font-size: 0.76rem !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .navbar-logo-img { height: 32px !important; }
          .navbar-title { font-size: 0.92rem !important; }
          .navbar-subtitle { font-size: 0.52rem !important; letter-spacing: 0 !important; }
        }
        @media (max-width: 400px) {
          .navbar-title { font-size: 0.84rem !important; }
          .navbar-subtitle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
