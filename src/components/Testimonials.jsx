import React from 'react';
import { Star, Quote, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/hospitalData';

export default function Testimonials() {
  return (
    <section style={{ padding: '4.5rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ background: 'rgba(139, 92, 246, 0.12)', color: '#8b5cf6' }}>
            <Award size={16} /> Patient Stories
          </div>
          <h2 className="section-title">Hear From Our Recovered Patients</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Over 50,000+ families trust Jeevandaan Hospital for high-risk surgical care and emergency recovery.
          </p>
        </div>

        <div className="grid-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.2rem' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <Quote size={24} color="var(--accent)" style={{ opacity: 0.5 }} />
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '1.25rem', fontStyle: 'italic' }}>
                  "{t.comment}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{t.name}</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 600 }}>
                  Treatment: {t.treatment} ({t.city})
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  Doctor: {t.doctor}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
