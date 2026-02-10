import type { WritingPrompt } from './types';
import { newWritingPrompts } from './new-prompts';

const existingPrompts: WritingPrompt[] = [
  // ============================================
  // EMAIL TASKS (CELPIP Writing Task 1 style)
  // ============================================

  // 1. Noise Complaint to Neighbor
  {
    id: 'writing_noise_complaint',
    title: 'Noise Complaint to Neighbor',
    description:
      'Write a polite but firm email to your neighbor about ongoing noise disturbances.',
    taskType: 'email',
    clbLevel: 6,
    icon: '📢',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'You live in a semi-detached house in a quiet residential area of Mississauga. Your next-door neighbor has been hosting loud gatherings every weekend for the past month, with music and shouting that often continues past midnight. The noise has been disrupting your sleep and affecting your ability to concentrate on work during the day. You have decided to write an email to your neighbor to address the situation.',
    instructions: [
      'Describe the noise problem and how long it has been going on.',
      'Explain how the noise is affecting your daily life and well-being.',
      'Politely request that your neighbor reduce the noise, especially during late hours.',
      'Suggest a reasonable compromise or solution to the problem.',
    ],
    sampleResponse:
      'Dear David,\n\nI hope this email finds you well. I am writing to bring a matter to your attention that has been causing me some concern over the past few weeks.\n\nFor the last month, there have been loud gatherings at your home nearly every weekend. While I completely understand the desire to socialize and enjoy time with friends, the noise level has been quite high, often continuing well past midnight. The loud music and conversations have made it very difficult for me to fall asleep on those nights.\n\nAs a result, I have been feeling exhausted during the week, and my performance at work has been affected. I also have two young children who are woken up by the noise and have trouble going back to sleep.\n\nI would greatly appreciate it if you could keep the volume down after 10 p.m. on weekends. Perhaps you could also consider moving the gatherings indoors, which would help reduce the noise that travels between our homes.\n\nI value our relationship as neighbors and hope we can find a solution that works for both of us. Thank you for your understanding.\n\nBest regards,\nSarah',
    usefulVocabulary: [
      'disturbance',
      'excessive',
      'inconsiderate',
      'disruptive',
      'compromise',
      'reasonable',
      'well-being',
      'considerate',
    ],
    usefulPatterns: [
      'I am writing to bring a matter to your attention regarding...',
      'For the past [time period], I have been experiencing...',
      'I would greatly appreciate it if you could...',
      'I hope we can find a solution that works for both of us.',
      'While I understand that..., I would kindly ask that...',
    ],
    usefulIdioms: [
      'the last straw',
      'keep it down',
      'meet halfway',
    ],
    structureTemplate: [
      'Opening: Greet the neighbor and introduce the purpose of your email.',
      'Body 1: Describe the noise problem in detail, including duration and frequency.',
      'Body 2: Explain how the noise has affected your daily life.',
      'Closing: Suggest a compromise and express hope for a positive resolution.',
    ],
    commonMistakes: [
      'Being too aggressive or threatening, which can escalate the conflict.',
      'Failing to offer a specific and reasonable solution or compromise.',
      'Not providing concrete examples of how the noise affects you.',
    ],
  },

  // 2. Leave Request to Employer
  {
    id: 'writing_leave_request',
    title: 'Leave Request to Employer',
    description:
      'Write a professional email to your employer requesting time off from work.',
    taskType: 'email',
    clbLevel: 6,
    icon: '📋',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'You work as an administrative assistant at a consulting firm in Toronto. Your sister is getting married in Vancouver in three weeks, and you need to take five consecutive business days off to attend the wedding and help with preparations. You have not taken any vacation days this year and have accumulated sufficient leave. You need to write to your supervisor, Ms. Angela Roberts, to request the time off.',
    instructions: [
      'State the dates you are requesting off and the reason for your leave.',
      'Mention your accumulated leave balance to support your request.',
      'Explain how you plan to manage your responsibilities while you are away.',
      'Express your willingness to discuss the request further if needed.',
    ],
    sampleResponse:
      'Dear Ms. Roberts,\n\nI am writing to formally request five days of annual leave from Monday, March 17th to Friday, March 21st. My sister is getting married in Vancouver on March 20th, and I would like to travel there in advance to help with the wedding preparations and attend the ceremony.\n\nAs I have not taken any vacation days this year, I currently have a full balance of leave days available. I believe this is a good time to take a few days off, as the office workload tends to be lighter during this period.\n\nTo ensure a smooth transition during my absence, I plan to complete all pending reports before I leave. I have also spoken with my colleague, James, who has kindly agreed to handle any urgent tasks that may arise while I am away. I will provide him with a detailed handover document by March 14th.\n\nI would be happy to discuss this request at your convenience and make any adjustments if necessary. Thank you for considering my request.\n\nSincerely,\nMaria Chen',
    usefulVocabulary: [
      'annual leave',
      'accumulated',
      'transition',
      'handover',
      'delegate',
      'pending',
      'workload',
    ],
    usefulPatterns: [
      'I am writing to formally request [number] days of leave from... to...',
      'To ensure a smooth transition during my absence, I plan to...',
      'I would be happy to discuss this request at your convenience.',
      'I have arranged for [name] to cover my responsibilities while I am away.',
    ],
    usefulIdioms: [
      'cover all the bases',
      'in good hands',
    ],
    structureTemplate: [
      'Opening: State the purpose of your email and the specific dates you need off.',
      'Body 1: Explain the reason for your leave and mention your leave balance.',
      'Body 2: Describe your plan to manage your work responsibilities during your absence.',
      'Closing: Express flexibility and thank your supervisor for considering the request.',
    ],
    commonMistakes: [
      'Not providing specific dates or being vague about the duration of leave.',
      'Forgetting to mention how work responsibilities will be handled.',
      'Using an overly casual tone in a formal workplace email.',
    ],
  },

  // 3. Party Invitation to Friend
  {
    id: 'writing_party_invite',
    title: 'Party Invitation to Friend',
    description:
      'Write a warm and enthusiastic email inviting a close friend to a celebration you are organizing.',
    taskType: 'email',
    clbLevel: 5,
    icon: '🎉',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'You have recently been promoted to a senior position at your company after three years of hard work. To celebrate this achievement, you are hosting a small dinner party at your home next Saturday evening. You want to invite your close friend, Alex, who has supported you throughout your career journey. Alex lives about an hour away and may need directions or accommodation details.',
    instructions: [
      'Share the exciting news about your promotion and the reason for the celebration.',
      'Provide the date, time, and location of the party.',
      'Offer practical details such as directions, parking, or accommodation if needed.',
      'Express how much it would mean to you if your friend could attend.',
    ],
    sampleResponse:
      'Hi Alex,\n\nI have some wonderful news to share with you! After three years of hard work, I have finally been promoted to Senior Project Manager at my company. I am absolutely thrilled about this opportunity, and I could not have made it this far without your constant support and encouragement.\n\nTo celebrate, I am hosting a small dinner party at my home next Saturday, March 15th, starting at 6:30 p.m. It will be a casual evening with good food, great company, and hopefully a few laughs. I am planning to prepare your favourite pasta dish, so you definitely do not want to miss it!\n\nI know you live about an hour away, so I wanted to let you know that there is plenty of parking in front of the house. If you prefer not to drive back late at night, you are more than welcome to stay in our guest room.\n\nIt would truly mean the world to me if you could be there. Please let me know if you can make it so I can plan accordingly. I really hope to see you there!\n\nWarm regards,\nJordan',
    usefulVocabulary: [
      'celebration',
      'thrilled',
      'achievement',
      'promotion',
      'casual',
      'gathering',
      'encouragement',
    ],
    usefulPatterns: [
      'I am writing to share some exciting news with you!',
      'To celebrate, I am hosting a [event] on [date] at [time].',
      'It would truly mean the world to me if you could be there.',
      'Please let me know if you can make it so I can plan accordingly.',
    ],
    usefulIdioms: [
      'the more the merrier',
      'paint the town red',
    ],
    structureTemplate: [
      'Opening: Share your exciting news and the reason for the celebration.',
      'Body 1: Provide event details including date, time, and location.',
      'Body 2: Offer practical information such as parking or accommodation.',
      'Closing: Express how important it is for your friend to attend and ask for a reply.',
    ],
    commonMistakes: [
      'Forgetting to include essential details like the date, time, or address.',
      'Being too brief and not conveying genuine warmth or enthusiasm.',
      'Not offering practical help for a friend who may need to travel.',
    ],
  },

  // 4. Product Complaint to Customer Service
  {
    id: 'writing_product_complaint',
    title: 'Product Complaint to Customer Service',
    description:
      'Write a formal complaint email to a company about a defective product you purchased.',
    taskType: 'email',
    clbLevel: 6,
    icon: '📦',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'Two weeks ago, you purchased a brand-new laptop from ElectroPro, an online electronics retailer. When the laptop arrived, it worked fine for three days before the screen began flickering and eventually went completely black. You have the receipt and order number. You tried contacting phone support but were placed on hold for over an hour without getting through. You are now writing an email to their customer service department.',
    instructions: [
      'Describe the product you purchased, including the order number and date.',
      'Explain the defect in detail and when it started occurring.',
      'Mention any previous attempts you made to resolve the issue.',
      'State clearly what resolution you expect, such as a refund or replacement.',
    ],
    sampleResponse:
      'Dear ElectroPro Customer Service,\n\nI am writing to file a formal complaint regarding a defective laptop I purchased from your online store on February 20th. My order number is EP-2026-84521, and the product is the ElectroPro ProBook 15, which cost $1,299.99.\n\nThe laptop functioned normally for the first three days after delivery. However, on the fourth day, the screen began flickering intermittently. By the end of that week, the screen went completely black and has remained non-functional since then. I have tried restarting the device and following the troubleshooting steps on your website, but nothing has resolved the issue.\n\nI attempted to contact your phone support line on two separate occasions but was placed on hold for over an hour each time without ever speaking to a representative. This experience has been extremely frustrating.\n\nGiven that this product was defective upon arrival and is still within the return window, I would like to request either a full refund or a replacement unit. Please let me know how to proceed with returning the faulty laptop.\n\nThank you for your prompt attention to this matter.\n\nSincerely,\nRachel Kim',
    usefulVocabulary: [
      'defective',
      'malfunction',
      'warranty',
      'refund',
      'replacement',
      'intermittently',
      'frustrating',
      'resolution',
    ],
    usefulPatterns: [
      'I am writing to file a formal complaint regarding...',
      'The product was purchased on [date] with order number [number].',
      'Despite following the recommended troubleshooting steps, the issue persists.',
      'I would like to request either a full refund or a replacement.',
      'I look forward to your prompt response regarding this matter.',
    ],
    usefulIdioms: [
      'fall short of expectations',
      'get the runaround',
      'the ball is in your court',
    ],
    structureTemplate: [
      'Opening: State the purpose of your email and identify the product.',
      'Body 1: Describe the defect in detail and when it began.',
      'Body 2: Mention previous attempts to contact support or resolve the issue.',
      'Closing: Clearly state the resolution you expect and request a timely response.',
    ],
    commonMistakes: [
      'Using rude or threatening language instead of being firm but polite.',
      'Forgetting to include important details like order number, date, and product name.',
      'Not stating a clear desired outcome such as a refund or replacement.',
    ],
  },

  // 5. Repair Request to Landlord
  {
    id: 'writing_repair_request',
    title: 'Repair Request to Landlord',
    description:
      'Write a formal email to your landlord requesting urgent repairs in your rental unit.',
    taskType: 'email',
    clbLevel: 6,
    icon: '🔧',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'You rent a two-bedroom apartment in Ottawa. Over the past week, you have noticed a persistent water leak under the kitchen sink that is getting worse. The leak has already caused some water damage to the cabinet floor, and you are concerned about potential mold growth. You reported this verbally to your landlord, Mr. Patterson, a few days ago, but no action has been taken. You are writing a formal email to document the problem and request immediate repairs.',
    instructions: [
      'Describe the repair issue in detail, including when it started.',
      'Explain any damage that has already occurred or risks that may arise.',
      'Mention that you reported this issue previously but no action was taken.',
      'Request a specific timeline for when the repair will be completed.',
    ],
    sampleResponse:
      'Dear Mr. Patterson,\n\nI am writing to formally request an urgent repair in my apartment at 245 Laurier Avenue, Unit 3B. Over the past week, I have noticed a persistent water leak under the kitchen sink that has been steadily worsening.\n\nThe leak appears to be coming from a loose pipe connection beneath the sink basin. Water has been dripping continuously, and I have been placing towels and a bucket underneath to manage the situation. Unfortunately, the cabinet floor has already sustained visible water damage, with the wood beginning to warp and discolour. I am also concerned that if this is not addressed quickly, it could lead to mold growth, which poses a serious health risk.\n\nAs you may recall, I mentioned this issue to you by phone last Tuesday. I was hoping the matter would be resolved promptly, but as of today, no repair has been scheduled.\n\nI kindly ask that you arrange for a plumber to inspect and fix the leak within the next three to five days. Please let me know the scheduled date and time so I can ensure someone is home to provide access.\n\nThank you for your attention to this matter.\n\nSincerely,\nAmanda Torres',
    usefulVocabulary: [
      'persistent',
      'leak',
      'deteriorating',
      'mold',
      'maintenance',
      'urgently',
      'inspection',
      'plumber',
    ],
    usefulPatterns: [
      'I am writing to formally request an urgent repair at...',
      'The issue has been ongoing for [time period] and is getting worse.',
      'If this is not addressed promptly, it could lead to...',
      'I kindly ask that you arrange for repairs within [timeframe].',
    ],
    usefulIdioms: [
      'nip it in the bud',
      'a stitch in time saves nine',
    ],
    structureTemplate: [
      'Opening: State the purpose of your email and identify the property.',
      'Body 1: Describe the repair issue in detail, including the location and severity.',
      'Body 2: Mention previous communication and the lack of response.',
      'Closing: Request a specific timeline for repairs and ask for confirmation.',
    ],
    commonMistakes: [
      'Being too vague about the location or nature of the repair needed.',
      'Not documenting that you already reported the issue previously.',
      'Failing to request a clear timeline for when repairs will be completed.',
    ],
  },

  // 6. Letter to Child's School
  {
    id: 'writing_school_letter',
    title: "Letter to Child's School",
    description:
      "Write an email to your child's school teacher about an upcoming absence or a school-related concern.",
    taskType: 'email',
    clbLevel: 6,
    icon: '🏫',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      "Your 10-year-old daughter has a medical appointment scheduled for next Thursday that will require her to miss the entire school day. The appointment is for a specialist that took months to book and cannot be rescheduled. You need to inform her teacher, Mrs. Williams, about the absence and arrange for your daughter to receive any homework or assignments she will miss. You also want to ensure she does not fall behind in class.",
    instructions: [
      'Inform the teacher about the upcoming absence and the date.',
      'Explain the reason for the absence without sharing unnecessary medical details.',
      'Request any homework or materials your daughter will miss.',
      'Ask how you can help your daughter stay on track with the class.',
    ],
    sampleResponse:
      'Dear Mrs. Williams,\n\nI am writing to let you know that my daughter, Emma, will be absent from school next Thursday, March 13th. She has a medical appointment with a specialist that was scheduled several months in advance and unfortunately cannot be rescheduled to a time outside of school hours.\n\nI understand that missing a full day of classes can make it difficult for students to keep up with the curriculum. I would be very grateful if you could provide Emma with any homework assignments, worksheets, or reading materials that she will miss on Thursday. If possible, could you send them home with her on Wednesday so she can work on them over the weekend?\n\nI also wanted to ask if there are any tests or important activities planned for that day. If so, I would appreciate knowing in advance so that Emma can prepare accordingly, and we can arrange an alternative date for any assessments.\n\nEmma is a dedicated student, and I want to make sure this absence does not affect her progress. Please let me know if there is anything else we can do.\n\nThank you for your understanding.\n\nBest regards,\nLinda Park',
    usefulVocabulary: [
      'absence',
      'curriculum',
      'assessment',
      'dedicated',
      'assignment',
      'rescheduled',
      'progress',
    ],
    usefulPatterns: [
      'I am writing to inform you that my [child] will be absent on...',
      'The appointment was scheduled months in advance and cannot be rescheduled.',
      'I would be very grateful if you could provide...',
      'Please let me know if there is anything else we can do to ensure...',
    ],
    usefulIdioms: [
      'stay on track',
      'keep up with',
    ],
    structureTemplate: [
      'Opening: Inform the teacher about the absence and the date.',
      'Body 1: Briefly explain the reason without oversharing personal details.',
      'Body 2: Request homework or materials and ask about tests or key activities.',
      'Closing: Express your commitment to your child keeping up and thank the teacher.',
    ],
    commonMistakes: [
      'Sharing too many personal medical details that are not necessary.',
      'Forgetting to ask about missed assignments or tests.',
      'Not offering to help your child catch up after the absence.',
    ],
  },

  // 7. Park Improvement Request to City
  {
    id: 'writing_park_request',
    title: 'Park Improvement Request to City',
    description:
      'Write a formal email to your city councillor requesting improvements to a local park.',
    taskType: 'email',
    clbLevel: 7,
    icon: '🌳',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'You live near Riverside Park in your city. The park is popular with families and dog owners, but it has been neglected in recent years. The playground equipment is outdated and some pieces are broken, the walking trails are in poor condition, and there is no proper lighting in the evening. Several community members share your concerns. You have decided to write to your city councillor, Mr. Brian Hughes, to request improvements.',
    instructions: [
      'Describe the current condition of the park and the specific problems you have observed.',
      'Explain how these issues affect residents who use the park regularly.',
      'Suggest specific improvements you would like the city to make.',
      'Mention that other community members share your concerns to strengthen your request.',
    ],
    sampleResponse:
      'Dear Mr. Hughes,\n\nI am writing as a concerned resident of the Riverside neighbourhood to bring to your attention the deteriorating condition of Riverside Park. As a frequent visitor to the park, I have observed several issues that I believe require urgent attention from the city.\n\nFirst, the playground equipment is outdated and some pieces are broken. The slide has a large crack along its surface, and two of the swings have missing seats. This poses a serious safety hazard for children. Second, the walking trails have not been maintained in years and are full of potholes and uneven surfaces, making them difficult to use, especially for elderly residents. Third, the park has no proper lighting, which makes it unsafe to visit after sunset.\n\nThese issues affect dozens of families who rely on the park for recreation and exercise. I have spoken with many of my neighbours, and they share these concerns.\n\nI would respectfully request that the city allocate funds for updated playground equipment, trail repairs, and the installation of adequate lighting throughout the park. These improvements would greatly enhance the safety and quality of life in our community.\n\nThank you for considering this matter.\n\nSincerely,\nMartin Okafor',
    usefulVocabulary: [
      'deteriorating',
      'infrastructure',
      'hazard',
      'allocate',
      'municipal',
      'revitalize',
      'maintenance',
      'facility',
    ],
    usefulPatterns: [
      'I am writing as a concerned resident of [area] to bring to your attention...',
      'These issues pose a serious [safety/health] risk to...',
      'I would respectfully request that the city allocate funds for...',
      'Many of my neighbours share these concerns and would welcome improvements.',
      'These improvements would greatly enhance the safety and quality of life in our community.',
    ],
    usefulIdioms: [
      'fall into disrepair',
      'take matters into one\'s own hands',
      'a far cry from',
    ],
    structureTemplate: [
      'Opening: Introduce yourself as a resident and state the purpose of your email.',
      'Body 1: Describe the specific problems you have observed in the park.',
      'Body 2: Explain the impact on residents and mention community support.',
      'Closing: Suggest specific improvements and thank the councillor for their attention.',
    ],
    commonMistakes: [
      'Making demands rather than respectful requests to a public official.',
      'Being too general and not describing specific problems or solutions.',
      'Forgetting to mention that other community members also support the request.',
    ],
  },

  // 8. Congratulations to Colleague
  {
    id: 'writing_congratulations',
    title: 'Congratulations to Colleague',
    description:
      'Write a warm and professional email congratulating a colleague on a significant achievement.',
    taskType: 'email',
    clbLevel: 5,
    icon: '🎊',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'Your colleague, Samira Patel, has just been awarded Employee of the Year at your company. You have worked alongside Samira for the past two years in the marketing department. She has always gone above and beyond in her work, often staying late to meet deadlines and mentoring new team members. You want to congratulate her on this well-deserved recognition and share your appreciation for her contributions.',
    instructions: [
      'Congratulate your colleague on the specific achievement.',
      'Mention specific qualities or contributions that make the award well-deserved.',
      'Share a personal experience or memory that highlights their positive impact.',
      'Express your confidence in their continued success.',
    ],
    sampleResponse:
      'Dear Samira,\n\nI just heard the wonderful news that you have been named Employee of the Year! Congratulations! This recognition is truly well-deserved, and I could not be happier for you.\n\nHaving worked alongside you in the marketing department for the past two years, I have seen firsthand the dedication and passion you bring to everything you do. You consistently go above and beyond for our team, whether it is staying late to help meet a critical deadline or volunteering to train new employees during their first weeks.\n\nI particularly remember the product launch campaign we worked on together last spring. When we ran into unexpected challenges with the budget, you came up with a creative solution that not only kept the project on track but actually improved the final result. That experience showed me just how resourceful and calm under pressure you truly are.\n\nI have no doubt that this is just the beginning of many more achievements to come. You inspire all of us to do our best work every day.\n\nCongratulations once again, Samira. You deserve every bit of this honour!\n\nWarm regards,\nDaniel',
    usefulVocabulary: [
      'recognition',
      'dedication',
      'resourceful',
      'mentoring',
      'achievement',
      'well-deserved',
      'contribution',
    ],
    usefulPatterns: [
      'I was thrilled to hear about your [achievement]. Congratulations!',
      'Having worked alongside you for [time], I have seen firsthand...',
      'I particularly remember when you...',
      'I have no doubt that this is just the beginning of many more achievements.',
    ],
    usefulIdioms: [
      'go above and beyond',
      'calm under pressure',
    ],
    structureTemplate: [
      'Opening: Congratulate your colleague and express your happiness for them.',
      'Body 1: Highlight specific qualities and contributions that earned the recognition.',
      'Body 2: Share a personal example or memory that demonstrates their impact.',
      'Closing: Express confidence in their future success and offer warm wishes.',
    ],
    commonMistakes: [
      'Being too generic without mentioning specific contributions or qualities.',
      'Focusing on yourself instead of keeping the spotlight on the colleague.',
      'Writing a message that is too short and lacks genuine warmth.',
    ],
  },

  // 9. Restaurant Reservation Request
  {
    id: 'writing_restaurant_reservation',
    title: 'Restaurant Reservation Request',
    description:
      'Write an email to a restaurant to make a special reservation for a group event.',
    taskType: 'email',
    clbLevel: 5,
    icon: '🍽️',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      "You are organizing a farewell dinner for a colleague who is relocating to another city. You have chosen Bella Vista, an Italian restaurant in downtown Calgary, because it is your colleague's favourite restaurant. You need to make a reservation for 12 people on a Friday evening and want to inquire about a private dining area, a set menu, and whether the restaurant can accommodate a small presentation with a projector.",
    instructions: [
      'State the purpose of the reservation and the occasion.',
      'Provide the preferred date, time, and number of guests.',
      'Ask about specific requirements such as a private area and set menu options.',
      'Inquire about any special accommodations or equipment availability.',
    ],
    sampleResponse:
      'Dear Bella Vista Team,\n\nI am writing to inquire about making a reservation at your restaurant for a special farewell dinner. One of my colleagues is relocating to another city at the end of the month, and we would like to organize a memorable evening for her at Bella Vista, which is her favourite restaurant.\n\nWe would like to reserve a table for 12 guests on Friday, March 28th, at approximately 7:00 p.m. Given the size of our group and the nature of the event, I was wondering if you have a private or semi-private dining area available for that evening. This would allow us to celebrate comfortably without disturbing other diners.\n\nAdditionally, I would like to ask whether you offer a set menu or prix fixe option for group events. Some of our guests have dietary restrictions, including vegetarian and gluten-free needs, so it would be helpful to know the available options in advance. We are also planning a short farewell presentation and would appreciate knowing if a projector or screen is available.\n\nThank you for your time. I look forward to hearing from you.\n\nBest regards,\nKevin Tran',
    usefulVocabulary: [
      'reservation',
      'accommodate',
      'dietary restrictions',
      'private dining',
      'prix fixe',
      'farewell',
      'inquire',
    ],
    usefulPatterns: [
      'I am writing to inquire about making a reservation for...',
      'We would like to reserve a table for [number] guests on [date] at [time].',
      'I was wondering if you have... available for that evening.',
      'I would appreciate knowing the available options in advance.',
    ],
    usefulIdioms: [
      'a night to remember',
      'roll out the red carpet',
    ],
    structureTemplate: [
      'Opening: Introduce the occasion and the reason for the reservation.',
      'Body 1: Provide the date, time, and number of guests.',
      'Body 2: Ask about private areas, menu options, dietary needs, and equipment.',
      'Closing: Thank the restaurant and request a prompt response.',
    ],
    commonMistakes: [
      'Not mentioning the number of guests or preferred date and time.',
      'Forgetting to ask about dietary accommodations for your group.',
      'Being too vague about the event requirements or special needs.',
    ],
  },

  // 10. Insurance Claim Request
  {
    id: 'writing_insurance_claim',
    title: 'Insurance Claim Request',
    description:
      'Write a formal email to your insurance company to file a claim after an incident.',
    taskType: 'email',
    clbLevel: 7,
    icon: '🏥',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'Last week, a severe windstorm in your area caused a large tree branch to fall on the roof of your house, resulting in significant damage. Rainwater has since been leaking into your attic and upstairs bedroom. You have a comprehensive homeowner insurance policy with SecureHome Insurance. You have already contacted a local roofing company to assess the damage and received a repair estimate of $8,500. You need to write to your insurance company to file a claim.',
    instructions: [
      'Describe the incident, including the date and cause of the damage.',
      'Detail the extent of the damage to your property.',
      'Mention the repair estimate you have received and any documentation you can provide.',
      'Request clear instructions on the next steps for processing your claim.',
    ],
    sampleResponse:
      'Dear SecureHome Insurance Claims Department,\n\nI am writing to file a homeowner insurance claim for storm damage to my property at 78 Oakwood Drive, Hamilton. My policy number is SH-2024-39712.\n\nOn the evening of Thursday, March 6th, a severe windstorm caused a large branch from a mature oak tree to fall directly onto the roof of my house. The impact caused significant structural damage to the roof, including multiple broken shingles and a visible hole in the roofing material. Since the incident, rainwater has been leaking into the attic and the upstairs bedroom, causing water stains on the ceiling and damage to the drywall.\n\nI contacted Maple City Roofing to inspect the damage, and they have provided a written repair estimate of $8,500. I have also taken photographs of the damage to the roof, attic, and bedroom, which I can submit as supporting documentation.\n\nI would appreciate clear guidance on the next steps for processing this claim, including any additional documents or inspections that may be required. I would also like to know the expected timeline for claim resolution.\n\nThank you for your prompt attention to this matter.\n\nSincerely,\nPatricia Hernandez',
    usefulVocabulary: [
      'claim',
      'policy number',
      'structural damage',
      'estimate',
      'documentation',
      'assessment',
      'deductible',
      'reimbursement',
    ],
    usefulPatterns: [
      'I am writing to file a [type] insurance claim for damage to my property at...',
      'The incident occurred on [date] when...',
      'I have obtained a written repair estimate of [amount] from...',
      'I would appreciate clear guidance on the next steps for processing this claim.',
      'I have photographs and documentation available to support my claim.',
    ],
    usefulIdioms: [
      'cut through the red tape',
      'in black and white',
      'get the ball rolling',
    ],
    structureTemplate: [
      'Opening: State the purpose of your email and provide your policy number.',
      'Body 1: Describe the incident in detail, including the date and cause.',
      'Body 2: Detail the damage, mention the repair estimate, and list available documentation.',
      'Closing: Request information about next steps and the expected timeline.',
    ],
    commonMistakes: [
      'Forgetting to include your policy number and property address.',
      'Not providing specific details about the incident or the extent of damage.',
      'Failing to mention supporting documents such as photos or repair estimates.',
    ],
  },

  // ============================================
  // SURVEY RESPONSE TASKS (CELPIP Writing Task 2 style)
  // ============================================

  // 11. Should companies allow remote work?
  {
    id: 'writing_remote_work',
    title: 'Should Companies Allow Remote Work?',
    description:
      'Respond to a survey about whether companies should allow employees to work remotely.',
    taskType: 'survey',
    clbLevel: 7,
    icon: '💻',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'A national business association is conducting a survey on workplace policies in Canada. They want to understand public opinion on whether companies should be required to offer remote work options to their employees. Supporters argue that remote work improves work-life balance and reduces commuting costs, while opponents say it decreases collaboration and company culture. You have been asked to share your opinion.',
    instructions: [
      'Clearly state whether you support or oppose remote work policies.',
      'Provide at least two reasons to support your position.',
      'Acknowledge one argument from the opposing side and explain why your view is stronger.',
      'Conclude by summarizing your recommendation.',
    ],
    sampleResponse:
      'I am writing in response to the survey regarding remote work policies in Canadian companies. I strongly believe that companies should offer remote work options to their employees whenever the nature of the job permits it.\n\nFirst, remote work significantly improves work-life balance. Employees who work from home save hours of commuting time each week, which they can spend with their families, exercising, or pursuing personal interests. This leads to happier, healthier, and more productive workers. Second, offering remote work helps companies attract and retain top talent. Many skilled professionals now consider flexible work arrangements a key factor when choosing an employer, and companies that refuse to adapt risk losing their best people to competitors.\n\nI understand that some argue remote work can reduce team collaboration and weaken company culture. However, this concern can be addressed through regular virtual meetings, team-building activities, and occasional in-person gatherings. Many successful companies have already demonstrated that strong cultures can thrive in remote environments.\n\nIn conclusion, I encourage the association to recommend that companies embrace remote work as a standard option. The benefits to both employees and employers far outweigh the challenges.',
    usefulVocabulary: [
      'flexibility',
      'productivity',
      'collaboration',
      'work-life balance',
      'commuting',
      'retention',
      'adaptable',
      'competitive',
    ],
    usefulPatterns: [
      'I strongly believe that companies should...',
      'Remote work significantly improves...',
      'I understand that some argue..., however, this concern can be addressed by...',
      'The benefits to both employees and employers far outweigh the challenges.',
    ],
    usefulIdioms: [
      'the best of both worlds',
      'move with the times',
      'a win-win situation',
    ],
    structureTemplate: [
      'Opening: State your position clearly on the remote work question.',
      'Body 1: Present your first reason with supporting details or examples.',
      'Body 2: Present your second reason and address an opposing argument.',
      'Closing: Summarize your position and offer a clear recommendation.',
    ],
    commonMistakes: [
      'Failing to acknowledge the opposing viewpoint before countering it.',
      'Using personal anecdotes without connecting them to a broader argument.',
      'Not providing a clear conclusion or recommendation at the end.',
    ],
  },

  // 12. Is social media good for society?
  {
    id: 'writing_social_media',
    title: 'Is Social Media Good for Society?',
    description:
      'Respond to a survey about whether social media has a positive or negative effect on society.',
    taskType: 'survey',
    clbLevel: 7,
    icon: '📱',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'A Canadian research organization is conducting a public survey on the impact of social media on modern society. They want to hear from citizens about whether social media platforms like Facebook, Instagram, and TikTok are beneficial or harmful. Some people believe social media connects communities and enables free expression, while others argue it spreads misinformation and harms mental health. You have been invited to share your views.',
    instructions: [
      'State clearly whether you believe social media is overall positive or negative for society.',
      'Provide at least two well-developed reasons to support your position.',
      'Address one argument from the opposing side and explain why your position is still stronger.',
      'End with a thoughtful conclusion that summarizes your view.',
    ],
    sampleResponse:
      'I am writing in response to the survey about the impact of social media on society. While I recognize that social media offers certain benefits, I believe that overall, its negative effects outweigh the positives.\n\nFirst, social media has been shown to have a harmful effect on mental health, particularly among young people. Studies have linked excessive social media use to increased rates of anxiety, depression, and low self-esteem. The constant pressure to present a perfect life online creates unrealistic expectations and unhealthy comparisons. Second, social media platforms have become major channels for the spread of misinformation. False news stories, conspiracy theories, and misleading health advice circulate rapidly, making it difficult for people to distinguish between reliable information and fiction.\n\nAdmittedly, social media does help people stay connected with friends and family, especially those who live far away. However, the quality of these online connections is often shallow compared to real-life relationships, and excessive screen time can actually reduce meaningful face-to-face interactions.\n\nIn conclusion, I believe society needs to take a more critical approach to social media use. Stricter regulations on content and stronger digital literacy education would help reduce its negative impact.',
    usefulVocabulary: [
      'misinformation',
      'mental health',
      'self-esteem',
      'addiction',
      'connectivity',
      'regulation',
      'digital literacy',
      'platform',
    ],
    usefulPatterns: [
      'While I recognize that... offers certain benefits, I believe that overall...',
      'Studies have linked... to increased rates of...',
      'Admittedly, social media does help..., however...',
      'I believe society needs to take a more critical approach to...',
    ],
    usefulIdioms: [
      'a double-edged sword',
      'take something with a grain of salt',
      'the tip of the iceberg',
    ],
    structureTemplate: [
      'Opening: State your overall position on whether social media is positive or negative.',
      'Body 1: Present your first reason with evidence or examples.',
      'Body 2: Present your second reason and address an opposing argument.',
      'Closing: Summarize your view and suggest a constructive way forward.',
    ],
    commonMistakes: [
      'Giving a vague opinion without taking a clear stance.',
      'Listing pros and cons without explaining which side is stronger and why.',
      'Forgetting to include a constructive conclusion or recommendation.',
    ],
  },

  // 13. Should public transit be free?
  {
    id: 'writing_free_transit',
    title: 'Should Public Transit Be Free?',
    description:
      'Respond to a survey about whether public transit should be made free for all residents.',
    taskType: 'survey',
    clbLevel: 6,
    icon: '🚌',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'Your city council is conducting a survey to gather public opinion on a proposal to make public transit completely free for all residents. Supporters say it would reduce traffic, lower pollution, and help low-income families. Opponents argue that it would be too expensive for the city and could lead to overcrowded buses and trains with reduced quality of service. You have been asked to share your opinion.',
    instructions: [
      'State whether you support or oppose making public transit free.',
      'Provide at least two reasons to support your position.',
      'Address one concern from the opposing side and explain how it could be managed.',
      'Conclude with a clear recommendation to the city council.',
    ],
    sampleResponse:
      'I am writing in response to the city council\'s survey on making public transit free for all residents. I fully support this proposal and believe it would bring significant benefits to our community.\n\nFirst, free public transit would greatly reduce traffic congestion in our city. Many residents currently drive because they find transit fares too expensive or inconvenient. Removing the cost barrier would encourage more people to leave their cars at home, resulting in less traffic and faster commute times for everyone. Second, this initiative would be a major step toward reducing air pollution and fighting climate change. Fewer cars on the road means lower carbon emissions, cleaner air, and a healthier environment for all residents.\n\nI understand that some people are concerned about the cost of funding free transit and the potential for overcrowding. However, the city could fund this program through a modest increase in property taxes or by reallocating funds from road expansion projects. Additionally, increased ridership would justify expanding service with more buses and trains.\n\nIn conclusion, I urge the city council to adopt this forward-thinking proposal. Free transit would make our city greener, more equitable, and more livable for everyone.',
    usefulVocabulary: [
      'congestion',
      'emissions',
      'equitable',
      'ridership',
      'infrastructure',
      'sustainable',
      'accessible',
    ],
    usefulPatterns: [
      'I fully support this proposal and believe it would bring significant benefits to...',
      'Removing the cost barrier would encourage more people to...',
      'I understand that some people are concerned about..., however...',
      'I urge the city council to adopt this forward-thinking proposal.',
    ],
    usefulIdioms: [
      'level the playing field',
      'a step in the right direction',
    ],
    structureTemplate: [
      'Opening: State your position on whether public transit should be free.',
      'Body 1: Present your first supporting reason with details.',
      'Body 2: Present your second reason and address a concern from opponents.',
      'Closing: Summarize and provide a clear recommendation to the city council.',
    ],
    commonMistakes: [
      'Not addressing the financial concerns about how free transit would be funded.',
      'Presenting only emotional arguments without practical reasoning.',
      'Forgetting to offer a clear recommendation in the conclusion.',
    ],
  },

  // 14. Are standardized tests fair?
  {
    id: 'writing_standardized_tests',
    title: 'Are Standardized Tests Fair?',
    description:
      'Respond to a survey about whether standardized tests are a fair way to evaluate students.',
    taskType: 'survey',
    clbLevel: 7,
    icon: '📝',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'A provincial education board is reviewing its assessment policies and has sent a survey to parents, teachers, and community members. They want to know whether standardized tests are a fair and effective way to evaluate student achievement. Some believe that standardized tests provide an objective measure of knowledge, while others argue that they favour certain groups of students and do not reflect true learning. You have been asked to respond.',
    instructions: [
      'State whether you believe standardized tests are a fair way to evaluate students.',
      'Provide at least two reasons to support your position.',
      'Acknowledge one point from the opposing side and explain why your view is still valid.',
      'Offer a constructive recommendation to the education board.',
    ],
    sampleResponse:
      'I am writing in response to the education board\'s survey about standardized testing. I believe that while standardized tests serve a purpose, they are not a fully fair or effective way to evaluate student achievement.\n\nFirst, standardized tests often fail to account for the diverse learning styles and abilities of students. Some students excel at written exams, while others demonstrate their knowledge better through projects, presentations, or practical assignments. By relying heavily on one format, we risk overlooking talented students who simply do not perform well under timed test conditions. Second, standardized tests can create an unfair advantage for students from higher-income families who have access to private tutoring, test preparation courses, and other resources that lower-income students may not be able to afford.\n\nI acknowledge that standardized tests do provide a consistent benchmark for comparing student performance across different schools and regions. This can be valuable for identifying areas where the education system needs improvement. However, this benefit should not come at the cost of reducing a student\'s entire academic journey to a single test score.\n\nI recommend that the education board adopt a more balanced assessment approach that combines standardized tests with portfolio-based evaluations, teacher assessments, and project work.',
    usefulVocabulary: [
      'assessment',
      'benchmark',
      'equitable',
      'curriculum',
      'evaluation',
      'bias',
      'holistic',
      'diverse',
    ],
    usefulPatterns: [
      'While standardized tests serve a purpose, they are not a fully fair...',
      'Standardized tests often fail to account for...',
      'By relying heavily on one format, we risk overlooking...',
      'I recommend that the education board adopt a more balanced approach that combines...',
    ],
    usefulIdioms: [
      'a level playing field',
      'one size does not fit all',
      'teach to the test',
    ],
    structureTemplate: [
      'Opening: State your overall position on standardized tests.',
      'Body 1: Present your first reason with examples or evidence.',
      'Body 2: Present your second reason and acknowledge an opposing point.',
      'Closing: Offer a constructive recommendation for a better assessment system.',
    ],
    commonMistakes: [
      'Taking an extreme position without acknowledging any value in standardized testing.',
      'Not providing concrete examples to support your arguments.',
      'Failing to offer a constructive alternative or recommendation.',
    ],
  },

  // 15. Should voting be mandatory?
  {
    id: 'writing_mandatory_voting',
    title: 'Should Voting Be Mandatory?',
    description:
      'Respond to a survey about whether voting in elections should be mandatory for all citizens.',
    taskType: 'survey',
    clbLevel: 7,
    icon: '🗳️',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'Elections Canada is conducting a public consultation on democratic engagement. One of the questions asks whether voting in federal elections should be made mandatory for all eligible Canadian citizens, with a small fine for those who do not vote. Some believe mandatory voting would lead to a more representative government, while others feel it violates individual freedom. You have been asked to share your perspective.',
    instructions: [
      'State whether you support or oppose mandatory voting.',
      'Provide at least two well-reasoned arguments to support your position.',
      'Address one argument from the opposing side and counter it effectively.',
      'Conclude with a clear recommendation to Elections Canada.',
    ],
    sampleResponse:
      'I am writing in response to the consultation on mandatory voting in federal elections. I believe that making voting mandatory would strengthen Canadian democracy and lead to a more representative government.\n\nFirst, mandatory voting would ensure that election results truly reflect the will of the entire population, not just those who choose to participate. Currently, voter turnout in Canadian elections often falls below 70 percent, meaning that a significant portion of the population has no voice in choosing their representatives. Second, mandatory voting would encourage citizens to become more informed about political issues and candidates. Knowing they are required to vote, people would be more likely to research party platforms and engage in political discussions.\n\nSome may argue that mandatory voting violates personal freedom, as citizens should have the right to choose whether or not to participate. However, voting is a civic duty similar to paying taxes or serving on a jury. A small fine for not voting, with exemptions for valid reasons, would be a reasonable way to enforce participation without being overly restrictive.\n\nIn conclusion, I recommend that Elections Canada seriously consider implementing mandatory voting. It would produce more representative outcomes and create a more engaged and informed citizenry.',
    usefulVocabulary: [
      'democratic',
      'turnout',
      'representation',
      'civic duty',
      'engagement',
      'constituency',
      'electorate',
      'mandate',
    ],
    usefulPatterns: [
      'I believe that making voting mandatory would strengthen...',
      'Currently, voter turnout often falls below... percent, meaning that...',
      'Some may argue that..., however, voting is a civic duty similar to...',
      'I recommend that Elections Canada seriously consider implementing...',
    ],
    usefulIdioms: [
      'have a say',
      'the silent majority',
      'exercise one\'s rights',
    ],
    structureTemplate: [
      'Opening: State your clear position on mandatory voting.',
      'Body 1: Present your first argument with supporting details.',
      'Body 2: Present your second argument and address an opposing viewpoint.',
      'Closing: Provide a clear recommendation to Elections Canada.',
    ],
    commonMistakes: [
      'Confusing the right to vote with the obligation to vote in your argument.',
      'Not addressing the freedom-of-choice argument from opponents.',
      'Ending without a clear and specific recommendation.',
    ],
  },

  // 16. Is homework necessary for students?
  {
    id: 'writing_homework',
    title: 'Is Homework Necessary for Students?',
    description:
      'Respond to a survey about whether homework is necessary and beneficial for student learning.',
    taskType: 'survey',
    clbLevel: 6,
    icon: '📚',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'A school district in your province is considering a new policy on homework. They are surveying parents and community members to decide whether to reduce the amount of homework assigned to elementary school students. Some educators believe homework reinforces what students learn in class, while others argue that too much homework causes stress and takes away from family time and extracurricular activities. You have been asked to respond.',
    instructions: [
      'State your position on whether homework is necessary for students.',
      'Provide at least two reasons to support your opinion.',
      'Acknowledge one benefit or concern from the opposing view and address it.',
      'Conclude with a recommendation to the school district.',
    ],
    sampleResponse:
      'I am writing in response to the school district\'s survey on homework policy for elementary students. I believe that while some homework can be beneficial, the amount currently assigned is excessive and should be significantly reduced.\n\nFirst, young children need time after school to rest, play, and spend quality time with their families. Excessive homework cuts into these essential activities and can lead to stress and burnout at an early age. Research has shown that children who have time for free play and creative activities develop stronger social and emotional skills. Second, the educational benefits of homework for elementary-aged children are limited. Studies suggest that at this level, homework has little impact on academic performance compared to older students, who can handle independent study more effectively.\n\nI acknowledge that homework can help students develop discipline and time management skills. However, these skills can also be taught through shorter, more meaningful tasks rather than hours of repetitive worksheets.\n\nI recommend that the school district adopt a policy of assigning no more than 20 minutes of homework per night for elementary students, focusing on reading and creative projects rather than rote exercises.',
    usefulVocabulary: [
      'burnout',
      'extracurricular',
      'reinforcement',
      'discipline',
      'repetitive',
      'academic performance',
      'well-being',
    ],
    usefulPatterns: [
      'While some homework can be beneficial, the amount currently assigned is...',
      'Research has shown that children who have time for... develop...',
      'I acknowledge that homework can help students develop..., however...',
      'I recommend that the school district adopt a policy of...',
    ],
    usefulIdioms: [
      'all work and no play',
      'quality over quantity',
    ],
    structureTemplate: [
      'Opening: State your position on whether homework is necessary.',
      'Body 1: Provide your first reason with supporting evidence.',
      'Body 2: Provide your second reason and address a point from the opposing side.',
      'Closing: Offer a specific, practical recommendation to the school district.',
    ],
    commonMistakes: [
      'Taking an extreme position without acknowledging any benefits of homework.',
      'Relying on personal opinion alone without referencing common knowledge or research.',
      'Not providing a specific and actionable recommendation.',
    ],
  },

  // 17. Should plastic bags be banned?
  {
    id: 'writing_plastic_bags',
    title: 'Should Plastic Bags Be Banned?',
    description:
      'Respond to a survey about whether plastic bags should be completely banned in your city.',
    taskType: 'survey',
    clbLevel: 6,
    icon: '🛍️',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'Your municipal government is conducting a public survey on whether single-use plastic bags should be completely banned from all stores in the city. Currently, stores charge a small fee for plastic bags, but many residents still use them regularly. Environmental groups want a full ban, while some business owners and consumers believe the current fee system is sufficient. You have been invited to share your opinion.',
    instructions: [
      'State whether you support or oppose a complete ban on plastic bags.',
      'Provide at least two reasons to support your position.',
      'Address one concern from the opposing side and suggest how it could be resolved.',
      'Conclude with a clear recommendation to the municipal government.',
    ],
    sampleResponse:
      'I am writing in response to the municipal survey on banning single-use plastic bags. I strongly support a complete ban and believe it is a necessary step to protect our environment.\n\nFirst, plastic bags are one of the most common forms of litter and take hundreds of years to decompose. They pollute our waterways, harm wildlife, and contribute to the growing problem of plastic waste in landfills and oceans. A complete ban would significantly reduce this pollution. Second, the current fee system, while helpful, has not been effective enough. Many shoppers still choose to pay the small charge rather than bring reusable bags. A full ban would eliminate the option entirely and create a lasting change in consumer behaviour.\n\nI understand that some business owners are concerned about the cost of switching to alternative packaging and that some customers may find it inconvenient at first. However, affordable reusable bags and paper alternatives are already widely available. The city could also provide a transition period of several months to allow businesses and residents to adjust.\n\nIn conclusion, I recommend that the city implement a complete ban on single-use plastic bags. The long-term environmental benefits clearly justify the short-term adjustment period.',
    usefulVocabulary: [
      'decompose',
      'landfill',
      'reusable',
      'biodegradable',
      'pollution',
      'sustainable',
      'transition',
    ],
    usefulPatterns: [
      'I strongly support a complete ban and believe it is a necessary step to...',
      'The current fee system, while helpful, has not been effective enough.',
      'I understand that some... are concerned about..., however...',
      'The long-term environmental benefits clearly justify the short-term adjustment period.',
    ],
    usefulIdioms: [
      'think green',
      'a drop in the ocean',
    ],
    structureTemplate: [
      'Opening: State your clear position on the plastic bag ban.',
      'Body 1: Present your first argument with environmental evidence.',
      'Body 2: Present your second argument and address a concern from opponents.',
      'Closing: Provide a clear recommendation and acknowledge the transition process.',
    ],
    commonMistakes: [
      'Not acknowledging the practical challenges for businesses and consumers.',
      'Using emotional language without supporting facts or reasoning.',
      'Failing to suggest a practical transition plan for the ban.',
    ],
  },

  // 18. Are zoos ethical?
  {
    id: 'writing_zoos',
    title: 'Are Zoos Ethical?',
    description:
      'Respond to a survey about whether keeping animals in zoos is ethical and justified.',
    taskType: 'survey',
    clbLevel: 7,
    icon: '🦁',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'A national animal welfare organization is conducting a public survey to gather opinions on whether zoos should continue to operate in Canada. Some people believe zoos play an important role in conservation, education, and research, while others argue that keeping wild animals in captivity is inherently cruel, regardless of the conditions. You have been invited to share your perspective on this issue.',
    instructions: [
      'State whether you believe zoos are ethical and should continue to operate.',
      'Provide at least two reasons to support your position.',
      'Acknowledge one argument from the opposing side and explain why your position is still valid.',
      'Conclude with a thoughtful recommendation about the future of zoos.',
    ],
    sampleResponse:
      'I am writing in response to the survey regarding the ethics of zoos in Canada. I believe that well-managed, modern zoos serve an important purpose and should continue to operate, provided they meet high standards of animal welfare.\n\nFirst, zoos play a critical role in the conservation of endangered species. Many species that would have gone extinct in the wild, such as the black-footed ferret and the California condor, have been saved through zoo-based breeding programs. Without these efforts, we would have permanently lost irreplaceable biodiversity. Second, zoos provide valuable educational experiences for the public, especially children. Seeing animals in person fosters a deeper connection with nature and inspires future generations to care about wildlife conservation.\n\nI acknowledge that some zoos have historically kept animals in poor conditions, with enclosures that are far too small and environments that do not meet the animals\' natural needs. This is unacceptable. However, the solution is not to close all zoos but to enforce strict regulations that ensure animals are kept in spacious, enriched habitats that prioritize their well-being.\n\nIn conclusion, I recommend that Canada strengthen its zoo accreditation standards and require all facilities to meet rigorous animal welfare criteria.',
    usefulVocabulary: [
      'captivity',
      'conservation',
      'endangered',
      'biodiversity',
      'accreditation',
      'welfare',
      'habitat',
      'enclosure',
    ],
    usefulPatterns: [
      'I believe that well-managed, modern zoos serve an important purpose...',
      'Many species that would have gone extinct... have been saved through...',
      'I acknowledge that some zoos have historically..., however, the solution is not to...',
      'I recommend that Canada strengthen its... standards and require all facilities to...',
    ],
    usefulIdioms: [
      'the lesser of two evils',
      'a necessary evil',
      'survival of the fittest',
    ],
    structureTemplate: [
      'Opening: State your clear position on whether zoos are ethical.',
      'Body 1: Present your first argument, such as conservation benefits.',
      'Body 2: Present your second argument and address concerns about animal welfare.',
      'Closing: Recommend specific actions to improve zoo standards and accountability.',
    ],
    commonMistakes: [
      'Ignoring the valid concerns about animal welfare in captivity.',
      'Treating all zoos as the same rather than distinguishing between good and bad facilities.',
      'Not offering a constructive recommendation for improving zoo practices.',
    ],
  },

  // 19. Should university education be free?
  {
    id: 'writing_free_university',
    title: 'Should University Education Be Free?',
    description:
      'Respond to a survey about whether university education should be made free for all students.',
    taskType: 'survey',
    clbLevel: 7,
    icon: '🎓',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'The federal government is conducting a public consultation on higher education funding in Canada. One proposal under consideration is making university education free for all Canadian citizens, funded through increased taxes. Supporters argue this would reduce inequality and create a more educated workforce, while critics worry about the financial burden on taxpayers and the potential devaluation of degrees. You have been asked to respond.',
    instructions: [
      'State whether you support or oppose making university education free.',
      'Provide at least two arguments to support your position.',
      'Address one concern from the opposing side and explain how it could be managed.',
      'Conclude with a clear recommendation to the government.',
    ],
    sampleResponse:
      'I am writing in response to the government\'s consultation on making university education free in Canada. I strongly support this proposal and believe it would benefit both individuals and society as a whole.\n\nFirst, the rising cost of university tuition has become a significant barrier to higher education, particularly for students from low-income and middle-class families. Many talented young people are forced to take on enormous student debt or forgo university altogether because they cannot afford it. Free education would ensure that access to higher learning is based on ability and merit, not financial circumstances. Second, a more educated population contributes to a stronger economy. Countries that invest in free or affordable higher education, such as Germany and Norway, consistently rank among the most innovative and competitive economies in the world.\n\nCritics may argue that free university education would place too great a burden on taxpayers. However, the long-term economic returns of a more educated workforce, including higher tax revenues and lower unemployment rates, would offset the initial investment over time.\n\nIn conclusion, I recommend that the government move forward with this proposal. Investing in free university education is an investment in the future prosperity of all Canadians.',
    usefulVocabulary: [
      'tuition',
      'accessible',
      'merit',
      'inequality',
      'workforce',
      'prosperity',
      'investment',
      'subsidize',
    ],
    usefulPatterns: [
      'I strongly support this proposal and believe it would benefit both...',
      'The rising cost of... has become a significant barrier to...',
      'Countries that invest in... consistently rank among the most...',
      'The long-term economic returns... would offset the initial investment over time.',
    ],
    usefulIdioms: [
      'level the playing field',
      'break the bank',
      'knowledge is power',
    ],
    structureTemplate: [
      'Opening: State your position on whether university education should be free.',
      'Body 1: Present your first argument about access and equality.',
      'Body 2: Present your second argument about economic benefits and address a counterpoint.',
      'Closing: Summarize your view and offer a clear recommendation to the government.',
    ],
    commonMistakes: [
      'Not addressing the legitimate concern about how free education would be funded.',
      'Conflating free education with lower-quality education without evidence.',
      'Failing to provide international examples or evidence to support your position.',
    ],
  },

  // 20. Is technology making us less social?
  {
    id: 'writing_technology_social',
    title: 'Is Technology Making Us Less Social?',
    description:
      'Respond to a survey about whether technology is reducing meaningful social interaction.',
    taskType: 'survey',
    clbLevel: 7,
    icon: '🤖',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'A Canadian sociology research institute is conducting a nationwide survey on the relationship between technology use and social interaction. They want to understand whether smartphones, social media, and other digital technologies are making people less social in their daily lives. Some believe technology has enhanced human connection by making communication easier, while others argue it has replaced genuine, face-to-face interaction with shallow online exchanges. You have been invited to respond.',
    instructions: [
      'State your position on whether technology is making people less social.',
      'Provide at least two well-developed reasons to support your view.',
      'Acknowledge one argument from the opposing side and counter it with your reasoning.',
      'Conclude with a thoughtful reflection and recommendation.',
    ],
    sampleResponse:
      'I am writing in response to the research institute\'s survey on technology and social interaction. I believe that while technology has made communication more convenient, it is, on balance, making us less genuinely social.\n\nFirst, the widespread use of smartphones has fundamentally changed the way people interact in shared spaces. It is now common to see families at restaurants, friends at coffee shops, and commuters on buses all staring at their screens rather than engaging with one another. The constant pull of notifications and feeds has made it difficult for people to be fully present in the moment. Second, social media interactions, while frequent, tend to be superficial. Liking a photo or sending a brief message does not provide the depth, warmth, and emotional connection that comes from a real conversation. Over time, this can lead to feelings of isolation despite being constantly connected online.\n\nSome argue that technology enables people to maintain relationships across long distances, which is a valid point. However, relying primarily on digital communication for all relationships, including local ones, weakens the bonds that require in-person effort and attention.\n\nIn conclusion, I recommend encouraging intentional screen-free time in homes and communities to prioritize meaningful human connection.',
    usefulVocabulary: [
      'interaction',
      'superficial',
      'isolation',
      'genuine',
      'engagement',
      'distraction',
      'intentional',
      'connectivity',
    ],
    usefulPatterns: [
      'While technology has made communication more convenient, it is, on balance...',
      'The widespread use of... has fundamentally changed the way people...',
      'Over time, this can lead to feelings of... despite being constantly...',
      'I recommend encouraging intentional... to prioritize meaningful...',
    ],
    usefulIdioms: [
      'lost in one\'s own world',
      'a blessing and a curse',
      'out of sight, out of mind',
    ],
    structureTemplate: [
      'Opening: State your position on whether technology reduces social interaction.',
      'Body 1: Present your first argument with observable examples.',
      'Body 2: Present your second argument and acknowledge a valid opposing point.',
      'Closing: Provide a thoughtful reflection and a practical recommendation.',
    ],
    commonMistakes: [
      'Making sweeping generalizations without acknowledging any positive aspects of technology.',
      'Not distinguishing between different types of technology and their effects.',
      'Ending without a constructive suggestion for balancing technology and social life.',
    ],
  },
];

export const writingPrompts: WritingPrompt[] = [
  ...existingPrompts,
  ...newWritingPrompts,
];
