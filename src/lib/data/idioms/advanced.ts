import type { IdiomSet } from './types';

export const idiomSetsGroup2: IdiomSet[] = [
  {
    id: 'idioms-relationships',
    title: 'Relationships',
    description: 'Idioms about interpersonal relationships, trust, and social dynamics',
    icon: '🤝',
    category: 'Relationships',
    clbLevel: 7,
    words: [
      {
        id: 'see-eye-to-eye',
        idiom: 'See eye to eye',
        meaning: 'To agree with someone; to share the same opinion or viewpoint',
        example: 'My sister and I don\'t always see eye to eye on politics, but we respect each other\'s views.',
        turkishMeaning: 'Ayni fikirde olmak, ayni gorusu paylasmal',
        clbLevel: 7,
        category: 'Relationships',
        whenToUse: 'Use this idiom when talking about agreement or disagreement between people. It is especially common when discussing whether two people share the same perspective on an issue.',
        contexts: [
          {
            scenario: 'During a team meeting, Sarah and Tom had completely different ideas about how to approach the new marketing campaign. Their manager noticed they were struggling to find common ground. She said, "I know you two don\'t see eye to eye on this, but let\'s try to find a compromise."',
            question: 'What does "don\'t see eye to eye" mean in this context?',
            options: [
              'They cannot look at each other',
              'They disagree on the approach',
              'They have poor eyesight',
              'They are sitting too far apart'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Mark and his father have always seen eye to eye when it comes to business decisions. They started a family restaurant together and have never had a major disagreement about how to run it. Their similar thinking has been key to their success.',
            question: 'What does "seen eye to eye" tell us about Mark and his father?',
            options: [
              'They look alike',
              'They work in the same office',
              'They share the same opinions',
              'They have similar eye colors'
            ],
            correctIndex: 2
          },
          {
            scenario: 'After years of conflict, the two neighbours finally started seeing eye to eye about the shared fence between their properties. They agreed on a design and split the cost evenly. Both were happy with the outcome.',
            question: 'What happened between the neighbours?',
            options: [
              'They started watching each other',
              'They finally reached an agreement',
              'They stopped talking completely',
              'They moved to new houses'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['don\'t see eye to eye', 'finally see eye to eye', 'never see eye to eye on'],
        similarIdioms: ['hit-it-off', 'birds-of-a-feather'],
        oppositeIdioms: ['give-the-cold-shoulder']
      },
      {
        id: 'give-the-cold-shoulder',
        idiom: 'Give the cold shoulder',
        meaning: 'To deliberately ignore someone or treat them in an unfriendly way',
        example: 'Ever since their argument, Lisa has been giving James the cold shoulder at work.',
        turkishMeaning: 'Birini kasitli olarak gormezden gelmek, soguk davranmak',
        clbLevel: 7,
        category: 'Relationships',
        whenToUse: 'Use this idiom when someone is intentionally ignoring or being unfriendly to another person, usually because of a disagreement or hurt feelings.',
        contexts: [
          {
            scenario: 'After Maria forgot to invite her best friend to her birthday party, her friend started giving her the cold shoulder. Maria tried to apologize several times, but her friend wouldn\'t even look at her in the hallway.',
            question: 'What does "giving her the cold shoulder" mean here?',
            options: [
              'Her friend was feeling physically cold',
              'Her friend was deliberately ignoring her',
              'Her friend had a shoulder injury',
              'Her friend was too busy to talk'
            ],
            correctIndex: 1
          },
          {
            scenario: 'When David got the promotion instead of his colleague, some team members started giving him the cold shoulder. They stopped inviting him to lunch and barely spoke to him during meetings. David felt isolated and confused.',
            question: 'How were the team members treating David?',
            options: [
              'They were congratulating him',
              'They were asking for his help',
              'They were intentionally being unfriendly',
              'They were too busy with work'
            ],
            correctIndex: 2
          },
          {
            scenario: 'Jenny gave her neighbour the cold shoulder after he complained about her dog barking. She used to wave and chat with him every morning, but now she just walks past without saying a word.',
            question: 'What changed in Jenny\'s behaviour toward her neighbour?',
            options: [
              'She started being deliberately unfriendly',
              'She moved to a different neighbourhood',
              'She got rid of her dog',
              'She started waving more often'
            ],
            correctIndex: 0
          }
        ],
        collocations: ['give someone the cold shoulder', 'get the cold shoulder', 'cold shoulder treatment'],
        similarIdioms: ['on-thin-ice'],
        oppositeIdioms: ['hit-it-off']
      },
      {
        id: 'bury-the-hatchet',
        idiom: 'Bury the hatchet',
        meaning: 'To make peace and end a quarrel or conflict; to forgive and forget',
        example: 'After years of not speaking, the two brothers finally decided to bury the hatchet at their mother\'s request.',
        turkishMeaning: 'Barismak, kavgayi bitirmek, gecmisi unutmak',
        clbLevel: 7,
        category: 'Relationships',
        whenToUse: 'Use this idiom when two parties decide to stop fighting and reconcile. It implies a deliberate decision to move past a conflict.',
        contexts: [
          {
            scenario: 'The two business partners had been in a legal dispute for three years over the ownership of their company. Finally, they agreed to meet and bury the hatchet. They settled out of court and even shook hands afterward.',
            question: 'What does "bury the hatchet" mean in this situation?',
            options: [
              'They hid a weapon underground',
              'They decided to end their conflict and make peace',
              'They buried important documents',
              'They started a gardening business together'
            ],
            correctIndex: 1
          },
          {
            scenario: 'At the family reunion, Uncle George and Aunt Helen hadn\'t spoken in ten years after a dispute about their father\'s will. Their children convinced them it was time to bury the hatchet. By the end of the evening, they were laughing together like old times.',
            question: 'What happened between Uncle George and Aunt Helen?',
            options: [
              'They started a new argument',
              'They ignored each other all evening',
              'They reconciled and ended their feud',
              'They left the reunion early'
            ],
            correctIndex: 2
          },
          {
            scenario: 'Two rival companies in the same industry had been competing aggressively for years, even running negative ads about each other. Surprisingly, they announced a partnership last week, saying it was time to bury the hatchet and work together for the benefit of their customers.',
            question: 'What are the two companies doing?',
            options: [
              'Continuing to compete aggressively',
              'Ending their rivalry and cooperating',
              'Merging into one company',
              'Going out of business'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['time to bury the hatchet', 'decided to bury the hatchet', 'bury the hatchet and move on'],
        similarIdioms: ['turn-over-a-new-leaf'],
        oppositeIdioms: ['give-the-cold-shoulder']
      },
      {
        id: 'bend-over-backwards',
        idiom: 'Bend over backwards',
        meaning: 'To make a great effort to help or please someone; to go to extreme lengths',
        example: 'The hotel staff bent over backwards to make sure we had a perfect anniversary celebration.',
        turkishMeaning: 'Birisi icin elinden gelenin fazlasini yapmak, cok ozel caba gostermek',
        clbLevel: 7,
        category: 'Relationships',
        whenToUse: 'Use this idiom to describe someone who is making an extraordinary effort to help, accommodate, or please another person. It emphasizes going far beyond what is expected.',
        contexts: [
          {
            scenario: 'When the new employee started, her manager bent over backwards to make her feel welcome. He organized a team lunch, set up all her equipment personally, and even brought her favourite coffee every morning for the first week.',
            question: 'What does "bent over backwards" tell us about the manager?',
            options: [
              'He had back problems from the effort',
              'He did a stretching exercise',
              'He made an extraordinary effort to help',
              'He was forced to do these things'
            ],
            correctIndex: 2
          },
          {
            scenario: 'My parents bent over backwards to help me pay for university. My father worked two jobs and my mother started a small baking business from home. I will always be grateful for their sacrifice.',
            question: 'What did the parents do?',
            options: [
              'They refused to help with tuition',
              'They went to extreme lengths to support their child',
              'They bent down to pick something up',
              'They took out a simple loan'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The customer service representative bent over backwards to resolve my complaint. She personally tracked my missing package, arranged for a replacement, and even gave me a discount on my next order.',
            question: 'How would you describe the representative\'s effort?',
            options: [
              'She did the minimum required',
              'She refused to help',
              'She went far beyond normal expectations',
              'She forwarded the complaint to someone else'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['bend over backwards to help', 'bend over backwards to please', 'bend over backwards for someone'],
        similarIdioms: ['go-the-extra-mile', 'thick-as-thieves'],
        oppositeIdioms: ['give-the-cold-shoulder']
      },
      {
        id: 'thick-as-thieves',
        idiom: 'Thick as thieves',
        meaning: 'Very close friends who share secrets and spend a lot of time together; having a very strong and loyal bond',
        example: 'Those two have been thick as thieves since kindergarten — they do everything together.',
        turkishMeaning: 'Can cigar, birbirine cok yakin, et ve tirnak gibi',
        clbLevel: 7,
        category: 'Relationships',
        whenToUse: 'Use this idiom to describe two or more people who are extremely close and loyal to each other. It emphasizes a deep bond and mutual trust, often implying they share secrets and are inseparable.',
        contexts: [
          {
            scenario: 'Emma and Sophie have been thick as thieves since they were five years old. They went to the same schools, chose the same university, and even ended up working at the same company. Their families joke that they are more like sisters than friends.',
            question: 'What does "thick as thieves" mean about Emma and Sophie?',
            options: [
              'They are criminals together',
              'They are extremely close friends with a deep bond',
              'They look very similar to each other',
              'They steal things from each other'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The two boys next door are thick as thieves. Every afternoon they build forts in the backyard, trade comic books, and whisper secrets to each other. Their mothers have to call them three times before they come inside for dinner.',
            question: 'What does "thick as thieves" describe about the boys?',
            options: [
              'They misbehave and cause trouble together',
              'They share a very close and inseparable friendship',
              'They are planning to steal something',
              'They argue with each other constantly'
            ],
            correctIndex: 1
          },
          {
            scenario: 'At the office, Maria and Chen are thick as thieves. They always have lunch together, support each other in meetings, and are the first to help when one of them is overwhelmed with work. Their colleagues admire their strong friendship.',
            question: 'Why are Maria and Chen described as "thick as thieves"?',
            options: [
              'They hide things from their boss',
              'They have a deep and loyal friendship at work',
              'They compete against each other secretly',
              'They both started at the company on the same day'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['thick as thieves', 'been thick as thieves since', 'those two are thick as thieves'],
        similarIdioms: ['birds-of-a-feather', 'hit-it-off'],
        oppositeIdioms: ['give-the-cold-shoulder', 'on-thin-ice']
      },
      {
        id: 'birds-of-a-feather',
        idiom: 'Birds of a feather',
        meaning: 'People who are similar in character, interests, or opinions tend to spend time together',
        example: 'My two cousins are birds of a feather — they both love hiking, cooking, and reading mystery novels.',
        turkishMeaning: 'Birbirine benzeyen insanlar bir arada olur, tencere yuvarlanmis kapagini bulmus',
        clbLevel: 7,
        category: 'Relationships',
        whenToUse: 'Use this idiom to describe people who are very similar and naturally drawn to each other. The full expression is "birds of a feather flock together."',
        contexts: [
          {
            scenario: 'When Jake joined the chess club, he immediately found a group of friends who shared his passion for strategy games and logic puzzles. His mother smiled and said, "Birds of a feather flock together." She was happy he had found his people.',
            question: 'What does Jake\'s mother mean by "birds of a feather"?',
            options: [
              'Jake\'s friends look like birds',
              'People with similar interests naturally find each other',
              'Jake should join a bird-watching club instead',
              'Jake\'s friends all wear feather accessories'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The three entrepreneurs met at a business conference and instantly became friends. They all had similar ideas about sustainable business practices. Their colleagues joked that they were birds of a feather, always finishing each other\'s sentences.',
            question: 'Why were the entrepreneurs called "birds of a feather"?',
            options: [
              'They wore similar clothing',
              'They were all from the same city',
              'They shared very similar views and connected naturally',
              'They all had the same hairstyle'
            ],
            correctIndex: 2
          },
          {
            scenario: 'My grandmother always says that my husband and I are birds of a feather. We both love gardening, quiet evenings at home, and classical music. She says that is why our marriage works so well.',
            question: 'What does the grandmother mean?',
            options: [
              'The couple looks alike physically',
              'The couple is very different from each other',
              'The couple has similar tastes and personalities',
              'The couple spends too much time together'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['birds of a feather flock together', 'they\'re birds of a feather', 'birds of a feather stick together'],
        similarIdioms: ['see-eye-to-eye', 'hit-it-off'],
        oppositeIdioms: []
      },
      {
        id: 'hit-it-off',
        idiom: 'Hit it off',
        meaning: 'To quickly become good friends with someone; to have an immediate connection',
        example: 'Sarah and my roommate really hit it off at the party — they talked for three hours straight.',
        turkishMeaning: 'Hemen anlasmak, ilk gorusmede iyi gecirmek, hemen kaynasmak',
        clbLevel: 7,
        category: 'Relationships',
        whenToUse: 'Use this idiom when two people meet for the first time and immediately get along well. It suggests an instant and natural connection.',
        contexts: [
          {
            scenario: 'On the first day of university, Emma sat next to a girl named Priya in her chemistry class. They hit it off immediately and spent the whole lunch hour talking about their favourite TV shows. Five years later, they are still best friends.',
            question: 'What does "hit it off immediately" mean?',
            options: [
              'They had a physical fight',
              'They disliked each other at first',
              'They became friends right away',
              'They hit a ball together'
            ],
            correctIndex: 2
          },
          {
            scenario: 'My parents set up a blind date for me with their friend\'s son. I was nervous, but we really hit it off. We discovered we both grew up in the same small town and had many mutual friends.',
            question: 'How did the blind date go?',
            options: [
              'It was a disaster',
              'They connected very well from the start',
              'They argued the whole time',
              'They had nothing in common'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The two CEOs met at a conference and really hit it off. By the end of the evening, they had already planned a joint venture between their companies. Their immediate connection led to a very successful business partnership.',
            question: 'What does "hit it off" describe about the CEOs?',
            options: [
              'They competed against each other',
              'They had a negative first impression',
              'They immediately got along and connected',
              'They hit each other accidentally'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['really hit it off', 'hit it off right away', 'hit it off immediately'],
        similarIdioms: ['see-eye-to-eye', 'birds-of-a-feather'],
        oppositeIdioms: ['give-the-cold-shoulder']
      },
      {
        id: 'go-the-extra-mile',
        idiom: 'Go the extra mile',
        meaning: 'To make more effort than is expected or required; to do more than what is necessary',
        example: 'Our teacher always goes the extra mile by staying after class to help students who are struggling.',
        turkishMeaning: 'Beklenenden fazlasini yapmak, ekstra caba gostermek',
        clbLevel: 7,
        category: 'Relationships',
        whenToUse: 'Use this idiom to describe someone who puts in additional effort beyond what is expected. It is often used in professional and service contexts to praise exceptional dedication.',
        contexts: [
          {
            scenario: 'The wedding planner went the extra mile for the couple. She not only organized the entire ceremony but also personally created hand-made decorations and arranged a surprise video message from the bride\'s grandmother who couldn\'t attend.',
            question: 'What does "went the extra mile" mean here?',
            options: [
              'She drove a long distance to the wedding',
              'She charged extra for her services',
              'She did much more than what was required',
              'She ran a mile as part of the wedding'
            ],
            correctIndex: 2
          },
          {
            scenario: 'When I was sick and missed a week of school, my classmate went the extra mile to help me catch up. She photocopied all her notes, recorded the lectures on her phone, and even came to my house on the weekend to explain difficult topics.',
            question: 'How would you describe the classmate\'s behaviour?',
            options: [
              'She did the minimum to help',
              'She went far beyond what was necessary',
              'She refused to share her notes',
              'She only helped because the teacher asked her to'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The restaurant chef goes the extra mile for customers with food allergies. He personally reviews each order, prepares their meals in a separate area, and comes out to the table to explain every ingredient. Customers love his dedication.',
            question: 'What does "goes the extra mile" tell us about the chef?',
            options: [
              'He walks a long distance to work',
              'He provides exceptional care beyond his basic duties',
              'He charges more for allergy-friendly meals',
              'He only cooks for customers with allergies'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['go the extra mile for someone', 'willing to go the extra mile', 'always goes the extra mile'],
        similarIdioms: ['bend-over-backwards', 'turn-over-a-new-leaf'],
        oppositeIdioms: ['fall-short']
      },
      {
        id: 'turn-over-a-new-leaf',
        idiom: 'Turn over a new leaf',
        meaning: 'To start behaving in a better way; to make a fresh start and change for the better',
        example: 'After his health scare, my father turned over a new leaf and started eating healthy and exercising daily.',
        turkishMeaning: 'Yeni bir sayfa acmak, hayatini degistirmek, daha iyi bir baslanigc yapmak',
        clbLevel: 7,
        category: 'Relationships',
        whenToUse: 'Use this idiom when someone decides to change their behaviour or habits for the better. It often comes after a significant event or realization that motivates the change.',
        contexts: [
          {
            scenario: 'After getting fired for being consistently late, Michael decided to turn over a new leaf. He bought an alarm clock, started going to bed earlier, and arrived at his new job fifteen minutes early every day. His new boss was very impressed.',
            question: 'What does "turn over a new leaf" mean for Michael?',
            options: [
              'He started gardening as a hobby',
              'He changed his behaviour for the better',
              'He turned the pages of a book',
              'He moved to a new city'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The company turned over a new leaf after receiving many customer complaints. They retrained their entire staff, improved their products, and launched a new customer satisfaction program. Within a year, their ratings had improved dramatically.',
            question: 'What did the company do?',
            options: [
              'They closed down permanently',
              'They ignored the complaints',
              'They made significant positive changes',
              'They sued the customers'
            ],
            correctIndex: 2
          },
          {
            scenario: 'My teenage daughter has turned over a new leaf this semester. She used to skip classes and ignore her homework, but now she studies every evening and has even joined the honour roll. I am so proud of her transformation.',
            question: 'What happened with the daughter?',
            options: [
              'She continued her old habits',
              'She transferred to a new school',
              'She decided to drop out',
              'She changed her behaviour and improved significantly'
            ],
            correctIndex: 3
          }
        ],
        collocations: ['turn over a new leaf', 'decided to turn over a new leaf', 'time to turn over a new leaf'],
        similarIdioms: ['bury-the-hatchet'],
        oppositeIdioms: ['hit-rock-bottom']
      },
      {
        id: 'on-thin-ice',
        idiom: 'On thin ice',
        meaning: 'In a risky or precarious situation where one more mistake could lead to serious consequences',
        example: 'After arriving late three days in a row, Jake knew he was on thin ice with his manager.',
        turkishMeaning: 'Ince buz uzerinde yurmek, tehlikeli bir durumda olmak, son sansini kullanmak',
        clbLevel: 7,
        category: 'Relationships',
        whenToUse: 'Use this idiom to warn someone that they are close to getting into serious trouble, often because of repeated mistakes or bad behaviour. It implies that the situation is fragile and could break at any moment.',
        contexts: [
          {
            scenario: 'The employee had already received two written warnings for missing deadlines. His supervisor told him he was on thin ice and that one more late submission would result in termination. He started using a planner to stay organized.',
            question: 'What does "on thin ice" mean for the employee?',
            options: [
              'He works in a very cold office',
              'He is in a dangerous position where another mistake could get him fired',
              'He is skating at a company winter event',
              'He is being praised for his recent improvement'
            ],
            correctIndex: 1
          },
          {
            scenario: 'After breaking curfew twice, the teenager knew she was on thin ice with her parents. They warned her that if it happened again, she would lose her car privileges for the rest of the semester.',
            question: 'Why is the teenager "on thin ice"?',
            options: [
              'She is in physical danger outdoors',
              'She is close to facing serious consequences from her parents',
              'She is walking on a frozen lake near her house',
              'She has already been grounded permanently'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The soccer player was already on a yellow card, which meant he was on thin ice for the rest of the match. The coach warned him to play carefully because another foul would get him sent off and leave the team short-handed.',
            question: 'What does "on thin ice" mean in this sports context?',
            options: [
              'The field was icy and slippery',
              'He was one mistake away from a serious penalty',
              'He was injured and should not be playing',
              'He was the best player on the team'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['on thin ice', 'skating on thin ice', 'treading on thin ice'],
        similarIdioms: ['the-last-straw'],
        oppositeIdioms: ['thick-as-thieves', 'hit-it-off']
      }
    ]
  },
  {
    id: 'idioms-decisions',
    title: 'Decision Making',
    description: 'Idioms about choices, decisions, timing, and judgment',
    icon: '🎯',
    category: 'Decision Making',
    clbLevel: 7,
    words: [
      {
        id: 'the-ball-is-in-your-court',
        idiom: 'The ball is in your court',
        meaning: 'It is your turn to take action or make a decision; the responsibility is now yours',
        example: 'I\'ve made my offer — the ball is in your court now.',
        turkishMeaning: 'Sirada sen varsin, karar sende, hamle sende',
        clbLevel: 7,
        category: 'Decision Making',
        whenToUse: 'Use this idiom when you have done your part and it is now someone else\'s turn to respond, decide, or act. It shifts the responsibility to the other person.',
        contexts: [
          {
            scenario: 'After submitting a detailed business proposal to the client, the sales manager told her team, "We\'ve done everything we can. The ball is in their court now." They would have to wait for the client\'s response before moving forward.',
            question: 'What does "the ball is in their court" mean?',
            options: [
              'The client is playing a sport',
              'The client now needs to make the next move',
              'The sales team made a mistake',
              'The proposal was rejected'
            ],
            correctIndex: 1
          },
          {
            scenario: 'After a long argument, Hanna apologized to her friend and offered to make things right. She told her sister, "I\'ve apologized and offered to fix things. The ball is in her court." Hanna felt she had done all she could.',
            question: 'What is Hanna saying?',
            options: [
              'She wants to play tennis with her friend',
              'She has done her part and her friend must now decide',
              'She is giving up on the friendship',
              'She wants her sister to help'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The hiring manager sent the job offer to the candidate on Monday. By Wednesday, he told HR, "The ball is in his court. We gave him our best offer and now we just need to wait for his answer."',
            question: 'What does the hiring manager mean?',
            options: [
              'The candidate is at a basketball court',
              'They need to increase the salary offer',
              'It is now up to the candidate to respond',
              'The candidate has already accepted'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['the ball is in your court', 'now the ball is in their court', 'the ball\'s in your court'],
        similarIdioms: ['sleep-on-it', 'sit-on-the-fence'],
        oppositeIdioms: []
      },
      {
        id: 'sit-on-the-fence',
        idiom: 'Sit on the fence',
        meaning: 'To remain neutral or undecided; to avoid taking a side in a debate or making a decision',
        example: 'You can\'t sit on the fence forever — eventually you\'ll have to choose which university to attend.',
        turkishMeaning: 'Kararsiz kalmak, taraf tutmamak, karar verememek',
        clbLevel: 7,
        category: 'Decision Making',
        whenToUse: 'Use this idiom to describe someone who refuses to commit to a position or make a choice. It often carries a slightly negative tone, suggesting the person should decide.',
        contexts: [
          {
            scenario: 'During the company vote on whether to switch to remote work, several employees sat on the fence and refused to vote either way. The manager was frustrated because she needed a clear majority to make the policy change.',
            question: 'What does "sat on the fence" mean about the employees?',
            options: [
              'They were sitting outside on a fence',
              'They voted for remote work',
              'They refused to take a side or make a decision',
              'They left the meeting early'
            ],
            correctIndex: 2
          },
          {
            scenario: 'My brother has been sitting on the fence about proposing to his girlfriend for six months now. He says he loves her but isn\'t sure about marriage. Our mother keeps telling him he needs to make up his mind before he loses her.',
            question: 'What is the brother doing?',
            options: [
              'He is planning a proposal',
              'He is unable to make a decision',
              'He has decided not to propose',
              'He is building a fence'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The city council has been sitting on the fence about the new park development for over a year. Residents are growing impatient because no decision has been made and the empty lot continues to deteriorate.',
            question: 'What has the city council been doing?',
            options: [
              'Building a fence around the park',
              'Actively developing the park',
              'Delaying a decision and not committing',
              'Rejecting the park proposal'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['sit on the fence', 'stop sitting on the fence', 'fence-sitter'],
        similarIdioms: ['sleep-on-it'],
        oppositeIdioms: ['jump-the-gun']
      },
      {
        id: 'jump-the-gun',
        idiom: 'Jump the gun',
        meaning: 'To act too soon or too hastily before the right time; to be premature',
        example: 'We jumped the gun by announcing the product before it was fully tested, and we had to deal with many complaints.',
        turkishMeaning: 'Aceleci davranmak, zamani gelmeden harekete gecmek',
        clbLevel: 7,
        category: 'Decision Making',
        whenToUse: 'Use this idiom when someone acts prematurely or makes a decision before having all the necessary information or before the appropriate time. It implies the action was too hasty.',
        contexts: [
          {
            scenario: 'The newspaper jumped the gun by publishing the election results before all the votes had been counted. They later had to issue a correction when the final results showed a different winner. It was an embarrassing mistake.',
            question: 'What did the newspaper do wrong?',
            options: [
              'They printed too many copies',
              'They published results prematurely',
              'They refused to cover the election',
              'They used the wrong font'
            ],
            correctIndex: 1
          },
          {
            scenario: 'I think you\'re jumping the gun by buying baby clothes when you\'ve only been dating for two months. Maybe you should wait until the relationship is more established before planning that far ahead.',
            question: 'What does "jumping the gun" suggest here?',
            options: [
              'The person is being too cautious',
              'The person is acting much too soon',
              'The person is making a good decision',
              'The person is using a weapon'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The company jumped the gun by hiring fifty new employees before the funding was confirmed. When the investment fell through, they had to let go of almost all the new hires. The CEO admitted they should have waited.',
            question: 'What mistake did the company make?',
            options: [
              'They hired too few employees',
              'They acted prematurely before securing the funding',
              'They waited too long to hire',
              'They fired their best employees'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['don\'t jump the gun', 'jumped the gun on', 'jumping the gun a bit'],
        similarIdioms: ['miss-the-boat'],
        oppositeIdioms: ['sit-on-the-fence']
      },
      {
        id: 'miss-the-boat',
        idiom: 'Miss the boat',
        meaning: 'To miss an opportunity by being too slow to act; to fail to take advantage of a chance',
        example: 'If you don\'t apply for the scholarship this week, you\'ll miss the boat — the deadline is Friday.',
        turkishMeaning: 'Firsati kacirmak, gec kalmak, treni kacirmak',
        clbLevel: 7,
        category: 'Decision Making',
        whenToUse: 'Use this idiom when someone fails to seize an opportunity because they waited too long or were too slow to act. It emphasizes that the chance has now passed.',
        contexts: [
          {
            scenario: 'My friend wanted to invest in that tech startup three years ago when the shares were cheap, but he kept hesitating. Now the company is worth millions. He really missed the boat on that one.',
            question: 'What happened to the friend?',
            options: [
              'He made a lot of money',
              'He missed a bus',
              'He failed to take advantage of the investment opportunity',
              'He invested at the right time'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The store had an incredible sale last weekend with 70% off everything. I didn\'t go because I was busy, and by Monday everything good was sold out. I completely missed the boat.',
            question: 'What does "missed the boat" mean here?',
            options: [
              'A boat left without them',
              'They missed a transportation connection',
              'They failed to take advantage of the sale in time',
              'They arrived at the store on time'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The city missed the boat on building affordable housing ten years ago when land was cheap. Now property prices have tripled and the city cannot afford to build enough homes for its growing population.',
            question: 'What did the city fail to do?',
            options: [
              'Build a harbor for boats',
              'Act on an opportunity when conditions were favourable',
              'Reduce property prices',
              'Attract more residents'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['miss the boat on', 'don\'t miss the boat', 'already missed the boat'],
        similarIdioms: ['jump-the-gun'],
        oppositeIdioms: ['rise-to-the-occasion']
      },
      {
        id: 'cross-that-bridge-when-we-come-to-it',
        idiom: 'Cross that bridge when we come to it',
        meaning: 'To deal with a problem only when it actually arises, rather than worrying about it in advance',
        example: 'I know the exam might be difficult, but let\'s cross that bridge when we come to it — no point worrying now.',
        turkishMeaning: 'O zaman dusunuruz, zamani gelince hallederiz, daha erken endiselenmeye gerek yok',
        clbLevel: 7,
        category: 'Decision Making',
        whenToUse: 'Use this idiom to suggest that a potential future problem should not be worried about now. It encourages dealing with issues only when they actually happen.',
        contexts: [
          {
            scenario: 'When planning their road trip, Maya worried about what would happen if their car broke down in a remote area. Her husband said, "Let\'s cross that bridge when we come to it. The car has been running fine and we just had it serviced."',
            question: 'What does the husband mean?',
            options: [
              'They need to find a bridge on their route',
              'They should deal with car problems only if they actually occur',
              'They should cancel the trip',
              'They should buy a new car first'
            ],
            correctIndex: 1
          },
          {
            scenario: 'A student asked her professor, "What if I fail the midterm exam?" The professor replied, "Let\'s cross that bridge when we come to it. Focus on studying now and do your best. There is no point in worrying about failure before you even try."',
            question: 'What is the professor advising?',
            options: [
              'The student should expect to fail',
              'The student should not bother studying',
              'The student should focus on the present and not worry prematurely',
              'The student should drop the course'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The startup founders were debating what would happen if their product didn\'t sell well internationally. Their advisor said, "Let\'s cross that bridge when we come to it. First, let\'s make sure it succeeds in the local market."',
            question: 'What is the advisor suggesting?',
            options: [
              'They should expand internationally immediately',
              'They should build a bridge',
              'They should address potential problems only when they arise',
              'They should abandon the international plan'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['we\'ll cross that bridge when we come to it', 'let\'s cross that bridge', 'cross that bridge later'],
        similarIdioms: ['sleep-on-it', 'take-it-with-a-grain-of-salt'],
        oppositeIdioms: ['jump-the-gun']
      },
      {
        id: 'at-the-end-of-the-day',
        idiom: 'At the end of the day',
        meaning: 'When everything is considered; ultimately; when all factors are taken into account',
        example: 'There are pros and cons to both options, but at the end of the day, you need to do what makes you happy.',
        turkishMeaning: 'Sonuc olarak, her sey dusunuldugunde, nihayetinde',
        clbLevel: 7,
        category: 'Decision Making',
        whenToUse: 'Use this idiom to introduce a final conclusion or the most important point after considering various factors. It signals that you are about to state what truly matters.',
        contexts: [
          {
            scenario: 'The couple argued for weeks about whether to move to the city or stay in the suburbs. They listed the advantages of both. Finally, the wife said, "At the end of the day, we need to choose what\'s best for our children\'s education."',
            question: 'What does "at the end of the day" mean here?',
            options: [
              'They should decide in the evening',
              'When all things are considered, the most important factor is the children',
              'They should wait until the day is over',
              'They should move at the end of the day'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The manager reviewed three candidates for the position. Each had different strengths and weaknesses. He told HR, "At the end of the day, we need someone who fits our team culture, not just someone with the best resume."',
            question: 'What is the manager\'s main point?',
            options: [
              'He wants to decide before closing time',
              'The most important consideration is cultural fit',
              'He dislikes all three candidates',
              'He wants to interview more people'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Students debated whether university or trade school was better. Some argued about salaries, others about job satisfaction. The guidance counsellor concluded, "At the end of the day, the best path is the one that aligns with your personal goals and passions."',
            question: 'What does "at the end of the day" express?',
            options: [
              'School ends in the afternoon',
              'The final and most important conclusion',
              'Students should study only at night',
              'The debate will continue tomorrow'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['at the end of the day', 'but at the end of the day', 'at the end of the day what matters is'],
        similarIdioms: ['take-it-with-a-grain-of-salt'],
        oppositeIdioms: []
      },
      {
        id: 'take-it-with-a-grain-of-salt',
        idiom: 'Take it with a grain of salt',
        meaning: 'To not take something too seriously; to view something with skepticism or caution',
        example: 'Online reviews can be unreliable, so I always take them with a grain of salt.',
        turkishMeaning: 'Bir seyi ihtiyatla karsilamak, her soze inanmamak, supheyle yaklasmal',
        clbLevel: 7,
        category: 'Decision Making',
        whenToUse: 'Use this idiom when advising someone to be cautious about believing something completely. It suggests that the information might not be entirely accurate or reliable.',
        contexts: [
          {
            scenario: 'My colleague told me the company was going to lay off half the staff, but I took it with a grain of salt because he tends to exaggerate everything. I decided to wait for an official announcement before worrying about my job.',
            question: 'What does "took it with a grain of salt" mean?',
            options: [
              'He added salt to his food while listening',
              'He believed the news completely',
              'He was skeptical and didn\'t fully believe it',
              'He was very worried about the news'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The weather forecast predicted snow for the entire week, but locals take those predictions with a grain of salt. The forecast in their area is often wrong, and they prefer to look out the window to check the actual weather.',
            question: 'Why do locals "take it with a grain of salt"?',
            options: [
              'They enjoy snow',
              'They don\'t fully trust the forecasts based on past experience',
              'They want it to snow',
              'They don\'t understand weather reports'
            ],
            correctIndex: 1
          },
          {
            scenario: 'When reading product advertisements that promise amazing results, it\'s wise to take the claims with a grain of salt. Companies often overstate the benefits of their products to attract buyers. Always do your own research before purchasing.',
            question: 'What advice is being given about advertisements?',
            options: [
              'Believe everything ads say',
              'Add salt to the products',
              'Be cautious and skeptical about exaggerated claims',
              'Never buy any advertised products'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['take it with a grain of salt', 'take with a pinch of salt', 'taken with a grain of salt'],
        similarIdioms: ['at-the-end-of-the-day', 'cross-that-bridge-when-we-come-to-it'],
        oppositeIdioms: []
      },
      {
        id: 'sleep-on-it',
        idiom: 'Sleep on it',
        meaning: 'To wait until the next day before making an important decision, so you can think it over carefully',
        example: 'The job offer sounds great, but I\'d like to sleep on it before giving you my answer.',
        turkishMeaning: 'Bir gece dusunmek, acele etmeden karar vermek, uzerinde yatmak',
        clbLevel: 7,
        category: 'Decision Making',
        whenToUse: 'Use this idiom when suggesting that someone should take time to think about a decision rather than rushing into it. It implies that waiting overnight will provide better clarity.',
        contexts: [
          {
            scenario: 'The car salesman was pressuring me to sign the contract right away, but I told him I wanted to sleep on it. I went home, compared prices online, and discovered the next day that I could get a better deal at another dealership.',
            question: 'What does "sleep on it" mean in this situation?',
            options: [
              'He wanted to sleep in the car',
              'He wanted to take time to think before deciding',
              'He was too tired to sign',
              'He fell asleep at the dealership'
            ],
            correctIndex: 1
          },
          {
            scenario: 'When my daughter asked if she could drop out of university to start a business, I didn\'t say yes or no immediately. I told her to sleep on it for a few days and think about the long-term consequences before making such a big decision.',
            question: 'What advice did the parent give?',
            options: [
              'Drop out immediately',
              'Never start a business',
              'Take time to think carefully before deciding',
              'Go to sleep early every night'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The board of directors couldn\'t agree on the merger proposal during the meeting. The chairperson suggested they all sleep on it and reconvene the next morning with fresh perspectives. The strategy worked, and they reached a consensus by noon.',
            question: 'Why did the chairperson suggest sleeping on it?',
            options: [
              'The members were physically exhausted',
              'To give everyone time to think and gain clarity',
              'To avoid making any decision at all',
              'The meeting room was being cleaned'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['let me sleep on it', 'why don\'t you sleep on it', 'I need to sleep on it'],
        similarIdioms: ['sit-on-the-fence', 'the-ball-is-in-your-court'],
        oppositeIdioms: ['jump-the-gun']
      },
      {
        id: 'put-all-eggs-in-one-basket',
        idiom: 'Put all eggs in one basket',
        meaning: 'To risk everything on a single plan or investment; to depend entirely on one thing for success',
        example: 'Don\'t put all your eggs in one basket — apply to several universities, not just your top choice.',
        turkishMeaning: 'Her seyi bir seye baglamak, tum riskleri tek bir yere yigmak',
        clbLevel: 7,
        category: 'Decision Making',
        whenToUse: 'Use this idiom to warn against concentrating all resources, efforts, or hopes on a single option. It is usually used as advice to diversify and reduce risk.',
        contexts: [
          {
            scenario: 'My financial advisor warned me not to put all my eggs in one basket. Instead of investing all my savings in one company\'s stock, she recommended spreading my investments across different sectors to minimize risk.',
            question: 'What is the financial advisor\'s message?',
            options: [
              'Buy eggs from different stores',
              'Invest everything in one strong company',
              'Spread investments to reduce risk',
              'Stop investing completely'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The small business owner put all her eggs in one basket by relying entirely on a single client for revenue. When that client switched to a competitor, she lost 100% of her income overnight and had to close her business.',
            question: 'What was the business owner\'s mistake?',
            options: [
              'She had too many clients',
              'She relied entirely on one source of income',
              'She expanded too quickly',
              'She charged too much'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Tom applied to only one medical school because it was his dream school. His guidance counsellor warned him not to put all his eggs in one basket. When he got rejected, he had no backup plan and had to wait another year to apply again.',
            question: 'What lesson did Tom learn?',
            options: [
              'He should have studied harder',
              'Medical school is not worth it',
              'He should have applied to multiple schools',
              'His counsellor gave bad advice'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['don\'t put all your eggs in one basket', 'putting all eggs in one basket', 'never put all eggs in one basket'],
        similarIdioms: ['jump-the-gun', 'miss-the-boat'],
        oppositeIdioms: []
      },
      {
        id: 'the-last-straw',
        idiom: 'The last straw',
        meaning: 'The final problem or annoyance in a series that makes a situation unbearable and forces action',
        example: 'Being late to work again was the last straw — his boss fired him on the spot.',
        turkishMeaning: 'Bardagi tasiran son damla, sabirinin sonuna gelmek',
        clbLevel: 7,
        category: 'Decision Making',
        whenToUse: 'Use this idiom to describe the final event in a series of problems that causes someone to finally react, often by making a drastic decision. It implies accumulated frustration.',
        contexts: [
          {
            scenario: 'The restaurant had many problems: slow service, cold food, and rude staff. But when they charged us twice for the same meal, that was the last straw. We decided to never eat there again and left a negative review.',
            question: 'What does "the last straw" mean here?',
            options: [
              'The restaurant ran out of straws for drinks',
              'The final problem that made them decide to never return',
              'The first issue they experienced',
              'A minor inconvenience they overlooked'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Maria had been patient with her noisy upstairs neighbours for months. She tolerated the loud music, the late-night parties, and the stomping. But when they flooded her bathroom at 3 AM, that was the last straw. She filed a formal complaint with the building manager.',
            question: 'Why was the flooding "the last straw" for Maria?',
            options: [
              'It was the first time they bothered her',
              'It was a minor issue she could ignore',
              'It was the final incident after many problems that pushed her to act',
              'She enjoys filing complaints'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The employee had put up with poor management, low pay, and no vacation days. When the company cancelled the annual bonus without warning, it was the last straw. He handed in his resignation the next morning.',
            question: 'What does "the last straw" indicate about the employee?',
            options: [
              'He was angry about only one issue',
              'He had accumulated frustrations and this was the final one',
              'He found straw in his office',
              'He was happy with the decision'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['the last straw', 'that was the last straw', 'the straw that broke the camel\'s back'],
        similarIdioms: ['hit-rock-bottom'],
        oppositeIdioms: ['a-blessing-in-disguise']
      }
    ]
  },
  {
    id: 'idioms-success-failure',
    title: 'Success & Failure',
    description: 'Idioms about achieving goals, overcoming obstacles, and dealing with setbacks',
    icon: '🏆',
    category: 'Success & Failure',
    clbLevel: 8,
    words: [
      {
        id: 'back-to-the-drawing-board',
        idiom: 'Back to the drawing board',
        meaning: 'To start planning something again from the beginning because the previous attempt failed',
        example: 'Our first app design was rejected by users, so it\'s back to the drawing board for the team.',
        turkishMeaning: 'Bastan baslamak, yeniden planlamak, sifirdan ele almak',
        clbLevel: 8,
        category: 'Success & Failure',
        whenToUse: 'Use this idiom when a plan or attempt has failed and you need to start over with a new approach. It implies accepting failure and being willing to try again.',
        contexts: [
          {
            scenario: 'The engineering team spent six months developing a new battery for electric cars, but it failed all safety tests. The project manager said, "It\'s back to the drawing board, everyone. We need a completely different design." The team was disappointed but determined.',
            question: 'What does "back to the drawing board" mean?',
            options: [
              'The team needs to draw more diagrams',
              'They need to start the design process over from scratch',
              'They should buy a new drawing board',
              'The project is cancelled permanently'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The marketing campaign generated almost no new customers despite a large budget. The marketing director admitted it was back to the drawing board. She gathered her team to brainstorm entirely new strategies that would resonate better with their target audience.',
            question: 'What is the marketing director doing?',
            options: [
              'Continuing with the same campaign',
              'Firing her entire team',
              'Starting over with a new plan after the old one failed',
              'Drawing pictures on a whiteboard'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The chef tried a new recipe for the restaurant\'s menu, but customers didn\'t like it at all. After receiving several complaints, he said, "Well, it\'s back to the drawing board." He spent the weekend experimenting with new flavour combinations.',
            question: 'What will the chef do next?',
            options: [
              'Keep the same recipe',
              'Close the restaurant',
              'Start developing a new recipe from the beginning',
              'Stop cooking altogether'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['back to the drawing board', 'it\'s back to the drawing board', 'go back to the drawing board'],
        similarIdioms: ['hit-rock-bottom', 'fall-short'],
        oppositeIdioms: ['break-new-ground']
      },
      {
        id: 'light-at-the-end-of-the-tunnel',
        idiom: 'Light at the end of the tunnel',
        meaning: 'A sign of hope or improvement after a long period of difficulty or hardship',
        example: 'After months of chemotherapy, the doctor said there was light at the end of the tunnel — the treatment was working.',
        turkishMeaning: 'Tunelin ucundaki isik, zor bir donemin sonunda umut isareti',
        clbLevel: 8,
        category: 'Success & Failure',
        whenToUse: 'Use this idiom to express that a difficult situation is finally starting to improve or that there is hope on the horizon. It provides encouragement during tough times.',
        contexts: [
          {
            scenario: 'The family had been struggling financially for two years after the father lost his job. When he finally received a job offer from a reputable company, his wife said, "I can finally see the light at the end of the tunnel." She cried tears of relief.',
            question: 'What does "light at the end of the tunnel" mean here?',
            options: [
              'They can see an actual light',
              'They are driving through a tunnel',
              'There is hope that their difficult situation will improve',
              'They are moving to a brighter house'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The country went through a severe economic recession for three years. When GDP growth turned positive for the first time, economists said there was finally light at the end of the tunnel. Citizens were cautiously optimistic about the future.',
            question: 'What are the economists saying?',
            options: [
              'A new tunnel is being built',
              'There are signs the economy is starting to recover',
              'The recession will last forever',
              'People should buy flashlights'
            ],
            correctIndex: 1
          },
          {
            scenario: 'After four gruelling years of medical school, the student could finally see the light at the end of the tunnel. She had only one more semester of exams before graduating. The years of hard work were almost over.',
            question: 'What does "light at the end of the tunnel" mean for the student?',
            options: [
              'She studies in a dark room',
              'She can see that the end of her difficult journey is near',
              'She failed her exams',
              'She needs a lamp for studying'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['see the light at the end of the tunnel', 'there\'s light at the end of the tunnel', 'finally see the light'],
        similarIdioms: ['a-blessing-in-disguise', 'rise-to-the-occasion'],
        oppositeIdioms: ['hit-rock-bottom']
      },
      {
        id: 'a-blessing-in-disguise',
        idiom: 'A blessing in disguise',
        meaning: 'Something that seems bad at first but turns out to have a good result or benefit',
        example: 'Losing that job was a blessing in disguise — it pushed me to start my own successful business.',
        turkishMeaning: 'Kilik degistirmis bir nimet, ilk basta kotu gorunen ama sonra iyi sonuc veren olay',
        clbLevel: 8,
        category: 'Success & Failure',
        whenToUse: 'Use this idiom when a negative event unexpectedly leads to a positive outcome. It suggests that sometimes bad things happen for a good reason.',
        contexts: [
          {
            scenario: 'When Sarah\'s flight was cancelled due to bad weather, she was furious. But it turned out to be a blessing in disguise because she met her future husband at the airport hotel while waiting for the next flight. They have been married for ten years now.',
            question: 'Why was the cancelled flight "a blessing in disguise"?',
            options: [
              'She got a refund for the ticket',
              'Something bad led to something wonderful — meeting her husband',
              'She enjoyed staying at the hotel',
              'The weather improved the next day'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Getting rejected from his first-choice university was a blessing in disguise for Marcus. He ended up attending a smaller school where he received more personal attention from professors and discovered his true passion for marine biology.',
            question: 'What does "a blessing in disguise" mean in Marcus\'s story?',
            options: [
              'The rejection was purely negative',
              'He received a scholarship',
              'What seemed like a setback actually led to a better outcome',
              'He disguised himself to get into the university'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The factory fire seemed like a disaster for the small company. However, it turned out to be a blessing in disguise. The insurance money allowed them to rebuild with modern equipment, and their production capacity tripled within a year.',
            question: 'Why was the factory fire "a blessing in disguise"?',
            options: [
              'The fire was small and caused no damage',
              'The disaster ultimately led to significant improvements',
              'They wanted to close the factory anyway',
              'The fire was started on purpose'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['a blessing in disguise', 'turned out to be a blessing in disguise', 'it was a blessing in disguise'],
        similarIdioms: ['light-at-the-end-of-the-tunnel', 'turn-the-tables'],
        oppositeIdioms: ['the-last-straw']
      },
      {
        id: 'hit-rock-bottom',
        idiom: 'Hit rock bottom',
        meaning: 'To reach the lowest possible point in a situation; to be at the worst stage',
        example: 'After losing his home and his savings, he felt he had hit rock bottom, but that\'s when he decided to rebuild his life.',
        turkishMeaning: 'Dibi boylamak, en dip noktaya ulasmak, en kotu duruma dusmek',
        clbLevel: 8,
        category: 'Success & Failure',
        whenToUse: 'Use this idiom to describe someone or something at their absolute lowest point. It often implies that things can only get better from there, or that the experience motivated a change.',
        contexts: [
          {
            scenario: 'The former CEO hit rock bottom after his company went bankrupt and his wife left him. He was living in a small apartment with almost nothing. But that experience motivated him to start over, and within five years he built an even more successful company.',
            question: 'What does "hit rock bottom" mean here?',
            options: [
              'He hit a rock at the bottom of a pool',
              'He reached the lowest point in his life',
              'He found a rock collection',
              'He moved to a rocky area'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The country\'s economy hit rock bottom during the crisis. Unemployment reached 25%, businesses closed daily, and people struggled to afford basic necessities. It took nearly a decade for the economy to fully recover.',
            question: 'What does "hit rock bottom" describe about the economy?',
            options: [
              'The economy was performing well',
              'The economy reached its worst possible state',
              'A geological event occurred',
              'The economy was slowly declining'
            ],
            correctIndex: 1
          },
          {
            scenario: 'My mental health hit rock bottom during the pandemic. I was isolated, anxious, and could barely get out of bed. Seeking help from a therapist was the turning point that started my recovery journey.',
            question: 'What does "hit rock bottom" express about the person\'s mental health?',
            options: [
              'It was slightly worse than usual',
              'It was at its absolute worst point',
              'It was improving steadily',
              'It was unaffected by the pandemic'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['hit rock bottom', 'reach rock bottom', 'when you hit rock bottom'],
        similarIdioms: ['back-to-the-drawing-board', 'the-last-straw'],
        oppositeIdioms: ['light-at-the-end-of-the-tunnel']
      },
      {
        id: 'turn-the-tables',
        idiom: 'Turn the tables',
        meaning: 'To reverse a situation so that you gain the advantage over someone who previously had the upper hand',
        example: 'The underdog team turned the tables in the second half and won the championship game.',
        turkishMeaning: 'Durumu tersine cevirmek, dezavantajli durumdan avantajli duruma gecmek',
        clbLevel: 8,
        category: 'Success & Failure',
        whenToUse: 'Use this idiom when someone who was losing or at a disadvantage manages to reverse the situation and gain the upper hand. It emphasizes a dramatic shift in power or fortune.',
        contexts: [
          {
            scenario: 'The defence lawyer turned the tables during the trial by presenting new evidence that proved the defendant was innocent. The prosecution, which had seemed certain to win, was left scrambling to respond.',
            question: 'What does "turned the tables" mean in this legal context?',
            options: [
              'The lawyer moved the furniture in the courtroom',
              'The lawyer reversed the situation in favour of the defendant',
              'The lawyer gave up the case',
              'The judge ended the trial'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The small local bookstore was losing customers to a big online retailer. They turned the tables by hosting community events, offering personal book recommendations, and creating a cosy reading cafe. Within a year, their sales had doubled.',
            question: 'How did the bookstore "turn the tables"?',
            options: [
              'They closed down permanently',
              'They became an online retailer',
              'They reversed their disadvantage and became successful',
              'They moved to a bigger location'
            ],
            correctIndex: 2
          },
          {
            scenario: 'In the chess tournament, the young player was losing badly in the first half of the match. But she turned the tables with a brilliant series of unexpected moves that left her experienced opponent completely surprised. She won the match convincingly.',
            question: 'What happened when the player "turned the tables"?',
            options: [
              'She flipped the chess board',
              'She changed from losing to winning',
              'She quit the tournament',
              'She asked for help from the audience'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['turn the tables on', 'turned the tables completely', 'tables have turned'],
        similarIdioms: ['rise-to-the-occasion', 'a-blessing-in-disguise'],
        oppositeIdioms: ['fall-short']
      },
      {
        id: 'rise-to-the-occasion',
        idiom: 'Rise to the occasion',
        meaning: 'To perform well or show courage when facing a difficult challenge or important moment',
        example: 'Despite having no experience, she rose to the occasion and delivered an outstanding presentation to the board.',
        turkishMeaning: 'Durumun gerektirdigi sekilde davranmak, zorlugun ustesinden basariyla gelmek',
        clbLevel: 8,
        category: 'Success & Failure',
        whenToUse: 'Use this idiom to describe someone who performs exceptionally well when faced with a challenge or high-pressure situation. It suggests showing unexpected strength or ability.',
        contexts: [
          {
            scenario: 'When the lead surgeon fell ill just before a critical operation, the junior doctor rose to the occasion and performed the surgery successfully. The entire hospital staff was amazed by her composure and skill under pressure.',
            question: 'What does "rose to the occasion" tell us about the junior doctor?',
            options: [
              'She refused to do the surgery',
              'She performed brilliantly under difficult circumstances',
              'She called in another surgeon',
              'She postponed the operation'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The substitute goalkeeper rose to the occasion during the cup final. Despite being called up at the last minute, she made several incredible saves and was named player of the match. The fans gave her a standing ovation.',
            question: 'How did the substitute goalkeeper perform?',
            options: [
              'She was nervous and performed poorly',
              'She excelled when it mattered most',
              'She asked to be substituted',
              'She scored an own goal'
            ],
            correctIndex: 1
          },
          {
            scenario: 'After the CEO resigned unexpectedly, the vice president rose to the occasion. She took control of the company during a turbulent period, reassured investors, and kept the business running smoothly until a permanent replacement was found.',
            question: 'What does "rose to the occasion" mean here?',
            options: [
              'She stood up during a meeting',
              'She handled the challenging situation with competence and leadership',
              'She resigned along with the CEO',
              'She was promoted automatically'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['rise to the occasion', 'rose to the occasion beautifully', 'always rises to the occasion'],
        similarIdioms: ['turn-the-tables', 'save-the-day'],
        oppositeIdioms: ['fall-short']
      },
      {
        id: 'fall-short',
        idiom: 'Fall short',
        meaning: 'To fail to reach a required or expected standard, goal, or amount',
        example: 'The charity drive fell short of its target by $5,000, but the organizers were still grateful for all the donations.',
        turkishMeaning: 'Hedefe ulasamamak, beklentileri karsilayamamak, yetersiz kalmak',
        clbLevel: 8,
        category: 'Success & Failure',
        whenToUse: 'Use this idiom when something or someone does not meet the expected standard or goal. It implies falling just below what was needed, not a complete failure.',
        contexts: [
          {
            scenario: 'The student studied hard for the entrance exam but fell short of the required score by just two points. She was devastated but decided to retake the exam the following semester. Her teacher encouraged her not to give up.',
            question: 'What does "fell short" mean in this context?',
            options: [
              'She passed the exam easily',
              'She didn\'t quite reach the required score',
              'She fell down during the exam',
              'She scored much lower than expected'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The new smartphone fell short of expectations despite months of hype. The battery life was poor, the camera quality was average, and the price was too high. Reviewers gave it disappointing ratings compared to competitors.',
            question: 'What does "fell short of expectations" mean?',
            options: [
              'The phone was shorter than other phones',
              'The phone did not meet the expected standards',
              'The phone was unexpectedly excellent',
              'The phone fell off a shelf'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The company\'s quarterly revenue fell short of the projected targets for the third time in a row. The board of directors called an emergency meeting to discuss what changes needed to be made to improve performance.',
            question: 'What happened with the company\'s revenue?',
            options: [
              'It exceeded all projections',
              'It met the targets exactly',
              'It did not reach the expected amount',
              'It was not measured at all'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['fall short of expectations', 'fall short of the target', 'fell short by a narrow margin'],
        similarIdioms: ['back-to-the-drawing-board', 'hit-rock-bottom'],
        oppositeIdioms: ['rise-to-the-occasion']
      },
      {
        id: 'make-ends-meet',
        idiom: 'Make ends meet',
        meaning: 'To earn just enough money to cover basic living expenses; to manage financially with difficulty',
        example: 'After losing her second job, she struggled to make ends meet and had to cut back on everything.',
        turkishMeaning: 'Gecinebilmek, ayagi yorgana gore uzatmak, zar zor gecimini saglamak',
        clbLevel: 8,
        category: 'Success & Failure',
        whenToUse: 'Use this idiom to describe a situation where someone is barely managing to pay for their basic needs. It suggests financial difficulty without being completely broke.',
        contexts: [
          {
            scenario: 'As a single mother with three children, Rosa struggles to make ends meet on her part-time salary. She carefully budgets every dollar, buys only necessities, and often skips meals so her children can eat. Despite the hardship, she never complains.',
            question: 'What does "make ends meet" tell us about Rosa?',
            options: [
              'She is wealthy',
              'She barely earns enough to cover basic expenses',
              'She enjoys budgeting as a hobby',
              'She has plenty of extra money'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Many university students can barely make ends meet. Between tuition, rent, textbooks, and food, their budgets are incredibly tight. Many take on part-time jobs just to cover their basic expenses.',
            question: 'What does "make ends meet" describe about the students?',
            options: [
              'They are earning more than they need',
              'They are struggling to pay for their basic needs',
              'They are saving money for a vacation',
              'They have generous scholarships'
            ],
            correctIndex: 1
          },
          {
            scenario: 'After retiring, Mr. and Mrs. Patel found it difficult to make ends meet on their small pension. They downsized their home, cancelled subscriptions, and grew vegetables in their garden to reduce grocery costs.',
            question: 'Why are the Patels having trouble "making ends meet"?',
            options: [
              'Their pension is too small to cover living expenses comfortably',
              'They are spending too much on luxuries',
              'They forgot to pay their bills',
              'They don\'t know how to manage money'
            ],
            correctIndex: 0
          }
        ],
        collocations: ['struggle to make ends meet', 'barely make ends meet', 'can\'t make ends meet'],
        similarIdioms: ['hit-rock-bottom'],
        oppositeIdioms: ['break-new-ground']
      },
      {
        id: 'break-new-ground',
        idiom: 'Break new ground',
        meaning: 'To do something innovative or pioneering; to make new discoveries or introduce new methods',
        example: 'The research team broke new ground in cancer treatment with their revolutionary gene therapy approach.',
        turkishMeaning: 'Cigir acmak, yeni bir alan kesfetmek, oncurluk yapmak',
        clbLevel: 8,
        category: 'Success & Failure',
        whenToUse: 'Use this idiom to describe achievements that are innovative, original, or the first of their kind. It emphasizes doing something that has never been done before.',
        contexts: [
          {
            scenario: 'The architect broke new ground with her design for a fully self-sustaining skyscraper. The building generates its own electricity, recycles all water, and produces food on its rooftop farms. No one had ever attempted anything like it before.',
            question: 'What does "broke new ground" mean here?',
            options: [
              'She dug a hole for the foundation',
              'She created something completely innovative and unprecedented',
              'She demolished an old building',
              'She broke the ground during construction'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The filmmaker broke new ground by creating the first entirely AI-generated feature film. Critics praised its groundbreaking visual style, and it opened up an entirely new genre of cinema. The industry was forever changed.',
            question: 'Why is the filmmaker described as "breaking new ground"?',
            options: [
              'She filmed in a remote outdoor location',
              'She did something no one had ever done before in cinema',
              'She broke a camera during filming',
              'She made a documentary about farming'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The university\'s medical department broke new ground with a new treatment for Alzheimer\'s disease. Their clinical trials showed remarkable results, and the scientific community hailed it as the most significant breakthrough in decades.',
            question: 'What does "broke new ground" indicate about the treatment?',
            options: [
              'It was a standard treatment already in use',
              'It was a pioneering and innovative discovery',
              'It failed all clinical trials',
              'It was developed underground'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['break new ground in', 'groundbreaking research', 'broke new ground with'],
        similarIdioms: ['rise-to-the-occasion', 'save-the-day'],
        oppositeIdioms: ['back-to-the-drawing-board']
      },
      {
        id: 'save-the-day',
        idiom: 'Save the day',
        meaning: 'To prevent a situation from going badly; to rescue a situation at a critical moment',
        example: 'When the power went out during the wedding, the DJ saved the day by setting up a battery-powered speaker.',
        turkishMeaning: 'Gunu kurtarmak, kritik bir anda durumu kurtarmak',
        clbLevel: 8,
        category: 'Success & Failure',
        whenToUse: 'Use this idiom when someone or something prevents a disaster or solves a critical problem just in time. It implies heroic or timely intervention.',
        contexts: [
          {
            scenario: 'The caterer cancelled just two days before the company\'s annual gala dinner for 200 guests. The office manager saved the day by calling every restaurant in town and finding one that could handle the event on short notice. Everyone praised her quick thinking.',
            question: 'How did the office manager "save the day"?',
            options: [
              'She cancelled the event',
              'She cooked all the food herself',
              'She resolved a critical problem just in time',
              'She saved money on the catering budget'
            ],
            correctIndex: 2
          },
          {
            scenario: 'During the school play, the main actor forgot his lines and froze on stage. His co-star saved the day by improvising dialogue that guided him back to the script. The audience never even noticed there was a problem.',
            question: 'What does "saved the day" mean in this context?',
            options: [
              'The co-star ended the play early',
              'The co-star prevented the performance from being ruined',
              'The co-star saved the date on her calendar',
              'The co-star replaced the main actor'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The city was about to run out of clean water during the drought. A team of engineers saved the day by quickly building an emergency water purification system that provided safe drinking water for the entire population.',
            question: 'How did the engineers "save the day"?',
            options: [
              'They predicted the drought in advance',
              'They provided a critical solution at a crucial moment',
              'They moved the city to a new location',
              'They stored water in their own homes'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['save the day', 'saved the day at the last minute', 'here to save the day'],
        similarIdioms: ['rise-to-the-occasion', 'turn-the-tables'],
        oppositeIdioms: ['fall-short']
      }
    ]
  }
];
