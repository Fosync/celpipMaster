import type { ListeningScript } from './types';

export const newListeningScriptsD: ListeningScript[] = [
  // ============================================================
  // CLB 6 — Script 1: Discussing Rent Increase with Landlord
  // ============================================================
  {
    id: 'listening-rent-increase-discussion',
    title: 'Discussing Rent Increase with Landlord',
    description:
      'Listen to a conversation between a tenant and landlord about a rent increase.',
    format: 'dialogue',
    clbLevel: 6,
    icon: '🏠',
    timeLimit: 240,
    segments: [
      {
        speaker: 'Tenant',
        text: 'Hello Mr. Chen, thank you for meeting with me. I received the notice about the rent increase and I wanted to discuss it with you.',
        voiceGender: 'female',
      },
      {
        speaker: 'Landlord',
        text: 'Of course, Sarah. I understand this can be concerning. The increase is set at four percent starting in May. I want you to know that I gave the full ninety days of notice as required by the province.',
        voiceGender: 'male',
      },
      {
        speaker: 'Tenant',
        text: 'I appreciate the proper notice. But four percent feels quite high, especially since I have been a reliable tenant here for three years. I have never missed a payment or caused any problems.',
        voiceGender: 'female',
      },
      {
        speaker: 'Landlord',
        text: 'You are absolutely right, and I value having you as a tenant. The thing is, property taxes went up significantly this year, and the cost of building insurance has also increased. I am trying to keep the rent as reasonable as I can.',
        voiceGender: 'male',
      },
      {
        speaker: 'Tenant',
        text: 'I understand that costs go up. Would you be open to a smaller increase, maybe two and a half percent? That would be easier for me to manage on my current salary.',
        voiceGender: 'female',
      },
      {
        speaker: 'Landlord',
        text: 'Two and a half percent is a bit low for me to cover the expenses. How about we meet in the middle at three percent? That would bring your rent from fifteen hundred to fifteen forty-five.',
        voiceGender: 'male',
      },
      {
        speaker: 'Tenant',
        text: 'Three percent sounds more manageable. Could I also ask about the leaking faucet in the bathroom? I reported it two months ago and it still has not been fixed.',
        voiceGender: 'female',
      },
      {
        speaker: 'Landlord',
        text: 'I apologize about that. I have been having trouble finding a plumber on short notice. Tell you what, I will get it fixed within the next two weeks, and I will also replace the old dishwasher that has been giving you problems. Does that seem fair?',
        voiceGender: 'male',
      },
      {
        speaker: 'Tenant',
        text: 'That is very fair, Mr. Chen. So just to confirm, the new rent will be fifteen forty-five starting May first, and you will take care of the faucet and dishwasher before then?',
        voiceGender: 'female',
      },
      {
        speaker: 'Landlord',
        text: 'Exactly. I will send you an updated lease agreement by email this week. Thank you for being so reasonable about this, Sarah. I really do not want to lose a good tenant like you.',
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'listening-rent-increase-discussion-q1',
        question: 'What was the original rent increase percentage the landlord proposed?',
        options: [
          'Two and a half percent',
          'Three percent',
          'Four percent',
          'Five percent',
        ],
        correctIndex: 2,
        explanation:
          'The landlord initially proposed a four percent increase. They later negotiated down to three percent.',
      },
      {
        id: 'listening-rent-increase-discussion-q2',
        question: 'How long has Sarah been living in the apartment?',
        options: [
          'One year',
          'Two years',
          'Three years',
          'Five years',
        ],
        correctIndex: 2,
        explanation:
          'Sarah mentioned she has been a reliable tenant for three years.',
      },
      {
        id: 'listening-rent-increase-discussion-q3',
        question: 'What is the main reason the landlord gave for the rent increase?',
        options: [
          'He wants to renovate the building',
          'Property taxes and insurance costs went up',
          'The neighborhood has become more popular',
          'He is planning to sell the property',
        ],
        correctIndex: 1,
        explanation:
          'The landlord explained that property taxes went up significantly and building insurance costs also increased.',
      },
      {
        id: 'listening-rent-increase-discussion-q4',
        question: 'What additional repair did the landlord promise besides fixing the faucet?',
        options: [
          'Painting the walls',
          'Replacing the windows',
          'Replacing the old dishwasher',
          'Installing a new heater',
        ],
        correctIndex: 2,
        explanation:
          'The landlord offered to replace the old dishwasher that had been giving Sarah problems, in addition to fixing the leaking faucet.',
      },
    ],
    keyVocabulary: [
      { word: 'rent increase', definition: 'A rise in the amount of money paid for housing', turkish: 'kira artisi' },
      { word: 'lease agreement', definition: 'A legal contract between a landlord and tenant for renting property', turkish: 'kira sozlesmesi' },
      { word: 'property taxes', definition: 'Taxes paid to the government based on the value of owned property', turkish: 'emlak vergisi' },
      { word: 'tenant', definition: 'A person who rents and lives in a property', turkish: 'kiraci' },
      { word: 'notice', definition: 'A formal written warning or announcement about a future action', turkish: 'bildirim' },
      { word: 'negotiate', definition: 'To discuss terms in order to reach an agreement', turkish: 'muzakere etmek' },
    ],
  },

  // ============================================================
  // CLB 6 — Script 2: Job Interview — Tell Me About Yourself
  // ============================================================
  {
    id: 'listening-job-interview-yourself',
    title: 'Job Interview — Tell Me About Yourself',
    description:
      'Listen to a job interview where a candidate answers common interview questions.',
    format: 'dialogue',
    clbLevel: 6,
    icon: '💼',
    timeLimit: 240,
    segments: [
      {
        speaker: 'Interviewer',
        text: 'Good morning. Thank you for coming in today. Please have a seat. My name is Karen Walsh, and I am the hiring manager for the customer service department. Let us get started. Can you tell me a little about yourself?',
        voiceGender: 'female',
      },
      {
        speaker: 'Candidate',
        text: 'Thank you for having me, Karen. My name is David Okafor. I moved to Canada from Nigeria about two years ago. I have a diploma in business administration, and I worked as a customer service representative at a telecommunications company back home for four years.',
        voiceGender: 'male',
      },
      {
        speaker: 'Interviewer',
        text: 'That is great experience. What made you apply for this particular position with our company?',
        voiceGender: 'female',
      },
      {
        speaker: 'Candidate',
        text: 'I have heard excellent things about your company culture. I also noticed that you offer training and career development opportunities, which is very important to me. I want to grow in a company that invests in its employees.',
        voiceGender: 'male',
      },
      {
        speaker: 'Interviewer',
        text: 'We definitely value employee development. Can you give me an example of a time when you dealt with a difficult customer?',
        voiceGender: 'female',
      },
      {
        speaker: 'Candidate',
        text: 'Sure. At my previous job, I had a customer who was very upset because his internet service had been down for three days. He was shouting and threatening to cancel his contract. I stayed calm, apologized for the inconvenience, and escalated the issue to the technical team. Within two hours, his service was restored, and he actually thanked me for handling it so professionally.',
        voiceGender: 'male',
      },
      {
        speaker: 'Interviewer',
        text: 'That is exactly the kind of approach we are looking for. Now, what would you say is your biggest weakness?',
        voiceGender: 'female',
      },
      {
        speaker: 'Candidate',
        text: 'Honestly, I sometimes take on too much work because I have a hard time saying no. I have been working on that by learning to prioritize my tasks and communicate my workload clearly with my supervisor.',
        voiceGender: 'male',
      },
      {
        speaker: 'Interviewer',
        text: 'Good self-awareness. One last question: when would you be available to start?',
        voiceGender: 'female',
      },
      {
        speaker: 'Candidate',
        text: 'I am available to start as early as next Monday. I am very excited about this opportunity and I am confident I can contribute to your team right away.',
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'listening-job-interview-yourself-q1',
        question: 'How long did David work in customer service at his previous job?',
        options: [
          'Two years',
          'Three years',
          'Four years',
          'Five years',
        ],
        correctIndex: 2,
        explanation:
          'David mentioned he worked as a customer service representative for four years at a telecommunications company.',
      },
      {
        id: 'listening-job-interview-yourself-q2',
        question: 'What attracted David to apply for this position?',
        options: [
          'The high salary and bonuses',
          'The company culture and training opportunities',
          'The short commute to work',
          'A recommendation from a friend',
        ],
        correctIndex: 1,
        explanation:
          'David said he heard excellent things about the company culture and noticed they offer training and career development opportunities.',
      },
      {
        id: 'listening-job-interview-yourself-q3',
        question: 'How did David resolve the situation with the angry customer?',
        options: [
          'He transferred the customer to his manager',
          'He offered a discount on the customer\'s bill',
          'He stayed calm, apologized, and escalated to the technical team',
          'He asked the customer to call back later',
        ],
        correctIndex: 2,
        explanation:
          'David stayed calm, apologized for the inconvenience, and escalated the issue to the technical team, resolving it within two hours.',
      },
      {
        id: 'listening-job-interview-yourself-q4',
        question: 'What weakness did David mention?',
        options: [
          'He is often late for work',
          'He takes on too much work and has difficulty saying no',
          'He struggles with learning new technology',
          'He does not work well in teams',
        ],
        correctIndex: 1,
        explanation:
          'David said he sometimes takes on too much work because he has a hard time saying no, but he is working on prioritizing tasks.',
      },
    ],
    keyVocabulary: [
      { word: 'hiring manager', definition: 'The person responsible for selecting and hiring new employees', turkish: 'ise alim muduru' },
      { word: 'career development', definition: 'The process of growing and advancing in a profession', turkish: 'kariyer gelisimi' },
      { word: 'escalate', definition: 'To raise an issue to a higher level of authority for resolution', turkish: 'ust makama iletmek' },
      { word: 'self-awareness', definition: 'Knowledge and understanding of your own character and abilities', turkish: 'oz farkindalik' },
      { word: 'prioritize', definition: 'To arrange tasks in order of importance', turkish: 'onceliklendirmek' },
      { word: 'contribute', definition: 'To give or add something valuable to a group effort', turkish: 'katki saglamak' },
    ],
  },

  // ============================================================
  // CLB 6 — Script 3: Calling Insurance About a Car Accident
  // ============================================================
  {
    id: 'listening-car-insurance-call',
    title: 'Calling Insurance About a Car Accident',
    description:
      'Listen to a policyholder calling their insurance company to report a car accident.',
    format: 'dialogue',
    clbLevel: 6,
    icon: '🚗',
    timeLimit: 240,
    segments: [
      {
        speaker: 'Insurance Agent',
        text: 'Thank you for calling Maple Leaf Insurance. My name is Rebecca. How can I help you today?',
        voiceGender: 'female',
      },
      {
        speaker: 'Policyholder',
        text: 'Hi Rebecca. My name is James Park. I need to report a car accident that happened this morning. My policy number is ML-7829451.',
        voiceGender: 'male',
      },
      {
        speaker: 'Insurance Agent',
        text: 'I am sorry to hear that, Mr. Park. Let me pull up your file. Okay, I have it. Can you tell me when and where the accident occurred?',
        voiceGender: 'female',
      },
      {
        speaker: 'Policyholder',
        text: 'It happened around eight thirty this morning at the intersection of King Street and Victoria Avenue. I was turning left when another car ran a red light and hit the passenger side of my vehicle.',
        voiceGender: 'male',
      },
      {
        speaker: 'Insurance Agent',
        text: 'That sounds scary. Was anyone injured in the accident?',
        voiceGender: 'female',
      },
      {
        speaker: 'Policyholder',
        text: 'Thankfully, no one was seriously hurt. My wife was in the passenger seat and she has some pain in her neck, so she is going to see her doctor this afternoon. The other driver seemed fine.',
        voiceGender: 'male',
      },
      {
        speaker: 'Insurance Agent',
        text: 'I am glad it was not more serious. Did you file a police report at the scene?',
        voiceGender: 'female',
      },
      {
        speaker: 'Policyholder',
        text: 'Yes, the police came and filed a report. The officer said the other driver was clearly at fault for running the red light. I have the report number right here. It is PR-2024-03567.',
        voiceGender: 'male',
      },
      {
        speaker: 'Insurance Agent',
        text: 'Perfect, that will be very helpful for processing your claim. Do you have any photos of the damage or the accident scene?',
        voiceGender: 'female',
      },
      {
        speaker: 'Policyholder',
        text: 'Yes, I took several photos with my phone right after the accident. The passenger door and rear panel are badly dented, and the side mirror is completely broken.',
        voiceGender: 'male',
      },
      {
        speaker: 'Insurance Agent',
        text: 'Great. I am going to open a claim for you right now. You will need to take your car to one of our approved repair shops for an estimate. I will email you a list of locations near you. Your deductible is five hundred dollars, but since the other driver was at fault, you may be able to recover that.',
        voiceGender: 'female',
      },
      {
        speaker: 'Policyholder',
        text: 'That sounds good. How long does the claim process usually take?',
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'listening-car-insurance-call-q1',
        question: 'What caused the accident?',
        options: [
          'James was speeding through the intersection',
          'The other driver ran a red light',
          'James failed to signal before turning',
          'The road was icy and slippery',
        ],
        correctIndex: 1,
        explanation:
          'James stated that the other car ran a red light and hit the passenger side of his vehicle while he was turning left.',
      },
      {
        id: 'listening-car-insurance-call-q2',
        question: 'Who was injured in the accident?',
        options: [
          'James had a broken arm',
          'The other driver was taken to hospital',
          'James\'s wife had some neck pain',
          'No one was affected at all',
        ],
        correctIndex: 2,
        explanation:
          'James mentioned that his wife was in the passenger seat and has some pain in her neck, so she planned to see her doctor.',
      },
      {
        id: 'listening-car-insurance-call-q3',
        question: 'What damage was done to James\'s car?',
        options: [
          'The front bumper and headlights were broken',
          'The windshield was cracked',
          'The passenger door, rear panel, and side mirror were damaged',
          'The engine stopped working after the accident',
        ],
        correctIndex: 2,
        explanation:
          'James described the damage as a badly dented passenger door and rear panel, with a completely broken side mirror.',
      },
      {
        id: 'listening-car-insurance-call-q4',
        question: 'What is James\'s insurance deductible?',
        options: [
          'Two hundred and fifty dollars',
          'Five hundred dollars',
          'Seven hundred and fifty dollars',
          'One thousand dollars',
        ],
        correctIndex: 1,
        explanation:
          'The insurance agent mentioned that James\'s deductible is five hundred dollars, but he may recover it since the other driver was at fault.',
      },
    ],
    keyVocabulary: [
      { word: 'policyholder', definition: 'A person who owns an insurance policy', turkish: 'police sahibi' },
      { word: 'deductible', definition: 'The amount you pay out of pocket before insurance covers the rest', turkish: 'muafiyet tutari' },
      { word: 'claim', definition: 'A formal request to an insurance company for payment after a loss', turkish: 'hasar talebi' },
      { word: 'at fault', definition: 'Being responsible or to blame for an accident', turkish: 'kusurlu' },
      { word: 'intersection', definition: 'The point where two or more roads cross each other', turkish: 'kavsak' },
      { word: 'estimate', definition: 'An approximate calculation of the cost of repairs', turkish: 'maliyet tahmini' },
      { word: 'police report', definition: 'An official document filed by police describing an incident', turkish: 'polis raporu' },
    ],
  },

  // ============================================================
  // CLB 6 — Script 4: Parent Calling School About Child's Absence
  // ============================================================
  {
    id: 'listening-school-absence-call',
    title: 'Parent Calling School About Child\'s Absence',
    description:
      'Listen to a parent calling a school to explain why their child missed school.',
    format: 'dialogue',
    clbLevel: 6,
    icon: '🏫',
    timeLimit: 240,
    segments: [
      {
        speaker: 'School Secretary',
        text: 'Good morning, Westwood Elementary. This is Linda speaking. How can I help you?',
        voiceGender: 'female',
      },
      {
        speaker: 'Parent',
        text: 'Hi Linda, this is Maria Santos. I am calling about my daughter, Sofia Santos, in Mrs. Thompson\'s grade three class. She was absent yesterday and today, and I wanted to let you know what is going on.',
        voiceGender: 'female',
      },
      {
        speaker: 'School Secretary',
        text: 'Thank you for calling, Mrs. Santos. We did notice Sofia was absent. Is everything all right?',
        voiceGender: 'female',
      },
      {
        speaker: 'Parent',
        text: 'She came down with the flu on Sunday night. She had a high fever and was vomiting, so I took her to the walk-in clinic yesterday morning. The doctor said she needs to rest at home for at least three days.',
        voiceGender: 'female',
      },
      {
        speaker: 'School Secretary',
        text: 'Oh, poor thing. I hope she feels better soon. Do you have a doctor\'s note? We require one for absences of three days or more.',
        voiceGender: 'female',
      },
      {
        speaker: 'Parent',
        text: 'Yes, the doctor gave me a note. I can bring it in when Sofia returns to school. That should be Thursday or Friday, depending on how she is feeling.',
        voiceGender: 'female',
      },
      {
        speaker: 'School Secretary',
        text: 'That is perfect. I will let Mrs. Thompson know. Would you like me to ask her to prepare any homework or assignments so Sofia does not fall behind?',
        voiceGender: 'female',
      },
      {
        speaker: 'Parent',
        text: 'That would be really helpful, thank you. I know there is a math test on Friday. Is there any way Sofia could take it next week instead?',
        voiceGender: 'female',
      },
      {
        speaker: 'School Secretary',
        text: 'I will pass that request along to Mrs. Thompson. Usually the school allows make-up tests within five school days of the original date, so that should not be a problem.',
        voiceGender: 'female',
      },
      {
        speaker: 'Parent',
        text: 'Wonderful. Thank you so much, Linda. One more thing. Sofia is worried about missing the class trip to the science centre next Wednesday. Is there any update on that?',
        voiceGender: 'female',
      },
      {
        speaker: 'School Secretary',
        text: 'The science centre trip is still happening next Wednesday. As long as Sofia is back by then and feeling well, she can absolutely go. Just make sure her permission form is handed in before the trip.',
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'listening-school-absence-call-q1',
        question: 'Why is Sofia absent from school?',
        options: [
          'She broke her arm and cannot write',
          'She has the flu with fever and vomiting',
          'The family is on vacation',
          'She has a dental appointment',
        ],
        correctIndex: 1,
        explanation:
          'Maria explained that Sofia came down with the flu on Sunday night with a high fever and vomiting.',
      },
      {
        id: 'listening-school-absence-call-q2',
        question: 'When does the school require a doctor\'s note?',
        options: [
          'For any absence',
          'For absences of two days or more',
          'For absences of three days or more',
          'Only for absences longer than a week',
        ],
        correctIndex: 2,
        explanation:
          'The school secretary said they require a doctor\'s note for absences of three days or more.',
      },
      {
        id: 'listening-school-absence-call-q3',
        question: 'What is Sofia concerned about missing?',
        options: [
          'A birthday party at school',
          'A math test on Friday',
          'The class trip to the science centre',
          'A school concert performance',
        ],
        correctIndex: 2,
        explanation:
          'Maria mentioned that Sofia is worried about missing the class trip to the science centre next Wednesday.',
      },
      {
        id: 'listening-school-absence-call-q4',
        question: 'How long does the school allow for make-up tests?',
        options: [
          'Within two school days',
          'Within three school days',
          'Within five school days',
          'Within ten school days',
        ],
        correctIndex: 2,
        explanation:
          'The secretary said the school usually allows make-up tests within five school days of the original date.',
      },
    ],
    keyVocabulary: [
      { word: 'absence', definition: 'Not being present at a place where you are expected', turkish: 'devamsizlik' },
      { word: 'walk-in clinic', definition: 'A medical clinic that accepts patients without an appointment', turkish: 'randevusuz klinik' },
      { word: 'doctor\'s note', definition: 'A written statement from a doctor confirming illness or medical visit', turkish: 'doktor raporu' },
      { word: 'make-up test', definition: 'A test taken at a later date because the student missed the original one', turkish: 'telafi sinavi' },
      { word: 'permission form', definition: 'A document parents sign to allow their child to participate in an activity', turkish: 'izin formu' },
      { word: 'fall behind', definition: 'To fail to keep up with others in progress or work', turkish: 'geride kalmak' },
    ],
  },

  // ============================================================
  // CLB 6 — Script 5: Complaining to Restaurant Manager
  // ============================================================
  {
    id: 'listening-restaurant-complaint',
    title: 'Complaining to Restaurant Manager',
    description:
      'Listen to a customer making a complaint to a restaurant manager about poor service and food quality.',
    format: 'dialogue',
    clbLevel: 6,
    icon: '🍽️',
    timeLimit: 240,
    segments: [
      {
        speaker: 'Customer',
        text: 'Excuse me, could I speak with the manager please? I have some concerns about our experience tonight.',
        voiceGender: 'female',
      },
      {
        speaker: 'Manager',
        text: 'Good evening. I am the manager, Tony Ricci. What seems to be the problem?',
        voiceGender: 'male',
      },
      {
        speaker: 'Customer',
        text: 'Well, first of all, we had a reservation for seven o\'clock and we were not seated until seven thirty. We were just standing near the entrance the whole time with no explanation.',
        voiceGender: 'female',
      },
      {
        speaker: 'Manager',
        text: 'I sincerely apologize for the wait. We had an unusually large party that ran over their reservation time. I understand that is frustrating.',
        voiceGender: 'male',
      },
      {
        speaker: 'Customer',
        text: 'I appreciate the apology, but that is not all. After we were finally seated, it took twenty-five minutes before anyone even came to take our drink order. We had to flag down a server ourselves.',
        voiceGender: 'female',
      },
      {
        speaker: 'Manager',
        text: 'That is not acceptable at all. We are short-staffed tonight because two servers called in sick, but that is no excuse for ignoring our guests.',
        voiceGender: 'male',
      },
      {
        speaker: 'Customer',
        text: 'And then when the food came, my husband ordered the steak medium-rare and it arrived well-done. My pasta was cold, as if it had been sitting in the kitchen for a while. We are celebrating our anniversary and this has really been disappointing.',
        voiceGender: 'female',
      },
      {
        speaker: 'Manager',
        text: 'I am truly sorry about your anniversary dinner. That is a special occasion and you deserve much better. I would like to have both dishes remade right away. I will personally make sure the kitchen gets it right this time.',
        voiceGender: 'male',
      },
      {
        speaker: 'Customer',
        text: 'We appreciate that, but honestly, at this point we have lost our appetite. We have been here for almost two hours and we have barely eaten anything.',
        voiceGender: 'female',
      },
      {
        speaker: 'Manager',
        text: 'I completely understand. Let me take care of your entire bill tonight. It is on the house. I would also like to give you a gift card for a hundred dollars so you can come back and have the experience you actually deserve. Would that be acceptable?',
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'listening-restaurant-complaint-q1',
        question: 'How long did the customer wait after her reservation time before being seated?',
        options: [
          'Fifteen minutes',
          'Twenty minutes',
          'Thirty minutes',
          'Forty-five minutes',
        ],
        correctIndex: 2,
        explanation:
          'The customer said they had a reservation for seven o\'clock and were not seated until seven thirty, a thirty-minute wait.',
      },
      {
        id: 'listening-restaurant-complaint-q2',
        question: 'Why was the restaurant short-staffed?',
        options: [
          'Two servers quit that day',
          'There was a staff meeting during dinner',
          'Two servers called in sick',
          'They were training new employees',
        ],
        correctIndex: 2,
        explanation:
          'The manager explained they were short-staffed because two servers called in sick.',
      },
      {
        id: 'listening-restaurant-complaint-q3',
        question: 'What special occasion was the customer celebrating?',
        options: [
          'A birthday',
          'A promotion at work',
          'Their wedding anniversary',
          'A graduation dinner',
        ],
        correctIndex: 2,
        explanation:
          'The customer mentioned they were celebrating their anniversary, which made the poor experience especially disappointing.',
      },
      {
        id: 'listening-restaurant-complaint-q4',
        question: 'How did the manager resolve the complaint?',
        options: [
          'He offered a twenty percent discount on the bill',
          'He offered to remake the dishes only',
          'He covered the entire bill and gave a hundred dollar gift card',
          'He offered free desserts and coffee',
        ],
        correctIndex: 2,
        explanation:
          'The manager offered to cover the entire bill and gave a hundred dollar gift card for a future visit.',
      },
    ],
    keyVocabulary: [
      { word: 'reservation', definition: 'An arrangement to have a table held at a restaurant for a specific time', turkish: 'rezervasyon' },
      { word: 'short-staffed', definition: 'Not having enough employees to handle the work', turkish: 'yetersiz personel' },
      { word: 'on the house', definition: 'Provided free of charge by the business', turkish: 'isletmeden ikram' },
      { word: 'flag down', definition: 'To signal or wave at someone to get their attention', turkish: 'isaret ederek durdurmak' },
      { word: 'gift card', definition: 'A prepaid card that can be used to make purchases at a store', turkish: 'hediye karti' },
      { word: 'lost our appetite', definition: 'No longer feeling hungry, often due to frustration or upset', turkish: 'istahimizi kaybettik' },
    ],
  },

  // ============================================================
  // CLB 6 — Script 6: Discussing Moving to a New City with Partner
  // ============================================================
  {
    id: 'listening-moving-new-city',
    title: 'Discussing Moving to a New City with Partner',
    description:
      'Listen to a couple discussing the pros and cons of moving to a different city for work.',
    format: 'dialogue',
    clbLevel: 6,
    icon: '🏙️',
    timeLimit: 240,
    segments: [
      {
        speaker: 'Wife',
        text: 'So I got a call from the recruiter today. They are officially offering me the position in Calgary. The salary is seventy-five thousand, which is fifteen thousand more than I make now.',
        voiceGender: 'female',
      },
      {
        speaker: 'Husband',
        text: 'Wow, that is a big jump. Congratulations on the offer. But Calgary is pretty far from here. We would be leaving everyone we know in Toronto.',
        voiceGender: 'male',
      },
      {
        speaker: 'Wife',
        text: 'I know, and that is the hardest part for me too. My parents are here, your brother is here. But think about the cost of living. We could actually afford to buy a house in Calgary. That is never going to happen for us in Toronto at this rate.',
        voiceGender: 'female',
      },
      {
        speaker: 'Husband',
        text: 'You have a point about housing. A three-bedroom house in Calgary costs about what we pay for our tiny one-bedroom apartment here. But what about my job? I cannot just leave. I have been with my company for six years.',
        voiceGender: 'male',
      },
      {
        speaker: 'Wife',
        text: 'I thought about that. Your company has an office in Calgary too. Could you ask about a transfer? Or even work remotely? A lot of companies are allowing that now.',
        voiceGender: 'female',
      },
      {
        speaker: 'Husband',
        text: 'I could ask, I suppose. My manager has been pretty flexible about remote work. But what about the kids? Emma just started at her new school and she finally made friends. And Ryan has his hockey team.',
        voiceGender: 'male',
      },
      {
        speaker: 'Wife',
        text: 'Kids are resilient. Emma would make new friends, and Calgary has amazing hockey programs for Ryan. Actually, I think the outdoor lifestyle there would be great for both of them. We would be close to the mountains.',
        voiceGender: 'female',
      },
      {
        speaker: 'Husband',
        text: 'The mountains are definitely a plus. I have always wanted to live closer to the Rockies. How long do they need an answer?',
        voiceGender: 'female',
      },
      {
        speaker: 'Wife',
        text: 'They gave me two weeks to decide. I think we should make a list of all the pros and cons and really think it through. This could be a fresh start for our family.',
        voiceGender: 'female',
      },
      {
        speaker: 'Husband',
        text: 'You are right. Let us sit down this weekend and go over everything properly. I am not saying no. I just want to make sure we are making the right decision for all of us.',
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'listening-moving-new-city-q1',
        question: 'How much more would the wife earn at the new job in Calgary?',
        options: [
          'Ten thousand dollars more',
          'Fifteen thousand dollars more',
          'Twenty thousand dollars more',
          'Twenty-five thousand dollars more',
        ],
        correctIndex: 1,
        explanation:
          'The wife said the salary is seventy-five thousand, which is fifteen thousand more than she currently makes.',
      },
      {
        id: 'listening-moving-new-city-q2',
        question: 'What is the main advantage of moving to Calgary according to the wife?',
        options: [
          'Better schools for the children',
          'Being closer to her parents',
          'The lower cost of living and ability to buy a house',
          'A shorter commute to work',
        ],
        correctIndex: 2,
        explanation:
          'The wife pointed out that the cost of living is lower in Calgary and they could actually afford to buy a house there.',
      },
      {
        id: 'listening-moving-new-city-q3',
        question: 'What is the husband\'s concern about his job?',
        options: [
          'He does not like his current job',
          'He has been with his company for six years and cannot just leave',
          'His company is closing down',
          'He just received a promotion',
        ],
        correctIndex: 1,
        explanation:
          'The husband was concerned about leaving his job because he has been with his company for six years.',
      },
      {
        id: 'listening-moving-new-city-q4',
        question: 'How long does the wife have to respond to the job offer?',
        options: [
          'One week',
          'Two weeks',
          'One month',
          'By the end of the week',
        ],
        correctIndex: 1,
        explanation:
          'The wife mentioned they gave her two weeks to decide on the job offer.',
      },
    ],
    keyVocabulary: [
      { word: 'recruiter', definition: 'A person whose job is to find and hire new employees for companies', turkish: 'ise alim uzmani' },
      { word: 'cost of living', definition: 'The amount of money needed to cover basic expenses in a particular place', turkish: 'yasam maliyeti' },
      { word: 'transfer', definition: 'Moving from one position or location to another within the same company', turkish: 'transfer' },
      { word: 'resilient', definition: 'Able to recover quickly from difficult situations', turkish: 'dayanikli' },
      { word: 'pros and cons', definition: 'The advantages and disadvantages of something', turkish: 'artilari ve eksileri' },
      { word: 'fresh start', definition: 'A new beginning or chance to start over', turkish: 'yeni bir baslangic' },
    ],
  },

  // ============================================================
  // CLB 7 — Script 7: Workplace Conflict Resolution Meeting
  // ============================================================
  {
    id: 'listening-workplace-conflict-resolution',
    title: 'Workplace Conflict Resolution Meeting',
    description:
      'Listen to an HR representative mediating a conflict between two employees about workload distribution.',
    format: 'dialogue',
    clbLevel: 7,
    icon: '🤝',
    timeLimit: 300,
    segments: [
      {
        speaker: 'HR Representative',
        text: 'Thank you both for coming in today. I am Patricia from Human Resources. I want to make it clear that this is not a disciplinary meeting. We are here to have an open, respectful conversation and find a solution that works for everyone. Mark, let us start with you. Can you share your perspective on the situation?',
        voiceGender: 'female',
      },
      {
        speaker: 'Mark',
        text: 'Thank you, Patricia. Look, I do not have anything personal against Sandra. The issue is that whenever a big client project comes in, I end up doing most of the technical work while Sandra handles the simpler administrative tasks. Then when the project succeeds, we share the credit equally. It does not feel fair.',
        voiceGender: 'male',
      },
      {
        speaker: 'Sandra',
        text: 'I completely disagree with that characterization. The administrative work I do is not simple. I coordinate schedules, manage communications with clients, handle budgets, and prepare all the documentation. Without that work, those projects would fall apart.',
        voiceGender: 'female',
      },
      {
        speaker: 'HR Representative',
        text: 'I appreciate both of you being honest. Mark, it sounds like you feel the technical workload is disproportionate. Sandra, you feel your contributions are being undervalued. Is that a fair summary?',
        voiceGender: 'female',
      },
      {
        speaker: 'Mark',
        text: 'Yes, that is fair. And I want to be clear, I do recognize that Sandra does important work. I just think the actual hours I put in on the technical side are significantly more. Last month during the Henderson project, I worked overtime every single day for two weeks.',
        voiceGender: 'male',
      },
      {
        speaker: 'Sandra',
        text: 'I did not know you were working overtime that much. I was also working extra hours, but maybe not as many. The real problem might be that we do not communicate enough about who is doing what. We just divide things up informally and then assumptions build up.',
        voiceGender: 'female',
      },
      {
        speaker: 'HR Representative',
        text: 'That is an excellent observation, Sandra. Would you both be open to implementing a more structured approach? For example, at the beginning of each project, you could sit down together and clearly divide responsibilities, estimate hours, and check in weekly to make sure the workload stays balanced.',
        voiceGender: 'female',
      },
      {
        speaker: 'Mark',
        text: 'I think that would actually solve a lot of the problem. If we both know upfront what we are responsible for and how much time it should take, there is less room for frustration.',
        voiceGender: 'male',
      },
      {
        speaker: 'Sandra',
        text: 'I agree. I would also like to learn some of the technical aspects of the projects so I can contribute more on that side. Would you be willing to show me some of the processes, Mark?',
        voiceGender: 'female',
      },
      {
        speaker: 'Mark',
        text: 'Absolutely. I should have offered that a long time ago. If you can handle some of the technical tasks, it would take a lot of pressure off me, and it would be good for your professional development too.',
        voiceGender: 'male',
      },
      {
        speaker: 'HR Representative',
        text: 'This is really positive progress. So let me summarize what we have agreed on. First, you will create a shared responsibility plan at the start of each project. Second, you will have weekly check-ins to monitor workload balance. And third, Mark will provide some cross-training to Sandra on the technical side. I will follow up with both of you in a month to see how things are going. Does that work?',
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'listening-workplace-conflict-resolution-q1',
        question: 'What is Mark\'s main complaint about the work arrangement?',
        options: [
          'Sandra is rude to clients',
          'He does most of the technical work but shares credit equally',
          'Sandra frequently arrives late to meetings',
          'He was passed over for a promotion',
        ],
        correctIndex: 1,
        explanation:
          'Mark said he ends up doing most of the technical work while Sandra handles simpler tasks, but they share the credit equally, which does not feel fair.',
      },
      {
        id: 'listening-workplace-conflict-resolution-q2',
        question: 'What did Sandra identify as the root of the problem?',
        options: [
          'Mark refuses to delegate tasks',
          'The manager assigns work unfairly',
          'They do not communicate enough about who is doing what',
          'The company needs to hire more staff',
        ],
        correctIndex: 2,
        explanation:
          'Sandra said the real problem might be that they do not communicate enough about who is doing what, and they divide things up informally.',
      },
      {
        id: 'listening-workplace-conflict-resolution-q3',
        question: 'What solution did the HR representative propose?',
        options: [
          'Assigning them to different teams',
          'Having the manager divide all tasks going forward',
          'Creating a structured plan to divide responsibilities at the start of each project',
          'Hiring an additional team member to help with workload',
        ],
        correctIndex: 2,
        explanation:
          'Patricia suggested they sit down together at the beginning of each project to clearly divide responsibilities, estimate hours, and check in weekly.',
      },
      {
        id: 'listening-workplace-conflict-resolution-q4',
        question: 'What additional request did Sandra make?',
        options: [
          'She asked for a raise to match Mark\'s salary',
          'She wanted to transfer to a different department',
          'She asked to learn some of the technical aspects from Mark',
          'She requested that Mark handle the administrative tasks',
        ],
        correctIndex: 2,
        explanation:
          'Sandra said she would like to learn some of the technical aspects of the projects so she could contribute more on that side.',
      },
    ],
    keyVocabulary: [
      { word: 'mediate', definition: 'To help resolve a dispute between two parties by acting as a neutral third party', turkish: 'arabuluculuk yapmak' },
      { word: 'disproportionate', definition: 'Too large or too small compared to something else; not balanced', turkish: 'orantisiz' },
      { word: 'cross-training', definition: 'Teaching employees to do tasks outside their usual job responsibilities', turkish: 'capraz egitim' },
      { word: 'disciplinary', definition: 'Relating to punishment or corrective action for breaking rules', turkish: 'disiplin ile ilgili' },
      { word: 'undervalued', definition: 'Not given enough recognition or importance', turkish: 'deger verilmemis' },
      { word: 'workload', definition: 'The amount of work assigned to a person', turkish: 'is yuku' },
      { word: 'check-in', definition: 'A brief meeting to review progress or discuss current status', turkish: 'durum degerlendirmesi' },
    ],
  },

  // ============================================================
  // CLB 7 — Script 8: Discussing Investment Options with Advisor
  // ============================================================
  {
    id: 'listening-investment-advisor',
    title: 'Discussing Investment Options with Financial Advisor',
    description:
      'Listen to a client meeting with a financial advisor to discuss investment strategies and portfolio options.',
    format: 'dialogue',
    clbLevel: 7,
    icon: '📈',
    timeLimit: 300,
    segments: [
      {
        speaker: 'Financial Advisor',
        text: 'Good afternoon, Priya. Thanks for coming in. I have had a chance to review your current portfolio and I have a few recommendations I would like to share with you. How familiar are you with the different types of investments available?',
        voiceGender: 'male',
      },
      {
        speaker: 'Client',
        text: 'To be honest, not very familiar. I have been keeping most of my savings in a regular savings account, but I know the interest rate is barely keeping up with inflation. I want my money to actually grow.',
        voiceGender: 'female',
      },
      {
        speaker: 'Financial Advisor',
        text: 'You are absolutely right to be thinking that way. With a savings account earning about one and a half percent and inflation running around three percent, you are actually losing purchasing power over time. Let me walk you through a few options.',
        voiceGender: 'male',
      },
      {
        speaker: 'Client',
        text: 'That is exactly what I was afraid of. What do you recommend?',
        voiceGender: 'female',
      },
      {
        speaker: 'Financial Advisor',
        text: 'For someone in your situation, I would suggest a balanced approach. First, you should maximize your TFSA contribution. That is your Tax-Free Savings Account. Any growth inside a TFSA is completely tax-free, which is a huge advantage. Your current limit is about six thousand five hundred dollars per year.',
        voiceGender: 'male',
      },
      {
        speaker: 'Client',
        text: 'I have heard of a TFSA but I never opened one. What would I invest in inside the TFSA?',
        voiceGender: 'female',
      },
      {
        speaker: 'Financial Advisor',
        text: 'I would recommend a mix of index funds and bonds. Index funds track the overall market, so you get broad diversification without having to pick individual stocks. For your age and risk tolerance, I would suggest about seventy percent in equity index funds and thirty percent in bonds. The bonds provide stability while the index funds provide growth.',
        voiceGender: 'male',
      },
      {
        speaker: 'Client',
        text: 'What kind of return can I expect with that split?',
        voiceGender: 'female',
      },
      {
        speaker: 'Financial Advisor',
        text: 'Historically, a seventy-thirty portfolio has averaged about six to seven percent per year over the long term. Of course, there will be years where the market drops, but if you stay invested for ten years or more, the numbers tend to work in your favour.',
        voiceGender: 'male',
      },
      {
        speaker: 'Client',
        text: 'That sounds reasonable. My main concern is that I do not want to lose a large chunk of my savings if the market crashes. I am thirty-five and I want to retire by sixty. Is that realistic?',
        voiceGender: 'female',
      },
      {
        speaker: 'Financial Advisor',
        text: 'With twenty-five years of consistent investing and the power of compound interest, absolutely. If you invest five hundred dollars a month starting now with an average six percent return, you would have roughly three hundred and forty thousand dollars by the time you are sixty. We can also adjust your portfolio to become more conservative as you get closer to retirement.',
        voiceGender: 'male',
      },
      {
        speaker: 'Client',
        text: 'That is very encouraging. I think I am ready to get started. What are the fees for your services?',
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'listening-investment-advisor-q1',
        question: 'Why does the advisor say keeping money in a savings account is a problem?',
        options: [
          'Savings accounts have high monthly fees',
          'The interest rate is lower than inflation, so purchasing power decreases',
          'Banks might close savings accounts without notice',
          'Savings accounts have a withdrawal limit',
        ],
        correctIndex: 1,
        explanation:
          'The advisor explained that with savings earning about one and a half percent and inflation at three percent, the client is actually losing purchasing power over time.',
      },
      {
        id: 'listening-investment-advisor-q2',
        question: 'What investment split did the advisor recommend?',
        options: [
          'Fifty percent stocks and fifty percent bonds',
          'Sixty percent index funds and forty percent bonds',
          'Seventy percent equity index funds and thirty percent bonds',
          'Eighty percent index funds and twenty percent real estate',
        ],
        correctIndex: 2,
        explanation:
          'The advisor recommended seventy percent in equity index funds and thirty percent in bonds based on the client\'s age and risk tolerance.',
      },
      {
        id: 'listening-investment-advisor-q3',
        question: 'What is the main advantage of a TFSA according to the advisor?',
        options: [
          'It has no contribution limits',
          'It guarantees a minimum return',
          'Any growth inside it is completely tax-free',
          'The government matches your contributions',
        ],
        correctIndex: 2,
        explanation:
          'The advisor highlighted that any growth inside a TFSA is completely tax-free, which is a huge advantage.',
      },
      {
        id: 'listening-investment-advisor-q4',
        question: 'How much could the client accumulate by age sixty with the proposed plan?',
        options: [
          'About two hundred thousand dollars',
          'About two hundred and fifty thousand dollars',
          'About three hundred and forty thousand dollars',
          'About five hundred thousand dollars',
        ],
        correctIndex: 2,
        explanation:
          'The advisor calculated that investing five hundred dollars a month with an average six percent return would yield roughly three hundred and forty thousand dollars by age sixty.',
      },
    ],
    keyVocabulary: [
      { word: 'portfolio', definition: 'A collection of investments held by a person or organization', turkish: 'yatirim portfoyu' },
      { word: 'inflation', definition: 'The general increase in prices and decrease in the purchasing value of money', turkish: 'enflasyon' },
      { word: 'diversification', definition: 'Spreading investments across different types to reduce risk', turkish: 'cesitlendirme' },
      { word: 'index fund', definition: 'An investment fund that tracks a market index to match its performance', turkish: 'endeks fonu' },
      { word: 'compound interest', definition: 'Interest earned on both the initial amount and previously earned interest', turkish: 'bilesik faiz' },
      { word: 'risk tolerance', definition: 'The degree of financial uncertainty an investor is willing to accept', turkish: 'risk toleransi' },
      { word: 'TFSA', definition: 'Tax-Free Savings Account, a Canadian registered account where investment growth is tax-free', turkish: 'vergisiz tasarruf hesabi' },
    ],
  },

  // ============================================================
  // CLB 7 — Script 9: Negotiating Salary in a Job Offer
  // ============================================================
  {
    id: 'listening-salary-negotiation',
    title: 'Negotiating Salary in a Job Offer',
    description:
      'Listen to a candidate negotiating compensation and benefits with an HR representative after receiving a job offer.',
    format: 'dialogue',
    clbLevel: 7,
    icon: '💰',
    timeLimit: 300,
    segments: [
      {
        speaker: 'HR Representative',
        text: 'Hi Amir, congratulations again on the job offer. We are really excited to have you join the team. I wanted to go over the compensation package with you in detail. The base salary we are offering is sixty-eight thousand dollars annually.',
        voiceGender: 'female',
      },
      {
        speaker: 'Candidate',
        text: 'Thank you, Jennifer. I am very excited about the opportunity as well. I have reviewed the offer letter, and I really appreciate the detail. I do have a few things I would like to discuss regarding the compensation, if you are open to it.',
        voiceGender: 'male',
      },
      {
        speaker: 'HR Representative',
        text: 'Absolutely, that is what this call is for. What did you have in mind?',
        voiceGender: 'female',
      },
      {
        speaker: 'Candidate',
        text: 'I did some research on the market rate for this type of role in Toronto, and the average seems to be between seventy and seventy-eight thousand for someone with my level of experience. I have seven years of experience in software development, including two years in a leadership role. I was hoping we could discuss adjusting the base salary to seventy-five thousand.',
        voiceGender: 'male',
      },
      {
        speaker: 'HR Representative',
        text: 'I appreciate you coming prepared with market data. You are right that your experience is above average for this role. Let me see what I can do. I cannot promise seventy-five, but I think I could get approval for seventy-two thousand. Would that work for you?',
        voiceGender: 'female',
      },
      {
        speaker: 'Candidate',
        text: 'Seventy-two would definitely be an improvement. I also noticed that the offer includes two weeks of vacation. In my current position, I have three weeks. Is there any flexibility on that?',
        voiceGender: 'male',
      },
      {
        speaker: 'HR Representative',
        text: 'Our standard for new employees is two weeks in the first year, increasing to three weeks after the second year. However, given your seniority, I could request that you start with three weeks right away.',
        voiceGender: 'female',
      },
      {
        speaker: 'Candidate',
        text: 'That would be fantastic. One more thing. The offer mentions a performance bonus of up to ten percent. How is that determined? Is it based on individual performance or company performance?',
        voiceGender: 'male',
      },
      {
        speaker: 'HR Representative',
        text: 'Great question. It is a combination. Sixty percent is based on your individual performance review, and forty percent is tied to the company meeting its annual revenue targets. Last year, most employees received between seven and nine percent.',
        voiceGender: 'female',
      },
      {
        speaker: 'Candidate',
        text: 'That is helpful to know. What about professional development? My current company covers up to two thousand dollars a year for courses and certifications. Does your company offer anything similar?',
        voiceGender: 'male',
      },
      {
        speaker: 'HR Representative',
        text: 'Yes, we have a professional development budget of fifteen hundred dollars per employee per year, and we also provide five paid days for training or conferences. I can look into whether we can match the two thousand you currently receive.',
        voiceGender: 'female',
      },
      {
        speaker: 'Candidate',
        text: 'I would really appreciate that. If we can agree on seventy-two thousand base salary, three weeks vacation, and matching the professional development budget, I am ready to sign.',
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'listening-salary-negotiation-q1',
        question: 'What was the original salary offered to Amir?',
        options: [
          'Sixty-five thousand dollars',
          'Sixty-eight thousand dollars',
          'Seventy thousand dollars',
          'Seventy-two thousand dollars',
        ],
        correctIndex: 1,
        explanation:
          'The HR representative initially offered a base salary of sixty-eight thousand dollars annually.',
      },
      {
        id: 'listening-salary-negotiation-q2',
        question: 'How is the performance bonus split?',
        options: [
          'Fifty percent individual and fifty percent company',
          'Sixty percent individual and forty percent company',
          'Seventy percent individual and thirty percent company',
          'One hundred percent based on individual performance',
        ],
        correctIndex: 1,
        explanation:
          'Jennifer explained that sixty percent is based on individual performance review and forty percent is tied to the company meeting its annual revenue targets.',
      },
      {
        id: 'listening-salary-negotiation-q3',
        question: 'How much vacation time does the company normally give in the first year?',
        options: [
          'One week',
          'Two weeks',
          'Three weeks',
          'Four weeks',
        ],
        correctIndex: 1,
        explanation:
          'The company\'s standard for new employees is two weeks in the first year, increasing to three weeks after the second year.',
      },
      {
        id: 'listening-salary-negotiation-q4',
        question: 'What salary did Amir and Jennifer agree on?',
        options: [
          'Sixty-eight thousand dollars',
          'Seventy thousand dollars',
          'Seventy-two thousand dollars',
          'Seventy-five thousand dollars',
        ],
        correctIndex: 2,
        explanation:
          'Jennifer offered seventy-two thousand, and Amir agreed to sign if that base salary was combined with three weeks vacation and matching the professional development budget.',
      },
    ],
    keyVocabulary: [
      { word: 'compensation package', definition: 'The total combination of salary, benefits, and perks offered by an employer', turkish: 'ucret paketi' },
      { word: 'base salary', definition: 'The fixed amount of money an employee earns before bonuses or benefits', turkish: 'taban maas' },
      { word: 'market rate', definition: 'The typical salary for a specific job in a specific area', turkish: 'piyasa degeri' },
      { word: 'performance bonus', definition: 'Extra payment based on how well an employee or company performs', turkish: 'performans primi' },
      { word: 'professional development', definition: 'Training and education to improve skills and advance a career', turkish: 'mesleki gelisim' },
      { word: 'seniority', definition: 'The level of experience or length of service in a role or organization', turkish: 'kidem' },
    ],
  },

  // ============================================================
  // CLB 7 — Script 10: Debating Screen Time Limits for Kids
  // ============================================================
  {
    id: 'listening-screen-time-debate',
    title: 'Debating Screen Time Limits for Kids',
    description:
      'Listen to two parents disagreeing about how much screen time their children should be allowed.',
    format: 'dialogue',
    clbLevel: 7,
    icon: '📱',
    timeLimit: 300,
    segments: [
      {
        speaker: 'Mother',
        text: 'Okay, we need to talk about this. Olivia spent four hours on her tablet yesterday, and Ethan was on his computer for almost five hours. This is getting out of control, and we need to set some firm limits.',
        voiceGender: 'female',
      },
      {
        speaker: 'Father',
        text: 'I hear what you are saying, but not all screen time is the same. Ethan was doing his homework for at least two of those hours, and then he was coding on that programming app we downloaded. That is educational.',
        voiceGender: 'male',
      },
      {
        speaker: 'Mother',
        text: 'Even if some of it is educational, they are still sitting in front of screens for hours on end. The Canadian Paediatric Society recommends no more than two hours of recreational screen time per day for kids their age. We are way beyond that.',
        voiceGender: 'female',
      },
      {
        speaker: 'Father',
        text: 'I agree that we should have some guidelines. But I think we need to be realistic. Every kid at their school uses technology. If we restrict them too much, they will fall behind their peers. Technology skills are essential for their future.',
        voiceGender: 'male',
      },
      {
        speaker: 'Mother',
        text: 'I am not saying zero screens. I am saying we need boundaries. Olivia has started refusing to go outside to play. She used to love bike riding and now she just wants to watch videos. Her teacher also mentioned that her attention span seems shorter than it was at the beginning of the year.',
        voiceGender: 'female',
      },
      {
        speaker: 'Father',
        text: 'That is a valid concern about Olivia. I did not know her teacher said that. What if we set different rules for weekdays and weekends? On school days, maybe one hour of recreational screen time after homework is done. On weekends, we can be more flexible, say two to three hours, but they have to spend at least an hour outside first.',
        voiceGender: 'male',
      },
      {
        speaker: 'Mother',
        text: 'That is a good start. I also think we should have a rule about no screens during meals and no screens in their bedrooms after eight o\'clock at night. The blue light from screens is disrupting their sleep. Ethan has been staying up until ten thirty on school nights.',
        voiceGender: 'female',
      },
      {
        speaker: 'Father',
        text: 'I can get behind the no screens during meals rule. And the bedtime cut-off makes sense. But what about when they need their computer for homework? Ethan has a lot of assignments that require internet research.',
        voiceGender: 'male',
      },
      {
        speaker: 'Mother',
        text: 'Homework is different. They can use their computers for school work in the living room where we can see what they are doing. It is the unsupervised recreational use that worries me the most. I read that excessive screen time is linked to anxiety and depression in children.',
        voiceGender: 'female',
      },
      {
        speaker: 'Father',
        text: 'Alright, let us write out these rules together and present them to the kids as a family decision. If they see us both on the same page, they are more likely to follow them. Maybe we should also lead by example and put our own phones away during dinner.',
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'listening-screen-time-debate-q1',
        question: 'How much recreational screen time does the Canadian Paediatric Society recommend for children?',
        options: [
          'No more than one hour per day',
          'No more than two hours per day',
          'No more than three hours per day',
          'No more than four hours per day',
        ],
        correctIndex: 1,
        explanation:
          'The mother cited the Canadian Paediatric Society recommendation of no more than two hours of recreational screen time per day for kids their age.',
      },
      {
        id: 'listening-screen-time-debate-q2',
        question: 'What did Olivia\'s teacher notice about her?',
        options: [
          'Her grades have dropped significantly',
          'She has been getting into arguments with classmates',
          'Her attention span seems shorter than at the beginning of the year',
          'She has been falling asleep in class',
        ],
        correctIndex: 2,
        explanation:
          'The mother mentioned that Olivia\'s teacher noticed her attention span seems shorter than it was at the beginning of the year.',
      },
      {
        id: 'listening-screen-time-debate-q3',
        question: 'What weekday screen time rule did the father propose?',
        options: [
          'No screen time at all on school days',
          'One hour of recreational time after homework is done',
          'Two hours in the morning before school',
          'Unlimited time as long as homework is finished',
        ],
        correctIndex: 1,
        explanation:
          'The father suggested one hour of recreational screen time on school days after homework is done.',
      },
      {
        id: 'listening-screen-time-debate-q4',
        question: 'What did the father suggest the parents should do to support the new rules?',
        options: [
          'Install monitoring software on the children\'s devices',
          'Remove all electronics from the house',
          'Lead by example by putting their own phones away during dinner',
          'Reward the children with extra screen time for good behaviour',
        ],
        correctIndex: 2,
        explanation:
          'The father suggested they should lead by example and put their own phones away during dinner to show the children they are serious about the rules.',
      },
    ],
    keyVocabulary: [
      { word: 'screen time', definition: 'The amount of time spent using devices with screens such as phones, tablets, or computers', turkish: 'ekran suresi' },
      { word: 'attention span', definition: 'The length of time a person can concentrate on a task', turkish: 'dikkat suresi' },
      { word: 'boundaries', definition: 'Rules or limits set to control behaviour', turkish: 'sinirlar' },
      { word: 'recreational', definition: 'Done for enjoyment rather than work or education', turkish: 'eglence amacli' },
      { word: 'unsupervised', definition: 'Not watched or guided by a responsible adult', turkish: 'denetimsiz' },
      { word: 'lead by example', definition: 'To demonstrate good behaviour for others to follow', turkish: 'ornek olmak' },
    ],
  },

  // ============================================================
  // CLB 7 — Script 11: Planning a Community Fundraiser
  // ============================================================
  {
    id: 'listening-community-fundraiser',
    title: 'Planning a Community Fundraiser',
    description:
      'Listen to committee members organizing a charity fundraiser event for the local community centre.',
    format: 'dialogue',
    clbLevel: 7,
    icon: '🎪',
    timeLimit: 300,
    segments: [
      {
        speaker: 'Committee Chair',
        text: 'All right, thank you everyone for being here. As you know, we need to raise at least twenty thousand dollars by the end of June to fund the new youth programs at the community centre. Today we need to finalize the details of our spring fundraiser. Helen, where are we with the venue?',
        voiceGender: 'male',
      },
      {
        speaker: 'Helen',
        text: 'I have good news. The Riverside Banquet Hall has offered us their space for free on Saturday, April nineteenth. They are donating it as part of their community sponsorship program. The hall can hold up to two hundred and fifty guests.',
        voiceGender: 'female',
      },
      {
        speaker: 'Committee Chair',
        text: 'That is wonderful. A donated venue means all the ticket sales go directly to the cause. Speaking of tickets, what should we charge?',
        voiceGender: 'male',
      },
      {
        speaker: 'Treasurer',
        text: 'Based on similar events in the area, I think we should charge seventy-five dollars per person or one hundred and thirty dollars per couple. That includes dinner, entertainment, and a drink ticket. If we sell two hundred tickets, that alone would bring in about fifteen thousand dollars.',
        voiceGender: 'male',
      },
      {
        speaker: 'Helen',
        text: 'We should also do a silent auction. Last year\'s silent auction at the library fundraiser raised over five thousand dollars. I have already reached out to some local businesses, and so far we have commitments for a weekend getaway from the Muskoka Resort, a signed hockey jersey, and a two-hundred-dollar gift certificate from that Italian restaurant on Main Street.',
        voiceGender: 'female',
      },
      {
        speaker: 'Committee Chair',
        text: 'Excellent work, Helen. What about entertainment? We need something that will draw people in and keep the energy up throughout the evening.',
        voiceGender: 'male',
      },
      {
        speaker: 'Volunteer Coordinator',
        text: 'I have a great idea for that. My neighbour is in a jazz band and they have offered to play for free. We could also have a DJ for the last hour so people can dance. And I was thinking we could do a fifty-fifty raffle. People love those. Half the pot goes to the winner and half goes to the charity.',
        voiceGender: 'female',
      },
      {
        speaker: 'Treasurer',
        text: 'I like the raffle idea. We could sell tickets at five dollars each or three for ten dollars. That could easily add another two to three thousand to our total. But we need to make sure we have the proper licensing. In Ontario, you need a lottery licence for raffles over five hundred dollars.',
        voiceGender: 'male',
      },
      {
        speaker: 'Committee Chair',
        text: 'Good point. I will handle the lottery licence application. Now, what about volunteers? How many do we need for the night?',
        voiceGender: 'male',
      },
      {
        speaker: 'Volunteer Coordinator',
        text: 'I would say at least fifteen volunteers. We need people at the registration table, the silent auction table, the bar, the raffle table, and a few floaters to help with setup and cleanup. I already have eight confirmed, so I need to recruit about seven more.',
        voiceGender: 'female',
      },
      {
        speaker: 'Committee Chair',
        text: 'Let us also set up an online donation page for people who cannot attend but still want to support the cause. We can share it on social media and through the community centre\'s email list. Any last items before we wrap up?',
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'listening-community-fundraiser-q1',
        question: 'How much money does the committee need to raise?',
        options: [
          'Ten thousand dollars',
          'Fifteen thousand dollars',
          'Twenty thousand dollars',
          'Twenty-five thousand dollars',
        ],
        correctIndex: 2,
        explanation:
          'The committee chair stated they need to raise at least twenty thousand dollars by the end of June to fund the new youth programs.',
      },
      {
        id: 'listening-community-fundraiser-q2',
        question: 'Why is the Riverside Banquet Hall significant for the fundraiser?',
        options: [
          'It is the cheapest venue available',
          'It is donating the space for free',
          'It is located next to the community centre',
          'It can hold five hundred guests',
        ],
        correctIndex: 1,
        explanation:
          'Helen reported that the Riverside Banquet Hall offered their space for free as part of their community sponsorship program.',
      },
      {
        id: 'listening-community-fundraiser-q3',
        question: 'What legal requirement did the treasurer mention for the raffle?',
        options: [
          'They need approval from the city council',
          'They need a lottery licence for raffles over five hundred dollars in Ontario',
          'They need to register with the federal government',
          'They need an insurance policy for the prizes',
        ],
        correctIndex: 1,
        explanation:
          'The treasurer noted that in Ontario, you need a lottery licence for raffles over five hundred dollars.',
      },
      {
        id: 'listening-community-fundraiser-q4',
        question: 'How many more volunteers does the coordinator need to recruit?',
        options: [
          'Five more',
          'Seven more',
          'Ten more',
          'Fifteen more',
        ],
        correctIndex: 1,
        explanation:
          'The volunteer coordinator said she needs at least fifteen volunteers, already has eight confirmed, so she needs about seven more.',
      },
    ],
    keyVocabulary: [
      { word: 'fundraiser', definition: 'An event organized to collect money for a cause or charity', turkish: 'bagis toplama etkinligi' },
      { word: 'silent auction', definition: 'An auction where bids are written down rather than called out', turkish: 'sessiz acik artirma' },
      { word: 'raffle', definition: 'A lottery in which people buy tickets for a chance to win prizes', turkish: 'cekilis' },
      { word: 'venue', definition: 'The place where an event is held', turkish: 'mekan' },
      { word: 'sponsorship', definition: 'Financial or material support given by a company or individual for an event', turkish: 'sponsorluk' },
      { word: 'lottery licence', definition: 'An official permit required to run a legal raffle or lottery', turkish: 'piyango lisansi' },
      { word: 'floater', definition: 'A person who helps wherever needed rather than having a fixed role', turkish: 'gezici gorevli' },
    ],
  },

  // ============================================================
  // CLB 7 — Script 12: Discussing Pros and Cons of Electric Vehicles
  // ============================================================
  {
    id: 'listening-electric-vehicles-debate',
    title: 'Discussing Pros and Cons of Electric Vehicles',
    description:
      'Listen to two friends debating whether electric vehicles are better than gas-powered cars.',
    format: 'dialogue',
    clbLevel: 7,
    icon: '⚡',
    timeLimit: 300,
    segments: [
      {
        speaker: 'Alex',
        text: 'I have been seriously thinking about getting an electric vehicle. My lease on the Honda is up in March and I am looking at the Tesla Model 3 and the Hyundai Ioniq 5. Have you looked into them at all?',
        voiceGender: 'male',
      },
      {
        speaker: 'Jordan',
        text: 'I have, actually. I decided against it for now. I think EVs have a lot of potential, but there are still too many drawbacks for someone like me. The biggest one is range anxiety. The longest range you can get on most affordable EVs is about four hundred kilometres. I drive up to the cottage every other weekend, and that is a three hundred and fifty kilometre trip one way.',
        voiceGender: 'female',
      },
      {
        speaker: 'Alex',
        text: 'But the charging infrastructure has improved a lot. There are fast chargers along most major highways now. You can get an eighty percent charge in about thirty minutes at a Level 3 charger. That is just enough time to grab a coffee and stretch your legs.',
        voiceGender: 'male',
      },
      {
        speaker: 'Jordan',
        text: 'In the summer, sure. But in Canadian winters, EV range drops by thirty to forty percent because of the cold weather. That four-hundred-kilometre range becomes more like two hundred and fifty. Now I am stopping twice to charge on a trip that takes three hours in a gas car.',
        voiceGender: 'female',
      },
      {
        speaker: 'Alex',
        text: 'That is a fair point about winter range. But think about the savings. I spend about two hundred and fifty dollars a month on gas right now. Charging at home costs about forty to fifty dollars a month in electricity. Over five years, that is over twelve thousand dollars in fuel savings alone.',
        voiceGender: 'male',
      },
      {
        speaker: 'Jordan',
        text: 'The fuel savings are real, but the upfront cost is significantly higher. A comparable gas car is at least ten to fifteen thousand dollars cheaper. So you are spending years just breaking even. Plus, if the battery needs to be replaced out of warranty, that can cost fifteen to twenty thousand dollars.',
        voiceGender: 'female',
      },
      {
        speaker: 'Alex',
        text: 'True, but there are federal and provincial incentives. The federal government offers up to five thousand dollars, and some provinces add another five thousand on top of that. That closes the gap quite a bit. And EV maintenance is way cheaper because there are fewer moving parts. No oil changes, no transmission repairs, brakes last longer because of regenerative braking.',
        voiceGender: 'male',
      },
      {
        speaker: 'Jordan',
        text: 'I will give you that. The maintenance argument is strong. I spent eight hundred dollars on my last transmission service. But what about the environmental angle? People say EVs are green, but the mining of lithium and cobalt for batteries is pretty destructive. And if your electricity comes from coal or natural gas, you are still generating emissions indirectly.',
        voiceGender: 'female',
      },
      {
        speaker: 'Alex',
        text: 'You are right that battery production has an environmental cost. But studies show that over the lifetime of the vehicle, an EV still produces about sixty percent fewer emissions than a gas car, even when you factor in manufacturing. And in provinces like Quebec and British Columbia where electricity is mostly hydroelectric, the difference is even bigger.',
        voiceGender: 'male',
      },
      {
        speaker: 'Jordan',
        text: 'I think the technology is getting better every year. Battery costs are coming down, ranges are increasing, and charging times are getting shorter. I will probably get an EV eventually. Just not yet. Maybe in three or four years when the next generation comes out.',
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'listening-electric-vehicles-debate-q1',
        question: 'How much does EV range typically decrease in Canadian winters according to Jordan?',
        options: [
          'Ten to twenty percent',
          'Twenty to thirty percent',
          'Thirty to forty percent',
          'Fifty percent or more',
        ],
        correctIndex: 2,
        explanation:
          'Jordan stated that in Canadian winters, EV range drops by thirty to forty percent because of the cold weather.',
      },
      {
        id: 'listening-electric-vehicles-debate-q2',
        question: 'How much does Alex estimate he would save on fuel over five years with an EV?',
        options: [
          'About five thousand dollars',
          'About eight thousand dollars',
          'About twelve thousand dollars',
          'About twenty thousand dollars',
        ],
        correctIndex: 2,
        explanation:
          'Alex calculated that the difference between two hundred and fifty dollars per month on gas versus forty to fifty dollars on electricity would save over twelve thousand dollars in fuel over five years.',
      },
      {
        id: 'listening-electric-vehicles-debate-q3',
        question: 'What does Alex say about the lifetime emissions of an EV compared to a gas car?',
        options: [
          'They produce about the same emissions',
          'An EV produces about thirty percent fewer emissions',
          'An EV produces about sixty percent fewer emissions',
          'An EV produces zero emissions over its lifetime',
        ],
        correctIndex: 2,
        explanation:
          'Alex cited studies showing that over its lifetime, an EV still produces about sixty percent fewer emissions than a gas car, even factoring in manufacturing.',
      },
      {
        id: 'listening-electric-vehicles-debate-q4',
        question: 'What is Jordan\'s final position on electric vehicles?',
        options: [
          'She will never buy an electric vehicle',
          'She plans to buy one next month',
          'She will probably get one in three or four years when the technology improves',
          'She thinks they should be banned until batteries are more sustainable',
        ],
        correctIndex: 2,
        explanation:
          'Jordan said she will probably get an EV eventually, maybe in three or four years when the next generation comes out.',
      },
    ],
    keyVocabulary: [
      { word: 'range anxiety', definition: 'The fear that an electric vehicle will run out of battery before reaching a charging station', turkish: 'menzil kaygisi' },
      { word: 'charging infrastructure', definition: 'The network of charging stations available for electric vehicles', turkish: 'sarj altyapisi' },
      { word: 'regenerative braking', definition: 'A system that recovers energy during braking and sends it back to the battery', turkish: 'rejeneratif frenleme' },
      { word: 'incentive', definition: 'A financial benefit offered to encourage people to take a specific action', turkish: 'tesvik' },
      { word: 'emissions', definition: 'Gases released into the atmosphere, especially carbon dioxide from vehicles', turkish: 'emisyonlar' },
      { word: 'upfront cost', definition: 'The initial amount of money required to purchase something', turkish: 'baslangic maliyeti' },
    ],
  },
];
