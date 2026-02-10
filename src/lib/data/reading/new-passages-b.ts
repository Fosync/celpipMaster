import type { ReadingPassage } from './types';

export const newPassagesB: ReadingPassage[] = [
  // ============================================================
  // CLB 6 — OPINION: Online Shopping vs In-Store Shopping
  // ============================================================
  {
    id: 'reading-online-vs-instore',
    title: 'Online Shopping vs In-Store Shopping',
    description: 'Read two viewpoints on online and in-store shopping, then answer questions.',
    passageType: 'opinion',
    clbLevel: 6,
    icon: '💬',
    timeLimit: 360,
    passage:
      'Online Shopping vs In-Store Shopping: Two Canadian Shoppers Share Their Views\n\nViewpoint A — Lisa Park, Edmonton\n\nI do almost all of my shopping online these days, and I honestly cannot imagine going back. The **convenience** is unbeatable — I can browse thousands of products from my couch at midnight without worrying about store hours. Prices are often lower online because retailers have fewer **overhead** costs like rent and staff wages. I also love being able to read customer reviews before making a purchase, which helps me avoid buying something I will regret. Free shipping and easy return policies have made the experience even more **appealing**. For anyone with a busy schedule, online shopping is simply the smarter choice.\n\nViewpoint B — Marco DiNardo, Calgary\n\nI still prefer shopping in person whenever possible. When I walk into a store, I can touch the fabric of a shirt, try on shoes, and see the true colour of a product — something a screen cannot **replicate**. In-store shopping also means I get my items immediately instead of waiting days for **delivery**. Beyond the practical side, I enjoy the social experience of going to a mall or a local market. It supports the **local economy** too, because my money goes directly to businesses in my **neighbourhood**. Online shopping might be faster, but in-store shopping gives me more **confidence** in what I am buying.',
    questions: [
      {
        id: 'reading-online-vs-instore-q1',
        question: 'What is the main reason Lisa prefers online shopping?',
        options: [
          'She enjoys the social experience of browsing websites',
          'She finds it more convenient and often cheaper',
          'She likes collecting shipping boxes',
          'She does not have any stores near her home',
        ],
        correctIndex: 1,
        explanation:
          'Lisa highlights convenience as "unbeatable" and mentions that prices are often lower online due to fewer overhead costs.',
      },
      {
        id: 'reading-online-vs-instore-q2',
        question: 'Why does Marco feel more confident shopping in stores?',
        options: [
          'Because store employees make decisions for him',
          'Because stores always have lower prices',
          'Because he can physically see, touch, and try products before buying',
          'Because online stores frequently send wrong items',
        ],
        correctIndex: 2,
        explanation:
          'Marco explains that he can "touch the fabric of a shirt, try on shoes, and see the true colour of a product," which gives him more confidence in his purchases.',
      },
      {
        id: 'reading-online-vs-instore-q3',
        question: 'What does the word "replicate" most likely mean in Marco\'s viewpoint?',
        options: [
          'Improve upon',
          'Copy or reproduce accurately',
          'Sell at a discount',
          'Display in a different language',
        ],
        correctIndex: 1,
        explanation:
          '"Replicate" means to copy or reproduce something. Marco is saying a screen cannot accurately reproduce the experience of seeing and touching products in person.',
      },
      {
        id: 'reading-online-vs-instore-q4',
        question: 'Which point do both Lisa and Marco agree on?',
        options: [
          'Online shopping is always cheaper than in-store shopping',
          'In-store shopping takes too much time',
          'Shopping is an important part of daily life',
          'Online shopping offers speed and convenience as an advantage',
        ],
        correctIndex: 3,
        explanation:
          'Both acknowledge the speed and convenience of online shopping. Lisa sees it as the main benefit, and Marco admits "online shopping might be faster," though he still prefers in-store shopping for other reasons.',
      },
      {
        id: 'reading-online-vs-instore-q5',
        question: 'What additional benefit does Marco mention about shopping locally?',
        options: [
          'Local stores always offer free parking',
          'It supports the local economy and neighbourhood businesses',
          'Local products are always handmade',
          'He receives loyalty points at every local store',
        ],
        correctIndex: 1,
        explanation:
          'Marco states that in-store shopping "supports the local economy" because his money goes directly to businesses in his neighbourhood.',
      },
    ],
    keyVocabulary: [
      { word: 'convenience', definition: 'the quality of being easy, useful, and suitable for someone', turkish: 'kolaylık' },
      { word: 'overhead', definition: 'regular business costs like rent, electricity, and wages', turkish: 'genel gider' },
      { word: 'appealing', definition: 'attractive or interesting', turkish: 'çekici' },
      { word: 'replicate', definition: 'to copy or reproduce something exactly', turkish: 'kopyalamak' },
      { word: 'delivery', definition: 'the process of bringing goods to a person or place', turkish: 'teslimat' },
      { word: 'local economy', definition: 'the financial activity and businesses within a community or area', turkish: 'yerel ekonomi' },
      { word: 'confidence', definition: 'a feeling of trust or certainty about something', turkish: 'güven' },
    ],
  },

  // ============================================================
  // CLB 7 — OPINION: Should Children Have Smartphones?
  // ============================================================
  {
    id: 'reading-children-smartphones',
    title: 'Should Children Have Smartphones?',
    description: 'Read two opposing viewpoints about children and smartphone use, then answer questions.',
    passageType: 'opinion',
    clbLevel: 7,
    icon: '💬',
    timeLimit: 360,
    passage:
      'Should Children Have Smartphones? A Parenting Debate\n\nViewpoint A — Dr. Karen Fong, Child Psychologist, Toronto\n\nI strongly believe that children under 13 should not have their own smartphones. Research consistently shows that early smartphone use is linked to increased **anxiety**, poor sleep quality, and reduced attention spans in young people. Social media platforms, in particular, expose children to **cyberbullying**, inappropriate content, and unrealistic body image standards. Many children lack the **maturity** to manage screen time responsibly, leading to **excessive** use that interferes with homework, physical activity, and face-to-face social development. Instead of handing a child a smartphone, parents should encourage outdoor play, reading, and supervised computer time. If safety is a concern, a basic phone that only makes calls and sends texts is a far better **alternative**.\n\nViewpoint B — James Whitfield, Technology Educator, Vancouver\n\nWhile I understand the concerns, I believe that **restricting** children from smartphones entirely is **unrealistic** in today\'s digital world. Technology is deeply embedded in modern education — many schools use apps for homework, communication, and classroom collaboration. Children who grow up without exposure to digital tools risk falling behind their peers. The key is not to ban smartphones but to teach children responsible digital **citizenship**: how to manage screen time, identify reliable information, and interact safely online. Parents can use parental controls, set clear rules, and maintain open conversations about online safety. A smartphone, when used thoughtfully, can be a powerful learning tool that prepares children for the technology-driven world they will inherit.',
    questions: [
      {
        id: 'reading-children-smartphones-q1',
        question: 'What is Dr. Fong\'s main argument against children having smartphones?',
        options: [
          'Smartphones are too expensive for families with children',
          'Early smartphone use harms children\'s mental health, sleep, and social development',
          'Children always break their phones within the first month',
          'Smartphones prevent children from learning how to use computers',
        ],
        correctIndex: 1,
        explanation:
          'Dr. Fong argues that smartphone use is linked to increased anxiety, poor sleep, reduced attention spans, and interference with social development and physical activity.',
      },
      {
        id: 'reading-children-smartphones-q2',
        question: 'What alternative does Dr. Fong suggest for parents concerned about safety?',
        options: [
          'A GPS tracking device worn on the wrist',
          'A basic phone that only makes calls and sends texts',
          'Walking the child to school every day',
          'Installing security cameras at home',
        ],
        correctIndex: 1,
        explanation:
          'Dr. Fong suggests: "If safety is a concern, a basic phone that only makes calls and sends texts is a far better alternative."',
      },
      {
        id: 'reading-children-smartphones-q3',
        question: 'According to James Whitfield, why is banning smartphones unrealistic?',
        options: [
          'Because all schools require students to own smartphones',
          'Because smartphones are given out for free by the government',
          'Because technology is deeply embedded in modern education and daily life',
          'Because children will simply buy phones without their parents\' knowledge',
        ],
        correctIndex: 2,
        explanation:
          'Whitfield argues that technology is deeply embedded in modern education, with schools using apps for homework, communication, and collaboration, making a complete ban unrealistic.',
      },
      {
        id: 'reading-children-smartphones-q4',
        question: 'What does "digital citizenship" mean in the context of this passage?',
        options: [
          'Having a government-issued digital identity card',
          'The responsible and safe use of technology and online platforms',
          'Being a citizen of a country with advanced technology',
          'Owning multiple digital devices and accounts',
        ],
        correctIndex: 1,
        explanation:
          'In this context, "digital citizenship" refers to responsible behaviour online, including managing screen time, identifying reliable information, and interacting safely — skills Whitfield believes children should be taught.',
      },
      {
        id: 'reading-children-smartphones-q5',
        question: 'How do the two authors\' approaches to the issue fundamentally differ?',
        options: [
          'Dr. Fong focuses on cost while Whitfield focuses on convenience',
          'Dr. Fong advocates prevention through restriction while Whitfield advocates preparation through education',
          'Dr. Fong is a parent while Whitfield is not',
          'Dr. Fong supports social media while Whitfield opposes it',
        ],
        correctIndex: 1,
        explanation:
          'Dr. Fong believes in protecting children by restricting access to smartphones, while Whitfield believes in preparing children by teaching them to use technology responsibly. Their core disagreement is restriction versus education.',
      },
    ],
    keyVocabulary: [
      { word: 'anxiety', definition: 'a feeling of worry, nervousness, or unease about something', turkish: 'kaygı' },
      { word: 'cyberbullying', definition: 'the use of electronic communication to bully or harass someone', turkish: 'siber zorbalık' },
      { word: 'maturity', definition: 'the quality of being fully developed in thought and behaviour', turkish: 'olgunluk' },
      { word: 'excessive', definition: 'more than what is normal, necessary, or reasonable', turkish: 'aşırı' },
      { word: 'alternative', definition: 'another option or choice available instead', turkish: 'alternatif' },
      { word: 'restricting', definition: 'limiting or preventing someone from doing something', turkish: 'kısıtlama' },
      { word: 'unrealistic', definition: 'not practical or achievable; not based on reality', turkish: 'gerçekçi olmayan' },
      { word: 'citizenship', definition: 'the responsibilities and behaviour expected of a member of a community', turkish: 'vatandaşlık' },
    ],
  },

  // ============================================================
  // CLB 5 — DIAGRAM: Monthly Budget Comparison Chart
  // ============================================================
  {
    id: 'reading-budget-chart',
    title: 'Monthly Budget Comparison Chart',
    description: 'Read a monthly budget comparison between two families and answer questions.',
    passageType: 'diagram',
    clbLevel: 5,
    icon: '📊',
    timeLimit: 300,
    passage:
      'MONTHLY BUDGET COMPARISON — JANUARY 2026\nPrepared by: Brampton Community Financial Literacy Program\n\nThe following chart compares the monthly **expenses** of two families living in Brampton, Ontario. Both families have a combined household **income** of $5,500 per month after taxes.\n\nThe Nguyen Family (2 adults, 1 child — renting an apartment):\n- Rent: $1,800 (32.7% of income)\n- Groceries: $750 (13.6%)\n- Transportation (car payment, gas, insurance): $680 (12.4%)\n- Childcare: $600 (10.9%)\n- Utilities (hydro, internet, phone): $320 (5.8%)\n- Entertainment & Dining Out: $200 (3.6%)\n- Clothing: $100 (1.8%)\n- **Savings**: $350 (6.4%)\n- Other (medical, personal, miscellaneous): $700 (12.7%)\n- TOTAL: $5,500\n\nThe Morrison Family (2 adults, 2 children — renting a townhouse):\n- Rent: $2,200 (40.0% of income)\n- Groceries: $900 (16.4%)\n- Transportation (bus passes, occasional taxi): $280 (5.1%)\n- Childcare: $450 (8.2%)\n- Utilities (hydro, internet, phone): $350 (6.4%)\n- Entertainment & Dining Out: $150 (2.7%)\n- Clothing: $180 (3.3%)\n- **Savings**: $150 (2.7%)\n- Other (medical, personal, miscellaneous): $840 (15.3%)\n- TOTAL: $5,500\n\nNOTES:\n- The **average** rent for a two-bedroom apartment in Brampton is approximately $1,750 per month.\n- Financial advisors generally recommend saving at least 10% of monthly income.\n- Both families are **enrolled** in the Ontario Trillium Benefit program for additional support.',
    questions: [
      {
        id: 'reading-budget-chart-q1',
        question: 'Which family spends more on groceries, and by how much?',
        options: [
          'The Nguyen family spends $150 more',
          'The Morrison family spends $150 more',
          'The Morrison family spends $200 more',
          'Both families spend the same amount on groceries',
        ],
        correctIndex: 1,
        explanation:
          'The Morrison family spends $900 on groceries and the Nguyen family spends $750. The difference is $900 - $750 = $150 more for the Morrison family.',
      },
      {
        id: 'reading-budget-chart-q2',
        question: 'Which family saves a higher percentage of their income?',
        options: [
          'The Nguyen family at 6.4%',
          'The Morrison family at 2.7%',
          'Both families save the same percentage',
          'Neither family saves any money',
        ],
        correctIndex: 0,
        explanation:
          'The Nguyen family saves 6.4% of their income ($350), while the Morrison family saves only 2.7% ($150). However, neither family meets the recommended 10% savings rate.',
      },
      {
        id: 'reading-budget-chart-q3',
        question: 'Why is the Morrison family\'s transportation cost much lower than the Nguyen family\'s?',
        options: [
          'The Morrison family works from home',
          'The Morrison family uses bus passes instead of owning a car',
          'The Morrison family lives closer to downtown',
          'The Morrison family does not travel anywhere',
        ],
        correctIndex: 1,
        explanation:
          'The Nguyen family pays $680 for car payment, gas, and insurance, while the Morrison family pays only $280 for bus passes and occasional taxis, indicating they use public transit instead of owning a car.',
      },
      {
        id: 'reading-budget-chart-q4',
        question: 'What does the word "expenses" mean in this passage?',
        options: [
          'Money that a family earns from working',
          'Money that a family spends on goods and services',
          'Money that a family saves in the bank',
          'Money that a family borrows from others',
        ],
        correctIndex: 1,
        explanation:
          '"Expenses" refers to the money spent on various goods and services like rent, groceries, and transportation. It is different from income (money earned) or savings (money set aside).',
      },
      {
        id: 'reading-budget-chart-q5',
        question: 'What is the largest expense category for both families?',
        options: [
          'Groceries',
          'Childcare',
          'Rent',
          'Transportation',
        ],
        correctIndex: 2,
        explanation:
          'Rent is the largest expense for both families: $1,800 (32.7%) for the Nguyen family and $2,200 (40.0%) for the Morrison family.',
      },
    ],
    keyVocabulary: [
      { word: 'expenses', definition: 'the money spent on goods and services', turkish: 'harcamalar' },
      { word: 'income', definition: 'money received from work or other sources', turkish: 'gelir' },
      { word: 'savings', definition: 'money set aside for future use', turkish: 'tasarruf' },
      { word: 'average', definition: 'the typical or usual amount calculated from a set of numbers', turkish: 'ortalama' },
      { word: 'enrolled', definition: 'officially registered or signed up for a program', turkish: 'kayıtlı' },
      { word: 'budget', definition: 'a plan for how to spend money over a period of time', turkish: 'bütçe' },
      { word: 'utilities', definition: 'essential services like electricity, water, gas, and internet', turkish: 'faturalar' },
    ],
  },

  // ============================================================
  // CLB 7 — DIAGRAM: Company Employee Satisfaction Survey
  // ============================================================
  {
    id: 'reading-employee-survey',
    title: 'Company Employee Satisfaction Survey Results',
    description: 'Read employee satisfaction survey results and answer questions about the data.',
    passageType: 'diagram',
    clbLevel: 7,
    icon: '📊',
    timeLimit: 360,
    passage:
      'MAPLEWOOD TECHNOLOGIES INC. — 2025 ANNUAL EMPLOYEE SATISFACTION SURVEY RESULTS\nPrepared by: Human Resources Department | Survey Period: November 1–15, 2025\nTotal Employees Surveyed: 420 out of 500 (84% **participation** rate)\n\nOverall Satisfaction by Department:\n- Engineering (120 respondents): 78% satisfied or very satisfied\n- Sales & Marketing (85 respondents): 62% satisfied or very satisfied\n- Customer Support (95 respondents): 54% satisfied or very satisfied\n- Human Resources (40 respondents): 81% satisfied or very satisfied\n- Finance & Operations (80 respondents): 73% satisfied or very satisfied\n\nKey Findings by Category (Company-Wide Averages):\n- Work-Life Balance: 71% positive — up from 58% in 2024. Employees credited the new **flexible** work schedule introduced in March 2025.\n- Compensation & Benefits: 59% positive — down from 64% in 2024. Many employees feel salaries have not kept pace with the rising cost of living in the Greater Toronto Area.\n- Career Development: 48% positive — the lowest-rated category. Employees in Customer Support and Sales reported limited **opportunities** for promotion and skill training.\n- Management & Leadership: 67% positive — unchanged from 2024. The Engineering and HR departments rated leadership highest, while Customer Support rated it lowest at 51%.\n- Workplace Culture: 74% positive — the highest-rated category. Employees highlighted the **inclusive** team environment and company social events as strengths.\n\nTop Employee Concerns (Open-Ended Responses — 312 comments received):\n1. Salary **competitiveness** compared to industry standards (mentioned by 38% of respondents)\n2. Limited career advancement paths, especially in junior roles (mentioned by 27%)\n3. Workload distribution — some teams feel **understaffed** (mentioned by 19%)\n4. Office commute challenges due to limited parking and transit options (mentioned by 16%)\n\nManagement Response:\nCEO David Chen stated: "We are committed to addressing the **feedback** from this survey. A comprehensive compensation review will be completed by Q1 2026, and we will launch a new professional development program targeting high-potential employees across all departments."',
    questions: [
      {
        id: 'reading-employee-survey-q1',
        question: 'Which department reported the lowest employee satisfaction?',
        options: [
          'Engineering',
          'Sales & Marketing',
          'Customer Support',
          'Finance & Operations',
        ],
        correctIndex: 2,
        explanation:
          'Customer Support had the lowest satisfaction rate at 54% satisfied or very satisfied, compared to Engineering (78%), Sales & Marketing (62%), Finance & Operations (73%), and HR (81%).',
      },
      {
        id: 'reading-employee-survey-q2',
        question: 'What caused the improvement in Work-Life Balance satisfaction from 2024 to 2025?',
        options: [
          'The company hired more employees to reduce workloads',
          'The company introduced a flexible work schedule in March 2025',
          'Employees received a salary increase',
          'The office moved to a more convenient location',
        ],
        correctIndex: 1,
        explanation:
          'The survey states that Work-Life Balance rose from 58% to 71% positive, and "employees credited the new flexible work schedule introduced in March 2025."',
      },
      {
        id: 'reading-employee-survey-q3',
        question: 'What was the most common concern raised in open-ended responses?',
        options: [
          'Limited career advancement paths',
          'Office commute challenges',
          'Salary competitiveness compared to industry standards',
          'Workload distribution and understaffing',
        ],
        correctIndex: 2,
        explanation:
          'Salary competitiveness was the most frequently mentioned concern, raised by 38% of respondents who submitted open-ended comments.',
      },
      {
        id: 'reading-employee-survey-q4',
        question: 'What does the word "competitiveness" mean in the context of salary concerns?',
        options: [
          'The desire to compete with colleagues for a promotion',
          'How salaries compare to those offered by other companies in the industry',
          'The pressure to work harder than other employees',
          'A bonus system based on employee performance rankings',
        ],
        correctIndex: 1,
        explanation:
          'In this context, "salary competitiveness" refers to how Maplewood Technologies\' salaries compare to those offered by other companies in the same industry. Employees feel their pay does not match industry standards.',
      },
      {
        id: 'reading-employee-survey-q5',
        question: 'Based on the survey results, which of the following statements is true?',
        options: [
          'More than 90% of employees participated in the survey',
          'Workplace Culture was the lowest-rated category company-wide',
          'Career Development was the lowest-rated category and Customer Support had the lowest department satisfaction',
          'The CEO announced that all employees would receive an immediate raise',
        ],
        correctIndex: 2,
        explanation:
          'Career Development was the lowest-rated category at 48% positive, and Customer Support had the lowest department satisfaction at 54%. The participation rate was 84% (not over 90%), Workplace Culture was the highest-rated (not lowest), and the CEO promised a compensation review, not an immediate raise.',
      },
    ],
    keyVocabulary: [
      { word: 'participation', definition: 'the act of taking part in something', turkish: 'katılım' },
      { word: 'flexible', definition: 'able to change or be adapted to different situations', turkish: 'esnek' },
      { word: 'opportunities', definition: 'chances or possibilities for progress or advancement', turkish: 'fırsatlar' },
      { word: 'inclusive', definition: 'welcoming and open to all people regardless of differences', turkish: 'kapsayıcı' },
      { word: 'competitiveness', definition: 'the ability to match or compare favourably with others', turkish: 'rekabet gücü' },
      { word: 'understaffed', definition: 'not having enough employees to do the required work', turkish: 'yetersiz personel' },
      { word: 'feedback', definition: 'opinions or information given about something to help improve it', turkish: 'geri bildirim' },
    ],
  },
];
