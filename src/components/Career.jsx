import React, { useState } from 'react';
import { Briefcase, Upload, CheckCircle2, Award, UserCheck, Send } from 'lucide-react';

export default function Career() {
  const [selectedJob, setSelectedJob] = useState('');
  const [applicant, setApplicant] = useState({ name: '', phone: '', email: '', exp: '', resumeName: '' });
  const [applied, setApplied] = useState(false);

  const jobOpenings = [
    {
      id: 'job-1',
      title: 'Consultant - General & Laparoscopic Surgeon',
      dept: 'Surgical Division',
      type: 'Full-Time',
      exp: '5+ Years Post-MS',
      location: 'Bhopal Hospital Campus',
      qualification: 'MBBS, MS (Surgery), FIAGES/FMAS preferred'
    },
    {
      id: 'job-2',
      title: 'Senior ICU & Emergency Staff Nurse',
      dept: 'Critical Care Triage',
      type: 'Full-Time (Rotational Shifts)',
      exp: '2+ Years ICU Experience',
      location: 'Bhopal Hospital Campus',
      qualification: 'B.Sc Nursing / GNM with State Nursing Council Registration'
    },
    {
      id: 'job-3',
      title: 'Resident Medical Officer (RMO)',
      dept: 'Emergency & Casualty',
      type: 'Full-Time',
      exp: '1-3 Years Hospital Exp',
      location: 'Bhopal Hospital Campus',
      qualification: 'MBBS with MCI/State Registration'
    },
    {
      id: 'job-4',
      title: 'Senior Medical Lab Technician (NABL)',
      dept: 'Pathology & Diagnostic Lab',
      type: 'Full-Time',
      exp: '3+ Years Lab Experience',
      location: 'Bhopal Hospital Campus',
      qualification: 'DMLT / BMLT'
    }
  ];

  const handleApply = (e) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      setApplicant({ name: '', phone: '', email: '', exp: '', resumeName: '' });
      setSelectedJob('');
    }, 4000);
  };

  return (
    <section style={{ padding: '4rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Briefcase size={16} /> Careers At Jeevandaan
          </div>
          <h2 className="section-title">Join Our Team of Healthcare Heroes</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Work alongside Central India’s top medical professionals. We foster innovation, medical excellence, and career growth.
          </p>
        </div>

        {/* Benefits Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
          marginBottom: '3rem'
        }} className="grid-3">
          <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
            <Award size={32} color="var(--primary)" style={{ margin: '0 auto 0.75rem' }} />
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem' }}>Competitive Compensation</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Industry-leading salaries, health insurance, and performance incentives.</p>
          </div>

          <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
            <UserCheck size={32} color="var(--accent)" style={{ margin: '0 auto 0.75rem' }} />
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem' }}>Continuous Learning</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Regular clinical workshops, CMEs, and advanced surgical training.</p>
          </div>

          <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
            <Briefcase size={32} color="#10b981" style={{ margin: '0 auto 0.75rem' }} />
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem' }}>Supportive Environment</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>State-of-the-art infrastructure, NABH protocols, and team culture.</p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: '2rem',
          alignItems: 'start'
        }} className="grid-2">
          
          {/* Job List */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Current Job Openings ({jobOpenings.length})
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {jobOpenings.map(job => (
                <div key={job.id} className="glass-card" style={{ padding: '1.5rem', maxWidth: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <span className="badge badge-info" style={{ marginBottom: '0.5rem' }}>{job.dept}</span>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem' }}>
                        {job.title}
                      </h4>
                    </div>
                    <span className="badge badge-success">{job.type}</span>
                  </div>

                  <div style={{ marginTop: '1rem', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    <p><strong>Qualification:</strong> {job.qualification}</p>
                    <p><strong>Experience Required:</strong> {job.exp} • {job.location}</p>
                  </div>

                  <button 
                    onClick={() => setSelectedJob(job.title)}
                    className="btn btn-secondary"
                    style={{ marginTop: '1.25rem', padding: '0.5rem 1.25rem', fontSize: '0.88rem' }}
                  >
                    Apply For This Position →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Online Application Form */}
          <div className="glass-card career-form-card" style={{ padding: '1.5rem', maxWidth: '100%' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
              Apply Online
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Direct HR Email: <strong>jeevandanhospital.hr@gmail.com</strong>
            </p>

            {applied ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid #10b981',
                padding: '2rem',
                borderRadius: '16px',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={44} color="#059669" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#059669' }}>Application Submitted!</h4>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.88rem' }}>
                  Our HR team will review your CV and reach out for an interview round.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApply}>
                <div className="form-group">
                  <label className="form-label">Position Applied For *</label>
                  <select 
                    required
                    className="form-select"
                    value={selectedJob}
                    onChange={(e) => setSelectedJob(e.target.value)}
                  >
                    <option value="">Select a job role...</option>
                    {jobOpenings.map(j => (
                      <option key={j.id} value={j.title}>{j.title}</option>
                    ))}
                    <option value="Other Medical Role">Other Medical / Nursing Role</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text"
                    required
                    className="form-input"
                    placeholder="Your complete name"
                    value={applicant.name}
                    onChange={(e) => setApplicant({...applicant, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input 
                    type="tel"
                    required
                    className="form-input"
                    placeholder="10-digit phone number"
                    value={applicant.phone}
                    onChange={(e) => setApplicant({...applicant, phone: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input 
                    type="email"
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                    value={applicant.email}
                    onChange={(e) => setApplicant({...applicant, email: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Total Clinical Experience</label>
                  <input 
                    type="text"
                    className="form-input"
                    placeholder="e.g. 3 Years in ICU"
                    value={applicant.exp}
                    onChange={(e) => setApplicant({...applicant, exp: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Resume / CV Document</label>
                  <input 
                    type="file"
                    className="form-input"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setApplicant({...applicant, resumeName: e.target.files[0]?.name || ''})}
                  />
                </div>

                <button 
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.85rem', marginTop: '0.5rem' }}
                >
                  <Send size={18} /> Submit Application
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
