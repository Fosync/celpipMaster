import type { IdiomSet } from './types';

export const idiomSetsGroup3: IdiomSet[] = [
  {
    id: 'idioms-time',
    title: 'Time',
    description: 'Idioms related to time and timing',
    icon: '⏰',
    category: 'Time',
    clbLevel: 6,
    words: [
      {
        id: 'against-the-clock',
        idiom: 'Against the clock',
        meaning: 'Working with very little time; in a hurry to finish before a deadline',
        example: 'The team was working against the clock to finish the project before Friday.',
        turkishMeaning: 'Zamanla yaris halinde, son dakikaya karsi',
        clbLevel: 6,
        category: 'Time',
        whenToUse: 'Use when describing a situation where someone is rushed or has limited time to complete something.',
        contexts: [
          {
            scenario: 'The construction crew was working against the clock to repair the highway before the morning rush hour. They had been given only six hours to complete what would normally be a two-day job.',
            question: 'What does "working against the clock" mean here?',
            options: [
              'They were looking at the clock frequently',
              'They were racing to finish before a deadline',
              'They were working at night',
              'They were protesting about work hours'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Sarah was racing against the clock to submit her university application. The deadline was at midnight and she still had to write her personal essay.',
            question: 'What does "racing against the clock" suggest about Sarah?',
            options: [
              'She enjoys running as a hobby',
              'She has very little time left',
              'She is competing with other students',
              'She broke her watch'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The doctors worked against the clock to save the patient after the accident. Every minute was critical for a successful outcome.',
            question: 'Why were the doctors working "against the clock"?',
            options: [
              'The hospital was closing soon',
              'They wanted to go home early',
              'Time was running out to save the patient',
              'They had a clock in the operating room'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['race against the clock', 'work against the clock', 'fight against the clock'],
        similarIdioms: ['in-the-nick-of-time', 'around-the-clock'],
        oppositeIdioms: ['kill-time']
      },
      {
        id: 'around-the-clock',
        idiom: 'Around the clock',
        meaning: 'Continuously, without stopping; all day and all night',
        example: 'The hospital staff worked around the clock during the emergency.',
        turkishMeaning: 'Gece gunduz, 24 saat boyunca, durmaksizin',
        clbLevel: 6,
        category: 'Time',
        whenToUse: 'Use when describing non-stop activity that continues for an extended period, day and night.',
        contexts: [
          {
            scenario: 'After the earthquake, rescue teams worked around the clock searching for survivors beneath the rubble. They took turns in shifts so that the search never stopped.',
            question: 'What does "worked around the clock" mean here?',
            options: [
              'They worked near a large clock tower',
              'They worked continuously without stopping',
              'They worked only during the day',
              'They worked in a circular pattern'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The convenience store near my apartment is open around the clock. No matter what time I go, the lights are always on and I can buy what I need.',
            question: 'What does "open around the clock" tell you about the store?',
            options: [
              'It is open 24 hours a day',
              'It has a clock on its sign',
              'It opens only at certain hours',
              'It is located next to a clock shop'
            ],
            correctIndex: 0
          },
          {
            scenario: 'The security team monitors the building around the clock using cameras and patrols. There is always someone watching, even at three in the morning.',
            question: 'What does "around the clock" monitoring mean?',
            options: [
              'Monitoring only during business hours',
              'Monitoring that happens every hour on the hour',
              'Continuous monitoring at all times',
              'Monitoring done while walking in circles'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['work around the clock', 'open around the clock', 'monitor around the clock'],
        similarIdioms: ['against-the-clock', 'time-and-again'],
        oppositeIdioms: ['from-time-to-time']
      },
      {
        id: 'in-the-nick-of-time',
        idiom: 'In the nick of time',
        meaning: 'Just in time; at the last possible moment before it is too late',
        example: 'We arrived at the airport in the nick of time and caught our flight.',
        turkishMeaning: 'Son anda, tam zamaninda, kilin ucunda',
        clbLevel: 6,
        category: 'Time',
        whenToUse: 'Use when something happens at the very last moment, just barely in time to prevent a problem.',
        contexts: [
          {
            scenario: 'The firefighters arrived in the nick of time to save the family from the burning house. Just moments later, the roof collapsed completely.',
            question: 'What does "in the nick of time" mean here?',
            options: [
              'They arrived too late to help',
              'They arrived at exactly the scheduled time',
              'They arrived just barely before it was too late',
              'They arrived after being called by Nick'
            ],
            correctIndex: 2
          },
          {
            scenario: 'Lisa remembered her mother\'s birthday in the nick of time. She rushed to the flower shop just before it closed and managed to buy a bouquet to bring to dinner.',
            question: 'What does "in the nick of time" suggest?',
            options: [
              'Lisa planned everything perfectly in advance',
              'Lisa almost forgot but remembered at the last moment',
              'Lisa was too late to buy flowers',
              'Lisa always remembers birthdays easily'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The student submitted his essay in the nick of time. The online portal closed at midnight, and his submission was recorded at 11:59 PM.',
            question: 'What does "in the nick of time" tell us about the submission?',
            options: [
              'It was submitted well before the deadline',
              'It was submitted after the deadline',
              'It was submitted at the very last moment',
              'It was submitted by someone named Nick'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['arrive in the nick of time', 'just in the nick of time', 'save something in the nick of time'],
        similarIdioms: ['against-the-clock'],
        oppositeIdioms: ['ahead-of-time']
      },
      {
        id: 'time-flies',
        idiom: 'Time flies',
        meaning: 'Time seems to pass very quickly, especially when you are enjoying yourself',
        example: 'I can\'t believe it\'s already December — time flies!',
        turkishMeaning: 'Zaman cok cabuk geciyor, zaman ucuyor',
        clbLevel: 6,
        category: 'Time',
        whenToUse: 'Use when you want to express surprise at how quickly time has passed, often when having fun or being busy.',
        contexts: [
          {
            scenario: 'Maria started her new job six months ago, but it feels like she just had her first day yesterday. She told her friend, "Time really flies when you love what you do."',
            question: 'What does Maria mean by "time really flies"?',
            options: [
              'She wants time to go faster',
              'She feels time has passed very quickly',
              'She thinks time has stopped',
              'She is always late to work'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The children were playing at the park and didn\'t realize it was already dark outside. Their mother came to pick them up and said, "Time flies when you\'re having fun, doesn\'t it?"',
            question: 'What does the mother mean?',
            options: [
              'The children should learn to tell time',
              'Time seemed to pass quickly because they were enjoying themselves',
              'The park closes too early',
              'Flying is a fun activity'
            ],
            correctIndex: 1
          },
          {
            scenario: 'John looked at old photos from university and couldn\'t believe it had been twenty years since graduation. He sighed and said, "Time flies." He still remembered those days vividly.',
            question: 'Why did John say "time flies"?',
            options: [
              'He wishes he could fly back in time',
              'He is surprised how many years have passed so quickly',
              'He thinks twenty years is a short time objectively',
              'He forgot when he graduated'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['time flies when you\'re having fun', 'how time flies', 'time really flies'],
        similarIdioms: ['in-no-time'],
        oppositeIdioms: ['kill-time']
      },
      {
        id: 'kill-time',
        idiom: 'Kill time',
        meaning: 'To do something unimportant while waiting for something else; to pass time idly',
        example: 'I was just killing time at the mall while waiting for my appointment.',
        turkishMeaning: 'Vakit oldermek, bos vakit gecirmek',
        clbLevel: 6,
        category: 'Time',
        whenToUse: 'Use when you want to describe doing an activity just to pass the time, not because it is productive or important.',
        contexts: [
          {
            scenario: 'David\'s flight was delayed by three hours, so he killed time by browsing shops at the airport and reading a magazine. He wasn\'t interested in buying anything.',
            question: 'What does "killed time" mean here?',
            options: [
              'He was very productive at the airport',
              'He destroyed a clock',
              'He did unimportant activities to pass the waiting period',
              'He slept for three hours'
            ],
            correctIndex: 2
          },
          {
            scenario: 'While waiting for her friend to arrive at the restaurant, Anna killed time by scrolling through social media on her phone. She wasn\'t really paying attention to anything specific.',
            question: 'What was Anna doing?',
            options: [
              'Working on an important project',
              'Passing time with an unimportant activity while waiting',
              'Ignoring her friend on purpose',
              'Learning something new online'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The students had an hour between classes and needed to kill time. They sat in the cafeteria, chatted, and played card games until their next lecture began.',
            question: 'Why were the students "killing time"?',
            options: [
              'They had free time they needed to fill',
              'They were studying for exams',
              'They wanted to skip class',
              'They were being punished by a teacher'
            ],
            correctIndex: 0
          }
        ],
        collocations: ['kill time by doing something', 'just killing time', 'ways to kill time'],
        similarIdioms: ['from-time-to-time'],
        oppositeIdioms: ['against-the-clock', 'time-flies']
      },
      {
        id: 'behind-the-times',
        idiom: 'Behind the times',
        meaning: 'Old-fashioned; not keeping up with current trends or developments',
        example: 'My grandfather thinks smartphones are unnecessary — he\'s a bit behind the times.',
        turkishMeaning: 'Modasi gecmis, caginin gerisinde kalmis',
        clbLevel: 6,
        category: 'Time',
        whenToUse: 'Use when describing someone or something that is outdated or not keeping up with modern trends, technology, or ideas.',
        contexts: [
          {
            scenario: 'The company was still using fax machines and paper filing systems while all their competitors had moved to cloud computing. Industry analysts said the company was behind the times.',
            question: 'What does "behind the times" mean here?',
            options: [
              'The company was very punctual',
              'The company owed money from the past',
              'The company was not keeping up with modern technology',
              'The company worked in a different time zone'
            ],
            correctIndex: 2
          },
          {
            scenario: 'My uncle still thinks women shouldn\'t work outside the home. My mother says his views are behind the times and don\'t reflect how society has changed.',
            question: 'What does "behind the times" mean about the uncle\'s views?',
            options: [
              'His opinions are outdated and old-fashioned',
              'He remembers the past very well',
              'He is always late to family events',
              'He lives in a rural area'
            ],
            correctIndex: 0
          },
          {
            scenario: 'The restaurant\'s menu hadn\'t changed in thirty years. While some customers loved the nostalgia, food critics called it behind the times compared to newer restaurants in the area.',
            question: 'Why did critics say the restaurant was "behind the times"?',
            options: [
              'It opened too late in the evening',
              'It had not updated or modernized its offerings',
              'It was located in an old building',
              'It did not accept reservations'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['fall behind the times', 'a bit behind the times', 'hopelessly behind the times'],
        similarIdioms: [],
        oppositeIdioms: ['ahead-of-time']
      },
      {
        id: 'ahead-of-time',
        idiom: 'Ahead of time',
        meaning: 'Earlier than expected or required; before the deadline',
        example: 'She finished the report ahead of time, so she had the afternoon free.',
        turkishMeaning: 'Zamanindan once, vaktinden erken, erkenden',
        clbLevel: 6,
        category: 'Time',
        whenToUse: 'Use when something is done or prepared earlier than the expected or required time.',
        contexts: [
          {
            scenario: 'The contractor finished building the new office two weeks ahead of time. The company was thrilled because they could move in sooner than planned.',
            question: 'What does "ahead of time" mean here?',
            options: [
              'The building was constructed in the future',
              'The project was completed earlier than scheduled',
              'The contractor was paid in advance',
              'The office was built near a clock tower'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Tom always prepares his presentations ahead of time. He likes to have everything ready at least three days before the meeting so he can rehearse.',
            question: 'What does "ahead of time" tell us about Tom?',
            options: [
              'He is always late to meetings',
              'He prepares things earlier than necessary',
              'He travels through time',
              'He never gives presentations'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The wedding invitations were sent out ahead of time to make sure all guests could plan their travel arrangements. Most people received them two months before the ceremony.',
            question: 'Why were invitations sent "ahead of time"?',
            options: [
              'They were sent by mistake too early',
              'They were sent early to allow guests to prepare',
              'They arrived late due to postal delays',
              'They were sent to the wrong addresses'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['plan ahead of time', 'finish ahead of time', 'arrive ahead of time'],
        similarIdioms: [],
        oppositeIdioms: ['in-the-nick-of-time', 'behind-the-times']
      },
      {
        id: 'time-and-again',
        idiom: 'Time and again',
        meaning: 'Repeatedly; on many occasions over a period of time',
        example: 'I\'ve told him time and again to lock the door, but he keeps forgetting.',
        turkishMeaning: 'Defalarca, tekrar tekrar, surekli olarak',
        clbLevel: 6,
        category: 'Time',
        whenToUse: 'Use when emphasizing that something has happened many times repeatedly, often with a sense of frustration or emphasis.',
        contexts: [
          {
            scenario: 'The teacher reminded the students time and again to show their work on math problems. Despite her repeated warnings, many students still only wrote the final answer.',
            question: 'What does "time and again" mean here?',
            options: [
              'Once or twice',
              'Only during exam time',
              'Repeatedly, on many occasions',
              'At a specific scheduled time'
            ],
            correctIndex: 2
          },
          {
            scenario: 'Research has shown time and again that regular exercise improves mental health. Study after study confirms the connection between physical activity and reduced anxiety.',
            question: 'What does "time and again" suggest about the research?',
            options: [
              'The research was done only once',
              'Multiple studies have consistently shown the same result',
              'The research is about time management',
              'The research was inconclusive'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Despite being warned time and again by her doctor to reduce salt intake, Mrs. Chen continued to add extra salt to her meals. Her blood pressure remained high as a result.',
            question: 'How often was Mrs. Chen warned?',
            options: [
              'Only once during a checkup',
              'Never — she ignored the advice',
              'Many times repeatedly',
              'Only during emergencies'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['told time and again', 'proven time and again', 'warned time and again'],
        similarIdioms: ['around-the-clock'],
        oppositeIdioms: ['from-time-to-time']
      },
      {
        id: 'from-time-to-time',
        idiom: 'From time to time',
        meaning: 'Occasionally; sometimes but not regularly',
        example: 'I visit my hometown from time to time, maybe once or twice a year.',
        turkishMeaning: 'Ara sira, zaman zaman, bazen',
        clbLevel: 6,
        category: 'Time',
        whenToUse: 'Use when describing something that happens occasionally, not on a regular schedule.',
        contexts: [
          {
            scenario: 'Even though he moved to Canada ten years ago, Ahmed still cooks traditional dishes from his home country from time to time. It reminds him of family dinners growing up.',
            question: 'What does "from time to time" mean here?',
            options: [
              'He cooks traditional food every day',
              'He never cooks traditional food anymore',
              'He occasionally cooks traditional food',
              'He only cooks during holidays'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The manager checks in with remote employees from time to time to see how they are doing. She doesn\'t micromanage but likes to stay informed.',
            question: 'How often does the manager check in?',
            options: [
              'Every hour without fail',
              'Never — she trusts them completely',
              'Occasionally, but not on a fixed schedule',
              'Only when there is a problem'
            ],
            correctIndex: 2
          },
          {
            scenario: 'We all make mistakes from time to time. The important thing is to learn from them and try to do better next time.',
            question: 'What does "from time to time" mean in this sentence?',
            options: [
              'Constantly and without stopping',
              'Only once in a lifetime',
              'Occasionally, as a normal part of life',
              'Only when under pressure'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['from time to time I', 'happens from time to time', 'check in from time to time'],
        similarIdioms: ['kill-time'],
        oppositeIdioms: ['time-and-again', 'around-the-clock']
      },
      {
        id: 'in-no-time',
        idiom: 'In no time',
        meaning: 'Very quickly; almost immediately',
        example: 'The mechanic fixed the car in no time — it only took fifteen minutes.',
        turkishMeaning: 'Cok kisa surede, hemen, bir anda',
        clbLevel: 6,
        category: 'Time',
        whenToUse: 'Use when you want to emphasize that something happened or will happen very quickly.',
        contexts: [
          {
            scenario: 'The experienced chef prepared a three-course meal in no time. The guests were amazed that everything was ready in just thirty minutes.',
            question: 'What does "in no time" mean here?',
            options: [
              'The chef took forever to cook',
              'The chef prepared the meal very quickly',
              'The chef did not cook at all',
              'The chef ran out of time'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Don\'t worry about the stain on your shirt. With this detergent, it will come out in no time. Just soak it for a few minutes and it will look brand new.',
            question: 'What does "in no time" suggest about the cleaning?',
            options: [
              'It will take a very long time',
              'It will happen very quickly',
              'It will never work',
              'It requires professional cleaning'
            ],
            correctIndex: 1
          },
          {
            scenario: 'After starting her online course, Maya learned the basics of web design in no time. Within two weeks, she had already built her first website.',
            question: 'What does "in no time" tell us about Maya\'s learning?',
            options: [
              'She struggled to learn the material',
              'She learned very quickly',
              'She gave up on the course',
              'She had already known web design before'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['done in no time', 'finished in no time', 'learn in no time'],
        similarIdioms: ['time-flies'],
        oppositeIdioms: ['against-the-clock']
      }
    ]
  },
  {
    id: 'idioms-money',
    title: 'Money',
    description: 'Idioms related to money, spending, and finances',
    icon: '💰',
    category: 'Money',
    clbLevel: 6,
    words: [
      {
        id: 'break-the-bank',
        idiom: 'Break the bank',
        meaning: 'To cost too much money; to be very expensive',
        example: 'We want to renovate the kitchen, but we don\'t want to break the bank.',
        turkishMeaning: 'Cok pahaliya mal olmak, keseyi bosaltmak',
        clbLevel: 6,
        category: 'Money',
        whenToUse: 'Use when talking about something that is very expensive or would cost more than you can afford. Often used in the negative to mean affordable.',
        contexts: [
          {
            scenario: 'The couple wanted to go on a honeymoon but didn\'t want to break the bank. They chose a camping trip nearby instead of an expensive resort overseas.',
            question: 'What does "break the bank" mean here?',
            options: [
              'Rob a bank to pay for the trip',
              'Spend more money than they could afford',
              'Break something at the hotel',
              'Use their bank card too often'
            ],
            correctIndex: 1
          },
          {
            scenario: 'This restaurant serves excellent food and it won\'t break the bank. Most meals are under fifteen dollars, which is very reasonable for the quality.',
            question: 'What does "won\'t break the bank" mean?',
            options: [
              'The restaurant has no bank nearby',
              'The food is affordable and not too expensive',
              'The restaurant doesn\'t accept card payments',
              'The food quality is poor'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Buying a new car would definitely break the bank right now. We just paid for the house repairs, so we need to save for a few more months.',
            question: 'Why would buying a car "break the bank"?',
            options: [
              'Cars are always cheap',
              'They have too much money saved',
              'They cannot afford it after recent expenses',
              'The bank does not sell cars'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['won\'t break the bank', 'without breaking the bank', 'it would break the bank'],
        similarIdioms: ['cost-an-arm-and-a-leg'],
        oppositeIdioms: ['penny-pincher']
      },
      {
        id: 'cost-an-arm-and-a-leg',
        idiom: 'Cost an arm and a leg',
        meaning: 'To be extremely expensive',
        example: 'The car repairs cost an arm and a leg — over two thousand dollars!',
        turkishMeaning: 'Cok pahaliya patlamak, goz cikartacak kadar pahali',
        clbLevel: 6,
        category: 'Money',
        whenToUse: 'Use when something is unreasonably or surprisingly expensive. This is informal and expressive.',
        contexts: [
          {
            scenario: 'When Jake\'s laptop broke, the repair shop told him the fix would cost an arm and a leg. He decided it would be cheaper to just buy a new one instead.',
            question: 'What does "cost an arm and a leg" mean?',
            options: [
              'The repair required body parts as payment',
              'The repair was extremely expensive',
              'The repair was free of charge',
              'The laptop had a broken arm rest'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Living in downtown Toronto costs an arm and a leg. A small one-bedroom apartment can easily run over two thousand dollars a month in rent.',
            question: 'What does "costs an arm and a leg" tell you about downtown Toronto?',
            options: [
              'It is a dangerous place to live',
              'It is extremely expensive to live there',
              'Apartments are very large there',
              'There are many hospitals nearby'
            ],
            correctIndex: 1
          },
          {
            scenario: 'My daughter\'s wedding cost an arm and a leg, but it was worth every penny. She had the celebration of her dreams with all her family and friends.',
            question: 'What does the parent mean?',
            options: [
              'The wedding was free',
              'The wedding was very cheap',
              'The wedding was very expensive but worthwhile',
              'Someone got injured at the wedding'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['it cost an arm and a leg', 'costs an arm and a leg', 'pay an arm and a leg'],
        similarIdioms: ['break-the-bank'],
        oppositeIdioms: ['nest-egg']
      },
      {
        id: 'penny-pincher',
        idiom: 'Penny pincher',
        meaning: 'A person who is very careful with money and avoids spending whenever possible; a very frugal person',
        example: 'My roommate is such a penny pincher — he reuses tea bags three times.',
        turkishMeaning: 'Cimri, parasina cok dueskuen, eli siki',
        clbLevel: 6,
        category: 'Money',
        whenToUse: 'Use when describing someone who is extremely careful or stingy with their money. It can be playful or slightly negative.',
        contexts: [
          {
            scenario: 'Everyone at the office knows that Mr. Thompson is a penny pincher. He brings his own coffee, never eats out, and always looks for the cheapest option for everything.',
            question: 'What does "penny pincher" mean here?',
            options: [
              'Someone who collects pennies as a hobby',
              'Someone who is extremely careful with money',
              'Someone who works at a bank',
              'Someone who is very generous'
            ],
            correctIndex: 1
          },
          {
            scenario: 'My grandmother was a penny pincher her whole life. She saved every extra dollar and never wasted anything. Thanks to her careful habits, she left a generous inheritance for the family.',
            question: 'What does calling the grandmother a "penny pincher" mean?',
            options: [
              'She was poor and had no money',
              'She was very frugal and careful with spending',
              'She collected old coins',
              'She gave away all her money'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Stop being such a penny pincher and buy yourself something nice for once! You work hard and deserve a treat now and then.',
            question: 'What is the speaker telling the person?',
            options: [
              'To stop collecting pennies',
              'To stop being so extremely frugal and enjoy spending a little',
              'To start saving more money',
              'To change their job'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['such a penny pincher', 'a real penny pincher', 'stop being a penny pincher'],
        similarIdioms: ['money-doesnt-grow-on-trees'],
        oppositeIdioms: ['break-the-bank', 'make-a-fortune']
      },
      {
        id: 'money-doesnt-grow-on-trees',
        idiom: 'Money doesn\'t grow on trees',
        meaning: 'Money is not easy to get and should not be wasted; you have to work hard to earn it',
        example: 'You can\'t just buy everything you want — money doesn\'t grow on trees!',
        turkishMeaning: 'Para agacta yetismez, para kolay kazanilmaz',
        clbLevel: 6,
        category: 'Money',
        whenToUse: 'Use to remind someone to be careful with money and not spend it carelessly. Often said by parents to children.',
        contexts: [
          {
            scenario: 'When Tommy asked for the third expensive toy this month, his mother said, "Money doesn\'t grow on trees, you know. We need to be careful about what we spend."',
            question: 'What does the mother mean?',
            options: [
              'She wants to plant a money tree',
              'Money is limited and should not be wasted',
              'She has plenty of money to spend',
              'Trees are more expensive than toys'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The university student was spending a lot on eating out every day. Her father called and reminded her that money doesn\'t grow on trees and she should learn to cook simple meals.',
            question: 'Why did the father say "money doesn\'t grow on trees"?',
            options: [
              'He wanted her to study botany',
              'He wanted her to be more careful with spending',
              'He was sending her more money',
              'He wanted her to become a chef'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The small business owner told his employees that money doesn\'t grow on trees when they requested new office furniture. He asked them to wait until the company could afford the expense.',
            question: 'What point was the business owner making?',
            options: [
              'He wanted to buy trees for the office',
              'The company had unlimited funds',
              'Money is earned with effort and must be spent wisely',
              'He was planning to close the business'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['money doesn\'t grow on trees, you know', 'remember, money doesn\'t grow on trees', 'as if money grows on trees'],
        similarIdioms: ['penny-pincher'],
        oppositeIdioms: ['make-a-fortune']
      },
      {
        id: 'worth-its-weight-in-gold',
        idiom: 'Worth its weight in gold',
        meaning: 'Extremely valuable or useful',
        example: 'A good mechanic is worth their weight in gold these days.',
        turkishMeaning: 'Agirliginca altin degeri olan, cok degerli',
        clbLevel: 6,
        category: 'Money',
        whenToUse: 'Use when something or someone is extremely valuable, helpful, or important. It emphasizes exceptional worth.',
        contexts: [
          {
            scenario: 'During the power outage, our portable generator was worth its weight in gold. While our neighbours sat in the dark, we had lights, heat, and could keep our food cold.',
            question: 'What does "worth its weight in gold" mean here?',
            options: [
              'The generator was made of gold',
              'The generator was extremely heavy',
              'The generator was extremely valuable and useful',
              'The generator was very expensive to buy'
            ],
            correctIndex: 2
          },
          {
            scenario: 'A reliable babysitter is worth her weight in gold. Finding someone trustworthy who your children love is not easy, and parents treasure such a person.',
            question: 'What does "worth her weight in gold" mean about the babysitter?',
            options: [
              'She should be paid in gold',
              'She is extremely valuable and hard to find',
              'She is very heavy',
              'She is very expensive to hire'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The advice my mentor gave me early in my career was worth its weight in gold. Those lessons helped me avoid costly mistakes and advance faster than my peers.',
            question: 'What does "worth its weight in gold" say about the advice?',
            options: [
              'The advice was sold for a high price',
              'The advice was extremely valuable and helpful',
              'The mentor was a wealthy person',
              'The advice was written on golden paper'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['worth its weight in gold', 'worth their weight in gold', 'truly worth its weight in gold'],
        similarIdioms: ['cash-cow'],
        oppositeIdioms: ['flat-broke']
      },
      {
        id: 'make-a-fortune',
        idiom: 'Make a fortune',
        meaning: 'To earn a very large amount of money',
        example: 'She made a fortune by investing in tech stocks early on.',
        turkishMeaning: 'Servet kazanmak, cok para kazanmak',
        clbLevel: 6,
        category: 'Money',
        whenToUse: 'Use when someone earns or has earned a very large amount of money, usually through business, investments, or work.',
        contexts: [
          {
            scenario: 'Tom\'s grandfather made a fortune in the oil industry during the 1960s. He started with a small drilling operation and eventually owned several wells across the province.',
            question: 'What does "made a fortune" mean?',
            options: [
              'He predicted the future',
              'He earned a very large amount of money',
              'He lost everything he had',
              'He found a treasure chest'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The app developer made a fortune when her simple game went viral. Within six months, she had earned enough to retire early if she wanted to.',
            question: 'What happened to the app developer?',
            options: [
              'She failed in her business',
              'She earned very little from the app',
              'She earned an enormous amount of money',
              'She gave away her fortune'
            ],
            correctIndex: 2
          },
          {
            scenario: 'You could make a fortune selling handmade candles online. The market is growing and your products are unique enough to stand out from the competition.',
            question: 'What does "make a fortune" suggest here?',
            options: [
              'Candle-making is a difficult craft',
              'There is potential to earn a lot of money',
              'The market is already saturated',
              'Online selling is not profitable'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['make a fortune from', 'make a fortune selling', 'made a small fortune'],
        similarIdioms: ['cash-cow', 'nest-egg'],
        oppositeIdioms: ['flat-broke', 'penny-pincher']
      },
      {
        id: 'flat-broke',
        idiom: 'Flat broke',
        meaning: 'Having no money at all; completely without funds',
        example: 'After paying all the bills, I was flat broke until my next paycheque.',
        turkishMeaning: 'Meteliksiz, beş parasiz, tamamen parasiz',
        clbLevel: 6,
        category: 'Money',
        whenToUse: 'Use when you or someone has absolutely no money left. It is informal and emphasizes being completely out of funds.',
        contexts: [
          {
            scenario: 'After losing his job and paying three months of rent from savings, Kevin was flat broke. He had to borrow money from his parents just to buy groceries.',
            question: 'What does "flat broke" mean?',
            options: [
              'He had some savings left',
              'He had absolutely no money',
              'He was injured and couldn\'t work',
              'He broke something in his flat'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The college students were flat broke by the end of the semester. They had spent all their money on textbooks, rent, and food, with nothing left for entertainment.',
            question: 'What does "flat broke" tell us about the students?',
            options: [
              'They had plenty of money for fun activities',
              'They had zero money remaining',
              'They broke their apartment furniture',
              'They lived in a flat together'
            ],
            correctIndex: 1
          },
          {
            scenario: 'I can\'t go out for dinner tonight — I\'m flat broke until payday on Friday. Maybe we can cook something at home instead.',
            question: 'Why can\'t the person go out?',
            options: [
              'They don\'t like restaurants',
              'They have no money at all right now',
              'They are too tired',
              'They are on a special diet'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['completely flat broke', 'go flat broke', 'left flat broke'],
        similarIdioms: [],
        oppositeIdioms: ['make-a-fortune', 'worth-its-weight-in-gold']
      },
      {
        id: 'foot-the-bill',
        idiom: 'Foot the bill',
        meaning: 'To pay for something, especially something expensive; to cover the cost',
        example: 'My parents offered to foot the bill for the wedding reception.',
        turkishMeaning: 'Hesabi odemek, masraflari karsilamak',
        clbLevel: 6,
        category: 'Money',
        whenToUse: 'Use when someone pays for a cost or expense, often a large one, especially on behalf of others.',
        contexts: [
          {
            scenario: 'The company decided to foot the bill for all employee training programs this year. Each course costs about five hundred dollars per person, but management believes it is a good investment.',
            question: 'What does "foot the bill" mean here?',
            options: [
              'The company refused to pay',
              'The company agreed to cover all the costs',
              'The employees had to pay with cash only',
              'The bill was placed on the floor'
            ],
            correctIndex: 1
          },
          {
            scenario: 'After the water pipe burst and flooded the apartment, the landlord had to foot the bill for all the damage repairs. It ended up costing over five thousand dollars.',
            question: 'Who paid for the repairs?',
            options: [
              'The tenant paid everything',
              'Nobody paid for the repairs',
              'The landlord covered all the costs',
              'The insurance company refused to help'
            ],
            correctIndex: 2
          },
          {
            scenario: 'When the group went out for dinner, their generous friend insisted on footing the bill for everyone. He said it was his treat for their years of friendship.',
            question: 'What did the friend do?',
            options: [
              'He paid for everyone\'s meal',
              'He left without paying',
              'He kicked the bill off the table',
              'He asked everyone to split the cost'
            ],
            correctIndex: 0
          }
        ],
        collocations: ['foot the bill for', 'willing to foot the bill', 'who\'s going to foot the bill'],
        similarIdioms: ['break-the-bank'],
        oppositeIdioms: ['penny-pincher']
      },
      {
        id: 'cash-cow',
        idiom: 'Cash cow',
        meaning: 'A business, product, or investment that generates a steady and reliable source of income',
        example: 'The parking garage turned out to be a real cash cow for the company.',
        turkishMeaning: 'Para makinesi, surekli gelir getiren is veya yatirim',
        clbLevel: 6,
        category: 'Money',
        whenToUse: 'Use when referring to something that consistently produces good profit or income with relatively little effort.',
        contexts: [
          {
            scenario: 'The vending machine business turned out to be a cash cow for the entrepreneur. With minimal maintenance, each machine generates hundreds of dollars in profit every month.',
            question: 'What does "cash cow" mean here?',
            options: [
              'A machine shaped like a cow',
              'A business that reliably generates steady income',
              'A very expensive business to maintain',
              'A business that sells dairy products'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The mobile game became a cash cow for the studio. Even years after its release, it continues to bring in millions through in-app purchases without any major updates.',
            question: 'Why is the game called a "cash cow"?',
            options: [
              'It features cows as characters',
              'It was very expensive to develop',
              'It continuously generates large profits with little effort',
              'It is free to play'
            ],
            correctIndex: 2
          },
          {
            scenario: 'Real estate in that area has been a cash cow for investors. Properties bought ten years ago have tripled in value, and rental income keeps growing every year.',
            question: 'What does "cash cow" mean in this context?',
            options: [
              'The properties are shaped like barns',
              'The real estate produces consistent and growing returns',
              'The investors lost money on real estate',
              'Only farmers invest in that area'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['a real cash cow', 'turned into a cash cow', 'the company\'s cash cow'],
        similarIdioms: ['make-a-fortune', 'worth-its-weight-in-gold'],
        oppositeIdioms: ['flat-broke']
      },
      {
        id: 'nest-egg',
        idiom: 'Nest egg',
        meaning: 'A sum of money saved for the future, especially for retirement or emergencies',
        example: 'They\'ve been building a nice nest egg for their retirement.',
        turkishMeaning: 'Kenara ayrilmis birikim, gelecek icin biriktirilen para',
        clbLevel: 6,
        category: 'Money',
        whenToUse: 'Use when talking about money that has been saved over time for a specific future purpose, such as retirement, emergencies, or major purchases.',
        contexts: [
          {
            scenario: 'After thirty years of careful saving, the Johnsons had built a comfortable nest egg for retirement. They could now afford to travel and enjoy their golden years without financial worry.',
            question: 'What is a "nest egg" in this context?',
            options: [
              'An egg found in a bird\'s nest',
              'A savings account with very little money',
              'A large sum of money saved over time for the future',
              'A pension paid by the government'
            ],
            correctIndex: 2
          },
          {
            scenario: 'Financial advisors recommend starting to build your nest egg as early as possible. Even small monthly contributions can grow significantly over twenty or thirty years.',
            question: 'What does "build your nest egg" mean?',
            options: [
              'Construct a birdhouse',
              'Gradually save money for the future',
              'Invest all your money at once',
              'Apply for a bank loan'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The unexpected medical bills nearly wiped out their entire nest egg. Years of saving were spent in just a few months, and they had to start over from scratch.',
            question: 'What happened to their "nest egg"?',
            options: [
              'It grew larger than expected',
              'It was stolen by someone',
              'Their savings were almost completely used up',
              'They moved it to a different bank'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['build a nest egg', 'a comfortable nest egg', 'dip into your nest egg'],
        similarIdioms: ['penny-pincher', 'make-a-fortune'],
        oppositeIdioms: ['flat-broke', 'break-the-bank']
      }
    ]
  },
  {
    id: 'idioms-knowledge',
    title: 'Knowledge',
    description: 'Idioms about learning, understanding, and knowledge',
    icon: '📚',
    category: 'Knowledge',
    clbLevel: 7,
    words: [
      {
        id: 'learn-the-ropes',
        idiom: 'Learn the ropes',
        meaning: 'To learn the basics of how to do a job or activity',
        example: 'It took me a few weeks to learn the ropes at my new job.',
        turkishMeaning: 'Isin inceliklerini ogrenmek, ise alismak',
        clbLevel: 7,
        category: 'Knowledge',
        whenToUse: 'Use when someone is new to a job, activity, or role and is still learning how things work.',
        contexts: [
          {
            scenario: 'On her first week as a nurse, Emily was still learning the ropes. Her supervisor showed her how to use the electronic charting system and where supplies were kept.',
            question: 'What does "learning the ropes" mean?',
            options: [
              'She was practicing tying knots',
              'She was learning the basic procedures of her new job',
              'She was exercising with ropes at the gym',
              'She was reading the hospital rulebook'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The new intern is still learning the ropes, so please be patient with him. He\'ll get faster once he understands our workflow and systems.',
            question: 'What is the speaker asking?',
            options: [
              'To give the intern rope to practice with',
              'To be patient while the intern learns the basics',
              'To fire the intern immediately',
              'To let the intern work alone'
            ],
            correctIndex: 1
          },
          {
            scenario: 'After learning the ropes of online selling, Maria was able to open her own shop and start making sales within a month. She watched tutorials and practiced daily.',
            question: 'What did Maria do first?',
            options: [
              'She immediately started selling successfully',
              'She learned the fundamental skills of online selling',
              'She hired someone to do the work',
              'She gave up on the idea'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['learn the ropes of', 'still learning the ropes', 'know the ropes'],
        similarIdioms: ['a-steep-learning-curve', 'know-the-drill'],
        oppositeIdioms: ['the-big-picture']
      },
      {
        id: 'pick-someones-brain',
        idiom: 'Pick someone\'s brain',
        meaning: 'To ask someone questions to get their knowledge, ideas, or advice about something',
        example: 'Can I pick your brain about the best restaurants in the city?',
        turkishMeaning: 'Birinin bilgisinden faydalanmak, fikrini sormak',
        clbLevel: 7,
        category: 'Knowledge',
        whenToUse: 'Use when you want to ask someone for their expert opinion, ideas, or knowledge on a specific topic.',
        contexts: [
          {
            scenario: 'Before starting her own bakery, Sara picked the brain of a successful baker in town. She asked about suppliers, pricing, and common mistakes to avoid.',
            question: 'What does "picked the brain" mean?',
            options: [
              'She performed surgery on the baker',
              'She asked the baker many questions to get useful knowledge',
              'She stole the baker\'s recipes',
              'She criticized the baker\'s business'
            ],
            correctIndex: 1
          },
          {
            scenario: 'I\'d love to pick your brain sometime about investing in real estate. You seem to have a lot of experience and I\'m just starting out.',
            question: 'What is the speaker asking for?',
            options: [
              'To borrow money for real estate',
              'To get advice and knowledge about real estate investing',
              'To buy the listener\'s property',
              'To complain about the housing market'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The journalist picked the scientist\'s brain for over an hour during the interview. She wanted to understand the complex research in simple terms for her article.',
            question: 'What did the journalist do?',
            options: [
              'She argued with the scientist',
              'She questioned the scientist extensively to gain understanding',
              'She ignored the scientist\'s answers',
              'She copied the scientist\'s research papers'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['pick someone\'s brain about', 'let me pick your brain', 'I\'d like to pick your brain'],
        similarIdioms: ['food-for-thought'],
        oppositeIdioms: ['in-a-nutshell']
      },
      {
        id: 'a-steep-learning-curve',
        idiom: 'A steep learning curve',
        meaning: 'A situation where someone has to learn a lot in a very short time; something that is difficult to learn initially',
        example: 'The new software has a steep learning curve, but it\'s very powerful once you master it.',
        turkishMeaning: 'Ogrenmesi zor olan sey, hizli ogrenme gerektiren durum',
        clbLevel: 7,
        category: 'Knowledge',
        whenToUse: 'Use when describing something that requires significant effort to learn, especially in the beginning.',
        contexts: [
          {
            scenario: 'Moving to a new country involves a steep learning curve. You have to learn the language, understand the culture, and navigate new systems like banking and healthcare all at once.',
            question: 'What does "a steep learning curve" mean here?',
            options: [
              'The country has many hills and mountains',
              'There is a lot to learn in a short amount of time',
              'Learning is impossible in a new country',
              'The education system is very advanced'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Learning to code had a steep learning curve for Daniel. The first month was frustrating, but after pushing through, he started to understand the logic and patterns.',
            question: 'What does "steep learning curve" tell us about Daniel\'s experience?',
            options: [
              'Coding was easy from the start',
              'It was very challenging at first but got easier over time',
              'He never learned to code successfully',
              'He was already an expert programmer'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The new employees found that the company\'s project management system had a steep learning curve. Training sessions were added to help them get up to speed faster.',
            question: 'Why were training sessions added?',
            options: [
              'The system was very easy to use',
              'The employees were not interested in learning',
              'The system was difficult to learn and employees needed help',
              'The company wanted to waste time'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['a steep learning curve', 'face a steep learning curve', 'overcome the learning curve'],
        similarIdioms: ['learn-the-ropes'],
        oppositeIdioms: ['know-the-drill']
      },
      {
        id: 'know-the-drill',
        idiom: 'Know the drill',
        meaning: 'To know exactly what to do because you have done it many times before; to be familiar with the procedure',
        example: 'We\'ve done this before, so you know the drill — sign in and take a seat.',
        turkishMeaning: 'Proseduru bilmek, ne yapilacagini bilmek, ise asina olmak',
        clbLevel: 7,
        category: 'Knowledge',
        whenToUse: 'Use when referring to a familiar routine or procedure that someone has experienced multiple times.',
        contexts: [
          {
            scenario: 'When the fire alarm went off, the experienced employees didn\'t panic. They knew the drill — grab your belongings, head to the nearest exit, and meet at the assembly point.',
            question: 'What does "knew the drill" mean?',
            options: [
              'They knew how to use a power drill',
              'They were familiar with the emergency procedure',
              'They knew the alarm was fake',
              'They had drilled holes in the wall before'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Every Monday morning, the team has a standup meeting. After six months, everyone knows the drill: share your updates, mention any blockers, and keep it under ten minutes.',
            question: 'What does "knows the drill" mean here?',
            options: [
              'Everyone brings a drill to the meeting',
              'Everyone is familiar with the routine and procedure',
              'Everyone dislikes Monday meetings',
              'Everyone stands up during the entire meeting'
            ],
            correctIndex: 1
          },
          {
            scenario: 'I\'ve been to this clinic many times for checkups. I know the drill — check in at reception, wait for my name to be called, and see the doctor on the second floor.',
            question: 'Why does the speaker "know the drill"?',
            options: [
              'They work at the clinic',
              'They have been through the same process many times',
              'They read the clinic\'s instruction manual',
              'They built the clinic'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['you know the drill', 'they know the drill', 'I know the drill by now'],
        similarIdioms: ['learn-the-ropes'],
        oppositeIdioms: ['a-steep-learning-curve']
      },
      {
        id: 'ring-a-bell',
        idiom: 'Ring a bell',
        meaning: 'To sound familiar; to remind you of something you have heard or known before',
        example: 'The name doesn\'t ring a bell — I don\'t think we\'ve met.',
        turkishMeaning: 'Tanidik gelmek, bir seyleri hatirlattmak',
        clbLevel: 7,
        category: 'Knowledge',
        whenToUse: 'Use when something seems familiar but you cannot quite place it, or when asking someone if they recognize something.',
        contexts: [
          {
            scenario: 'When the detective mentioned the name "Carlos Vega," the witness said it rang a bell. She thought she might have heard the name at a party last month but couldn\'t remember the details.',
            question: 'What does "rang a bell" mean?',
            options: [
              'The name made a literal bell sound',
              'The name sounded familiar to her',
              'She called someone named Carlos',
              'She rang a doorbell'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Does the restaurant "The Golden Spoon" ring a bell? I think you mentioned it once, but I\'m not sure if that\'s the place you recommended.',
            question: 'What is the speaker asking?',
            options: [
              'If the restaurant has a bell at the door',
              'If the name sounds familiar to the listener',
              'If the restaurant serves golden soup',
              'If the listener owns the restaurant'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The song on the radio rang a bell for James. He was sure he had heard it before, maybe in a movie, but he couldn\'t remember which one.',
            question: 'What does "rang a bell" mean here?',
            options: [
              'The song was very loud',
              'The song had bells in it',
              'The song seemed familiar to him',
              'James played bells as an instrument'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['does that ring a bell', 'it rings a bell', 'the name doesn\'t ring a bell'],
        similarIdioms: ['on-the-tip-of-my-tongue'],
        oppositeIdioms: ['read-between-the-lines']
      },
      {
        id: 'on-the-tip-of-my-tongue',
        idiom: 'On the tip of my tongue',
        meaning: 'Almost able to remember something but not quite; a word or name you know but cannot recall at the moment',
        example: 'Her name is on the tip of my tongue — give me a second and I\'ll remember.',
        turkishMeaning: 'Dilimin ucunda, az kaldi hatirlayacagim',
        clbLevel: 7,
        category: 'Knowledge',
        whenToUse: 'Use when you almost remember a word, name, or piece of information but cannot quite recall it at that moment.',
        contexts: [
          {
            scenario: 'What\'s the name of that Italian restaurant we went to last year? It\'s on the tip of my tongue... starts with a B, I think. Oh wait — Bella\'s! That\'s it!',
            question: 'What does "on the tip of my tongue" mean?',
            options: [
              'The food was very hot and burned the tongue',
              'The speaker almost remembers the name but can\'t quite recall it yet',
              'The speaker doesn\'t know the restaurant at all',
              'The speaker is eating Italian food right now'
            ],
            correctIndex: 1
          },
          {
            scenario: 'During the quiz show, the contestant said the answer was on the tip of his tongue. He could feel that he knew it, but the pressure of the timer made it impossible to recall.',
            question: 'What was happening to the contestant?',
            options: [
              'He was eating something during the show',
              'He knew the answer but could not remember it at that moment',
              'He did not understand the question',
              'He was whispering the answer to someone'
            ],
            correctIndex: 1
          },
          {
            scenario: 'I know I\'ve seen that actor before — his name is on the tip of my tongue. Wait, don\'t tell me! I want to remember it on my own.',
            question: 'What is the speaker experiencing?',
            options: [
              'They have something stuck on their tongue',
              'They can almost but not quite remember the actor\'s name',
              'They don\'t recognize the actor at all',
              'They are talking to the actor directly'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['it\'s on the tip of my tongue', 'the word is on the tip of my tongue', 'right on the tip of my tongue'],
        similarIdioms: ['ring-a-bell'],
        oppositeIdioms: ['in-a-nutshell']
      },
      {
        id: 'food-for-thought',
        idiom: 'Food for thought',
        meaning: 'Something worth thinking carefully about; an idea or comment that deserves consideration',
        example: 'The speaker\'s comments about climate change gave us all food for thought.',
        turkishMeaning: 'Dusunulmesi gereken sey, uezerinde duesuenuelecek konu',
        clbLevel: 7,
        category: 'Knowledge',
        whenToUse: 'Use when an idea, comment, or observation is interesting and deserves careful consideration or reflection.',
        contexts: [
          {
            scenario: 'The documentary about fast fashion gave viewers a lot of food for thought. Many people started reconsidering their shopping habits after watching it.',
            question: 'What does "food for thought" mean here?',
            options: [
              'The documentary was about cooking',
              'The documentary provided ideas worth thinking about carefully',
              'The viewers were hungry after watching',
              'The documentary was too long to finish'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The teacher\'s question was real food for thought: "If everyone in the world lived like Canadians, we would need four Earths." The students discussed it for the rest of the class.',
            question: 'Why was the question called "food for thought"?',
            options: [
              'It was about food production',
              'It was a trivial question with an obvious answer',
              'It was a thought-provoking idea that made people think deeply',
              'The students were thinking about lunch'
            ],
            correctIndex: 2
          },
          {
            scenario: 'Here\'s some food for thought: studies show that people who read fiction tend to have more empathy than those who don\'t. Perhaps we should all pick up a novel once in a while.',
            question: 'What does "food for thought" introduce?',
            options: [
              'A recipe recommendation',
              'An interesting fact that deserves consideration',
              'A meal plan for readers',
              'A boring statistic nobody cares about'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['give someone food for thought', 'a lot of food for thought', 'some food for thought'],
        similarIdioms: ['the-big-picture', 'pick-someones-brain'],
        oppositeIdioms: ['in-a-nutshell']
      },
      {
        id: 'in-a-nutshell',
        idiom: 'In a nutshell',
        meaning: 'In the fewest possible words; briefly summarized',
        example: 'In a nutshell, the project is behind schedule and over budget.',
        turkishMeaning: 'Kisaca, ozetle, bir cuemleyle',
        clbLevel: 7,
        category: 'Knowledge',
        whenToUse: 'Use when you want to give a very brief summary of something complex or when asked to explain something quickly.',
        contexts: [
          {
            scenario: 'After a two-hour meeting, the manager was asked what was discussed. He said, "In a nutshell, we need to cut costs by fifteen percent and hire two new developers."',
            question: 'What does "in a nutshell" mean?',
            options: [
              'The meeting took place in a small room',
              'He summarized the main points very briefly',
              'He was eating nuts during the meeting',
              'He couldn\'t remember what was discussed'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Can you explain blockchain technology in a nutshell? I don\'t need all the technical details — just the basic concept so I can understand what people are talking about.',
            question: 'What is the speaker asking for?',
            options: [
              'A detailed technical explanation',
              'A very brief and simple summary',
              'A blockchain made of nutshells',
              'A written research paper'
            ],
            correctIndex: 1
          },
          {
            scenario: 'In a nutshell, the book argues that happiness comes from meaningful relationships, not material wealth. There\'s much more to it, but that\'s the core message.',
            question: 'What does "in a nutshell" indicate?',
            options: [
              'The book is very short',
              'The speaker is providing a brief summary of a larger idea',
              'The book is about cooking with nuts',
              'The speaker hasn\'t read the book'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['in a nutshell', 'put it in a nutshell', 'to put it in a nutshell'],
        similarIdioms: ['read-between-the-lines'],
        oppositeIdioms: ['food-for-thought', 'pick-someones-brain']
      },
      {
        id: 'the-big-picture',
        idiom: 'The big picture',
        meaning: 'The overall situation or most important aspects of something, rather than the small details',
        example: 'Don\'t get lost in the details — try to see the big picture.',
        turkishMeaning: 'Buetuene bakmak, genel durum, ana tablo',
        clbLevel: 7,
        category: 'Knowledge',
        whenToUse: 'Use when encouraging someone to think about the overall situation rather than focusing on minor details.',
        contexts: [
          {
            scenario: 'The CEO told the team to focus on the big picture instead of arguing about small budget items. She said, "We need to decide our five-year strategy first, then worry about office supplies."',
            question: 'What does "the big picture" mean?',
            options: [
              'A large painting on the office wall',
              'The overall strategy and important goals',
              'The biggest expense in the budget',
              'A photograph of the whole team'
            ],
            correctIndex: 1
          },
          {
            scenario: 'When studying for exams, it helps to see the big picture first. Understanding how all the topics connect makes it easier to remember individual facts and details.',
            question: 'What does "see the big picture" mean here?',
            options: [
              'Look at a large diagram',
              'Understand the overall structure and connections between topics',
              'Study only the most important topics',
              'Skip the exam preparation entirely'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Yes, we lost one client this month, but look at the big picture — overall revenue is up twenty percent and we gained five new clients. We\'re doing very well.',
            question: 'Why does the speaker mention "the big picture"?',
            options: [
              'To focus on a single negative event',
              'To show the overall positive situation despite one setback',
              'To show a presentation slide',
              'To ignore all problems completely'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['see the big picture', 'look at the big picture', 'keep the big picture in mind'],
        similarIdioms: ['food-for-thought'],
        oppositeIdioms: ['learn-the-ropes']
      },
      {
        id: 'read-between-the-lines',
        idiom: 'Read between the lines',
        meaning: 'To understand the hidden or implied meaning of something, not just the literal words',
        example: 'When she said she was "fine," I could read between the lines that she was actually upset.',
        turkishMeaning: 'Satirlarin arasini okumak, gizli anlami kavramak',
        clbLevel: 7,
        category: 'Knowledge',
        whenToUse: 'Use when someone needs to look beyond the obvious or surface meaning to understand what is really being communicated.',
        contexts: [
          {
            scenario: 'The company\'s announcement said they were "restructuring for future growth." Anyone who could read between the lines knew this meant layoffs were coming.',
            question: 'What does "read between the lines" mean?',
            options: [
              'Read the announcement very carefully word by word',
              'Understand the hidden meaning behind the polite language',
              'Read a different document instead',
              'Write notes between the printed lines'
            ],
            correctIndex: 1
          },
          {
            scenario: 'His email said he was "considering other opportunities." If you read between the lines, it was clear he was planning to quit his job and had likely already started interviewing elsewhere.',
            question: 'What does "read between the lines" suggest?',
            options: [
              'The email was poorly written with blank lines',
              'The true meaning was hidden behind polite or indirect language',
              'The email was written in code',
              'Someone edited the email after it was sent'
            ],
            correctIndex: 1
          },
          {
            scenario: 'When the landlord said the apartment needed "some work," the tenants should have read between the lines. It turned out the plumbing, wiring, and roof all needed major repairs.',
            question: 'What should the tenants have understood?',
            options: [
              'The apartment was in perfect condition',
              'The landlord was being honest about minor repairs',
              'The phrase "some work" actually meant serious problems',
              'The apartment didn\'t need any work at all'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['read between the lines', 'if you read between the lines', 'learn to read between the lines'],
        similarIdioms: ['in-a-nutshell'],
        oppositeIdioms: ['ring-a-bell']
      }
    ]
  },
  {
    id: 'idioms-communication',
    title: 'Communication',
    description: 'Idioms about speaking, sharing information, and expressing yourself',
    icon: '🗣️',
    category: 'Communication',
    clbLevel: 7,
    words: [
      {
        id: 'beat-around-the-bush',
        idiom: 'Beat around the bush',
        meaning: 'To avoid talking about the main topic or to be indirect when speaking',
        example: 'Stop beating around the bush and tell me what happened.',
        turkishMeaning: 'Lafini dolandirmak, dolayli konusmak, sadede gelmemek',
        clbLevel: 7,
        category: 'Communication',
        whenToUse: 'Use when someone is avoiding the main point of a conversation and being unnecessarily indirect.',
        contexts: [
          {
            scenario: 'During the meeting, the manager kept talking about general company performance instead of addressing the real issue — the upcoming layoffs. Employees felt he was beating around the bush.',
            question: 'What does "beating around the bush" mean?',
            options: [
              'He was gardening during the meeting',
              'He was avoiding the main topic',
              'He was speaking too quickly',
              'He was discussing bushes and trees'
            ],
            correctIndex: 1
          },
          {
            scenario: 'When Lisa asked her boyfriend if he wanted to break up, he started talking about how busy he had been lately. She said, "Please don\'t beat around the bush. Just give me an honest answer."',
            question: 'What is Lisa asking for?',
            options: [
              'For him to stop gardening',
              'For him to speak directly and honestly',
              'For him to take more time to think',
              'For him to change the subject'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The politician was asked a direct question about tax increases but beat around the bush for ten minutes, talking about economic growth and future plans without ever answering yes or no.',
            question: 'What did the politician do?',
            options: [
              'Answered the question clearly and directly',
              'Refused to speak at all',
              'Avoided giving a direct answer by talking about other things',
              'Left the interview immediately'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['stop beating around the bush', 'don\'t beat around the bush', 'quit beating around the bush'],
        similarIdioms: ['bite-your-tongue'],
        oppositeIdioms: ['get-straight-to-the-point', 'spill-the-beans']
      },
      {
        id: 'get-straight-to-the-point',
        idiom: 'Get straight to the point',
        meaning: 'To talk about the most important thing immediately without wasting time on other topics',
        example: 'I don\'t have much time, so let me get straight to the point.',
        turkishMeaning: 'Sadede gelmek, dogrudan konuya girmek',
        clbLevel: 7,
        category: 'Communication',
        whenToUse: 'Use when you want someone to speak directly or when you are about to say something important without a long introduction.',
        contexts: [
          {
            scenario: 'The CEO started the emergency meeting by saying, "I\'ll get straight to the point — we\'ve lost our biggest client and need to act fast." Everyone appreciated his directness.',
            question: 'What does "get straight to the point" mean?',
            options: [
              'Walk in a straight line to a specific place',
              'Address the most important matter immediately',
              'Point at something directly',
              'End the meeting quickly'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The doctor got straight to the point and told the patient he needed surgery. There was no small talk or gradual buildup — just the essential information.',
            question: 'What did the doctor do?',
            options: [
              'He was rude to the patient',
              'He immediately shared the most important news',
              'He pointed at the patient\'s chart',
              'He avoided discussing the diagnosis'
            ],
            correctIndex: 1
          },
          {
            scenario: 'I appreciate people who get straight to the point in emails. I don\'t have time to read three paragraphs of pleasantries before finding out what they actually need.',
            question: 'What does the speaker prefer?',
            options: [
              'Long and detailed emails with lots of context',
              'Emails that are direct and immediately state the purpose',
              'Emails with no greeting at all',
              'Phone calls instead of emails'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['let me get straight to the point', 'to get straight to the point', 'he got straight to the point'],
        similarIdioms: ['spill-the-beans'],
        oppositeIdioms: ['beat-around-the-bush']
      },
      {
        id: 'spill-the-beans',
        idiom: 'Spill the beans',
        meaning: 'To reveal a secret or share information that was supposed to be kept private',
        example: 'Don\'t spill the beans about the surprise party!',
        turkishMeaning: 'Agzindan kacirmak, sirri ifsa etmek',
        clbLevel: 7,
        category: 'Communication',
        whenToUse: 'Use when someone reveals secret information, either accidentally or deliberately. Often used as a warning not to tell a secret.',
        contexts: [
          {
            scenario: 'We were planning a surprise birthday party for Mom, but little Tommy spilled the beans when he asked her what kind of cake she wanted. The surprise was ruined.',
            question: 'What does "spilled the beans" mean?',
            options: [
              'Tommy dropped a can of beans on the floor',
              'Tommy accidentally revealed the secret party plans',
              'Tommy refused to help plan the party',
              'Tommy ate all the party food'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The journalist convinced the employee to spill the beans about the company\'s illegal activities. The story made front-page news the next day.',
            question: 'What did the employee do?',
            options: [
              'Made a mess in the office kitchen',
              'Revealed secret information about the company',
              'Quit the job without notice',
              'Planted beans in the company garden'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Come on, spill the beans! I know you went on a date last night. Tell me everything — how did it go?',
            question: 'What is the speaker asking?',
            options: [
              'To clean up a spill',
              'To share all the details about the date',
              'To cancel the date',
              'To cook dinner together'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['don\'t spill the beans', 'who spilled the beans', 'spill the beans about'],
        similarIdioms: ['let-the-cat-out-of-the-bag', 'get-straight-to-the-point'],
        oppositeIdioms: ['bite-your-tongue', 'beat-around-the-bush']
      },
      {
        id: 'let-the-cat-out-of-the-bag',
        idiom: 'Let the cat out of the bag',
        meaning: 'To accidentally reveal a secret or surprise',
        example: 'I accidentally let the cat out of the bag about her promotion.',
        turkishMeaning: 'Istemeden sirri aciga cikarmal, kazara ifsa etmek',
        clbLevel: 7,
        category: 'Communication',
        whenToUse: 'Use when a secret is revealed, usually by accident. It emphasizes the unintentional nature of revealing the information.',
        contexts: [
          {
            scenario: 'Jake accidentally let the cat out of the bag when he congratulated his sister on her pregnancy at dinner. She hadn\'t told the rest of the family yet and was shocked.',
            question: 'What does "let the cat out of the bag" mean?',
            options: [
              'Jake released an actual cat from a bag',
              'Jake accidentally revealed a secret',
              'Jake bought a cat as a gift',
              'Jake forgot about his sister\'s news'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The company tried to keep the merger secret, but a junior employee let the cat out of the bag during a phone call with a supplier. The news spread quickly after that.',
            question: 'What happened?',
            options: [
              'An employee brought a pet to work',
              'An employee accidentally revealed confidential information',
              'The company adopted a cat as a mascot',
              'A supplier sent a cat-themed gift'
            ],
            correctIndex: 1
          },
          {
            scenario: 'I didn\'t mean to let the cat out of the bag about your new job. It just slipped out when your mother asked me what you\'ve been up to lately. I\'m really sorry.',
            question: 'What is the speaker apologizing for?',
            options: [
              'Losing someone\'s cat',
              'Accidentally revealing private information',
              'Not asking about the new job sooner',
              'Talking to the person\'s mother too often'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['accidentally let the cat out of the bag', 'who let the cat out of the bag', 'don\'t let the cat out of the bag'],
        similarIdioms: ['spill-the-beans'],
        oppositeIdioms: ['bite-your-tongue']
      },
      {
        id: 'word-of-mouth',
        idiom: 'Word of mouth',
        meaning: 'Information passed from person to person through conversation rather than through advertising or media',
        example: 'The restaurant became popular through word of mouth alone.',
        turkishMeaning: 'Agizdan agiza, kulaktan kulaga, tavsiye yoluyla',
        clbLevel: 7,
        category: 'Communication',
        whenToUse: 'Use when describing how information, especially recommendations, spreads through personal conversations rather than official channels.',
        contexts: [
          {
            scenario: 'The small bakery never advertised, but it became one of the most popular spots in town through word of mouth. Satisfied customers kept telling their friends and family.',
            question: 'What does "through word of mouth" mean?',
            options: [
              'Through newspaper advertisements',
              'Through personal recommendations and conversations',
              'Through social media campaigns',
              'Through a loudspeaker on the street'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Most of our new clients come through word of mouth. When people have a good experience with our service, they tell their friends, and those friends become our customers too.',
            question: 'How do new clients find the business?',
            options: [
              'Through expensive TV commercials',
              'Through personal recommendations from existing clients',
              'Through cold calling and door-to-door sales',
              'Through random internet searches'
            ],
            correctIndex: 1
          },
          {
            scenario: 'In the days before the internet, word of mouth was the most powerful form of marketing. If your product was good, people would talk about it to everyone they knew.',
            question: 'What is "word of mouth" referring to here?',
            options: [
              'Written reviews in newspapers',
              'Information shared person to person through conversation',
              'Official company announcements',
              'Radio advertisements'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['through word of mouth', 'word-of-mouth recommendations', 'spread by word of mouth'],
        similarIdioms: ['speak-volumes'],
        oppositeIdioms: ['lost-for-words']
      },
      {
        id: 'speak-volumes',
        idiom: 'Speak volumes',
        meaning: 'To express something very clearly without using words; to be very revealing or meaningful',
        example: 'Her silence spoke volumes about how she really felt about the decision.',
        turkishMeaning: 'Cok sey anlatmak, binden fazla soez soylemek, cok sey ifade etmek',
        clbLevel: 7,
        category: 'Communication',
        whenToUse: 'Use when actions, expressions, or situations communicate a message more powerfully than words would.',
        contexts: [
          {
            scenario: 'When the manager asked who wanted to volunteer for the weekend shift, the room fell completely silent. The silence spoke volumes about how the team felt about working weekends.',
            question: 'What does "spoke volumes" mean here?',
            options: [
              'The room was very noisy',
              'Everyone spoke at the same time',
              'The silence clearly communicated their feelings without words',
              'The manager was speaking too loudly'
            ],
            correctIndex: 2
          },
          {
            scenario: 'The fact that not a single employee attended the CEO\'s farewell party speaks volumes about his leadership style. People clearly did not respect or like him.',
            question: 'What does "speaks volumes" tell us?',
            options: [
              'The party was very loud',
              'The absence clearly reveals how employees felt about the CEO',
              'Many people attended the party',
              'The CEO gave a long speech'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Her smile when she saw the engagement ring spoke volumes. She didn\'t need to say a word — her joy was written all over her face.',
            question: 'What does "spoke volumes" mean in this context?',
            options: [
              'She talked a lot about the ring',
              'Her expression clearly communicated her happiness without words',
              'She was reading a book about rings',
              'She whispered very quietly'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['speaks volumes about', 'that speaks volumes', 'silence speaks volumes'],
        similarIdioms: ['actions-speak-louder-than-words', 'word-of-mouth'],
        oppositeIdioms: ['lost-for-words']
      },
      {
        id: 'actions-speak-louder-than-words',
        idiom: 'Actions speak louder than words',
        meaning: 'What you do is more important and meaningful than what you say',
        example: 'He promised to help, but actions speak louder than words — he never showed up.',
        turkishMeaning: 'Soezden cok is yapmak onemli, laf degil is',
        clbLevel: 7,
        category: 'Communication',
        whenToUse: 'Use when emphasizing that behavior and actions matter more than promises or verbal statements.',
        contexts: [
          {
            scenario: 'The politician promised to reduce poverty during every election campaign, but never passed any new policies. A journalist wrote that actions speak louder than words, and voters were losing trust.',
            question: 'What does "actions speak louder than words" mean here?',
            options: [
              'The politician should speak louder at rallies',
              'What the politician does matters more than what he says',
              'The journalist was being too critical',
              'Words are more powerful than actions'
            ],
            correctIndex: 1
          },
          {
            scenario: 'My father never said "I love you" very often, but he showed it every day by cooking our meals, driving us to school, and staying up when we were sick. Actions speak louder than words.',
            question: 'What does "actions speak louder than words" mean here?',
            options: [
              'The father should have spoken more',
              'His caring behavior showed love more powerfully than words could',
              'He was a very loud person',
              'He never loved his children'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Instead of just apologizing, show me you\'re sorry by changing your behaviour. Actions speak louder than words, and I need to see real change before I can trust you again.',
            question: 'What is the speaker asking for?',
            options: [
              'A louder apology',
              'Proof through changed behaviour, not just verbal apology',
              'A written letter of apology',
              'Nothing — they have already forgiven the person'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['actions speak louder than words', 'remember, actions speak louder than words', 'as they say, actions speak louder than words'],
        similarIdioms: ['speak-volumes'],
        oppositeIdioms: ['beat-around-the-bush']
      },
      {
        id: 'bite-your-tongue',
        idiom: 'Bite your tongue',
        meaning: 'To stop yourself from saying something you want to say; to hold back words',
        example: 'I had to bite my tongue when my boss made that unfair comment.',
        turkishMeaning: 'Dilini isirmak, soeylememek icin kendini tutmak',
        clbLevel: 7,
        category: 'Communication',
        whenToUse: 'Use when you want to describe holding back from saying something, usually because it would be rude, inappropriate, or cause trouble.',
        contexts: [
          {
            scenario: 'When her mother-in-law criticized her cooking at Thanksgiving dinner, Sarah bit her tongue and simply smiled. She didn\'t want to start an argument in front of the whole family.',
            question: 'What does "bit her tongue" mean?',
            options: [
              'She hurt her tongue while eating',
              'She stopped herself from saying something she wanted to say',
              'She couldn\'t taste the food properly',
              'She agreed with the criticism completely'
            ],
            correctIndex: 1
          },
          {
            scenario: 'I wanted to tell my coworker that his presentation was terrible, but I bit my tongue. It wouldn\'t have been professional, and I didn\'t want to hurt his confidence before the client meeting.',
            question: 'Why did the speaker "bite their tongue"?',
            options: [
              'They had a mouth injury',
              'They held back their honest opinion to avoid causing problems',
              'They forgot what they wanted to say',
              'They agreed the presentation was good'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The teacher told the students to bite their tongues during the guest speaker\'s lecture, even if they disagreed with some points. Questions could be asked at the end.',
            question: 'What did the teacher ask the students to do?',
            options: [
              'Physically bite their tongues',
              'Hold back their comments and wait until later',
              'Leave the lecture if they disagreed',
              'Write down everything the speaker said'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['bite my tongue', 'had to bite my tongue', 'I\'m biting my tongue'],
        similarIdioms: ['beat-around-the-bush', 'lost-for-words'],
        oppositeIdioms: ['spill-the-beans', 'let-the-cat-out-of-the-bag']
      },
      {
        id: 'break-the-ice',
        idiom: 'Break the ice',
        meaning: 'To do or say something to relieve tension or start conversation in a social setting',
        example: 'He told a joke to break the ice at the beginning of the meeting.',
        turkishMeaning: 'Buzlari kirmak, ortami isitmak, ilk adimi atmak',
        clbLevel: 7,
        category: 'Communication',
        whenToUse: 'Use when describing an action or comment that helps people feel more comfortable in an awkward or new social situation.',
        contexts: [
          {
            scenario: 'At the start of the workshop, the facilitator asked everyone to share an interesting fact about themselves to break the ice. Within minutes, strangers were laughing and chatting comfortably.',
            question: 'What does "break the ice" mean here?',
            options: [
              'To serve cold drinks to the participants',
              'To reduce tension and help people start talking',
              'To break something in the room',
              'To start the workshop with a test'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Moving to a new school is hard, but joining the basketball team helped Jason break the ice with his classmates. Sports gave them something to bond over immediately.',
            question: 'How did basketball help Jason?',
            options: [
              'It kept him too busy to miss his old school',
              'It helped him start connecting with new classmates',
              'It taught him how to skate on ice',
              'It made him the most popular student instantly'
            ],
            correctIndex: 1
          },
          {
            scenario: 'A simple compliment can break the ice in any social situation. Saying something nice about someone\'s outfit or work can open the door to a natural conversation.',
            question: 'What does "break the ice" suggest here?',
            options: [
              'You should offer ice to strangers',
              'A small gesture can help start a comfortable conversation',
              'Compliments are always inappropriate',
              'Social situations are always awkward'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['break the ice with', 'a good way to break the ice', 'icebreaker'],
        similarIdioms: ['word-of-mouth'],
        oppositeIdioms: ['bite-your-tongue', 'lost-for-words']
      },
      {
        id: 'lost-for-words',
        idiom: 'Lost for words',
        meaning: 'Unable to think of anything to say, usually because of surprise, shock, or strong emotion',
        example: 'When she won the award, she was completely lost for words.',
        turkishMeaning: 'Soezleri yitirmek, ne diyecegini bilememek, agzi acik kalmak',
        clbLevel: 7,
        category: 'Communication',
        whenToUse: 'Use when someone is so surprised, shocked, or emotional that they cannot find words to express how they feel.',
        contexts: [
          {
            scenario: 'When the entire office gathered to surprise Mark on his retirement, he was completely lost for words. Tears filled his eyes as he looked at the crowd of colleagues who had become like family.',
            question: 'What does "lost for words" mean?',
            options: [
              'He forgot how to speak English',
              'He was so moved that he couldn\'t think of what to say',
              'He lost a word game they were playing',
              'He was angry and refused to speak'
            ],
            correctIndex: 1
          },
          {
            scenario: 'I was lost for words when my daughter showed me the painting she had made of our family. The detail and emotion in it were beyond anything I expected from a twelve-year-old.',
            question: 'Why was the parent "lost for words"?',
            options: [
              'The painting was terrible',
              'They were too impressed and emotional to express their feelings',
              'They didn\'t understand the painting',
              'They were angry about the mess from painting'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The contestant was left lost for words when the host announced she had won the grand prize of one hundred thousand dollars. She just stood on stage with her mouth open in disbelief.',
            question: 'What happened to the contestant?',
            options: [
              'She gave a long speech',
              'She was so shocked that she couldn\'t speak',
              'She refused to accept the prize',
              'She lost the competition'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['completely lost for words', 'left lost for words', 'I\'m lost for words'],
        similarIdioms: ['bite-your-tongue'],
        oppositeIdioms: ['speak-volumes', 'word-of-mouth']
      }
    ]
  },
  {
    id: 'idioms-health',
    title: 'Health',
    description: 'Idioms about health, wellness, and physical condition',
    icon: '🏥',
    category: 'Health',
    clbLevel: 7,
    words: [
      {
        id: 'under-the-weather',
        idiom: 'Under the weather',
        meaning: 'Feeling ill or sick; not feeling well',
        example: 'I\'m feeling a bit under the weather today, so I\'m going to stay home.',
        turkishMeaning: 'Hasta hissetmek, kendini iyi hissetmemek, keyifsiz olmak',
        clbLevel: 7,
        category: 'Health',
        whenToUse: 'Use as a mild and polite way to say you are feeling sick or unwell, especially for minor illnesses.',
        contexts: [
          {
            scenario: 'Tom called his manager to say he was feeling under the weather and wouldn\'t be coming to work. He had a sore throat and a mild fever.',
            question: 'What does "under the weather" mean?',
            options: [
              'Tom was caught in the rain',
              'Tom was feeling sick and unwell',
              'Tom was affected by a storm',
              'Tom was complaining about the forecast'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Sarah looked a bit under the weather at the party. Her eyes were watery and she kept sneezing. Her friend suggested she go home and rest.',
            question: 'What does "under the weather" tell us about Sarah?',
            options: [
              'She was standing outside in bad weather',
              'She appeared to be feeling ill',
              'She was sad about something',
              'She was dressed for cold weather'
            ],
            correctIndex: 1
          },
          {
            scenario: 'After eating the questionable leftovers, the whole family was under the weather for two days. They all had stomach problems and couldn\'t keep food down.',
            question: 'What happened to the family?',
            options: [
              'They had a great time together',
              'They all became sick',
              'They were stuck indoors because of rain',
              'They went on a camping trip'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['feeling under the weather', 'a bit under the weather', 'look under the weather'],
        similarIdioms: ['on-the-mend'],
        oppositeIdioms: ['fit-as-a-fiddle', 'feel-like-a-million-bucks']
      },
      {
        id: 'fit-as-a-fiddle',
        idiom: 'Fit as a fiddle',
        meaning: 'In excellent physical health and condition',
        example: 'Despite being seventy years old, my grandfather is fit as a fiddle.',
        turkishMeaning: 'Turp gibi saglikli, sapasaglam, cok formda',
        clbLevel: 7,
        category: 'Health',
        whenToUse: 'Use when describing someone who is in very good health and physical shape, often surprisingly so.',
        contexts: [
          {
            scenario: 'At eighty-two, Mrs. Chen is fit as a fiddle. She walks five kilometres every morning, tends her garden, and even goes dancing on weekends.',
            question: 'What does "fit as a fiddle" mean?',
            options: [
              'She plays the fiddle instrument',
              'She is in excellent physical health',
              'She is shaped like a violin',
              'She is struggling with her health'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The doctor told James he was fit as a fiddle after his annual checkup. All his tests came back normal and his blood pressure was perfect.',
            question: 'What did the doctor mean?',
            options: [
              'James needed immediate surgery',
              'James was in excellent health',
              'James should learn to play violin',
              'James needed to start exercising'
            ],
            correctIndex: 1
          },
          {
            scenario: 'After recovering from the flu, it took a couple of weeks, but now I feel fit as a fiddle again. I\'m back to my morning runs and feel completely healthy.',
            question: 'What does "fit as a fiddle" mean here?',
            options: [
              'The person is still sick',
              'The person has fully recovered and feels great',
              'The person is playing music again',
              'The person is only partially recovered'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['as fit as a fiddle', 'feeling fit as a fiddle', 'he\'s fit as a fiddle'],
        similarIdioms: ['in-good-shape', 'a-clean-bill-of-health', 'feel-like-a-million-bucks'],
        oppositeIdioms: ['under-the-weather']
      },
      {
        id: 'on-the-mend',
        idiom: 'On the mend',
        meaning: 'Getting better after an illness or injury; recovering',
        example: 'She was very sick last week, but she\'s on the mend now.',
        turkishMeaning: 'Iyilesmekte, toparlanmakta, duzelmekte',
        clbLevel: 7,
        category: 'Health',
        whenToUse: 'Use when someone is recovering from an illness or injury and getting progressively better.',
        contexts: [
          {
            scenario: 'After spending three days in the hospital with pneumonia, Grandpa is finally on the mend. He\'s eating better and his fever has gone down significantly.',
            question: 'What does "on the mend" mean?',
            options: [
              'He is getting worse',
              'He is recovering and improving',
              'He is mending his clothes',
              'He has been discharged and is fully well'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Good news — the economy is on the mend after the recession. Employment numbers are rising and consumer spending has increased for three consecutive months.',
            question: 'What does "on the mend" mean in this context?',
            options: [
              'The economy is collapsing',
              'The economy is recovering and improving',
              'Someone is fixing the economy manually',
              'The economy has fully recovered already'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The athlete\'s knee injury was serious, but her physiotherapist says she\'s on the mend and could be back on the field in six weeks if recovery continues at this pace.',
            question: 'What does "on the mend" tell us about the athlete?',
            options: [
              'She will never play again',
              'She is gradually recovering from her injury',
              'She is already fully healed',
              'She is ignoring her injury'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['on the mend now', 'finally on the mend', 'well on the mend'],
        similarIdioms: ['under-the-weather', 'a-clean-bill-of-health'],
        oppositeIdioms: ['go-under-the-knife']
      },
      {
        id: 'a-clean-bill-of-health',
        idiom: 'A clean bill of health',
        meaning: 'An official confirmation that someone is healthy or that something is in good condition',
        example: 'The doctor gave me a clean bill of health after the checkup.',
        turkishMeaning: 'Saglik raporu almak, saglikli oldugu onaylanmak',
        clbLevel: 7,
        category: 'Health',
        whenToUse: 'Use when someone has been examined or tested and confirmed to be healthy, or when something has been inspected and found to be in good condition.',
        contexts: [
          {
            scenario: 'After undergoing extensive testing following his heart scare, Mr. Williams was relieved to receive a clean bill of health from his cardiologist.',
            question: 'What does "a clean bill of health" mean?',
            options: [
              'He received a very expensive medical bill',
              'He was confirmed to be healthy after examination',
              'He cleaned the doctor\'s office',
              'He was diagnosed with a new condition'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The restaurant received a clean bill of health from the food safety inspector. Everything from the kitchen to the storage areas met or exceeded the required standards.',
            question: 'What does "a clean bill of health" mean for the restaurant?',
            options: [
              'The restaurant was ordered to close',
              'The restaurant passed all health inspections',
              'The restaurant served only healthy food',
              'The restaurant cleaned its facilities'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Before buying the used car, Maria had it inspected by a mechanic who gave it a clean bill of health. No major issues were found and all systems were working properly.',
            question: 'What does "a clean bill of health" mean for the car?',
            options: [
              'The car was brand new',
              'The car was confirmed to be in good working condition',
              'The car was clean on the outside',
              'The car needed significant repairs'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['give a clean bill of health', 'receive a clean bill of health', 'get a clean bill of health'],
        similarIdioms: ['fit-as-a-fiddle', 'in-good-shape'],
        oppositeIdioms: ['under-the-weather', 'go-under-the-knife']
      },
      {
        id: 'catch-your-breath',
        idiom: 'Catch your breath',
        meaning: 'To rest for a moment to recover from physical exertion; to pause and recover normal breathing',
        example: 'Let me catch my breath — I just ran up six flights of stairs.',
        turkishMeaning: 'Nefes almak, soluklanmak, dinlenmek',
        clbLevel: 7,
        category: 'Health',
        whenToUse: 'Use when someone needs a short rest to recover after physical effort, or figuratively after a busy or stressful period.',
        contexts: [
          {
            scenario: 'After climbing to the top of the mountain trail, the hikers stopped to catch their breath. The altitude made breathing difficult, and they needed a few minutes before continuing.',
            question: 'What does "catch their breath" mean?',
            options: [
              'They were trying to literally grab air with their hands',
              'They paused to rest and recover normal breathing',
              'They were holding their breath for fun',
              'They were breathing into a bag'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The busy holiday season was finally over, and the store employees could catch their breath. December had been non-stop work with barely any days off.',
            question: 'What does "catch their breath" mean here?',
            options: [
              'The employees had breathing problems',
              'They could finally relax after a very busy period',
              'They went running after work',
              'They needed medical attention'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The little boy ran from the car to the front door as fast as he could. He stood there trying to catch his breath while waiting for his parents to unlock the door.',
            question: 'What was the boy doing?',
            options: [
              'Playing a catching game',
              'Resting and recovering his breathing after running',
              'Holding his breath on purpose',
              'Singing a song while waiting'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['catch my breath', 'stop to catch your breath', 'trying to catch my breath'],
        similarIdioms: ['on-the-mend'],
        oppositeIdioms: ['burn-the-candle-at-both-ends']
      },
      {
        id: 'burn-the-candle-at-both-ends',
        idiom: 'Burn the candle at both ends',
        meaning: 'To exhaust yourself by working too hard or doing too much, especially by staying up late and getting up early',
        example: 'She\'s been burning the candle at both ends with two jobs and night school.',
        turkishMeaning: 'Kendini cok yormak, gece gunduz calismak, enerjisini tuketmek',
        clbLevel: 7,
        category: 'Health',
        whenToUse: 'Use when someone is overworking or over-committing themselves to the point of exhaustion.',
        contexts: [
          {
            scenario: 'Between his full-time job and his online MBA program, Jake has been burning the candle at both ends. He barely sleeps five hours a night and looks exhausted all the time.',
            question: 'What does "burning the candle at both ends" mean?',
            options: [
              'Jake is playing with fire',
              'Jake is overworking himself and not getting enough rest',
              'Jake has too many candles at home',
              'Jake works only night shifts'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The doctor warned her patient to stop burning the candle at both ends. Working twelve-hour days while training for a marathon and caring for three children was taking a serious toll on her health.',
            question: 'What was the doctor concerned about?',
            options: [
              'The patient\'s candle collection',
              'The patient was overexerting herself with too many commitments',
              'The patient was spending too much money',
              'The patient wasn\'t eating enough'
            ],
            correctIndex: 1
          },
          {
            scenario: 'In university, I burned the candle at both ends by studying all day and partying every night. By the end of the semester, I was sick and my grades had dropped.',
            question: 'What happened as a result of "burning the candle at both ends"?',
            options: [
              'The speaker became very healthy',
              'The speaker\'s grades improved dramatically',
              'The speaker became exhausted and performed poorly',
              'The speaker had plenty of energy'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['stop burning the candle at both ends', 'you\'re burning the candle at both ends', 'been burning the candle at both ends'],
        similarIdioms: ['a-bitter-pill-to-swallow'],
        oppositeIdioms: ['in-good-shape', 'fit-as-a-fiddle']
      },
      {
        id: 'in-good-shape',
        idiom: 'In good shape',
        meaning: 'In good physical condition; healthy and fit; also used for things in good condition',
        example: 'She runs every day and is in really good shape.',
        turkishMeaning: 'Iyi durumda, formda, saglikli',
        clbLevel: 7,
        category: 'Health',
        whenToUse: 'Use when describing someone who is physically fit and healthy, or something that is in good working condition.',
        contexts: [
          {
            scenario: 'Despite working a desk job, Michael stays in good shape by going to the gym three times a week and cycling to work every day.',
            question: 'What does "in good shape" mean?',
            options: [
              'Michael has a symmetrical body',
              'Michael is physically fit and healthy',
              'Michael wears well-fitting clothes',
              'Michael sits with good posture'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The mechanic said the engine is in good shape and should last another hundred thousand kilometres with proper maintenance.',
            question: 'What does "in good shape" mean about the engine?',
            options: [
              'The engine is shaped correctly',
              'The engine is in good working condition',
              'The engine is brand new',
              'The engine looks nice on the outside'
            ],
            correctIndex: 1
          },
          {
            scenario: 'You need to be in good shape to complete the hiking course. It involves steep climbs and long distances, so only attempt it if you exercise regularly.',
            question: 'What does "in good shape" mean here?',
            options: [
              'Having the right body shape for hiking',
              'Being physically fit enough for the challenge',
              'Wearing the proper hiking clothes',
              'Having good hiking equipment'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['stay in good shape', 'get in good shape', 'keep in good shape'],
        similarIdioms: ['fit-as-a-fiddle', 'feel-like-a-million-bucks'],
        oppositeIdioms: ['under-the-weather', 'burn-the-candle-at-both-ends']
      },
      {
        id: 'a-bitter-pill-to-swallow',
        idiom: 'A bitter pill to swallow',
        meaning: 'Something unpleasant or difficult that must be accepted or endured',
        example: 'Losing the championship was a bitter pill to swallow for the team.',
        turkishMeaning: 'Aci bir gercek, kabullenmesi zor bir durum, yutmasi zor hap',
        clbLevel: 7,
        category: 'Health',
        whenToUse: 'Use when describing a disappointing or painful reality that someone must accept, even though it is hard.',
        contexts: [
          {
            scenario: 'Being passed over for the promotion was a bitter pill to swallow for Maria. She had worked harder than anyone on the team and felt she truly deserved it.',
            question: 'What does "a bitter pill to swallow" mean?',
            options: [
              'Maria was given bad-tasting medicine',
              'Maria had to accept a painful and disappointing reality',
              'Maria was physically sick from stress',
              'Maria refused to take her medication'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The team\'s elimination from the tournament in the first round was a bitter pill to swallow. They had trained for months and expected to go much further.',
            question: 'Why was it "a bitter pill to swallow"?',
            options: [
              'The players were ill during the tournament',
              'The early loss was very disappointing and hard to accept',
              'The tournament provided bad food',
              'The players were given actual pills'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Accepting that he could no longer drive due to his failing eyesight was a bitter pill to swallow for the elderly man. Driving had always been his symbol of independence.',
            question: 'What does "a bitter pill to swallow" mean here?',
            options: [
              'He was prescribed bitter medicine for his eyes',
              'He had to accept a difficult reality about his limitations',
              'He was happy to stop driving',
              'His pills were causing vision problems'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['a bitter pill to swallow', 'that was a bitter pill to swallow', 'a hard pill to swallow'],
        similarIdioms: ['burn-the-candle-at-both-ends'],
        oppositeIdioms: ['feel-like-a-million-bucks', 'a-clean-bill-of-health']
      },
      {
        id: 'go-under-the-knife',
        idiom: 'Go under the knife',
        meaning: 'To have surgery; to undergo a surgical procedure',
        example: 'He\'s going under the knife next week to repair his torn ligament.',
        turkishMeaning: 'Ameliyat olmak, bicak altina yatmak',
        clbLevel: 7,
        category: 'Health',
        whenToUse: 'Use as an informal way to say someone is having or is about to have surgery.',
        contexts: [
          {
            scenario: 'After months of physiotherapy failing to fix his knee, the athlete decided to go under the knife. The surgery was scheduled for early next month.',
            question: 'What does "go under the knife" mean?',
            options: [
              'He was attacked with a knife',
              'He decided to have surgery',
              'He started a new exercise routine',
              'He became a surgeon himself'
            ],
            correctIndex: 1
          },
          {
            scenario: 'My grandmother is nervous about going under the knife for her hip replacement. She\'s never had surgery before and is worried about the recovery time.',
            question: 'What is the grandmother facing?',
            options: [
              'She is learning to cook',
              'She is having a surgical procedure',
              'She is going to a knife-throwing show',
              'She is sharpening kitchen knives'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The cosmetic surgeon sees patients who voluntarily go under the knife to change their appearance. Last year alone, she performed over two hundred procedures.',
            question: 'What does "go under the knife" refer to?',
            options: [
              'Patients who are afraid of knives',
              'Patients who have cosmetic surgery',
              'Patients who work in the kitchen',
              'Patients who collect surgical tools'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['go under the knife', 'went under the knife', 'about to go under the knife'],
        similarIdioms: ['on-the-mend'],
        oppositeIdioms: ['a-clean-bill-of-health', 'fit-as-a-fiddle']
      },
      {
        id: 'feel-like-a-million-bucks',
        idiom: 'Feel like a million bucks',
        meaning: 'To feel wonderful, healthy, and full of energy; to feel great',
        example: 'After a week at the spa, I feel like a million bucks!',
        turkishMeaning: 'Harika hissetmek, kendini cok iyi hissetmek, enerji dolu olmak',
        clbLevel: 7,
        category: 'Health',
        whenToUse: 'Use when you feel exceptionally good, healthy, attractive, or energized.',
        contexts: [
          {
            scenario: 'After getting a haircut, new clothes, and a good night\'s sleep, David said he felt like a million bucks. He walked into the job interview with confidence.',
            question: 'What does "feel like a million bucks" mean?',
            options: [
              'He was carrying a lot of money',
              'He felt wonderful and full of confidence',
              'He spent a million dollars on clothes',
              'He was feeling sick but hiding it'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Once the antibiotics kicked in and the infection cleared up, Karen felt like a million bucks. It was amazing how much better she felt compared to the previous week.',
            question: 'What does "felt like a million bucks" mean?',
            options: [
              'The medicine was very expensive',
              'She felt exceptionally healthy and energized again',
              'She received a large sum of money',
              'She felt only slightly better'
            ],
            correctIndex: 1
          },
          {
            scenario: 'There\'s nothing like a morning jog followed by a cold shower to make you feel like a million bucks. I start every day this way and it sets the tone for everything after.',
            question: 'What does "feel like a million bucks" express?',
            options: [
              'The routine is very expensive',
              'The routine makes you feel fantastic and full of energy',
              'The routine is exhausting',
              'The routine is only for wealthy people'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['feel like a million bucks', 'look like a million bucks', 'felt like a million bucks'],
        similarIdioms: ['fit-as-a-fiddle', 'in-good-shape'],
        oppositeIdioms: ['under-the-weather', 'a-bitter-pill-to-swallow']
      }
    ]
  },
  {
    id: 'idioms-work-ethic',
    title: 'Work Ethic',
    description: 'Idioms about hard work, effort, and professional attitude',
    icon: '💪',
    category: 'Work Ethic',
    clbLevel: 7,
    words: [
      {
        id: 'go-the-extra-mile',
        idiom: 'Go the extra mile',
        meaning: 'To do more than what is expected or required; to put in extra effort',
        example: 'She always goes the extra mile for her clients, which is why they keep coming back.',
        turkishMeaning: 'Gereken fazlasini yapmak, ekstra efor sarf etmek',
        clbLevel: 7,
        category: 'Work Ethic',
        whenToUse: 'Use when someone does more than the minimum required, showing dedication and effort beyond expectations.',
        contexts: [
          {
            scenario: 'The hotel staff went the extra mile for the couple celebrating their anniversary. They upgraded their room, left chocolates on the pillow, and arranged a surprise dinner on the terrace.',
            question: 'What does "went the extra mile" mean?',
            options: [
              'The staff walked a long distance',
              'The staff did much more than was expected',
              'The staff charged extra for their services',
              'The staff were forced to do additional work'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Our teacher always goes the extra mile. She stays after school to help struggling students, creates supplementary materials, and even writes personalized feedback on every assignment.',
            question: 'What does "goes the extra mile" tell us about the teacher?',
            options: [
              'She drives a long way to school',
              'She puts in significantly more effort than required',
              'She assigns extra homework',
              'She walks around the school often'
            ],
            correctIndex: 1
          },
          {
            scenario: 'If you want to get promoted, you need to go the extra mile. Coming in on time and doing the minimum isn\'t enough — show initiative and take on additional responsibilities.',
            question: 'What does "go the extra mile" mean here?',
            options: [
              'Run an extra mile during lunch break',
              'Do more than the basic requirements of the job',
              'Drive further to get to work',
              'Work overtime without pay forever'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['go the extra mile for', 'willing to go the extra mile', 'always goes the extra mile'],
        similarIdioms: ['burn-the-midnight-oil', 'roll-up-your-sleeves', 'nose-to-the-grindstone'],
        oppositeIdioms: ['slack-off', 'cut-corners']
      },
      {
        id: 'burn-the-midnight-oil',
        idiom: 'Burn the midnight oil',
        meaning: 'To work or study late into the night',
        example: 'I\'ve been burning the midnight oil to finish this report before the deadline.',
        turkishMeaning: 'Gece geç saatlere kadar calismak, gece yarisina kadar ugrasmak',
        clbLevel: 7,
        category: 'Work Ethic',
        whenToUse: 'Use when someone works or studies very late at night, usually to meet a deadline or complete an important task.',
        contexts: [
          {
            scenario: 'With the thesis deadline approaching, the graduate student burned the midnight oil for three nights straight. She barely slept but managed to submit on time.',
            question: 'What does "burned the midnight oil" mean?',
            options: [
              'She set fire to cooking oil at night',
              'She worked very late into the night',
              'She wasted electricity by leaving lights on',
              'She used oil lamps instead of electric lights'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The accountants always burn the midnight oil during tax season. It\'s not unusual to see their office lights on at eleven PM in March and April.',
            question: 'What does "burn the midnight oil" mean here?',
            options: [
              'The accountants use candles in the office',
              'The accountants work very late at night during busy periods',
              'The office has poor lighting',
              'The accountants waste resources'
            ],
            correctIndex: 1
          },
          {
            scenario: 'I don\'t want to burn the midnight oil tonight, so let\'s start working on this project now while we still have daylight hours to be productive.',
            question: 'What does the speaker want to avoid?',
            options: [
              'Wasting oil or electricity',
              'Having to work very late at night',
              'Starting the project too early',
              'Working with other people'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['burn the midnight oil', 'been burning the midnight oil', 'no need to burn the midnight oil'],
        similarIdioms: ['go-the-extra-mile', 'nose-to-the-grindstone'],
        oppositeIdioms: ['slack-off']
      },
      {
        id: 'roll-up-your-sleeves',
        idiom: 'Roll up your sleeves',
        meaning: 'To prepare for hard work; to get ready to work seriously',
        example: 'It\'s time to roll up our sleeves and get this project done.',
        turkishMeaning: 'Kollari sivamak, ise koyulmak, ciddi calisma hazirligina girmek',
        clbLevel: 7,
        category: 'Work Ethic',
        whenToUse: 'Use when it is time to start working hard on something, especially a challenging task that requires effort and dedication.',
        contexts: [
          {
            scenario: 'After the storm damaged the community centre, the volunteers rolled up their sleeves and spent the entire weekend cleaning up debris and making repairs.',
            question: 'What does "rolled up their sleeves" mean?',
            options: [
              'They adjusted their clothing because it was hot',
              'They got ready and started working hard',
              'They left because the job was too difficult',
              'They complained about the damage'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The new manager told the team it was time to roll up their sleeves and tackle the backlog of customer complaints. She wanted every issue resolved within two weeks.',
            question: 'What did the manager ask the team to do?',
            options: [
              'Change into more comfortable clothing',
              'Get serious and start working hard on the complaints',
              'Ignore the complaints and move on',
              'Hire more staff to handle the backlog'
            ],
            correctIndex: 1
          },
          {
            scenario: 'If you want to start a small business, you need to roll up your sleeves and be willing to do everything yourself at the beginning — from marketing to cleaning.',
            question: 'What does "roll up your sleeves" mean here?',
            options: [
              'Wear casual clothes to work',
              'Be prepared to work very hard and do all kinds of tasks',
              'Only do the easy tasks first',
              'Hire employees immediately'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['time to roll up your sleeves', 'roll up our sleeves and get to work', 'rolled up their sleeves'],
        similarIdioms: ['go-the-extra-mile', 'pull-your-weight'],
        oppositeIdioms: ['slack-off', 'cut-corners']
      },
      {
        id: 'nose-to-the-grindstone',
        idiom: 'Nose to the grindstone',
        meaning: 'To work very hard and continuously, with great focus and determination',
        example: 'She kept her nose to the grindstone and finished the project a week early.',
        turkishMeaning: 'Cok siki calismak, durmadan calismak, odakli bir sekilde ugrasmak',
        clbLevel: 7,
        category: 'Work Ethic',
        whenToUse: 'Use when describing someone who works steadily and diligently, maintaining focus on their tasks without distraction.',
        contexts: [
          {
            scenario: 'After failing his first exam, the student kept his nose to the grindstone for the rest of the semester. He studied every evening and weekend, and his grades improved dramatically.',
            question: 'What does "kept his nose to the grindstone" mean?',
            options: [
              'He rubbed his nose on a stone',
              'He worked extremely hard and stayed focused on studying',
              'He was punished by the school',
              'He stopped studying entirely'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The startup founder kept her nose to the grindstone for two years before the company became profitable. Her dedication and hard work eventually paid off.',
            question: 'What does "nose to the grindstone" tell us about the founder?',
            options: [
              'She worked in a quarry',
              'She worked extremely hard with consistent effort',
              'She was forced to work against her will',
              'She only worked part-time'
            ],
            correctIndex: 1
          },
          {
            scenario: 'If you keep your nose to the grindstone, you\'ll finish the certification course in three months. It requires discipline, but the qualification will open many doors.',
            question: 'What advice is being given?',
            options: [
              'To buy a grindstone for sharpening tools',
              'To work hard and stay focused to complete the course',
              'To take more breaks during studying',
              'To find an easier course instead'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['keep your nose to the grindstone', 'nose to the grindstone', 'put your nose to the grindstone'],
        similarIdioms: ['burn-the-midnight-oil', 'go-the-extra-mile'],
        oppositeIdioms: ['slack-off', 'cut-corners']
      },
      {
        id: 'pull-your-weight',
        idiom: 'Pull your weight',
        meaning: 'To do your fair share of work; to contribute equally in a group effort',
        example: 'Everyone on the team needs to pull their weight if we want to succeed.',
        turkishMeaning: 'Uezerine dueseni yapmak, payina dueseni yerine getirmek',
        clbLevel: 7,
        category: 'Work Ethic',
        whenToUse: 'Use when talking about the importance of everyone contributing their fair share of effort in a group or team situation.',
        contexts: [
          {
            scenario: 'The group project was due next week, but only three of the five members were pulling their weight. The other two had barely contributed anything and expected the rest to cover for them.',
            question: 'What does "pulling their weight" mean?',
            options: [
              'They were exercising with weights',
              'They were doing their fair share of the work',
              'They were carrying heavy objects',
              'They were losing weight from stress'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The manager had to talk to Kevin about pulling his weight at the office. While his colleagues worked hard, Kevin spent most of his time chatting and browsing the internet.',
            question: 'What was the problem with Kevin?',
            options: [
              'He was too heavy to sit in his chair',
              'He was not contributing his fair share of work',
              'He was working too hard',
              'He was always late to the office'
            ],
            correctIndex: 1
          },
          {
            scenario: 'In a good marriage, both partners need to pull their weight with household responsibilities. If one person does everything, it creates resentment over time.',
            question: 'What does "pull their weight" mean here?',
            options: [
              'Both partners should exercise together',
              'Both partners should contribute equally to household tasks',
              'One partner should do all the work',
              'Both partners should lose weight'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['pull your weight', 'not pulling their weight', 'everyone needs to pull their weight'],
        similarIdioms: ['roll-up-your-sleeves', 'go-the-extra-mile'],
        oppositeIdioms: ['slack-off']
      },
      {
        id: 'slack-off',
        idiom: 'Slack off',
        meaning: 'To become lazy or work less hard; to not put in enough effort',
        example: 'Don\'t slack off just because the boss is away this week.',
        turkishMeaning: 'Yavaslamak, isini gevsetmek, tembellesmek, ayak suruemek',
        clbLevel: 7,
        category: 'Work Ethic',
        whenToUse: 'Use when someone is being lazy, not working hard enough, or putting in less effort than they should.',
        contexts: [
          {
            scenario: 'After the initial excitement of the new project wore off, some team members started to slack off. Deadlines were being missed and the quality of work dropped noticeably.',
            question: 'What does "slack off" mean?',
            options: [
              'The team became more productive',
              'The team started working less hard and putting in less effort',
              'The team asked for more work',
              'The team members were fired'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The coach told the players not to slack off during practice just because they won last week\'s game. He reminded them that their next opponents were much stronger.',
            question: 'What is the coach warning against?',
            options: [
              'Practicing too hard',
              'Becoming lazy and not putting in full effort',
              'Celebrating their victory',
              'Changing their strategy'
            ],
            correctIndex: 1
          },
          {
            scenario: 'If you slack off in the first year of university, it becomes very hard to bring your grades up later. Professors build on earlier material, so falling behind creates bigger problems.',
            question: 'What does "slack off" mean in this context?',
            options: [
              'Study too much and burn out',
              'Not study hard enough and become lazy with coursework',
              'Take a gap year from university',
              'Switch to an easier program'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['don\'t slack off', 'started to slack off', 'stop slacking off'],
        similarIdioms: ['cut-corners'],
        oppositeIdioms: ['go-the-extra-mile', 'nose-to-the-grindstone', 'pull-your-weight']
      },
      {
        id: 'cut-corners',
        idiom: 'Cut corners',
        meaning: 'To do something in the easiest, cheapest, or quickest way, often sacrificing quality',
        example: 'The builder cut corners on the construction, and now the walls are cracking.',
        turkishMeaning: 'Is kolayina kacmak, kaliteden oeduen vermek, ucuza getirmeye calismak',
        clbLevel: 7,
        category: 'Work Ethic',
        whenToUse: 'Use when someone takes shortcuts in their work that reduce quality, safety, or thoroughness to save time or money.',
        contexts: [
          {
            scenario: 'The investigation revealed that the factory had been cutting corners on safety inspections. Several required checks had been skipped to save time and money, leading to the accident.',
            question: 'What does "cutting corners" mean?',
            options: [
              'The factory was redesigning its layout',
              'The factory was skipping important steps to save time and money',
              'The factory was trimming excess material',
              'The factory was being very thorough'
            ],
            correctIndex: 1
          },
          {
            scenario: 'You can\'t cut corners when it comes to food safety. Every step in the preparation and storage process must be followed exactly to prevent contamination.',
            question: 'What does "cut corners" mean here?',
            options: [
              'Cut food into corner shapes',
              'Take shortcuts that sacrifice proper procedures',
              'Reduce portion sizes',
              'Use corner shelves for storage'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The student cut corners on her essay by copying paragraphs from the internet instead of writing original content. She was caught and received a zero on the assignment.',
            question: 'What did the student do?',
            options: [
              'She trimmed the edges of her paper',
              'She took a shortcut by plagiarizing instead of doing proper work',
              'She wrote too many pages',
              'She submitted the essay early'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['cut corners on', 'don\'t cut corners', 'cutting corners to save money'],
        similarIdioms: ['slack-off'],
        oppositeIdioms: ['go-the-extra-mile', 'nose-to-the-grindstone']
      },
      {
        id: 'crack-the-whip',
        idiom: 'Crack the whip',
        meaning: 'To use authority to make people work harder or behave better; to be strict and demanding',
        example: 'The new manager is really cracking the whip to improve productivity.',
        turkishMeaning: 'Siki tutmak, disiplinli bir sekilde yoenetmek, baskiyla calistirmak',
        clbLevel: 7,
        category: 'Work Ethic',
        whenToUse: 'Use when a person in authority pushes others to work harder or enforces stricter discipline.',
        contexts: [
          {
            scenario: 'With the deadline only a week away and the project far behind schedule, the project manager decided to crack the whip. She assigned strict daily targets and checked progress every evening.',
            question: 'What does "crack the whip" mean?',
            options: [
              'She physically hit the team members',
              'She became very strict and demanded harder work',
              'She gave up on the project',
              'She extended the deadline'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The football coach is known for cracking the whip during training sessions. His drills are intense and he doesn\'t accept anything less than maximum effort from every player.',
            question: 'What does "cracking the whip" tell us about the coach?',
            options: [
              'He uses actual whips during practice',
              'He is very strict and pushes players to work their hardest',
              'He is very lenient and easygoing',
              'He only coaches part-time'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Sometimes parents need to crack the whip about homework. If left to their own devices, many children would choose video games over studying every time.',
            question: 'What does "crack the whip" mean for parents?',
            options: [
              'Punish children physically',
              'Be strict and enforce homework rules firmly',
              'Let children decide for themselves',
              'Do the homework for their children'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['crack the whip', 'someone needs to crack the whip', 'cracking the whip on'],
        similarIdioms: ['pull-your-weight'],
        oppositeIdioms: ['slack-off']
      },
      {
        id: 'in-over-your-head',
        idiom: 'In over your head',
        meaning: 'Involved in something too difficult to handle; beyond your ability or experience',
        example: 'He took on the advanced project and quickly realized he was in over his head.',
        turkishMeaning: 'Basinin altindan kalkamamak, cok zor bir durumda olmak, boyunu asan bir ise girmek',
        clbLevel: 7,
        category: 'Work Ethic',
        whenToUse: 'Use when someone has taken on a task or situation that is too difficult or complex for their current skills or experience.',
        contexts: [
          {
            scenario: 'The young lawyer was in over her head when she took on the complex corporate fraud case. She had only handled small claims before and didn\'t have the experience for such a high-profile trial.',
            question: 'What does "in over her head" mean?',
            options: [
              'She was swimming in deep water',
              'The case was too difficult and complex for her experience level',
              'She was very tall for a lawyer',
              'She was confident and well-prepared'
            ],
            correctIndex: 1
          },
          {
            scenario: 'When I agreed to renovate the kitchen by myself, I didn\'t realize I would be in over my head. Plumbing, electrical work, and tiling were all beyond my DIY skills.',
            question: 'What does "in over my head" mean?',
            options: [
              'The water flooded above head level',
              'The renovation was too complicated for the speaker\'s abilities',
              'The kitchen ceiling was too low',
              'The renovation was easy to complete'
            ],
            correctIndex: 1
          },
          {
            scenario: 'It\'s okay to admit when you\'re in over your head and ask for help. No one expects you to know everything, and seeking guidance is a sign of wisdom, not weakness.',
            question: 'What advice is being given?',
            options: [
              'Always pretend you know what you\'re doing',
              'Never take on challenging tasks',
              'Recognize when something is too difficult and don\'t be afraid to ask for help',
              'Only do easy jobs your whole career'
            ],
            correctIndex: 2
          }
        ],
        collocations: ['in over your head', 'got in over my head', 'way in over their heads'],
        similarIdioms: ['bite-off-more-than-you-can-chew'],
        oppositeIdioms: ['nose-to-the-grindstone', 'go-the-extra-mile']
      },
      {
        id: 'bite-off-more-than-you-can-chew',
        idiom: 'Bite off more than you can chew',
        meaning: 'To take on more responsibility or work than you can handle',
        example: 'By signing up for five courses, she\'s bitten off more than she can chew.',
        turkishMeaning: 'Cigneyemeyeceginden fazla isirmak, kapasitesinin uezerinde is almak',
        clbLevel: 7,
        category: 'Work Ethic',
        whenToUse: 'Use when someone has committed to more tasks, responsibilities, or challenges than they can reasonably manage.',
        contexts: [
          {
            scenario: 'By volunteering to lead three committees at the same time, the new board member had bitten off more than she could chew. She couldn\'t give adequate attention to any of them.',
            question: 'What does "bitten off more than she could chew" mean?',
            options: [
              'She was eating too much at board meetings',
              'She took on too many responsibilities to handle properly',
              'She was a very fast eater',
              'She was chewing gum during meetings'
            ],
            correctIndex: 1
          },
          {
            scenario: 'The small company bit off more than it could chew when it accepted the government contract. The project was too large for their team of five, and they missed several deadlines.',
            question: 'What happened to the company?',
            options: [
              'They completed the project early',
              'They took on a project too big for their capacity',
              'They hired many new employees',
              'They refused the contract'
            ],
            correctIndex: 1
          },
          {
            scenario: 'Don\'t bite off more than you can chew this semester. Last time you took six courses, you were stressed out and your grades suffered. Try four courses and see how it goes.',
            question: 'What is the speaker advising?',
            options: [
              'To eat smaller meals',
              'To not take on more work than can be managed well',
              'To take as many courses as possible',
              'To drop out of school entirely'
            ],
            correctIndex: 1
          }
        ],
        collocations: ['don\'t bite off more than you can chew', 'bit off more than they could chew', 'biting off more than you can chew'],
        similarIdioms: ['in-over-your-head'],
        oppositeIdioms: ['go-the-extra-mile', 'pull-your-weight']
      }
    ]
  }
];
