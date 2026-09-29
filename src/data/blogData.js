// Comprehensive Health Updates, Doctor Tips & Wellness Blog Data for Jeevandaan Hospital Bhopal

export const BLOG_CATEGORIES = [
  { id: 'all', label: 'All Updates', icon: 'Sparkles' },
  { id: 'doctor-tips', label: 'Doctor Health Tips', icon: 'Stethoscope' },
  { id: 'awareness', label: 'Health Awareness', icon: 'ShieldAlert' },
  { id: 'wellness', label: 'Wellness & Nutrition', icon: 'HeartPulse' },
  { id: 'first-aid', label: 'Emergency & First Aid', icon: 'Ambulance' }
];

export const SEASONAL_ALERT = {
  tag: 'BHOPAL HEALTH ADVISORY',
  title: 'Seasonal Viral Fever & Dengue Prevention Advisory',
  date: 'September 2026',
  message: 'With recent seasonal shifts in Bhopal, cases of high-grade fever, dengue, and viral flu are on the rise. Jeevandaan Hospital has operationalized a dedicated 24x7 Fever Triage Desk, rapid NS1 antigen testing, and round-the-clock platelet blood bank access.',
  emergencyContact: '9098852357',
  actionText: 'Book 24/7 Blood Test / Fever Panel'
};

export const DOCTOR_QUICK_TIPS = [
  {
    id: 'tip-1',
    doctorId: 'doc-8',
    doctorName: 'Dr. S. K. Mishra',
    specialty: 'Senior Consultant Cardiologist',
    doctorImage: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
    title: 'Cut Dietary Sodium to Protect Your Arteries',
    tip: 'Limiting salt intake to less than 5 grams per day reduces systolic blood pressure by up to 8 mmHg. Replace table salt with lemon juice, roasted cumin, and natural herbs for flavor.',
    tag: 'Heart Care',
    bgColor: 'rgba(185, 28, 28, 0.08)',
    borderColor: 'rgba(185, 28, 28, 0.25)'
  },
  {
    id: 'tip-2',
    doctorId: 'doc-6',
    doctorName: 'Dr. Priya Sharma',
    specialty: 'Senior Gynecologist & Obstetrician',
    doctorImage: 'https://images.unsplash.com/photo-1594824813566-78a1ed6448a3?auto=format&fit=crop&w=400&q=80',
    title: 'Hydration & Iron Rich Diet in Pregnancy',
    tip: 'Expectant mothers should aim for 2.5 to 3 liters of fluids daily. Pair plant-based iron foods (spinach, jaggery, beetroot) with vitamin C (amla, oranges) for maximum absorption.',
    tag: 'Maternal Care',
    bgColor: 'rgba(139, 92, 246, 0.08)',
    borderColor: 'rgba(139, 92, 246, 0.25)'
  },
  {
    id: 'tip-3',
    doctorId: 'doc-2',
    doctorName: 'Dr. Tejinder Singh Ajmani',
    specialty: 'Director & Chief Consultant - Anesthesiology & Critical Care',
    doctorImage: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
    title: 'Remember F.A.S.T for Sudden Brain Stroke',
    tip: 'Face drooping, Arm weakness, Speech difficulty, Time to call 9098852357. Reaching Jeevandaan Emergency within the 4.5-hour golden window can reverse paralysis with clot-busting therapy.',
    tag: 'Emergency Lifesaving',
    bgColor: 'rgba(220, 38, 38, 0.08)',
    borderColor: 'rgba(220, 38, 38, 0.3)'
  },
  {
    id: 'tip-4',
    doctorId: 'doc-7',
    doctorName: 'Dr. Rajesh Gupta',
    specialty: 'Consultant Orthopedic Surgeon',
    doctorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    title: '30-Minute Daily Brisk Walk for Knee Cartilage',
    tip: 'Cartilage has no direct blood supply; it absorbs nutrients through synovial fluid movement during gentle exercise. Daily walking lubricates knees and prevents premature osteoarthritis.',
    tag: 'Joint Health',
    bgColor: 'rgba(234, 88, 12, 0.08)',
    borderColor: 'rgba(234, 88, 12, 0.25)'
  },
  {
    id: 'tip-5',
    doctorId: 'doc-4',
    doctorName: 'Dr. Pushpraj Singh',
    specialty: 'Senior Dental & Maxillofacial Surgeon',
    doctorImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80',
    title: 'Nightly Brushing Prevents Bacterial Biofilm',
    tip: 'Saliva production decreases by 70% during sleep, creating ideal conditions for oral bacteria to erode enamel and cause chronic gum inflammation linked to cardiovascular disease.',
    tag: 'Dental Wellness',
    bgColor: 'rgba(16, 185, 129, 0.08)',
    borderColor: 'rgba(16, 185, 129, 0.25)'
  },
  {
    id: 'tip-6',
    doctorId: 'doc-1',
    doctorName: 'Dr. Manohar Malviye',
    specialty: 'Senior Consultant - Plastic & Reconstructive Surgery',
    doctorImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    title: 'Optimal Wound Healing: Protein & Sun Protection',
    tip: 'After surgical recovery or burns, new collagen synthesis requires adequate dietary protein and zinc. Keep healing scars strictly shielded from direct UV rays for 6 months to prevent hyperpigmentation.',
    tag: 'Surgical Recovery',
    bgColor: 'rgba(6, 182, 212, 0.08)',
    borderColor: 'rgba(6, 182, 212, 0.25)'
  }
];

export const BLOG_ARTICLES = [
  {
    id: 'cardiac-warning-signs',
    title: 'Silent Heart Attacks & Hidden Cardiovascular Signs: A Cardiologist’s Guide',
    subtitle: 'Why atypical chest discomfort, breathlessness, and unexplained fatigue should never be ignored.',
    category: 'Doctor Health Tips',
    categoryKey: 'doctor-tips',
    featured: true,
    publishDate: '18 Sep 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    author: {
      id: 'doc-8',
      name: 'Dr. S. K. Mishra',
      title: 'Senior Consultant Cardiologist',
      qualifications: 'MBBS, MD (Medicine), DM (Cardiology)',
      dept: 'Cardiology & Heart Care',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80'
    },
    summary: 'Heart attacks do not always present with dramatic movie-style crushing chest pain. Learn the subtle, progressive signs that signal reduced myocardial blood flow and when to rush to emergency triage.',
    content: [
      {
        heading: 'The Misconception of Movie-Style Heart Attacks',
        body: 'Many patients arrive at Jeevandaan Hospital emergency with advanced coronary artery occlusion having delayed treatment for days because their symptoms "did not hurt like a real heart attack". In reality, especially among women, elderly individuals, and diabetics, cardiac ischemia frequently manifests as mild tightness in the upper stomach, back pain between the shoulder blades, unexplained jaw ache, or cold sweating during routine stairs climbing.'
      },
      {
        heading: 'Key Early Warning Signals You Must Know',
        bullets: [
          'Pressure or squeezing sensation in the center of the chest that lasts more than a few minutes or subsides and returns.',
          'Radiation of discomfort into the left shoulder, left arm, neck, throat, or jaw line.',
          'Sudden shortness of breath with minimal or no exertion, occasionally accompanied by lightheadedness or nausea.',
          'Unexplained extreme fatigue or weakness that does not improve after resting.'
        ]
      },
      {
        heading: 'The Golden 60 Minutes (Door-to-Balloon Time)',
        body: 'Coronary myocardium begins irreversible necrosis within 30 to 90 minutes of total vessel occlusion. At Jeevandaan Hospital Bhopal, our 24x7 Cath Lab and emergency trauma protocols ensure door-to-balloon angioplasty intervention in benchmark time. If you suspect an acute event, never drive yourself—call our 24x7 Emergency Helpline immediately at 9098852357.'
      },
      {
        heading: 'Actionable Preventive Habits',
        checklist: [
          'Monitor Blood Pressure: Maintain under 120/80 mmHg; check at least once every 3 months.',
          'Annual Lipid Profile: Check LDL, HDL, and Triglycerides after age 30.',
          'Cut Down Refined Oils & Trans Fats: Prefer cold-pressed mustard or olive oil in moderation.',
          'Get 150 Minutes of Moderate Aerobic Exercise: Brisk walk, cycling, or swimming weekly.'
        ]
      }
    ],
    mythsVsFacts: [
      { myth: 'Only older people over 60 suffer heart attacks.', fact: 'In urban India, nearly 25% of all acute myocardial infarctions occur in individuals under 45 years due to chronic stress, smoking, and sedentary lifestyles.' },
      { myth: 'If aspirin resolves the discomfort, it was just acid indigestion.', fact: 'Aspirin actually thins blood and reduces coronary clot resistance—if it alleviates pain, immediate cardiological evaluation is critical.' }
    ],
    tags: ['Cardiology', 'Emergency Care', 'Preventive Health', 'Bhopal Hospital'],
    likes: 342,
    shares: 89
  },
  {
    id: 'dengue-viral-fever-management',
    title: 'Monsoon & Post-Monsoon Fever Protocol: Dengue, Malaria & Hydration Truths',
    subtitle: 'Crucial steps to monitor platelet count, prevent dehydration, and avoid dangerous self-medication.',
    category: 'Health Awareness',
    categoryKey: 'awareness',
    featured: false,
    publishDate: '15 Sep 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    author: {
      id: 'doc-2',
      name: 'Dr. Tejinder Singh Ajmani',
      title: 'Director - Emergency & Critical Care',
      qualifications: 'MBBS, MD (Anesthesiology & Critical Care)',
      dept: '24x7 Emergency & Trauma Care',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80'
    },
    summary: 'Vector-borne infections require precise fluid management and close platelet surveillance. Discover why self-prescribing painkillers like ibuprofen can be hazardous during fever episodes.',
    content: [
      {
        heading: 'The Critical Warning Against NSAID Painkillers',
        body: 'During seasonal outbreaks in Bhopal, one of the most hazardous habits seen is taking over-the-counter painkillers like Ibuprofen, Diclofenac, or Combiflam for fever and body ache. In dengue fever, these NSAID medications severely inhibit platelet aggregation and dramatically elevate the risk of gastrointestinal internal hemorrhage. Only Paracetamol under medical advice should be used for fever control.'
      },
      {
        heading: 'Red Flag Symptoms of Severe Dengue',
        bullets: [
          'Persistent vomiting, inability to retain oral fluids, or severe abdominal pain.',
          'Bleeding from gums, nose, or tiny red pinpoint spots (petechiae) under the skin.',
          'Extreme lethargy, restlessness, confusion, or cold clammy extremities.',
          'Rapid drop in blood pressure or sudden fall in urine output over 6 hours.'
        ]
      },
      {
        heading: 'The Crucial Role of Timely Lab Investigations',
        body: 'At Jeevandaan Hospital’s 24-hour pathology laboratory, we provide instant Dengue NS1 Antigen, Dengue IgM/IgG antibodies, and Complete Blood Count (CBC) with automated platelet count reporting within 60 minutes. Tracking hematocrit alongside platelets is essential to detect early plasma leakage before shock develops.'
      }
    ],
    mythsVsFacts: [
      { myth: 'Papaya leaf juice alone cures dengue and restores platelet counts safely.', fact: 'While papaya extracts have mild supportive properties, severe dengue is fundamentally a vascular permeability crisis requiring intravenous isotonic crystalloid fluid resuscitation in a monitored hospital setup.' },
      { myth: 'A single normal platelet count on day 2 of fever means you are safe.', fact: 'Dengue platelets typically drop sharply between Day 4 and Day 7 (the critical defervescence phase when fever starts subsiding).' }
    ],
    tags: ['Dengue Awareness', 'Pathology Lab', 'Bhopal Health', 'Fever Protocol'],
    likes: 278,
    shares: 114
  },
  {
    id: 'desk-workers-ergonomics-spine',
    title: 'Combating Desk Posture Syndrome: Spinal Health, Cervical Relief & Sciatica Prevention',
    subtitle: 'Orthopedic surgeon’s blueprint for professionals spending 8+ hours on computers and mobile devices.',
    category: 'Wellness & Nutrition',
    categoryKey: 'wellness',
    featured: false,
    publishDate: '12 Sep 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    author: {
      id: 'doc-7',
      name: 'Dr. Rajesh Gupta',
      title: 'Consultant Orthopedic & Joint Replacement Surgeon',
      qualifications: 'MBBS, MS (Orthopedics), Fellowship (UK)',
      dept: 'Orthopedics & Joint Replacement',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80'
    },
    summary: 'Prolonged sitting places up to 200% more compressive load on lumbar intervertebral discs than standing. Learn simple postural realignments, ergonomic desk setup, and core-strengthening drills.',
    content: [
      {
        heading: 'The Bio-Mechanics of "Tech-Neck" and Slouching',
        body: 'The human adult head weighs approximately 5 kg in an upright neutral alignment. When bent forward at a 45-degree angle toward a laptop or phone screen, the effective gravitational load placed on cervical vertebrae spikes to nearly 22 kg. Over years, this causes accelerated cervical disc degeneration, radiating numbness down the arms, and persistent upper back spasms.'
      },
      {
        heading: 'The 20-20-20 Movement Rule',
        bullets: [
          'Every 30 minutes, stand up for at least 60 seconds to decompress the lumbar L4-L5 disc space.',
          'Position your computer screen so the top third of the monitor is directly level with your eyes.',
          'Keep elbows and knees at 90-degree angles with feet planted flat on the floor or on a firm footrest.',
          'Perform chin tucks and shoulder blade retractions 5 times each morning and evening.'
        ]
      },
      {
        heading: 'When to Seek Specialist Consultation',
        body: 'If you experience sharp tingling sensation radiating down the buttock into the calf or foot (sciatica), muscle weakness in the leg, or loss of bladder/bowel sensations, schedule an evaluation immediately at our Orthopedic & Spine Clinic.'
      }
    ],
    mythsVsFacts: [
      { myth: 'Bed rest is the best treatment for acute back pain.', fact: 'Prolonged bed rest past 48 hours weakens spinal stabilizer muscles and delays recovery. Controlled active movement, physiotherapy, and core activation promote faster tissue healing.' },
      { myth: 'Cracking your neck or knuckles causes arthritis.', fact: 'The popping sound is merely nitrogen bubbles bursting in the synovial fluid. However, aggressive self-manipulation of the neck can injure cervical ligaments.' }
    ],
    tags: ['Orthopedics', 'Spine Health', 'Ergonomics', 'Physiotherapy'],
    likes: 195,
    shares: 62
  },
  {
    id: 'first-aid-golden-hour-trauma',
    title: 'Emergency First Aid: What to Do in Road Accidents, Burns, & Choking Before Ambulance Arrives',
    subtitle: 'Life-saving protocols from Jeevandaan 24x7 Emergency & Trauma Center specialists.',
    category: 'Emergency & First Aid',
    categoryKey: 'first-aid',
    featured: false,
    publishDate: '08 Sep 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    author: {
      id: 'doc-2',
      name: 'Dr. Tejinder Singh Ajmani',
      title: 'Director & Chief Consultant - Critical Care & Trauma',
      qualifications: 'MBBS, MD (Anesthesiology & Critical Care)',
      dept: '24x7 Emergency & Trauma Care',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80'
    },
    summary: 'The initial 10 minutes following an accident or medical emergency determine patient survival. Learn evidence-based first aid dos and don’ts verified by emergency physicians.',
    content: [
      {
        heading: 'Accident Triage: Never Twist the Cervical Spine',
        body: 'When tending to a road accident victim, the golden rule is "Protect the Neck and Airway". Never jerk or twist the neck when extracting a victim from a vehicle, as unseen cervical spine fractures can cause permanent spinal cord transection and quadriplegia. Keep the head and torso strictly in a neutral straight line.'
      },
      {
        heading: 'Burn First Aid: Cool Water, Never Toothpaste or Ice',
        body: 'For thermal burns, immediately irrigate the affected zone under clean, running room-temperature tap water for 15 to 20 minutes to halt deeper dermal heat damage. Never apply ice (which causes vascular vasospasm and frostbite necrosis), butter, or toothpaste, which harbor bacteria and aggravate wound infections.'
      },
      {
        heading: 'Choking Protocol (Heimlich Maneuver)',
        bullets: [
          'Confirm the person cannot cough, breathe, or speak and is clutching their throat.',
          'Stand behind the person, wrap your arms around their waist, and lean them slightly forward.',
          'Make a fist with one hand and place the thumb side slightly above the navel.',
          'Grasp your fist with your other hand and press hard into the abdomen with a quick, upward thrust.'
        ]
      }
    ],
    mythsVsFacts: [
      { myth: 'Put a metal spoon or key into the mouth of someone having a seizure/epileptic fit.', fact: 'Never force any object into a seizing patient’s mouth! It can break teeth and cause airway asphyxiation. Instead, turn them onto their left side, cushion their head, and clear sharp surrounding objects.' },
      { myth: 'Apply a tight tourniquet string for all limb cuts.', fact: 'Improper tight tourniquets cut off total limb circulation and can lead to limb amputation. Direct firm pressure with a clean sterile cloth on the wound stops 95% of bleedings.' }
    ],
    tags: ['First Aid', 'Trauma Emergency', 'Ambulance', 'Bhopal Emergency'],
    likes: 412,
    shares: 178
  },
  {
    id: 'prenatal-maternal-health-guide',
    title: 'Nurturing Mother and Baby: Trimester Care, Screening Tests & Painless Labor Choices',
    subtitle: 'From essential ultrasound scans to gestational diabetes management, guidance for new parents.',
    category: 'Doctor Health Tips',
    categoryKey: 'doctor-tips',
    featured: false,
    publishDate: '04 Sep 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    author: {
      id: 'doc-6',
      name: 'Dr. Priya Sharma',
      title: 'Senior Gynecologist & Obstetrician',
      qualifications: 'MBBS, MS (OB-GYN), DGO',
      dept: 'Gynaecology & Obstetrics',
      image: 'https://images.unsplash.com/photo-1594824813566-78a1ed6448a3?auto=format&fit=crop&w=400&q=80'
    },
    summary: 'A comprehensive roadmap for mothers from conception through safe delivery. Learn about essential prenatal ultrasound milestones, nutrition guidelines, and modern painless labor options at Jeevandaan.',
    content: [
      {
        heading: 'Essential Diagnostic Milestones',
        bullets: [
          'Weeks 6 - 8: Viability & Dating Scan to confirm heartbeat and intrauterine gestational sac.',
          'Weeks 11 - 13: NT-NB Scan & Double Marker blood test for chromosomal health screening.',
          'Weeks 18 - 20: Comprehensive Target Anomaly Scan (Level II USG) for anatomical structural development.',
          'Weeks 24 - 28: Oral Glucose Tolerance Test (OGTT) for gestational diabetes screening.'
        ]
      },
      {
        heading: 'Understanding Painless Normal Delivery (Epidural Analgesia)',
        body: 'Modern obstetrics allows mothers to experience normal vaginal delivery without agonizing pain. Epidural analgesia, administered by our senior anesthesiologists, numbs the pelvic sensation while allowing the mother full conscious control to push when needed. Our maternity suites are supported by 24x7 Level-III NICU facilities for newborn safety.'
      }
    ],
    mythsVsFacts: [
      { myth: 'Pregnant women must "eat for two" and double their daily caloric intake.', fact: 'Quality matters far more than quantity. In the first trimester, zero extra calories are needed; only 300 to 450 extra nutrient-dense calories per day are required in the second and third trimesters.' },
      { myth: 'Taking saffron (kesar) milk guarantees a fair complexioned baby.', fact: 'Skin complexion is 100% determined by genetic inheritance, not food color. Saffron in moderate amounts does, however, provide pleasant aroma and mild antioxidant benefits.' }
    ],
    tags: ['Mother & Child', 'Gynecology', 'Pregnancy Care', 'NICU Bhopal'],
    likes: 310,
    shares: 95
  },
  {
    id: 'ayushman-bharat-cashless-guide',
    title: 'How to Avail 100% Cashless Treatment under Ayushman Bharat & MP Govt Empanelment at Jeevandaan',
    subtitle: 'Step-by-step guide for government employees, pension holders, and PMJAY cardholders in Madhya Pradesh.',
    category: 'Health Awareness',
    categoryKey: 'awareness',
    featured: false,
    publishDate: '01 Sep 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80',
    author: {
      id: 'doc-1',
      name: 'Dr. Manohar Malviye',
      title: 'Senior Consultant & Clinical Coordinator',
      qualifications: 'MBBS, MS (Surgery), MCh',
      dept: 'General & Laparoscopic Surgery',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80'
    },
    summary: 'Jeevandaan Hospital is a Deemed Empanelled Hospital for all MP Government departments and Ayushman Bharat PMJAY. Understand the admission documents, pre-authorization, and cashless desk support.',
    content: [
      {
        heading: 'Deemed Empanelment for All MP State Government Employees',
        body: 'Under the MP Civil Services (Medical Attendance) Rules 2022, all serving and retired employees across MP Police, PWD, Health, Education, Revenue, and allied boards can receive cashless indoor hospital care at Jeevandaan Multi-Speciality Hospital Lambakheda, Bhopal.'
      },
      {
        heading: 'Checklist of Required Documents at the TPA Desk',
        checklist: [
          'Ayushman Golden Card (PMJAY) or MP Govt Employee Identity Card.',
          'Patient Aadhaar Card & 2 Passport-sized photographs.',
          'Doctor Consultation Prescription and OPD investigation reports.',
          'Corporate TPA Health Card (for Star Health, Niva Bupa, Care, ICICI Lombard, etc.).'
        ]
      },
      {
        heading: 'Dedicated 24x7 Cashless Helpdesk Assistance',
        body: 'Our in-house TPA / Cashless Care Coordination team assists family members from pre-authorization submission to final claim settlement within 2 hours, ensuring you can focus on patient recovery without administrative stress.'
      }
    ],
    mythsVsFacts: [
      { myth: 'Emergency admissions cannot use Ayushman Bharat until paperwork is pre-approved.', fact: 'Emergency life-saving care is initiated immediately at Jeevandaan. Pre-authorization is logged retroactively within 24 hours of emergency admission.' },
      { myth: 'Ayushman Bharat only covers government hospitals.', fact: 'Jeevandaan Hospital is an empanelled multispeciality private hospital providing full surgical, ICU, and inpatient care under Ayushman schemes.' }
    ],
    tags: ['Ayushman Bharat', 'MP Govt Empanelment', 'Cashless Hospital', 'Bhopal Healthcare'],
    likes: 388,
    shares: 210
  }
];
