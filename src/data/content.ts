export const siteContent = {
  company: {
    name: 'Body First UK',
    tagline: 'Your Health, Our Priority',
    email: 'info@bodyfirst.uk',
    phone: '+442038181238',
    whatsapp: '+442038181238',
    address: {
      street: '38 High Street,',
      city: 'Hampton Hill,',
      place: 'Hampton, London, TW12 1PD',
      country: 'United Kingdom'
    },
    hours: {
      weekday: 'Monday–Friday: 9am–8pm',
      saturday: 'Saturday: Closed',
      sunday: 'Sunday: 11am–8pm'
    },
    social: {
      facebook: 'https://www.facebook.com/share/17pz212NhW/?mibextid=wwXIfr',
      instagram: 'https://www.instagram.com/bodyfirstuk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      twitter: 'https://twitter.com/bodyfirstuk'
    }
  },

  hero: {
    title: 'Expert Physiotherapy & Wellness Care',
    subtitle: 'Professional treatment for your health and recovery in the heart of London',
    description: 'At Body First UK, we combine expert physiotherapy with cutting-edge wellness treatments to help you move better, feel stronger, and live pain-free.',
    ctaPrimary: 'Book Now',
    ctaSecondary: 'Contact Us'
  },

  services: [
    {
      id: 'physiotherapy',
      name: 'Physiotherapy',
      shortDesc: 'Expert assessment and treatment for musculoskeletal conditions, injuries, and rehabilitation.',
      description: 'Our chartered physiotherapists provide comprehensive assessments, hands-on treatment, and tailored rehabilitation programmes to help you recover from injuries, manage chronic conditions, and improve your overall physical function.',
      icon: '🏥'
    },
    {
      id: 'sports-massage',
      name: 'Sports Massage',
      shortDesc: 'Deep tissue massage to relieve muscle tension, improve flexibility, and enhance recovery.',
      description: 'Our sports massage therapy combines various techniques to reduce muscle tension, improve circulation, and promote faster recovery. Perfect for athletes and active individuals, or anyone experiencing muscle tightness and pain.',
      icon: '💆'
    },
    {
      id: 'dry-needling',
      name: 'Dry Needling',
      shortDesc: 'Effective treatment for muscle pain and trigger points using fine needles.',
      description: 'Dry needling targets myofascial trigger points to release muscle tension, reduce pain, and restore normal muscle function. This evidence-based technique is particularly effective for chronic pain conditions.',
      icon: '💉'
    },
    {
      id: 'gait-analysis',
      name: 'Gait Analysis / Foot Scan',
      shortDesc: 'Advanced biomechanical assessment to optimise your movement patterns.',
      description: 'Using state-of-the-art technology, we analyse your walking and running patterns to identify biomechanical issues. This helps us prescribe the right treatment, exercises, or orthotics for optimal function.',
      icon: '👣'
    },
    {
      id: 'shockwave-therapy',
      name: 'Shockwave Therapy',
      shortDesc: 'Non-invasive treatment using acoustic waves to accelerate healing.',
      description: 'Shockwave therapy uses high-energy acoustic waves to stimulate healing in chronic soft tissue injuries. It\'s particularly effective for conditions like plantar fasciitis, tennis elbow, and calcific tendonitis.',
      icon: '⚡'
    },
    {
      id: 'cupping-therapy',
      name: 'Cupping Therapy',
      shortDesc: 'Ancient therapy technique to improve blood flow and reduce muscle tension.',
      description: 'Cupping therapy uses suction cups to increase blood circulation, release fascial restrictions, and reduce muscle tension. This complementary therapy can enhance your recovery and overall wellbeing.',
      icon: '🫖'
    },
    {
      id: 'lymphatic-drainage',
      name: 'Lymphatic Drainage',
      shortDesc: 'Gentle massage technique to reduce swelling and boost your immune system.',
      description: 'Manual lymphatic drainage is a specialized massage technique that stimulates the lymphatic system, helping to reduce swelling, boost immunity, and promote detoxification.',
      icon: '🌊'
    },
    {
      id: 'compression-therapy',
      name: 'Compression Therapy',
      shortDesc: 'Advanced compression technology for recovery and circulation.',
      description: 'Using dynamic compression devices, we help enhance recovery, reduce muscle soreness, and improve circulation. Popular with athletes and those seeking faster recovery times.',
      icon: '🦵'
    },
    {
      id: 'cryotherapy',
      name: 'Cryotherapy',
      shortDesc: 'Cold therapy to reduce inflammation and accelerate recovery.',
      description: 'Localised cryotherapy uses controlled cold temperatures to reduce inflammation, manage pain, and speed up the healing process. Ideal for acute injuries and chronic inflammatory conditions.',
      icon: '❄️'
    }
  ],

  conditions: [
    {
      id: 'back-pain',
      area: 'Back & Spine',
      conditions: ['Lower back pain', 'Upper back pain', 'Sciatica', 'Disc problems', 'Postural issues', 'Chronic pain'],
      icon: '🦴'
    },
    {
      id: 'neck-shoulder',
      area: 'Neck & Shoulder',
      conditions: ['Neck pain', 'Whiplash', 'Frozen shoulder', 'Rotator cuff injuries', 'Shoulder impingement', 'Tension headaches'],
      icon: '💪'
    },
    {
      id: 'knee-leg',
      area: 'Knee & Leg',
      conditions: ['Knee pain', 'ACL injuries', 'Meniscus tears', 'Runner\'s knee', 'IT band syndrome', 'Shin splints'],
      icon: '🦵'
    },
    {
      id: 'hip-groin',
      area: 'Hip & Groin',
      conditions: ['Hip pain', 'Groin strain', 'Hip impingement', 'Bursitis', 'Arthritis', 'Post-surgical rehabilitation'],
      icon: '🏃'
    },
    {
      id: 'foot-ankle',
      area: 'Foot & Ankle',
      conditions: ['Plantar fasciitis', 'Achilles tendonitis', 'Ankle sprains', 'Heel pain', 'Flat feet', 'Bunions'],
      icon: '👣'
    },
    {
      id: 'elbow-wrist',
      area: 'Elbow & Wrist',
      conditions: ['Tennis elbow', 'Golfer\'s elbow', 'Carpal tunnel', 'Wrist sprains', 'Repetitive strain injury'],
      icon: '✋'
    },
    {
      id: 'sports-injuries',
      area: 'Sports Injuries',
      conditions: ['Muscle strains', 'Ligament sprains', 'Overuse injuries', 'Rehabilitation', 'Performance optimisation'],
      icon: '⚽'
    },
    {
      id: 'chronic-pain',
      area: 'Chronic Conditions',
      conditions: ['Arthritis', 'Fibromyalgia', 'Chronic pain syndromes', 'Post-surgical pain', 'Long-term injuries'],
      icon: '🩺'
    }
  ],

  prices: [
    { service: 'Initial Appointment', duration: '60 min', price: '£75' },
    { service: '30 min Physiotherapy', duration: '30 min', price: '£65' },
    { service: '60 min Physiotherapy', duration: '60 min', price: '£70' },
    { service: '30 min Sports Massage', duration: '30 min', price: '£65' },
    { service: '60 min Sports Massage', duration: '60 min', price: '£70' },
    { service: 'Lymphatic Drainage', duration: '60 min', price: '£80' },
    { service: 'Shockwave Therapy', duration: '1 session', price: '£80' },
    { service: 'Gait Analysis', duration: '45 min', price: '£70' }
  ],

insurance: {
  accepted: [
    {
      name: 'AXA',
      logo: '/images/insurance/axa.jpg',
    },
    {
      name: 'AVIVA',
      logo: '/images/insurance/aviva.jpg',
    },
    {
      name: 'BUPA',
      logo: '/images/insurance/bupa.png',
    },
    {
      name: 'Simply Health',
      logo: '/images/insurance/simply.jpg',
    },
    {
      name: 'Vitality',
      logo: '/images/insurance/vitality.jpg',
    },
  ],
  note: 'We work with all major private health insurance providers. Many of our services are covered under standard physiotherapy benefits. Please check with your insurer for specific coverage details and pre-authorisation requirements.',
},


 team: [
  {
    name: "Praveena Thiruvasager",
    role: "Senior MSK Physiotherapist • Sports Exercise Specialist • Shock Wave Therapist",
    qualifications: "MSc Advanced Physiotherapy",
    description:
      "Senior physiotherapist with extensive experience in sports and musculoskeletal rehabilitation. Focuses on evidence-based care, complex rehab, and advanced modalities including shockwave therapy.",
    image: "/images/Aboutus/praveena.png",
  },
  {
    name: "Ivaylo Todorov",
    role: "Senior Physiotherapist",
    qualifications: "CSP • Chartered Senior Physiotherapist • Chiropractic Training",
    description:
      "Highly experienced physiotherapist with a strong NHS background. Interests include neuro rehabilitation, respiratory care, and spine-related management using a comprehensive patient-centred approach.",
    image: "/images/Aboutus/IvayloTodorov.jpeg",
  },
  {
    name: "Rachael Watkeys",
    role: "Myotherapist • Sports Massage Therapist",
    qualifications:
      "BAppSci (Human Movement) • AdDip (Myotherapy) • PGCE • ITEC",
    description:
      "Experienced myotherapist with a strong foundation in human movement and soft tissue therapy. Specialises in myofascial release, trigger point techniques, dry needling, and sports-focused recovery.",
    image: "/images/Aboutus/Rachael.jpeg",
  },
   {
  name: "Alisha Abdala",
  role: "Sports Massage Therapist",
  qualifications: "BSc (Hons) Sport Health and Exercise",
  description:
    "Ex British gymnast and qualified sports massage therapist with a special interest in the thoracic and lumbar spine. Also certified in cupping therapy, lymphatic drainage, and sports injury rehabilitation. Focuses on releasing tension and correcting movement imbalances caused by repetitive activity or injury.",
  image: "/images/Aboutus/neww.jpeg",
},
{
  name: "Mihai Apostol",
  role: "Sports Massage Therapist",
  qualifications: "BSc (Hons) Osteopathic Medicine (to complete 2026)",
  description:
    "Experienced sports massage therapist with over a decade of work in improving human movement. Currently studying osteopathy at the British School of Osteopathic Medicine, with a strong interest in biomechanics, posture, and restoring optimal movement patterns. Supports patients with postural strain, asymmetrical patterns, and sedentary lifestyle-related issues.",
  image: "/images/Aboutus/newone.jpeg",
},

],

  testimonials: [
    {
      name: 'David M.',
      rating: 5,
      text: 'After months of back pain, the team at Body First UK finally helped me find relief. Their professional approach and expertise made all the difference.',
      service: 'Physiotherapy'
    },
    {
      name: 'Lisa K.',
      rating: 5,
      text: 'Excellent sports massage service! The therapist really knew what they were doing and I felt so much better afterwards. Highly recommend!',
      service: 'Sports Massage'
    },
    {
      name: 'Robert S.',
      rating: 5,
      text: 'I was sceptical about dry needling but it really worked for my shoulder pain. The staff explained everything clearly and made me feel comfortable.',
      service: 'Dry Needling'
    },
    {
      name: 'Amanda P.',
      rating: 5,
      text: 'The gait analysis was incredibly detailed and helped identify issues with my running form. The custom orthotics have made a huge difference!',
      service: 'Gait Analysis'
    }
  ],

  about: {
    mission: 'At Body First UK, we believe that everyone deserves to move freely and live without pain. Our mission is to provide exceptional physiotherapy and wellness services that empower our patients to achieve their health and fitness goals.',
    philosophy: 'We take a holistic, evidence-based approach to treatment, combining the latest research with hands-on expertise. Every patient receives a comprehensive assessment and a personalised treatment plan tailored to their specific needs and goals.',
    values: [
      'Excellence in clinical practice',
      'Patient-centred care',
      'Continuous professional development',
      'Evidence-based treatment',
      'Compassionate service'
    ]
  },

  accreditations: [
    { name: 'CSP', fullName: 'Chartered Society of Physiotherapy', logo: '/images/accreditations/csp.png' },
    { name: 'HCPC', fullName: 'Health and Care Professions Council', logo: '/images/accreditations/hcpc.png' },
    { name: 'Physio First', fullName: 'Recognised Physiotherapy Practice', logo: '/images/accreditations/physio-first.png' }
  ]
};
