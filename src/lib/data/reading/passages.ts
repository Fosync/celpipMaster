import type { ReadingPassage } from './types';
import { newPassagesA } from './new-passages-a';
import { newPassagesB } from './new-passages-b';
import { newPassagesC } from './new-passages-c';
import { newPassagesD } from './new-passages-d';
import { newPassagesE } from './new-passages-e';

const existingPassages: ReadingPassage[] = [
  // ============================================================
  // CLB 5 — CORRESPONDENCE
  // ============================================================
  {
    id: 'reading-apt-maintenance',
    title: 'Apartment Maintenance Request',
    description: 'Read an email about apartment maintenance and answer questions.',
    passageType: 'correspondence',
    clbLevel: 5,
    icon: '📧',
    timeLimit: 300,
    passage:
      'From: Unit 4B Tenant — Maria Chen\nTo: Greenfield Property Management\nSubject: **Maintenance** Issues in My Apartment\n\nDear Property Management Team,\n\nI am writing to report two **maintenance** problems in my apartment at 45 Maple Street, Unit 4B, Toronto.\n\nFirst, the kitchen **faucet** has been **leaking** for about a week. The dripping is getting worse, and I am worried about water damage to the cabinet below the sink. I have placed a bucket under it for now, but it needs to be fixed soon.\n\nSecond, the heating system is not working properly. When I turn on the heat, only cold air comes out. With winter coming, this is becoming a serious **concern**. My children are very cold at night.\n\nI am available for a maintenance visit on weekday mornings between 9:00 AM and 12:00 PM. Please let me know when someone can come to look at these issues.\n\nI have been a **tenant** here for three years and have always paid my rent on time. I hope these problems can be **resolved** quickly.\n\nThank you for your attention to this matter.\n\nSincerely,\nMaria Chen\nUnit 4B\nPhone: 416-555-0192',
    questions: [
      {
        id: 'reading-apt-maintenance-q1',
        question: 'What is the main purpose of this email?',
        options: [
          'To complain about noisy neighbours',
          'To report maintenance problems in the apartment',
          'To request a rent reduction',
          'To give notice of moving out',
        ],
        correctIndex: 1,
        explanation:
          'Maria clearly states she is writing to report two maintenance problems: a leaking faucet and a broken heating system.',
      },
      {
        id: 'reading-apt-maintenance-q2',
        question: 'What has Maria done about the leaking faucet?',
        options: [
          'She fixed it herself',
          'She called a plumber',
          'She placed a bucket under it',
          'She turned off the water supply',
        ],
        correctIndex: 2,
        explanation:
          'The email states: "I have placed a bucket under it for now, but it needs to be fixed soon."',
      },
      {
        id: 'reading-apt-maintenance-q3',
        question: 'Why is the heating problem especially urgent?',
        options: [
          'The apartment is very old',
          'Winter is coming and her children are cold',
          'She has guests visiting soon',
          'The landlord promised to fix it last month',
        ],
        correctIndex: 1,
        explanation:
          'Maria explains: "With winter coming, this is becoming a serious concern. My children are very cold at night."',
      },
      {
        id: 'reading-apt-maintenance-q4',
        question: 'What does the word "resolved" most likely mean in this email?',
        options: [
          'Ignored',
          'Discussed',
          'Fixed or dealt with',
          'Made worse',
        ],
        correctIndex: 2,
        explanation:
          '"Resolved" means to deal with a problem successfully. Maria hopes the problems can be fixed quickly.',
      },
      {
        id: 'reading-apt-maintenance-q5',
        question: 'When is Maria available for a maintenance visit?',
        options: [
          'Weekend afternoons',
          'Weekday mornings from 9 AM to 12 PM',
          'Any time during the week',
          'Weekday evenings after 6 PM',
        ],
        correctIndex: 1,
        explanation:
          'The email specifically states: "I am available for a maintenance visit on weekday mornings between 9:00 AM and 12:00 PM."',
      },
    ],
    keyVocabulary: [
      { word: 'maintenance', definition: 'the process of keeping something in good condition', turkish: 'bakım' },
      { word: 'leaking', definition: 'allowing liquid to escape through a hole or crack', turkish: 'sızıntı yapan' },
      { word: 'faucet', definition: 'a device that controls the flow of water from a pipe', turkish: 'musluk' },
      { word: 'resolved', definition: 'dealt with successfully; fixed', turkish: 'çözülmüş' },
      { word: 'tenant', definition: 'a person who rents a property from a landlord', turkish: 'kiracı' },
      { word: 'concern', definition: 'a feeling of worry about something important', turkish: 'endişe' },
    ],
  },

  // ============================================================
  // CLB 5 — DIAGRAM
  // ============================================================
  {
    id: 'reading-class-schedule',
    title: 'Community Centre Class Schedule',
    description: 'Read a community centre schedule and answer questions about the programs.',
    passageType: 'diagram',
    clbLevel: 5,
    icon: '📊',
    timeLimit: 300,
    passage:
      'RIVERSIDE COMMUNITY CENTRE — WINTER 2026 CLASS SCHEDULE\n\nFitness Programs:\n- Yoga for Beginners | Monday & Wednesday | 9:00–10:00 AM | Room 101 | $45/month | **Instructor**: Priya Sharma\n- Zumba Dance | Tuesday & Thursday | 6:30–7:30 PM | **Gymnasium** | $50/month | **Instructor**: Carlos Reyes\n- Senior Fitness | Monday, Wednesday & Friday | 10:30–11:30 AM | Room 101 | $30/month (seniors 60+) | **Instructor**: Helen Park\n\nLanguage Classes:\n- English Conversation Circle | Wednesday | 1:00–2:30 PM | Room 203 | FREE | **Facilitator**: James Wilson\n- French for Beginners | Saturday | 10:00–11:30 AM | Room 203 | $60/month | **Instructor**: Marie Leblanc\n\nArts & Crafts:\n- Watercolour Painting | Thursday | 2:00–4:00 PM | Art Studio | $55/month (materials included) | **Instructor**: David Okafor\n- Pottery Workshop | Saturday | 1:00–3:00 PM | Art Studio | $65/month (materials included) | **Instructor**: Susan Lee\n\nNOTES:\n- **Registration** opens January 5, 2026 at the front desk or online at www.riversidecc.ca\n- All classes run from January 12 to March 20, 2026\n- 10% **discount** for registering in two or more programs\n- Free parking available on weekends only',
    questions: [
      {
        id: 'reading-class-schedule-q1',
        question: 'Which program is offered at no cost?',
        options: [
          'Senior Fitness',
          'Yoga for Beginners',
          'English Conversation Circle',
          'French for Beginners',
        ],
        correctIndex: 2,
        explanation:
          'The English Conversation Circle is listed as FREE, while all other programs have a monthly fee.',
      },
      {
        id: 'reading-class-schedule-q2',
        question: 'A person who works Monday to Friday, 8 AM to 5 PM, could attend which class?',
        options: [
          'Yoga for Beginners',
          'Zumba Dance',
          'Senior Fitness',
          'Watercolour Painting',
        ],
        correctIndex: 1,
        explanation:
          'Zumba Dance runs Tuesday and Thursday from 6:30 to 7:30 PM, which is after regular work hours. All other options are during daytime weekday hours.',
      },
      {
        id: 'reading-class-schedule-q3',
        question: 'How can someone get a discount on classes?',
        options: [
          'By being a senior citizen',
          'By registering before January 5',
          'By registering in two or more programs',
          'By paying for the full session upfront',
        ],
        correctIndex: 2,
        explanation:
          'The notes state: "10% discount for registering in two or more programs."',
      },
      {
        id: 'reading-class-schedule-q4',
        question: 'Which statement about parking is correct?',
        options: [
          'Parking is always free',
          'Parking costs $5 per visit',
          'Free parking is available on weekends only',
          'There is no parking at the centre',
        ],
        correctIndex: 2,
        explanation:
          'The notes clearly state: "Free parking available on weekends only."',
      },
      {
        id: 'reading-class-schedule-q5',
        question: 'What is the main purpose of this document?',
        options: [
          'To advertise a new community centre opening',
          'To inform residents about available winter programs',
          'To announce changes to existing programs',
          'To recruit new instructors for classes',
        ],
        correctIndex: 1,
        explanation:
          'The schedule is designed to inform community members about the classes, times, costs, and registration details for the winter session.',
      },
    ],
    keyVocabulary: [
      { word: 'registration', definition: 'the act of signing up for something officially', turkish: 'kayıt' },
      { word: 'instructor', definition: 'a person who teaches a skill or subject', turkish: 'eğitmen' },
      { word: 'discount', definition: 'a reduction in the usual price', turkish: 'indirim' },
      { word: 'facilitator', definition: 'a person who helps a group work together effectively', turkish: 'kolaylaştırıcı' },
      { word: 'gymnasium', definition: 'a large room designed for indoor sports and exercise', turkish: 'spor salonu' },
    ],
  },

  // ============================================================
  // CLB 5 — INFORMATION
  // ============================================================
  {
    id: 'reading-library-services',
    title: 'Public Library Services',
    description: 'Read a brochure about library services and answer questions.',
    passageType: 'information',
    clbLevel: 5,
    icon: '📄',
    timeLimit: 300,
    passage:
      'WELCOME TO VANCOUVER PUBLIC LIBRARY\n\nYour library card gives you free **access** to thousands of books, magazines, DVDs, and digital resources. Here is what you need to know.\n\nGetting a Library Card:\nAnyone who lives, works, or studies in Vancouver can get a free library card. Bring a piece of photo ID and proof of your address (such as a utility bill or bank statement) to any branch. Cards for children under 14 must be signed by a parent or **guardian**.\n\nBorrowing:\nYou can **borrow** up to 50 items at a time. Books and magazines can be kept for 21 days. DVDs and video games can be kept for 7 days. You can **renew** items up to two times, either online, by phone, or in person. **Overdue** items cost $0.25 per day for books and $1.00 per day for DVDs.\n\nFree Programs:\nThe library offers many free programs for all ages. These include story time for children, homework help for students, English conversation groups, computer skills workshops, and tax clinic sessions in spring.\n\nOnline Services:\nWith your library card, you can also access e-books, audiobooks, and online newspapers from home. Visit our website at www.vpl.ca to explore all digital resources.\n\nHours:\nMost branches are open Monday to Saturday, 10:00 AM to 8:00 PM. Sunday hours vary by location. Check our website for details.',
    questions: [
      {
        id: 'reading-library-services-q1',
        question: 'What do you need to bring to get a library card?',
        options: [
          'A letter from your employer',
          'Photo ID and proof of address',
          'Your birth certificate and passport',
          'A completed application form',
        ],
        correctIndex: 1,
        explanation:
          'The brochure states: "Bring a piece of photo ID and proof of your address (such as a utility bill or bank statement)."',
      },
      {
        id: 'reading-library-services-q2',
        question: 'How long can you keep a borrowed DVD?',
        options: [
          '21 days',
          '14 days',
          '7 days',
          '3 days',
        ],
        correctIndex: 2,
        explanation:
          'The brochure clearly states: "DVDs and video games can be kept for 7 days."',
      },
      {
        id: 'reading-library-services-q3',
        question: 'What can be inferred about the library\'s approach to serving the community?',
        options: [
          'It focuses mainly on children\'s programs',
          'It only serves people who live in Vancouver',
          'It aims to provide a wide range of services for people of all ages',
          'It is planning to close several branches',
        ],
        correctIndex: 2,
        explanation:
          'The library offers programs for children, students, and adults, provides materials in multiple formats, and has both in-person and online services, showing a commitment to serving all community members.',
      },
      {
        id: 'reading-library-services-q4',
        question: 'What does the word "overdue" mean in the context of this brochure?',
        options: [
          'Returned early',
          'Damaged or lost',
          'Not returned by the due date',
          'Borrowed without a library card',
        ],
        correctIndex: 2,
        explanation:
          '"Overdue" means past the borrowing deadline. The brochure lists daily fees for items kept longer than the allowed borrowing period.',
      },
      {
        id: 'reading-library-services-q5',
        question: 'Which of the following is NOT mentioned as a free library program?',
        options: [
          'Story time for children',
          'English conversation groups',
          'Music lessons for beginners',
          'Tax clinic sessions',
        ],
        correctIndex: 2,
        explanation:
          'Music lessons are not mentioned. The free programs listed include story time, homework help, English conversation groups, computer workshops, and tax clinic sessions.',
      },
    ],
    keyVocabulary: [
      { word: 'borrow', definition: 'to take and use something temporarily', turkish: 'ödünç almak' },
      { word: 'overdue', definition: 'not returned or completed by the expected time', turkish: 'süresi geçmiş' },
      { word: 'renew', definition: 'to extend the period of a loan or agreement', turkish: 'yenilemek' },
      { word: 'guardian', definition: 'a person legally responsible for the care of a child', turkish: 'vasi' },
      { word: 'access', definition: 'the ability or right to use something', turkish: 'erişim' },
    ],
  },

  // ============================================================
  // CLB 6 — CORRESPONDENCE
  // ============================================================
  {
    id: 'reading-workplace-policy',
    title: 'Workplace Policy Memo',
    description: 'Read a workplace memo about a new policy and answer questions.',
    passageType: 'correspondence',
    clbLevel: 6,
    icon: '📧',
    timeLimit: 300,
    passage:
      'INTERNAL MEMO\n\nTo: All Staff — Ottawa Regional Office\nFrom: Karen Mitchell, Director of Human Resources\nDate: January 15, 2026\nSubject: Updated Remote Work Policy — Effective February 1, 2026\n\nDear Team,\n\nFollowing the company-wide review completed in December, we are pleased to announce an updated remote work policy that balances **flexibility** with our need for in-person collaboration.\n\nEffective February 1, 2026, the following guidelines will apply:\n\n1. **Hybrid** Schedule: All full-time employees may work from home up to two days per week. These days must be approved by your direct **supervisor** by the Friday before each work week.\n\n2. Core Office Days: Tuesdays and Thursdays are designated as **mandatory** in-office days for all departments. Team meetings and collaborative projects should be scheduled on these days.\n\n3. Equipment: Employees who work from home are responsible for having a reliable internet connection. The company will provide a laptop and headset upon request. Additional equipment purchases must be pre-approved by your department manager.\n\n4. Availability: Remote workers must be available during core business hours (9:00 AM to 4:00 PM EST) and respond to messages within 30 minutes.\n\n5. Performance: Remote work **privileges** may be adjusted if performance expectations are not met, as determined by **quarterly** reviews.\n\nPlease review the full policy document on the company intranet. If you have questions, contact HR at hr@ottawaoffice.ca or attend the Q&A session on January 22 at 2:00 PM in Conference Room B.\n\nBest regards,\nKaren Mitchell',
    questions: [
      {
        id: 'reading-workplace-policy-q1',
        question: 'What is the main purpose of this memo?',
        options: [
          'To announce that the office is closing permanently',
          'To introduce an updated remote work policy',
          'To inform staff about a salary increase',
          'To announce new hiring plans for the department',
        ],
        correctIndex: 1,
        explanation:
          'The subject line and opening paragraph clearly state this memo is about an updated remote work policy.',
      },
      {
        id: 'reading-workplace-policy-q2',
        question: 'How many days per week can full-time employees work from home?',
        options: [
          'One day',
          'Up to two days',
          'Three days',
          'As many as they want',
        ],
        correctIndex: 1,
        explanation:
          'The memo states: "All full-time employees may work from home up to two days per week."',
      },
      {
        id: 'reading-workplace-policy-q3',
        question: 'What can be inferred about the company\'s attitude toward remote work?',
        options: [
          'The company is completely against remote work',
          'The company wants to eliminate all office work',
          'The company supports remote work but values in-person collaboration too',
          'The company plans to close the Ottawa office',
        ],
        correctIndex: 2,
        explanation:
          'The memo says the policy "balances flexibility with our need for in-person collaboration," showing the company values both remote work and in-person time.',
      },
      {
        id: 'reading-workplace-policy-q4',
        question: 'What happens if an employee\'s performance declines while working remotely?',
        options: [
          'They will be immediately fired',
          'Their salary will be reduced',
          'Their remote work privileges may be adjusted',
          'They must attend extra training sessions',
        ],
        correctIndex: 2,
        explanation:
          'The memo states: "Remote work privileges may be adjusted if performance expectations are not met, as determined by quarterly reviews."',
      },
      {
        id: 'reading-workplace-policy-q5',
        question: 'Which equipment will the company provide for remote workers upon request?',
        options: [
          'A desk and office chair',
          'A laptop and headset',
          'A printer and scanner',
          'A monitor and keyboard',
        ],
        correctIndex: 1,
        explanation:
          'The memo specifies: "The company will provide a laptop and headset upon request."',
      },
    ],
    keyVocabulary: [
      { word: 'hybrid', definition: 'combining two different elements; a mix', turkish: 'karma' },
      { word: 'mandatory', definition: 'required by rule or law', turkish: 'zorunlu' },
      { word: 'flexibility', definition: 'the ability to change or adapt easily', turkish: 'esneklik' },
      { word: 'privileges', definition: 'special rights or advantages', turkish: 'ayrıcalıklar' },
      { word: 'quarterly', definition: 'happening every three months', turkish: 'üç aylık' },
      { word: 'supervisor', definition: 'a person who oversees and directs workers', turkish: 'amir' },
    ],
  },

  // ============================================================
  // CLB 6 — DIAGRAM
  // ============================================================
  {
    id: 'reading-transit-info',
    title: 'Public Transit Route Information',
    description: 'Read public transit route information and answer questions.',
    passageType: 'diagram',
    clbLevel: 6,
    icon: '📊',
    timeLimit: 300,
    passage:
      'CALGARY TRANSIT — ROUTE 301 BRT (BUS **RAPID** TRANSIT)\nEffective January 2026\n\nRoute Overview:\nThe Route 301 is a **high-frequency** bus rapid transit line connecting the northeast communities to the downtown core. It operates along Centre Street N with limited stops for faster travel times.\n\nSchedule:\n- Weekdays: Every 5 minutes (6:00 AM–9:00 AM), Every 10 minutes (9:00 AM–3:00 PM), Every 5 minutes (3:00 PM–7:00 PM), Every 15 minutes (7:00 PM–12:00 AM)\n- Saturdays: Every 10 minutes (7:00 AM–10:00 PM), Every 20 minutes (10:00 PM–12:00 AM)\n- Sundays & Holidays: Every 15 minutes (8:00 AM–10:00 PM), Every 30 minutes (10:00 PM–11:00 PM)\n\nKey Stops:\n1. Country Hills Terminal (Start)\n2. Harvest Hills Crossing\n3. Coventry Hills Mall\n4. Beddington Heights\n5. North Pointe Centre\n6. SAIT / Jubilee Station (**Transfer** to CTrain Blue Line)\n7. Downtown — City Hall (End)\n\n**Fares**:\n- Adult Single Ride: $3.60\n- Adult Monthly Pass: $112.00\n- Youth (6–17) Monthly Pass: $78.00\n- Senior (65+) Monthly Pass: $25.00\n- Children under 6: FREE\n\nNOTES:\n- All Route 301 buses are wheelchair **accessible**\n- Bikes can be loaded on front-mounted racks (2 bikes per bus)\n- Real-time tracking available on the Calgary Transit app\n- For trip planning, visit www.calgarytransit.com or call 403-262-1000',
    questions: [
      {
        id: 'reading-transit-info-q1',
        question: 'How often does the Route 301 bus run during weekday morning rush hour (6:00–9:00 AM)?',
        options: [
          'Every 10 minutes',
          'Every 15 minutes',
          'Every 5 minutes',
          'Every 20 minutes',
        ],
        correctIndex: 2,
        explanation:
          'The schedule shows that during weekday peak hours (6:00 AM–9:00 AM), buses run every 5 minutes.',
      },
      {
        id: 'reading-transit-info-q2',
        question: 'Where can a passenger transfer to the CTrain Blue Line?',
        options: [
          'Country Hills Terminal',
          'Beddington Heights',
          'SAIT / Jubilee Station',
          'Downtown — City Hall',
        ],
        correctIndex: 2,
        explanation:
          'The key stops list indicates: "SAIT / Jubilee Station (Transfer to CTrain Blue Line)."',
      },
      {
        id: 'reading-transit-info-q3',
        question: 'A 70-year-old woman and her 5-year-old grandson ride the bus together daily. How much would their combined monthly passes cost?',
        options: [
          '$25.00',
          '$103.00',
          '$137.00',
          '$190.00',
        ],
        correctIndex: 0,
        explanation:
          'The senior monthly pass is $25.00 and children under 6 ride for free, making the total $25.00.',
      },
      {
        id: 'reading-transit-info-q4',
        question: 'What does the phrase "limited stops" suggest about the Route 301?',
        options: [
          'The bus breaks down frequently',
          'Not many people use this route',
          'The bus skips some stops to travel faster',
          'The route operates only on certain days',
        ],
        correctIndex: 2,
        explanation:
          '"Limited stops" means the bus does not stop at every possible location along the route, which results in faster travel times compared to regular local service.',
      },
      {
        id: 'reading-transit-info-q5',
        question: 'Which of the following is NOT a service mentioned for Route 301?',
        options: [
          'Wheelchair accessibility',
          'Wi-Fi on board',
          'Front-mounted bike racks',
          'Real-time tracking via app',
        ],
        correctIndex: 1,
        explanation:
          'Wi-Fi is not mentioned anywhere in the route information. The document mentions wheelchair accessibility, bike racks, and real-time tracking.',
      },
    ],
    keyVocabulary: [
      { word: 'frequency', definition: 'the rate at which something occurs', turkish: 'sıklık' },
      { word: 'fare', definition: 'the price paid to travel on public transport', turkish: 'yolculuk ücreti' },
      { word: 'accessible', definition: 'able to be reached or used by everyone', turkish: 'erişilebilir' },
      { word: 'transfer', definition: 'to change from one vehicle or route to another', turkish: 'aktarma' },
      { word: 'rapid', definition: 'happening very quickly; fast', turkish: 'hızlı' },
    ],
  },

  // ============================================================
  // CLB 6 — OPINION
  // ============================================================
  {
    id: 'reading-restaurant-review',
    title: 'Local Restaurant Review',
    description: 'Read a restaurant review and answer questions about the writer\'s opinions.',
    passageType: 'opinion',
    clbLevel: 6,
    icon: '💬',
    timeLimit: 300,
    passage:
      'RESTAURANT REVIEW: The Golden Maple — 3.5 out of 5 Stars\nBy Sarah Nguyen, Montreal Dining Blog\n\nWhen The Golden Maple opened on Rue Saint-Denis last month, it promised "authentic Canadian comfort food with a modern twist." After two visits, I have mixed feelings.\n\nThe **atmosphere** is delightful. The restaurant is decorated with warm wood tones, vintage Canadian photographs, and soft lighting that creates a cozy feeling perfect for a winter evening. The staff were friendly and **attentive** during both of my visits.\n\nThe menu offers classic dishes like poutine, tourtiere, and butter tarts alongside more creative options such as maple-glazed salmon and bison burgers. During my first visit, I tried the poutine, which was **outstanding** — crispy fries, rich gravy, and perfectly melted cheese curds. The maple-glazed salmon was also excellent, with a beautiful balance of sweet and savoury flavours.\n\nHowever, my second visit was **disappointing**. The tourtiere was dry and lacked seasoning, and the bison burger was overcooked. The service was also slower, perhaps because the restaurant was much busier on a Saturday evening.\n\nPrices are **reasonable** for the neighbourhood, with most main courses between $18 and $28. The dessert menu is small but the butter tarts are a must-try.\n\nOverall, The Golden Maple has great potential, but it needs more **consistency**. I would recommend it for a casual dinner, but I would suggest going on a quieter weeknight for the best experience.',
    questions: [
      {
        id: 'reading-restaurant-review-q1',
        question: 'What is the reviewer\'s overall opinion of The Golden Maple?',
        options: [
          'It is the best restaurant in Montreal',
          'It is terrible and should be avoided',
          'It has potential but lacks consistency',
          'It is too expensive for the quality',
        ],
        correctIndex: 2,
        explanation:
          'The reviewer gives 3.5 out of 5 stars and states: "The Golden Maple has great potential, but it needs more consistency."',
      },
      {
        id: 'reading-restaurant-review-q2',
        question: 'Which dish does the reviewer strongly recommend?',
        options: [
          'The tourtiere',
          'The bison burger',
          'The butter tarts',
          'The maple-glazed chicken',
        ],
        correctIndex: 2,
        explanation:
          'The reviewer says "the butter tarts are a must-try," which is the strongest recommendation in the review.',
      },
      {
        id: 'reading-restaurant-review-q3',
        question: 'Why was the reviewer\'s second visit disappointing?',
        options: [
          'The restaurant was closed early',
          'The food was dry, overcooked, and service was slower',
          'The prices had increased significantly',
          'The atmosphere was too noisy',
        ],
        correctIndex: 1,
        explanation:
          'The reviewer states the tourtiere was dry and lacked seasoning, the bison burger was overcooked, and the service was slower during the second visit.',
      },
      {
        id: 'reading-restaurant-review-q4',
        question: 'What does the word "attentive" most likely mean when describing the staff?',
        options: [
          'Rude and unhelpful',
          'Slow and distracted',
          'Paying careful attention to customers\' needs',
          'Only focused on taking orders',
        ],
        correctIndex: 2,
        explanation:
          '"Attentive" means paying close attention and being responsive. In the context of restaurant service, it means the staff were caring and responsive to diners\' needs.',
      },
      {
        id: 'reading-restaurant-review-q5',
        question: 'What does the reviewer suggest about when to visit the restaurant?',
        options: [
          'Only visit for lunch',
          'Go on a quieter weeknight for the best experience',
          'Visit only on weekends when the full menu is available',
          'Wait a few months until the restaurant improves',
        ],
        correctIndex: 1,
        explanation:
          'The reviewer explicitly suggests: "I would suggest going on a quieter weeknight for the best experience," likely because the quality was better during a less busy time.',
      },
    ],
    keyVocabulary: [
      { word: 'atmosphere', definition: 'the mood or feeling of a place', turkish: 'atmosfer' },
      { word: 'attentive', definition: 'paying close attention to someone\'s needs', turkish: 'özenli' },
      { word: 'consistency', definition: 'the quality of being reliable and uniform', turkish: 'tutarlılık' },
      { word: 'outstanding', definition: 'exceptionally good; excellent', turkish: 'olağanüstü' },
      { word: 'disappointing', definition: 'failing to meet expectations', turkish: 'hayal kırıcı' },
      { word: 'reasonable', definition: 'fair and sensible; not too expensive', turkish: 'makul' },
    ],
  },

  // ============================================================
  // CLB 7 — CORRESPONDENCE
  // ============================================================
  {
    id: 'reading-cover-letter',
    title: 'Job Application Cover Letter',
    description: 'Read a cover letter for a job application and answer questions.',
    passageType: 'correspondence',
    clbLevel: 7,
    icon: '📧',
    timeLimit: 360,
    passage:
      'Amira Hassan\n78 King Street West, Hamilton, ON L8P 1A2\namira.hassan@email.com | 905-555-0347\n\nJanuary 10, 2026\n\nMs. Jennifer Clarke\nHiring Manager, Marketing Department\nGreat Lakes Media Group\n200 Bay Street, Suite 1500\nToronto, ON M5J 2K9\n\nDear Ms. Clarke,\n\nI am writing to express my interest in the Digital Marketing Coordinator position posted on your company website. With three years of experience in content creation and social media management, I believe I would be a valuable addition to your team.\n\nIn my current role at Horizon Communications in Hamilton, I manage social media accounts for five corporate clients, creating engaging content that has increased audience **engagement** by an average of 40% over the past year. I have also led two successful product launch campaigns that generated over $200,000 in revenue within their first quarter.\n\nWhat particularly attracts me to Great Lakes Media Group is your commitment to data-driven marketing strategies. During my studies at McMaster University, where I completed a Bachelor of Commerce with a **specialization** in Marketing, I developed strong analytical skills that I have since applied to campaign optimization. I am **proficient** in Google Analytics, Hootsuite, Adobe Creative Suite, and various CRM platforms.\n\nI am eager to bring my creativity, analytical thinking, and **collaborative** spirit to your organization. I am available for an interview at your **convenience** and have attached my resume for your review.\n\nThank you for considering my application. I look forward to the opportunity to discuss how my skills and experience align with the goals of your marketing team.\n\nSincerely,\nAmira Hassan',
    questions: [
      {
        id: 'reading-cover-letter-q1',
        question: 'What position is Amira applying for?',
        options: [
          'Social Media Manager',
          'Digital Marketing Coordinator',
          'Content Writer',
          'Marketing Director',
        ],
        correctIndex: 1,
        explanation:
          'Amira states: "I am writing to express my interest in the Digital Marketing Coordinator position."',
      },
      {
        id: 'reading-cover-letter-q2',
        question: 'What achievement does Amira highlight to demonstrate her effectiveness?',
        options: [
          'She has won several marketing awards',
          'She increased audience engagement by 40% and led campaigns generating over $200,000',
          'She managed a team of ten marketing professionals',
          'She developed a new marketing software tool',
        ],
        correctIndex: 1,
        explanation:
          'Amira mentions increasing engagement by 40% and leading campaigns that generated over $200,000 in revenue as key achievements.',
      },
      {
        id: 'reading-cover-letter-q3',
        question: 'Why is Amira specifically interested in Great Lakes Media Group?',
        options: [
          'Because they offer the highest salary in the industry',
          'Because they are located close to her home',
          'Because of their commitment to data-driven marketing strategies',
          'Because her former professor works there',
        ],
        correctIndex: 2,
        explanation:
          'Amira writes: "What particularly attracts me to Great Lakes Media Group is your commitment to data-driven marketing strategies."',
      },
      {
        id: 'reading-cover-letter-q4',
        question: 'What is the tone of this cover letter?',
        options: [
          'Casual and humorous',
          'Professional and confident',
          'Desperate and pleading',
          'Formal and overly academic',
        ],
        correctIndex: 1,
        explanation:
          'The letter maintains a professional tone throughout while confidently presenting qualifications and achievements without being arrogant or desperate.',
      },
      {
        id: 'reading-cover-letter-q5',
        question: 'What can be inferred about Amira\'s current employment status?',
        options: [
          'She is unemployed and looking for work',
          'She is currently employed at Horizon Communications',
          'She recently graduated from university',
          'She is retired and looking for part-time work',
        ],
        correctIndex: 1,
        explanation:
          'Amira refers to "my current role at Horizon Communications," indicating she is currently employed there while applying for a new position.',
      },
    ],
    keyVocabulary: [
      { word: 'proficient', definition: 'skilled and competent in doing something', turkish: 'yetkin' },
      { word: 'engagement', definition: 'the level of involvement or interaction', turkish: 'etkileşim' },
      { word: 'collaborative', definition: 'involving people working together', turkish: 'iş birlikçi' },
      { word: 'specialization', definition: 'concentration on a particular area of study', turkish: 'uzmanlık alanı' },
      { word: 'convenience', definition: 'a time or situation that is suitable', turkish: 'uygun zaman' },
    ],
  },

  // ============================================================
  // CLB 7 — INFORMATION
  // ============================================================
  {
    id: 'reading-healthcare-article',
    title: 'Canadian Healthcare System',
    description: 'Read an article about the Canadian healthcare system and answer questions.',
    passageType: 'information',
    clbLevel: 7,
    icon: '📄',
    timeLimit: 360,
    passage:
      'Understanding Canada\'s Healthcare System\n\nCanada\'s publicly funded healthcare system, commonly known as Medicare, is one of the country\'s most valued social programs. Established through the Canada Health Act of 1984, it ensures that all Canadian citizens and permanent residents have access to medically necessary hospital and physician services without paying out of pocket.\n\nThe system operates on five key principles: public administration, **comprehensiveness**, **universality**, **portability**, and accessibility. Each province and territory manages its own health insurance plan, which is why **coverage** can vary slightly depending on where you live. For example, some provinces cover prescription drugs for seniors while others do not.\n\nTo access healthcare, residents must apply for a provincial health card. In Ontario, this is called OHIP (Ontario Health Insurance Plan), while in British Columbia, it is called MSP (Medical Services Plan). New immigrants should apply as soon as possible, though there may be a waiting period of up to three months in some provinces.\n\nWhile the system covers essential medical services, it does not cover everything. Dental care, vision care, prescription medications (for most adults), physiotherapy, and **cosmetic** procedures are generally not included. Many Canadians obtain private insurance through their employers or purchase individual plans to cover these additional services.\n\nDespite its strengths, the system faces challenges including long wait times for specialist appointments and elective surgeries, a shortage of family doctors in rural areas, and increasing costs associated with an aging population. Nonetheless, Canadians consistently express strong support for their universal healthcare system in national surveys.',
    questions: [
      {
        id: 'reading-healthcare-article-q1',
        question: 'What is the main purpose of this article?',
        options: [
          'To argue that Canada should change its healthcare system',
          'To explain how Canada\'s healthcare system works',
          'To compare Canadian and American healthcare',
          'To describe how to become a doctor in Canada',
        ],
        correctIndex: 1,
        explanation:
          'The article provides an informational overview of how Canada\'s healthcare system is structured, what it covers, and its challenges.',
      },
      {
        id: 'reading-healthcare-article-q2',
        question: 'Why might healthcare coverage differ between provinces?',
        options: [
          'Because the federal government has not set clear standards',
          'Because each province and territory manages its own health insurance plan',
          'Because some provinces have more hospitals than others',
          'Because only wealthy provinces can afford to provide full coverage',
        ],
        correctIndex: 1,
        explanation:
          'The article states: "Each province and territory manages its own health insurance plan, which is why coverage can vary slightly depending on where you live."',
      },
      {
        id: 'reading-healthcare-article-q3',
        question: 'Which of the following services is typically NOT covered by provincial health plans?',
        options: [
          'Hospital stays',
          'Visits to a family doctor',
          'Emergency room treatment',
          'Dental care',
        ],
        correctIndex: 3,
        explanation:
          'The article lists dental care among services that are "generally not included" in provincial health coverage, along with vision care and prescription medications for most adults.',
      },
      {
        id: 'reading-healthcare-article-q4',
        question: 'What does the word "portability" most likely refer to in the context of healthcare principles?',
        options: [
          'The ability to carry medical records electronically',
          'The ability to have coverage when moving or travelling between provinces',
          'The requirement to visit portable medical clinics',
          'The option to transfer your health card to a family member',
        ],
        correctIndex: 1,
        explanation:
          'In the context of Canada\'s health system principles, "portability" refers to the ability to maintain healthcare coverage when moving between provinces or travelling within Canada.',
      },
      {
        id: 'reading-healthcare-article-q5',
        question: 'What challenge does the article mention regarding rural areas?',
        options: [
          'Rural hospitals have outdated equipment',
          'There is a shortage of family doctors in rural areas',
          'Rural residents must pay higher fees for healthcare',
          'Rural areas do not have access to emergency services',
        ],
        correctIndex: 1,
        explanation:
          'The article specifically mentions "a shortage of family doctors in rural areas" as one of the challenges facing the healthcare system.',
      },
    ],
    keyVocabulary: [
      { word: 'comprehensiveness', definition: 'the quality of including all necessary parts', turkish: 'kapsamlılık' },
      { word: 'universality', definition: 'the quality of being available to everyone', turkish: 'evrensellik' },
      { word: 'portability', definition: 'the ability to transfer coverage between provinces', turkish: 'taşınabilirlik' },
      { word: 'coverage', definition: 'the extent of protection provided by insurance', turkish: 'kapsam' },
      { word: 'eligible', definition: 'meeting the requirements to receive something', turkish: 'hak sahibi' },
      { word: 'cosmetic', definition: 'relating to appearance rather than medical need', turkish: 'estetik' },
    ],
  },

  // ============================================================
  // CLB 7 — OPINION
  // ============================================================
  {
    id: 'reading-remote-work-editorial',
    title: 'Editorial on Remote Work',
    description: 'Read an editorial about remote work and answer questions about the author\'s arguments.',
    passageType: 'opinion',
    clbLevel: 7,
    icon: '💬',
    timeLimit: 360,
    passage:
      'The Future of Work Is **Hybrid** — And That\'s a Good Thing\nBy Michael Torres, Winnipeg Free Press — Opinion Section\n\nThe pandemic fundamentally changed how we think about work, and there is no going back. While some business leaders are pushing for a full return to the office, I believe the hybrid model — a blend of remote and in-person work — is the smartest path forward for both employers and employees.\n\nThe benefits of remote work are well documented. Studies by Statistics Canada show that remote workers report higher job satisfaction, better work-life balance, and reduced commuting stress. For many Canadians, especially those in cities like Toronto and Vancouver where commute times can exceed 90 minutes each way, working from home even two days a week saves significant time and money.\n\nHowever, I am not advocating for fully remote arrangements. There is genuine value in face-to-face interaction. **Spontaneous** conversations, team-building activities, and mentoring relationships all benefit from physical presence. New employees, in particular, often struggle to integrate into company culture when they never meet their colleagues in person.\n\nThe hybrid model offers the best of both worlds. Employees gain flexibility and **autonomy** while maintaining the social connections and collaborative opportunities that offices provide. Companies benefit from increased **productivity**, lower real estate costs, and the ability to recruit talent from a wider geographic area.\n\nCritics argue that hybrid work creates **inequality** between remote and in-office employees. This is a valid concern, but it can be addressed through thoughtful policies, regular check-ins, and ensuring that promotions are based on results rather than physical presence.\n\nCanadian businesses that embrace hybrid work will attract the best talent. Those that resist this shift risk losing employees to more flexible competitors.',
    questions: [
      {
        id: 'reading-remote-work-editorial-q1',
        question: 'What is the author\'s main argument?',
        options: [
          'All employees should work from home permanently',
          'Companies should require everyone to return to the office',
          'The hybrid work model is the best approach for the future',
          'Remote work is harmful to company culture',
        ],
        correctIndex: 2,
        explanation:
          'The author\'s thesis is clearly stated: "I believe the hybrid model — a blend of remote and in-person work — is the smartest path forward for both employers and employees."',
      },
      {
        id: 'reading-remote-work-editorial-q2',
        question: 'According to the article, why does the author mention commute times in Toronto and Vancouver?',
        options: [
          'To argue that these cities need better public transit',
          'To support the point that remote work saves time and money',
          'To suggest that people should not live in large cities',
          'To compare Canadian cities with cities in other countries',
        ],
        correctIndex: 1,
        explanation:
          'The author mentions the long commute times (exceeding 90 minutes each way) to illustrate how remote work can save significant time and money for workers in major Canadian cities.',
      },
      {
        id: 'reading-remote-work-editorial-q3',
        question: 'What does the author acknowledge as a disadvantage of fully remote work?',
        options: [
          'Remote workers are less productive',
          'Remote work increases company costs',
          'New employees struggle to integrate into company culture',
          'Remote workers earn lower salaries',
        ],
        correctIndex: 2,
        explanation:
          'The author concedes: "New employees, in particular, often struggle to integrate into company culture when they never meet their colleagues in person."',
      },
      {
        id: 'reading-remote-work-editorial-q4',
        question: 'How does the author respond to critics who say hybrid work creates inequality?',
        options: [
          'The author dismisses the criticism as unimportant',
          'The author says it is a valid concern that can be addressed through thoughtful policies',
          'The author argues that inequality already exists in traditional offices',
          'The author suggests paying remote workers more to compensate',
        ],
        correctIndex: 1,
        explanation:
          'The author acknowledges: "This is a valid concern, but it can be addressed through thoughtful policies, regular check-ins, and ensuring that promotions are based on results rather than physical presence."',
      },
      {
        id: 'reading-remote-work-editorial-q5',
        question: 'What does the phrase "the best of both worlds" mean in this context?',
        options: [
          'The advantages of working in two different countries',
          'The benefits of two different industries',
          'The combined advantages of remote work and office work',
          'The comparison between old and new technology',
        ],
        correctIndex: 2,
        explanation:
          '"The best of both worlds" is an idiom meaning you get the advantages of two different things. Here, it means the hybrid model combines the benefits of remote work (flexibility) with the benefits of office work (collaboration).',
      },
    ],
    keyVocabulary: [
      { word: 'hybrid', definition: 'a combination of two different things', turkish: 'karma' },
      { word: 'autonomy', definition: 'the right to make your own decisions', turkish: 'özerklik' },
      { word: 'productivity', definition: 'the rate of producing work or results', turkish: 'verimlilik' },
      { word: 'spontaneous', definition: 'happening naturally without planning', turkish: 'kendiliğinden olan' },
      { word: 'inequality', definition: 'unfair difference in treatment or status', turkish: 'eşitsizlik' },
    ],
  },

  // ============================================================
  // CLB 8 — INFORMATION
  // ============================================================
  {
    id: 'reading-climate-article',
    title: 'Climate Change in Canada',
    description: 'Read an article about climate change impacts in Canada and answer questions.',
    passageType: 'information',
    clbLevel: 8,
    icon: '📄',
    timeLimit: 360,
    passage:
      'Climate Change and Its Impact on Canada\n\nCanada is warming at roughly twice the global average rate, making it one of the most affected countries in the world when it comes to climate change. According to Environment and Climate Change Canada, the country\'s average temperature has risen by 1.7 degrees Celsius since 1948, with northern regions experiencing increases of up to 2.3 degrees.\n\nThe consequences are already visible across the country. In British Columbia, increasingly severe wildfire seasons have displaced thousands of residents and blanketed cities in hazardous smoke. The 2023 wildfire season was the most destructive on record, burning over 18 million hectares nationwide. In the Prairies, shifting **precipitation** patterns have led to more frequent droughts that threaten agricultural production, while Atlantic Canada faces rising sea levels and more intense hurricanes.\n\nThe Arctic is particularly vulnerable. **Permafrost** thaw is **destabilizing** **infrastructure** in northern communities, damaging roads, buildings, and airport runways. Indigenous communities that depend on traditional hunting and fishing practices are seeing their way of life fundamentally altered as animal migration patterns shift and ice conditions become unpredictable.\n\nThe federal government has committed to achieving net-zero greenhouse gas emissions by 2050, implementing measures such as a national carbon pricing system, investments in renewable energy, and incentives for electric vehicle adoption. However, critics from both sides of the debate argue that these measures are either too aggressive and economically harmful, or too slow and insufficient to address the scale of the crisis.\n\nWhat remains clear is that **adaptation** strategies — from updated building codes to improved flood management and forest fire prevention — must complement emission reduction efforts if Canada is to navigate the challenges that lie ahead.',
    questions: [
      {
        id: 'reading-climate-article-q1',
        question: 'What is the central idea of this article?',
        options: [
          'Canada should stop producing oil and gas immediately',
          'Climate change is significantly affecting Canada and requires both mitigation and adaptation',
          'The Canadian government is doing an excellent job addressing climate change',
          'Climate change only affects northern parts of Canada',
        ],
        correctIndex: 1,
        explanation:
          'The article presents the widespread impacts of climate change across Canada and concludes that both emission reduction and adaptation strategies are necessary.',
      },
      {
        id: 'reading-climate-article-q2',
        question: 'According to the article, how does Canada\'s warming rate compare to the global average?',
        options: [
          'It is the same as the global average',
          'It is slightly below the global average',
          'It is roughly twice the global average',
          'It is three times the global average',
        ],
        correctIndex: 2,
        explanation:
          'The article states: "Canada is warming at roughly twice the global average rate."',
      },
      {
        id: 'reading-climate-article-q3',
        question: 'How are Indigenous communities in the Arctic being affected?',
        options: [
          'They are benefiting from warmer temperatures and longer growing seasons',
          'Their traditional practices are being altered by shifting migration patterns and unpredictable ice conditions',
          'They are receiving significant government funding to relocate',
          'They have been unaffected because they live in remote areas',
        ],
        correctIndex: 1,
        explanation:
          'The article explains that Indigenous communities "are seeing their way of life fundamentally altered as animal migration patterns shift and ice conditions become unpredictable."',
      },
      {
        id: 'reading-climate-article-q4',
        question: 'What does the word "destabilizing" mean in the context of permafrost thaw?',
        options: [
          'Making stronger and more secure',
          'Causing to become unstable or weakened',
          'Freezing again after melting',
          'Building new structures on top of',
        ],
        correctIndex: 1,
        explanation:
          '"Destabilizing" means undermining the stability of something. When permafrost thaws, the ground becomes unstable, causing damage to infrastructure built on top of it.',
      },
      {
        id: 'reading-climate-article-q5',
        question: 'What does the article suggest about the government\'s climate policies?',
        options: [
          'They are universally praised by all Canadians',
          'They are criticized from opposing perspectives — as either too aggressive or too slow',
          'They have already solved the climate crisis in Canada',
          'They focus exclusively on protecting the Arctic',
        ],
        correctIndex: 1,
        explanation:
          'The article notes that "critics from both sides of the debate argue that these measures are either too aggressive and economically harmful, or too slow and insufficient," showing the policies face criticism from opposing viewpoints.',
      },
    ],
    keyVocabulary: [
      { word: 'permafrost', definition: 'ground that remains frozen for two or more years', turkish: 'kalıcı donmuş toprak' },
      { word: 'destabilizing', definition: 'making something less stable or secure', turkish: 'istikrarsızlaştıran' },
      { word: 'precipitation', definition: 'rain, snow, or other water falling from the sky', turkish: 'yağış' },
      { word: 'adaptation', definition: 'the process of adjusting to new conditions', turkish: 'uyum' },
      { word: 'mitigation', definition: 'actions to reduce the severity of something', turkish: 'azaltma' },
      { word: 'infrastructure', definition: 'basic physical systems of a community (roads, buildings)', turkish: 'altyapı' },
    ],
  },

  // ============================================================
  // CLB 8 — OPINION
  // ============================================================
  {
    id: 'reading-immigration-debate',
    title: 'Debate on Immigration Policy',
    description: 'Read an opinion piece about immigration policy and answer questions.',
    passageType: 'opinion',
    clbLevel: 8,
    icon: '💬',
    timeLimit: 360,
    passage:
      'Canada\'s Immigration System Needs Reform, Not Restriction\nBy Dr. Fatima Al-Rashid, Policy Analyst — The Globe and Mail, Opinion\n\nIn recent months, public debate about immigration has intensified, with some commentators calling for significant reductions to Canada\'s immigration targets. While concerns about housing affordability and infrastructure strain are legitimate, I argue that drastically cutting immigration would be both economically **shortsighted** and socially **counterproductive**.\n\nCanada faces a **demographic** challenge that immigration helps address. With a fertility rate of 1.33 children per woman — well below the replacement level of 2.1 — and an aging population, the country relies on immigration to sustain its workforce and fund public services. Without immigration, Statistics Canada projects that population growth would **stagnate** by 2040, placing enormous pressure on healthcare and pension systems.\n\nThe real issue is not the number of newcomers but rather the infrastructure and support systems that receive them. Housing construction has not kept pace with population growth — a planning failure, not an immigration failure. Similarly, **credential** recognition processes remain painfully slow, with thousands of internationally trained doctors, engineers, and nurses unable to practise their professions in Canada.\n\nRather than reducing numbers, the government should invest in faster housing development, streamline foreign credential recognition, and ensure that newcomers are distributed more evenly across the country rather than concentrating in Toronto, Vancouver, and Montreal. Regional immigration programs in provinces like Manitoba and Nova Scotia have shown promising results in matching newcomers with communities that need them.\n\nImmigration has always been central to Canada\'s identity and prosperity. The solution to current challenges lies in better planning and smarter **integration**, not in closing the door.',
    questions: [
      {
        id: 'reading-immigration-debate-q1',
        question: 'What is the author\'s main argument about immigration policy?',
        options: [
          'Canada should significantly reduce the number of immigrants it accepts',
          'Immigration should be reformed and better managed, not restricted',
          'Canada should only accept immigrants with high-level professional skills',
          'Immigration levels should be determined by each province independently',
        ],
        correctIndex: 1,
        explanation:
          'The title and conclusion make the argument clear: Canada needs immigration reform and better planning, not restriction. The author advocates for better infrastructure and integration rather than reducing numbers.',
      },
      {
        id: 'reading-immigration-debate-q2',
        question: 'Why does the author mention Canada\'s fertility rate?',
        options: [
          'To argue that Canadian families should have more children',
          'To show that Canada needs immigration to maintain its population and workforce',
          'To criticize the government\'s family support policies',
          'To compare Canada with other developed countries',
        ],
        correctIndex: 1,
        explanation:
          'The author cites the low fertility rate (1.33, below the 2.1 replacement level) to support the argument that Canada depends on immigration to sustain its population, workforce, and public services.',
      },
      {
        id: 'reading-immigration-debate-q3',
        question: 'According to the author, what is the real cause of housing affordability problems?',
        options: [
          'Too many immigrants arriving each year',
          'Foreign investors buying Canadian property',
          'Housing construction not keeping pace with population growth',
          'Provincial governments blocking new housing developments',
        ],
        correctIndex: 2,
        explanation:
          'The author frames housing as a planning problem: "Housing construction has not kept pace with population growth — a planning failure, not an immigration failure."',
      },
      {
        id: 'reading-immigration-debate-q4',
        question: 'What does the phrase "economically shortsighted" imply about cutting immigration?',
        options: [
          'It would save money in the short term only',
          'It would cause immediate economic damage',
          'It fails to consider the long-term economic consequences',
          'It would make Canada\'s economy stronger in the future',
        ],
        correctIndex: 2,
        explanation:
          '"Shortsighted" means focusing only on immediate effects without considering future consequences. The author implies that cutting immigration might seem beneficial now but would harm Canada\'s economy in the long run.',
      },
      {
        id: 'reading-immigration-debate-q5',
        question: 'Which solution does the author propose for better immigration outcomes?',
        options: [
          'Concentrating newcomers in the three largest cities for better services',
          'Distributing newcomers more evenly across the country through regional programs',
          'Requiring all immigrants to live in rural areas for five years',
          'Limiting immigration to only French-speaking applicants',
        ],
        correctIndex: 1,
        explanation:
          'The author suggests "newcomers are distributed more evenly across the country" and cites regional programs in Manitoba and Nova Scotia as successful examples.',
      },
    ],
    keyVocabulary: [
      { word: 'demographic', definition: 'relating to the structure of a population', turkish: 'demografik' },
      { word: 'shortsighted', definition: 'not considering long-term consequences', turkish: 'kısa görüşlü' },
      { word: 'counterproductive', definition: 'having the opposite of the desired effect', turkish: 'ters etki yapan' },
      { word: 'credential', definition: 'a qualification or achievement that proves ability', turkish: 'yeterlilik belgesi' },
      { word: 'stagnate', definition: 'to stop growing or developing', turkish: 'durgunlaşmak' },
      { word: 'integration', definition: 'the process of becoming a full member of a group', turkish: 'entegrasyon' },
    ],
  },

  // ============================================================
  // CLB 8 — DIAGRAM
  // ============================================================
  {
    id: 'reading-benefits-comparison',
    title: 'Government Benefits Comparison',
    description: 'Read a comparison of government benefits and answer questions.',
    passageType: 'diagram',
    clbLevel: 8,
    icon: '📊',
    timeLimit: 360,
    passage:
      'GOVERNMENT OF CANADA — COMPARISON OF KEY INCOME SUPPORT BENEFITS (2026)\n\nCanada Child Benefit (CCB):\n- **Eligibility**: Families with children under 18; must file annual tax return\n- Maximum Annual Benefit: $7,787 per child under 6; $6,570 per child aged 6–17\n- Income **Threshold**: Benefit begins to reduce when family net income exceeds $36,502\n- Payment Frequency: Monthly, on the 20th of each month\n- **Taxable**: No\n- Application: Automatically assessed when child is registered at birth; newcomers must apply through CRA\n\nOld Age Security (OAS):\n- **Eligibility**: Canadian citizens or legal residents aged 65+; must have lived in Canada for at least 10 years after age 18\n- Maximum Monthly Payment: $727.67 (ages 65–74); $800.44 (ages 75+)\n- Income **Threshold**: Benefits reduced through OAS **clawback** when individual net income exceeds $90,997\n- Payment Frequency: Monthly\n- **Taxable**: Yes\n- Application: May be automatically enrolled; otherwise apply through Service Canada\n\nEmployment Insurance (EI) — Regular Benefits:\n- **Eligibility**: Workers who lost their job through no fault of their own; must have accumulated 420–700 **insurable** hours (varies by region)\n- Maximum Weekly Benefit: $668 (55% of average insurable weekly earnings)\n- Duration: 14 to 45 weeks, depending on hours worked and regional unemployment rate\n- Waiting Period: One-week unpaid waiting period before benefits begin\n- **Taxable**: Yes\n- Application: Apply online through Service Canada within 4 weeks of last day of work\n\nGuaranteed Income **Supplement** (GIS):\n- **Eligibility**: Low-income OAS recipients; must be 65+ and living in Canada\n- Maximum Monthly Payment: $1,086.88 (single); $654.23 (per person in a couple)\n- Income **Threshold**: Must have annual income below $21,624 (single) or combined income below $28,560 (couple)\n- Payment Frequency: Monthly, combined with OAS payment\n- **Taxable**: No\n- Application: Often automatic for tax filers; otherwise apply through Service Canada',
    questions: [
      {
        id: 'reading-benefits-comparison-q1',
        question: 'Which benefit provides the highest maximum annual payment per recipient?',
        options: [
          'Canada Child Benefit (for a child under 6)',
          'Old Age Security (for ages 75+)',
          'Guaranteed Income Supplement (single)',
          'Employment Insurance (maximum duration)',
        ],
        correctIndex: 2,
        explanation:
          'GIS for a single person is $1,086.88/month, which equals approximately $13,042.56 per year. CCB maximum is $7,787/year. OAS for 75+ is $800.44/month ($9,605.28/year). EI at max $668/week for 45 weeks is $30,060, but this is temporary and not a standard annual benefit.',
      },
      {
        id: 'reading-benefits-comparison-q2',
        question: 'A newcomer to Canada with a 4-year-old child wants to apply for the Canada Child Benefit. What should they know?',
        options: [
          'They are automatically enrolled and do not need to do anything',
          'They must apply through CRA and file an annual tax return',
          'They must wait until the child starts school to apply',
          'Newcomers are not eligible for the Canada Child Benefit',
        ],
        correctIndex: 1,
        explanation:
          'The document states that newcomers must apply through CRA (unlike Canadian-born children who are automatically assessed at birth) and that families must file an annual tax return to maintain eligibility.',
      },
      {
        id: 'reading-benefits-comparison-q3',
        question: 'Which of the following benefits are NOT taxable?',
        options: [
          'OAS and EI',
          'CCB and GIS',
          'EI and GIS',
          'OAS and CCB',
        ],
        correctIndex: 1,
        explanation:
          'According to the comparison, both the Canada Child Benefit and the Guaranteed Income Supplement are listed as not taxable. OAS and EI are both taxable.',
      },
      {
        id: 'reading-benefits-comparison-q4',
        question: 'What does the term "clawback" most likely mean in the context of OAS benefits?',
        options: [
          'An additional bonus payment for long-term residents',
          'A gradual reduction of benefits as income increases above a threshold',
          'A penalty for late application',
          'A one-time fee charged to process the benefit application',
        ],
        correctIndex: 1,
        explanation:
          'In the context of government benefits, a "clawback" refers to the gradual reduction or recovery of benefits when a recipient\'s income exceeds a certain threshold. The OAS clawback begins when net income exceeds $90,997.',
      },
      {
        id: 'reading-benefits-comparison-q5',
        question: 'A 68-year-old single person living in Canada with an annual income of $18,000 receiving OAS would likely also qualify for which additional benefit?',
        options: [
          'Canada Child Benefit',
          'Employment Insurance',
          'Guaranteed Income Supplement',
          'No additional benefits',
        ],
        correctIndex: 2,
        explanation:
          'The person is 65+, receiving OAS, living in Canada, and has an annual income of $18,000, which is below the GIS single threshold of $21,624. They meet all eligibility requirements for the Guaranteed Income Supplement.',
      },
    ],
    keyVocabulary: [
      { word: 'eligibility', definition: 'the state of meeting the requirements for something', turkish: 'uygunluk' },
      { word: 'threshold', definition: 'a level or point at which something starts', turkish: 'eşik' },
      { word: 'taxable', definition: 'subject to tax; must be reported as income', turkish: 'vergiye tabi' },
      { word: 'clawback', definition: 'gradual reduction of benefits as income increases', turkish: 'geri alma' },
      { word: 'insurable', definition: 'qualifying for insurance coverage', turkish: 'sigortalanabilir' },
      { word: 'supplement', definition: 'an additional amount added to make up for a lack', turkish: 'ek/takviye' },
    ],
  },
];

export const readingPassages: ReadingPassage[] = [
  ...existingPassages,
  ...newPassagesA,
  ...newPassagesB,
  ...newPassagesC,
  ...newPassagesD,
  ...newPassagesE,
];
