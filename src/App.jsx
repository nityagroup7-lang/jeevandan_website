import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MpGovtEmpanelmentBanner from './components/MpGovtEmpanelmentBanner';
import AboutPdfSection from './components/AboutPdfSection';
import PdfServicesGrid from './components/PdfServicesGrid';
import CashlessPartnersSection from './components/CashlessPartnersSection';
import ContactInfoBar from './components/ContactInfoBar';
import BedTracker from './components/BedTracker';
import DoctorDirectory from './components/DoctorDirectory';
import HealthPackages from './components/HealthPackages';
import PatientPortal from './components/PatientPortal';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Career from './components/Career';
import Departments from './components/Departments';
import PatientFacilities from './components/PatientFacilities';
import Gallery from './components/Gallery';
import BlogUpdates from './components/BlogUpdates';
import Footer from './components/Footer';

import AppointmentModal from './components/AppointmentModal';
import EmergencyModal from './components/EmergencyModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  
  const [selectedDoctorForModal, setSelectedDoctorForModal] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  // Sync dark/light theme on root html
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleOpenDoctorBooking = (doctor) => {
    setSelectedDoctorForModal(doctor);
    setIsAppointmentOpen(true);
  };

  const handleGeneralBooking = () => {
    setSelectedDoctorForModal(null);
    setIsAppointmentOpen(true);
  };

  // Home Page View
  const HomePage = () => (
    <>
      {/* Page 1: Hero Cover & Quick Specialist Search */}
      <Hero 
        onOpenAppointment={handleGeneralBooking}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        setSelectedDepartment={setSelectedDepartment}
      />

      {/* Page 4: MP Government Deemed Empanelled Hospital Highlight */}
      <MpGovtEmpanelmentBanner 
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onOpenAppointment={handleGeneralBooking}
      />

      {/* Page 2: About Us, Mission, Vision, Director Raja Choudhary Message & 7 Key Pillars */}
      <AboutPdfSection 
        onOpenAppointment={handleGeneralBooking}
      />

      {/* Page 3: 16 Key Clinical Services & Specialities */}
      <PdfServicesGrid 
        onOpenAppointment={handleGeneralBooking}
        setSelectedDepartment={setSelectedDepartment}
      />

      {/* Page 3: Cashless Treatment, Ayushman Bharat PMJAY & Health Checkup Network */}
      <CashlessPartnersSection 
        onOpenAppointment={handleGeneralBooking}
      />

      {/* World-Class Patient Facilities: Pharmacy, Modular OTs, Dialysis, Ambulance, Deluxe Wards, Canteen */}
      <PatientFacilities 
        onOpenAppointment={handleGeneralBooking}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
      />

      {/* Live Hospital Operations & Specialist Directory */}
      <DoctorDirectory 
        onSelectDoctor={handleOpenDoctorBooking}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
      />

      {/* Real-time Bed Matrix & ICU Tracker */}
      <BedTracker onOpenEmergency={() => setIsEmergencyOpen(true)} />

      {/* Comprehensive Health Check-up Packages */}
      <HealthPackages onOpenAppointment={handleGeneralBooking} />

      {/* Patient Portal & Diagnostic Test Reports */}
      <PatientPortal onOpenAppointment={handleGeneralBooking} />

      {/* Patient Feedback & Testimonials */}
      <Testimonials />

      {/* Page 4: Contact, Helplines & Address Information */}
      <ContactInfoBar 
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onOpenAppointment={handleGeneralBooking}
      />
    </>
  );

  // All Services Overview Page
  const ServicesPage = () => (
    <div style={{ paddingTop: '1.5rem' }}>
      <Departments 
        onOpenAppointment={handleGeneralBooking}
        setSelectedDepartment={setSelectedDepartment}
      />
      <PatientFacilities 
        onOpenAppointment={handleGeneralBooking}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
      />
      <CashlessPartnersSection 
        onOpenAppointment={handleGeneralBooking}
      />
      <DoctorDirectory 
        onSelectDoctor={handleOpenDoctorBooking}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
      />
      <BedTracker onOpenEmergency={() => setIsEmergencyOpen(true)} />
      <HealthPackages onOpenAppointment={handleGeneralBooking} />
      <PatientPortal onOpenAppointment={handleGeneralBooking} />
    </div>
  );

  return (
    <div className="app-root">
      {/* Scroll to top on every route change */}
      <ScrollToTop />

      {/* Navigation Header */}
      <Navbar 
        onOpenAppointment={handleGeneralBooking}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Routed Views */}
      <main>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />

          {/* About Us Route (Full Page with Director Raja Choudhary, Mission, Vision, 7 Pillars & Booklet Download) */}
          <Route path="/about" element={<AboutUs onOpenAppointment={handleGeneralBooking} />} />

          {/* Services Routes */}
          <Route path="/services" element={<ServicesPage />} />
          <Route 
            path="/departments" 
            element={
              <div style={{ paddingTop: '1.5rem' }}>
                <Departments 
                  onOpenAppointment={handleGeneralBooking}
                  setSelectedDepartment={setSelectedDepartment}
                />
              </div>
            } 
          />
          <Route 
            path="/facilities" 
            element={
              <div style={{ paddingTop: '1.5rem' }}>
                <PatientFacilities 
                  onOpenAppointment={handleGeneralBooking}
                  onOpenEmergency={() => setIsEmergencyOpen(true)}
                />
              </div>
            } 
          />
          <Route 
            path="/patient-facilities" 
            element={
              <div style={{ paddingTop: '1.5rem' }}>
                <PatientFacilities 
                  onOpenAppointment={handleGeneralBooking}
                  onOpenEmergency={() => setIsEmergencyOpen(true)}
                />
              </div>
            } 
          />
          <Route 
            path="/doctors" 
            element={
              <div style={{ paddingTop: '1.5rem' }}>
                <DoctorDirectory 
                  onSelectDoctor={handleOpenDoctorBooking}
                  selectedDepartment={selectedDepartment}
                  setSelectedDepartment={setSelectedDepartment}
                />
              </div>
            } 
          />
          <Route 
            path="/beds" 
            element={
              <div style={{ paddingTop: '1.5rem' }}>
                <BedTracker onOpenEmergency={() => setIsEmergencyOpen(true)} />
              </div>
            } 
          />
          <Route 
            path="/packages" 
            element={
              <div style={{ paddingTop: '1.5rem' }}>
                <HealthPackages onOpenAppointment={handleGeneralBooking} />
              </div>
            } 
          />
          <Route 
            path="/portal" 
            element={
              <div style={{ paddingTop: '1.5rem' }}>
                <PatientPortal onOpenAppointment={handleGeneralBooking} />
              </div>
            } 
          />

          {/* Gallery Route */}
          <Route 
            path="/gallery" 
            element={
              <Gallery 
                onOpenAppointment={handleGeneralBooking}
                onOpenEmergency={() => setIsEmergencyOpen(true)}
              />
            } 
          />

          {/* Blog & Health Updates Route */}
          <Route 
            path="/blog" 
            element={
              <BlogUpdates 
                onOpenAppointment={handleOpenDoctorBooking}
                onOpenEmergency={() => setIsEmergencyOpen(true)}
              />
            } 
          />

          {/* Contact Us Route */}
          <Route path="/contact" element={<ContactUs onOpenEmergency={() => setIsEmergencyOpen(true)} />} />

          {/* Careers Route */}
          <Route path="/career" element={<Career />} />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer 
        onOpenAppointment={handleGeneralBooking}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
      />

      {/* Modals */}
      <AppointmentModal 
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        initialDoctor={selectedDoctorForModal}
      />

      {/* Emergency SOS Modal */}
      <EmergencyModal 
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />

      {/* Floating 24/7 WhatsApp & Quick Call Action Buttons */}
      <FloatingActions 
        onOpenEmergency={() => setIsEmergencyOpen(true)} 
      />
    </div>
  );
}
