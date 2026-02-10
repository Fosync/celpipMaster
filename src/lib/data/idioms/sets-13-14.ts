import type { IdiomSet } from './types';

export const idiomSets13to14: IdiomSet[] = [
  {
    id: 'idioms-travel-adventure',
    title: 'Travel & Adventure',
    description: 'Idioms about traveling and exploring',
    clbLevel: 6,
    category: 'Travel & Adventure',
    icon: '✈️',
    words: [
      {
        id: 'hit-the-road',
        idiom: 'hit the road',
        meaning: 'To begin a journey or leave',
        example: 'We need to hit the road early to avoid traffic.',
        turkishMeaning: 'yola çıkmak',
        clbLevel: 6,
        category: 'Travel & Adventure',
        whenToUse: 'Use when starting a trip or leaving.',
        contexts: [
          { scenario: 'Sarah packed and wanted to hit the road by 6 AM.', question: 'What does "hit the road" mean?', options: ['Repair the road', 'Start the journey', 'Avoid the road', 'Complain'], correctIndex: 1 },
          { scenario: 'Tom said it was time to hit the road after the conference.', question: 'What is Tom saying?', options: ['Fix something', 'Ready to leave', 'Stay longer', 'Complain'], correctIndex: 1 },
          { scenario: 'Dad announced they should hit the road.', question: 'What does Dad want?', options: ['Start driving', 'Have meal', 'Cancel trip', 'Clean'], correctIndex: 0 }
        ],
        collocations: ['hit the road early', 'time to hit the road'],
        similarIdioms: ['get-going'],
        oppositeIdioms: ['settle-down']
      },
      {
        id: 'off-the-beaten-path',
        idiom: 'off the beaten path',
        meaning: 'Remote place tourists rarely visit',
        example: 'We found a restaurant off the beaten path.',
        turkishMeaning: 'tenha yer',
        clbLevel: 7,
        category: 'Travel & Adventure',
        whenToUse: 'Describe non-touristy locations.',
        contexts: [
          { scenario: 'Maria explored villages off the beaten path.', question: 'What places did Maria visit?', options: ['Tourist spots', 'Remote places', 'Famous sites', 'Malls'], correctIndex: 1 },
          { scenario: 'The guide recommended a trail off the beaten path.', question: 'What makes it special?', options: ['Crowded', 'Well-known', 'Remote and quiet', 'Expensive'], correctIndex: 2 },
          { scenario: 'John prefers hotels off the beaten path.', question: 'What does John prefer?', options: ['Resorts', 'Downtown hotels', 'Local accommodations', 'Chains'], correctIndex: 2 }
        ],
        collocations: ['travel off the beaten path'],
        similarIdioms: ['go-against-grain'],
        oppositeIdioms: ['follow-crowd']
      },
      {
        id: 'travel-light',
        idiom: 'travel light',
        meaning: 'Travel with minimal luggage',
        example: 'I always travel light on short trips.',
        turkishMeaning: 'az eşyayla seyahat',
        clbLevel: 6,
        category: 'Travel & Adventure',
        whenToUse: 'Describe traveling with little luggage.',
        contexts: [
          { scenario: 'Emma decided to travel light with only carry-on.', question: 'What did Emma do?', options: ['Many suitcases', 'Minimal luggage', 'Bought things', 'Shipped boxes'], correctIndex: 1 },
          { scenario: 'Jake lost luggage, so now travels light.', question: 'Why travel light?', options: ['Save money', 'Lost luggage before', 'Dislikes shopping', 'Required'], correctIndex: 1 },
          { scenario: 'Best to travel light on weekends.', question: 'Benefit of traveling light?', options: ['Spend more', 'Move easily', 'Bigger car', 'More professional'], correctIndex: 1 }
        ],
        collocations: ['prefer to travel light'],
        similarIdioms: ['keep-simple'],
        oppositeIdioms: ['pack-everything']
      },
      {
        id: 'catch-travel-bug',
        idiom: 'catch the travel bug',
        meaning: 'Develop strong desire to travel',
        example: 'After Japan, she caught the travel bug.',
        turkishMeaning: 'seyahat tutkunu olmak',
        clbLevel: 6,
        category: 'Travel & Adventure',
        whenToUse: 'Describe developing travel passion.',
        contexts: [
          { scenario: 'Mike caught the travel bug after first trip.', question: 'What happened?', options: ['Got sick', 'Developed passion', 'Stopped traveling', 'Became pilot'], correctIndex: 1 },
          { scenario: 'Students catch the travel bug abroad.', question: 'What does it mean?', options: ['Get illness', 'Interest in travel', 'Study insects', 'Fear flying'], correctIndex: 1 },
          { scenario: 'Lisa caught it from childhood trips.', question: 'How did she catch it?', options: ['Childhood travel', 'Watching TV', 'Reading books', 'Job requirement'], correctIndex: 0 }
        ],
        collocations: ['catch the travel bug early'],
        similarIdioms: ['bitten-by-bug'],
        oppositeIdioms: ['homebody']
      },
      {
        id: 'live-out-suitcase',
        idiom: 'live out of a suitcase',
        meaning: 'Travel frequently without settling',
        example: 'Consultants often live out of a suitcase.',
        turkishMeaning: 'bavulda yaşamak',
        clbLevel: 7,
        category: 'Travel & Adventure',
        whenToUse: 'Describe constant traveling.',
        contexts: [
          { scenario: 'Daniel lives out of a suitcase for months.', question: 'What about Daniel?', options: ['Never travels', 'Travels constantly', 'Lost home', 'Collects suitcases'], correctIndex: 1 },
          { scenario: 'She tired of living out of suitcase.', question: 'What is she tired of?', options: ['Constant travel', 'Her apartment', 'Suitcase brand', 'Meeting people'], correctIndex: 0 },
          { scenario: 'Nurses live out of suitcase.', question: 'What does it mean?', options: ['Homeless', 'Move for work', 'Sell suitcases', 'Avoid hospitals'], correctIndex: 1 }
        ],
        collocations: ['tired of living out of suitcase'],
        similarIdioms: ['on-move'],
        oppositeIdioms: ['put-down-roots']
      },
      {
        id: 'culture-shock',
        idiom: 'culture shock',
        meaning: 'Confusion from new culture',
        example: 'Moving to Tokyo caused culture shock.',
        turkishMeaning: 'kültür şoku',
        clbLevel: 6,
        category: 'Travel & Adventure',
        whenToUse: 'Describe cultural disorientation.',
        contexts: [
          { scenario: 'Maria experienced culture shock in NYC.', question: 'What did she experience?', options: ['Electric shock', 'Cultural confusion', 'Joy only', 'Homesickness'], correctIndex: 1 },
          { scenario: 'Students went through culture shock.', question: 'What does it mean?', options: ['Electric shock', 'Confused by culture', 'Failed classes', 'Returned home'], correctIndex: 1 },
          { scenario: 'Company provides orientation for culture shock.', question: 'Why provide orientation?', options: ['Teach language', 'Reduce confusion', 'Test employees', 'Select managers'], correctIndex: 1 }
        ],
        collocations: ['experience culture shock'],
        similarIdioms: ['fish-out-of-water'],
        oppositeIdioms: ['feel-at-home']
      },
      {
        id: 'get-away-from-all',
        idiom: 'get away from it all',
        meaning: 'Escape daily stress',
        example: 'We went to cabin to get away from it all.',
        turkishMeaning: 'her şeyden uzaklaşmak',
        clbLevel: 6,
        category: 'Travel & Adventure',
        whenToUse: 'Taking break from pressures.',
        contexts: [
          { scenario: 'Karen booked beach trip to get away.', question: 'Why take trip?', options: ['Business', 'Escape stress', 'Visit family', 'Find job'], correctIndex: 1 },
          { scenario: 'Couple chose retreat with no Wi-Fi.', question: 'What does it suggest?', options: ['Complete disconnection', 'Moving permanently', 'Starting business', 'Conference'], correctIndex: 0 },
          { scenario: 'Need to get away and clear mind.', question: 'What does it mean?', options: ['Quit job', 'Take break', 'Move country', 'Change career'], correctIndex: 1 }
        ],
        collocations: ['need to get away'],
        similarIdioms: ['take-break'],
        oppositeIdioms: ['stay-in-rat-race']
      },
      {
        id: 'road-trip',
        idiom: 'road trip',
        meaning: 'Long car journey for pleasure',
        example: 'We are planning a road trip across Canada.',
        turkishMeaning: 'araba yolculuğu',
        clbLevel: 5,
        category: 'Travel & Adventure',
        whenToUse: 'Describe car journey for fun.',
        contexts: [
          { scenario: 'Friends packed for road trip Vancouver to Calgary.', question: 'What are they doing?', options: ['Flying', 'Long car journey', 'Moving', 'Going to work'], correctIndex: 1 },
          { scenario: 'Road trips popular for scenic routes.', question: 'What makes them appealing?', options: ['Cheapest', 'Flexibility and scenery', 'Faster than flying', 'No planning'], correctIndex: 1 },
          { scenario: 'Best memories are family road trips.', question: 'What does speaker remember?', options: ['Airplane flights', 'Car journeys', 'Train rides', 'Cruises'], correctIndex: 1 }
        ],
        collocations: ['go on road trip'],
        similarIdioms: ['hit-road'],
        oppositeIdioms: ['stay-put']
      },
      {
        id: 'jet-lag',
        idiom: 'jet lag',
        meaning: 'Tiredness from time zones',
        example: 'I had terrible jet lag after Tokyo.',
        turkishMeaning: 'jet lag',
        clbLevel: 6,
        category: 'Travel & Adventure',
        whenToUse: 'Effects of time zone changes.',
        contexts: [
          { scenario: 'Emma struggled with jet lag in London.', question: 'What is Emma experiencing?', options: ['Illness', 'Time zone effects', 'Food poisoning', 'Homesickness'], correctIndex: 1 },
          { scenario: 'Adjust sleep to minimize jet lag.', question: 'What causes jet lag?', options: ['Long flights', 'Time zones', 'Airport food', 'Turbulence'], correctIndex: 1 },
          { scenario: 'He suffers jet lag traveling east.', question: 'When does he suffer?', options: ['All trips', 'Crossing zones east', 'Short flights', 'Domestic flights'], correctIndex: 1 }
        ],
        collocations: ['suffer from jet lag'],
        similarIdioms: ['time-zone-fatigue'],
        oppositeIdioms: ['well-rested']
      },
      {
        id: 'see-world',
        idiom: 'see the world',
        meaning: 'Travel to many places',
        example: 'She joined navy to see the world.',
        turkishMeaning: 'dünyayı görmek',
        clbLevel: 5,
        category: 'Travel & Adventure',
        whenToUse: 'Traveling extensively.',
        contexts: [
          { scenario: 'Mark took gap year to see world.', question: 'What did Mark want?', options: ['Study more', 'Travel extensively', 'Find job', 'Stay home'], correctIndex: 1 },
          { scenario: 'My dream is to see the world.', question: 'What is dream?', options: ['Watch shows', 'Travel many places', 'Study geography', 'Work from home'], correctIndex: 1 },
          { scenario: 'Flight attendant saw the world working.', question: 'What benefit?', options: ['High salary', 'Travel widely', 'Work from home', 'Short hours'], correctIndex: 1 }
        ],
        collocations: ['opportunity to see world'],
        similarIdioms: ['travel-globe'],
        oppositeIdioms: ['stay-home']
      }
    ]
  },
  {
    id: 'idioms-food-eating',
    title: 'Food & Eating',
    description: 'Idioms related to food and meals',
    clbLevel: 6,
    category: 'Food & Eating',
    icon: '🍽️',
    words: [
      {
        id: 'food-for-thought',
        idiom: 'food for thought',
        meaning: 'Something worth thinking about',
        example: 'The documentary gave us food for thought.',
        turkishMeaning: 'düşünmeye değer',
        clbLevel: 7,
        category: 'Food & Eating',
        whenToUse: 'Present idea deserving consideration.',
        contexts: [
          { scenario: 'Lecture on AI gave food for thought.', question: 'What did lecture provide?', options: ['Free lunch', 'Something to think', 'Simple answers', 'Entertainment'], correctIndex: 1 },
          { scenario: 'Comments were food for thought.', question: 'What does it mean?', options: ['Literal food', 'Ideas worth considering', 'Meal break', 'Recipes'], correctIndex: 1 },
          { scenario: 'Book provided food for thought.', question: 'What did book offer?', options: ['Recipes', 'Ideas to reflect', 'Entertainment', 'Quick solutions'], correctIndex: 1 }
        ],
        collocations: ['give food for thought'],
        similarIdioms: ['something-to-chew-on'],
        oppositeIdioms: ['mindless-entertainment']
      },
      {
        id: 'have-cake-eat-too',
        idiom: 'have your cake and eat it too',
        meaning: 'Want incompatible things',
        example: 'You can\'t have your cake and eat it too.',
        turkishMeaning: 'hem nalına hem mıhına',
        clbLevel: 7,
        category: 'Food & Eating',
        whenToUse: 'Someone wants conflicting choices.',
        contexts: [
          { scenario: 'Tom wants high pay, minimal hours.', question: 'What does it mean?', options: ['Buy cake', 'Wants incompatible things', 'Change careers', 'Being realistic'], correctIndex: 1 },
          { scenario: 'She wants spend all and save.', question: 'What is problem?', options: ['Dislikes cake', 'Wants conflicting things', 'Is wealthy', 'Being practical'], correctIndex: 1 },
          { scenario: 'Politician promised lower taxes, better services.', question: 'What voters recognize?', options: ['Realistic', 'Promises conflict', 'Will get both', 'Taxes increase'], correctIndex: 1 }
        ],
        collocations: ['can\'t have cake and eat too'],
        similarIdioms: ['want-it-all'],
        oppositeIdioms: ['make-choice']
      },
      {
        id: 'spill-beans',
        idiom: 'spill the beans',
        meaning: 'Reveal a secret',
        example: 'Don\'t spill the beans about the party!',
        turkishMeaning: 'sırrı açığa vurmak',
        clbLevel: 6,
        category: 'Food & Eating',
        whenToUse: 'Someone reveals secret information.',
        contexts: [
          { scenario: 'Lisa spilled beans about party.', question: 'What did Lisa do?', options: ['Made mess', 'Revealed secret', 'Planned party', 'Cooked dinner'], correctIndex: 1 },
          { scenario: 'Reporter wanted insider to spill beans.', question: 'What did reporter want?', options: ['Free food', 'Secret info', 'A job', 'Interview'], correctIndex: 1 },
          { scenario: 'He promised not to spill beans.', question: 'What did he promise?', options: ['Cook beans', 'Keep secret', 'Plan wedding', 'Tell everyone'], correctIndex: 1 }
        ],
        collocations: ['spill the beans about'],
        similarIdioms: ['let-cat-out-of-bag'],
        oppositeIdioms: ['keep-secret']
      },
      {
        id: 'piece-of-cake',
        idiom: 'piece of cake',
        meaning: 'Very easy to do',
        example: 'The exam was a piece of cake.',
        turkishMeaning: 'çok kolay',
        clbLevel: 5,
        category: 'Food & Eating',
        whenToUse: 'Describe simple task.',
        contexts: [
          { scenario: 'Fixing computer was piece of cake.', question: 'What does it mean?', options: ['Ate cake', 'Very easy', 'Impossible', 'Failed'], correctIndex: 1 },
          { scenario: 'Bike riding was piece of cake.', question: 'What happened?', options: ['Harder than expected', 'Easier than expected', 'Gave up', 'Got injured'], correctIndex: 1 },
          { scenario: 'Interview was piece of cake.', question: 'How did it go?', options: ['Very difficult', 'Very easy', 'Cancelled', 'Postponed'], correctIndex: 1 }
        ],
        collocations: ['was a piece of cake'],
        similarIdioms: ['easy-as-pie'],
        oppositeIdioms: ['uphill-battle']
      },
      {
        id: 'egg-on-face',
        idiom: 'egg on your face',
        meaning: 'Be embarrassed by mistake',
        example: 'He had egg on his face after wrong prediction.',
        turkishMeaning: 'rezil olmak',
        clbLevel: 7,
        category: 'Food & Eating',
        whenToUse: 'Publicly embarrassed.',
        contexts: [
          { scenario: 'Politician had egg on face.', question: 'What happened?', options: ['Was hungry', 'Was embarrassed', 'Was celebrated', 'Resigned'], correctIndex: 1 },
          { scenario: 'Maria had egg on face being wrong.', question: 'How did she feel?', options: ['Proud', 'Embarrassed', 'Happy', 'Indifferent'], correctIndex: 1 },
          { scenario: 'Company had egg on face.', question: 'What does it mean?', options: ['Made breakfast', 'Was humiliated', 'Succeeded', 'Was praised'], correctIndex: 1 }
        ],
        collocations: ['have egg on face'],
        similarIdioms: ['red-faced'],
        oppositeIdioms: ['save-face']
      },
      {
        id: 'in-nutshell',
        idiom: 'in a nutshell',
        meaning: 'Summarized briefly',
        example: 'In a nutshell, meeting was about budget.',
        turkishMeaning: 'kısaca',
        clbLevel: 6,
        category: 'Food & Eating',
        whenToUse: 'Give brief summary.',
        contexts: [
          { scenario: 'Report 50 pages, in nutshell recommended tech.', question: 'What does it mean?', options: ['In detail', 'Briefly summarized', 'Confusingly', 'Incompletely'], correctIndex: 1 },
          { scenario: 'In nutshell, physics studies atoms.', question: 'What is provided?', options: ['Complex explanation', 'Brief summary', 'Technical lecture', 'Scientific paper'], correctIndex: 1 },
          { scenario: 'In nutshell, expand and reduce costs.', question: 'What is speaker doing?', options: ['Explaining detail', 'Brief overview', 'Asking questions', 'Criticizing'], correctIndex: 1 }
        ],
        collocations: ['in a nutshell'],
        similarIdioms: ['long-story-short'],
        oppositeIdioms: ['elaborate-detail']
      },
      {
        id: 'bite-off-more',
        idiom: 'bite off more than you can chew',
        meaning: 'Take too much responsibility',
        example: 'I bit off more than I could chew.',
        turkishMeaning: 'gücünün üstünde iş',
        clbLevel: 7,
        category: 'Food & Eating',
        whenToUse: 'Taken on too much.',
        contexts: [
          { scenario: 'Jake agreed to organize, manage, study. Bit off more.', question: 'What is problem?', options: ['No responsibilities', 'Took too much', 'Is lazy', 'Quit everything'], correctIndex: 1 },
          { scenario: 'Three businesses meant bit off more.', question: 'What happened?', options: ['Succeeded easily', 'Took too much', 'Did nothing', 'Hired help'], correctIndex: 1 },
          { scenario: 'Don\'t bite off more — finish one project.', question: 'What is advice?', options: ['Eat slowly', 'Don\'t overcommit', 'Start many', 'Never risk'], correctIndex: 1 }
        ],
        collocations: ['bitten off more'],
        similarIdioms: ['overreach'],
        oppositeIdioms: ['know-limits']
      },
      {
        id: 'grain-of-salt',
        idiom: 'take with a grain of salt',
        meaning: 'View with skepticism',
        example: 'Take his story with grain of salt.',
        turkishMeaning: 'kuşkuyla karşılamak',
        clbLevel: 7,
        category: 'Food & Eating',
        whenToUse: 'Not believe completely.',
        contexts: [
          { scenario: 'Article questionable, took with grain of salt.', question: 'What did I do?', options: ['Believed completely', 'Viewed skeptically', 'Ignored entirely', 'Shared widely'], correctIndex: 1 },
          { scenario: 'He claims won every game, take with salt.', question: 'What is advice?', options: ['Believe fully', 'Be skeptical', 'Congratulate', 'Challenge'], correctIndex: 1 },
          { scenario: 'Reviews helpful, take with grain of salt.', question: 'What should you do?', options: ['Trust completely', 'Be skeptical', 'Ignore all', 'Only negative'], correctIndex: 1 }
        ],
        collocations: ['take with grain of salt'],
        similarIdioms: ['take-with-pinch'],
        oppositeIdioms: ['take-at-face-value']
      },
      {
        id: 'cry-spilled-milk',
        idiom: 'cry over spilled milk',
        meaning: 'Upset about unchangeable past',
        example: 'Don\'t cry over spilled milk.',
        turkishMeaning: 'olan olmuş',
        clbLevel: 6,
        category: 'Food & Eating',
        whenToUse: 'Not worry about past.',
        contexts: [
          { scenario: 'Failed test, friend said don\'t cry spilled milk.', question: 'What suggesting?', options: ['Give up', 'Stop worrying past', 'Never try', 'Buy milk'], correctIndex: 1 },
          { scenario: 'Deadline missed, no use crying.', question: 'What manager want?', options: ['Dwell on failure', 'Move forward', 'Punish team', 'Cancel projects'], correctIndex: 1 },
          { scenario: 'Regret not studying abroad, no use crying.', question: 'What acknowledging?', options: ['Can still go', 'Past cannot change', 'Right choice', 'Feel guilty'], correctIndex: 1 }
        ],
        collocations: ['don\'t cry over spilled milk'],
        similarIdioms: ['water-under-bridge'],
        oppositeIdioms: ['learn-from-mistakes']
      },
      {
        id: 'bread-and-butter',
        idiom: 'bread and butter',
        meaning: 'Main income source',
        example: 'Teaching is her bread and butter.',
        turkishMeaning: 'geçim kaynağı',
        clbLevel: 7,
        category: 'Food & Eating',
        whenToUse: 'Primary means of livelihood.',
        contexts: [
          { scenario: 'Restaurant\'s bread and butter is pizza.', question: 'What is important?', options: ['Desserts', 'Pizza sales', 'Drinks', 'Ambiance'], correctIndex: 1 },
          { scenario: 'For freelancers, steady clients bread and butter.', question: 'What does it mean?', options: ['Favorite food', 'Main income', 'Hobby', 'Advertising'], correctIndex: 1 },
          { scenario: 'Software his bread and butter.', question: 'What is main profession?', options: ['Photography', 'Software development', 'Teaching', 'Writing'], correctIndex: 1 }
        ],
        collocations: ['my bread and butter'],
        similarIdioms: ['livelihood'],
        oppositeIdioms: ['side-hustle']
      }
    ]
  }
];
