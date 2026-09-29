import React, { useState } from 'react';
import { 
  Search, BookOpen, Stethoscope, ShieldAlert, HeartPulse, Ambulance, 
  Sparkles, Calendar, Clock, Share2, ThumbsUp, ChevronRight, X, 
  CheckCircle2, AlertTriangle, UserCheck, ArrowRight, MessageSquare, 
  Send, Bookmark, HelpCircle, PhoneCall
} from 'lucide-react';
import { BLOG_ARTICLES, DOCTOR_QUICK_TIPS, SEASONAL_ALERT, BLOG_CATEGORIES } from '../data/blogData';
import { DOCTORS } from '../data/hospitalData';

export default function BlogUpdates({ onOpenAppointment, onOpenEmergency }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticleModal, setActiveArticleModal] = useState(null);
  const [likedArticles, setLikedArticles] = useState({});
  const [toastMessage, setToastMessage] = useState('');
  const [newsletterPhone, setNewsletterPhone] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Filter articles by category and search query
  const filteredArticles = BLOG_ARTICLES.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.categoryKey === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      article.title.toLowerCase().includes(query) ||
      article.summary.toLowerCase().includes(query) ||
      article.author.name.toLowerCase().includes(query) ||
      article.tags.some(tag => tag.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = BLOG_ARTICLES.find(a => a.featured) || BLOG_ARTICLES[0];

  const handleLike = (articleId, e) => {
    e.stopPropagation();
    setLikedArticles(prev => ({
      ...prev,
      [articleId]: !prev[articleId]
    }));
  };

  const handleShare = (article, e) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/blog#${article.id}`);
      showToast('Article link copied to clipboard!');
    } else {
      showToast('Sharing link: ' + article.title);
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleBookWithDoctor = (docNameOrId) => {
    const matchedDoctor = DOCTORS.find(d => 
      d.id === docNameOrId || d.name.toLowerCase().includes(docNameOrId.toLowerCase())
    );
    if (onOpenAppointment) {
      onOpenAppointment(matchedDoctor || null);
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterPhone.trim().length >= 10) {
      setNewsletterSubscribed(true);
      showToast('Subscribed! You will receive verified doctor health tips.');
    } else {
      showToast('Please enter a valid 10-digit phone number or email.');
    }
  };

  // Helper icon for categories
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'doctor-tips': return <Stethoscope size={16} />;
      case 'awareness': return <ShieldAlert size={16} />;
      case 'wellness': return <HeartPulse size={16} />;
      case 'first-aid': return <Ambulance size={16} />;
      default: return <Sparkles size={16} />;
    }
  };

  return (
    <div className="blog-page-wrapper" style={{ padding: '2.5rem 0 4rem', minHeight: '90vh' }}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: 'var(--text-main)',
          color: 'var(--bg-card-solid)',
          padding: '0.85rem 1.4rem',
          borderRadius: '9999px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          zIndex: 9999,
          fontSize: '0.9rem',
          fontWeight: 600,
          animation: 'slideUp 0.3s ease'
        }}>
          <CheckCircle2 size={18} color="#10b981" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="container">
        
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 2.5rem' }}>
          <div className="blog-hero-tag" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 1rem',
            borderRadius: '9999px',
            background: 'rgba(234, 88, 12, 0.1)',
            border: '1px solid rgba(234, 88, 12, 0.25)',
            color: 'var(--accent)',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '1rem',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }}>
            <BookOpen size={16} style={{ flexShrink: 0 }} /> JEEVANDAAN HEALTH UPDATES & WELLNESS BLOG
          </div>
          <h1 className="blog-hero-title" style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--text-main)',
            lineHeight: 1.2,
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
            wordBreak: 'break-word'
          }}>
            Doctor Health Tips, Medical Awareness & <span style={{ 
              background: 'var(--primary-gradient)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}>Wellness Insights</span>
          </h1>
          <p style={{
            fontSize: '1.02rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6
          }}>
            Clinical advisories, seasonal disease warnings, lifestyle guidelines, and evidence-based medicine written directly by senior consultants and super-specialists of Jeevandaan Hospital, Bhopal.
          </p>
        </div>

        {/* Seasonal Alert Banner */}
        <div className="seasonal-alert-box" style={{
          background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(234, 88, 12, 0.08) 100%)',
          border: '1px solid rgba(220, 38, 38, 0.25)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem 1.5rem',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', flex: '1 1 500px' }}>
            <div style={{
              background: 'var(--emergency-red)',
              color: '#ffffff',
              padding: '0.6rem',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <AlertTriangle size={22} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
                <span style={{ 
                  background: 'rgba(220, 38, 38, 0.15)', 
                  color: 'var(--emergency-red)', 
                  fontWeight: 800, 
                  fontSize: '0.72rem', 
                  padding: '0.15rem 0.5rem', 
                  borderRadius: '4px',
                  letterSpacing: '0.04em'
                }}>
                  {SEASONAL_ALERT.tag}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600 }}>{SEASONAL_ALERT.date}</span>
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                {SEASONAL_ALERT.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                {SEASONAL_ALERT.message}
              </p>
            </div>
          </div>

          <div className="seasonal-alert-actions" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenAppointment ? onOpenAppointment(null) : null}
              className="btn btn-primary"
              style={{ fontSize: '0.85rem', padding: '0.55rem 1rem' }}
            >
              {SEASONAL_ALERT.actionText}
            </button>
            <a
              href={`tel:${SEASONAL_ALERT.emergencyContact}`}
              className="btn"
              style={{
                background: 'var(--bg-card-solid)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '0.85rem',
                padding: '0.55rem 1rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <PhoneCall size={14} color="var(--primary)" /> 24/7 Helpline: {SEASONAL_ALERT.emergencyContact}
            </a>
          </div>
        </div>

        {/* Doctor Quick Health Tips Strip */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Stethoscope size={20} color="var(--accent)" />
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                  Doctor's Daily Health Tips
                </h2>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.2rem 0 0' }}>
                Bite-sized clinical advice for your daily wellbeing from Jeevandaan specialists
              </p>
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)' }}>
              Verified Clinical Guidelines • Bhopal
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem'
          }}>
            {DOCTOR_QUICK_TIPS.map(tip => (
              <div 
                key={tip.id}
                className="doctor-tip-card"
                style={{
                  background: 'var(--bg-card-solid)',
                  border: `1px solid ${tip.borderColor}`,
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      background: tip.bgColor,
                      color: 'var(--text-main)',
                      border: `1px solid ${tip.borderColor}`
                    }}>
                      {tip.tag}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <CheckCircle2 size={12} color="#10b981" /> Verified
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                    "{tip.title}"
                  </h4>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1rem' }}>
                    {tip.tip}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '0.85rem',
                  marginTop: '0.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <img 
                      src={tip.doctorImage} 
                      alt={tip.doctorName}
                      style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <div>
                      <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {tip.doctorName}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {tip.specialty}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookWithDoctor(tip.doctorName)}
                    style={{
                      background: 'none',
                      border: '1px solid var(--border-color)',
                      borderRadius: '6px',
                      padding: '0.35rem 0.65rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'var(--primary)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'none';
                      e.currentTarget.style.color = 'var(--primary)';
                    }}
                  >
                    Consult <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Story / Editor's Pick */}
        {featuredArticle && (
          <div style={{
            background: 'var(--bg-card-solid)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: '3.5rem',
            boxShadow: 'var(--shadow-md)',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '0'
          }} className="featured-banner-grid">
            <div style={{ position: 'relative', minHeight: '320px' }}>
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                background: 'var(--primary-gradient)',
                color: '#ffffff',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                boxShadow: '0 4px 12px rgba(185, 28, 28, 0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <Sparkles size={13} /> FEATURED MEDICAL ARTICLE
              </div>
            </div>

            <div style={{ padding: '2rem 2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-primary">{featuredArticle.category}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={13} /> {featuredArticle.publishDate}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={13} /> {featuredArticle.readTime}
                  </span>
                </div>

                <h2 style={{
                  fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
                  fontWeight: 800,
                  color: 'var(--text-main)',
                  lineHeight: 1.3,
                  marginBottom: '0.75rem'
                }}>
                  {featuredArticle.title}
                </h2>

                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem'
                }}>
                  {featuredArticle.summary}
                </p>

                {/* Author Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <img 
                    src={featuredArticle.author.image} 
                    alt={featuredArticle.author.name}
                    style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent)' }}
                  />
                  <div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      {featuredArticle.author.name}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--primary)', fontWeight: 600 }}>
                      {featuredArticle.author.title} • {featuredArticle.author.dept}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setActiveArticleModal(featuredArticle)}
                  className="btn btn-primary"
                  style={{ padding: '0.65rem 1.4rem', fontSize: '0.9rem', gap: '0.5rem' }}
                >
                  Read Full Article <ArrowRight size={16} />
                </button>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={(e) => handleLike(featuredArticle.id, e)}
                    style={{
                      background: likedArticles[featuredArticle.id] ? 'rgba(220, 38, 38, 0.1)' : 'var(--bg-main)',
                      border: '1px solid var(--border-color)',
                      color: likedArticles[featuredArticle.id] ? 'var(--primary)' : 'var(--text-muted)',
                      borderRadius: '8px',
                      padding: '0.5rem 0.85rem',
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    <ThumbsUp size={14} fill={likedArticles[featuredArticle.id] ? 'currentColor' : 'none'} />
                    <span>{featuredArticle.likes + (likedArticles[featuredArticle.id] ? 1 : 0)}</span>
                  </button>

                  <button
                    onClick={(e) => handleShare(featuredArticle, e)}
                    style={{
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-muted)',
                      borderRadius: '8px',
                      padding: '0.5rem 0.85rem',
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                    title="Share Article"
                  >
                    <Share2 size={14} /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search & Category Filter Navigation Bar */}
        <div style={{
          background: 'var(--bg-card-solid)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.25rem',
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          {/* Categories */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {BLOG_CATEGORIES.map(cat => {
              const isActive = selectedCategory === cat.id;
              const count = cat.id === 'all' 
                ? BLOG_ARTICLES.length 
                : BLOG_ARTICLES.filter(a => a.categoryKey === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.5rem 0.95rem',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: isActive ? '1px solid var(--accent)' : '1px solid var(--border-color)',
                    background: isActive ? 'var(--primary-gradient)' : 'var(--bg-main)',
                    color: isActive ? '#ffffff' : 'var(--text-main)',
                    boxShadow: isActive ? '0 4px 12px rgba(234, 88, 12, 0.3)' : 'none'
                  }}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.label}</span>
                  <span style={{
                    fontSize: '0.72rem',
                    background: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.06)',
                    color: isActive ? '#ffffff' : 'var(--text-light)',
                    padding: '0.1rem 0.45rem',
                    borderRadius: '9999px',
                    fontWeight: 700
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', width: '280px', maxWidth: '100%' }}>
            <Search 
              size={16} 
              color="var(--text-light)" 
              style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} 
            />
            <input 
              type="text"
              placeholder="Search health topic, symptom..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.55rem 2rem 0.55rem 2.4rem',
                borderRadius: '9999px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-main)',
                color: 'var(--text-main)',
                fontSize: '0.85rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '0.6rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-light)',
                  padding: '0.2rem'
                }}
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 1.5rem',
            background: 'var(--bg-card-solid)',
            borderRadius: 'var(--radius-lg)',
            border: '1px dashed var(--border-color)',
            margin: '2rem 0'
          }}>
            <HelpCircle size={48} color="var(--accent)" style={{ marginBottom: '1rem', opacity: 0.8 }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>No Articles Found</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '420px', margin: '0 auto 1.5rem' }}>
              We could not find any article matching "{searchQuery}". Try searching for terms like "heart", "fever", "spine", "first aid", or browse all categories.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="btn btn-primary"
              style={{ fontSize: '0.85rem' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4rem'
          }}>
            {filteredArticles.map(article => {
              const isLiked = likedArticles[article.id];
              return (
                <article
                  key={article.id}
                  className="blog-card"
                  style={{
                    background: 'var(--bg-card-solid)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => setActiveArticleModal(article)}
                >
                  {/* Card Thumbnail */}
                  <div>
                    <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                      <img 
                        src={article.image} 
                        alt={article.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '0.85rem',
                        left: '0.85rem',
                        background: 'rgba(0, 0, 0, 0.75)',
                        backdropFilter: 'blur(6px)',
                        color: '#ffffff',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.02em'
                      }}>
                        {article.category}
                      </div>
                      <div style={{
                        position: 'absolute',
                        bottom: '0.85rem',
                        right: '0.85rem',
                        background: 'rgba(0, 0, 0, 0.75)',
                        backdropFilter: 'blur(6px)',
                        color: '#ffffff',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                        fontSize: '0.7rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontWeight: 600
                      }}>
                        <Clock size={12} /> {article.readTime}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div style={{ padding: '1.35rem 1.35rem 1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', fontSize: '0.78rem', color: 'var(--text-light)' }}>
                        <Calendar size={13} />
                        <span>{article.publishDate}</span>
                        <span>•</span>
                        <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Jeevandaan Editorial</span>
                      </div>

                      <h3 style={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: 'var(--text-main)',
                        lineHeight: 1.35,
                        marginBottom: '0.6rem'
                      }}>
                        {article.title}
                      </h3>

                      <p style={{
                        fontSize: '0.88rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.55,
                        marginBottom: '1rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {article.summary}
                      </p>

                      {/* Tags */}
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                        {article.tags.slice(0, 3).map((tag, idx) => (
                          <span 
                            key={idx}
                            style={{
                              fontSize: '0.72rem',
                              background: 'var(--bg-main)',
                              color: 'var(--text-muted)',
                              border: '1px solid var(--border-color)',
                              padding: '0.15rem 0.5rem',
                              borderRadius: '4px',
                              fontWeight: 600
                            }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer (Author & Actions) */}
                  <div style={{
                    padding: '0.85rem 1.35rem 1.1rem',
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'rgba(0,0,0,0.015)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                      <img 
                        src={article.author.image} 
                        alt={article.author.name}
                        style={{ width: '34px', height: '34px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)' }}>
                          {article.author.name}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                          {article.author.dept}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <button
                        onClick={(e) => handleLike(article.id, e)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: isLiked ? 'var(--primary)' : 'var(--text-light)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.2rem',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          padding: '0.3rem'
                        }}
                        title="Mark Helpful"
                      >
                        <ThumbsUp size={14} fill={isLiked ? 'currentColor' : 'none'} />
                        <span>{article.likes + (isLiked ? 1 : 0)}</span>
                      </button>

                      <button
                        onClick={(e) => handleShare(article, e)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: 'var(--text-light)',
                          padding: '0.3rem'
                        }}
                        title="Share"
                      >
                        <Share2 size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* WhatsApp & Email Health Tips Subscription Box */}
        <div style={{
          background: 'linear-gradient(135deg, var(--bg-card-solid) 0%, rgba(234, 88, 12, 0.06) 100%)',
          border: '1px solid var(--border-highlight)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem 2rem',
          marginBottom: '3.5rem',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{ maxWidth: '550px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--accent)',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '0.4rem'
            }}>
              <MessageSquare size={16} /> Free Weekly Doctor Advisory
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              Get Verified Health Tips & Seasonal Advisories
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              Join 12,000+ Bhopal citizens receiving monthly disease prevention guides, heart care routines, and diet charts vetted by Jeevandaan Hospital doctors.
            </p>
          </div>

          <div style={{ flex: '1 1 340px' }}>
            {newsletterSubscribed ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: '#10b981'
              }}>
                <CheckCircle2 size={24} />
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>Subscription Confirmed!</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-main)', margin: '0.2rem 0 0' }}>
                    You will receive verified health bulletins on {newsletterPhone}. No spam guaranteed.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <input 
                  type="text" 
                  placeholder="Enter 10-digit WhatsApp No or Email" 
                  value={newsletterPhone}
                  onChange={(e) => setNewsletterPhone(e.target.value)}
                  required
                  style={{
                    flex: '1 1 200px',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-main)',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}
                >
                  Subscribe <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Clinical Disclaimer & Quick Emergency Support CTA */}
        <div style={{
          background: 'var(--bg-card-solid)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          padding: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: 'var(--text-muted)'
        }}>
          <div style={{ maxWidth: '750px', lineHeight: 1.5 }}>
            <strong>Medical Disclaimer:</strong> The articles, doctor tips, and wellness insights published on the Jeevandaan Hospital portal are for general awareness and educational purposes only. They are not intended as a substitute for professional medical examination, diagnosis, or treatment. Always consult a qualified physician for specific health concerns.
          </div>
          <button
            onClick={onOpenEmergency}
            className="btn btn-emergency"
            style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}
          >
            <Ambulance size={14} /> 24x7 Emergency SOS
          </button>
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {activeArticleModal && (
        <div 
          className="modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1rem'
          }}
          onClick={() => setActiveArticleModal(null)}
        >
          <div 
            className="modal-content"
            style={{
              background: 'var(--bg-card-solid)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '850px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: 'var(--shadow-lg)',
              animation: 'modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div style={{
              position: 'sticky',
              top: 0,
              background: 'var(--bg-card-solid)',
              borderBottom: '1px solid var(--border-color)',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 10
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span className="badge badge-primary">{activeArticleModal.category}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Clock size={13} /> {activeArticleModal.readTime}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={(e) => handleShare(activeArticleModal, e)}
                  style={{
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    borderRadius: '6px',
                    padding: '0.4rem 0.75rem',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontWeight: 600
                  }}
                >
                  <Share2 size={14} /> Share
                </button>
                <button
                  onClick={() => setActiveArticleModal(null)}
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
                    color: 'var(--text-main)'
                  }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '1.75rem 2rem' }}>
              
              {/* Cover Image */}
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', maxHeight: '350px', marginBottom: '1.5rem' }}>
                <img 
                  src={activeArticleModal.image} 
                  alt={activeArticleModal.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Title & Subtitle */}
              <h1 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                fontWeight: 800,
                color: 'var(--text-main)',
                lineHeight: 1.25,
                marginBottom: '0.75rem'
              }}>
                {activeArticleModal.title}
              </h1>

              <p style={{
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                fontWeight: 500,
                lineHeight: 1.5,
                marginBottom: '1.5rem',
                borderLeft: '3px solid var(--accent)',
                paddingLeft: '1rem'
              }}>
                {activeArticleModal.subtitle}
              </p>

              {/* Doctor Reviewer Card */}
              <div style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <img 
                    src={activeArticleModal.author.image} 
                    alt={activeArticleModal.author.name}
                    style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary)' }}
                  />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--text-main)' }}>
                        {activeArticleModal.author.name}
                      </span>
                      <CheckCircle2 size={15} color="#10b981" />
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 600 }}>
                      {activeArticleModal.author.title}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>
                      {activeArticleModal.author.qualifications} • {activeArticleModal.author.dept}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActiveArticleModal(null);
                    handleBookWithDoctor(activeArticleModal.author.name);
                  }}
                  className="btn btn-primary"
                  style={{ fontSize: '0.82rem', padding: '0.5rem 1rem', gap: '0.35rem' }}
                >
                  <UserCheck size={15} /> Book Consultation
                </button>
              </div>

              {/* Full Article Content */}
              <div className="article-rendered-body" style={{ color: 'var(--text-main)', lineHeight: 1.75, fontSize: '0.98rem' }}>
                {activeArticleModal.content.map((block, idx) => (
                  <div key={idx} style={{ marginBottom: '1.75rem' }}>
                    {block.heading && (
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                        marginBottom: '0.65rem'
                      }}>
                        {block.heading}
                      </h3>
                    )}

                    {block.body && (
                      <p style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                        {block.body}
                      </p>
                    )}

                    {block.bullets && (
                      <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', margin: '0.5rem 0 1rem' }}>
                        {block.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} style={{ marginBottom: '0.45rem' }}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                    {block.checklist && (
                      <div style={{
                        background: 'rgba(234, 88, 12, 0.05)',
                        border: '1px solid rgba(234, 88, 12, 0.2)',
                        borderRadius: 'var(--radius-md)',
                        padding: '1.15rem 1.25rem',
                        margin: '1rem 0'
                      }}>
                        <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <CheckCircle2 size={16} /> Key Clinical Action Plan:
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {block.checklist.map((item, cIdx) => (
                            <div key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                              <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Myths vs Facts Section */}
              {activeArticleModal.mythsVsFacts && activeArticleModal.mythsVsFacts.length > 0 && (
                <div style={{
                  marginTop: '2rem',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)'
                }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <AlertTriangle size={18} color="var(--primary)" /> Medical Myths vs. Clinical Facts
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {activeArticleModal.mythsVsFacts.map((mf, mfIdx) => (
                      <div 
                        key={mfIdx} 
                        style={{
                          background: 'var(--bg-card-solid)',
                          borderRadius: '8px',
                          padding: '1rem',
                          border: '1px solid var(--border-color)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem', color: '#dc2626', fontSize: '0.88rem', fontWeight: 700 }}>
                          <span style={{ background: 'rgba(220, 38, 38, 0.1)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>MYTH:</span>
                          <span>"{mf.myth}"</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#10b981', fontSize: '0.88rem', fontWeight: 600 }}>
                          <span style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>FACT:</span>
                          <span style={{ color: 'var(--text-muted)' }}>{mf.fact}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Doctor Consultation Banner */}
              <div style={{
                marginTop: '2.5rem',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, rgba(185, 28, 28, 0.08) 0%, rgba(234, 88, 12, 0.08) 100%)',
                border: '1px solid var(--border-highlight)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                    Need Medical Consultation for Similar Symptoms?
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                    Consult {activeArticleModal.author.name} or call our 24x7 OPD desk for immediate assistance.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveArticleModal(null);
                    handleBookWithDoctor(activeArticleModal.author.name);
                  }}
                  className="btn btn-primary"
                  style={{ fontSize: '0.88rem' }}
                >
                  Book Appointment Now
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style>{`
        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md) !important;
          border-color: var(--border-highlight) !important;
        }

        .doctor-tip-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md) !important;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 850px) {
          .featured-banner-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .blog-page-wrapper {
            padding: 1.25rem 0 3.5rem !important;
          }
          .blog-hero-tag {
            font-size: 0.72rem !important;
            padding: 0.35rem 0.75rem !important;
            white-space: normal !important;
            text-align: center !important;
            line-height: 1.3 !important;
          }
          .blog-hero-title {
            font-size: 1.6rem !important;
            line-height: 1.25 !important;
          }
          .seasonal-alert-box {
            padding: 1rem !important;
            margin-bottom: 1.75rem !important;
            border-radius: 14px !important;
          }
          .seasonal-alert-actions {
            width: 100% !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 0.6rem !important;
          }
          .seasonal-alert-actions button,
          .seasonal-alert-actions a {
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
