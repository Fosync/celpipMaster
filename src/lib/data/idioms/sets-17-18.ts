import type { IdiomSet } from './types';

export const idiomSets17to18: IdiomSet[] = [
  {
    id: 'idioms-feelings-mood',
    title: 'Feelings & Mood',
    description: 'Idioms about emotions and feelings',
    clbLevel: 6,
    category: 'Feelings & Mood',
    icon: '😊',
    words: [
      {
        id: 'on-cloud-nine',
        idiom: 'on cloud nine',
        meaning: 'Extremely happy',
        example: 'She was on cloud nine after getting job.',
        turkishMeaning: 'çok mutlu',
        clbLevel: 6,
        category: 'Feelings & Mood',
        whenToUse: 'Describe great happiness.',
        contexts: [
          { scenario: 'He was on cloud nine winning lottery.', question: 'How did he feel?', options: ['Sad', 'Extremely happy', 'Angry', 'Worried'], correctIndex: 1 },
          { scenario: 'Getting engaged put her on cloud nine.', question: 'What was her mood?', options: ['Disappointed', 'Very happy', 'Nervous', 'Confused'], correctIndex: 1 },
          { scenario: 'Team on cloud nine after victory.', question: 'Team\'s emotion?', options: ['Defeated', 'Ecstatic', 'Tired', 'Indifferent'], correctIndex: 1 }
        ],
        collocations: ['on cloud nine'],
        similarIdioms: ['over-the-moon'],
        oppositeIdioms: ['down-in-dumps']
      },
      {
        id: 'down-in-dumps',
        idiom: 'down in the dumps',
        meaning: 'Feeling sad or depressed',
        example: 'She\'s been down in dumps since breakup.',
        turkishMeaning: 'morali bozuk',
        clbLevel: 6,
        category: 'Feelings & Mood',
        whenToUse: 'Someone feeling sad.',
        contexts: [
          { scenario: 'John down in dumps after losing job.', question: 'How does John feel?', options: ['Happy', 'Very sad', 'Excited', 'Proud'], correctIndex: 1 },
          { scenario: 'She was down in dumps all week.', question: 'Her mood was?', options: ['Cheerful', 'Depressed', 'Energetic', 'Normal'], correctIndex: 1 },
          { scenario: 'Try to cheer him up, he\'s down in dumps.', question: 'What is his state?', options: ['Happy', 'Sad', 'Angry', 'Busy'], correctIndex: 1 }
        ],
        collocations: ['down in the dumps'],
        similarIdioms: ['feeling-blue'],
        oppositeIdioms: ['on-cloud-nine']
      },
      {
        id: 'mixed-feelings',
        idiom: 'mixed feelings',
        meaning: 'Conflicting emotions about something',
        example: 'I have mixed feelings about moving abroad.',
        turkishMeaning: 'karışık duygular',
        clbLevel: 6,
        category: 'Feelings & Mood',
        whenToUse: 'Uncertain emotions.',
        contexts: [
          { scenario: 'She has mixed feelings about promotion.', question: 'How does she feel?', options: ['Purely happy', 'Both happy and worried', 'Only sad', 'Indifferent'], correctIndex: 1 },
          { scenario: 'Mixed feelings about retirement.', question: 'What does it mean?', options: ['Clear opinion', 'Conflicting emotions', 'No opinion', 'Very happy'], correctIndex: 1 },
          { scenario: 'I have mixed feelings leaving.', question: 'Speaker feels?', options: ['Certain', 'Both good and bad', 'Excited only', 'Sad only'], correctIndex: 1 }
        ],
        collocations: ['have mixed feelings'],
        similarIdioms: ['torn-between'],
        oppositeIdioms: ['certain-feelings']
      },
      {
        id: 'over-moon',
        idiom: 'over the moon',
        meaning: 'Extremely pleased and happy',
        example: 'Parents were over moon about grandchild.',
        turkishMeaning: 'çok sevinçli',
        clbLevel: 6,
        category: 'Feelings & Mood',
        whenToUse: 'Great joy.',
        contexts: [
          { scenario: 'She was over moon getting scholarship.', question: 'Her feeling?', options: ['Disappointed', 'Thrilled', 'Angry', 'Scared'], correctIndex: 1 },
          { scenario: 'Kids over moon about trip.', question: 'How do kids feel?', options: ['Sad', 'Very excited', 'Bored', 'Tired'], correctIndex: 1 },
          { scenario: 'He\'s over moon with results.', question: 'His emotion?', options: ['Upset', 'Extremely happy', 'Worried', 'Neutral'], correctIndex: 1 }
        ],
        collocations: ['over the moon about'],
        similarIdioms: ['on-cloud-nine'],
        oppositeIdioms: ['devastated']
      },
      {
        id: 'walking-on-air',
        idiom: 'walking on air',
        meaning: 'Feeling extremely happy',
        example: 'After proposal, she was walking on air.',
        turkishMeaning: 'uçuyor gibi mutlu',
        clbLevel: 6,
        category: 'Feelings & Mood',
        whenToUse: 'Great happiness.',
        contexts: [
          { scenario: 'He was walking on air after promotion.', question: 'How did he feel?', options: ['Sad', 'Ecstatic', 'Nervous', 'Tired'], correctIndex: 1 },
          { scenario: 'New parents walking on air.', question: 'Their mood?', options: ['Stressed', 'Blissfully happy', 'Angry', 'Worried'], correctIndex: 1 },
          { scenario: 'Winning made her walk on air.', question: 'Her feeling?', options: ['Defeated', 'Extremely joyful', 'Confused', 'Scared'], correctIndex: 1 }
        ],
        collocations: ['walking on air'],
        similarIdioms: ['on-top-of-world'],
        oppositeIdioms: ['heartbroken']
      },
      {
        id: 'bundle-of-nerves',
        idiom: 'bundle of nerves',
        meaning: 'Very nervous or anxious',
        example: 'He was bundle of nerves before interview.',
        turkishMeaning: 'çok gergin',
        clbLevel: 6,
        category: 'Feelings & Mood',
        whenToUse: 'Extreme nervousness.',
        contexts: [
          { scenario: 'She\'s bundle of nerves before exam.', question: 'How is she?', options: ['Calm', 'Very anxious', 'Happy', 'Bored'], correctIndex: 1 },
          { scenario: 'Bride was bundle of nerves.', question: 'Bride\'s state?', options: ['Relaxed', 'Extremely nervous', 'Angry', 'Indifferent'], correctIndex: 1 },
          { scenario: 'He becomes bundle of nerves flying.', question: 'His feeling flying?', options: ['Calm', 'Very anxious', 'Excited', 'Sleepy'], correctIndex: 1 }
        ],
        collocations: ['bundle of nerves'],
        similarIdioms: ['nervous-wreck'],
        oppositeIdioms: ['calm-and-collected']
      },
      {
        id: 'feeling-under-weather',
        idiom: 'feeling under the weather',
        meaning: 'Feeling slightly ill',
        example: 'I\'m feeling under weather today.',
        turkishMeaning: 'keyifsiz, hafif hasta',
        clbLevel: 5,
        category: 'Feelings & Mood',
        whenToUse: 'Mild sickness.',
        contexts: [
          { scenario: 'She\'s under weather, staying home.', question: 'Why staying home?', options: ['Vacation', 'Feeling sick', 'Working', 'Celebrating'], correctIndex: 1 },
          { scenario: 'Bit under weather but will attend.', question: 'Speaker\'s condition?', options: ['Perfect health', 'Slightly ill', 'Very sick', 'Energetic'], correctIndex: 1 },
          { scenario: 'He looks under weather.', question: 'How does he look?', options: ['Great', 'Unwell', 'Happy', 'Strong'], correctIndex: 1 }
        ],
        collocations: ['feeling under the weather'],
        similarIdioms: ['not-feeling-well'],
        oppositeIdioms: ['fit-as-fiddle']
      },
      {
        id: 'heartbroken',
        idiom: 'heartbroken',
        meaning: 'Extremely sad, devastated',
        example: 'She was heartbroken when dog died.',
        turkishMeaning: 'kalbi kırık, çok üzgün',
        clbLevel: 5,
        category: 'Feelings & Mood',
        whenToUse: 'Deep sadness.',
        contexts: [
          { scenario: 'He was heartbroken by news.', question: 'How did he feel?', options: ['Happy', 'Devastated', 'Angry', 'Indifferent'], correctIndex: 1 },
          { scenario: 'Parents heartbroken about move.', question: 'Parents\' emotion?', options: ['Excited', 'Very sad', 'Neutral', 'Pleased'], correctIndex: 1 },
          { scenario: 'Team heartbroken losing final.', question: 'Team feels?', options: ['Victorious', 'Extremely disappointed', 'Proud', 'Motivated'], correctIndex: 1 }
        ],
        collocations: ['absolutely heartbroken'],
        similarIdioms: ['devastated'],
        oppositeIdioms: ['overjoyed']
      },
      {
        id: 'beside-yourself',
        idiom: 'beside yourself',
        meaning: 'Overwhelmed by emotion',
        example: 'She was beside herself with worry.',
        turkishMeaning: 'kendinden geçmek',
        clbLevel: 7,
        category: 'Feelings & Mood',
        whenToUse: 'Extreme emotion.',
        contexts: [
          { scenario: 'He was beside himself with joy.', question: 'His state?', options: ['Calm', 'Overwhelmed with happiness', 'Sad', 'Angry'], correctIndex: 1 },
          { scenario: 'Mother beside herself with worry.', question: 'Mother\'s condition?', options: ['Relaxed', 'Extremely worried', 'Happy', 'Sleeping'], correctIndex: 1 },
          { scenario: 'She\'s beside herself with anger.', question: 'Her feeling?', options: ['Calm', 'Furious', 'Happy', 'Tired'], correctIndex: 1 }
        ],
        collocations: ['beside yourself with'],
        similarIdioms: ['overwhelmed'],
        oppositeIdioms: ['composed']
      },
      {
        id: 'on-edge',
        idiom: 'on edge',
        meaning: 'Nervous, tense, irritable',
        example: 'Everyone on edge before announcement.',
        turkishMeaning: 'gergin, sinirli',
        clbLevel: 6,
        category: 'Feelings & Mood',
        whenToUse: 'Tense state.',
        contexts: [
          { scenario: 'He\'s on edge waiting for results.', question: 'His state?', options: ['Relaxed', 'Very tense', 'Happy', 'Sleeping'], correctIndex: 1 },
          { scenario: 'Staff on edge before layoffs.', question: 'Staff mood?', options: ['Calm', 'Nervous', 'Excited', 'Indifferent'], correctIndex: 1 },
          { scenario: 'She\'s been on edge all day.', question: 'Her feeling?', options: ['Relaxed', 'Anxious', 'Joyful', 'Energetic'], correctIndex: 1 }
        ],
        collocations: ['on edge about'],
        similarIdioms: ['on-tenterhooks'],
        oppositeIdioms: ['at-ease']
      }
    ]
  },
  {
    id: 'idioms-friendship',
    title: 'Friendship',
    description: 'Idioms about friends and relationships',
    clbLevel: 6,
    category: 'Friendship',
    icon: '🤝',
    words: [
      {
        id: 'thick-and-thin',
        idiom: 'through thick and thin',
        meaning: 'In good and bad times',
        example: 'Friends through thick and thin.',
        turkishMeaning: 'iyi günde kötü günde',
        clbLevel: 6,
        category: 'Friendship',
        whenToUse: 'Loyal friendship.',
        contexts: [
          { scenario: 'Been together through thick and thin.', question: 'What does it mean?', options: ['Only good times', 'All situations', 'Recently met', 'Fair weather'], correctIndex: 1 },
          { scenario: 'True friends stick through thick and thin.', question: 'True friends?', options: ['Leave when hard', 'Stay in all times', 'Only fun times', 'Are rare'], correctIndex: 1 },
          { scenario: 'Supported through thick and thin.', question: 'Type of support?', options: ['Occasional', 'Constant in all times', 'Never', 'Financial only'], correctIndex: 1 }
        ],
        collocations: ['through thick and thin'],
        similarIdioms: ['for-better-or-worse'],
        oppositeIdioms: ['fair-weather-friend']
      },
      {
        id: 'birds-of-feather',
        idiom: 'birds of a feather',
        meaning: 'People with similar interests',
        example: 'Birds of feather flock together.',
        turkishMeaning: 'aynı tüyden kuşlar',
        clbLevel: 6,
        category: 'Friendship',
        whenToUse: 'Similar people group.',
        contexts: [
          { scenario: 'They\'re birds of feather, both artists.', question: 'What about them?', options: ['Very different', 'Very similar', 'Strangers', 'Enemies'], correctIndex: 1 },
          { scenario: 'Birds of feather flock together.', question: 'Meaning?', options: ['Opposites attract', 'Similar people unite', 'Everyone different', 'People avoid similar'], correctIndex: 1 },
          { scenario: 'As birds of feather, they bonded.', question: 'Why bonded?', options: ['Were different', 'Had similarities', 'Were forced', 'Disliked each other'], correctIndex: 1 }
        ],
        collocations: ['birds of a feather'],
        similarIdioms: ['kindred-spirits'],
        oppositeIdioms: ['opposites']
      },
      {
        id: 'hit-it-off',
        idiom: 'hit it off',
        meaning: 'Become friends quickly',
        example: 'We hit it off immediately.',
        turkishMeaning: 'hemen anlaşmak',
        clbLevel: 6,
        category: 'Friendship',
        whenToUse: 'Instant connection.',
        contexts: [
          { scenario: 'They hit it off at party.', question: 'What happened?', options: ['Argued', 'Became friends quickly', 'Ignored each other', 'Left early'], correctIndex: 1 },
          { scenario: 'New colleagues hit it off.', question: 'Colleagues?', options: ['Dislike each other', 'Connected well', 'Never met', 'Are fighting'], correctIndex: 1 },
          { scenario: 'Hoping we hit it off.', question: 'What is hoped?', options: ['Will argue', 'Will connect', 'Will leave', 'Will compete'], correctIndex: 1 }
        ],
        collocations: ['hit it off with'],
        similarIdioms: ['click-with'],
        oppositeIdioms: ['clash-with']
      },
      {
        id: 'get-along',
        idiom: 'get along',
        meaning: 'Have good relationship',
        example: 'They get along very well.',
        turkishMeaning: 'iyi geçinmek',
        clbLevel: 5,
        category: 'Friendship',
        whenToUse: 'Positive relationship.',
        contexts: [
          { scenario: 'Roommates get along great.', question: 'Roommates?', options: ['Fight often', 'Have good relationship', 'Never talk', 'Are leaving'], correctIndex: 1 },
          { scenario: 'Do you get along with boss?', question: 'Question about?', options: ['Work hours', 'Relationship quality', 'Salary', 'Tasks'], correctIndex: 1 },
          { scenario: 'Hard to get along with him.', question: 'What is difficult?', options: ['Understanding him', 'Having good relationship', 'Finding him', 'Working fast'], correctIndex: 1 }
        ],
        collocations: ['get along with'],
        similarIdioms: ['see-eye-to-eye'],
        oppositeIdioms: ['not-get-on']
      },
      {
        id: 'fair-weather-friend',
        idiom: 'fair weather friend',
        meaning: 'Friend only in good times',
        example: 'He\'s fair weather friend, never there when needed.',
        turkishMeaning: 'çıkarcı dost',
        clbLevel: 7,
        category: 'Friendship',
        whenToUse: 'Unreliable friend.',
        contexts: [
          { scenario: 'She\'s fair weather friend, disappeared when sick.', question: 'Type of friend?', options: ['Very loyal', 'Only there in good times', 'Always supportive', 'True friend'], correctIndex: 1 },
          { scenario: 'Fair weather friends leave when trouble.', question: 'When do they leave?', options: ['Never', 'In difficult times', 'Always', 'In good times'], correctIndex: 1 },
          { scenario: 'Don\'t want fair weather friends.', question: 'What doesn\'t speaker want?', options: ['Loyal friends', 'Unreliable friends', 'New friends', 'Old friends'], correctIndex: 1 }
        ],
        collocations: ['fair weather friend'],
        similarIdioms: ['unreliable-friend'],
        oppositeIdioms: ['true-friend']
      },
      {
        id: 'shoulder-to-cry-on',
        idiom: 'shoulder to cry on',
        meaning: 'Someone who offers support',
        example: 'She needs shoulder to cry on.',
        turkishMeaning: 'sığınılacak omuz',
        clbLevel: 6,
        category: 'Friendship',
        whenToUse: 'Emotional support.',
        contexts: [
          { scenario: 'He provided shoulder to cry on.', question: 'What did he offer?', options: ['Money', 'Emotional support', 'Criticism', 'Nothing'], correctIndex: 1 },
          { scenario: 'Need shoulder to cry on.', question: 'What is needed?', options: ['Medical help', 'Someone to support', 'Money', 'Advice'], correctIndex: 1 },
          { scenario: 'Always be shoulder to cry on.', question: 'What type of friend?', options: ['Absent', 'Supportive', 'Critical', 'Busy'], correctIndex: 1 }
        ],
        collocations: ['shoulder to cry on'],
        similarIdioms: ['listening-ear'],
        oppositeIdioms: ['unsympathetic']
      },
      {
        id: 'part-ways',
        idiom: 'part ways',
        meaning: 'End relationship, go separate',
        example: 'After years, friends parted ways.',
        turkishMeaning: 'yolları ayırmak',
        clbLevel: 6,
        category: 'Friendship',
        whenToUse: 'Ending relationship.',
        contexts: [
          { scenario: 'Business partners parted ways.', question: 'What happened?', options: ['Started together', 'Ended partnership', 'Became closer', 'Merged'], correctIndex: 1 },
          { scenario: 'Time to part ways.', question: 'What is happening?', options: ['Starting relationship', 'Ending relationship', 'Getting married', 'Moving in'], correctIndex: 1 },
          { scenario: 'They parted ways amicably.', question: 'How did they split?', options: ['With anger', 'Friendly manner', 'Violently', 'Suddenly'], correctIndex: 1 }
        ],
        collocations: ['part ways with'],
        similarIdioms: ['go-separate-ways'],
        oppositeIdioms: ['join-forces']
      },
      {
        id: 'break-ice',
        idiom: 'break the ice',
        meaning: 'Start conversation, ease tension',
        example: 'Joke helped break ice.',
        turkishMeaning: 'buzları eritmek',
        clbLevel: 6,
        category: 'Friendship',
        whenToUse: 'Starting social interaction.',
        contexts: [
          { scenario: 'Small talk broke ice.', question: 'What did it do?', options: ['Created tension', 'Eased awkwardness', 'Ended conversation', 'Was ignored'], correctIndex: 1 },
          { scenario: 'Hard to break ice with strangers.', question: 'What is difficult?', options: ['Starting conversation', 'Leaving', 'Arguing', 'Agreeing'], correctIndex: 0 },
          { scenario: 'Game designed to break ice.', question: 'Game purpose?', options: ['Win prizes', 'Help people connect', 'Compete', 'Exercise'], correctIndex: 1 }
        ],
        collocations: ['break the ice'],
        similarIdioms: ['warm-up'],
        oppositeIdioms: ['create-tension']
      },
      {
        id: 'bury-hatchet',
        idiom: 'bury the hatchet',
        meaning: 'Make peace, end conflict',
        example: 'Time to bury hatchet and move on.',
        turkishMeaning: 'barışmak',
        clbLevel: 7,
        category: 'Friendship',
        whenToUse: 'Ending disagreement.',
        contexts: [
          { scenario: 'They buried hatchet after years.', question: 'What did they do?', options: ['Started fighting', 'Made peace', 'Avoided each other', 'Competed'], correctIndex: 1 },
          { scenario: 'Should bury hatchet before late.', question: 'What is suggested?', options: ['Keep fighting', 'End conflict', 'Start argument', 'Leave town'], correctIndex: 1 },
          { scenario: 'Refusing to bury hatchet.', question: 'Person is?', options: ['Making peace', 'Staying angry', 'Forgetting', 'Helping'], correctIndex: 1 }
        ],
        collocations: ['bury the hatchet'],
        similarIdioms: ['make-peace'],
        oppositeIdioms: ['hold-grudge']
      },
      {
        id: 'team-player',
        idiom: 'team player',
        meaning: 'Works well with others',
        example: 'He\'s great team player.',
        turkishMeaning: 'takım oyuncusu',
        clbLevel: 5,
        category: 'Friendship',
        whenToUse: 'Collaborative person.',
        contexts: [
          { scenario: 'Looking for team player.', question: 'What quality wanted?', options: ['Works alone', 'Cooperates well', 'Competes', 'Leads only'], correctIndex: 1 },
          { scenario: 'She\'s not team player.', question: 'What about her?', options: ['Collaborates well', 'Doesn\'t cooperate', 'Is friendly', 'Helps others'], correctIndex: 1 },
          { scenario: 'Team player makes difference.', question: 'Impact of team player?', options: ['Negative', 'Positive', 'None', 'Confusing'], correctIndex: 1 }
        ],
        collocations: ['great team player'],
        similarIdioms: ['collaborative'],
        oppositeIdioms: ['lone-wolf']
      }
    ]
  }
];
