import type { IdiomSet } from './types';

export const idiomSetsGroup1: IdiomSet[] = [
  {
    id: 'idioms-daily-conversation',
    title: 'Daily Conversation',
    description: 'Essential idioms for everyday English conversations',
    clbLevel: 6,
    category: 'Daily Conversation',
    icon: '\u{1F4AC}',
    words: [
      {
        id: 'break-the-ice',
        idiom: 'break the ice',
        meaning: 'To initiate conversation in a social setting to make people feel more comfortable',
        example: 'She told a funny story to break the ice at the dinner party.',
        turkishMeaning: 'buzlari kirmak, ortami isitmak',
        clbLevel: 6,
        category: 'Daily Conversation',
        whenToUse: 'Use this when you want to describe starting a conversation or easing awkwardness in a social situation. It is especially common when talking about meeting new people or starting events.',
        contexts: [
          {
            scenario: 'It was the first day of the English class, and nobody knew each other. The teacher asked everyone to share a fun fact about themselves to break the ice. After a few laughs, the students started chatting naturally.',
            question: 'What does "break the ice" mean in this context?',
            options: [
              'To literally crack frozen water',
              'To start a conversation and make people comfortable',
              'To end the class early',
              'To make the room colder'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Tom was nervous about his first day at the new job. His colleague cracked a joke to break the ice during lunch. Tom immediately felt more relaxed and welcomed.',
            question: 'Why did the colleague try to "break the ice"?',
            options: [
              'To show off his humor',
              'To make Tom feel comfortable in the new environment',
              'To distract Tom from working',
              'To complain about the cold office'
            ],
            correctIndex: 1
          },
          {
            scenario: 'At the networking event, Sarah approached a group of strangers and introduced herself with a compliment about the venue to break the ice. Soon, they were all exchanging business cards.',
            question: 'What did Sarah do to "break the ice"?',
            options: [
              'She damaged something at the venue',
              'She left the event early',
              'She started a conversation to ease the awkwardness',
              'She complained about the drinks'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['break the ice with someone', 'an icebreaker activity', 'icebreaker question'],
        similarIdioms: ['get-the-ball-rolling'],
        oppositeIdioms: ['beat-around-the-bush']
      },
      {
        id: 'piece-of-cake',
        idiom: 'piece of cake',
        meaning: 'Something that is very easy to do',
        example: 'The exam was a piece of cake — I finished in 20 minutes.',
        turkishMeaning: 'cocuk oyuncagi, cok kolay',
        clbLevel: 6,
        category: 'Daily Conversation',
        whenToUse: 'Use this when you want to describe something that was or will be very easy. It is casual and friendly, commonly used in everyday speech.',
        contexts: [
          {
            scenario: 'Maria studied hard for her driving test and passed on the first try. When her friend asked how it went, she said it was a piece of cake. Her friend was impressed.',
            question: 'What does Maria mean by "piece of cake"?',
            options: [
              'She received cake after the test',
              'The test was very easy for her',
              'The test was about baking',
              'She failed the test'
            ],
            correctIndex: 1
          },
          {
            scenario: 'After fixing computers for ten years, Jake found the simple software update to be a piece of cake. He finished it in just five minutes while his coworker struggled for an hour.',
            question: 'Why was the update a "piece of cake" for Jake?',
            options: [
              'Because he received a reward for doing it',
              'Because he skipped the update entirely',
              'Because his experience made it very easy',
              'Because he asked someone else to do it'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The children were asked to solve a puzzle at the party. The youngest one solved it first and shouted that it was a piece of cake. Everyone laughed and clapped.',
            question: 'What did the child mean?',
            options: [
              'The puzzle was delicious',
              'The puzzle was shaped like cake',
              'The puzzle was very simple to solve',
              'The puzzle was a prize'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['it was a piece of cake', 'this will be a piece of cake', 'as easy as pie'],
        similarIdioms: ['hit-the-nail-on-the-head'],
        oppositeIdioms: ['cost-an-arm-and-a-leg']
      },
      {
        id: 'hit-the-nail-on-the-head',
        idiom: 'hit the nail on the head',
        meaning: 'To describe exactly what is causing a situation or problem; to be precisely right',
        example: 'You really hit the nail on the head with that analysis of the problem.',
        turkishMeaning: 'tam isabetle soylemek, tam uzerine basmak',
        clbLevel: 6,
        category: 'Daily Conversation',
        whenToUse: 'Use this when someone says something that is exactly correct or perfectly identifies the issue. It is a compliment to someone\'s accuracy or insight.',
        contexts: [
          {
            scenario: 'During the team meeting, Lisa suggested that low morale was causing the drop in sales. The manager said she had hit the nail on the head. A survey later confirmed her observation.',
            question: 'What does the manager mean by Lisa "hitting the nail on the head"?',
            options: [
              'Lisa was using a hammer during the meeting',
              'Lisa was completely wrong',
              'Lisa identified the problem exactly right',
              'Lisa was being rude'
            ],
            correctIndex: 2
          },
          {
            scenario: 'My doctor asked me about my symptoms and immediately guessed that stress was the cause. I told her she hit the nail on the head because I had been working overtime for weeks.',
            question: 'Why did the patient say the doctor "hit the nail on the head"?',
            options: [
              'The doctor performed a procedure',
              'The doctor made an incorrect diagnosis',
              'The doctor accurately identified the cause',
              'The doctor used medical tools'
            ],
            correctIndex: 2
          },
          {
            scenario: 'When reviewing the essay, the teacher told Ahmad that his conclusion hit the nail on the head. Ahmad felt proud because his argument was well-supported with evidence.',
            question: 'What does the teacher\'s comment mean about Ahmad\'s conclusion?',
            options: [
              'It was too short',
              'It was perfectly accurate and well-stated',
              'It was poorly written',
              'It needed more examples'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['you hit the nail on the head', 'that hits the nail on the head', 'to hit the nail right on the head'],
        similarIdioms: ['on-the-same-page'],
        oppositeIdioms: ['beat-around-the-bush']
      },
      {
        id: 'under-the-weather',
        idiom: 'under the weather',
        meaning: 'Feeling slightly ill or not in good health',
        example: 'I am feeling under the weather today, so I will stay home and rest.',
        turkishMeaning: 'keyifsiz, hafif hasta, kendini iyi hissetmemek',
        clbLevel: 6,
        category: 'Daily Conversation',
        whenToUse: 'Use this as a polite and casual way to say you are feeling sick without going into detail. It is commonly used when calling in sick to work or explaining why you cannot attend an event.',
        contexts: [
          {
            scenario: 'David called his boss in the morning and said he was feeling under the weather. He asked if he could work from home instead. His boss told him to rest and feel better.',
            question: 'What does David mean by "under the weather"?',
            options: [
              'He is enjoying the rain',
              'He is feeling slightly sick',
              'He is cold because of the weather',
              'He is checking the weather forecast'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Emily skipped the birthday party last night because she was under the weather. She texted her friend to apologize and said she had a headache and sore throat.',
            question: 'Why did Emily skip the party?',
            options: [
              'She did not like the birthday person',
              'She was feeling unwell',
              'The weather was too bad to go outside',
              'She forgot about the party'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The teacher noticed that one of her students looked pale and tired. She asked if he was feeling under the weather and suggested he visit the school nurse.',
            question: 'What was the teacher concerned about?',
            options: [
              'The student\'s grades dropping',
              'The student not paying attention',
              'The student being sick',
              'The student being cold'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['feeling under the weather', 'a bit under the weather', 'look under the weather'],
        similarIdioms: ['down-in-the-dumps'],
        oppositeIdioms: ['over-the-moon']
      },
      {
        id: 'cost-an-arm-and-a-leg',
        idiom: 'cost an arm and a leg',
        meaning: 'To be extremely expensive',
        example: 'The vacation to Europe cost an arm and a leg, but it was worth every penny.',
        turkishMeaning: 'cok pahaliya mal olmak, goz cikarmak',
        clbLevel: 6,
        category: 'Daily Conversation',
        whenToUse: 'Use this to emphasize that something is very expensive. It is informal and often used when complaining about or commenting on high prices.',
        contexts: [
          {
            scenario: 'Karen wanted to buy a designer handbag, but when she saw the price tag, she said it would cost an arm and a leg. She decided to wait for the sale instead.',
            question: 'What does Karen mean by "cost an arm and a leg"?',
            options: [
              'The bag requires a physical sacrifice',
              'The bag is extremely expensive',
              'The bag is made from leather',
              'The bag is very heavy'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Moving to downtown Toronto can cost an arm and a leg because rent prices are very high. Many young professionals choose to live outside the city and commute to save money.',
            question: 'Why does moving downtown "cost an arm and a leg"?',
            options: [
              'Because moving companies charge for body parts',
              'Because it is very far from hospitals',
              'Because the rent and living costs are extremely high',
              'Because you need special insurance'
            ],
            correctIndex: 2
          },
          {
            scenario: 'James took his car to the mechanic and the repair bill cost an arm and a leg. He was shocked because he thought it would be a simple fix. Now he is considering buying a new car instead.',
            question: 'What happened with the car repair?',
            options: [
              'It was free of charge',
              'It was reasonably priced',
              'It was extremely expensive',
              'The mechanic refused to fix it'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['it costs an arm and a leg', 'cost me an arm and a leg', 'pay an arm and a leg'],
        similarIdioms: ['burn-the-midnight-oil'],
        oppositeIdioms: ['piece-of-cake']
      },
      {
        id: 'beat-around-the-bush',
        idiom: 'beat around the bush',
        meaning: 'To avoid talking about the main topic or getting to the point directly',
        example: 'Stop beating around the bush and tell me what happened.',
        turkishMeaning: 'lafi dolastirmak, sadede gelmemek',
        clbLevel: 6,
        category: 'Daily Conversation',
        whenToUse: 'Use this when someone is being indirect or avoiding the main issue. It is often used to tell someone to be more direct, especially in uncomfortable conversations.',
        contexts: [
          {
            scenario: 'Mike kept talking about the weather and the weekend plans instead of telling his roommate that he was moving out. His roommate told him to stop beating around the bush and say what he meant.',
            question: 'What does "beating around the bush" mean here?',
            options: [
              'Mike was gardening outside',
              'Mike was avoiding the main topic',
              'Mike was being very direct',
              'Mike was hitting plants'
            ],
            correctIndex: 1
          },
          {
            scenario: 'During the performance review, the manager spent twenty minutes praising small things before getting to the real issue. The employee felt the manager was beating around the bush about the negative feedback.',
            question: 'Why did the employee feel the manager was "beating around the bush"?',
            options: [
              'The manager was walking around the office',
              'The manager was delaying the important feedback',
              'The manager was being too honest',
              'The manager was giving compliments'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Anna wanted to break up with her boyfriend but kept beating around the bush by saying she needed space. Finally, she decided to be honest and told him directly that the relationship was over.',
            question: 'What does "beating around the bush" describe about Anna\'s behavior?',
            options: [
              'She was being honest from the start',
              'She was avoiding saying what she really meant',
              'She was angry and aggressive',
              'She was happy about the situation'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['stop beating around the bush', 'quit beating around the bush', 'without beating around the bush'],
        similarIdioms: ['get-cold-feet'],
        oppositeIdioms: ['hit-the-nail-on-the-head']
      },
      {
        id: 'bite-the-bullet',
        idiom: 'bite the bullet',
        meaning: 'To endure a painful or difficult situation with courage; to do something unpleasant that you have been avoiding',
        example: 'I decided to bite the bullet and schedule the dentist appointment I had been putting off.',
        turkishMeaning: 'disleri sikip katlanmak, goze almak',
        clbLevel: 6,
        category: 'Daily Conversation',
        whenToUse: 'Use this when someone finally decides to face a difficult or unpleasant task that they have been delaying. It implies bravery in dealing with something unavoidable.',
        contexts: [
          {
            scenario: 'After months of avoiding the dentist, Carlos finally bit the bullet and made an appointment. The procedure was not as bad as he had feared. He felt relieved afterward.',
            question: 'What does it mean that Carlos "bit the bullet"?',
            options: [
              'He ate something hard at the dentist',
              'He finally faced the unpleasant task he had been avoiding',
              'He cancelled the appointment',
              'He fought with the dentist'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The company was losing money, and the CEO had to bite the bullet and lay off some employees. It was a painful decision, but it was necessary to keep the business alive.',
            question: 'Why did the CEO "bite the bullet"?',
            options: [
              'To celebrate the company\'s success',
              'To make a difficult but necessary decision',
              'To hire more employees',
              'To avoid responsibility'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Jenny knew she had to tell her parents about her failing grades. She bit the bullet and sat down with them after dinner. They were disappointed but appreciated her honesty.',
            question: 'What does "bit the bullet" mean in Jenny\'s situation?',
            options: [
              'She studied harder for the next exam',
              'She lied to her parents',
              'She bravely faced a difficult conversation',
              'She ran away from home'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['just bite the bullet', 'had to bite the bullet', 'time to bite the bullet'],
        similarIdioms: ['keep-your-chin-up'],
        oppositeIdioms: ['get-cold-feet']
      },
      {
        id: 'get-cold-feet',
        idiom: 'get cold feet',
        meaning: 'To become nervous or afraid before doing something important, often resulting in not doing it',
        example: 'He wanted to propose, but he got cold feet at the last moment.',
        turkishMeaning: 'cesaretini kaybetmek, son anda korkmak',
        clbLevel: 6,
        category: 'Daily Conversation',
        whenToUse: 'Use this when someone becomes scared or hesitant right before an important decision or event. It is commonly used for weddings, presentations, and big commitments.',
        contexts: [
          {
            scenario: 'Sarah had been planning to skydive for months, but when the plane reached the jump altitude, she got cold feet and decided not to jump. Her friends were understanding.',
            question: 'What does it mean that Sarah "got cold feet"?',
            options: [
              'Her feet were literally cold from the altitude',
              'She became too nervous to go through with it',
              'She was excited to jump',
              'She forgot her shoes'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The groom was ready for the wedding, but minutes before the ceremony, he got cold feet and started pacing nervously. His best man calmed him down and reminded him why he was getting married.',
            question: 'Why did the groom "get cold feet"?',
            options: [
              'The church was too cold',
              'He forgot the rings',
              'He became extremely nervous before the ceremony',
              'He was running late'
            ],
            correctIndex: 2
          },
          {
            scenario: 'Kevin was about to hand in his resignation letter but got cold feet at the last minute. He worried about losing his stable income and decided to keep working while looking for another job.',
            question: 'What happened when Kevin "got cold feet"?',
            options: [
              'He confidently resigned',
              'He changed his mind due to fear and hesitation',
              'He got promoted instead',
              'He took a sick day'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['get cold feet about', 'got cold feet before', 'having cold feet'],
        similarIdioms: ['beat-around-the-bush'],
        oppositeIdioms: ['bite-the-bullet']
      },
      {
        id: 'once-in-a-blue-moon',
        idiom: 'once in a blue moon',
        meaning: 'Very rarely; something that almost never happens',
        example: 'We only go to fancy restaurants once in a blue moon because they are so expensive.',
        turkishMeaning: 'cok nadir, kirik yilda bir',
        clbLevel: 6,
        category: 'Daily Conversation',
        whenToUse: 'Use this to emphasize that something happens very infrequently. It is a vivid way to say "almost never" and works in both positive and negative contexts.',
        contexts: [
          {
            scenario: 'My grandmother lives in Turkey, and I only get to visit her once in a blue moon because flights are expensive. I try to call her every week instead to stay in touch.',
            question: 'How often does the person visit their grandmother?',
            options: [
              'Every week',
              'Every month',
              'Very rarely',
              'Never'
            ],
            correctIndex: 2
          },
          {
            scenario: 'It only snows in Vancouver once in a blue moon, so when it happened last December, the whole city was excited. Schools were closed and children played outside all day.',
            question: 'What does "once in a blue moon" tell us about snow in Vancouver?',
            options: [
              'It snows every winter',
              'It snows very rarely',
              'It never snows',
              'It snows only at night'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Daniel is a very healthy eater, but once in a blue moon, he treats himself to a large pizza and ice cream. He says it is important to enjoy life sometimes.',
            question: 'How often does Daniel eat pizza and ice cream?',
            options: [
              'Every day',
              'Every weekend',
              'Very rarely, as a special treat',
              'He never eats them'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['once in a blue moon', 'happens once in a blue moon', 'only once in a blue moon'],
        similarIdioms: ['speak-of-the-devil'],
        oppositeIdioms: []
      },
      {
        id: 'speak-of-the-devil',
        idiom: 'speak of the devil',
        meaning: 'Said when the person you were just talking about unexpectedly arrives or appears',
        example: 'We were just talking about you — speak of the devil!',
        turkishMeaning: 'iti an citigi hazirla, lafi gecen kisi gelir',
        clbLevel: 6,
        category: 'Daily Conversation',
        whenToUse: 'Use this lightheartedly when someone you were just discussing shows up at that moment. It is a humorous and common expression, not meant to be rude.',
        contexts: [
          {
            scenario: 'Linda and her coworkers were discussing whether their boss would approve the budget. Just then, the boss walked into the room. Linda smiled and said, "Speak of the devil!" Everyone laughed.',
            question: 'Why did Linda say "speak of the devil"?',
            options: [
              'She was calling her boss evil',
              'The boss arrived right when they were talking about him',
              'She wanted to change the subject',
              'She was scared of the boss'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Ahmed was telling his wife about his old friend from university when the phone rang. It was that exact friend calling after years. Ahmed laughed and said, "Speak of the devil!"',
            question: 'What makes this a "speak of the devil" moment?',
            options: [
              'The friend was angry',
              'Ahmed was expecting the call',
              'The person they were talking about contacted them at that moment',
              'Ahmed did not recognize the caller'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The students were wondering if the substitute teacher would be strict or friendly. As they were debating, the teacher walked in with a big smile. One student whispered, "Speak of the devil!"',
            question: 'What does the student\'s comment mean?',
            options: [
              'The teacher is a bad person',
              'The teacher they were discussing just appeared',
              'The student was afraid',
              'The teacher was late'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['speak of the devil and he shall appear', 'well, speak of the devil', 'speak of the devil — here they come'],
        similarIdioms: ['once-in-a-blue-moon'],
        oppositeIdioms: []
      }
    ]
  },
  {
    id: 'idioms-work-business',
    title: 'Work & Business',
    description: 'Professional idioms commonly used in Canadian workplaces',
    clbLevel: 7,
    category: 'Work & Business',
    icon: '\u{1F4BC}',
    words: [
      {
        id: 'think-outside-the-box',
        idiom: 'think outside the box',
        meaning: 'To think creatively and in an unconventional way to solve a problem',
        example: 'We need to think outside the box to attract more customers this quarter.',
        turkishMeaning: 'kaliplarin disinda dusunmek, yaratici dusunmek',
        clbLevel: 7,
        category: 'Work & Business',
        whenToUse: 'Use this in professional or creative contexts when encouraging innovative ideas. It suggests moving beyond traditional approaches to find new solutions.',
        contexts: [
          {
            scenario: 'The marketing team had been using the same strategies for years with declining results. The new director encouraged everyone to think outside the box. Within a month, the team launched a viral social media campaign that doubled engagement.',
            question: 'What does "think outside the box" mean in this context?',
            options: [
              'To work overtime',
              'To follow traditional methods',
              'To come up with creative and unconventional ideas',
              'To hire new employees'
            ],
            correctIndex: 2
          },
          {
            scenario: 'During the hackathon, the judges praised Team B for thinking outside the box. While other teams built standard apps, Team B created an innovative solution using voice recognition technology.',
            question: 'Why was Team B praised for "thinking outside the box"?',
            options: [
              'They finished faster than others',
              'They used a unique and creative approach',
              'They had more team members',
              'They copied another team\'s idea'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The teacher told her students to think outside the box for their science project. Instead of a traditional poster, one student built a working model using recycled materials. The teacher was impressed.',
            question: 'What did the student do to "think outside the box"?',
            options: [
              'Made a regular poster',
              'Copied from the internet',
              'Created something unique and different from the norm',
              'Skipped the project entirely'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['think outside the box', 'outside-the-box thinking', 'an outside-the-box solution'],
        similarIdioms: ['get-the-ball-rolling'],
        oppositeIdioms: ['cut-corners']
      },
      {
        id: 'get-the-ball-rolling',
        idiom: 'get the ball rolling',
        meaning: 'To start an activity, process, or project',
        example: 'Let us get the ball rolling by discussing the project timeline.',
        turkishMeaning: 'isi baslatmak, harekete gecmek',
        clbLevel: 7,
        category: 'Work & Business',
        whenToUse: 'Use this when you want to initiate something or encourage others to start a task. It is commonly used at the beginning of meetings, projects, or events.',
        contexts: [
          {
            scenario: 'The project had been delayed for weeks because nobody wanted to take the first step. Finally, the team leader said she would get the ball rolling by creating the initial draft. Others followed her lead.',
            question: 'What does "get the ball rolling" mean here?',
            options: [
              'To play a ball game at work',
              'To initiate the project by taking the first step',
              'To cancel the project',
              'To delay the project further'
            ],
            correctIndex: 1
          },
          {
            scenario: 'At the fundraiser planning meeting, the chairperson suggested they get the ball rolling with a brainstorming session. Within an hour, they had a list of twenty ideas for events and sponsors.',
            question: 'Why did they "get the ball rolling" with brainstorming?',
            options: [
              'To start the planning process actively',
              'To end the meeting quickly',
              'To avoid making decisions',
              'To play games during the meeting'
            ],
            correctIndex: 0
          },
          {
            scenario: 'The sales team needed to reach new clients. The manager said they should get the ball rolling by sending out introductory emails this week. By Friday, they had scheduled several meetings.',
            question: 'What did "get the ball rolling" mean for the sales team?',
            options: [
              'To stop selling products',
              'To wait for clients to call',
              'To begin the outreach process immediately',
              'To roll balls in the office'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['let\'s get the ball rolling', 'get the ball rolling on something', 'to get things rolling'],
        similarIdioms: ['break-the-ice', 'think-outside-the-box'],
        oppositeIdioms: ['back-to-square-one']
      },
      {
        id: 'back-to-square-one',
        idiom: 'back to square one',
        meaning: 'To return to the beginning after a failed attempt; to start over from scratch',
        example: 'The deal fell through, so we are back to square one with negotiations.',
        turkishMeaning: 'basa donmek, sifirdan baslamak',
        clbLevel: 7,
        category: 'Work & Business',
        whenToUse: 'Use this when a plan or effort has failed and you need to start all over again. It often implies frustration but also determination to try again.',
        contexts: [
          {
            scenario: 'The development team spent three months building the app, but the client changed the requirements completely. The project manager sighed and said they were back to square one.',
            question: 'What does "back to square one" mean here?',
            options: [
              'They moved to a new office',
              'They need to start the project over from the beginning',
              'They finished the project early',
              'They received a promotion'
            ],
            correctIndex: 1
          },
          {
            scenario: 'After weeks of negotiations, the two companies could not agree on the terms. Both sides walked away, and it was back to square one. They would need to find new partners.',
            question: 'Why were they "back to square one"?',
            options: [
              'They signed the deal successfully',
              'The negotiations failed and they had to restart',
              'They found a better deal',
              'They moved to a different square'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Priya thought she found the perfect apartment, but the landlord rented it to someone else. She was back to square one, scrolling through listings and booking viewings all over again.',
            question: 'What does "back to square one" tell us about Priya\'s situation?',
            options: [
              'She moved into the apartment',
              'She gave up looking',
              'She had to restart her apartment search from scratch',
              'She found a better apartment immediately'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['go back to square one', 'we are back to square one', 'starting from square one'],
        similarIdioms: ['cut-corners'],
        oppositeIdioms: ['get-the-ball-rolling']
      },
      {
        id: 'cut-corners',
        idiom: 'cut corners',
        meaning: 'To do something in the easiest, cheapest, or fastest way, often sacrificing quality',
        example: 'We should not cut corners on the safety inspection — people\'s lives depend on it.',
        turkishMeaning: 'isleri bastan savmak, kaliteden odun vermek',
        clbLevel: 7,
        category: 'Work & Business',
        whenToUse: 'Use this negatively when someone reduces quality or skips important steps to save time or money. It is a warning or criticism about poor workmanship.',
        contexts: [
          {
            scenario: 'The construction company cut corners to finish the building faster, using cheaper materials than specified. Six months later, cracks appeared in the walls and the building needed expensive repairs.',
            question: 'What does "cut corners" mean in this context?',
            options: [
              'They trimmed the edges of the building',
              'They reduced quality to save time and money',
              'They did excellent work quickly',
              'They redesigned the corners of the building'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The manager warned the interns not to cut corners on their research reports. She explained that incomplete data could lead to bad decisions that would affect the entire company.',
            question: 'Why did the manager warn against "cutting corners"?',
            options: [
              'Because she wanted them to work slower',
              'Because shortcuts in research could cause serious problems',
              'Because she did not trust the interns',
              'Because the reports were about geometry'
            ],
            correctIndex: 1
          },
          {
            scenario: 'When planning their wedding on a budget, Tom and Lisa decided to cut corners on decorations but not on food. They used simple flowers and homemade centerpieces, and their guests loved the personal touch.',
            question: 'How did Tom and Lisa "cut corners" on their wedding?',
            options: [
              'They cancelled the wedding',
              'They spent more money on everything',
              'They simplified decorations to save money',
              'They did not invite any guests'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['don\'t cut corners', 'cut corners on something', 'cutting corners to save money'],
        similarIdioms: ['back-to-square-one'],
        oppositeIdioms: ['think-outside-the-box']
      },
      {
        id: 'call-it-a-day',
        idiom: 'call it a day',
        meaning: 'To stop working on something; to decide that enough has been done for now',
        example: 'We have been working since 7 AM — let us call it a day and go home.',
        turkishMeaning: 'bugunku isi bitirmek, paydos etmek',
        clbLevel: 7,
        category: 'Work & Business',
        whenToUse: 'Use this when you or a group decides to stop working for the day or stop an activity that has gone on long enough. It is casual and commonly used in workplaces.',
        contexts: [
          {
            scenario: 'The team had been debugging the software for eight hours straight. The lead developer suggested they call it a day and start fresh tomorrow morning. Everyone agreed they needed rest.',
            question: 'What does "call it a day" mean here?',
            options: [
              'To name the day of the week',
              'To stop working for the day and rest',
              'To work through the night',
              'To celebrate the achievement'
            ],
            correctIndex: 1
          },
          {
            scenario: 'After painting three rooms in the house, Alex was exhausted and decided to call it a day. He cleaned his brushes and planned to finish the last room over the weekend.',
            question: 'Why did Alex "call it a day"?',
            options: [
              'He ran out of paint',
              'He finished all the rooms',
              'He was tired and decided to stop for now',
              'He did not like painting'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The negotiation had been going on for five hours without progress. Both parties decided to call it a day and resume talks next week with fresh perspectives.',
            question: 'What happened when they "called it a day"?',
            options: [
              'They reached an agreement',
              'They permanently ended negotiations',
              'They agreed to stop for now and continue later',
              'They started a new negotiation'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['let\'s call it a day', 'time to call it a day', 'decided to call it a day'],
        similarIdioms: ['burn-the-midnight-oil'],
        oppositeIdioms: []
      },
      {
        id: 'in-the-loop',
        idiom: 'in the loop',
        meaning: 'To be informed about and involved in something; to have the latest information',
        example: 'Please keep me in the loop about any changes to the schedule.',
        turkishMeaning: 'bilgilendirilmis olmak, gelismelerden haberdar olmak',
        clbLevel: 7,
        category: 'Work & Business',
        whenToUse: 'Use this when asking to be kept informed or when describing that someone has up-to-date information. The opposite, "out of the loop," means not being informed.',
        contexts: [
          {
            scenario: 'After being on vacation for two weeks, Maria asked her colleague to bring her in the loop on what happened while she was away. Her colleague sent her a detailed summary of all the meetings.',
            question: 'What does "bring her in the loop" mean?',
            options: [
              'To take her on a tour of the office',
              'To update her on what she missed',
              'To include her in a running group',
              'To give her a new assignment'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The CEO wanted to make sure all department heads were in the loop about the merger. She scheduled a confidential meeting to share the details before the public announcement.',
            question: 'Why did the CEO want everyone "in the loop"?',
            options: [
              'To plan a company party',
              'To ensure they were informed about the important merger',
              'To fire the department heads',
              'To create a physical loop in the office'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Raj felt frustrated because his team was making decisions without keeping him in the loop. He spoke to his manager and asked to be included in all relevant email threads going forward.',
            question: 'Why was Raj frustrated about not being "in the loop"?',
            options: [
              'He was excluded from social events',
              'He was not being informed about important decisions',
              'He did not have access to the internet',
              'He was working too many hours'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['keep someone in the loop', 'stay in the loop', 'out of the loop'],
        similarIdioms: ['on-the-same-page'],
        oppositeIdioms: []
      },
      {
        id: 'the-bottom-line',
        idiom: 'the bottom line',
        meaning: 'The most important fact or consideration; the final result, especially regarding money or a decision',
        example: 'The bottom line is that we need to increase revenue by 20 percent this year.',
        turkishMeaning: 'sonuc olarak, ozetle, en onemli nokta',
        clbLevel: 7,
        category: 'Work & Business',
        whenToUse: 'Use this to summarize the most essential point of a discussion or to refer to financial results. It cuts through details to state what ultimately matters.',
        contexts: [
          {
            scenario: 'After a long debate about the new product features, the CEO said the bottom line was simple: if customers do not want it, we should not build it. The team agreed to do more market research first.',
            question: 'What does "the bottom line" mean here?',
            options: [
              'The last line of the document',
              'The most important conclusion of the discussion',
              'The lowest price they can offer',
              'The bottom of the page'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The accountant presented the quarterly report and said the bottom line was positive — the company made a ten percent profit. Everyone in the meeting was relieved to hear the good news.',
            question: 'What does "the bottom line" refer to in this financial context?',
            options: [
              'The last row of the spreadsheet',
              'The overall profit or loss result',
              'The lowest employee salary',
              'The cheapest product they sell'
            ],
            correctIndex: 1
          },
          {
            scenario: 'After considering all the pros and cons of relocating the office, the bottom line was that it would save the company money but make commuting harder for half the staff.',
            question: 'What role does "the bottom line" play in this decision?',
            options: [
              'It is an unimportant detail',
              'It summarizes the key trade-off of the decision',
              'It refers to the building\'s foundation',
              'It describes the moving costs only'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['the bottom line is', 'affect the bottom line', 'focus on the bottom line'],
        similarIdioms: ['hit-the-nail-on-the-head'],
        oppositeIdioms: ['beat-around-the-bush']
      },
      {
        id: 'on-the-same-page',
        idiom: 'on the same page',
        meaning: 'To be in agreement or have the same understanding about something',
        example: 'Let us make sure we are all on the same page before we start the project.',
        turkishMeaning: 'ayni fikirde olmak, hemfikir olmak',
        clbLevel: 7,
        category: 'Work & Business',
        whenToUse: 'Use this to confirm that everyone has the same understanding or agrees on a plan. It is very common in meetings and teamwork situations.',
        contexts: [
          {
            scenario: 'Before launching the campaign, the marketing manager wanted to make sure everyone was on the same page about the target audience. She sent out a brief with all the details for the team to review.',
            question: 'What does "on the same page" mean in this context?',
            options: [
              'Everyone is reading the same book',
              'Everyone shares the same understanding of the plan',
              'Everyone is sitting in the same room',
              'Everyone is using the same computer'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The couple went to a financial advisor to get on the same page about their savings goals. They realized they had very different ideas about retirement and needed to compromise.',
            question: 'Why did the couple want to get "on the same page"?',
            options: [
              'To read a book together',
              'To align their financial plans and understanding',
              'To open a joint bank account',
              'To write a letter together'
            ],
            correctIndex: 1
          },
          {
            scenario: 'After the miscommunication caused a delayed shipment, the warehouse manager held a meeting to get everyone on the same page about the new procedures. He distributed a clear checklist for everyone to follow.',
            question: 'Why was getting "on the same page" important after the miscommunication?',
            options: [
              'To blame someone for the mistake',
              'To ensure everyone understood the new procedures',
              'To write new procedures on the same paper',
              'To delay the next shipment'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['get on the same page', 'be on the same page', 'make sure we are on the same page'],
        similarIdioms: ['in-the-loop', 'hit-the-nail-on-the-head'],
        oppositeIdioms: []
      },
      {
        id: 'pull-strings',
        idiom: 'pull strings',
        meaning: 'To use personal influence or connections to get something done, often bypassing normal procedures',
        example: 'He pulled some strings to get his daughter an internship at the law firm.',
        turkishMeaning: 'torpil kullanmak, arka kapidan is yapmak',
        clbLevel: 7,
        category: 'Work & Business',
        whenToUse: 'Use this when someone uses their personal connections or influence to achieve something that would normally be difficult. It can have a slightly negative connotation.',
        contexts: [
          {
            scenario: 'Ahmed could not get a visa appointment for months because all the slots were booked. His uncle, who worked at the embassy, pulled some strings and got him an appointment within a week.',
            question: 'What does it mean that his uncle "pulled some strings"?',
            options: [
              'His uncle played a musical instrument',
              'His uncle used his connections to help',
              'His uncle applied for the visa himself',
              'His uncle waited in line for Ahmed'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The restaurant was fully booked for Valentine\'s Day, but the manager pulled strings with the owner and secured a private table for his anniversary dinner.',
            question: 'How did the manager get a table when it was fully booked?',
            options: [
              'He waited in a long line',
              'He booked online like everyone else',
              'He used his personal connections to get special treatment',
              'He cancelled someone else\'s reservation'
            ],
            correctIndex: 2
          },
          {
            scenario: 'Some employees were upset because they believed their coworker got promoted by pulling strings rather than through merit. The HR department investigated to ensure the promotion process was fair.',
            question: 'Why were the employees upset about "pulling strings"?',
            options: [
              'They wanted to play with string too',
              'They felt the promotion was unfairly gained through connections',
              'They thought the coworker worked too hard',
              'They wanted to be on the investigation team'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['pull strings for someone', 'pull some strings', 'string-pulling'],
        similarIdioms: ['burn-the-midnight-oil'],
        oppositeIdioms: []
      },
      {
        id: 'burn-the-midnight-oil',
        idiom: 'burn the midnight oil',
        meaning: 'To work or study late into the night',
        example: 'She burned the midnight oil to finish the report before the deadline.',
        turkishMeaning: 'gece geç saatlere kadar calismak, gece yarisi yag yakmak',
        clbLevel: 7,
        category: 'Work & Business',
        whenToUse: 'Use this to describe working or studying very late at night, usually to meet a deadline or finish an important task. It implies hard work and dedication.',
        contexts: [
          {
            scenario: 'The students burned the midnight oil during finals week, studying until 3 AM every night. The library was packed with exhausted students drinking coffee and reviewing their notes.',
            question: 'What does "burned the midnight oil" mean here?',
            options: [
              'They set fire to the library',
              'They studied very late into the night',
              'They used candles instead of electric lights',
              'They left the library at midnight'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The startup team burned the midnight oil for weeks to launch their product on time. Their hard work paid off when the app received thousands of downloads on the first day.',
            question: 'Why did the startup team "burn the midnight oil"?',
            options: [
              'They enjoyed working at night for fun',
              'They worked late to meet their launch deadline',
              'They had problems with the office lights',
              'They were being punished by their boss'
            ],
            correctIndex: 1
          },
          {
            scenario: 'As a tax accountant, Jessica always burns the midnight oil during April. Tax season keeps her at the office until late every night, but she earns overtime pay for the extra hours.',
            question: 'What does "burns the midnight oil" tell us about Jessica\'s work schedule?',
            options: [
              'She works normal hours',
              'She takes long vacations in April',
              'She works very late during the busy tax season',
              'She uses old-fashioned oil lamps at work'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['burn the midnight oil', 'burning the midnight oil', 'had to burn the midnight oil'],
        similarIdioms: ['call-it-a-day'],
        oppositeIdioms: []
      }
    ]
  },
  {
    id: 'idioms-emotions',
    title: 'Emotions & Feelings',
    description: 'Expressive idioms for describing emotions and feelings',
    clbLevel: 6,
    category: 'Emotions & Feelings',
    icon: '\u{2764}\u{FE0F}',
    words: [
      {
        id: 'over-the-moon',
        idiom: 'over the moon',
        meaning: 'Extremely happy, delighted, or thrilled about something',
        example: 'She was over the moon when she found out she got the job.',
        turkishMeaning: 'cok mutlu olmak, havalara ucmak, sevinc icinde olmak',
        clbLevel: 6,
        category: 'Emotions & Feelings',
        whenToUse: 'Use this to express extreme happiness about something wonderful that happened. It is casual and enthusiastic, commonly used to share good news.',
        contexts: [
          {
            scenario: 'After trying for years, Fatima finally received her Canadian citizenship. She was over the moon and called all her family and friends to share the news.',
            question: 'What does it mean that Fatima was "over the moon"?',
            options: [
              'She traveled to space',
              'She was extremely happy',
              'She was confused',
              'She was disappointed'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The little boy was over the moon when his parents surprised him with a puppy for his birthday. He jumped up and down, hugging the puppy with the biggest smile on his face.',
            question: 'How did the boy feel when he was "over the moon"?',
            options: [
              'Scared of the puppy',
              'Indifferent to the gift',
              'Extremely happy and excited',
              'Sad about his birthday'
            ],
            correctIndex: 2
          },
          {
            scenario: 'When the coach announced that the team had won the championship, all the players were over the moon. They celebrated by lifting the trophy and cheering together on the field.',
            question: 'What does "over the moon" describe about the players?',
            options: [
              'They were floating in the air',
              'They were extremely joyful about winning',
              'They were tired from playing',
              'They were angry at the coach'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['absolutely over the moon', 'over the moon about', 'over the moon with joy'],
        similarIdioms: ['on-cloud-nine'],
        oppositeIdioms: ['down-in-the-dumps']
      },
      {
        id: 'down-in-the-dumps',
        idiom: 'down in the dumps',
        meaning: 'Feeling sad, unhappy, or depressed',
        example: 'He has been down in the dumps ever since he lost his job last month.',
        turkishMeaning: 'morali bozuk olmak, cokmus hissetmek, keyifsiz olmak',
        clbLevel: 6,
        category: 'Emotions & Feelings',
        whenToUse: 'Use this to describe someone who is feeling sad or depressed, usually for a period of time. It is less severe than clinical depression and is used casually.',
        contexts: [
          {
            scenario: 'After his best friend moved to another city, Mark was down in the dumps for weeks. He did not feel like going out or seeing anyone. Slowly, he started joining online game nights to stay connected.',
            question: 'What does it mean that Mark was "down in the dumps"?',
            options: [
              'He was living near a garbage dump',
              'He was feeling sad and low',
              'He was angry at his friend',
              'He was cleaning his house'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Mia noticed her coworker had been down in the dumps since the project was cancelled. She brought her a coffee and offered to chat during lunch. Her coworker appreciated the kindness.',
            question: 'Why was the coworker "down in the dumps"?',
            options: [
              'She was sick with a cold',
              'She was feeling unhappy about the cancelled project',
              'She was tired from working overtime',
              'She did not like coffee'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The rainy weather had everyone in the office feeling down in the dumps. The manager decided to order pizza for the team and put on some music to lift everyone\'s spirits.',
            question: 'What does "down in the dumps" mean about the office mood?',
            options: [
              'Everyone was energetic and excited',
              'Everyone was feeling gloomy and unhappy',
              'Everyone was working hard',
              'Everyone was at the garbage dump'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['feeling down in the dumps', 'been down in the dumps', 'look down in the dumps'],
        similarIdioms: ['under-the-weather'],
        oppositeIdioms: ['over-the-moon']
      },
      {
        id: 'have-butterflies',
        idiom: 'have butterflies',
        meaning: 'To feel nervous or anxious, especially with a fluttering sensation in your stomach',
        example: 'I always have butterflies before giving a presentation in front of a large audience.',
        turkishMeaning: 'heyecanlanmak, icinde kelebekler ucusmak, gergin olmak',
        clbLevel: 6,
        category: 'Emotions & Feelings',
        whenToUse: 'Use this to describe nervous excitement or anxiety before an important event like a speech, date, exam, or performance. The full form is "have butterflies in your stomach."',
        contexts: [
          {
            scenario: 'Before her first date with someone she met online, Layla had butterflies in her stomach. She changed her outfit three times and arrived at the restaurant ten minutes early.',
            question: 'What does "had butterflies in her stomach" mean?',
            options: [
              'She ate something bad before the date',
              'She felt nervous and excited',
              'She was not interested in the date',
              'She had actual butterflies in her bag'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Even though he had practiced his speech twenty times, the valedictorian still had butterflies when he walked up to the podium. Once he started speaking, the nervousness faded away.',
            question: 'Why did the valedictorian "have butterflies"?',
            options: [
              'He forgot his speech entirely',
              'He was nervous about speaking in front of everyone',
              'He saw butterflies outside the window',
              'He was bored with the ceremony'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The soccer player admitted he always has butterflies before a big match. He said the nervous energy actually helps him focus better and play harder on the field.',
            question: 'What does "has butterflies" tell us about the soccer player?',
            options: [
              'He collects butterflies as a hobby',
              'He gets nervous before important games',
              'He does not enjoy playing soccer',
              'He is allergic to butterflies'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['have butterflies in your stomach', 'give someone butterflies', 'butterflies before something'],
        similarIdioms: ['get-cold-feet'],
        oppositeIdioms: ['keep-your-chin-up']
      },
      {
        id: 'blow-off-steam',
        idiom: 'blow off steam',
        meaning: 'To release pent-up energy, stress, or frustration through physical or emotional activity',
        example: 'After a stressful week at work, I like to blow off steam by going for a run.',
        turkishMeaning: 'stres atmak, rahatlama, icini bosmak',
        clbLevel: 6,
        category: 'Emotions & Feelings',
        whenToUse: 'Use this when someone needs to release stress or frustration through some activity. It is commonly associated with exercise, hobbies, or social activities after a stressful period.',
        contexts: [
          {
            scenario: 'After a tough exam week, the university students decided to blow off steam by going bowling together. They laughed, ate pizza, and forgot about their stress for a few hours.',
            question: 'What does "blow off steam" mean in this context?',
            options: [
              'To study even harder',
              'To release stress through a fun activity',
              'To cook something with steam',
              'To skip their next class'
            ],
            correctIndex: 1
          },
          {
            scenario: 'When the deal fell through, the sales manager was furious. He went to the gym to blow off steam before talking to his team. He did not want to say something he would regret.',
            question: 'Why did the manager go to the gym to "blow off steam"?',
            options: [
              'To impress his coworkers',
              'To release his anger and frustration before facing his team',
              'To avoid going back to work ever',
              'To use the steam room at the gym'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Living with three roommates can be stressful sometimes. Whenever things get tense, Priya blows off steam by taking long walks in the park. The fresh air helps her clear her mind.',
            question: 'How does Priya "blow off steam"?',
            options: [
              'By arguing with her roommates',
              'By moving to a new apartment',
              'By walking in the park to relieve stress',
              'By using a steam machine'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['blow off some steam', 'need to blow off steam', 'a way to blow off steam'],
        similarIdioms: ['lose-your-cool'],
        oppositeIdioms: ['keep-your-chin-up']
      },
      {
        id: 'keep-your-chin-up',
        idiom: 'keep your chin up',
        meaning: 'To stay positive and not lose hope during a difficult situation',
        example: 'I know the job search is tough, but keep your chin up — something will come along.',
        turkishMeaning: 'basini dik tutmak, umudunu kaybetmemek, moralini bozmamak',
        clbLevel: 6,
        category: 'Emotions & Feelings',
        whenToUse: 'Use this to encourage someone who is going through a hard time. It is a supportive and comforting expression that tells someone to stay strong and optimistic.',
        contexts: [
          {
            scenario: 'After failing her driving test for the second time, Sara was very discouraged. Her father told her to keep her chin up and reminded her that many people pass on the third try.',
            question: 'What does "keep your chin up" mean in this context?',
            options: [
              'To look upward while driving',
              'To stay positive despite the failure',
              'To stop trying to get a license',
              'To hold your head in a specific position'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The small business owner was struggling during the economic downturn, but her mentor told her to keep her chin up. Six months later, business improved and she was glad she did not give up.',
            question: 'Why did the mentor tell her to "keep her chin up"?',
            options: [
              'To improve her posture',
              'To encourage her not to lose hope',
              'To make her look more professional',
              'To distract her from the problems'
            ],
            correctIndex: 1
          },
          {
            scenario: 'When the hockey team lost three games in a row, the coach gathered the players and told them to keep their chins up. He reminded them that the season was not over and they could still make the playoffs.',
            question: 'What was the coach\'s message when he said "keep your chins up"?',
            options: [
              'To practice looking upward during games',
              'To remain hopeful and keep trying despite losses',
              'To focus on individual performance only',
              'To quit the season early'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['keep your chin up', 'chin up, things will improve', 'try to keep your chin up'],
        similarIdioms: ['bite-the-bullet'],
        oppositeIdioms: ['down-in-the-dumps']
      },
      {
        id: 'get-on-someones-nerves',
        idiom: 'get on someone\'s nerves',
        meaning: 'To annoy or irritate someone repeatedly',
        example: 'His constant humming really gets on my nerves when I am trying to concentrate.',
        turkishMeaning: 'birinin sinirlerini bozmak, rahatsiz etmek, can sikici olmak',
        clbLevel: 6,
        category: 'Emotions & Feelings',
        whenToUse: 'Use this when someone or something is causing persistent annoyance or irritation. It describes ongoing frustration rather than a single incident.',
        contexts: [
          {
            scenario: 'The loud construction noise outside the apartment has been getting on everyone\'s nerves for months. The residents filed a complaint with the city about the noise levels.',
            question: 'What does "getting on everyone\'s nerves" mean?',
            options: [
              'The noise was damaging their physical nerves',
              'The noise was causing them persistent annoyance',
              'The noise was making them deaf',
              'The noise was pleasant background music'
            ],
            correctIndex: 1
          },
          {
            scenario: 'My brother has a habit of chewing loudly at the dinner table, and it really gets on my nerves. I have asked him to stop many times, but he says he does not realize he is doing it.',
            question: 'Why does the brother\'s chewing "get on my nerves"?',
            options: [
              'It causes physical pain',
              'It is persistently irritating',
              'It is too quiet to hear',
              'It makes the food taste bad'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The manager\'s micromanaging style was getting on the team\'s nerves. They felt they could not do anything without being watched. Eventually, they asked for a meeting to discuss trust and autonomy.',
            question: 'What does it mean that the manager was "getting on the team\'s nerves"?',
            options: [
              'The manager was helping the team succeed',
              'The manager was constantly annoying and frustrating the team',
              'The manager was too relaxed',
              'The manager was injuring the team members'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['get on my nerves', 'gets on someone\'s nerves', 'really getting on my nerves'],
        similarIdioms: ['lose-your-cool', 'blow-off-steam'],
        oppositeIdioms: []
      },
      {
        id: 'wear-your-heart-on-your-sleeve',
        idiom: 'wear your heart on your sleeve',
        meaning: 'To openly show your emotions and feelings rather than hiding them',
        example: 'She wears her heart on her sleeve — you always know exactly how she feels.',
        turkishMeaning: 'duygularini acikca gostermek, icini dokmek, duygularini gizlememek',
        clbLevel: 6,
        category: 'Emotions & Feelings',
        whenToUse: 'Use this to describe someone who is very open and transparent about their emotions. It can be seen as either a positive trait (honest and genuine) or a vulnerability.',
        contexts: [
          {
            scenario: 'During the farewell party, everyone noticed that the retiring teacher wore her heart on her sleeve. She cried openly when students shared memories, and everyone was moved by her genuine emotion.',
            question: 'What does it mean that the teacher "wore her heart on her sleeve"?',
            options: [
              'She wore a heart-shaped pin on her clothing',
              'She openly showed her emotions without hiding them',
              'She was embarrassed at the party',
              'She pretended to be happy'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Alex\'s friends always know what he is feeling because he wears his heart on his sleeve. If he is upset, his face shows it immediately. Some people admire his honesty, while others think he should be more reserved.',
            question: 'What does "wearing his heart on his sleeve" say about Alex?',
            options: [
              'He is secretive about his feelings',
              'He is always angry',
              'He is very open and transparent with his emotions',
              'He does not have strong feelings'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The job counselor warned that wearing your heart on your sleeve in a negotiation can be risky. If the other side knows you are desperate, they might offer you less than you deserve.',
            question: 'Why could "wearing your heart on your sleeve" be risky in a negotiation?',
            options: [
              'Because it is unprofessional to wear accessories',
              'Because showing your emotions can be used against you',
              'Because it makes negotiations faster',
              'Because people will like you more'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['wear your heart on your sleeve', 'she wears her heart on her sleeve', 'don\'t wear your heart on your sleeve'],
        similarIdioms: ['a-shoulder-to-cry-on'],
        oppositeIdioms: []
      },
      {
        id: 'a-shoulder-to-cry-on',
        idiom: 'a shoulder to cry on',
        meaning: 'A person who listens sympathetically to your problems and provides emotional support',
        example: 'When I went through my divorce, my sister was always a shoulder to cry on.',
        turkishMeaning: 'dert ortagi, yaslanacak bir omuz, destek olan kisi',
        clbLevel: 6,
        category: 'Emotions & Feelings',
        whenToUse: 'Use this to describe someone who is supportive and comforting during tough times. It emphasizes emotional availability and empathy rather than solutions.',
        contexts: [
          {
            scenario: 'After losing her grandmother, Nadia needed a shoulder to cry on. Her best friend came over immediately with tea and tissues and stayed with her all evening, just listening.',
            question: 'What does "a shoulder to cry on" mean in this context?',
            options: [
              'A physical shoulder to lean against',
              'A person who provides emotional comfort and support',
              'A professional therapist',
              'Someone who tells you to stop crying'
            ],
            correctIndex: 1
          },
          {
            scenario: 'When David lost his job unexpectedly, he was grateful that his wife was a shoulder to cry on. She did not judge him or panic — she simply listened and reassured him that things would get better.',
            question: 'How was David\'s wife "a shoulder to cry on"?',
            options: [
              'She found him a new job immediately',
              'She gave him financial advice',
              'She listened supportively without judgment',
              'She told him to stop feeling sorry for himself'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The school counselor is known as a shoulder to cry on for students dealing with stress or personal issues. Many students visit her office just to talk and feel heard.',
            question: 'Why is the counselor described as "a shoulder to cry on"?',
            options: [
              'Because she makes students cry',
              'Because she provides emotional support and a safe space',
              'Because she carries tissues on her shoulder',
              'Because she is always sad herself'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['need a shoulder to cry on', 'be a shoulder to cry on', 'offer a shoulder to cry on'],
        similarIdioms: ['wear-your-heart-on-your-sleeve', 'keep-your-chin-up'],
        oppositeIdioms: []
      },
      {
        id: 'lose-your-cool',
        idiom: 'lose your cool',
        meaning: 'To suddenly become angry or upset and lose control of your emotions',
        example: 'The customer lost his cool when the waiter brought the wrong order for the third time.',
        turkishMeaning: 'sinirlerine hakim olamamak, kontrolunu kaybetmek, patlamak',
        clbLevel: 6,
        category: 'Emotions & Feelings',
        whenToUse: 'Use this to describe someone who suddenly loses their temper or composure, especially when they are usually calm. It implies a momentary loss of emotional control.',
        contexts: [
          {
            scenario: 'The normally calm professor lost his cool when he discovered that half the class had plagiarized their essays. He raised his voice and told the students he was deeply disappointed.',
            question: 'What does it mean that the professor "lost his cool"?',
            options: [
              'He lost a cold drink',
              'He became very angry and lost his composure',
              'He felt cold in the classroom',
              'He was impressed by the students'
            ],
            correctIndex: 1
          },
          {
            scenario: 'During the heated debate, the politician managed to keep calm while his opponent lost his cool and started shouting. The audience noticed the difference and it affected their opinion.',
            question: 'What happened when the politician\'s opponent "lost his cool"?',
            options: [
              'He became more persuasive',
              'He became visibly angry and started shouting',
              'He left the debate calmly',
              'He won the argument'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Mom rarely loses her cool, but when she found the kitchen covered in flour and broken eggs after the kids tried to bake a cake, she could not help but yell. She apologized later and helped them clean up.',
            question: 'What does "losing her cool" describe about the mom?',
            options: [
              'She was happy about the mess',
              'She temporarily lost her temper and reacted with anger',
              'She calmly cleaned everything up',
              'She was cold from the flour'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['lose your cool', 'don\'t lose your cool', 'he lost his cool'],
        similarIdioms: ['blow-off-steam', 'get-on-someones-nerves'],
        oppositeIdioms: ['keep-your-chin-up']
      },
      {
        id: 'on-cloud-nine',
        idiom: 'on cloud nine',
        meaning: 'Extremely happy, euphoric, or elated',
        example: 'She has been on cloud nine ever since she got engaged last weekend.',
        turkishMeaning: 'bulutlarin uzerinde olmak, cok mutlu olmak, goklerde ucmak',
        clbLevel: 6,
        category: 'Emotions & Feelings',
        whenToUse: 'Use this to describe an intense feeling of happiness or bliss, often after receiving wonderful news or experiencing something amazing. It is interchangeable with "over the moon."',
        contexts: [
          {
            scenario: 'When the acceptance letter from her dream university arrived, Zara was on cloud nine for days. She could not stop smiling and told everyone about the good news.',
            question: 'What does it mean that Zara was "on cloud nine"?',
            options: [
              'She was flying in an airplane',
              'She was extremely happy and elated',
              'She was confused about the letter',
              'She was sitting on a cloud'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The couple was on cloud nine after the birth of their first child. Despite the sleepless nights, they could not stop staring at the baby and feeling grateful.',
            question: 'Why were the new parents "on cloud nine"?',
            options: [
              'They were exhausted from lack of sleep',
              'They were incredibly happy about their new baby',
              'They were living in a high-rise apartment',
              'They were worried about the future'
            ],
            correctIndex: 1
          },
          {
            scenario: 'After winning the lottery, Mr. Chen was on cloud nine. He immediately called his wife to share the news and they spent the evening dreaming about what they would do with the money.',
            question: 'What does "on cloud nine" describe about Mr. Chen\'s emotional state?',
            options: [
              'He was anxious about the money',
              'He was overwhelmed with joy and happiness',
              'He was suspicious that it was a scam',
              'He was indifferent to winning'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['be on cloud nine', 'feeling like I am on cloud nine', 'been on cloud nine since'],
        similarIdioms: ['over-the-moon'],
        oppositeIdioms: ['down-in-the-dumps']
      }
    ]
  }
];
