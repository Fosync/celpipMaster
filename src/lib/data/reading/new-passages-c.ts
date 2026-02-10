import type { ReadingPassage } from './types';

export const newPassagesC: ReadingPassage[] = [
  // ============================================================
  // CLB 5 — CORRESPONDENCE: Welcome to Your New Gym
  // ============================================================
  {
    id: 'reading-gym-welcome',
    title: 'Welcome to Your New Gym',
    description: 'Read an information email about gym membership rules, hours, and classes.',
    passageType: 'correspondence',
    clbLevel: 5,
    icon: '🏋️',
    timeLimit: 300,
    passage:
      'From: Fitness Plus Team\nTo: New Members\nSubject: Welcome to Fitness Plus!\n\nDear New Member,\n\nCongratulations on joining Fitness Plus! We are excited to have you as part of our community. This email will help you get started and answer some common questions about your **membership**.\n\nOur gym is open seven days a week. On weekdays (Monday to Friday), we are open from 6:00 AM to 10:00 PM. On Saturdays, our hours are 7:00 AM to 8:00 PM, and on Sundays we are open from 8:00 AM to 6:00 PM. Please note that we are closed on all **statutory** holidays, including Canada Day, Thanksgiving, and Christmas Day.\n\nAs a new member, you receive a free **orientation** session with one of our certified trainers. During this 30-minute session, your trainer will show you how to use the equipment safely and help you create a basic workout plan. Please visit the front desk to book your orientation within your first two weeks.\n\nWe offer a variety of group fitness **classes** at no extra cost. Popular options include yoga on Monday and Wednesday evenings, spinning on Tuesday and Thursday mornings, and Zumba every Saturday afternoon. A full **schedule** is posted on the bulletin board near the entrance and on our website at www.fitnesspluscanada.ca.\n\nPlease remember a few important rules. All members must bring a towel and wipe down **equipment** after use. Outside shoes are not allowed in the workout area — please bring clean **indoor** shoes. Lockers are available for daily use, but you must bring your own lock. We are not responsible for lost or stolen items.\n\nYour membership is billed on the first of each month. If you wish to cancel, you must give 30 days written **notice**. You can submit a cancellation form at the front desk or email us at cancel@fitnesspluscanada.ca.\n\nWe hope you enjoy your fitness journey with us!\n\nBest regards,\nThe Fitness Plus Team\nOttawa, Ontario',
    questions: [
      {
        id: 'reading-gym-welcome-q1',
        question: 'What is the main purpose of this email?',
        options: [
          'To advertise a sale on gym memberships',
          'To welcome new members and explain gym policies',
          'To announce that the gym is closing permanently',
          'To invite members to a special holiday event',
        ],
        correctIndex: 1,
        explanation:
          'The email is addressed to new members and provides information about hours, classes, rules, and membership details to help them get started.',
      },
      {
        id: 'reading-gym-welcome-q2',
        question: 'What time does the gym close on Sundays?',
        options: [
          '8:00 PM',
          '10:00 PM',
          '6:00 PM',
          '7:00 PM',
        ],
        correctIndex: 2,
        explanation:
          'The email states that on Sundays the gym is open from 8:00 AM to 6:00 PM.',
      },
      {
        id: 'reading-gym-welcome-q3',
        question: 'What is included free for new members?',
        options: [
          'A personal locker with a lock',
          'A 30-minute orientation session with a trainer',
          'A one-month supply of protein shakes',
          'A free pair of indoor shoes',
        ],
        correctIndex: 1,
        explanation:
          'The email says new members receive a free orientation session with a certified trainer to learn how to use the equipment and create a workout plan.',
      },
      {
        id: 'reading-gym-welcome-q4',
        question: 'Which of the following is a gym rule mentioned in the email?',
        options: [
          'Members must shower before entering the gym',
          'Food and drinks are not allowed inside the building',
          'Members must wipe down equipment after use',
          'Music players are not permitted in the gym',
        ],
        correctIndex: 2,
        explanation:
          'The email clearly states that all members must bring a towel and wipe down equipment after use.',
      },
      {
        id: 'reading-gym-welcome-q5',
        question: 'How can a member cancel their membership?',
        options: [
          'By calling the gym manager directly',
          'By giving 30 days written notice at the front desk or by email',
          'By simply stopping payments on the first of the month',
          'By returning their membership card to any location',
        ],
        correctIndex: 1,
        explanation:
          'The email states members must give 30 days written notice and can submit a cancellation form at the front desk or email cancel@fitnesspluscanada.ca.',
      },
    ],
    keyVocabulary: [
      { word: 'membership', definition: 'the state of being a member of an organization', turkish: 'uyelik' },
      { word: 'orientation', definition: 'an introduction or training session for new members or employees', turkish: 'oryantasyon' },
      { word: 'statutory', definition: 'required or defined by law', turkish: 'yasal' },
      { word: 'equipment', definition: 'tools or machines used for a particular purpose', turkish: 'ekipman' },
      { word: 'schedule', definition: 'a plan that lists times and activities', turkish: 'program' },
      { word: 'notice', definition: 'a formal announcement or warning given in advance', turkish: 'bildirim' },
    ],
  },

  // ============================================================
  // CLB 5 — CORRESPONDENCE: Neighbour's Noise Complaint
  // ============================================================
  {
    id: 'reading-noise-complaint',
    title: "Neighbour's Noise Complaint",
    description: 'Read an apartment building notice about noise policy and quiet hours.',
    passageType: 'correspondence',
    clbLevel: 5,
    icon: '🔇',
    timeLimit: 300,
    passage:
      'From: Riverside Towers Property Management\nTo: All Residents — 150 King Street West, Hamilton, ON\nSubject: Reminder — Building Noise Policy\n\nDear Residents,\n\nWe are writing to remind everyone about our building\'s noise **policy**. Over the past two weeks, we have received several **complaints** from residents about loud music, parties, and excessive noise during late-night hours. We want to make sure that everyone can enjoy a peaceful and comfortable living environment.\n\nOur building has a strict **quiet hours** policy. Quiet hours are in effect every night from 10:00 PM to 7:00 AM on weekdays, and from 11:00 PM to 8:00 AM on weekends. During these hours, residents must keep noise to a **minimum**. This includes loud music, television volume, parties, and any construction or renovation work.\n\nOutside of quiet hours, we still ask that all residents be **considerate** of their neighbours. Noise should not be loud enough to be heard clearly from other units. If you are planning a gathering or party, please let your immediate neighbours know in advance and keep the noise at a **reasonable** level.\n\nIf you experience a noise problem, we encourage you to first try speaking with your neighbour directly. Many issues can be resolved through a polite conversation. If the noise continues after you have spoken to your neighbour, please contact our management office at 905-555-0178 or email us at office@riversidetowers.ca. We will follow up with the resident within 48 hours.\n\nPlease be aware that repeated noise **violations** may result in formal warnings. After three written warnings, the property management team has the right to begin **eviction** proceedings as outlined in your lease agreement.\n\nWe appreciate your cooperation in making Riverside Towers a pleasant place to live for everyone.\n\nSincerely,\nSarah Mitchell\nBuilding Manager\nRiverside Towers Property Management',
    questions: [
      {
        id: 'reading-noise-complaint-q1',
        question: 'Why was this notice sent to residents?',
        options: [
          'To inform residents about a new building being constructed nearby',
          'To remind residents about the noise policy due to recent complaints',
          'To announce a building-wide party for all residents',
          'To invite residents to a community meeting about renovations',
        ],
        correctIndex: 1,
        explanation:
          'The notice explains that several complaints have been received about loud noise and reminds everyone of the building\'s noise policy.',
      },
      {
        id: 'reading-noise-complaint-q2',
        question: 'What time do quiet hours begin on a Saturday night?',
        options: [
          '9:00 PM',
          '10:00 PM',
          '11:00 PM',
          '12:00 AM',
        ],
        correctIndex: 2,
        explanation:
          'The notice states that quiet hours on weekends are from 11:00 PM to 8:00 AM.',
      },
      {
        id: 'reading-noise-complaint-q3',
        question: 'What should a resident do first if a neighbour is being too loud?',
        options: [
          'Call the police immediately',
          'Write a formal complaint to the city',
          'Try speaking with the neighbour directly',
          'Move to a different unit in the building',
        ],
        correctIndex: 2,
        explanation:
          'The notice encourages residents to first try speaking with their neighbour directly, as many issues can be resolved through a polite conversation.',
      },
      {
        id: 'reading-noise-complaint-q4',
        question: 'What can happen after three written warnings for noise violations?',
        options: [
          'The resident will receive a fine of $500',
          'The resident must attend a noise awareness workshop',
          'The management may begin eviction proceedings',
          'The resident will be moved to a different floor',
        ],
        correctIndex: 2,
        explanation:
          'The notice states that after three written warnings, the property management team has the right to begin eviction proceedings as outlined in the lease agreement.',
      },
      {
        id: 'reading-noise-complaint-q5',
        question: 'What does the word "considerate" most likely mean in this notice?',
        options: [
          'Unaware of others around you',
          'Loud and energetic',
          'Thoughtful and respectful of others',
          'Frightened or nervous',
        ],
        correctIndex: 2,
        explanation:
          '"Considerate" means being thoughtful and showing care for the needs and feelings of others. The notice asks residents to be mindful of their neighbours even outside quiet hours.',
      },
    ],
    keyVocabulary: [
      { word: 'policy', definition: 'a set of rules or guidelines adopted by an organization', turkish: 'politika' },
      { word: 'complaints', definition: 'expressions of dissatisfaction or problems reported', turkish: 'sikayetler' },
      { word: 'minimum', definition: 'the smallest amount possible', turkish: 'asgari' },
      { word: 'considerate', definition: 'thoughtful and respectful of other people', turkish: 'dusunceli' },
      { word: 'violations', definition: 'actions that break a rule or law', turkish: 'ihlaller' },
      { word: 'eviction', definition: 'the legal process of forcing someone to leave a property', turkish: 'tahliye' },
      { word: 'reasonable', definition: 'fair and sensible; not too much', turkish: 'makul' },
    ],
  },

  // ============================================================
  // CLB 5 — INFORMATION: School Lunch Program
  // ============================================================
  {
    id: 'reading-school-lunch',
    title: 'School Lunch Program',
    description: 'Read an elementary school newsletter about a new lunch menu and meal options.',
    passageType: 'information',
    clbLevel: 5,
    icon: '🍎',
    timeLimit: 300,
    passage:
      'Pinewood Elementary School Newsletter — March 2026\n\nNew School Lunch Program Starting April 7\n\nDear Parents and Guardians,\n\nWe are pleased to announce that Pinewood Elementary will be launching a new school lunch **program** starting Monday, April 7, 2026. The program is being offered in partnership with Fresh Kids Catering, a local company that provides healthy, **nutritious** meals to schools across Ontario.\n\nThe new lunch menu will change weekly and will include a main meal, a side dish, a piece of fruit, and a drink. Every meal is prepared fresh each morning and delivered to the school by 11:00 AM. All meals meet the **guidelines** set by the Ontario Ministry of Education for healthy school food.\n\nHere is a sample of what a typical week might look like:\n\nMonday: Grilled chicken wrap with salad and apple juice\nTuesday: Vegetable pasta with garlic bread and milk\nWednesday: Turkey burger with carrot sticks and orange juice\nThursday: Rice bowl with grilled tofu and mixed vegetables\nFriday: Pizza slice with Caesar salad and water\n\nThe cost of the lunch program is $6.50 per meal, or $30.00 per week if you sign up for all five days. Payments can be made online through the school website or by sending a cheque to the school office. Families who receive **subsidized** lunch support will continue to receive their meals at no cost.\n\nPlease note that all meals are nut-free. If your child has any other food **allergies** or dietary restrictions, please fill out the Dietary Needs Form available at the front office or on the school website. Fresh Kids Catering will do their best to provide safe **alternatives** for children with special dietary needs.\n\nTo register your child for the lunch program, please complete the online **registration** form by Friday, March 28. If you have any questions, contact the school office at 613-555-0299 or email us at office@pinewoodelementary.ca.\n\nWe look forward to providing your children with healthy and delicious meals!\n\nSincerely,\nMs. Angela Torres\nPrincipal, Pinewood Elementary School\nOttawa, Ontario',
    questions: [
      {
        id: 'reading-school-lunch-q1',
        question: 'When does the new lunch program start?',
        options: [
          'March 1, 2026',
          'March 28, 2026',
          'April 7, 2026',
          'April 14, 2026',
        ],
        correctIndex: 2,
        explanation:
          'The newsletter clearly states that the new lunch program starts on Monday, April 7, 2026.',
      },
      {
        id: 'reading-school-lunch-q2',
        question: 'How much does it cost for a full week of lunches?',
        options: [
          '$25.00',
          '$30.00',
          '$32.50',
          '$35.00',
        ],
        correctIndex: 1,
        explanation:
          'The newsletter states the cost is $6.50 per meal, or $30.00 per week if you sign up for all five days.',
      },
      {
        id: 'reading-school-lunch-q3',
        question: 'What should parents do if their child has food allergies?',
        options: [
          'Call Fresh Kids Catering directly',
          'Send a letter to the school board',
          'Fill out the Dietary Needs Form at the office or on the website',
          'Keep their child home on days with allergens in the menu',
        ],
        correctIndex: 2,
        explanation:
          'The newsletter instructs parents to fill out the Dietary Needs Form available at the front office or on the school website if their child has allergies or dietary restrictions.',
      },
      {
        id: 'reading-school-lunch-q4',
        question: 'What does the word "subsidized" most likely mean?',
        options: [
          'Paid for in full by the parent',
          'Partially or fully funded by an outside source to reduce cost',
          'Served only on certain days of the week',
          'Prepared at home and brought to school',
        ],
        correctIndex: 1,
        explanation:
          '"Subsidized" means financially supported by the government or another organization to reduce or eliminate the cost for the family. The newsletter says families with subsidized support receive meals at no cost.',
      },
      {
        id: 'reading-school-lunch-q5',
        question: 'What is true about the meals provided by the lunch program?',
        options: [
          'They include a dessert with every meal',
          'They are prepared the night before and refrigerated',
          'They are all nut-free and meet provincial education guidelines',
          'They are only available to students in grades 4 through 6',
        ],
        correctIndex: 2,
        explanation:
          'The newsletter states that all meals are nut-free and meet the guidelines set by the Ontario Ministry of Education for healthy school food.',
      },
    ],
    keyVocabulary: [
      { word: 'nutritious', definition: 'full of nutrients that are good for health', turkish: 'besleyici' },
      { word: 'guidelines', definition: 'official rules or recommendations to follow', turkish: 'yonergeler' },
      { word: 'subsidized', definition: 'partially or fully paid for by the government or another organization', turkish: 'subvansiyonlu' },
      { word: 'allergies', definition: 'harmful physical reactions to certain foods or substances', turkish: 'alerjiler' },
      { word: 'alternatives', definition: 'other options or choices available', turkish: 'alternatifler' },
      { word: 'registration', definition: 'the process of signing up officially', turkish: 'kayit' },
    ],
  },

  // ============================================================
  // CLB 5 — INFORMATION: Weekend Farmers Market
  // ============================================================
  {
    id: 'reading-farmers-market',
    title: 'Weekend Farmers Market',
    description: 'Read a flyer advertising a local farmers market with vendor, hours, and parking details.',
    passageType: 'information',
    clbLevel: 5,
    icon: '🥕',
    timeLimit: 300,
    passage:
      'Lakeside Farmers Market — Open Every Saturday!\n\nJoin us at the Lakeside Farmers Market, located at 45 Waterfront Drive in beautiful Kelowna, British Columbia. Every Saturday from May through October, local **vendors** come together to offer the freshest produce, artisan goods, and homemade treats in the Okanagan region.\n\nMarket Hours:\nMay to August: 8:00 AM to 2:00 PM\nSeptember to October: 9:00 AM to 1:00 PM\n\nWhat You Will Find:\nOur market features over 60 local vendors selling a wide **variety** of products. You can find farm-fresh fruits and vegetables, including cherries, peaches, apples, tomatoes, and corn — all grown within 100 kilometres of Kelowna. We also have vendors offering **organic** eggs, local honey, artisan bread, handmade cheese, jams, and baked goods.\n\nIn addition to food, you will discover **handcrafted** items such as pottery, candles, soaps, and jewelry made by local artists. Every week, we feature a different live musician to create a fun and relaxing **atmosphere** while you shop.\n\nFamily-Friendly Activities:\nThe Lakeside Farmers Market is a great place for the whole family. Children can enjoy face painting, a petting zoo with farm animals, and a special kids\' craft station. There is also a picnic area with tables and benches where you can sit and enjoy your purchases by the lake.\n\nParking and Getting Here:\nFree parking is available in the Waterfront Community Centre lot, located just a two-minute walk from the market. We encourage visitors to walk, bike, or use public **transit** when possible. The Route 8 city bus stops directly in front of the market entrance.\n\nVendor Applications:\nIf you are a local farmer, baker, or artisan interested in selling at the market, please visit our website at www.lakesidefarmersmarket.ca to download a vendor **application** form. The deadline for the 2026 season is March 15.\n\nWe look forward to seeing you at the market!\n\nLakeside Farmers Market Association\nKelowna, British Columbia',
    questions: [
      {
        id: 'reading-farmers-market-q1',
        question: 'When is the farmers market open during the summer months?',
        options: [
          '9:00 AM to 1:00 PM',
          '8:00 AM to 2:00 PM',
          '7:00 AM to 3:00 PM',
          '10:00 AM to 4:00 PM',
        ],
        correctIndex: 1,
        explanation:
          'The flyer states that from May to August, the market is open from 8:00 AM to 2:00 PM.',
      },
      {
        id: 'reading-farmers-market-q2',
        question: 'What type of items can you NOT find at this market?',
        options: [
          'Fresh fruits and vegetables',
          'Handmade pottery and candles',
          'Electronic devices and appliances',
          'Artisan bread and local honey',
        ],
        correctIndex: 2,
        explanation:
          'The flyer lists produce, baked goods, honey, cheese, and handcrafted items like pottery and candles, but does not mention electronic devices or appliances.',
      },
      {
        id: 'reading-farmers-market-q3',
        question: 'Where can visitors park for free?',
        options: [
          'On Waterfront Drive in front of the market',
          'At the Waterfront Community Centre lot nearby',
          'At the Route 8 bus terminal',
          'In the vendor loading zone behind the market',
        ],
        correctIndex: 1,
        explanation:
          'The flyer states that free parking is available in the Waterfront Community Centre lot, located a two-minute walk from the market.',
      },
      {
        id: 'reading-farmers-market-q4',
        question: 'What family-friendly activity is mentioned in the flyer?',
        options: [
          'A swimming pool for children',
          'Face painting and a petting zoo',
          'A bounce castle and water slides',
          'Free cooking classes for kids',
        ],
        correctIndex: 1,
        explanation:
          'The flyer mentions face painting, a petting zoo with farm animals, and a kids\' craft station as family-friendly activities.',
      },
      {
        id: 'reading-farmers-market-q5',
        question: 'What does the word "vendors" mean in this flyer?',
        options: [
          'People who buy products at the market',
          'People who sell products or goods',
          'Volunteers who organize the market',
          'Musicians who perform at the market',
        ],
        correctIndex: 1,
        explanation:
          '"Vendors" refers to people or businesses that sell goods or products. In this flyer, vendors are the farmers, bakers, and artisans who sell their products at the market.',
      },
    ],
    keyVocabulary: [
      { word: 'vendors', definition: 'people or businesses that sell goods or products', turkish: 'saticilar' },
      { word: 'variety', definition: 'a range of different things or types', turkish: 'cesitlilik' },
      { word: 'organic', definition: 'produced without artificial chemicals or pesticides', turkish: 'organik' },
      { word: 'handcrafted', definition: 'made by hand with skill, not by a machine', turkish: 'el yapimi' },
      { word: 'atmosphere', definition: 'the feeling or mood of a place', turkish: 'ortam' },
      { word: 'transit', definition: 'public transportation such as buses and trains', turkish: 'toplu tasima' },
      { word: 'application', definition: 'a formal written request to join or participate', turkish: 'basvuru' },
    ],
  },

  // ============================================================
  // CLB 5 — CORRESPONDENCE: Bus Route Change Notice
  // ============================================================
  {
    id: 'reading-bus-route-change',
    title: 'Bus Route Change Notice',
    description: 'Read a city transit authority letter about temporary bus route changes.',
    passageType: 'correspondence',
    clbLevel: 5,
    icon: '🚌',
    timeLimit: 300,
    passage:
      'From: Winnipeg Transit Authority\nTo: All Transit Riders\nSubject: Temporary Route Changes — Route 36 and Route 42\n\nDear Transit Riders,\n\nWe are writing to inform you of temporary changes to two bus routes in the Winnipeg Transit network. Due to road construction on Portage Avenue between Main Street and Donald Street, Routes 36 and 42 will be **detoured** starting Monday, March 17, 2026. The construction is expected to last approximately eight weeks, with normal service **resuming** by Monday, May 12, 2026.\n\nRoute 36 — Northbound Changes:\nBuses on Route 36 travelling north will no longer stop at the Portage and Main bus stop. Instead, buses will turn right on Graham Avenue, continue to Smith Street, and then rejoin Portage Avenue past the construction zone. A **temporary** bus stop has been set up at the corner of Graham Avenue and Smith Street. This detour will add approximately 5 minutes to northbound travel times.\n\nRoute 42 — Eastbound Changes:\nRoute 42 buses travelling east will be rerouted via Broadway Avenue. Buses will follow Broadway from Colony Street to Main Street, then continue on their regular route. The Portage and Carlton stop will not be in **service** during this period. A temporary stop has been added on Broadway at Hargrave Street. Eastbound trips may take up to 7 minutes longer than usual.\n\nImportant Information:\n- All other stops on Routes 36 and 42 remain **unchanged**.\n- Bus **frequency** will stay the same during the detour period. Route 36 runs every 12 minutes during peak hours and every 20 minutes off-peak. Route 42 runs every 15 minutes during peak hours and every 25 minutes off-peak.\n- Real-time bus tracking is available through the Winnipeg Transit app and on our website at www.winnipegtransit.com.\n\nWe understand that these changes may cause some **inconvenience**, and we appreciate your patience. If you need help planning your trip during the detour, please call our customer service line at 204-555-0311 or visit any Winnipeg Transit information kiosk.\n\nThank you for riding with Winnipeg Transit.\n\nSincerely,\nWinnipeg Transit Authority\nCity of Winnipeg, Manitoba',
    questions: [
      {
        id: 'reading-bus-route-change-q1',
        question: 'Why are the bus routes being changed?',
        options: [
          'Because of a city-wide transit strike',
          'Because of road construction on Portage Avenue',
          'Because of a winter storm warning',
          'Because new bus routes are being added permanently',
        ],
        correctIndex: 1,
        explanation:
          'The letter states the changes are due to road construction on Portage Avenue between Main Street and Donald Street.',
      },
      {
        id: 'reading-bus-route-change-q2',
        question: 'How long is the construction expected to last?',
        options: [
          'Four weeks',
          'Six weeks',
          'Eight weeks',
          'Ten weeks',
        ],
        correctIndex: 2,
        explanation:
          'The letter says the construction will last approximately eight weeks, from March 17 to May 12, 2026.',
      },
      {
        id: 'reading-bus-route-change-q3',
        question: 'How much extra time might Route 42 eastbound trips take?',
        options: [
          'Up to 3 minutes longer',
          'Up to 5 minutes longer',
          'Up to 7 minutes longer',
          'Up to 10 minutes longer',
        ],
        correctIndex: 2,
        explanation:
          'The letter states that eastbound Route 42 trips may take up to 7 minutes longer than usual.',
      },
      {
        id: 'reading-bus-route-change-q4',
        question: 'What has NOT changed during the construction period?',
        options: [
          'The location of the Portage and Main bus stop',
          'The direction of Route 36 northbound',
          'The frequency of buses on Routes 36 and 42',
          'The streets that Route 42 uses going east',
        ],
        correctIndex: 2,
        explanation:
          'The letter clearly states that bus frequency will stay the same during the detour period for both routes.',
      },
      {
        id: 'reading-bus-route-change-q5',
        question: 'What does the word "detoured" mean in this letter?',
        options: [
          'Cancelled until further notice',
          'Redirected along a different path to avoid an obstacle',
          'Delayed by more than one hour',
          'Running on a reduced schedule',
        ],
        correctIndex: 1,
        explanation:
          '"Detoured" means being rerouted or redirected along a different path because the usual route is blocked, in this case by road construction.',
      },
    ],
    keyVocabulary: [
      { word: 'detoured', definition: 'redirected along a different route because the usual path is blocked', turkish: 'yonlendirilmis' },
      { word: 'resuming', definition: 'starting again after a pause or interruption', turkish: 'devam etme' },
      { word: 'temporary', definition: 'lasting for only a limited period of time', turkish: 'gecici' },
      { word: 'frequency', definition: 'how often something happens or occurs', turkish: 'siklik' },
      { word: 'inconvenience', definition: 'trouble or difficulty that causes discomfort', turkish: 'rahatsizlik' },
      { word: 'unchanged', definition: 'remaining the same; not different', turkish: 'degismemis' },
    ],
  },

  // ============================================================
  // CLB 6 — CORRESPONDENCE: Working From Home Policy
  // ============================================================
  {
    id: 'reading-wfh-policy',
    title: 'Working From Home Policy',
    description: 'Read a company memo about hybrid work guidelines and expectations.',
    passageType: 'correspondence',
    clbLevel: 6,
    icon: '💼',
    timeLimit: 360,
    passage:
      'From: Human Resources Department, Maple Solutions Inc.\nTo: All Employees\nSubject: Updated Hybrid Work Policy — Effective April 1, 2026\n\nDear Team,\n\nFollowing the results of our recent employee **survey** and discussions with department managers, we are pleased to announce our updated hybrid work policy. This policy takes effect on April 1, 2026, and replaces all previous remote work **arrangements**.\n\nEligibility:\nAll full-time employees who have completed their six-month **probationary** period are eligible for the hybrid work program. Part-time employees and contractors should speak with their managers to discuss individual arrangements. Some roles that require daily on-site presence — such as reception, facilities **maintenance**, and warehouse operations — are not eligible for remote work days.\n\nSchedule:\nUnder the new policy, eligible employees may work from home up to two days per week. Your specific remote days must be agreed upon with your direct **supervisor** and should remain consistent each week. All employees are required to be in the office on Tuesdays and Thursdays, as these will serve as **collaboration** days for team meetings, training sessions, and cross-department projects.\n\nExpectations:\nWhile working from home, employees are expected to be available during core business hours (9:00 AM to 4:00 PM EST). You must respond to emails and messages within a **reasonable** timeframe, typically within one hour during core hours. All remote employees must use the company VPN when accessing internal systems and must follow our **cybersecurity** guidelines at all times.\n\nEquipment and Expenses:\nMaple Solutions will provide a laptop and headset for remote work. Employees are responsible for ensuring they have a stable internet connection and a suitable workspace at home. The company will offer a one-time **stipend** of $300 to help cover the cost of a desk, chair, or other home office essentials. Receipts must be submitted to the Finance Department within 30 days of purchase.\n\nPerformance:\nManagers will evaluate remote work **performance** through regular check-ins, project deliverables, and quarterly reviews. If an employee\'s productivity or communication **declines** significantly while working remotely, their manager may adjust or revoke their hybrid work **privileges** with 14 days written notice.\n\nWe believe this balanced approach supports both employee well-being and team productivity. If you have questions about this policy, please contact HR at hr@maplesolutions.ca or attend the Q&A session scheduled for March 25 at 2:00 PM in the main conference room.\n\nBest regards,\nJennifer Okafor\nDirector of Human Resources\nMaple Solutions Inc.\nToronto, Ontario',
    questions: [
      {
        id: 'reading-wfh-policy-q1',
        question: 'Who is NOT eligible for the hybrid work program?',
        options: [
          'Full-time employees who have worked for more than six months',
          'Employees who have completed their probationary period',
          'Employees in roles that require daily on-site presence',
          'Employees who have a home office setup',
        ],
        correctIndex: 2,
        explanation:
          'The memo states that roles requiring daily on-site presence, such as reception, facilities maintenance, and warehouse operations, are not eligible for remote work days.',
      },
      {
        id: 'reading-wfh-policy-q2',
        question: 'Why must all employees be in the office on Tuesdays and Thursdays?',
        options: [
          'Because the office is only open two days a week',
          'Because those are designated collaboration days for meetings and projects',
          'Because the company VPN only works from the office',
          'Because managers are only available on those days',
        ],
        correctIndex: 1,
        explanation:
          'The memo explains that Tuesdays and Thursdays serve as collaboration days for team meetings, training sessions, and cross-department projects.',
      },
      {
        id: 'reading-wfh-policy-q3',
        question: 'What equipment does the company provide for remote work?',
        options: [
          'A laptop, headset, desk, and chair',
          'A laptop and headset only',
          'A desktop computer and monitor',
          'Nothing — employees must provide all their own equipment',
        ],
        correctIndex: 1,
        explanation:
          'The memo states that Maple Solutions will provide a laptop and headset for remote work. The $300 stipend is for employees to purchase their own desk, chair, or office essentials.',
      },
      {
        id: 'reading-wfh-policy-q4',
        question: 'What can happen if an employee\'s performance declines while working remotely?',
        options: [
          'They will be immediately terminated',
          'They will be transferred to a different department',
          'Their hybrid work privileges may be adjusted or revoked with 14 days notice',
          'Their salary will be reduced by 10 percent',
        ],
        correctIndex: 2,
        explanation:
          'The memo states that if productivity or communication declines significantly, a manager may adjust or revoke the employee\'s hybrid work privileges with 14 days written notice.',
      },
      {
        id: 'reading-wfh-policy-q5',
        question: 'What does the word "stipend" mean in this memo?',
        options: [
          'A loan that must be repaid within one year',
          'A fixed amount of money given for a specific purpose',
          'A monthly bonus added to an employee\'s salary',
          'A discount on company products',
        ],
        correctIndex: 1,
        explanation:
          'A "stipend" is a fixed amount of money provided for a specific purpose. Here, the $300 stipend is meant to help cover the cost of home office essentials like a desk or chair.',
      },
    ],
    keyVocabulary: [
      { word: 'survey', definition: 'a set of questions used to gather opinions or information', turkish: 'anket' },
      { word: 'probationary', definition: 'relating to a trial period to assess suitability', turkish: 'deneme suresi' },
      { word: 'collaboration', definition: 'the act of working together with others on a project', turkish: 'is birligi' },
      { word: 'cybersecurity', definition: 'protection of computer systems and data from digital threats', turkish: 'siber guvenlik' },
      { word: 'stipend', definition: 'a fixed regular payment for a specific purpose', turkish: 'odenek' },
      { word: 'privileges', definition: 'special rights or advantages given to a person or group', turkish: 'ayricaliklar' },
      { word: 'declines', definition: 'becomes worse or decreases in quality', turkish: 'azalir' },
    ],
  },

  // ============================================================
  // CLB 6 — INFORMATION: Tenant Insurance Guide
  // ============================================================
  {
    id: 'reading-tenant-insurance',
    title: 'Tenant Insurance Guide',
    description: 'Read a brochure explaining renter\'s insurance options and coverage details.',
    passageType: 'information',
    clbLevel: 6,
    icon: '🏠',
    timeLimit: 360,
    passage:
      'Understanding Tenant Insurance: A Guide for Renters in Canada\n\nPublished by the Canadian Insurance Bureau\n\nIf you rent an apartment, condo, or house in Canada, tenant insurance (also called renter\'s insurance) is one of the most important forms of **protection** you can have. While your landlord\'s insurance covers the building itself, it does not cover your personal **belongings** or any **liability** you may face as a tenant. That is where tenant insurance comes in.\n\nWhat Does Tenant Insurance Cover?\n\nTenant insurance typically includes three main types of coverage:\n\n1. Personal Property Coverage: This protects your belongings — such as furniture, electronics, clothing, and kitchen appliances — if they are damaged or destroyed by events like fire, water damage, theft, or **vandalism**. Most policies cover items both inside and outside your home. For example, if your laptop is stolen from your car, your tenant insurance may cover the cost of **replacement**.\n\n2. Liability Coverage: If someone is injured in your rental unit, or if you accidentally cause damage to another person\'s property, liability coverage helps pay for legal fees, medical bills, and repair costs. For instance, if you accidentally leave a tap running and cause water damage to the apartment below you, your liability coverage would help pay for the **repairs**.\n\n3. Additional Living Expenses: If your rental home becomes **uninhabitable** due to a covered event — such as a fire or major flood — this coverage pays for temporary living costs, including hotel stays, meals, and moving expenses, while your home is being repaired.\n\nHow Much Does It Cost?\n\nTenant insurance in Canada is surprisingly **affordable**. The average cost ranges from $20 to $50 per month, depending on factors such as your location, the size of your unit, the amount of coverage you choose, and your **deductible** (the amount you pay out of pocket before insurance kicks in). Choosing a higher deductible can lower your monthly **premium**.\n\nDo I Really Need It?\n\nMany landlords in Canada now require tenants to have insurance as a condition of their lease. Even if your landlord does not require it, tenant insurance is strongly **recommended**. Without it, you would have to pay out of pocket to replace all your belongings after a fire or break-in, which could cost thousands of dollars.\n\nHow to Get Tenant Insurance:\n\nYou can purchase tenant insurance from most major insurance companies in Canada, including through online quotes. Compare at least three providers to find the best combination of coverage and price. Make sure to read the policy carefully and understand what is and what is not covered.\n\nFor more information, visit www.ibc.ca or contact your local insurance **broker**.',
    questions: [
      {
        id: 'reading-tenant-insurance-q1',
        question: 'What does a landlord\'s insurance typically cover?',
        options: [
          'The tenant\'s personal belongings and furniture',
          'The building structure itself, not the tenant\'s possessions',
          'Both the building and the tenant\'s belongings',
          'Only common areas like hallways and lobbies',
        ],
        correctIndex: 1,
        explanation:
          'The brochure states that the landlord\'s insurance covers the building itself, but it does not cover the tenant\'s personal belongings or liability.',
      },
      {
        id: 'reading-tenant-insurance-q2',
        question: 'Which scenario would be covered by liability coverage?',
        options: [
          'Your television is damaged during a power outage',
          'You accidentally cause water damage to a neighbour\'s apartment below',
          'Your bicycle is stolen from the building\'s bike rack',
          'A fire destroys your clothing and furniture',
        ],
        correctIndex: 1,
        explanation:
          'The brochure specifically gives the example of accidentally leaving a tap running and causing water damage to the apartment below as a situation covered by liability insurance.',
      },
      {
        id: 'reading-tenant-insurance-q3',
        question: 'What does "additional living expenses" coverage pay for?',
        options: [
          'The cost of upgrading your apartment with new furniture',
          'Monthly rent increases imposed by your landlord',
          'Temporary costs like hotels and meals if your home is uninhabitable',
          'Moving expenses when you choose to relocate to a new city',
        ],
        correctIndex: 2,
        explanation:
          'The brochure explains that additional living expenses coverage pays for temporary living costs like hotel stays, meals, and moving expenses when your rental home becomes uninhabitable due to a covered event.',
      },
      {
        id: 'reading-tenant-insurance-q4',
        question: 'What does the word "deductible" mean in this brochure?',
        options: [
          'The total value of all items covered by your insurance',
          'A discount you receive for being a loyal customer',
          'The amount you pay out of pocket before insurance coverage begins',
          'The monthly payment you make for your insurance policy',
        ],
        correctIndex: 2,
        explanation:
          'The brochure defines deductible as "the amount you pay out of pocket before insurance kicks in." A higher deductible results in a lower monthly premium.',
      },
      {
        id: 'reading-tenant-insurance-q5',
        question: 'What advice does the brochure give about purchasing tenant insurance?',
        options: [
          'Always choose the cheapest policy available',
          'Only buy insurance if your landlord requires it',
          'Compare at least three providers and read the policy carefully',
          'Purchase insurance only from government agencies',
        ],
        correctIndex: 2,
        explanation:
          'The brochure recommends comparing at least three providers to find the best combination of coverage and price, and advises reading the policy carefully to understand what is and is not covered.',
      },
    ],
    keyVocabulary: [
      { word: 'liability', definition: 'legal responsibility for damage or injury caused to others', turkish: 'sorumluluk' },
      { word: 'belongings', definition: 'personal possessions or items that a person owns', turkish: 'esyalar' },
      { word: 'vandalism', definition: 'deliberate destruction or damage to property', turkish: 'vandalizm' },
      { word: 'uninhabitable', definition: 'not safe or suitable to live in', turkish: 'yasilamaz' },
      { word: 'deductible', definition: 'the amount you pay before insurance covers the rest', turkish: 'muafiyet' },
      { word: 'premium', definition: 'the regular payment made for an insurance policy', turkish: 'prim' },
      { word: 'broker', definition: 'a person who arranges transactions between buyers and sellers', turkish: 'komisyoncu' },
    ],
  },

  // ============================================================
  // CLB 6 — INFORMATION: Community Garden Application
  // ============================================================
  {
    id: 'reading-community-garden',
    title: 'Community Garden Application',
    description: 'Read instructions for applying to a community garden plot and understand the rules.',
    passageType: 'information',
    clbLevel: 6,
    icon: '🌱',
    timeLimit: 360,
    passage:
      'City of Victoria — Community Garden Program\nApplication Guide for the 2026 Growing Season\n\nThe City of Victoria is now accepting applications for **plots** in our seven community gardens across the city. Whether you are an experienced gardener or a complete **beginner**, our community garden program is a wonderful way to grow your own food, meet your neighbours, and enjoy time outdoors.\n\nAvailable Garden Locations:\n- Fernwood Community Garden (24 plots)\n- James Bay Green Space (18 plots)\n- Oaklands Neighbourhood Garden (30 plots)\n- Hillside Harvest Garden (20 plots)\n- Fairfield Growing Centre (22 plots)\n- Vic West Urban Farm (16 plots)\n- Burnside Community Plots (26 plots)\n\nPlot Sizes and Fees:\nWe offer two plot sizes. Standard plots measure 3 metres by 3 metres (9 square metres) and cost $50 for the full growing season (May to October). Large plots measure 3 metres by 6 metres (18 square metres) and cost $85 for the season. Fees cover water access, shared tools, **compost**, and basic **infrastructure** maintenance. Low-income gardeners may apply for a fee **waiver** by providing proof of qualifying government assistance.\n\nHow to Apply:\nApplications for the 2026 season must be submitted by March 31, 2026. You can apply online at www.victoria.ca/gardens, pick up a paper form at any Victoria recreation centre, or request one by calling 250-555-0412. First-time applicants must attend a mandatory 90-minute **orientation** workshop before receiving their plot assignment. Workshops are held every Saturday in April at the Crystal Pool Community Centre.\n\nGarden Rules:\nAll community gardeners must follow these rules:\n- You must actively **maintain** your plot throughout the growing season. Plots that show no activity for more than three consecutive weeks may be reassigned to someone on the waiting list.\n- Only **organic** growing methods are permitted. Chemical pesticides, herbicides, and synthetic fertilizers are strictly prohibited.\n- Gardeners must clean up their plot completely by October 31 each year, removing all plants, stakes, and personal items.\n- Shared tools must be returned clean and in good **condition** to the tool shed after each use.\n- Gardeners are encouraged to **donate** a portion of their harvest to the local food bank through our "Grow a Row" program.\n\nWaiting List:\nDue to high **demand**, some garden locations may be full. If your preferred location is not available, you will be placed on a waiting list and notified when a plot becomes available. On average, wait times range from three months to one year depending on the location.\n\nFor more information, contact the Community Gardens Office at gardens@victoria.ca.\n\nCity of Victoria Parks and Recreation Department\nVictoria, British Columbia',
    questions: [
      {
        id: 'reading-community-garden-q1',
        question: 'How much does a large plot cost for the full growing season?',
        options: [
          '$50',
          '$65',
          '$85',
          '$100',
        ],
        correctIndex: 2,
        explanation:
          'The guide states that large plots (3m x 6m) cost $85 for the full growing season from May to October.',
      },
      {
        id: 'reading-community-garden-q2',
        question: 'What must first-time applicants do before receiving a plot?',
        options: [
          'Pass a gardening knowledge test',
          'Submit a reference letter from a current gardener',
          'Attend a mandatory 90-minute orientation workshop',
          'Complete a one-week volunteer shift at an existing garden',
        ],
        correctIndex: 2,
        explanation:
          'The guide states that first-time applicants must attend a mandatory 90-minute orientation workshop, held every Saturday in April.',
      },
      {
        id: 'reading-community-garden-q3',
        question: 'What happens if a gardener does not maintain their plot for three consecutive weeks?',
        options: [
          'They receive a warning letter and a fine',
          'Their plot may be reassigned to someone on the waiting list',
          'They must pay double the seasonal fee',
          'They are permanently banned from the program',
        ],
        correctIndex: 1,
        explanation:
          'The rules state that plots showing no activity for more than three consecutive weeks may be reassigned to someone on the waiting list.',
      },
      {
        id: 'reading-community-garden-q4',
        question: 'What type of growing methods are allowed in the community gardens?',
        options: [
          'Any methods the gardener prefers, including chemical pesticides',
          'Only organic methods — chemical pesticides and synthetic fertilizers are prohibited',
          'Methods approved by a professional agricultural inspector',
          'Only hydroponic and indoor growing methods',
        ],
        correctIndex: 1,
        explanation:
          'The rules clearly state that only organic growing methods are permitted, and chemical pesticides, herbicides, and synthetic fertilizers are strictly prohibited.',
      },
      {
        id: 'reading-community-garden-q5',
        question: 'What does the word "waiver" mean in this guide?',
        options: [
          'An additional fee charged for late applications',
          'A document that removes or reduces a required payment',
          'A gardening certification from the city',
          'A special type of garden plot for seniors',
        ],
        correctIndex: 1,
        explanation:
          'A "waiver" means a removal or reduction of a requirement or fee. In this context, low-income gardeners can apply for a fee waiver so they do not have to pay the plot fee.',
      },
    ],
    keyVocabulary: [
      { word: 'plots', definition: 'small areas of land used for a specific purpose like gardening', turkish: 'parseller' },
      { word: 'compost', definition: 'decomposed organic material used to enrich soil', turkish: 'kompost' },
      { word: 'infrastructure', definition: 'basic physical structures and facilities needed for operation', turkish: 'altyapi' },
      { word: 'waiver', definition: 'an official document that removes or reduces a requirement', turkish: 'feragat' },
      { word: 'maintain', definition: 'to keep something in good condition through regular care', turkish: 'bakim yapmak' },
      { word: 'organic', definition: 'produced without synthetic chemicals or pesticides', turkish: 'organik' },
      { word: 'demand', definition: 'the level of desire or need for something', turkish: 'talep' },
    ],
  },

  // ============================================================
  // CLB 6 — INFORMATION: Cell Phone Plan Comparison
  // ============================================================
  {
    id: 'reading-phone-plan-comparison',
    title: 'Cell Phone Plan Comparison',
    description: 'Read a consumer report comparing three cell phone plans in a table format.',
    passageType: 'information',
    clbLevel: 6,
    icon: '📱',
    timeLimit: 360,
    passage:
      'Consumer Choice Canada — Cell Phone Plan Comparison Report\nUpdated: February 2026\n\nChoosing the right cell phone plan can be confusing with so many options available. To help Canadian **consumers** make an informed decision, we compared three popular plans from major providers. Below is a **summary** of the key features, prices, and **limitations** of each plan.\n\n--- Plan Comparison Table ---\n\nFeature | MapleTel Basic | NorthLink Standard | CanConnect Premium\nMonthly Price | $35/month | $55/month | $75/month\nData | 4 GB | 15 GB | Unlimited (50 GB at full speed, then reduced)\nCanada-wide Calling | Unlimited | Unlimited | Unlimited\nText Messages | Unlimited (Canada) | Unlimited (Canada + US) | Unlimited (International)\nContract Length | No contract | 24 months | 24 months\nDevice Included | No | $0 phone with select models | $0 phone with all models\nRoaming (US) | $12/day | $8/day | Included\nFamily Discount | None | 10% off for 2+ lines | 15% off for 2+ lines\nNetwork Coverage | 93% of populated areas | 97% of populated areas | 99% of populated areas\nEarly Cancellation Fee | None | $200 | $300\n\n--- Analysis ---\n\nMapleTel Basic is the most **affordable** option at $35 per month with no contract. It is ideal for light users who mainly use their phone for calls and texting and rely on Wi-Fi for most data needs. However, with only 4 GB of data, heavy streamers or people who use GPS **navigation** frequently may find this plan **insufficient**. The lack of a contract means you can cancel at any time without a fee, which provides excellent **flexibility**.\n\nNorthLink Standard offers a solid middle-ground option. At $55 per month, it includes 15 GB of data, which is enough for moderate use including social media, email, and occasional video streaming. The plan includes US texting, which is convenient for people with friends or family across the border. The 24-month contract commitment means you get a free phone with select models, but you will face a $200 **penalty** if you cancel early.\n\nCanConnect Premium is designed for heavy users who need maximum data and **coverage**. The unlimited data plan provides 50 GB at full speed before **throttling** to slower speeds. International texting and included US roaming make this plan attractive for frequent **travellers**. The 15% family discount is the most **generous** among the three plans. However, the $75 monthly price and $300 early cancellation fee make it the most expensive option overall.\n\nOur Recommendation:\nFor most Canadian consumers, NorthLink Standard offers the best **value** for the price. If budget is your top priority, MapleTel Basic is a reliable no-contract choice. If you travel frequently or need unlimited data, CanConnect Premium is worth the extra cost.\n\nFor the full report, visit www.consumerchoicecanada.ca.',
    questions: [
      {
        id: 'reading-phone-plan-comparison-q1',
        question: 'Which plan offers the lowest monthly price?',
        options: [
          'NorthLink Standard at $55 per month',
          'CanConnect Premium at $75 per month',
          'MapleTel Basic at $35 per month',
          'All three plans cost the same',
        ],
        correctIndex: 2,
        explanation:
          'The comparison table shows MapleTel Basic at $35/month, which is the lowest price of the three plans.',
      },
      {
        id: 'reading-phone-plan-comparison-q2',
        question: 'What happens to CanConnect Premium data after 50 GB is used?',
        options: [
          'The data stops completely until the next billing cycle',
          'An extra $10 per GB is charged automatically',
          'The speed is reduced but data continues to work',
          'The plan automatically upgrades to a higher tier',
        ],
        correctIndex: 2,
        explanation:
          'The report states that CanConnect Premium provides unlimited data with 50 GB at full speed, then the speed is reduced (throttled).',
      },
      {
        id: 'reading-phone-plan-comparison-q3',
        question: 'Which plan does the report recommend for most Canadian consumers?',
        options: [
          'MapleTel Basic because it has no contract',
          'NorthLink Standard because it offers the best value for the price',
          'CanConnect Premium because it has unlimited data',
          'The report does not make any recommendation',
        ],
        correctIndex: 1,
        explanation:
          'The report concludes that for most Canadian consumers, NorthLink Standard offers the best value for the price.',
      },
      {
        id: 'reading-phone-plan-comparison-q4',
        question: 'What advantage does MapleTel Basic have over the other two plans?',
        options: [
          'It includes a free phone with select models',
          'It has the best network coverage across Canada',
          'It has no contract and no early cancellation fee',
          'It includes international texting and US roaming',
        ],
        correctIndex: 2,
        explanation:
          'MapleTel Basic has no contract and no early cancellation fee, which provides flexibility that the other two plans do not offer.',
      },
      {
        id: 'reading-phone-plan-comparison-q5',
        question: 'What does the word "throttling" mean in this report?',
        options: [
          'Increasing the speed of a data connection',
          'Intentionally reducing the speed of a data connection',
          'Completely cutting off internet access',
          'Switching to a different network provider',
        ],
        correctIndex: 1,
        explanation:
          '"Throttling" means intentionally slowing down or reducing the speed of a data connection. After using 50 GB at full speed, CanConnect Premium reduces the data speed.',
      },
    ],
    keyVocabulary: [
      { word: 'consumers', definition: 'people who buy and use products or services', turkish: 'tuketiciler' },
      { word: 'limitations', definition: 'restrictions or things that are not included', turkish: 'sinirlamalar' },
      { word: 'affordable', definition: 'reasonably priced; not too expensive', turkish: 'uygun fiyatli' },
      { word: 'insufficient', definition: 'not enough to meet a need', turkish: 'yetersiz' },
      { word: 'throttling', definition: 'intentionally reducing the speed of a service', turkish: 'hiz kisitlama' },
      { word: 'penalty', definition: 'a fee or punishment for breaking a rule or agreement', turkish: 'ceza' },
      { word: 'coverage', definition: 'the area or extent that a service reaches', turkish: 'kapsama alani' },
    ],
  },

  // ============================================================
  // CLB 6 — INFORMATION: Volunteer Firefighter Recruitment
  // ============================================================
  {
    id: 'reading-volunteer-firefighter',
    title: 'Volunteer Firefighter Recruitment',
    description: 'Read a city posting seeking volunteer firefighters and understand the requirements.',
    passageType: 'information',
    clbLevel: 6,
    icon: '🚒',
    timeLimit: 360,
    passage:
      'Town of Collingwood — Volunteer Firefighter Recruitment\nApplication Period: February 1 to April 15, 2026\n\nThe Collingwood Fire and Emergency Services Department is seeking dedicated **individuals** to join our team of volunteer firefighters. Volunteer firefighters play a **vital** role in protecting our community, responding to fires, medical emergencies, motor vehicle accidents, and natural disasters. This is a rewarding opportunity to serve your neighbours and develop valuable life-saving skills.\n\nAbout the Role:\nVolunteer firefighters respond to emergency calls alongside our career firefighters. When a call comes in, volunteers receive an **alert** on their pager or mobile phone and are expected to respond to the fire station within 10 minutes when available. Volunteers are not required to respond to every call, but must be available for a minimum of 40% of all calls per month. Shifts are not scheduled — volunteers respond based on **availability**.\n\nIn addition to emergency response, volunteers participate in weekly training sessions held every Wednesday evening from 7:00 PM to 9:30 PM. Training covers fire **suppression** techniques, first aid and CPR, hazardous materials handling, vehicle extrication, and search and rescue operations.\n\nRequirements:\nTo be eligible, applicants must:\n- Be at least 18 years of age\n- Be a Canadian citizen or permanent **resident**\n- Hold a valid Ontario driver\'s licence (Class G or higher)\n- Live within a 10-kilometre **radius** of the Collingwood Fire Station\n- Pass a criminal background check\n- Pass a physical fitness test and medical **examination**\n- Be willing to commit to a minimum of two years of service\n\nNo previous firefighting experience is required. All selected **candidates** will complete a comprehensive 12-week training program at no cost. The training program runs every Saturday from 9:00 AM to 5:00 PM and covers all **essential** firefighting skills and safety procedures.\n\nCompensation:\nVolunteer firefighters receive an **honorarium** of $18 per hour for training sessions and emergency responses. The town also provides all necessary personal protective equipment (PPE), including bunker gear, helmets, boots, and gloves. Volunteers receive a free annual medical checkup and are covered under the town\'s **workplace** insurance policy.\n\nHow to Apply:\nInterested individuals can download the application form from www.collingwood.ca/fire or pick up a copy at the Collingwood Fire Station located at 97 Hurontario Street. Completed applications must be submitted in person or by email to firerecruit@collingwood.ca by April 15, 2026.\n\nShortlisted applicants will be invited for an interview and physical fitness assessment in May 2026. Successful candidates will begin training in June 2026.\n\nFor questions, contact Fire Chief Robert Tanner at 705-555-0288.\n\nCollingwood Fire and Emergency Services\nTown of Collingwood, Ontario',
    questions: [
      {
        id: 'reading-volunteer-firefighter-q1',
        question: 'How quickly must volunteer firefighters respond to the fire station after a call?',
        options: [
          'Within 5 minutes',
          'Within 10 minutes',
          'Within 15 minutes',
          'Within 20 minutes',
        ],
        correctIndex: 1,
        explanation:
          'The posting states that volunteers are expected to respond to the fire station within 10 minutes when available.',
      },
      {
        id: 'reading-volunteer-firefighter-q2',
        question: 'What is the minimum percentage of calls a volunteer must respond to each month?',
        options: [
          '25%',
          '30%',
          '40%',
          '50%',
        ],
        correctIndex: 2,
        explanation:
          'The posting states that volunteers must be available for a minimum of 40% of all calls per month.',
      },
      {
        id: 'reading-volunteer-firefighter-q3',
        question: 'Which of the following is NOT a requirement for applicants?',
        options: [
          'Being at least 18 years old',
          'Having previous firefighting experience',
          'Living within 10 kilometres of the fire station',
          'Holding a valid Ontario driver\'s licence',
        ],
        correctIndex: 1,
        explanation:
          'The posting explicitly states that no previous firefighting experience is required. All other options are listed as requirements.',
      },
      {
        id: 'reading-volunteer-firefighter-q4',
        question: 'What does the word "honorarium" mean in this posting?',
        options: [
          'A certificate of achievement given after training',
          'A payment given in recognition of voluntary services',
          'A mandatory donation to the fire department',
          'A penalty fee for missing training sessions',
        ],
        correctIndex: 1,
        explanation:
          'An "honorarium" is a payment given to acknowledge voluntary or professional services. In this case, volunteer firefighters receive $18 per hour for training and emergency responses.',
      },
      {
        id: 'reading-volunteer-firefighter-q5',
        question: 'When will successful candidates begin their training program?',
        options: [
          'April 2026',
          'May 2026',
          'June 2026',
          'September 2026',
        ],
        correctIndex: 2,
        explanation:
          'The posting states that shortlisted applicants will be interviewed in May 2026, and successful candidates will begin training in June 2026.',
      },
    ],
    keyVocabulary: [
      { word: 'vital', definition: 'absolutely necessary or extremely important', turkish: 'hayati' },
      { word: 'suppression', definition: 'the act of putting out or controlling something, such as a fire', turkish: 'bastirma' },
      { word: 'radius', definition: 'the distance from the center of a circle to its edge; a surrounding area', turkish: 'yaricap' },
      { word: 'candidates', definition: 'people who apply for a position or are considered for selection', turkish: 'adaylar' },
      { word: 'honorarium', definition: 'a payment given for voluntary or professional services', turkish: 'onore ucreti' },
      { word: 'essential', definition: 'absolutely necessary; extremely important', turkish: 'temel' },
      { word: 'examination', definition: 'a detailed inspection or medical checkup', turkish: 'muayene' },
    ],
  },
];
