import type { ListeningScript } from './types';

export const newListeningScriptsA: ListeningScript[] = [
  // ============================================================
  // CLB 5 — Script 11: Booking a Dental Appointment (Dialogue)
  // ============================================================
  {
    id: 'listening-dental-appointment',
    title: 'Booking a Dental Appointment',
    description:
      'Listen to a conversation between a patient and a dental office receptionist about booking an appointment.',
    format: 'dialogue',
    clbLevel: 5,
    icon: '\u{1F9B7}',
    timeLimit: 180,
    segments: [
      {
        speaker: 'Patient',
        text: 'Hello, I would like to book an appointment with the dentist, please. I have not been in for a while and I think I need a check-up.',
        voiceGender: 'female',
      },
      {
        speaker: 'Receptionist',
        text: 'Of course. Are you a new patient or have you been to our clinic before? Also, are you looking for just a regular check-up, or do you need a cleaning as well?',
        voiceGender: 'male',
      },
      {
        speaker: 'Patient',
        text: 'I am a new patient. I recently moved to the neighbourhood. I would like both a check-up and a cleaning, if possible. I have also been having some sensitivity in one of my back teeth, so I would like the dentist to take a look at that too.',
        voiceGender: 'female',
      },
      {
        speaker: 'Receptionist',
        text: 'No problem. A check-up includes a full examination and X-rays. If the dentist finds a cavity or any issue, they will discuss treatment options with you at that time. A filling, for example, would be scheduled as a separate visit. The check-up and cleaning together usually take about an hour.',
        voiceGender: 'male',
      },
      {
        speaker: 'Patient',
        text: 'That sounds good. Do you accept insurance? I have coverage through my employer with Sun Life.',
        voiceGender: 'female',
      },
      {
        speaker: 'Receptionist',
        text: 'Yes, we do accept Sun Life. Just bring your insurance card with you on the day of your appointment and we will bill them directly. If there is any portion not covered, we will let you know beforehand so there are no surprises.',
        voiceGender: 'male',
      },
      {
        speaker: 'Patient',
        text: 'Perfect. What times do you have available? I work during the day, so I would prefer something in the late afternoon or early evening if you have it.',
        voiceGender: 'female',
      },
      {
        speaker: 'Receptionist',
        text: 'We have an opening next Thursday, March sixth, at four-thirty in the afternoon. We also have a spot on the following Monday at five o\'clock. Which one works better for you?',
        voiceGender: 'male',
      },
      {
        speaker: 'Patient',
        text: 'Thursday at four-thirty would be perfect. Could you please put me down for that?',
        voiceGender: 'female',
      },
      {
        speaker: 'Receptionist',
        text: 'You are all set for Thursday, March sixth, at four-thirty. Please arrive about ten minutes early to fill out some new patient paperwork. And do not forget to bring your insurance card and a piece of photo identification.',
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'da11-q1',
        question: 'Why does the patient want to see the dentist?',
        options: [
          'She needs emergency dental surgery',
          'She wants a check-up, cleaning, and has tooth sensitivity',
          'She only needs her teeth whitened',
          'She wants to get braces',
        ],
        correctIndex: 1,
        explanation:
          'The patient said she needs "a check-up and a cleaning" and also mentioned "some sensitivity in one of my back teeth."',
      },
      {
        id: 'da11-q2',
        question: 'What does a check-up include at this clinic?',
        options: [
          'Only a visual examination',
          'A cleaning and a filling',
          'A full examination and X-rays',
          'A consultation with a specialist',
        ],
        correctIndex: 2,
        explanation:
          'The receptionist explained that "a check-up includes a full examination and X-rays."',
      },
      {
        id: 'da11-q3',
        question: 'What insurance provider does the patient have?',
        options: [
          'Manulife',
          'Great-West Life',
          'Sun Life',
          'Blue Cross',
        ],
        correctIndex: 2,
        explanation:
          'The patient said, "I have coverage through my employer with Sun Life."',
      },
      {
        id: 'da11-q4',
        question: 'When is the patient\'s appointment scheduled?',
        options: [
          'Monday at five o\'clock',
          'Thursday, March sixth, at four-thirty',
          'Friday at three o\'clock',
          'Wednesday, March fifth, at four-thirty',
        ],
        correctIndex: 1,
        explanation:
          'The receptionist confirmed the appointment for "Thursday, March sixth, at four-thirty."',
      },
      {
        id: 'da11-q5',
        question: 'What should the patient bring to the appointment?',
        options: [
          'Her medical records and a referral letter',
          'Her insurance card and a piece of photo identification',
          'A list of medications and her health card',
          'Her previous dental X-rays',
        ],
        correctIndex: 1,
        explanation:
          'The receptionist asked the patient to "bring your insurance card and a piece of photo identification."',
      },
      {
        id: 'da11-q6',
        question: 'How early should the patient arrive?',
        options: [
          'Five minutes early',
          'Ten minutes early',
          'Fifteen minutes early',
          'Twenty minutes early',
        ],
        correctIndex: 1,
        explanation:
          'The receptionist said, "Please arrive about ten minutes early to fill out some new patient paperwork."',
      },
    ],
    keyVocabulary: [
      {
        word: 'check-up',
        definition: 'A routine medical or dental examination to assess overall health.',
        turkish: 'kontrol muayenesi',
      },
      {
        word: 'cavity',
        definition: 'A hole in a tooth caused by decay.',
        turkish: '\u00e7\u00fcr\u00fck',
      },
      {
        word: 'filling',
        definition: 'A material used to fill a cavity in a tooth after decay is removed.',
        turkish: 'dolgu',
      },
      {
        word: 'appointment',
        definition: 'A scheduled meeting or visit, especially with a professional.',
        turkish: 'randevu',
      },
      {
        word: 'insurance',
        definition: 'A plan that helps pay for medical or dental expenses.',
        turkish: 'sigorta',
      },
    ],
  },

  // ============================================================
  // CLB 5 — Script 12: Weekend Plans with a Coworker (Dialogue)
  // ============================================================
  {
    id: 'listening-weekend-plans',
    title: 'Weekend Plans with a Coworker',
    description:
      'Listen to two coworkers discuss their plans for the upcoming weekend, including outdoor activities and dining out.',
    format: 'dialogue',
    clbLevel: 5,
    icon: '\u{1F5D3}\uFE0F',
    timeLimit: 180,
    segments: [
      {
        speaker: 'Sarah',
        text: 'Hey, do you have any plans this weekend? I was thinking of going hiking at Rouge National Urban Park. I heard the trails are really beautiful this time of year.',
        voiceGender: 'female',
      },
      {
        speaker: 'Kevin',
        text: 'That sounds like fun, but I checked the weather forecast this morning and it said there is a chance of rain on Saturday. Are you planning to go on Saturday or Sunday?',
        voiceGender: 'male',
      },
      {
        speaker: 'Sarah',
        text: 'I was thinking Saturday, actually. But if the weather is bad, I could move it to Sunday. The forecast showed Sunday is supposed to be sunny with a high of sixteen degrees. Have you ever been to Rouge Park before?',
        voiceGender: 'female',
      },
      {
        speaker: 'Kevin',
        text: 'I went there once last fall. The Vista Trail is my favourite — it is about three kilometres long and not too difficult. You get a great view of the valley from the top. It can be a little exhausting near the end, but it is worth it.',
        voiceGender: 'male',
      },
      {
        speaker: 'Sarah',
        text: 'That sounds perfect. I am not looking for anything too challenging. Would you like to come along? We could grab lunch afterwards. I heard there is a new Thai restaurant that just opened downtown.',
        voiceGender: 'female',
      },
      {
        speaker: 'Kevin',
        text: 'I would love to. Should we make a reservation at the restaurant, or do you think we can just walk in? New places can get pretty busy on weekends.',
        voiceGender: 'male',
      },
      {
        speaker: 'Sarah',
        text: 'Good point. I will book a table for noon. That should give us enough time to finish the hike in the morning. Let us meet at the park entrance at nine o\'clock. Does that work for you?',
        voiceGender: 'female',
      },
      {
        speaker: 'Kevin',
        text: 'Nine sounds great. I will bring some water and snacks for the trail. Let us just keep an eye on the weather and if Saturday looks bad, we will switch to Sunday. I will text you Friday night to confirm.',
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'wp-q1',
        question: 'Where does Sarah want to go hiking?',
        options: [
          'High Park',
          'Algonquin Provincial Park',
          'Rouge National Urban Park',
          'Bruce Trail',
        ],
        correctIndex: 2,
        explanation:
          'Sarah said she was "thinking of going hiking at Rouge National Urban Park."',
      },
      {
        id: 'wp-q2',
        question: 'Why is Kevin concerned about Saturday?',
        options: [
          'He has to work on Saturday',
          'The weather forecast says there is a chance of rain',
          'The park is closed on Saturdays',
          'He does not enjoy hiking',
        ],
        correctIndex: 1,
        explanation:
          'Kevin said "the weather forecast this morning said there is a chance of rain on Saturday."',
      },
      {
        id: 'wp-q3',
        question: 'How long is the Vista Trail?',
        options: [
          'About two kilometres',
          'About three kilometres',
          'About five kilometres',
          'About seven kilometres',
        ],
        correctIndex: 1,
        explanation:
          'Kevin described the Vista Trail as "about three kilometres long and not too difficult."',
      },
      {
        id: 'wp-q4',
        question: 'What type of restaurant does Sarah suggest for lunch?',
        options: [
          'A new Italian restaurant',
          'A new Thai restaurant',
          'A new Japanese restaurant',
          'A new Mexican restaurant',
        ],
        correctIndex: 1,
        explanation:
          'Sarah mentioned "a new Thai restaurant that just opened downtown."',
      },
      {
        id: 'wp-q5',
        question: 'What time do they plan to meet at the park?',
        options: [
          'Eight o\'clock',
          'Eight-thirty',
          'Nine o\'clock',
          'Ten o\'clock',
        ],
        correctIndex: 2,
        explanation:
          'Sarah suggested they "meet at the park entrance at nine o\'clock."',
      },
      {
        id: 'wp-q6',
        question: 'What will Kevin do on Friday night?',
        options: [
          'Check the restaurant menu online',
          'Buy hiking boots',
          'Text Sarah to confirm the plan',
          'Drive to the park to check the trail',
        ],
        correctIndex: 2,
        explanation:
          'Kevin said, "I will text you Friday night to confirm."',
      },
    ],
    keyVocabulary: [
      {
        word: 'trail',
        definition: 'A path or route used for walking or hiking through a natural area.',
        turkish: 'patika',
      },
      {
        word: 'forecast',
        definition: 'A prediction about future weather conditions.',
        turkish: 'hava tahmini',
      },
      {
        word: 'reservation',
        definition: 'An arrangement to have a table, room, or seat held for you in advance.',
        turkish: 'rezervasyon',
      },
      {
        word: 'exhausting',
        definition: 'Making you feel very tired; physically demanding.',
        turkish: 'yorucu',
      },
      {
        word: 'downtown',
        definition: 'The central area of a city, often with shops, restaurants, and offices.',
        turkish: '\u015fehir merkezi',
      },
    ],
  },

  // ============================================================
  // CLB 6 — Script 13: Asking Neighbour to Water Plants (Dialogue)
  // ============================================================
  {
    id: 'listening-water-plants',
    title: 'Asking Neighbour to Water Plants',
    description:
      'Listen to a conversation between two neighbours about looking after plants and the house while one is away on vacation.',
    format: 'dialogue',
    clbLevel: 6,
    icon: '\u{1F331}',
    timeLimit: 180,
    segments: [
      {
        speaker: 'Maria',
        text: 'Hi, David. I was wondering if I could ask you a favour. My husband and I are going on vacation next week — we are flying to Nova Scotia to visit family. We will be gone for ten days, from the fourteenth to the twenty-third.',
        voiceGender: 'female',
      },
      {
        speaker: 'David',
        text: 'Oh, that sounds lovely. Of course, what do you need? Let me guess — you want someone to water your plants?',
        voiceGender: 'male',
      },
      {
        speaker: 'Maria',
        text: 'Exactly! I have quite a few plants, and some of them need special attention. The ones in the living room — the ferns and the peace lily — need to be watered every two days. They like moist soil, so just give them a good soak. But do not overwater the succulents on the kitchen windowsill. Those only need water once a week.',
        voiceGender: 'female',
      },
      {
        speaker: 'David',
        text: 'Got it. Ferns and peace lily every two days, succulents once a week. Is there anything else I should know? Do any of them need sunlight adjustments or anything like that?',
        voiceGender: 'male',
      },
      {
        speaker: 'Maria',
        text: 'The peace lily actually prefers indirect light, so please keep the blinds half closed in the living room. The rest should be fine as they are. I will leave written instructions on the kitchen counter just in case.',
        voiceGender: 'female',
      },
      {
        speaker: 'David',
        text: 'That is very helpful. How will I get inside? Do you want me to use the spare key under the mat, or will you leave one with me?',
        voiceGender: 'male',
      },
      {
        speaker: 'Maria',
        text: 'I will give you the spare key before we leave. It is actually in the lockbox by the side door — the code is four-seven-two-one. Also, would you mind collecting our mail from the mailbox? I do not want it piling up while we are away. It is a bit of a giveaway that no one is home.',
        voiceGender: 'female',
      },
      {
        speaker: 'David',
        text: 'Of course, I will grab the mail every day and keep it at my place until you get back. Should I set the thermostat to anything specific, or leave it as it is?',
        voiceGender: 'male',
      },
      {
        speaker: 'Maria',
        text: 'Good thinking. Could you set it to about eighteen degrees? That should be warm enough to keep the pipes from freezing but low enough to save on energy. I really appreciate this, David. I will bring you back some fresh lobster from Nova Scotia as a thank-you!',
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'wp13-q1',
        question: 'How long will Maria be away on vacation?',
        options: [
          'Five days',
          'One week',
          'Ten days',
          'Two weeks',
        ],
        correctIndex: 2,
        explanation:
          'Maria said they "will be gone for ten days, from the fourteenth to the twenty-third."',
      },
      {
        id: 'wp13-q2',
        question: 'How often do the ferns and peace lily need to be watered?',
        options: [
          'Every day',
          'Every two days',
          'Every three days',
          'Once a week',
        ],
        correctIndex: 1,
        explanation:
          'Maria said the ferns and the peace lily "need to be watered every two days."',
      },
      {
        id: 'wp13-q3',
        question: 'How often should the succulents be watered?',
        options: [
          'Every two days',
          'Every three days',
          'Once a week',
          'Every ten days',
        ],
        correctIndex: 2,
        explanation:
          'Maria said the succulents "only need water once a week."',
      },
      {
        id: 'wp13-q4',
        question: 'Where is the spare key located?',
        options: [
          'Under the front doormat',
          'With the next-door neighbour',
          'In a lockbox by the side door',
          'Hidden in the garden shed',
        ],
        correctIndex: 2,
        explanation:
          'Maria said the spare key "is in the lockbox by the side door" with the code four-seven-two-one.',
      },
      {
        id: 'wp13-q5',
        question: 'Why does Maria want the mail collected?',
        options: [
          'She is expecting an important package',
          'She does not want it to be obvious that no one is home',
          'The mailbox is too small to hold ten days of mail',
          'She needs David to forward it to Nova Scotia',
        ],
        correctIndex: 1,
        explanation:
          'Maria said she does not want mail "piling up" because "it is a bit of a giveaway that no one is home."',
      },
      {
        id: 'wp13-q6',
        question: 'What temperature should the thermostat be set to?',
        options: [
          'Fifteen degrees',
          'Sixteen degrees',
          'Eighteen degrees',
          'Twenty degrees',
        ],
        correctIndex: 2,
        explanation:
          'Maria asked David to "set it to about eighteen degrees" to keep the pipes from freezing while saving energy.',
      },
    ],
    keyVocabulary: [
      {
        word: 'spare key',
        definition: 'An extra copy of a key kept for emergencies or convenience.',
        turkish: 'yedek anahtar',
      },
      {
        word: 'succulent',
        definition: 'A type of plant with thick, fleshy leaves that stores water and needs little watering.',
        turkish: 'etli yaprakl\u0131 bitki',
      },
      {
        word: 'instructions',
        definition: 'Detailed information explaining how something should be done.',
        turkish: 'talimatlar',
      },
      {
        word: 'mailbox',
        definition: 'A box or container where letters and packages are delivered.',
        turkish: 'posta kutusu',
      },
      {
        word: 'thermostat',
        definition: 'A device that controls the temperature of a heating or cooling system.',
        turkish: 'termostat',
      },
    ],
  },

  // ============================================================
  // CLB 6 — Script 14: Library Orientation for New Members (Monologue)
  // ============================================================
  {
    id: 'listening-library-orientation',
    title: 'Library Orientation for New Members',
    description:
      'Listen to a librarian give an orientation to new members about library services, borrowing policies, and available resources.',
    format: 'monologue',
    clbLevel: 6,
    icon: '\u{1F4DA}',
    timeLimit: 200,
    segments: [
      {
        speaker: 'Librarian',
        text: 'Good afternoon, everyone, and welcome to the Oakville Public Library. My name is Janet, and I will be giving you a quick orientation today. Whether you are new to the community or just visiting, we want to make sure you know about all the services we offer. Let us start with how to get your library card.',
        voiceGender: 'female',
      },
      {
        speaker: 'Librarian',
        text: 'To apply for a membership, all you need is a valid piece of photo identification and proof of your current address — a utility bill or a bank statement will do. The library card is completely free for all residents of Oakville. If you live outside the city, there is an annual fee of forty dollars. Once you have your card, you can start borrowing materials right away.',
        voiceGender: 'female',
      },
      {
        speaker: 'Librarian',
        text: 'Now, regarding borrowing limits. You can borrow up to twenty items at a time. Books and magazines can be borrowed for three weeks, while DVDs and audiobooks have a two-week lending period. If you need more time, you can renew items up to two times, either online, by phone, or in person. However, if someone else has placed a hold on the item, a renewal will not be possible.',
        voiceGender: 'female',
      },
      {
        speaker: 'Librarian',
        text: 'Please be mindful of due dates. Overdue fines are twenty-five cents per day for books and one dollar per day for DVDs. If an item is more than six weeks overdue, it will be considered lost, and you will be charged the full replacement cost. We do send email reminders three days before your items are due, so make sure your email address is up to date in your account.',
        voiceGender: 'female',
      },
      {
        speaker: 'Librarian',
        text: 'We also have a fantastic range of digital resources. With your library card, you can access thousands of e-books, audiobooks, and online newspapers through our digital catalogue. We subscribe to services like OverDrive and PressReader, which you can use from home on your computer, tablet, or phone. If you need a book that we do not have in our collection, you can request it through our interlibrary loan programme, and we will borrow it from another library in the region.',
        voiceGender: 'female',
      },
      {
        speaker: 'Librarian',
        text: 'Finally, I want to mention our study rooms and community events. We have six private study rooms that can be booked for up to two hours at a time — they are very popular with students, so I recommend booking in advance through our website. As for events, we host weekly story time for children on Saturdays at ten-thirty, a book club for adults on the first Wednesday of every month, and free computer literacy workshops every other Thursday. Check our events calendar online or pick up a flyer at the front desk. Thank you, and enjoy your time at the library!',
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'lo-q1',
        question: 'What do you need to apply for a library card?',
        options: [
          'A passport and a reference letter',
          'Photo identification and proof of current address',
          'A student card and a deposit of ten dollars',
          'Two pieces of photo identification',
        ],
        correctIndex: 1,
        explanation:
          'The librarian said you need "a valid piece of photo identification and proof of your current address."',
      },
      {
        id: 'lo-q2',
        question: 'How much is the annual fee for non-residents?',
        options: [
          'Twenty dollars',
          'Thirty dollars',
          'Forty dollars',
          'Fifty dollars',
        ],
        correctIndex: 2,
        explanation:
          'The librarian stated that for people living outside the city, "there is an annual fee of forty dollars."',
      },
      {
        id: 'lo-q3',
        question: 'How long can books be borrowed for?',
        options: [
          'One week',
          'Two weeks',
          'Three weeks',
          'Four weeks',
        ],
        correctIndex: 2,
        explanation:
          'The librarian said "books and magazines can be borrowed for three weeks."',
      },
      {
        id: 'lo-q4',
        question: 'What is the overdue fine for DVDs?',
        options: [
          'Twenty-five cents per day',
          'Fifty cents per day',
          'Seventy-five cents per day',
          'One dollar per day',
        ],
        correctIndex: 3,
        explanation:
          'The librarian stated that overdue fines are "one dollar per day for DVDs."',
      },
      {
        id: 'lo-q5',
        question: 'How can members request a book the library does not have?',
        options: [
          'By purchasing it through the library store',
          'By submitting a suggestion to the head librarian',
          'Through the interlibrary loan programme',
          'By donating a copy to the library',
        ],
        correctIndex: 2,
        explanation:
          'The librarian said members "can request it through our interlibrary loan programme."',
      },
      {
        id: 'lo-q6',
        question: 'How long can a study room be booked for?',
        options: [
          'Up to one hour',
          'Up to two hours',
          'Up to three hours',
          'Up to four hours',
        ],
        correctIndex: 1,
        explanation:
          'The librarian said study rooms "can be booked for up to two hours at a time."',
      },
    ],
    keyVocabulary: [
      {
        word: 'membership',
        definition: 'The state of being a registered member of an organization or service.',
        turkish: '\u00fcyelik',
      },
      {
        word: 'overdue',
        definition: 'Not returned or paid by the required date.',
        turkish: 'gecikmi\u015f',
      },
      {
        word: 'renewal',
        definition: 'The act of extending the borrowing period for an item.',
        turkish: 'yenileme',
      },
      {
        word: 'catalogue',
        definition: 'A complete list of items, such as books or resources, available in a library.',
        turkish: 'katalog',
      },
      {
        word: 'interlibrary',
        definition: 'Between or among libraries, especially referring to the sharing of resources.',
        turkish: 'k\u00fct\u00fcphaneler aras\u0131',
      },
    ],
  },
];
