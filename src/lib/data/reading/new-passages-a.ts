import type { ReadingPassage } from './types';

export const newPassagesA: ReadingPassage[] = [
  // ============================================================
  // CLB 6 — CORRESPONDENCE: Rent Increase Email
  // ============================================================
  {
    id: 'reading-rent-increase',
    title: 'Email from Landlord About Rent Increase',
    description: 'Read an email from a landlord about a rent increase and answer questions.',
    passageType: 'correspondence',
    clbLevel: 6,
    icon: '📧',
    timeLimit: 360,
    passage:
      'From: David Kowalski, Maplewood Property Management\nTo: All Tenants — 280 Lakeshore Drive, Burlington, ON\nSubject: Notice of Rent Increase — Effective June 1, 2026\n\nDear **Tenant**,\n\nI am writing to inform you of an upcoming change to your monthly rent. In accordance with Ontario\'s **Residential Tenancies Act**, this letter serves as your official **notice period** of 90 days before the increase takes effect.\n\nEffective June 1, 2026, your monthly rent will increase by 2.5%, which is within the provincial **guideline** set by the Ontario government for 2026. For example, if your current rent is $1,600 per month, your new rent will be $1,640 per month.\n\nThis **adjustment** is necessary due to rising costs in several areas. Property taxes in Burlington have increased by 4.1% this year. In addition, maintenance expenses — including plumbing, electrical work, and common area repairs — have risen significantly. We have also invested in upgrades to the building\'s heating system and lobby area to improve the overall living experience for all residents.\n\nYour existing **lease** terms remain unchanged in all other respects. If your lease is month-to-month, the new rate will apply automatically. If you are on a fixed-term lease, the increase will take effect at the start of your next **renewal** period.\n\nPlease note that under Ontario law, you are not required to sign a new agreement for this increase to be valid, as it falls within the allowable guideline. However, if you have any questions or concerns, I encourage you to contact our office at 905-555-0234 or email us at info@maplewoodpm.ca.\n\nWe value you as a **tenant** and hope to continue providing a comfortable and well-maintained living environment.\n\nSincerely,\nDavid Kowalski\nProperty Manager\nMaplewood Property Management',
    questions: [
      {
        id: 'reading-rent-increase-q1',
        question: 'What is the main purpose of this email?',
        options: [
          'To apologize for recent maintenance delays',
          'To notify tenants of a rent increase',
          'To announce the sale of the building',
          'To invite tenants to a community meeting',
        ],
        correctIndex: 1,
        explanation:
          'The subject line and opening paragraph clearly state this is a notice of rent increase effective June 1, 2026.',
      },
      {
        id: 'reading-rent-increase-q2',
        question: 'How much advance notice is the landlord providing before the rent increase?',
        options: [
          '30 days',
          '60 days',
          '90 days',
          '120 days',
        ],
        correctIndex: 2,
        explanation:
          'The email states: "this letter serves as your official notice period of 90 days before the increase takes effect."',
      },
      {
        id: 'reading-rent-increase-q3',
        question: 'What is one reason given for the rent increase?',
        options: [
          'The landlord is renovating all apartments individually',
          'Property taxes in Burlington have increased by 4.1%',
          'The building is being converted to luxury condominiums',
          'New government regulations require higher rents',
        ],
        correctIndex: 1,
        explanation:
          'The landlord specifically mentions that property taxes in Burlington have increased by 4.1% as one of the reasons for the rent adjustment.',
      },
      {
        id: 'reading-rent-increase-q4',
        question: 'What happens if a tenant is on a fixed-term lease?',
        options: [
          'The increase applies immediately on June 1',
          'The increase takes effect at the start of their next renewal period',
          'They are exempt from the rent increase entirely',
          'They must sign a new lease agreement within 30 days',
        ],
        correctIndex: 1,
        explanation:
          'The email explains: "If you are on a fixed-term lease, the increase will take effect at the start of your next renewal period."',
      },
      {
        id: 'reading-rent-increase-q5',
        question: 'What does the word "guideline" refer to in this email?',
        options: [
          'A suggestion from the property manager about how to save money',
          'The maximum rent increase percentage allowed by the Ontario government',
          'A list of rules that tenants must follow in the building',
          'A recommendation from a real estate agent',
        ],
        correctIndex: 1,
        explanation:
          'In the context of Ontario rental law, the "guideline" refers to the maximum allowable percentage that landlords can increase rent each year, set annually by the provincial government.',
      },
    ],
    keyVocabulary: [
      { word: 'tenant', definition: 'a person who rents and lives in a property owned by someone else', turkish: 'kirac\u0131' },
      { word: 'lease', definition: 'a legal contract between a landlord and tenant for renting a property', turkish: 'kira s\u00F6zle\u015Fmesi' },
      { word: 'notice period', definition: 'the amount of time required to inform someone before a change takes effect', turkish: 'ihbar s\u00FCresi' },
      { word: 'guideline', definition: 'an official recommendation or rule that sets limits on what is allowed', turkish: 'y\u00F6nerge' },
      { word: 'adjustment', definition: 'a small change made to something to improve or correct it', turkish: 'ayarlama / d\u00FCzeltme' },
      { word: 'renewal', definition: 'the act of extending or continuing something, such as a contract', turkish: 'yenileme' },
      { word: 'Residential Tenancies Act', definition: 'Ontario law that governs the rights and duties of landlords and tenants', turkish: 'Konut Kiral\u0131klar\u0131 Kanunu' },
    ],
  },

  // ============================================================
  // CLB 5 — CORRESPONDENCE: Parent-Teacher Conference Email
  // ============================================================
  {
    id: 'reading-parent-teacher',
    title: 'Email from School About Parent-Teacher Conference',
    description: 'Read an email from a school about a parent-teacher conference and answer questions.',
    passageType: 'correspondence',
    clbLevel: 5,
    icon: '📧',
    timeLimit: 300,
    passage:
      'From: Westdale Elementary School\nTo: Parents and Guardians\nSubject: Parent-Teacher Conference — March 12, 2026\n\nDear Parents and **Guardians**,\n\nWe are pleased to invite you to our spring Parent-Teacher **Conference**, which will take place on Thursday, March 12, 2026, at Westdale Elementary School, 150 Oak Avenue, Hamilton, ON.\n\nThe conference will run from 4:00 PM to 8:00 PM. Each meeting with your child\'s teacher will last approximately 15 minutes. During this time, the teacher will share your child\'s **academic** progress, discuss strengths and areas for improvement, and review the most recent **report card** results.\n\nWe encourage you to prepare questions about your child\'s **curriculum**, classroom behaviour, and social development. If your child is receiving any extra support, such as help with reading or math, the teacher will also provide an update on that progress.\n\nTo book your preferred time slot, please fill out the **registration** form sent home with your child or visit our school website at www.westdale-elementary.ca. Time slots are available on a first-come, first-served basis, so we recommend signing up as early as possible.\n\nIf you are unable to **attend** in person, please contact the school office at 905-555-0178 to arrange a phone or video meeting with the teacher. We want to make sure every family has the chance to discuss their child\'s learning.\n\nFree childcare will be available in the gymnasium during the conference. Light refreshments will also be provided.\n\nWe look forward to meeting with you.\n\nWarm regards,\nPrincipal Sandra Kim\nWestdale Elementary School',
    questions: [
      {
        id: 'reading-parent-teacher-q1',
        question: 'What is the purpose of this email?',
        options: [
          'To announce a school holiday',
          'To invite parents to a parent-teacher conference',
          'To report a student behaviour problem',
          'To request volunteers for a school event',
        ],
        correctIndex: 1,
        explanation:
          'The subject line and opening paragraph clearly state the email is an invitation to a spring Parent-Teacher Conference on March 12, 2026.',
      },
      {
        id: 'reading-parent-teacher-q2',
        question: 'How long is each meeting with a teacher?',
        options: [
          '10 minutes',
          '15 minutes',
          '20 minutes',
          '30 minutes',
        ],
        correctIndex: 1,
        explanation:
          'The email states: "Each meeting with your child\'s teacher will last approximately 15 minutes."',
      },
      {
        id: 'reading-parent-teacher-q3',
        question: 'What should parents do if they cannot attend in person?',
        options: [
          'Send a written letter to the teacher',
          'Wait for the next conference in the fall',
          'Contact the school office to arrange a phone or video meeting',
          'Ask another parent to attend on their behalf',
        ],
        correctIndex: 2,
        explanation:
          'The email says: "please contact the school office at 905-555-0178 to arrange a phone or video meeting with the teacher."',
      },
      {
        id: 'reading-parent-teacher-q4',
        question: 'What will be available for younger children during the conference?',
        options: [
          'Extra tutoring sessions',
          'A movie screening in the auditorium',
          'Free childcare in the gymnasium',
          'A supervised outdoor play area',
        ],
        correctIndex: 2,
        explanation:
          'The email mentions: "Free childcare will be available in the gymnasium during the conference."',
      },
      {
        id: 'reading-parent-teacher-q5',
        question: 'What does the phrase "first-come, first-served" mean in this email?',
        options: [
          'Parents who arrive early will receive free food first',
          'The most popular teachers will meet with parents first',
          'Time slots are given to those who sign up earliest',
          'Parents with more than one child get priority booking',
        ],
        correctIndex: 2,
        explanation:
          '"First-come, first-served" means that time slots will be assigned in the order that parents sign up, so those who register earlier get to choose their preferred times.',
      },
    ],
    keyVocabulary: [
      { word: 'guardian', definition: 'a person who is legally responsible for a child who is not their own', turkish: 'vasi / veli' },
      { word: 'conference', definition: 'a formal meeting for discussion, often between parents and teachers', turkish: 'toplant\u0131 / g\u00F6r\u00FC\u015Fme' },
      { word: 'academic', definition: 'related to education, learning, and schoolwork', turkish: 'akademik' },
      { word: 'report card', definition: 'a document showing a student\'s grades and teacher comments', turkish: 'karne' },
      { word: 'curriculum', definition: 'the subjects and content taught in a school or course', turkish: 'm\u00FCfredat' },
      { word: 'registration', definition: 'the process of signing up or enrolling for something', turkish: 'kay\u0131t' },
      { word: 'attend', definition: 'to be present at an event or meeting', turkish: 'kat\u0131lmak' },
    ],
  },

  // ============================================================
  // CLB 6 — INFORMATION: Canadian Banking Guide
  // ============================================================
  {
    id: 'reading-canadian-banking',
    title: 'Guide to Canadian Banking for Newcomers',
    description: 'Read a guide about Canadian banking and answer questions.',
    passageType: 'information',
    clbLevel: 6,
    icon: '📄',
    timeLimit: 360,
    passage:
      'A NEWCOMER\'S GUIDE TO BANKING IN CANADA\n\nOpening a bank account is one of the first steps you should take when you arrive in Canada. Most employers pay wages through **direct deposit**, so having a bank account is essential for receiving your pay and managing your finances.\n\nCanada has five major banks — TD, RBC, Scotiabank, BMO, and CIBC — along with many credit unions and online banks. Most newcomers choose one of the major banks because they have branches and **ATMs** across the country.\n\nThere are two main types of accounts. A **chequing account** is used for everyday spending, paying bills, and receiving your salary. A **savings account** is used to set aside money and earn a small amount of **interest** over time. Many banks offer newcomer packages that include a free chequing account for the first year, so be sure to ask about these when you visit a branch.\n\nTo open an account, you will typically need two pieces of **identification** — your passport and one other document such as a permanent resident card, study permit, or work permit. Some banks allow newcomers to open an account before arriving in Canada through their international banking programs.\n\nBanking fees are common in Canada. Most chequing accounts charge a monthly fee, which can range from $4 to $30 depending on the features included. Some accounts offer unlimited transactions, while basic accounts may limit you to 12 transactions per month. To avoid extra fees, pay attention to your account\'s **transaction** limits.\n\nBuilding a strong **credit score** is very important in Canada. Your credit score is a number between 300 and 900 that shows lenders how reliable you are with borrowing money. To start building credit, consider applying for a secured **credit card**, which requires a deposit as security. Pay your bills on time every month, and your score will gradually improve. A good credit score will help you qualify for loans, mortgages, and even some rental agreements in the future.',
    questions: [
      {
        id: 'reading-canadian-banking-q1',
        question: 'Why is opening a bank account important for newcomers?',
        options: [
          'It is required by Canadian immigration law',
          'Most employers pay wages through direct deposit',
          'Banks give newcomers free money as a welcome gift',
          'It is the only way to exchange foreign currency',
        ],
        correctIndex: 1,
        explanation:
          'The guide states: "Most employers pay wages through direct deposit, so having a bank account is essential for receiving your pay."',
      },
      {
        id: 'reading-canadian-banking-q2',
        question: 'What is the difference between a chequing account and a savings account?',
        options: [
          'A chequing account earns more interest than a savings account',
          'A savings account is only for newcomers, while a chequing account is for citizens',
          'A chequing account is for daily spending; a savings account is for setting money aside',
          'There is no difference between the two types of accounts',
        ],
        correctIndex: 2,
        explanation:
          'The guide explains that a chequing account is "used for everyday spending, paying bills, and receiving your salary," while a savings account is "used to set aside money and earn a small amount of interest."',
      },
      {
        id: 'reading-canadian-banking-q3',
        question: 'What documents does a newcomer typically need to open a bank account?',
        options: [
          'A Canadian driver\'s licence and a utility bill',
          'A passport and one other identification document',
          'A letter from their employer and a bank reference',
          'A social insurance number and a credit card',
        ],
        correctIndex: 1,
        explanation:
          'The guide states: "you will typically need two pieces of identification — your passport and one other document such as a permanent resident card, study permit, or work permit."',
      },
      {
        id: 'reading-canadian-banking-q4',
        question: 'What is a secured credit card?',
        options: [
          'A card that can only be used at certain stores',
          'A card with a very high spending limit',
          'A credit card that requires a deposit as security',
          'A card that is kept in a locked safe at the bank',
        ],
        correctIndex: 2,
        explanation:
          'The guide explains: "consider applying for a secured credit card, which requires a deposit as security." This deposit reduces the risk for the bank and helps newcomers start building credit.',
      },
      {
        id: 'reading-canadian-banking-q5',
        question: 'Why should a newcomer pay attention to transaction limits on their account?',
        options: [
          'Because exceeding the limit will close the account',
          'Because extra transactions result in additional fees',
          'Because the bank will reduce the interest rate',
          'Because they will lose their newcomer discount permanently',
        ],
        correctIndex: 1,
        explanation:
          'The guide warns: "basic accounts may limit you to 12 transactions per month. To avoid extra fees, pay attention to your account\'s transaction limits." Going over the limit means paying extra charges.',
      },
    ],
    keyVocabulary: [
      { word: 'direct deposit', definition: 'an electronic transfer of payment directly into a bank account', turkish: 'do\u011Frudan havale / otomatik \u00F6deme' },
      { word: 'chequing account', definition: 'a bank account used for everyday transactions such as paying bills', turkish: 'vadesiz hesap' },
      { word: 'savings account', definition: 'a bank account used for storing money and earning interest', turkish: 'tasarruf hesab\u0131' },
      { word: 'interest', definition: 'money earned on savings or charged on borrowed money, expressed as a percentage', turkish: 'faiz' },
      { word: 'identification', definition: 'official documents that prove who you are, such as a passport or ID card', turkish: 'kimlik belgesi' },
      { word: 'credit score', definition: 'a number that represents how trustworthy a person is with borrowing and repaying money', turkish: 'kredi notu / kredi puan\u0131' },
      { word: 'transaction', definition: 'a single financial action such as a purchase, withdrawal, or transfer', turkish: 'i\u015Flem' },
      { word: 'credit card', definition: 'a card that allows you to borrow money from a bank to make purchases', turkish: 'kredi kart\u0131' },
    ],
  },

  // ============================================================
  // CLB 7 — INFORMATION: Workplace Safety Rules Memo
  // ============================================================
  {
    id: 'reading-workplace-safety',
    title: 'Workplace Safety Rules Memo',
    description: 'Read a workplace memo about safety rules and answer questions.',
    passageType: 'information',
    clbLevel: 7,
    icon: '📄',
    timeLimit: 360,
    passage:
      'INTERNAL MEMO\n\nTo: All Warehouse and Production Staff\nFrom: Jason Rivera, Health and Safety Manager\nDate: February 3, 2026\nSubject: Updated Workplace Safety **Procedures** — Mandatory Review\n\nDear Team,\n\nFollowing a recent **inspection** by the Ontario Ministry of Labour, we are updating our workplace safety procedures. All employees must read and understand the following rules. Failure to **comply** with these requirements may result in disciplinary action.\n\n1. Personal Protective Equipment (**PPE**)\nAll staff working on the warehouse floor or in the production area must wear the following at all times: a hard hat, steel-toed safety boots, high-visibility vest, and safety glasses. When operating machinery that produces excessive noise levels above 85 **decibels**, approved hearing protection must also be worn. PPE will be provided by the company at no cost. Damaged equipment must be reported and replaced immediately.\n\n2. **Hazardous** Materials Handling\nEmployees who handle chemicals, solvents, or cleaning agents must complete the updated WHMIS (Workplace Hazardous Materials Information System) training before March 15, 2026. Safety Data Sheets must be available at every workstation where hazardous materials are stored. Always wear chemical-resistant gloves and a face shield when handling these substances.\n\n3. **Incident** Reporting\nAll workplace injuries, near-misses, and unsafe conditions must be reported to your supervisor within one hour of occurrence. An incident report form must be completed the same day. Even minor injuries — such as small cuts or bruises — must be documented. This information helps us identify patterns and prevent more serious accidents.\n\n4. Emergency Exits and Fire Safety\nEmergency exits must remain clear and unobstructed at all times. Fire extinguishers must be accessible and inspected monthly. All staff must know the location of the nearest exit and the designated assembly point in the east parking lot. Fire drills will be conducted quarterly.\n\n5. Forklift and Equipment Operation\nOnly employees who hold a valid forklift **certification** may operate forklifts. Speed limits of 10 km/h must be observed inside the warehouse. Pedestrians always have the right of way. All operators must perform a pre-shift inspection checklist before using any equipment.\n\nA mandatory safety training session will be held on February 20, 2026, in the main boardroom from 9:00 AM to 12:00 PM. Attendance is required for all warehouse and production staff.\n\nYour safety is our top priority. Thank you for your cooperation.\n\nJason Rivera\nHealth and Safety Manager',
    questions: [
      {
        id: 'reading-workplace-safety-q1',
        question: 'What prompted the update to the workplace safety procedures?',
        options: [
          'A serious accident occurred in the warehouse',
          'Employees requested better safety equipment',
          'A recent inspection by the Ontario Ministry of Labour',
          'The company expanded its production area',
        ],
        correctIndex: 2,
        explanation:
          'The memo states: "Following a recent inspection by the Ontario Ministry of Labour, we are updating our workplace safety procedures."',
      },
      {
        id: 'reading-workplace-safety-q2',
        question: 'When must hearing protection be worn?',
        options: [
          'At all times on the warehouse floor',
          'Only during fire drills',
          'When operating machinery that produces noise levels above 85 decibels',
          'Whenever the safety manager is present',
        ],
        correctIndex: 2,
        explanation:
          'The memo specifies: "When operating machinery that produces excessive noise levels above 85 decibels, approved hearing protection must also be worn."',
      },
      {
        id: 'reading-workplace-safety-q3',
        question: 'What must employees do before handling hazardous materials?',
        options: [
          'Obtain a forklift certification',
          'Complete updated WHMIS training before March 15, 2026',
          'Attend the February 20 safety training session',
          'Sign a liability waiver with their supervisor',
        ],
        correctIndex: 1,
        explanation:
          'The memo requires: "Employees who handle chemicals, solvents, or cleaning agents must complete the updated WHMIS training before March 15, 2026."',
      },
      {
        id: 'reading-workplace-safety-q4',
        question: 'Why does the memo require even minor injuries to be reported?',
        options: [
          'To determine which employees are careless',
          'To help identify patterns and prevent more serious accidents',
          'To reduce the company\'s insurance premiums',
          'To give injured employees time off work',
        ],
        correctIndex: 1,
        explanation:
          'The memo explains: "This information helps us identify patterns and prevent more serious accidents." Tracking all incidents, including minor ones, allows the company to spot trends.',
      },
      {
        id: 'reading-workplace-safety-q5',
        question: 'What does the word "comply" most likely mean in this memo?',
        options: [
          'To disagree with a policy',
          'To ask questions about a rule',
          'To follow or obey a rule or requirement',
          'To suggest changes to a procedure',
        ],
        correctIndex: 2,
        explanation:
          '"Comply" means to act in accordance with a rule, standard, or requirement. The memo warns that failure to comply with safety rules may result in disciplinary action.',
      },
    ],
    keyVocabulary: [
      { word: 'procedures', definition: 'established steps or methods for doing something in a correct or official way', turkish: 'prosed\u00FCrler / i\u015Flem ad\u0131mlar\u0131' },
      { word: 'inspection', definition: 'an official examination to check that rules and standards are being followed', turkish: 'denetim / tefti\u015F' },
      { word: 'comply', definition: 'to act in accordance with a rule, standard, or requirement', turkish: 'uymak / uyum sa\u011Flamak' },
      { word: 'PPE', definition: 'personal protective equipment — gear worn to protect against workplace hazards', turkish: 'ki\u015Fisel koruyucu donan\u0131m (KKD)' },
      { word: 'hazardous', definition: 'dangerous or potentially harmful to health and safety', turkish: 'tehlikeli / zararl\u0131' },
      { word: 'incident', definition: 'an event or occurrence, especially one that is unpleasant or involves danger', turkish: 'olay / kaza' },
      { word: 'certification', definition: 'an official document proving that a person has met certain qualifications or standards', turkish: 'sertifika / belgelendirme' },
      { word: 'decibels', definition: 'a unit used to measure the loudness of sound', turkish: 'desibel' },
    ],
  },
];
