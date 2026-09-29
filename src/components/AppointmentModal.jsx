import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, QrCode, Printer, Download, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DOCTORS, DEPARTMENTS } from '../data/hospitalData';
import defaultDoctorAvatar from '../assets/default_doctor_avatar.svg';

export default function AppointmentModal({ isOpen, onClose, initialDoctor = null }) {
  const [step, setStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctor || DOCTORS[0]);
  const [selectedDept, setSelectedDept] = useState(initialDoctor ? initialDoctor.department : DEPARTMENTS[0].name);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState('10:30 AM');

  // Patient Info State
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    age: '',
    gender: 'Male',
    phone: '',
    email: '',
    notes: ''
  });

  const [bookingPass, setBookingPass] = useState(null);

  useEffect(() => {
    if (initialDoctor) {
      setSelectedDoctor(initialDoctor);
      setSelectedDept(initialDoctor.department);
    }
  }, [initialDoctor]);

  if (!isOpen) return null;

  const availableSlots = [
    '09:30 AM', '10:15 AM', '11:00 AM', '11:45 AM',
    '02:00 PM', '02:45 PM', '03:30 PM', '04:15 PM', '05:30 PM'
  ];

  const handleDeptChange = (e) => {
    const deptName = e.target.value;
    setSelectedDept(deptName);
    const docInDept = DOCTORS.find(d => d.department === deptName);
    if (docInDept) {
      setSelectedDoctor(docInDept);
    }
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 3) {
      // Confirm Booking
      const passData = {
        appointmentId: 'JD-' + Math.floor(100000 + Math.random() * 900000),
        opdToken: 'OPD-' + Math.floor(10 + Math.random() * 80),
        patientName: patientInfo.name,
        patientAge: patientInfo.age,
        patientGender: patientInfo.gender,
        patientPhone: patientInfo.phone,
        doctorName: selectedDoctor.name,
        department: selectedDoctor.department,
        roomNo: selectedDoctor.roomNo,
        date: selectedDate,
        timeSlot: selectedTime,
        fee: selectedDoctor.fee,
        bookingTimestamp: new Date().toLocaleString()
      };
      setBookingPass(passData);
      setStep(4);
      
      // Trigger festive confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback
      }
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: step === 4 ? '700px' : '620px', padding: 0, overflow: 'hidden' }}
      >
        {/* Modal Header Bar */}
        <div style={{
          background: 'var(--primary-gradient)',
          color: '#ffffff',
          padding: '1.25rem 1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.9 }}>
              Jeevandaan OPD Booking Wizard
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '0.1rem' }}>
              {step === 4 ? '🎉 Appointment Confirmed!' : 'Book Doctor Appointment'}
            </h3>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress Stepper Bar (if not finished) */}
        {step < 4 && (
          <div style={{
            display: 'flex',
            background: 'var(--bg-main)',
            borderBottom: '1px solid var(--border-color)',
            padding: '0.75rem 1rem',
            overflowX: 'auto'
          }}>
            {[
              { num: 1, title: 'Doctor' },
              { num: 2, title: 'Date & Slot' },
              { num: 3, title: 'Patient Details' }
            ].map(s => (
              <div 
                key={s.num}
                style={{
                  flex: 1,
                  minWidth: '85px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: step >= s.num ? 'var(--primary)' : 'var(--text-muted)',
                  fontWeight: step >= s.num ? 700 : 500,
                  fontSize: '0.82rem'
                }}
              >
                <div style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: step >= s.num ? 'var(--primary)' : 'var(--border-color)',
                  color: step >= s.num ? '#ffffff' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  flexShrink: 0
                }}>
                  {s.num}
                </div>
                <span>{s.title}</span>
              </div>
            ))}
          </div>
        )}

        {/* Step Body Content */}
        <div style={{ padding: '1.25rem' }}>
          
          {/* STEP 1: Select Doctor & Department */}
          {step === 1 && (
            <div>
              <div className="form-group">
                <label className="form-label">Select Department</label>
                <select 
                  className="form-select"
                  value={selectedDept}
                  onChange={handleDeptChange}
                >
                  {DEPARTMENTS.map(d => (
                    <option key={d.id} value={d.name}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Select Doctor</label>
                <select 
                  className="form-select"
                  value={selectedDoctor ? selectedDoctor.id : ''}
                  onChange={(e) => {
                    const doc = DOCTORS.find(d => d.id === e.target.value);
                    if (doc) setSelectedDoctor(doc);
                  }}
                >
                  {DOCTORS.filter(d => !selectedDept || d.department === selectedDept).map(doc => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name} - {doc.title} (Fee: ₹{doc.fee})
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Doctor Summary Card */}
              {selectedDoctor && (
                <div className="glass-card" style={{ padding: '1.25rem', marginTop: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <img 
                    src={selectedDoctor.image || defaultDoctorAvatar} 
                    alt={selectedDoctor.name}
                    onError={(e) => { e.currentTarget.src = defaultDoctorAvatar; }}
                    style={{ width: '65px', height: '65px', borderRadius: '14px', objectFit: 'cover', background: '#f1f5f9' }}
                  />
                  <div style={{ flex: 1, minWidth: '160px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{selectedDoctor.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>{selectedDoctor.title}</p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      📍 {selectedDoctor.roomNo} • OPD Consultation Fee: <strong>₹{selectedDoctor.fee}</strong>
                    </p>
                  </div>
                </div>
              )}

              <button 
                onClick={() => setStep(2)}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '1.5rem' }}
              >
                Continue to Select Slot →
              </button>
            </div>
          )}

          {/* STEP 2: Date & Slot Selection */}
          {step === 2 && (
            <div>
              <div className="form-group">
                <label className="form-label">Choose Consultation Date</label>
                <input 
                  type="date"
                  className="form-input"
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginTop: '1.5rem' }}>
                <label className="form-label">Available Time Slots for {selectedDate}</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(85px, 1fr))', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {availableSlots.map((slot, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      style={{
                        padding: '0.65rem 0.4rem',
                        borderRadius: '10px',
                        border: selectedTime === slot ? '2px solid var(--accent)' : '1px solid var(--border-color)',
                        background: selectedTime === slot ? 'rgba(0,180,216,0.15)' : 'var(--bg-main)',
                        color: selectedTime === slot ? 'var(--primary)' : 'var(--text-main)',
                        fontWeight: selectedTime === slot ? 700 : 500,
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => setStep(1)}
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  ← Back
                </button>
                <button 
                  onClick={() => setStep(3)}
                  className="btn btn-primary"
                  style={{ flex: 2 }}
                >
                  Continue to Patient Details →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Info Form */}
          {step === 3 && (
            <form onSubmit={handleNextStep}>
              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Patient Full Name *</label>
                  <input 
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Ramesh Kumar"
                    value={patientInfo.name}
                    onChange={(e) => setPatientInfo({ ...patientInfo, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Age *</label>
                  <input 
                    type="number"
                    required
                    min="1"
                    max="120"
                    className="form-input"
                    placeholder="e.g. 42"
                    value={patientInfo.age}
                    onChange={(e) => setPatientInfo({ ...patientInfo, age: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Gender *</label>
                  <select 
                    className="form-select"
                    value={patientInfo.gender}
                    onChange={(e) => setPatientInfo({ ...patientInfo, gender: e.target.value })}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Mobile Number *</label>
                  <input 
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    className="form-input"
                    placeholder="10-digit Mobile No"
                    value={patientInfo.phone}
                    onChange={(e) => setPatientInfo({ ...patientInfo, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Chief Complaint / Reason for Visit (Optional)</label>
                <textarea 
                  rows={2}
                  className="form-input"
                  placeholder="Describe symptoms briefly..."
                  value={patientInfo.notes}
                  onChange={(e) => setPatientInfo({ ...patientInfo, notes: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <button 
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  ← Back
                </button>
                <button 
                  type="submit"
                  className="btn btn-primary"
                  style={{ flex: 2 }}
                >
                  <CheckCircle2 size={18} /> Confirm & Generate Pass
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Printable OPD Appointment Pass */}
          {step === 4 && bookingPass && (
            <div id="printable-pass">
              {/* Ticket Card container */}
              <div style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
                color: '#0f172a',
                borderRadius: '16px',
                padding: '1.25rem',
                border: '2px dashed var(--accent)',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
                maxWidth: '100%',
                overflow: 'hidden'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                  <div>
                    <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)' }}>
                      JEEVANDAAN HOSPITAL
                    </h2>
                    <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b' }}>
                      Official OPD Consultation Ticket Pass
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="badge badge-success" style={{ fontSize: '0.85rem' }}>
                      TOKEN: {bookingPass.opdToken}
                    </span>
                    <p style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.25rem' }}>
                      ID: {bookingPass.appointmentId}
                    </p>
                  </div>
                </div>

                <div className="grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <strong style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Patient Info</strong>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '0.1rem' }}>{bookingPass.patientName}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#475569' }}>
                      {bookingPass.patientAge} Yrs • {bookingPass.patientGender} • 📞 {bookingPass.patientPhone}
                    </p>
                  </div>

                  <div>
                    <strong style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Assigned Doctor</strong>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginTop: '0.1rem' }}>
                      {bookingPass.doctorName}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#475569' }}>
                      {bookingPass.department} • 📍 {bookingPass.roomNo}
                    </p>
                  </div>
                </div>

                <div style={{
                  background: '#ffffff',
                  padding: '0.85rem',
                  borderRadius: '12px',
                  border: '1px solid #cbd5e1',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.25rem'
                }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Date & Time Slot</span>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800 }}>
                      📅 {bookingPass.date} at 🕒 {bookingPass.timeSlot}
                    </h4>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Consultation Fee</span>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#10b981' }}>
                      ₹{bookingPass.fee} (Paid at Counter)
                    </h4>
                  </div>
                </div>

                {/* Simulated QR code & Hospital Seal */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      padding: '0.5rem',
                      background: '#ffffff',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px'
                    }}>
                      <QrCode size={40} color="#0f172a" />
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', maxWidth: '180px' }}>
                      Scan QR code at hospital reception kiosk for instant OPD entry.
                    </span>
                  </div>

                  <div style={{ textTransform: 'uppercase', fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', textAlign: 'right' }}>
                    Approved by Jeevandaan Desk<br />
                    {bookingPass.bookingTimestamp}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button onClick={handlePrint} className="btn btn-secondary" style={{ flex: 1 }}>
                  <Printer size={18} /> Print Appointment Pass
                </button>
                <button onClick={onClose} className="btn btn-primary" style={{ flex: 1 }}>
                  Done & Close
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
