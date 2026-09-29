import React, { useState } from 'react';
import { Search, FileText, Download, Clock, User, CheckCircle, ShieldCheck, Eye, X, Activity } from 'lucide-react';
import { SAMPLE_REPORTS, LIVE_OPD_TOKENS } from '../data/hospitalData';

export default function PatientPortal({ onOpenAppointment }) {
  const [tokenInput, setTokenInput] = useState('');
  const [searchedToken, setSearchedToken] = useState(null);
  const [reportInput, setReportInput] = useState('');
  const [reportsList, setReportsList] = useState(SAMPLE_REPORTS);
  const [activeReportModal, setActiveReportModal] = useState(null);

  const handleTrackToken = (e) => {
    e.preventDefault();
    if (!tokenInput) return;
    const found = LIVE_OPD_TOKENS.find(t => 
      t.currentToken.toLowerCase() === tokenInput.toLowerCase() ||
      t.doctor.toLowerCase().includes(tokenInput.toLowerCase())
    );
    if (found) {
      setSearchedToken(found);
    } else {
      setSearchedToken({
        department: 'General OPD',
        doctor: 'Consultant Specialist',
        currentToken: tokenInput.toUpperCase(),
        totalTokens: 35,
        estWaitTime: '12 Mins'
      });
    }
  };

  const handleReportSearch = (e) => {
    e.preventDefault();
    if (!reportInput) {
      setReportsList(SAMPLE_REPORTS);
      return;
    }
    const filtered = SAMPLE_REPORTS.filter(r => 
      r.id.toLowerCase().includes(reportInput.toLowerCase()) ||
      r.patientName.toLowerCase().includes(reportInput.toLowerCase()) ||
      r.testName.toLowerCase().includes(reportInput.toLowerCase())
    );
    setReportsList(filtered);
  };

  return (
    <section style={{ padding: '2rem 0 2rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <FileText size={16} /> Digital Patient Portal
          </div>
          <h2 className="section-title">OPD Queue Tracker & Diagnostic Reports</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Check your OPD live token position in real-time or download your lab and radiology test reports securely.
          </p>
        </div>

        {/* Top 2 Columns: Token Tracker & Report Lookup */}
        <div className="grid-2" style={{ marginBottom: '3rem' }}>
          
          {/* Card 1: OPD Live Queue Tracker */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(0,180,216,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)'
              }}>
                <Clock size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>Live OPD Queue Tracker</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Check doctor room queue status</p>
              </div>
            </div>

            <form onSubmit={handleTrackToken} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <input 
                  type="text"
                  className="form-input"
                  placeholder="Enter Token No (e.g. A-24) or Doctor Name"
                  value={tokenInput}
                  onChange={(e) => setTokenInput(e.target.value)}
                  style={{ margin: 0, flex: '1 1 200px' }}
                />
                <button type="submit" className="btn btn-primary" style={{ flexShrink: 0 }}>
                  <Search size={18} /> Track Status
                </button>
              </div>
            </form>

            {/* Token Result Box */}
            {searchedToken ? (
              <div style={{
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'var(--bg-card-solid)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="badge badge-success">Doctor Room Active</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{searchedToken.department}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>
                    {searchedToken.currentToken}
                  </span>
                  <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
                    is currently inside room
                  </span>
                </div>

                <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Doctor: {searchedToken.doctor}</p>

                <div style={{
                  marginTop: '0.75rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-color)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)'
                }}>
                  <span>Total Tokens: <strong>{searchedToken.totalTokens}</strong></span>
                  <span>Est. Wait: <strong>~{searchedToken.estWaitTime}</strong></span>
                </div>
              </div>
            ) : (
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                💡 <em>Tip: Enter your Token Number printed on your appointment pass to check how many patients are ahead of you in the OPD waiting area.</em>
              </div>
            )}
          </div>

          {/* Card 2: Report Lookup */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(16,185,129,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10b981'
              }}>
                <FileText size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>Download Lab & Scan Reports</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Instant access to diagnostic test files</p>
              </div>
            </div>

            <form onSubmit={handleReportSearch}>
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <input 
                  type="text"
                  className="form-input"
                  placeholder="Enter Report ID (e.g. REP-90412) or Patient Name"
                  value={reportInput}
                  onChange={(e) => setReportInput(e.target.value)}
                  style={{ margin: 0, flex: '1 1 200px' }}
                />
                <button type="submit" className="btn btn-secondary" style={{ flexShrink: 0 }}>
                  <Search size={18} /> Search
                </button>
              </div>
            </form>

            <div style={{
              padding: '0.85rem',
              borderRadius: '10px',
              background: 'rgba(0,180,216,0.08)',
              fontSize: '0.85rem',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <ShieldCheck size={18} color="var(--primary)" />
              <span>All lab results are digitally signed by NABL-certified Pathologists.</span>
            </div>
          </div>

        </div>

        {/* Ready Reports List Section */}
        <div style={{ marginBottom: '0' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem' }}>
            Recent Available Diagnostic Reports ({reportsList.length})
          </h3>

          <div className="grid-3">
            {reportsList.map((report) => (
              <div key={report.id} className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span className="badge badge-info">{report.id}</span>
                  <span className="badge badge-success">✓ {report.status}</span>
                </div>

                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {report.testName}
                </h4>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.4rem 0' }}>
                  Patient: <strong>{report.patientName}</strong> ({report.patientAge} Yrs)
                </p>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
                  Doctor: {report.doctor} • Date: {report.date}
                </p>

                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => setActiveReportModal(report)}
                    className="btn btn-secondary"
                    style={{ flex: '1 1 120px', fontSize: '0.82rem', padding: '0.5rem' }}
                  >
                    <Eye size={14} /> View Details
                  </button>
                  <button 
                    onClick={() => alert(`Simulated Download for ${report.id} (${report.fileSize}) completed successfully!`)}
                    className="btn btn-primary"
                    style={{ flex: '1 1 120px', fontSize: '0.82rem', padding: '0.5rem' }}
                  >
                    <Download size={14} /> PDF ({report.fileSize})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Report Summary Modal */}
      {activeReportModal && (
        <div className="modal-overlay" onClick={() => setActiveReportModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <span className="badge badge-success">Official NABL Lab Report</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '0.2rem' }}>{activeReportModal.testName}</h3>
              </div>
              <button onClick={() => setActiveReportModal(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={24} />
              </button>
            </div>

            <div style={{
              background: 'var(--bg-main)',
              padding: '1.25rem',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              marginBottom: '1.5rem',
              lineHeight: 1.7
            }}>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <strong>Patient:</strong> {activeReportModal.patientName} | <strong>Age:</strong> {activeReportModal.patientAge} Yrs
              </p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <strong>Prescribed By:</strong> {activeReportModal.doctor}
              </p>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                <strong>Report Date:</strong> {activeReportModal.date} | <strong>Reference No:</strong> {activeReportModal.id}
              </p>

              <div style={{
                background: 'var(--bg-card-solid)',
                padding: '1rem',
                borderRadius: '8px',
                borderLeft: '4px solid var(--accent)'
              }}>
                <strong style={{ fontSize: '0.9rem', color: 'var(--primary)' }}>Key Clinical Impression / Summary:</strong>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', marginTop: '0.25rem' }}>
                  {activeReportModal.summary}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                onClick={() => {
                  alert(`Downloading full PDF report ${activeReportModal.id}...`);
                  setActiveReportModal(null);
                }}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <Download size={18} /> Download Signed PDF ({activeReportModal.fileSize})
              </button>
              <button onClick={() => setActiveReportModal(null)} className="btn btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
