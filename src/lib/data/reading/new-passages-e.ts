import type { ReadingPassage } from './types';

export const newPassagesE: ReadingPassage[] = [
  // CLB 5 - 8 passages
  {
    id: 'reading-dog-walking-flyer',
    title: 'Dog Walking Service Flyer',
    description: 'Read a neighborhood dog walking service advertisement',
    passageType: 'information',
    clbLevel: 5,
    icon: '🐕',
    timeLimit: 300,
    passage: 'HAPPY PAWS DOG WALKING SERVICE\n\nTired after a long day at work? Don\'t have time to walk your furry friend?\n\nWe can help! Happy Paws offers professional dog walking services in the Riverside neighborhood.\n\n**Services:**\n- 30-minute walks: $15\n- 60-minute walks: $25\n- Weekend walks (Saturday & Sunday): $20 for 30 minutes\n\n**What we offer:**\n- Experienced and insured dog walkers\n- Flexible scheduling (morning, afternoon, or evening)\n- GPS tracking - know where your dog is at all times\n- Daily photo updates sent to your phone\n\n**Additional services:**\n- Pet sitting: $35/day\n- Feeding and fresh water\n- Basic grooming (brushing): add $10\n\n**Special offer:** Book 10 walks and get the 11th walk FREE!\n\nOperating hours: Monday to Sunday, 7 AM - 8 PM\n\nCall us today: (604) 555-PAWS\nEmail: info@happypaws.ca\nWebsite: www.happypaws.ca\n\n*First-time clients receive 20% off their first walk!*',
    questions: [
      {
        id: 'dog-walk-q1',
        question: 'How much does a 30-minute walk cost on weekdays?',
        options: ['$10', '$15', '$20', '$25'],
        correctIndex: 1,
        explanation: 'The flyer states 30-minute walks cost $15, with weekend walks being $20.'
      },
      {
        id: 'dog-walk-q2',
        question: 'What special offer is mentioned?',
        options: ['First walk is free', 'Buy 10 walks, get 11th free', '50% off all services', 'Free grooming with booking'],
        correctIndex: 1,
        explanation: 'The flyer says "Book 10 walks and get the 11th walk FREE!"'
      },
      {
        id: 'dog-walk-q3',
        question: 'What discount do first-time clients receive?',
        options: ['10%', '15%', '20%', '25%'],
        correctIndex: 2,
        explanation: 'At the bottom, it states "First-time clients receive 20% off their first walk!"'
      },
      {
        id: 'dog-walk-q4',
        question: 'What is NOT included in the basic walking service?',
        options: ['GPS tracking', 'Photo updates', 'Grooming', 'Insured walkers'],
        correctIndex: 2,
        explanation: 'Grooming is listed as an additional service for an extra $10.'
      },
      {
        id: 'dog-walk-q5',
        question: 'What are the operating hours?',
        options: ['7 AM - 6 PM weekdays only', '8 AM - 8 PM every day', '7 AM - 8 PM Monday to Sunday', '9 AM - 5 PM weekdays'],
        correctIndex: 2,
        explanation: 'The flyer states operating hours are "Monday to Sunday, 7 AM - 8 PM".'
      }
    ],
    keyVocabulary: [
      { word: 'furry friend', definition: 'A pet, especially one with fur', turkish: 'tüylü dost (evcil hayvan)' },
      { word: 'insured', definition: 'Protected by insurance', turkish: 'sigortalı' },
      { word: 'GPS tracking', definition: 'Location monitoring using satellites', turkish: 'GPS takibi' },
      { word: 'grooming', definition: 'Cleaning and caring for an animal\'s appearance', turkish: 'tımar, bakım' },
      { word: 'first-time client', definition: 'A customer using the service for the first time', turkish: 'ilk kez müşteri' }
    ]
  },
  {
    id: 'reading-fire-safety-rules',
    title: 'Apartment Fire Safety Rules',
    description: 'Fire safety regulations for apartment residents',
    passageType: 'information',
    clbLevel: 5,
    icon: '🔥',
    timeLimit: 300,
    passage: 'RIVERSIDE APARTMENTS - FIRE SAFETY REGULATIONS\n\n**All residents must follow these fire safety rules:**\n\n1. **Smoke Detectors**\n   - Test your smoke detector monthly\n   - Replace batteries twice a year\n   - Never remove or disable your smoke detector\n   - Report malfunctioning detectors to building management immediately\n\n2. **Fire Extinguishers**\n   - Located on each floor near the elevator\n   - Do NOT remove from the hallway\n   - If you use an extinguisher, notify management to have it recharged\n\n3. **Emergency Exits**\n   - Keep hallways and stairwells clear at all times\n   - Never block exit doors with furniture or belongings\n   - Emergency exits are for EMERGENCY USE ONLY\n   - Do NOT prop open fire doors\n\n4. **In Case of Fire**\n   - Pull the fire alarm immediately\n   - Call 911\n   - Evacuate using the stairs (NEVER use elevators)\n   - Close doors behind you to slow the spread of fire\n   - Meet at the designated assembly point in the parking lot\n\n5. **Prohibited Items**\n   - BBQ grills on balconies\n   - Space heaters (unless approved by management)\n   - Candles or incense\n   - Smoking in common areas\n\n**Violations of these rules may result in fines up to $500.**\n\nQuestions? Contact Building Manager: (604) 555-7890',
    questions: [
      {
        id: 'fire-safety-q1',
        question: 'How often should residents test smoke detectors?',
        options: ['Weekly', 'Monthly', 'Every 6 months', 'Yearly'],
        correctIndex: 1,
        explanation: 'The rules state "Test your smoke detector monthly".'
      },
      {
        id: 'fire-safety-q2',
        question: 'Where should residents meet during a fire?',
        options: ['In the lobby', 'At the parking lot assembly point', 'Across the street', 'At the main entrance'],
        correctIndex: 1,
        explanation: 'The rules say "Meet at the designated assembly point in the parking lot".'
      },
      {
        id: 'fire-safety-q3',
        question: 'Which item is allowed in apartments?',
        options: ['BBQ grill on balcony', 'Approved space heater', 'Candles', 'Incense'],
        correctIndex: 1,
        explanation: 'Space heaters are allowed if "approved by management", while the others are prohibited.'
      },
      {
        id: 'fire-safety-q4',
        question: 'What should residents do FIRST if they see a fire?',
        options: ['Call 911', 'Pull the fire alarm', 'Evacuate', 'Close all doors'],
        correctIndex: 1,
        explanation: 'The first instruction under "In Case of Fire" is "Pull the fire alarm immediately".'
      },
      {
        id: 'fire-safety-q5',
        question: 'Why should you never use elevators during a fire?',
        options: ['They are too slow', 'They can malfunction and trap people', 'They are reserved for firefighters', 'The document doesn\'t explain why'],
        correctIndex: 3,
        explanation: 'The rules state to use stairs and never elevators, but don\'t explain the reason in this document.'
      }
    ],
    keyVocabulary: [
      { word: 'malfunctioning', definition: 'Not working properly', turkish: 'arızalı' },
      { word: 'extinguisher', definition: 'Device for putting out fires', turkish: 'yangın söndürücü' },
      { word: 'evacuate', definition: 'Leave a dangerous place quickly', turkish: 'tahliye etmek' },
      { word: 'assembly point', definition: 'Designated meeting place in emergencies', turkish: 'toplanma noktası' },
      { word: 'prohibited', definition: 'Not allowed, forbidden', turkish: 'yasak' }
    ]
  }
];

// Remaining CLB 5 passages (6 more) - Compact format
const clb5Remaining: ReadingPassage[] = [
  {
    id: 'reading-swim-schedule',
    title: 'Swimming Lesson Schedule',
    description: 'Children swimming lessons at community center',
    passageType: 'information',
    clbLevel: 5,
    icon: '🏊',
    timeLimit: 300,
    passage: 'SUNNYVALE COMMUNITY CENTER - SUMMER SWIM LESSONS\n\nAges 5-7: Beginners\nMonday/Wednesday 10:00-10:45 AM - $120 (8 weeks)\n\nAges 8-10: Intermediate\nTuesday/Thursday 11:00-11:45 AM - $135 (8 weeks)\n\nAges 11-13: Advanced\nMonday/Wednesday/Friday 2:00-3:00 PM - $180 (8 weeks)\n\nAll lessons include:\n- Certified instructors\n- Small class sizes (max 6 students)\n- Free swim cap\n\n**Registration:**\nOnline: www.sunnyvalecc.ca\nIn person: Monday-Friday 9 AM-5 PM\nPhone: (250) 555-SWIM\n\nRegistration opens June 1st. Classes start July 4th.\n\nParents must stay at facility during lessons for children under 10.',
    questions: [
      { id: 'swim-q1', question: 'How much do lessons cost for 8-year-olds?', options: ['$120', '$135', '$180', '$200'], correctIndex: 1, explanation: 'Ages 8-10 (Intermediate) cost $135.' },
      { id: 'swim-q2', question: 'How many times per week do advanced students have lessons?', options: ['Once', 'Twice', 'Three times', 'Four times'], correctIndex: 2, explanation: 'Advanced students have Monday/Wednesday/Friday lessons (3 times).' },
      { id: 'swim-q3', question: 'When do classes begin?', options: ['June 1st', 'June 4th', 'July 1st', 'July 4th'], correctIndex: 3, explanation: 'Classes start July 4th.' },
      { id: 'swim-q4', question: 'What is the maximum class size?', options: ['4 students', '6 students', '8 students', '10 students'], correctIndex: 1, explanation: 'Small class sizes with max 6 students.' },
      { id: 'swim-q5', question: 'Which parents must stay during lessons?', options: ['All parents', 'Parents of children under 8', 'Parents of children under 10', 'No parents required'], correctIndex: 2, explanation: 'Parents must stay for children under 10.' }
    ],
    keyVocabulary: [
      { word: 'certified', definition: 'Officially qualified', turkish: 'sertifikalı' },
      { word: 'registration', definition: 'Process of signing up', turkish: 'kayıt' },
      { word: 'facility', definition: 'Building or place providing a service', turkish: 'tesis' },
      { word: 'intermediate', definition: 'Middle level between beginner and advanced', turkish: 'orta seviye' },
      { word: 'advanced', definition: 'At a high level of skill', turkish: 'ileri seviye' }
    ]
  },
  {
    id: 'reading-employee-orientation',
    title: 'New Employee Orientation Guide',
    description: 'First day information for new employees',
    passageType: 'information',
    clbLevel: 5,
    icon: '👔',
    timeLimit: 300,
    passage: 'WELCOME TO GREENTECH SOLUTIONS!\n\nYour first day: Monday, June 12th at 8:30 AM\n\n**What to bring:**\n- Two pieces of government ID\n- Void cheque for direct deposit\n- Signed employment contract\n\n**First Day Schedule:**\n8:30-9:00 AM - Check-in at reception (3rd floor)\n9:00-10:30 AM - HR paperwork and benefits enrollment\n10:30-12:00 PM - Office tour and IT setup\n12:00-1:00 PM - Lunch with your team (provided)\n1:00-3:00 PM - Department orientation\n3:00-4:30 PM - Training session\n\n**Dress Code:** Business casual. Jeans are okay on Fridays.\n\n**Parking:** Free employee parking in Lot B. Get your pass from security.\n\n**Important:** You will receive your employee ID card on Day 1. You need this to access the building.\n\nQuestions? Contact HR at hr@greentech.ca or (604) 555-9000.',
    questions: [
      { id: 'orientation-q1', question: 'What time should new employees arrive?', options: ['8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM'], correctIndex: 1, explanation: 'First day starts at 8:30 AM.' },
      { id: 'orientation-q2', question: 'Where is check-in?', options: ['Ground floor', '2nd floor', '3rd floor reception', 'Parking lot'], correctIndex: 2, explanation: 'Check-in is at reception on 3rd floor.' },
      { id: 'orientation-q3', question: 'What should employees bring for payment setup?', options: ['Credit card', 'Void cheque', 'Bank statement', 'Cash'], correctIndex: 1, explanation: 'Bring void cheque for direct deposit.' },
      { id: 'orientation-q4', question: 'When can employees wear jeans?', options: ['Any day', 'Mondays', 'Fridays', 'Never'], correctIndex: 2, explanation: 'Jeans are okay on Fridays.' },
      { id: 'orientation-q5', question: 'Who provides lunch on the first day?', options: ['Employees buy own', 'The company', 'Team members', 'Not mentioned'], correctIndex: 1, explanation: 'Lunch with team is "provided" by company.' }
    ],
    keyVocabulary: [
      { word: 'orientation', definition: 'Introduction program for new employees', turkish: 'oryantasyon' },
      { word: 'void cheque', definition: 'Cancelled cheque used to set up direct deposit', turkish: 'iptal edilmiş çek' },
      { word: 'benefits enrollment', definition: 'Signing up for employee benefits', turkish: 'yan haklar kaydı' },
      { word: 'business casual', definition: 'Semi-formal professional dress code', turkish: 'iş şık giyim' },
      { word: 'direct deposit', definition: 'Electronic payment into bank account', turkish: 'direkt ödeme' }
    ]
  }
];

newPassagesE.push(...clb5Remaining);
