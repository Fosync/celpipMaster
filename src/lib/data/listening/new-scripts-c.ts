import type { ListeningScript } from './types';

export const newListeningScriptsC: ListeningScript[] = [
  // ============================================================
  // CLB 5 — Script 1: Ordering Pizza by Phone (Dialogue)
  // ============================================================
  {
    id: 'listening-pizza-order',
    title: 'Ordering Pizza by Phone',
    description:
      'Listen to a conversation between a customer and a pizza restaurant employee about placing a delivery order.',
    format: 'dialogue',
    clbLevel: 5,
    icon: '\u{1F355}',
    timeLimit: 180,
    segments: [
      {
        speaker: 'Employee',
        text: 'Thank you for calling Mario\'s Pizza. How can I help you today?',
        voiceGender: 'male',
      },
      {
        speaker: 'Customer',
        text: 'Hi, I would like to place an order for delivery, please.',
        voiceGender: 'female',
      },
      {
        speaker: 'Employee',
        text: 'Sure thing. What can I get started for you?',
        voiceGender: 'male',
      },
      {
        speaker: 'Customer',
        text: 'I would like a large pepperoni pizza and a medium vegetarian pizza. Does the vegetarian come with mushrooms?',
        voiceGender: 'female',
      },
      {
        speaker: 'Employee',
        text: 'Yes, the vegetarian pizza has mushrooms, green peppers, onions, tomatoes, and black olives. Would you like to add or remove anything?',
        voiceGender: 'male',
      },
      {
        speaker: 'Customer',
        text: 'Could you please take off the black olives? My kids do not like them.',
        voiceGender: 'female',
      },
      {
        speaker: 'Employee',
        text: 'No problem at all. So that is a large pepperoni and a medium vegetarian with no olives. Would you like to add any drinks or sides to your order?',
        voiceGender: 'male',
      },
      {
        speaker: 'Customer',
        text: 'Yes, I will take a two-litre bottle of ginger ale and an order of garlic bread, please.',
        voiceGender: 'female',
      },
      {
        speaker: 'Employee',
        text: 'Great. Your total comes to thirty-eight dollars and fifty cents, including tax. Delivery usually takes about thirty-five to forty minutes. Can I get your address?',
        voiceGender: 'male',
      },
      {
        speaker: 'Customer',
        text: 'It is 214 Maple Street, apartment 3B. Can I pay with debit when the driver arrives?',
        voiceGender: 'female',
      },
      {
        speaker: 'Employee',
        text: 'Absolutely. Our drivers carry a portable debit machine. Is there anything else I can help you with?',
        voiceGender: 'male',
      },
      {
        speaker: 'Customer',
        text: 'No, that is everything. Thank you so much!',
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'listening-pizza-order-q1',
        question: 'Why is the customer calling?',
        options: [
          'To complain about a previous order',
          'To order pizza for delivery',
          'To make a reservation at the restaurant',
          'To ask about job openings',
        ],
        correctIndex: 1,
        explanation:
          'The customer says "I would like to place an order for delivery, please."',
      },
      {
        id: 'listening-pizza-order-q2',
        question: 'What change does the customer request for the vegetarian pizza?',
        options: [
          'Add extra cheese',
          'Change it to a large size',
          'Remove the black olives',
          'Remove the mushrooms',
        ],
        correctIndex: 2,
        explanation:
          'The customer asks "could you please take off the black olives?" because her kids do not like them.',
      },
      {
        id: 'listening-pizza-order-q3',
        question: 'How much is the total order including tax?',
        options: [
          'Twenty-eight dollars and fifty cents',
          'Thirty-five dollars',
          'Thirty-eight dollars and fifty cents',
          'Forty-two dollars',
        ],
        correctIndex: 2,
        explanation:
          'The employee says "your total comes to thirty-eight dollars and fifty cents, including tax."',
      },
      {
        id: 'listening-pizza-order-q4',
        question: 'How does the customer want to pay?',
        options: [
          'With cash at the door',
          'With a credit card over the phone',
          'With debit when the driver arrives',
          'Through an online payment app',
        ],
        correctIndex: 2,
        explanation:
          'The customer asks "can I pay with debit when the driver arrives?" and the employee confirms.',
      },
    ],
    keyVocabulary: [
      {
        word: 'delivery',
        definition: 'The act of bringing food or goods to a customer\'s location.',
        turkish: 'teslimat',
      },
      {
        word: 'order',
        definition: 'A request to purchase food, products, or services.',
        turkish: 'siparis',
      },
      {
        word: 'vegetarian',
        definition: 'A food option that contains no meat.',
        turkish: 'vejeteryan',
      },
      {
        word: 'side',
        definition: 'An extra dish served alongside the main order.',
        turkish: 'yan urun',
      },
      {
        word: 'portable',
        definition: 'Small and light enough to be easily carried or moved.',
        turkish: 'tasinabilir',
      },
      {
        word: 'debit',
        definition: 'A payment method that takes money directly from a bank account.',
        turkish: 'banka karti',
      },
    ],
  },

  // ============================================================
  // CLB 5 — Script 2: Asking Teacher About Homework (Dialogue)
  // ============================================================
  {
    id: 'listening-homework-question',
    title: 'Asking Teacher About Homework',
    description:
      'Listen to a conversation between a student and a teacher about a missed assignment and how to make up the work.',
    format: 'dialogue',
    clbLevel: 5,
    icon: '\u{1F4DA}',
    timeLimit: 180,
    segments: [
      {
        speaker: 'Student',
        text: 'Excuse me, Ms. Thompson. Do you have a minute? I was absent on Monday and I think I missed an assignment.',
        voiceGender: 'female',
      },
      {
        speaker: 'Teacher',
        text: 'Of course, Priya. Yes, you did miss something. On Monday, I assigned a short essay on Canadian geography. It is due this Friday.',
        voiceGender: 'female',
      },
      {
        speaker: 'Student',
        text: 'Oh, I see. What exactly do I need to write about?',
        voiceGender: 'female',
      },
      {
        speaker: 'Teacher',
        text: 'You need to pick one Canadian province or territory and write about its geography, climate, and one interesting fact. The essay should be between three hundred and five hundred words.',
        voiceGender: 'female',
      },
      {
        speaker: 'Student',
        text: 'Okay, that sounds manageable. Is there a specific format I should follow?',
        voiceGender: 'female',
      },
      {
        speaker: 'Teacher',
        text: 'Yes. I want it typed, double-spaced, with your name and the date at the top. Use at least two sources and include a short reference list at the end. You can find the detailed instructions on our class website under the assignments tab.',
        voiceGender: 'female',
      },
      {
        speaker: 'Student',
        text: 'Got it. Since I was absent, would it be possible to get an extension? Maybe until next Monday?',
        voiceGender: 'female',
      },
      {
        speaker: 'Teacher',
        text: 'I can give you until Monday, but please try to hand it in on time if you can. Late assignments normally lose five percent per day, but since you were absent with a valid reason, I will waive the penalty if you submit it by Monday.',
        voiceGender: 'female',
      },
      {
        speaker: 'Student',
        text: 'Thank you so much, Ms. Thompson. I really appreciate that. I will do my best to have it ready by Friday, but it is good to know I have until Monday just in case.',
        voiceGender: 'female',
      },
      {
        speaker: 'Teacher',
        text: 'You are welcome. Also, I would suggest looking at the textbook, chapter four. It has a lot of useful information about Canadian provinces. If you have any questions while you are working on it, feel free to email me or come by during office hours on Wednesday afternoon.',
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'listening-homework-question-q1',
        question: 'Why did the student miss the assignment?',
        options: [
          'She forgot to check the class website',
          'She was absent on Monday',
          'She did not understand the instructions',
          'She lost her textbook',
        ],
        correctIndex: 1,
        explanation:
          'The student says "I was absent on Monday and I think I missed an assignment."',
      },
      {
        id: 'listening-homework-question-q2',
        question: 'What is the topic of the essay?',
        options: [
          'Canadian history and politics',
          'A famous Canadian person',
          'A Canadian province or territory and its geography',
          'Canadian wildlife and nature',
        ],
        correctIndex: 2,
        explanation:
          'The teacher says the student needs to "pick one Canadian province or territory and write about its geography, climate, and one interesting fact."',
      },
      {
        id: 'listening-homework-question-q3',
        question: 'How many words should the essay be?',
        options: [
          'Between one hundred and two hundred words',
          'Between two hundred and four hundred words',
          'Between three hundred and five hundred words',
          'Between five hundred and seven hundred words',
        ],
        correctIndex: 2,
        explanation:
          'The teacher says "the essay should be between three hundred and five hundred words."',
      },
      {
        id: 'listening-homework-question-q4',
        question: 'When is the extended deadline for the student?',
        options: [
          'This Wednesday',
          'This Friday',
          'Next Monday',
          'Next Wednesday',
        ],
        correctIndex: 2,
        explanation:
          'The teacher says "I can give you until Monday" as an extension since the student was absent.',
      },
    ],
    keyVocabulary: [
      {
        word: 'assignment',
        definition: 'A piece of work given to a student by a teacher.',
        turkish: 'odev',
      },
      {
        word: 'extension',
        definition: 'Extra time given to complete a task or assignment.',
        turkish: 'sure uzatimi',
      },
      {
        word: 'double-spaced',
        definition: 'A text format with an extra blank line between each line of writing.',
        turkish: 'cift aralikh',
      },
      {
        word: 'reference list',
        definition: 'A list of sources used in a written work.',
        turkish: 'kaynak listesi',
      },
      {
        word: 'penalty',
        definition: 'A punishment or disadvantage for breaking a rule or missing a deadline.',
        turkish: 'ceza',
      },
      {
        word: 'submit',
        definition: 'To hand in or present work for review or grading.',
        turkish: 'teslim etmek',
      },
    ],
  },

  // ============================================================
  // CLB 5 — Script 3: Making Plans With a Friend for Weekend (Dialogue)
  // ============================================================
  {
    id: 'listening-weekend-plans',
    title: 'Making Plans With a Friend for Weekend',
    description:
      'Listen to two friends discussing what to do on Saturday, considering different activities and making a plan.',
    format: 'dialogue',
    clbLevel: 5,
    icon: '\u{1F3C9}',
    timeLimit: 180,
    segments: [
      {
        speaker: 'Alex',
        text: 'Hey, Mei! Do you have any plans for Saturday? I was thinking we could do something fun together.',
        voiceGender: 'male',
      },
      {
        speaker: 'Mei',
        text: 'Hi, Alex! I do not have anything planned yet. What did you have in mind?',
        voiceGender: 'female',
      },
      {
        speaker: 'Alex',
        text: 'Well, I was thinking about going to the farmers\' market downtown in the morning. It opens at nine and they have really good fresh bread and coffee. After that, we could check out the new art exhibit at the community centre.',
        voiceGender: 'male',
      },
      {
        speaker: 'Mei',
        text: 'The farmers\' market sounds great! But I actually went to the art exhibit last week with my sister. It was nice, but I do not want to go again so soon. How about we do something outdoors instead?',
        voiceGender: 'female',
      },
      {
        speaker: 'Alex',
        text: 'Sure, that works. We could go for a hike at Riverside Trail. It is about a forty-minute drive from here, but the views are amazing. Or if you prefer something closer, we could rent bikes and ride along the lakefront path.',
        voiceGender: 'male',
      },
      {
        speaker: 'Mei',
        text: 'I love biking! Let us do the lakefront path. It is easier and we do not have to drive far. There is a bike rental place near the waterfront that charges twelve dollars per hour.',
        voiceGender: 'female',
      },
      {
        speaker: 'Alex',
        text: 'Perfect. So how about we meet at the farmers\' market at nine, spend about an hour there, and then head to the bike rental place around ten-thirty?',
        voiceGender: 'male',
      },
      {
        speaker: 'Mei',
        text: 'That sounds like a great plan. Should we grab lunch somewhere after biking? There is a really good pho restaurant near the waterfront. It is called Golden Bowl and they have an amazing lunch special for thirteen dollars.',
        voiceGender: 'female',
      },
      {
        speaker: 'Alex',
        text: 'I have heard of that place! A friend from work told me the spring rolls there are incredible. Let us definitely go there for lunch.',
        voiceGender: 'male',
      },
      {
        speaker: 'Mei',
        text: 'Awesome. So the plan is farmers\' market at nine, biking at ten-thirty, and lunch at Golden Bowl after. I will text you Saturday morning to confirm. See you then!',
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'listening-weekend-plans-q1',
        question: 'Why does Mei not want to go to the art exhibit?',
        options: [
          'She is not interested in art',
          'She went there last week already',
          'It is too expensive',
          'It is closed on Saturdays',
        ],
        correctIndex: 1,
        explanation:
          'Mei says "I actually went to the art exhibit last week with my sister" and does not want to go again so soon.',
      },
      {
        id: 'listening-weekend-plans-q2',
        question: 'What outdoor activity do they decide to do?',
        options: [
          'Go hiking at Riverside Trail',
          'Play tennis at the park',
          'Rent bikes and ride along the lakefront path',
          'Go swimming at the community pool',
        ],
        correctIndex: 2,
        explanation:
          'Mei suggests renting bikes and riding along the lakefront path, and Alex agrees.',
      },
      {
        id: 'listening-weekend-plans-q3',
        question: 'How much does the bike rental cost?',
        options: [
          'Eight dollars per hour',
          'Ten dollars per hour',
          'Twelve dollars per hour',
          'Fifteen dollars per hour',
        ],
        correctIndex: 2,
        explanation:
          'Mei mentions "a bike rental place near the waterfront that charges twelve dollars per hour."',
      },
      {
        id: 'listening-weekend-plans-q4',
        question: 'Where are they planning to have lunch?',
        options: [
          'At the farmers\' market food stalls',
          'At a sushi restaurant downtown',
          'At a pho restaurant called Golden Bowl',
          'At a pizza place near the waterfront',
        ],
        correctIndex: 2,
        explanation:
          'Mei suggests "a really good pho restaurant near the waterfront" called Golden Bowl and Alex agrees.',
      },
    ],
    keyVocabulary: [
      {
        word: 'farmers\' market',
        definition: 'An outdoor market where local farmers sell fresh produce and goods.',
        turkish: 'coban pazari',
      },
      {
        word: 'exhibit',
        definition: 'A public display of art, objects, or information.',
        turkish: 'sergi',
      },
      {
        word: 'hike',
        definition: 'A long walk in nature, usually on trails or in the countryside.',
        turkish: 'dogada yuruyus',
      },
      {
        word: 'lakefront',
        definition: 'The area of land along the edge of a lake.',
        turkish: 'gol kenari',
      },
      {
        word: 'rental',
        definition: 'The act of paying to use something for a period of time.',
        turkish: 'kiralama',
      },
      {
        word: 'waterfront',
        definition: 'The part of a city or town that is next to a body of water.',
        turkish: 'sahil seridi',
      },
    ],
  },

  // ============================================================
  // CLB 5 — Script 4: Returning a Shirt at Clothing Store (Dialogue)
  // ============================================================
  {
    id: 'listening-shirt-return',
    title: 'Returning a Shirt at a Clothing Store',
    description:
      'Listen to a conversation between a customer and a store employee about returning a shirt and discussing exchange and refund options.',
    format: 'dialogue',
    clbLevel: 5,
    icon: '\u{1F455}',
    timeLimit: 180,
    segments: [
      {
        speaker: 'Customer',
        text: 'Hi there. I bought this shirt last week and I would like to return it, please.',
        voiceGender: 'male',
      },
      {
        speaker: 'Employee',
        text: 'Of course. Is there anything wrong with the shirt?',
        voiceGender: 'female',
      },
      {
        speaker: 'Customer',
        text: 'It does not fit properly. I bought a medium but it is too tight around the shoulders. I think I need a large instead.',
        voiceGender: 'male',
      },
      {
        speaker: 'Employee',
        text: 'I understand. Do you have your receipt with you? We need the original receipt for all returns and exchanges.',
        voiceGender: 'female',
      },
      {
        speaker: 'Customer',
        text: 'Yes, I have it right here. I paid forty-five dollars for the shirt.',
        voiceGender: 'male',
      },
      {
        speaker: 'Employee',
        text: 'Thank you. And the tags are still attached, which is great. We can definitely process this for you. Would you prefer an exchange for a larger size, or would you like a full refund?',
        voiceGender: 'female',
      },
      {
        speaker: 'Customer',
        text: 'I would prefer to exchange it for a large, if you have one in the same colour. I really like the blue.',
        voiceGender: 'male',
      },
      {
        speaker: 'Employee',
        text: 'Let me check for you. Unfortunately, we are out of the large in blue right now. We do have the large available in grey and in black. Would either of those work for you?',
        voiceGender: 'female',
      },
      {
        speaker: 'Customer',
        text: 'Hmm, I really had my heart set on the blue. When do you think you will get more in stock?',
        voiceGender: 'male',
      },
      {
        speaker: 'Employee',
        text: 'We are expecting a new shipment next Tuesday. I can put one on hold for you when it arrives, and give you a call. Or if you prefer, I can process the refund today and you can come back next week to purchase the blue in your size.',
        voiceGender: 'female',
      },
      {
        speaker: 'Customer',
        text: 'I think I will just take the refund for now and come back next week. That way I can try on the large before I buy it.',
        voiceGender: 'male',
      },
      {
        speaker: 'Employee',
        text: 'That sounds like a good plan. I will process the refund back to your credit card. It should appear on your statement within three to five business days. Is there anything else I can help you with?',
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'listening-shirt-return-q1',
        question: 'Why does the customer want to return the shirt?',
        options: [
          'The colour is not what he expected',
          'The shirt has a stain on it',
          'The shirt is too tight around the shoulders',
          'He found a cheaper shirt at another store',
        ],
        correctIndex: 2,
        explanation:
          'The customer says "it is too tight around the shoulders" and he needs a larger size.',
      },
      {
        id: 'listening-shirt-return-q2',
        question: 'What colour shirt does the customer want?',
        options: [
          'Black',
          'Grey',
          'Blue',
          'White',
        ],
        correctIndex: 2,
        explanation:
          'The customer says "I really like the blue" and wants to exchange for the same colour in a larger size.',
      },
      {
        id: 'listening-shirt-return-q3',
        question: 'When is the new shipment expected to arrive?',
        options: [
          'Next Monday',
          'Next Tuesday',
          'Next Thursday',
          'Next Friday',
        ],
        correctIndex: 1,
        explanation:
          'The employee says "we are expecting a new shipment next Tuesday."',
      },
      {
        id: 'listening-shirt-return-q4',
        question: 'What does the customer decide to do?',
        options: [
          'Exchange the shirt for a grey one',
          'Keep the medium shirt',
          'Take a refund and come back next week',
          'Wait in the store for new stock',
        ],
        correctIndex: 2,
        explanation:
          'The customer says "I will just take the refund for now and come back next week."',
      },
    ],
    keyVocabulary: [
      {
        word: 'receipt',
        definition: 'A printed record showing the details of a purchase.',
        turkish: 'fis',
      },
      {
        word: 'exchange',
        definition: 'To return a purchased item and receive a different one in its place.',
        turkish: 'degisim',
      },
      {
        word: 'refund',
        definition: 'Money returned to a customer when they return a product.',
        turkish: 'iade',
      },
      {
        word: 'shipment',
        definition: 'A delivery of goods or products sent from one place to another.',
        turkish: 'sevkiyat',
      },
      {
        word: 'in stock',
        definition: 'Available for purchase in the store at the current time.',
        turkish: 'stokta mevcut',
      },
      {
        word: 'tags',
        definition: 'Labels attached to clothing that show size, price, and brand information.',
        turkish: 'etiketler',
      },
      {
        word: 'business days',
        definition: 'Working days of the week, usually Monday through Friday.',
        turkish: 'is gunleri',
      },
    ],
  },

  // ============================================================
  // CLB 5 — Script 5: Calling to Reschedule a Haircut (Dialogue)
  // ============================================================
  {
    id: 'listening-reschedule-haircut',
    title: 'Calling to Reschedule a Haircut',
    description:
      'Listen to a conversation between a client and a salon receptionist about changing a haircut appointment to a different day.',
    format: 'dialogue',
    clbLevel: 5,
    icon: '\u{1F488}',
    timeLimit: 180,
    segments: [
      {
        speaker: 'Receptionist',
        text: 'Good morning, Bella\'s Hair Studio. This is Rachel speaking. How can I help you?',
        voiceGender: 'female',
      },
      {
        speaker: 'Client',
        text: 'Hi, Rachel. My name is Daniel Park. I have an appointment booked for this Thursday at two o\'clock with Carla, but something came up at work and I need to reschedule.',
        voiceGender: 'male',
      },
      {
        speaker: 'Receptionist',
        text: 'No problem, Daniel. Let me pull up your booking. Yes, I see it here. Thursday at two with Carla for a men\'s haircut. When would you like to reschedule to?',
        voiceGender: 'female',
      },
      {
        speaker: 'Client',
        text: 'Ideally sometime on Friday or Saturday, if Carla has any openings. I prefer the afternoon if possible.',
        voiceGender: 'male',
      },
      {
        speaker: 'Receptionist',
        text: 'Let me check Carla\'s schedule. On Friday, she is fully booked in the afternoon, but she has a spot available at ten-thirty in the morning. On Saturday, she has an opening at three o\'clock in the afternoon.',
        voiceGender: 'female',
      },
      {
        speaker: 'Client',
        text: 'Saturday at three works perfectly for me. Let us go with that one.',
        voiceGender: 'male',
      },
      {
        speaker: 'Receptionist',
        text: 'Great. I will book you in for Saturday at three o\'clock with Carla. A men\'s haircut is thirty-five dollars. Would you like to add anything else to your appointment, like a beard trim? That is an extra ten dollars.',
        voiceGender: 'female',
      },
      {
        speaker: 'Client',
        text: 'Actually, yes. I could use a beard trim too. So that would be forty-five dollars total?',
        voiceGender: 'male',
      },
      {
        speaker: 'Receptionist',
        text: 'That is correct. Forty-five dollars before tax. We also accept tips if you would like to leave one for Carla. Just a reminder, we ask that you arrive about five minutes early so we can stay on schedule.',
        voiceGender: 'female',
      },
      {
        speaker: 'Client',
        text: 'Sure, I can do that. And if anything else comes up and I need to cancel, what is your cancellation policy?',
        voiceGender: 'male',
      },
      {
        speaker: 'Receptionist',
        text: 'We ask for at least twenty-four hours\' notice for cancellations. If you cancel with less notice, there is a fifteen-dollar cancellation fee. But as long as you let us know the day before, there is no charge.',
        voiceGender: 'female',
      },
      {
        speaker: 'Client',
        text: 'Understood. Thank you so much, Rachel. See you Saturday!',
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'listening-reschedule-haircut-q1',
        question: 'Why does Daniel need to reschedule his appointment?',
        options: [
          'He is feeling sick',
          'Something came up at work',
          'He wants a different stylist',
          'He forgot about the appointment',
        ],
        correctIndex: 1,
        explanation:
          'Daniel says "something came up at work and I need to reschedule."',
      },
      {
        id: 'listening-reschedule-haircut-q2',
        question: 'When is the new appointment?',
        options: [
          'Friday at ten-thirty in the morning',
          'Friday at two o\'clock in the afternoon',
          'Saturday at three o\'clock in the afternoon',
          'Saturday at ten-thirty in the morning',
        ],
        correctIndex: 2,
        explanation:
          'Daniel chooses Saturday at three o\'clock because it works perfectly for him.',
      },
      {
        id: 'listening-reschedule-haircut-q3',
        question: 'How much will Daniel pay in total before tax?',
        options: [
          'Thirty-five dollars',
          'Forty dollars',
          'Forty-five dollars',
          'Fifty dollars',
        ],
        correctIndex: 2,
        explanation:
          'The haircut is thirty-five dollars plus a ten-dollar beard trim, making the total forty-five dollars before tax.',
      },
      {
        id: 'listening-reschedule-haircut-q4',
        question: 'What is the cancellation fee if less than twenty-four hours\' notice is given?',
        options: [
          'Ten dollars',
          'Fifteen dollars',
          'Twenty dollars',
          'Twenty-five dollars',
        ],
        correctIndex: 1,
        explanation:
          'The receptionist says "there is a fifteen-dollar cancellation fee" if you cancel with less than twenty-four hours\' notice.',
      },
    ],
    keyVocabulary: [
      {
        word: 'reschedule',
        definition: 'To change the time or date of a planned event or appointment.',
        turkish: 'yeniden planlamak',
      },
      {
        word: 'appointment',
        definition: 'A scheduled meeting or visit at a specific time.',
        turkish: 'randevu',
      },
      {
        word: 'opening',
        definition: 'An available time slot in a schedule.',
        turkish: 'uygun zaman',
      },
      {
        word: 'beard trim',
        definition: 'The act of cutting and shaping facial hair to make it neat.',
        turkish: 'sakal kesimi',
      },
      {
        word: 'cancellation',
        definition: 'The act of deciding that a planned event will not happen.',
        turkish: 'iptal',
      },
      {
        word: 'notice',
        definition: 'A warning or announcement given ahead of time.',
        turkish: 'bildirim',
      },
    ],
  },

  // ============================================================
  // CLB 5 — Script 6: Asking Coworker to Swap Shifts (Dialogue)
  // ============================================================
  {
    id: 'listening-swap-shifts',
    title: 'Asking a Coworker to Swap Shifts',
    description:
      'Listen to two coworkers at a coffee shop negotiating a shift exchange so one of them can attend a family event.',
    format: 'dialogue',
    clbLevel: 5,
    icon: '\u{1F504}',
    timeLimit: 180,
    segments: [
      {
        speaker: 'Omar',
        text: 'Hey, Jessica. Can I talk to you for a second? I need a favour.',
        voiceGender: 'male',
      },
      {
        speaker: 'Jessica',
        text: 'Sure, Omar. What is going on?',
        voiceGender: 'female',
      },
      {
        speaker: 'Omar',
        text: 'My cousin is getting married next Saturday, and the ceremony is at noon. I am scheduled to work the morning shift that day, from eight to two. Would you be willing to swap shifts with me?',
        voiceGender: 'male',
      },
      {
        speaker: 'Jessica',
        text: 'Next Saturday? Let me think. I am on the evening shift that day, from four to ten. What exactly are you proposing?',
        voiceGender: 'female',
      },
      {
        speaker: 'Omar',
        text: 'If you could take my morning shift from eight to two, I would take your evening shift from four to ten. That way I can go to the wedding and the reception in the afternoon, and then come in for the evening.',
        voiceGender: 'male',
      },
      {
        speaker: 'Jessica',
        text: 'Hmm, starting at eight is pretty early for me on a Saturday. I usually sleep in on weekends. But I guess I could make it work. Would you be able to cover a shift for me sometime in return?',
        voiceGender: 'female',
      },
      {
        speaker: 'Omar',
        text: 'Absolutely. If you ever need a day off or want to swap, just let me know. I owe you one. I am happy to cover for you anytime in the next couple of weeks.',
        voiceGender: 'male',
      },
      {
        speaker: 'Jessica',
        text: 'Actually, I might take you up on that. I have a dentist appointment on the following Wednesday morning and I was going to ask someone to cover my opening shift. Could you do that one?',
        voiceGender: 'female',
      },
      {
        speaker: 'Omar',
        text: 'Wednesday morning? Yeah, I can do that. What time does the shift start?',
        voiceGender: 'male',
      },
      {
        speaker: 'Jessica',
        text: 'It starts at seven and ends at one. Is that okay?',
        voiceGender: 'female',
      },
      {
        speaker: 'Omar',
        text: 'Seven is early, but fair is fair. You are helping me out with Saturday, so I am happy to do it. Do we need to let the manager know about the swap?',
        voiceGender: 'male',
      },
      {
        speaker: 'Jessica',
        text: 'Yes, we have to fill out a shift swap form and get it approved by Karen. She usually says yes as long as both people agree and it is submitted at least three days before the shift. I will grab the form from the office.',
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'listening-swap-shifts-q1',
        question: 'Why does Omar need to swap his shift?',
        options: [
          'He has a dentist appointment',
          'He is going on vacation',
          'His cousin is getting married',
          'He is feeling unwell',
        ],
        correctIndex: 2,
        explanation:
          'Omar says "my cousin is getting married next Saturday" and the ceremony is at noon during his shift.',
      },
      {
        id: 'listening-swap-shifts-q2',
        question: 'What shift is Jessica currently scheduled for on Saturday?',
        options: [
          'Morning shift from eight to two',
          'Afternoon shift from two to eight',
          'Evening shift from four to ten',
          'Night shift from six to midnight',
        ],
        correctIndex: 2,
        explanation:
          'Jessica says "I am on the evening shift that day, from four to ten."',
      },
      {
        id: 'listening-swap-shifts-q3',
        question: 'What does Jessica ask Omar to do in return?',
        options: [
          'Buy her lunch on Saturday',
          'Cover her opening shift on Wednesday morning',
          'Help her move to a new apartment',
          'Drive her to the dentist',
        ],
        correctIndex: 1,
        explanation:
          'Jessica asks Omar to cover her opening shift on Wednesday morning because she has a dentist appointment.',
      },
      {
        id: 'listening-swap-shifts-q4',
        question: 'What do they need to do to make the swap official?',
        options: [
          'Send an email to the head office',
          'Post a notice on the bulletin board',
          'Fill out a shift swap form and get it approved by the manager',
          'Call the manager on the phone',
        ],
        correctIndex: 2,
        explanation:
          'Jessica says "we have to fill out a shift swap form and get it approved by Karen," the manager.',
      },
    ],
    keyVocabulary: [
      {
        word: 'swap',
        definition: 'To exchange one thing for another with someone.',
        turkish: 'takas etmek',
      },
      {
        word: 'shift',
        definition: 'A scheduled period of time during which a person works.',
        turkish: 'vardiya',
      },
      {
        word: 'favour',
        definition: 'A kind or helpful act that you do for someone.',
        turkish: 'iyilik',
      },
      {
        word: 'cover',
        definition: 'To do someone else\'s job or shift in their absence.',
        turkish: 'yerine gecmek',
      },
      {
        word: 'ceremony',
        definition: 'A formal event or ritual, such as a wedding or graduation.',
        turkish: 'toren',
      },
      {
        word: 'approved',
        definition: 'Officially accepted or agreed to by someone in authority.',
        turkish: 'onaylanmis',
      },
    ],
  },
];
