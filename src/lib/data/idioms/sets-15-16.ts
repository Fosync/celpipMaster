import type { IdiomSet } from './types';

export const idiomSets15to16: IdiomSet[] = [
  {
    id: 'idioms-animals',
    title: 'Animals',
    description: 'Animal-related idioms',
    clbLevel: 6,
    category: 'Animals',
    icon: '🐾',
    words: [
      {
        id: 'let-cat-out-bag',
        idiom: 'let the cat out of the bag',
        meaning: 'Accidentally reveal a secret',
        example: 'She let the cat out of the bag about the merger.',
        turkishMeaning: 'sırrı açığa vurmak',
        clbLevel: 6,
        category: 'Animals',
        whenToUse: 'Someone reveals secret unintentionally.',
        contexts: [
          { scenario: 'Tom let cat out of bag about proposal.', question: 'What did Tom do?', options: ['Found a cat', 'Revealed secret', 'Adopted pet', 'Went shopping'], correctIndex: 1 },
          { scenario: 'Don\'t let cat out of bag before announcement.', question: 'What does it mean?', options: ['Don\'t get pets', 'Don\'t reveal secret', 'Don\'t open bag', 'Don\'t delay'], correctIndex: 1 },
          { scenario: 'He accidentally let cat out.', question: 'What happened?', options: ['Pet escaped', 'Told secret', 'Went home', 'Bought cat'], correctIndex: 1 }
        ],
        collocations: ['let the cat out'],
        similarIdioms: ['spill-beans'],
        oppositeIdioms: ['keep-under-wraps']
      },
      {
        id: 'raining-cats-dogs',
        idiom: 'raining cats and dogs',
        meaning: 'Raining very heavily',
        example: 'It\'s raining cats and dogs outside.',
        turkishMeaning: 'bardaktan boşanırcasına yağmak',
        clbLevel: 5,
        category: 'Animals',
        whenToUse: 'Describe heavy rain.',
        contexts: [
          { scenario: 'It was raining cats and dogs during game.', question: 'What was weather?', options: ['Sunny', 'Light rain', 'Heavy rain', 'Snowing'], correctIndex: 2 },
          { scenario: 'Game cancelled, raining cats and dogs.', question: 'Why cancelled?', options: ['No players', 'Heavy rain', 'Too hot', 'Equipment broken'], correctIndex: 1 },
          { scenario: 'Bring umbrella, raining cats and dogs.', question: 'What does it mean?', options: ['Animals falling', 'Pouring rain', 'Light drizzle', 'Sunny'], correctIndex: 1 }
        ],
        collocations: ['it\'s raining cats and dogs'],
        similarIdioms: ['pouring-down'],
        oppositeIdioms: ['nice-weather']
      },
      {
        id: 'early-bird',
        idiom: 'early bird',
        meaning: 'Person who wakes up early',
        example: 'He\'s an early bird, always at gym by 6 AM.',
        turkishMeaning: 'erken kalkan kişi',
        clbLevel: 6,
        category: 'Animals',
        whenToUse: 'Describe someone who rises early.',
        contexts: [
          { scenario: 'Sarah is early bird, starts work at 7.', question: 'What about Sarah?', options: ['Sleeps late', 'Wakes early', 'Works night shift', 'Is lazy'], correctIndex: 1 },
          { scenario: 'Early bird gets best parking.', question: 'Who gets benefit?', options: ['Late arrivals', 'Early arrivals', 'Managers only', 'Nobody'], correctIndex: 1 },
          { scenario: 'I\'m not early bird on weekends.', question: 'What does speaker mean?', options: ['Wakes early weekends', 'Sleeps in weekends', 'Works weekends', 'Hates weekends'], correctIndex: 1 }
        ],
        collocations: ['early bird gets worm'],
        similarIdioms: ['morning-person'],
        oppositeIdioms: ['night-owl']
      },
      {
        id: 'night-owl',
        idiom: 'night owl',
        meaning: 'Person who stays up late',
        example: 'She\'s a night owl, works best after midnight.',
        turkishMeaning: 'gece kuşu',
        clbLevel: 6,
        category: 'Animals',
        whenToUse: 'Describe late sleeper.',
        contexts: [
          { scenario: 'Mike is night owl, sleeps until noon.', question: 'What about Mike?', options: ['Wakes early', 'Stays up late', 'Works morning', 'Sleeps early'], correctIndex: 1 },
          { scenario: 'Night owls prefer evening shifts.', question: 'What do they prefer?', options: ['Morning work', 'Evening work', 'Day off', 'Retirement'], correctIndex: 1 },
          { scenario: 'As night owl, I\'m creative at night.', question: 'When is speaker productive?', options: ['Morning', 'Afternoon', 'Night', 'Never'], correctIndex: 2 }
        ],
        collocations: ['I\'m a night owl'],
        similarIdioms: ['late-sleeper'],
        oppositeIdioms: ['early-bird']
      },
      {
        id: 'hold-your-horses',
        idiom: 'hold your horses',
        meaning: 'Wait, slow down',
        example: 'Hold your horses! Let me finish explaining.',
        turkishMeaning: 'bir dakika, sakin ol',
        clbLevel: 6,
        category: 'Animals',
        whenToUse: 'Tell someone to wait.',
        contexts: [
          { scenario: 'Hold your horses, I need details first.', question: 'What is being said?', options: ['Go faster', 'Wait a moment', 'Leave now', 'Buy horses'], correctIndex: 1 },
          { scenario: 'Before deciding, hold your horses.', question: 'What is advice?', options: ['Decide quickly', 'Take time', 'Give up', 'Ask others'], correctIndex: 1 },
          { scenario: 'Hold your horses, not ready yet.', question: 'What does it mean?', options: ['Speed up', 'Slow down', 'Keep going', 'Turn back'], correctIndex: 1 }
        ],
        collocations: ['hold your horses'],
        similarIdioms: ['wait-minute'],
        oppositeIdioms: ['hurry-up']
      },
      {
        id: 'wild-goose-chase',
        idiom: 'wild goose chase',
        meaning: 'Hopeless search, waste of time',
        example: 'Looking for apartment in that area was wild goose chase.',
        turkishMeaning: 'boşa kürek çekmek',
        clbLevel: 7,
        category: 'Animals',
        whenToUse: 'Describe futile pursuit.',
        contexts: [
          { scenario: 'Search for document was wild goose chase.', question: 'What does it mean?', options: ['Found quickly', 'Waste of time', 'Very important', 'Easy task'], correctIndex: 1 },
          { scenario: 'Following those directions wild goose chase.', question: 'What happened?', options: ['Found location', 'Got lost, wasted time', 'Arrived early', 'Met someone'], correctIndex: 1 },
          { scenario: 'Don\'t send me on wild goose chase.', question: 'What is being said?', options: ['Send me hunting', 'Don\'t waste my time', 'Give me work', 'Let me rest'], correctIndex: 1 }
        ],
        collocations: ['wild goose chase'],
        similarIdioms: ['waste-of-time'],
        oppositeIdioms: ['productive-effort']
      },
      {
        id: 'cash-cow',
        idiom: 'cash cow',
        meaning: 'Profitable business or product',
        example: 'Their mobile app is real cash cow.',
        turkishMeaning: 'para babası, karlı iş',
        clbLevel: 7,
        category: 'Animals',
        whenToUse: 'Describe profitable venture.',
        contexts: [
          { scenario: 'That product line is cash cow.', question: 'What does it mean?', options: ['Losing money', 'Very profitable', 'About farming', 'Needs investment'], correctIndex: 1 },
          { scenario: 'Coffee shop became cash cow.', question: 'What happened?', options: ['Closed down', 'Makes good profit', 'Lost customers', 'Changed location'], correctIndex: 1 },
          { scenario: 'Looking for next cash cow.', question: 'What are they seeking?', options: ['Farm animals', 'Profitable product', 'New employees', 'Investors'], correctIndex: 1 }
        ],
        collocations: ['real cash cow'],
        similarIdioms: ['money-maker'],
        oppositeIdioms: ['money-pit']
      },
      {
        id: 'dark-horse',
        idiom: 'dark horse',
        meaning: 'Unexpected winner or competitor',
        example: 'She was dark horse in competition.',
        turkishMeaning: 'beklenmedik aday',
        clbLevel: 7,
        category: 'Animals',
        whenToUse: 'Describe unexpected competitor.',
        contexts: [
          { scenario: 'New candidate is dark horse.', question: 'What does it mean?', options: ['Expected winner', 'Unexpected contender', 'Has black horse', 'Will lose'], correctIndex: 1 },
          { scenario: 'Dark horse won election.', question: 'What happened?', options: ['Favorite won', 'Unexpected person won', 'Nobody won', 'Election cancelled'], correctIndex: 1 },
          { scenario: 'Watch out for dark horse.', question: 'What is advice?', options: ['Ignore underdog', 'Watch unexpected competitor', 'Bet on favorite', 'Quit race'], correctIndex: 1 }
        ],
        collocations: ['dark horse candidate'],
        similarIdioms: ['underdog'],
        oppositeIdioms: ['clear-favorite']
      },
      {
        id: 'fish-out-water',
        idiom: 'fish out of water',
        meaning: 'Uncomfortable in unfamiliar situation',
        example: 'At tech conference, I felt like fish out of water.',
        turkishMeaning: 'suyun dışına çıkmış balık',
        clbLevel: 6,
        category: 'Animals',
        whenToUse: 'Feel uncomfortable or out of place.',
        contexts: [
          { scenario: 'New school, felt like fish out of water.', question: 'How did they feel?', options: ['Comfortable', 'Out of place', 'Happy', 'Confident'], correctIndex: 1 },
          { scenario: 'At formal dinner, fish out of water.', question: 'What does it mean?', options: ['Enjoyed dinner', 'Felt uncomfortable', 'Left early', 'Was hungry'], correctIndex: 1 },
          { scenario: 'In big city, he was fish out of water.', question: 'What is being described?', options: ['He was lost', 'Felt unfamiliar', 'Was happy', 'Found home'], correctIndex: 1 }
        ],
        collocations: ['feel like fish out of water'],
        similarIdioms: ['out-of-element'],
        oppositeIdioms: ['in-your-element']
      },
      {
        id: 'elephant-in-room',
        idiom: 'elephant in the room',
        meaning: 'Obvious problem nobody mentions',
        example: 'Budget cuts are elephant in room.',
        turkishMeaning: 'herkesin bildiği ama konuşmadığı sorun',
        clbLevel: 7,
        category: 'Animals',
        whenToUse: 'Obvious issue being avoided.',
        contexts: [
          { scenario: 'Layoffs are elephant in room.', question: 'What does it mean?', options: ['There\'s an elephant', 'Obvious problem ignored', 'Everything fine', 'New policy'], correctIndex: 1 },
          { scenario: 'Let\'s address elephant in room.', question: 'What is being suggested?', options: ['Avoid topic', 'Discuss obvious issue', 'Change subject', 'Leave meeting'], correctIndex: 1 },
          { scenario: 'Elephant in room is funding.', question: 'What is it?', options: ['Secret problem', 'Obvious problem', 'Good news', 'Minor issue'], correctIndex: 1 }
        ],
        collocations: ['elephant in the room'],
        similarIdioms: ['unspoken-issue'],
        oppositeIdioms: ['openly-discussed']
      }
    ]
  },
  {
    id: 'idioms-sports-competition',
    title: 'Sports & Competition',
    description: 'Idioms from sports and competition',
    clbLevel: 6,
    category: 'Sports & Competition',
    icon: '⚽',
    words: [
      {
        id: 'level-playing-field',
        idiom: 'level playing field',
        meaning: 'Fair and equal conditions for all',
        example: 'New policy creates level playing field.',
        turkishMeaning: 'eşit koşullar',
        clbLevel: 7,
        category: 'Sports & Competition',
        whenToUse: 'Describe fair competition.',
        contexts: [
          { scenario: 'Rules ensure level playing field.', question: 'What do rules do?', options: ['Favor some', 'Make it fair', 'Complicate things', 'Are unclear'], correctIndex: 1 },
          { scenario: 'We need level playing field.', question: 'What is needed?', options: ['Flat ground', 'Equal conditions', 'More rules', 'Winners'], correctIndex: 1 },
          { scenario: 'Small businesses want level playing field.', question: 'What do they want?', options: ['Advantages', 'Fair competition', 'Less competition', 'Government help'], correctIndex: 1 }
        ],
        collocations: ['create level playing field'],
        similarIdioms: ['fair-shake'],
        oppositeIdioms: ['unfair-advantage']
      },
      {
        id: 'move-goalposts',
        idiom: 'move the goalposts',
        meaning: 'Change rules unfairly during process',
        example: 'They keep moving goalposts on project.',
        turkishMeaning: 'kuralları değiştirmek',
        clbLevel: 7,
        category: 'Sports & Competition',
        whenToUse: 'Rules changed unfairly.',
        contexts: [
          { scenario: 'Boss moved goalposts again.', question: 'What did boss do?', options: ['Praised team', 'Changed requirements', 'Gave bonus', 'Retired'], correctIndex: 1 },
          { scenario: 'Stop moving goalposts.', question: 'What is complaint?', options: ['Keep changing rules', 'Too easy', 'No goals', 'Fair treatment'], correctIndex: 0 },
          { scenario: 'Government moved goalposts.', question: 'What happened?', options: ['Kept promise', 'Changed rules', 'Resigned', 'Succeeded'], correctIndex: 1 }
        ],
        collocations: ['keep moving goalposts'],
        similarIdioms: ['change-rules-midgame'],
        oppositeIdioms: ['stick-to-agreement']
      },
      {
        id: 'throw-in-towel',
        idiom: 'throw in the towel',
        meaning: 'Give up, admit defeat',
        example: 'After tenth rejection, he threw in towel.',
        turkishMeaning: 'pes etmek',
        clbLevel: 6,
        category: 'Sports & Competition',
        whenToUse: 'Someone gives up.',
        contexts: [
          { scenario: 'She threw in towel after failed attempts.', question: 'What did she do?', options: ['Kept trying', 'Gave up', 'Won', 'Started over'], correctIndex: 1 },
          { scenario: 'Don\'t throw in towel yet.', question: 'What is advice?', options: ['Give up', 'Don\'t quit', 'Rest', 'Change plans'], correctIndex: 1 },
          { scenario: 'Too soon to throw in towel.', question: 'What does it mean?', options: ['Time to quit', 'Too early to give up', 'Take break', 'Celebrate'], correctIndex: 1 }
        ],
        collocations: ['throw in the towel'],
        similarIdioms: ['give-up'],
        oppositeIdioms: ['keep-fighting']
      },
      {
        id: 'ballpark-figure',
        idiom: 'ballpark figure',
        meaning: 'Rough estimate',
        example: 'Can you give me ballpark figure for cost?',
        turkishMeaning: 'kabaca tahmin',
        clbLevel: 6,
        category: 'Sports & Competition',
        whenToUse: 'Approximate number.',
        contexts: [
          { scenario: 'What\'s ballpark figure for repairs?', question: 'What is being asked?', options: ['Exact cost', 'Rough estimate', 'Payment method', 'Warranty'], correctIndex: 1 },
          { scenario: 'Ballpark figure is $10,000.', question: 'What does it mean?', options: ['Exactly $10,000', 'Around $10,000', 'Less than $10,000', 'More than $10,000'], correctIndex: 1 },
          { scenario: 'Give me ballpark for timeline.', question: 'What is wanted?', options: ['Exact date', 'Rough timeframe', 'Detailed plan', 'Contract'], correctIndex: 1 }
        ],
        collocations: ['ballpark figure'],
        similarIdioms: ['rough-estimate'],
        oppositeIdioms: ['exact-number']
      },
      {
        id: 'drop-the-ball',
        idiom: 'drop the ball',
        meaning: 'Make mistake, fail responsibility',
        example: 'Someone dropped ball on scheduling.',
        turkishMeaning: 'hata yapmak, sorumlulukta başarısız',
        clbLevel: 6,
        category: 'Sports & Competition',
        whenToUse: 'Someone failed task.',
        contexts: [
          { scenario: 'He dropped ball on report.', question: 'What happened?', options: ['Completed perfectly', 'Made mistake', 'Worked hard', 'Got promotion'], correctIndex: 1 },
          { scenario: 'Don\'t drop ball this time.', question: 'What is warning?', options: ['Catch ball', 'Don\'t fail', 'Play sports', 'Relax'], correctIndex: 1 },
          { scenario: 'Team dropped ball on deadline.', question: 'What occurred?', options: ['Met deadline', 'Missed deadline', 'Extended deadline', 'Celebrated'], correctIndex: 1 }
        ],
        collocations: ['drop the ball on'],
        similarIdioms: ['mess-up'],
        oppositeIdioms: ['nail-it']
      },
      {
        id: 'get-ball-rolling',
        idiom: 'get the ball rolling',
        meaning: 'Start something, initiate',
        example: 'Let\'s get ball rolling on project.',
        turkishMeaning: 'işe başlamak',
        clbLevel: 6,
        category: 'Sports & Competition',
        whenToUse: 'Begin activity.',
        contexts: [
          { scenario: 'Time to get ball rolling.', question: 'What does it mean?', options: ['Stop work', 'Start work', 'Take break', 'Finish up'], correctIndex: 1 },
          { scenario: 'She got ball rolling on initiative.', question: 'What did she do?', options: ['Ended it', 'Started it', 'Delayed it', 'Opposed it'], correctIndex: 1 },
          { scenario: 'To get ball rolling, we need plan.', question: 'What is needed?', options: ['To finish', 'To begin', 'To pause', 'To cancel'], correctIndex: 1 }
        ],
        collocations: ['get the ball rolling'],
        similarIdioms: ['kick-off'],
        oppositeIdioms: ['bring-to-halt']
      },
      {
        id: 'Par-for-course',
        idiom: 'par for the course',
        meaning: 'Normal, what you would expect',
        example: 'Traffic delays are par for course here.',
        turkishMeaning: 'normal, beklenen',
        clbLevel: 7,
        category: 'Sports & Competition',
        whenToUse: 'Something typical.',
        contexts: [
          { scenario: 'Complaints are par for course.', question: 'What does it mean?', options: ['Unexpected', 'Normal and expected', 'Unacceptable', 'Rare'], correctIndex: 1 },
          { scenario: 'That\'s par for course in retail.', question: 'What is being said?', options: ['Very unusual', 'Typical situation', 'Problem', 'Success'], correctIndex: 1 },
          { scenario: 'Overtime is par for course.', question: 'How is overtime viewed?', options: ['Rare', 'Normal', 'Unfair', 'Illegal'], correctIndex: 1 }
        ],
        collocations: ['par for the course'],
        similarIdioms: ['business-as-usual'],
        oppositeIdioms: ['exceptional']
      },
      {
        id: 'race-against-time',
        idiom: 'race against time',
        meaning: 'Urgent situation with deadline',
        example: 'Finishing report is race against time.',
        turkishMeaning: 'zamanla yarış',
        clbLevel: 6,
        category: 'Sports & Competition',
        whenToUse: 'Time pressure.',
        contexts: [
          { scenario: 'Surgery was race against time.', question: 'What does it mean?', options: ['Plenty of time', 'Very urgent', 'Not important', 'Was cancelled'], correctIndex: 1 },
          { scenario: 'Project became race against time.', question: 'What happened?', options: ['Extended deadline', 'Time pressure increased', 'Was cancelled', 'Completed early'], correctIndex: 1 },
          { scenario: 'It\'s race against time now.', question: 'What is situation?', options: ['Relaxed', 'Very urgent', 'Postponed', 'Not started'], correctIndex: 1 }
        ],
        collocations: ['race against time'],
        similarIdioms: ['time-crunch'],
        oppositeIdioms: ['plenty-of-time']
      },
      {
        id: 'play-hardball',
        idiom: 'play hardball',
        meaning: 'Be aggressive in negotiations',
        example: 'Union decided to play hardball.',
        turkishMeaning: 'sert olmak',
        clbLevel: 7,
        category: 'Sports & Competition',
        whenToUse: 'Tough negotiation tactics.',
        contexts: [
          { scenario: 'Company is playing hardball.', question: 'What are they doing?', options: ['Being flexible', 'Being aggressive', 'Giving up', 'Being friendly'], correctIndex: 1 },
          { scenario: 'Time to play hardball.', question: 'What is suggested?', options: ['Be soft', 'Be tough', 'Quit', 'Compromise'], correctIndex: 1 },
          { scenario: 'Lawyer played hardball in negotiations.', question: 'How did lawyer act?', options: ['Gently', 'Aggressively', 'Passively', 'Friendly'], correctIndex: 1 }
        ],
        collocations: ['play hardball with'],
        similarIdioms: ['take-hard-line'],
        oppositeIdioms: ['be-flexible']
      },
      {
        id: 'score-own-goal',
        idiom: 'score an own goal',
        meaning: 'Do something that harms yourself',
        example: 'By lying, he scored own goal.',
        turkishMeaning: 'kendi ayağına sıkmak',
        clbLevel: 7,
        category: 'Sports & Competition',
        whenToUse: 'Self-defeating action.',
        contexts: [
          { scenario: 'That statement was own goal.', question: 'What does it mean?', options: ['Helped him', 'Hurt himself', 'Was brilliant', 'Was ignored'], correctIndex: 1 },
          { scenario: 'Company scored own goal.', question: 'What happened?', options: ['Succeeded', 'Harmed themselves', 'Won award', 'Made profit'], correctIndex: 1 },
          { scenario: 'Criticism was own goal.', question: 'What was result?', options: ['Helped them', 'Backfired', 'Was praised', 'Was forgotten'], correctIndex: 1 }
        ],
        collocations: ['score an own goal'],
        similarIdioms: ['shoot-yourself-in-foot'],
        oppositeIdioms: ['help-yourself']
      }
    ]
  }
];
