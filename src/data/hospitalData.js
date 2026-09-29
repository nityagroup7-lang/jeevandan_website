import defaultDoctorAvatar from '../assets/default_doctor_avatar.svg';

export const DOCTORS = [
  {
    id: 'doc-1',
    name: 'Dr. Manohar Malviye',
    title: 'Senior Consultant - Plastic & Reconstructive Surgery',
    department: 'General & Laparoscopic Surgery',
    experience: '16+ Years',
    qualifications: 'MBBS, MS (Surgery), MCh (Plastic Surgery)',
    rating: 4.9,
    reviewsCount: 384,
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    timing: '10:00 AM - 02:00 PM',
    fee: 800,
    image: defaultDoctorAvatar,
    specialties: ['Reconstructive Surgery', 'Burns & Trauma Care', 'Cosmetic Surgery'],
    roomNo: 'OPD Block A - Room 102'
  },
  {
    id: 'doc-2',
    name: 'Dr. Tejinder Singh Ajmani',
    title: 'Director & Chief Consultant - Anesthesiology & Critical Care',
    department: '24x7 Emergency & Trauma Care',
    experience: '20+ Years',
    qualifications: 'MBBS, MD (Anesthesiology & Critical Care)',
    rating: 4.95,
    reviewsCount: 520,
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    timing: '09:00 AM - 04:00 PM',
    fee: 900,
    image: defaultDoctorAvatar,
    specialties: ['Critical Care Triage', 'Neuro-Anesthesia', 'Advanced Pain Management'],
    roomNo: 'ICU & OT Complex - Room 01'
  },
  {
    id: 'doc-3',
    name: 'Dr. Rahul Agrawal',
    title: 'Senior Surgical & Medical Oncologist',
    department: 'Oncology',
    experience: '15+ Years',
    qualifications: 'MBBS, MS (General Surgery), MCh (Surgical Oncology)',
    rating: 4.88,
    reviewsCount: 310,
    availableDays: ['Mon', 'Wed', 'Fri', 'Sat'],
    timing: '11:00 AM - 03:00 PM',
    fee: 1000,
    image: defaultDoctorAvatar,
    specialties: ['Cancer Surgery', 'Chemotherapy Planning', 'Head & Neck Oncology'],
    roomNo: 'Oncology Center - Room 304'
  },
  {
    id: 'doc-4',
    name: 'Dr. Pushpraj Singh',
    title: 'Senior Dental & Maxillofacial Surgeon',
    department: 'Dental & Maxillofacial',
    experience: '12+ Years',
    qualifications: 'BDS, MDS (Oral & Maxillofacial Surgery)',
    rating: 4.92,
    reviewsCount: 295,
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    timing: '10:00 AM - 05:00 PM',
    fee: 600,
    image: defaultDoctorAvatar,
    specialties: ['Maxillofacial Trauma', 'Dental Implants', 'Jaw Reconstruction'],
    roomNo: 'Dental Wing - Room 08'
  },
  {
    id: 'doc-5',
    name: 'Dr. Alok Verma',
    title: 'Consultant General & Laparoscopic Surgeon',
    department: 'General & Laparoscopic Surgery',
    experience: '14+ Years',
    qualifications: 'MBBS, MS (General Surgery), FIAGES',
    rating: 4.85,
    reviewsCount: 240,
    availableDays: ['Tue', 'Thu', 'Fri', 'Sat'],
    timing: '11:00 AM - 03:00 PM',
    fee: 750,
    image: defaultDoctorAvatar,
    specialties: ['Minimally Invasive Hernia Repair', 'Gallbladder Surgery', 'Appendectomy'],
    roomNo: 'OPD Block A - Room 105'
  },
  {
    id: 'doc-6',
    name: 'Dr. Priya Sharma',
    title: 'Senior Gynecologist & Obstetrician',
    department: 'Gynaecology & Obstetrics',
    experience: '16+ Years',
    qualifications: 'MBBS, MS (OB-GYN), DGO',
    rating: 4.94,
    reviewsCount: 410,
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Sat'],
    timing: '09:00 AM - 01:00 PM',
    fee: 700,
    image: defaultDoctorAvatar,
    specialties: ['High Risk Pregnancy', 'Laparoscopic Gynecology', 'Infertility Treatment'],
    roomNo: 'Mother & Child Care - Room 02'
  },
  {
    id: 'doc-7',
    name: 'Dr. Rajesh Gupta',
    title: 'Consultant Orthopedic & Joint Replacement Surgeon',
    department: 'Orthopedics & Joint Replacement',
    experience: '18+ Years',
    qualifications: 'MBBS, MS (Orthopedics), Fellowship (UK)',
    rating: 4.91,
    reviewsCount: 460,
    availableDays: ['Mon', 'Wed', 'Thu', 'Fri', 'Sat'],
    timing: '10:00 AM - 02:00 PM',
    fee: 850,
    image: defaultDoctorAvatar,
    specialties: ['Knee & Hip Replacement', 'Fracture Care', 'Arthroscopy'],
    roomNo: 'Orthopedic Block - Room 12'
  },
  {
    id: 'doc-8',
    name: 'Dr. S. K. Mishra',
    title: 'Senior Consultant Cardiologist',
    department: 'Cardiology & Heart Care',
    experience: '19+ Years',
    qualifications: 'MBBS, MD (Medicine), DM (Cardiology)',
    rating: 4.96,
    reviewsCount: 490,
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    timing: '10:00 AM - 03:00 PM',
    fee: 900,
    image: defaultDoctorAvatar,
    specialties: ['Angioplasty & Stenting', 'Echocardiography', 'Hypertension Management'],
    roomNo: 'Cardiac Wing - Room 101'
  }
];

export const PDF_BOOKLET_DATA = {
  hospitalName: 'JEEVANDAAN Multi-Speciality Hospital',
  tagline: 'Your Health | Our Priority | 24x7 Care',
  subTagline: 'Trusted Care. Seamless Support.',
  website: 'www.jeevandaanhospital.com',
  rating: 4.1,
  ratingSource: 'Google Average Rating',
  
  aboutOverview: 'At Jeevandaan Multi-Speciality Hospital, we believe every life deserves the best care. Located in Lambakheda, Bhopal, our hospital blends advanced medical technology, a team of highly qualified doctors, and a patient-first approach to provide trusted healthcare for individuals and families. From emergency care to advanced surgeries and preventive health check-ups, we deliver comprehensive treatment under one roof, ensuring comfort, transparency, and quality at every step.',
  
  mission: 'To provide accessible, affordable, and advanced healthcare to every patient with compassion, integrity, and excellence—creating a healing environment where patients feel cared for, families feel reassured, and communities stay healthier.',
  
  vision: 'To be recognized as Central India’s most trusted multi-speciality hospital, setting benchmarks in quality medical services, innovative treatments, and patient satisfaction, while continuously upgrading with the latest medical advancements.',
  
  director: {
    name: 'RAJA CHOUDHARY',
    title: 'Director - Jeevandaan Multi-Speciality Hospital',
    message: 'At Jeevandaan Multi-Speciality Hospital, we treat every patient like family. Our mission is to deliver advanced, ethical, and affordable healthcare with compassion and trust. With a team of expert doctors and modern facilities, we strive to ensure safe treatment and a positive healing experience for every individual.',
    image: '/src/assets/raja_choudhary.jpg'
  },
  
  whyChooseUs: [
    'Expert Doctors & Super Specialists',
    'Comprehensive Diagnosis & Preventive Care',
    'Advanced Operation Theatres & ICU',
    'Affordable Treatment Packages',
    '24x7 Emergency Support',
    'Patient-First Approach',
    'Dedicated Front Desk & Coordination Team for smooth admission & discharge'
  ],
  
  mpGovtEmpanelment: {
    title: 'Recognized as a Deemed Empanelled Hospital by the Government of Madhya Pradesh',
    coverage: 'All MP Government Departments & their eligible dependents are covered.',
    rules: 'Medical expenses are reimbursable under MP Civil Services (Medical Attendance) Rules, 2022.',
    departments: [
      'MP Police', 'Public Works (PWD)', 'CM Helpline', 'Health & Family Welfare',
      'Education', 'Water Resources', 'Energy', 'Urban Development',
      'Rural Development', 'Agriculture', 'Revenue', 'Transport', 'Forest'
    ],
    helplines: ['9098852357', '9079036458', '8269900698'],
    callout: 'Government Employees, Insurance Holders, Wellness Members - JEEVANDAAN IS HERE FOR YOU!'
  },
  
  contact: {
    phones: ['9098852357', '9079036458', '8269900698'],
    website: 'www.jeevandaanhospital.com',
    email: 'Jeevandanhospital508@gmail.com',
    address: 'Kishan Market, 270/1 Berasia Road, Near Bijli Office, Lambhakheda, Bhopal (MP) - 462037'
  }
};

export const DEPARTMENTS = [
  {
    id: 'laparoscopic-surgery',
    name: 'General & Laparoscopic Surgery',
    iconName: 'Stethoscope',
    shortDesc: 'Minimally invasive procedures, faster recovery.',
    fullDesc: 'Jeevandaan Surgical Division specializes in minimally invasive laparoscopic procedures, hernia repairs, gallbladder surgeries, and abdominal interventions ensuring minimal pain, tiny scars, and rapid recovery.',
    stats: '10,000+ Surgeries Performed',
    badge: 'Minimally Invasive Care',
    color: '#b91c1c'
  },
  {
    id: 'general-medicine',
    name: 'General Medicine',
    iconName: 'Activity',
    shortDesc: 'Preventive & chronic disease care for all ages.',
    fullDesc: 'Comprehensive diagnosis, management of hypertension, diabetes, infectious illnesses, and chronic health conditions by senior physicians.',
    stats: 'Primary & Chronic Care',
    badge: 'Comprehensive Medicine',
    color: '#ea580c'
  },
  {
    id: 'emergency-trauma',
    name: '24x7 Accident, Emergency & Trauma Care',
    iconName: 'Ambulance',
    shortDesc: 'Round-the-clock urgent care with advanced ICU.',
    fullDesc: 'Equipped with dedicated resuscitation bays, immediate CT & X-Ray imaging, ICU on wheels, and round-the-clock emergency trauma specialists.',
    stats: '24x7 Level-1 Triage',
    badge: '24/7 SOS Ready',
    color: '#dc2626'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics & Joint Replacement',
    iconName: 'Bone',
    shortDesc: 'Expert bone, joint, & spine treatments.',
    fullDesc: 'Advanced joint reconstruction, knee & hip replacements, complex fracture management, and arthroscopic keyhole surgery.',
    stats: '8,000+ Joint Surgeries',
    badge: 'Joint Care Center',
    color: '#ea580c'
  },
  {
    id: 'urology-nephrology',
    name: 'Urology & Nephrology',
    iconName: 'ShieldAlert',
    shortDesc: 'Kidney & urinary tract treatments, dialysis services.',
    fullDesc: 'State-of-the-art dialysis center with ultra-pure RO water plant, dedicated hemodialysis beds, prostate surgery, and kidney stone management.',
    stats: '24/7 Dialysis Support',
    badge: 'Renal Care Center',
    color: '#06b6d4'
  },
  {
    id: 'physiotherapy',
    name: 'Physiotherapy & Rehabilitation',
    iconName: 'Activity',
    shortDesc: 'Support for post-surgery recovery & chronic conditions.',
    fullDesc: 'Comprehensive physical therapy unit with electrotherapy, exercise equipment, post-stroke rehab, and individualized rehabilitation protocols.',
    stats: 'Custom Rehab Plans',
    badge: 'Complete Recovery',
    color: '#10b981'
  },
  {
    id: 'oncology',
    name: 'Oncology',
    iconName: 'HeartPulse',
    shortDesc: 'Comprehensive cancer care & chemotherapy.',
    fullDesc: 'Surgical and medical oncology services including cancer screening, chemotherapy protocols, tumor excision, and palliative support.',
    stats: 'Specialized Cancer Care',
    badge: 'Oncology Wing',
    color: '#b91c1c'
  },
  {
    id: 'neurology',
    name: 'Neurology & Neurosurgery',
    iconName: 'Activity',
    shortDesc: 'Brain, spine, & nerve disorder treatments.',
    fullDesc: 'Advanced care for stroke management, epilepsy, spinal disorders, neuro-trauma, and nerve conditions.',
    stats: 'Neuro-Critical Care',
    badge: 'Brain & Spine Unit',
    color: '#8b5cf6'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics & Neonatal Care',
    iconName: 'Baby',
    shortDesc: 'Specialized care for infants & children.',
    fullDesc: 'Dedicated Level-III NICU, newborn care, child growth monitoring, pediatric emergency interventions, and immunizations.',
    stats: 'Level-III NICU Facility',
    badge: 'Child Health Care',
    color: '#ec4899'
  },
  {
    id: 'gynaecology',
    name: 'Gynecology & Obstetrics',
    iconName: 'User',
    shortDesc: 'Prenatal care, normal & high-risk deliveries, advanced surgeries.',
    fullDesc: 'Comprehensive women healthcare center providing compassionate care for pregnancy, maternal health, painless labor, and laparoscopic surgeries.',
    stats: '5,000+ Safe Deliveries',
    badge: 'Mother & Child Care',
    color: '#8b5cf6'
  },
  {
    id: 'psychiatry',
    name: 'Psychiatry & Mental Health',
    iconName: 'User',
    shortDesc: 'Counseling & treatment for mental health conditions.',
    fullDesc: 'Expert psychological counseling, psychiatric evaluation, mood disorder management, stress relief, and mental wellness programs.',
    stats: 'Mental Wellness Support',
    badge: 'Mind Health Wing',
    color: '#10b981'
  },
  {
    id: 'dermatology',
    name: 'Dermatology & Skin Care',
    iconName: 'Sparkles',
    shortDesc: 'Skin treatments, cosmetic & laser therapies.',
    fullDesc: 'Advanced dermatological care, laser treatments, acne and psoriasis management, allergy testing, and cosmetic skin restoration.',
    stats: 'Advanced Skin Therapies',
    badge: 'Cosmetic & Skin Unit',
    color: '#f59e0b'
  },
  {
    id: 'corporate-wellness',
    name: 'Corporate Health Check-ups & Wellness Camps',
    iconName: 'ShieldCheck',
    shortDesc: 'Tailored preventive programs for employees.',
    fullDesc: 'Custom executive health checkups, corporate medical camps, occupational health screening, and employee wellness packages.',
    stats: '50+ Corporate Partners',
    badge: 'Preventive Health',
    color: '#06b6d4'
  },
  {
    id: 'burns-plastic-surgery',
    name: 'Burns, Plastic & Reconstructive Surgery',
    iconName: 'Award',
    shortDesc: 'Advanced surgical care & aesthetic restoration.',
    fullDesc: 'Specialized burn treatment unit, tissue reconstruction, scar management, trauma flap surgeries, and cosmetic aesthetic restoration.',
    stats: 'Expert Reconstructive Unit',
    badge: 'Plastic Surgery Wing',
    color: '#b91c1c'
  },
  {
    id: 'pathology',
    name: 'Pathology & Diagnostic Services',
    iconName: 'Stethoscope',
    shortDesc: 'Accurate & timely lab investigations.',
    fullDesc: 'NABL aligned pathology laboratory offering automated hematology, biochemistry, microbiology, and rapid diagnostic reporting.',
    stats: '24/7 NABL Aligned Lab',
    badge: 'Diagnostic Excellence',
    color: '#8b5cf6'
  },
  {
    id: 'radiology',
    name: 'Advanced Radiology Imaging',
    iconName: 'Activity',
    shortDesc: 'High-tech imaging including X-ray, MRI, CT scan, Ultrasound.',
    fullDesc: '24/7 High-speed Digital X-Ray, High-resolution Ultrasound, 128-Slice CT Imaging, and Color Doppler vascular studies.',
    stats: 'Instant Digital Reporting',
    badge: 'Radiology Suite',
    color: '#ea580c'
  }
];

export const INITIAL_BED_DATA = [
  { type: 'ICU Beds', total: 40, available: 8, occupied: 32, category: 'Critical Care', status: 'High Demand', color: '#b91c1c' },
  { type: 'Ventilator Beds', total: 20, available: 4, occupied: 16, category: 'Critical Care', status: 'Urgent', color: '#dc2626' },
  { type: 'Cardiac ICU (CCU)', total: 25, available: 6, occupied: 19, category: 'Cardiac', status: 'Available', color: '#ea580c' },
  { type: 'Oxygen Supported Beds', total: 120, available: 32, occupied: 88, category: 'Ward', status: 'Sufficient', color: '#06b6d4' },
  { type: 'Deluxe Private Rooms', total: 60, available: 16, occupied: 44, category: 'Private', status: 'Available', color: '#10b981' },
  { type: 'General Wards (Male/Female)', total: 150, available: 45, occupied: 105, category: 'General', status: 'Sufficient', color: '#8b5cf6' }
];

export const HEALTH_PACKAGES = [
  {
    id: 'pkg-1',
    name: 'Jeevandaan Full Body Essential',
    price: 1999,
    originalPrice: 4500,
    discount: '55% OFF',
    testsCount: '68 Parameters Tested',
    popular: true,
    tests: ['Complete Blood Count (CBC)', 'Lipid Profile (Cholesterol)', 'Liver Function Test (LFT)', 'Kidney Function Test (KFT)', 'Fasting Blood Sugar', 'HbA1c (3 Month Sugar)', 'Thyroid Profile (T3, T4, TSH)', 'Urine Routine Analysis'],
    idealFor: 'Men & Women above 18 years'
  },
  {
    id: 'pkg-2',
    name: 'Advanced Cardiac Protection',
    price: 3499,
    originalPrice: 7500,
    discount: '53% OFF',
    testsCount: '75 Parameters + ECG & Echo',
    popular: false,
    tests: ['Full Body Essential Tests', 'Echocardiogram (2D Echo)', 'Treadmill Test (TMT Stress)', 'High Sensitivity CRP (hs-CRP)', 'Apolipoprotein B & A1', 'Cardiologist Consultation'],
    idealFor: 'People with hypertension or family history of heart disease'
  },
  {
    id: 'pkg-3',
    name: 'Senior Citizen Comprehensive Checkup',
    price: 2999,
    originalPrice: 6200,
    discount: '51% OFF',
    testsCount: '80 Parameters + X-Ray & USG',
    popular: true,
    tests: ['Complete Metabolic Panel', 'Chest X-Ray (PA View)', 'Abdomen & Pelvis Ultrasound', 'Bone Mineral Density (Dexa)', 'Vitamin D3 & B12', 'Joint & Arthritis Panel', 'Physician Consultation'],
    idealFor: 'Seniors aged 50+ years'
  },
  {
    id: 'pkg-4',
    name: 'Women Wellness & Hormone Shield',
    price: 2499,
    originalPrice: 5200,
    discount: '52% OFF',
    testsCount: '62 Parameters + Pap Smear',
    popular: false,
    tests: ['Full Blood & Anemia Screen', 'Complete Thyroid Profile', 'Calcium & Vitamin D', 'Hormone Profile (FSH, LH, Prolactin)', 'Pap Smear Screening', 'Gynecologist Consultation'],
    idealFor: 'Women of all age groups'
  }
];

export const SAMPLE_REPORTS = [
  {
    id: 'REP-90412',
    patientName: 'Ramesh Sharma',
    patientAge: 45,
    testName: 'Complete Blood Count & Lipid Panel',
    date: '14 Sep 2026',
    doctor: 'Dr. Manohar Malviye',
    status: 'Ready',
    fileSize: '1.4 MB',
    summary: 'Hemoglobin: 14.2 g/dL (Normal), Total Cholesterol: 185 mg/dL (Desirable), Fasting Blood Sugar: 98 mg/dL.'
  },
  {
    id: 'REP-88231',
    patientName: 'Sunita Patel',
    patientAge: 38,
    testName: 'Digital X-Ray & Orthopedic Scan',
    date: '12 Sep 2026',
    doctor: 'Dr. Rajesh Gupta',
    status: 'Ready',
    fileSize: '4.8 MB',
    summary: 'Mild joint space reduction noted in right knee. Recommended physical therapy and follow-up.'
  },
  {
    id: 'REP-77109',
    patientName: 'Amitabh Sen',
    patientAge: 62,
    testName: '2D Echocardiography & Cardiac Evaluation',
    date: '10 Sep 2026',
    doctor: 'Dr. S. K. Mishra',
    status: 'Ready',
    fileSize: '2.9 MB',
    summary: 'Normal LVEF (62%), intact valvular structure, normal cardiac diastolic relaxation pattern.'
  }
];

export const LIVE_OPD_TOKENS = [
  { department: 'General Surgery', doctor: 'Dr. Manohar Malviye', currentToken: 'A-24', totalTokens: 45, estWaitTime: '15 Mins' },
  { department: 'Emergency & Trauma', doctor: 'Dr. Tejinder Singh Ajmani', currentToken: 'B-18', totalTokens: 38, estWaitTime: '05 Mins' },
  { department: 'Oncology', doctor: 'Dr. Rahul Agrawal', currentToken: 'C-31', totalTokens: 40, estWaitTime: '20 Mins' },
  { department: 'Gynaecology', doctor: 'Dr. Priya Sharma', currentToken: 'D-12', totalTokens: 30, estWaitTime: '15 Mins' },
  { department: 'Orthopedics', doctor: 'Dr. Rajesh Gupta', currentToken: 'E-09', totalTokens: 25, estWaitTime: '25 Mins' }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sunita Sharma',
    city: 'Bhopal',
    treatment: 'Laparoscopic Surgery',
    comment: 'The surgical team led by Dr. Manohar Malviye provided exceptional care during my laparoscopic procedure. Recovery was fast and painless. Highly recommend Jeevandaan Hospital Bhopal!',
    rating: 5,
    doctor: 'Dr. Manohar Malviye'
  },
  {
    id: 2,
    name: 'Amit Patel',
    city: 'Bhopal',
    treatment: 'Emergency ICU & Trauma Care',
    comment: 'When my uncle needed emergency critical care, Dr. Tejinder Singh Ajmani and the 24x7 trauma team acted swiftly. Exceptional 24x7 facilities and supportive nursing staff.',
    rating: 5,
    doctor: 'Dr. Tejinder Singh Ajmani'
  },
  {
    id: 3,
    name: 'Neha Gupta',
    city: 'Indore',
    treatment: 'Maxillofacial & Dental Care',
    comment: 'Dr. Pushpraj Singh is an incredible specialist. The treatment was painless and the hospital staff ensured complete hygiene and comfort.',
    rating: 5,
    doctor: 'Dr. Pushpraj Singh'
  }
];

export const HOSPITAL_STATS = [
  { label: 'Patients Treated / Month', value: '500+', iconName: 'Stethoscope' },
  { label: 'Patient Satisfaction', value: '95%', iconName: 'ThumbsUp' },
  { label: 'Years of Healthcare Trust', value: '10+', iconName: 'Award' },
  { label: 'Emergency & Critical Care', value: '24/7', iconName: 'Bed' }
];
