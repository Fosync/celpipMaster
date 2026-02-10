export type QuestionCategory = 'vocabulary' | 'grammar' | 'reading' | 'sentence-completion';
export type CLBRange = 4 | 5 | 6 | 7;

export interface PlacementQuestion {
  id: string;
  category: QuestionCategory;
  clbLevel: CLBRange; // 4=easiest, 7=hardest (7 means CLB 7-8)
  question: string;
  passage?: string; // only for reading questions
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const placementQuestions: PlacementQuestion[] = [
  // ============================================================
  // VOCABULARY QUESTIONS (12 total: 3 per CLB level)
  // ============================================================

  // --- CLB 4: Very basic everyday English ---
  {
    id: 'pl-vocab-4-1',
    category: 'vocabulary',
    clbLevel: 4,
    question: 'I need to buy some _____ at the grocery store, like apples and bananas.',
    options: ['furniture', 'fruit', 'clothing', 'medicine'],
    correctIndex: 1,
    explanation:
      'Apples and bananas are types of fruit. The other options do not include apples or bananas.',
  },
  {
    id: 'pl-vocab-4-2',
    category: 'vocabulary',
    clbLevel: 4,
    question: 'The opposite of "hot" is _____.',
    options: ['warm', 'cold', 'big', 'fast'],
    correctIndex: 1,
    explanation:
      '"Cold" is the opposite of "hot." "Warm" is similar to hot, not opposite.',
  },
  {
    id: 'pl-vocab-4-3',
    category: 'vocabulary',
    clbLevel: 4,
    question: 'My _____ is the person who lives next to my house.',
    options: ['neighbour', 'customer', 'colleague', 'stranger'],
    correctIndex: 0,
    explanation:
      'A neighbour is someone who lives next to you. A colleague is someone you work with, and a customer is someone who buys things.',
  },

  // --- CLB 5: Simple everyday conversations ---
  {
    id: 'pl-vocab-5-1',
    category: 'vocabulary',
    clbLevel: 5,
    question: 'She was very _____ after running for thirty minutes without stopping.',
    options: ['exhausted', 'excited', 'confused', 'impressed'],
    correctIndex: 0,
    explanation:
      '"Exhausted" means extremely tired, which is the natural result of running for a long time. The other options describe different feelings.',
  },
  {
    id: 'pl-vocab-5-2',
    category: 'vocabulary',
    clbLevel: 5,
    question: 'We need to _____ a table at the restaurant because it is always busy on weekends.',
    options: ['order', 'reserve', 'deliver', 'cancel'],
    correctIndex: 1,
    explanation:
      '"Reserve" means to book or hold a table in advance. You "order" food, not a table.',
  },
  {
    id: 'pl-vocab-5-3',
    category: 'vocabulary',
    clbLevel: 5,
    question: 'The weather _____ says it will snow tomorrow in Toronto.',
    options: ['report', 'forecast', 'warning', 'broadcast'],
    correctIndex: 1,
    explanation:
      'A weather "forecast" is a prediction of future weather conditions. A "report" describes current or past conditions, and a "warning" is issued for dangerous weather.',
  },

  // --- CLB 6: More complex, workplace/social English ---
  {
    id: 'pl-vocab-6-1',
    category: 'vocabulary',
    clbLevel: 6,
    question:
      'The company decided to _____ the project because it was over budget and behind schedule.',
    options: ['postpone', 'launch', 'expand', 'approve'],
    correctIndex: 0,
    explanation:
      '"Postpone" means to delay to a later time, which makes sense when a project is over budget and behind schedule. "Launch" and "expand" suggest moving forward, and "approve" means giving permission.',
  },
  {
    id: 'pl-vocab-6-2',
    category: 'vocabulary',
    clbLevel: 6,
    question:
      'Living in a big city can be convenient, but some people find it _____ because of all the noise and crowds.',
    options: ['affordable', 'overwhelming', 'predictable', 'spacious'],
    correctIndex: 1,
    explanation:
      '"Overwhelming" means too much to handle, which fits the context of noise and crowds being difficult to deal with.',
  },
  {
    id: 'pl-vocab-6-3',
    category: 'vocabulary',
    clbLevel: 6,
    question:
      'Her manager gave her a positive _____ during her annual review at work.',
    options: ['evaluation', 'donation', 'admission', 'objection'],
    correctIndex: 0,
    explanation:
      'An "evaluation" is a formal assessment, which is what happens during a workplace annual review. The other words do not relate to performance reviews.',
  },

  // --- CLB 7-8: Advanced, nuanced vocabulary ---
  {
    id: 'pl-vocab-7-1',
    category: 'vocabulary',
    clbLevel: 7,
    question:
      'The politician\'s speech was deliberately _____, avoiding any concrete commitments on the housing crisis.',
    options: ['eloquent', 'ambiguous', 'persuasive', 'concise'],
    correctIndex: 1,
    explanation:
      '"Ambiguous" means unclear or open to multiple interpretations. If the politician deliberately avoided concrete commitments, the speech was intentionally vague and unclear.',
  },
  {
    id: 'pl-vocab-7-2',
    category: 'vocabulary',
    clbLevel: 7,
    question:
      'The new immigration policy has _____ implications for newcomers who are waiting to bring their families to Canada.',
    options: ['negligible', 'superficial', 'profound', 'redundant'],
    correctIndex: 2,
    explanation:
      '"Profound" means very deep or significant. Policy changes affecting family reunification would have deep, far-reaching implications. "Negligible" means unimportant, and "superficial" means on the surface only.',
  },
  {
    id: 'pl-vocab-7-3',
    category: 'vocabulary',
    clbLevel: 7,
    question:
      'Despite the initial setbacks, the research team showed remarkable _____ and eventually achieved a breakthrough.',
    options: ['compliance', 'resilience', 'indifference', 'reluctance'],
    correctIndex: 1,
    explanation:
      '"Resilience" means the ability to recover from difficulties. The team overcame setbacks to achieve success, demonstrating resilience. "Compliance" means following rules, "indifference" means not caring, and "reluctance" means unwillingness.',
  },

  // ============================================================
  // GRAMMAR QUESTIONS (12 total: 3 per CLB level)
  // ============================================================

  // --- CLB 4: Simple present, basic prepositions, articles ---
  {
    id: 'pl-gram-4-1',
    category: 'grammar',
    clbLevel: 4,
    question: 'She _____ to work every morning by bus.',
    options: ['go', 'goes', 'going', 'gone'],
    correctIndex: 1,
    explanation:
      'With third-person singular subjects (she, he, it), we add "-s" or "-es" to the verb in the simple present tense. "She goes" is correct.',
  },
  {
    id: 'pl-gram-4-2',
    category: 'grammar',
    clbLevel: 4,
    question: 'The children are playing _____ the park.',
    options: ['on', 'at', 'in', 'to'],
    correctIndex: 2,
    explanation:
      'We use "in" with enclosed or defined spaces like parks, rooms, and cities. "In the park" is the correct preposition.',
  },
  {
    id: 'pl-gram-4-3',
    category: 'grammar',
    clbLevel: 4,
    question: 'I have _____ apple and _____ banana for lunch.',
    options: ['a / a', 'an / a', 'the / the', 'an / an'],
    correctIndex: 1,
    explanation:
      'We use "an" before words that start with a vowel sound ("an apple") and "a" before words that start with a consonant sound ("a banana").',
  },

  // --- CLB 5: Simple past/present, common structures ---
  {
    id: 'pl-gram-5-1',
    category: 'grammar',
    clbLevel: 5,
    question: 'We _____ to Vancouver last summer for a family vacation.',
    options: ['travel', 'travels', 'travelled', 'are travelling'],
    correctIndex: 2,
    explanation:
      '"Last summer" indicates past tense, so we need the simple past form "travelled." The present tense forms are incorrect for a completed past action.',
  },
  {
    id: 'pl-gram-5-2',
    category: 'grammar',
    clbLevel: 5,
    question: 'He _____ dinner when the phone rang.',
    options: ['cooks', 'is cooking', 'was cooking', 'has cooked'],
    correctIndex: 2,
    explanation:
      'We use the past continuous ("was cooking") for an action that was in progress when another action interrupted it ("the phone rang").',
  },
  {
    id: 'pl-gram-5-3',
    category: 'grammar',
    clbLevel: 5,
    question: 'There are not _____ chairs in the waiting room.',
    options: ['much', 'many', 'some', 'a lot'],
    correctIndex: 1,
    explanation:
      '"Many" is used with countable plural nouns like "chairs" in negative sentences. "Much" is used with uncountable nouns.',
  },

  // --- CLB 6: Modals, conditionals, more complex structures ---
  {
    id: 'pl-gram-6-1',
    category: 'grammar',
    clbLevel: 6,
    question: 'If I _____ more time, I would volunteer at the community centre.',
    options: ['have', 'had', 'will have', 'would have'],
    correctIndex: 1,
    explanation:
      'This is a second conditional sentence (unreal present/future). The structure is: "If + past simple, would + base verb." "If I had more time" is correct.',
  },
  {
    id: 'pl-gram-6-2',
    category: 'grammar',
    clbLevel: 6,
    question: 'You _____ wear a helmet when you ride a bicycle in this province. It is the law.',
    options: ['should', 'might', 'must', 'could'],
    correctIndex: 2,
    explanation:
      '"Must" expresses obligation or a legal requirement. Since it is the law, "must" is the correct modal. "Should" is a recommendation, and "might" and "could" express possibility.',
  },
  {
    id: 'pl-gram-6-3',
    category: 'grammar',
    clbLevel: 6,
    question:
      'She has been living in Calgary _____ she moved to Canada three years ago.',
    options: ['for', 'since', 'during', 'while'],
    correctIndex: 1,
    explanation:
      '"Since" is used with a specific point in time (when she moved). "For" is used with a duration of time (e.g., "for three years"). "During" and "while" do not fit this structure.',
  },

  // --- CLB 7-8: Passive voice, complex clauses, advanced structures ---
  {
    id: 'pl-gram-7-1',
    category: 'grammar',
    clbLevel: 7,
    question:
      'The new community centre _____ by the mayor at a ceremony next Monday.',
    options: [
      'will open',
      'will be opened',
      'is opening',
      'has been opened',
    ],
    correctIndex: 1,
    explanation:
      'This sentence requires the future passive voice because the community centre is receiving the action (being opened by the mayor). "Will be opened" is the correct future passive form.',
  },
  {
    id: 'pl-gram-7-2',
    category: 'grammar',
    clbLevel: 7,
    question:
      'Had the weather been better, we _____ the outdoor festival as planned.',
    options: [
      'would attend',
      'would have attended',
      'will attend',
      'had attended',
    ],
    correctIndex: 1,
    explanation:
      'This is a third conditional (unreal past) with inversion: "Had the weather been better" = "If the weather had been better." The result clause requires "would have + past participle."',
  },
  {
    id: 'pl-gram-7-3',
    category: 'grammar',
    clbLevel: 7,
    question:
      'The report, _____ was submitted by the finance department, contains several significant errors.',
    options: ['that', 'which', 'what', 'who'],
    correctIndex: 1,
    explanation:
      '"Which" is used in non-restrictive (non-defining) relative clauses, set off by commas. "That" is typically used in restrictive clauses without commas. Since the clause is surrounded by commas, "which" is correct.',
  },

  // ============================================================
  // READING COMPREHENSION QUESTIONS (12 total: 3 per CLB level)
  // ============================================================

  // --- CLB 4: Very basic passages ---
  {
    id: 'pl-read-4-1',
    category: 'reading',
    clbLevel: 4,
    passage:
      'The library is open from Monday to Saturday. It opens at 9:00 a.m. and closes at 6:00 p.m. On Saturday, it closes early at 3:00 p.m. The library is closed on Sunday.',
    question: 'What time does the library close on Saturday?',
    options: ['6:00 p.m.', '9:00 a.m.', '3:00 p.m.', '5:00 p.m.'],
    correctIndex: 2,
    explanation:
      'The passage states: "On Saturday, it closes early at 3:00 p.m." This is a straightforward detail question.',
  },
  {
    id: 'pl-read-4-2',
    category: 'reading',
    clbLevel: 4,
    passage:
      'Maria takes the bus to work every day. The bus stop is near her apartment. She waits for the number 7 bus. The ride to her office takes about 20 minutes.',
    question: 'How does Maria get to work?',
    options: ['She walks.', 'She drives a car.', 'She takes the bus.', 'She rides a bicycle.'],
    correctIndex: 2,
    explanation:
      'The first sentence clearly states: "Maria takes the bus to work every day."',
  },
  {
    id: 'pl-read-4-3',
    category: 'reading',
    clbLevel: 4,
    passage:
      'Today is very cold outside. The temperature is minus 15 degrees. Please wear a warm coat, hat, and gloves. Do not forget your boots because there is a lot of snow on the ground.',
    question: 'Why should you wear boots today?',
    options: [
      'Because it is raining.',
      'Because there is a lot of snow.',
      'Because the ground is wet.',
      'Because it is windy.',
    ],
    correctIndex: 1,
    explanation:
      'The passage states: "Do not forget your boots because there is a lot of snow on the ground." The reason is the snow.',
  },

  // --- CLB 5: Simple everyday passages ---
  {
    id: 'pl-read-5-1',
    category: 'reading',
    clbLevel: 5,
    passage:
      'The Rideau Canal in Ottawa becomes the world\'s largest skating rink every winter. People can skate almost 8 kilometres along the frozen canal. Many skaters stop to buy a BeaverTail pastry from the stands along the way. The skating season usually lasts from January to March, depending on the ice conditions.',
    question: 'What determines how long the skating season lasts?',
    options: [
      'The number of visitors',
      'The ice conditions',
      'The availability of BeaverTails',
      'The city government\'s decision',
    ],
    correctIndex: 1,
    explanation:
      'The passage states the skating season lasts "depending on the ice conditions." The season length is determined by whether the ice remains safe for skating.',
  },
  {
    id: 'pl-read-5-2',
    category: 'reading',
    clbLevel: 5,
    passage:
      'Sarah moved to Halifax last year. At first, she did not know anyone in the city. She joined a community walking group and a book club at the local library. Now she has many friends and feels at home in her new city.',
    question: 'What helped Sarah make friends in Halifax?',
    options: [
      'She found a job quickly.',
      'She joined community activities.',
      'Her neighbours invited her to dinner.',
      'She already knew people there.',
    ],
    correctIndex: 1,
    explanation:
      'The passage says Sarah "joined a community walking group and a book club," which are community activities. These helped her make friends.',
  },
  {
    id: 'pl-read-5-3',
    category: 'reading',
    clbLevel: 5,
    passage:
      'Tim Hortons is one of the most popular coffee chains in Canada. It was started in 1964 by a hockey player named Tim Horton. The restaurant is famous for its coffee and doughnuts. Today, there are thousands of Tim Hortons locations across Canada and in other countries.',
    question: 'Who started Tim Hortons?',
    options: [
      'A businessman from Toronto',
      'A group of coffee farmers',
      'A hockey player',
      'A famous chef',
    ],
    correctIndex: 2,
    explanation:
      'The passage clearly states: "It was started in 1964 by a hockey player named Tim Horton."',
  },

  // --- CLB 6: More complex passages ---
  {
    id: 'pl-read-6-1',
    category: 'reading',
    clbLevel: 6,
    passage:
      'Many Canadian employers now offer flexible work arrangements, including remote work and compressed work weeks. A compressed work week means employees work longer hours on fewer days, for example, four 10-hour days instead of five 8-hour days. Supporters say this improves work-life balance and reduces commuting costs. However, critics argue that longer workdays can lead to fatigue and lower productivity in the afternoon.',
    question: 'What is one concern critics have about compressed work weeks?',
    options: [
      'Employees earn less money.',
      'It is difficult to schedule meetings.',
      'Longer workdays may cause fatigue and reduce productivity.',
      'Employers cannot monitor remote workers.',
    ],
    correctIndex: 2,
    explanation:
      'The passage states that "critics argue that longer workdays can lead to fatigue and lower productivity in the afternoon." This is the concern mentioned.',
  },
  {
    id: 'pl-read-6-2',
    category: 'reading',
    clbLevel: 6,
    passage:
      'Recycling rules vary across Canadian municipalities. In some cities, residents must separate paper, plastic, glass, and organic waste into different bins. Other cities use a single-stream system where all recyclables go into one bin and are sorted at a facility. Contamination, which occurs when non-recyclable items are placed in recycling bins, remains a significant challenge for both systems.',
    question: 'What does "contamination" refer to in this passage?',
    options: [
      'Pollution from recycling factories',
      'Mixing different types of recyclables together',
      'Putting non-recyclable items in recycling bins',
      'Using too many plastic bags',
    ],
    correctIndex: 2,
    explanation:
      'The passage defines contamination directly: it "occurs when non-recyclable items are placed in recycling bins."',
  },
  {
    id: 'pl-read-6-3',
    category: 'reading',
    clbLevel: 6,
    passage:
      'The Canadian healthcare system, known as Medicare, provides publicly funded medical services to all residents. Each province and territory manages its own health insurance plan, which is why coverage can vary slightly depending on where you live. While doctor visits and hospital stays are covered, services such as dental care, prescription drugs, and vision care are generally not included and must be paid for privately or through employer benefits.',
    question: 'According to the passage, which service is NOT typically covered by Medicare?',
    options: [
      'Doctor visits',
      'Hospital stays',
      'Dental care',
      'Emergency room treatment',
    ],
    correctIndex: 2,
    explanation:
      'The passage explicitly states that "dental care, prescription drugs, and vision care are generally not included" in Medicare coverage.',
  },

  // --- CLB 7-8: Advanced passages with inference ---
  {
    id: 'pl-read-7-1',
    category: 'reading',
    clbLevel: 7,
    passage:
      'Canada\'s Official Languages Act, first enacted in 1969, established English and French as the country\'s two official languages. The Act was a response to growing tensions between anglophone and francophone communities, particularly in Quebec. While the legislation ensured that federal services would be available in both languages, it did not address the linguistic rights of Indigenous peoples, whose languages had been systematically suppressed through residential schools and colonial policies. Today, many Indigenous communities are engaged in language revitalization efforts to preserve their linguistic heritage.',
    question: 'What can be inferred about Indigenous languages from this passage?',
    options: [
      'They are protected under the Official Languages Act.',
      'They were historically marginalized and are now being actively preserved.',
      'They are spoken by most Canadians.',
      'They were not affected by colonial policies.',
    ],
    correctIndex: 1,
    explanation:
      'The passage states Indigenous languages were "systematically suppressed" and that communities are now "engaged in language revitalization efforts." This implies they were historically marginalized and are now being actively preserved.',
  },
  {
    id: 'pl-read-7-2',
    category: 'reading',
    clbLevel: 7,
    passage:
      'Urban sprawl continues to be a contentious issue in Canadian cities such as Toronto and Vancouver. As housing prices in city centres have skyrocketed, many families have been pushed to suburban developments on the outskirts. While suburban housing is more affordable, residents often face long commutes, limited access to public transit, and a heavier reliance on personal vehicles. Environmental advocates argue that sprawl contributes to habitat destruction, increased greenhouse gas emissions, and the loss of valuable agricultural land.',
    question:
      'Which of the following best describes the author\'s presentation of urban sprawl?',
    options: [
      'Entirely positive, highlighting affordable housing options',
      'Entirely negative, condemning suburban development',
      'Balanced, acknowledging affordability benefits while noting environmental and lifestyle drawbacks',
      'Neutral, presenting only facts without any perspective',
    ],
    correctIndex: 2,
    explanation:
      'The author acknowledges that suburban housing is "more affordable" (a benefit) while also presenting drawbacks such as long commutes, limited transit, and environmental concerns. This is a balanced presentation.',
  },
  {
    id: 'pl-read-7-3',
    category: 'reading',
    clbLevel: 7,
    passage:
      'The gig economy has fundamentally altered the employment landscape in Canada. Platforms that connect freelancers with clients have enabled greater flexibility, allowing workers to set their own schedules and choose their projects. However, this model has also raised concerns about the erosion of traditional employment protections. Gig workers are typically classified as independent contractors, which means they are not entitled to benefits such as employer-provided health insurance, paid sick leave, or pension contributions. Several provinces are now examining legislation that would extend certain protections to this growing segment of the workforce.',
    question:
      'Why are gig workers at a disadvantage compared to traditional employees, according to the passage?',
    options: [
      'They are required to work longer hours.',
      'They cannot choose their own projects.',
      'They lack access to standard employment benefits and protections.',
      'They are paid significantly less per hour.',
    ],
    correctIndex: 2,
    explanation:
      'The passage explains that gig workers, classified as independent contractors, "are not entitled to benefits such as employer-provided health insurance, paid sick leave, or pension contributions." They lack standard employment protections.',
  },

  // ============================================================
  // SENTENCE COMPLETION QUESTIONS (12 total: 3 per CLB level)
  // ============================================================

  // --- CLB 4: Very basic sentence completion ---
  {
    id: 'pl-sent-4-1',
    category: 'sentence-completion',
    clbLevel: 4,
    question: 'I am thirsty. Can I have a glass of _____?',
    options: ['bread', 'water', 'rice', 'paper'],
    correctIndex: 1,
    explanation:
      'When you are thirsty, you drink something. "Water" is a liquid you can drink from a glass. The other options are not drinks.',
  },
  {
    id: 'pl-sent-4-2',
    category: 'sentence-completion',
    clbLevel: 4,
    question: 'It is raining outside, so I need to take my _____.',
    options: ['umbrella', 'sunglasses', 'swimsuit', 'sandals'],
    correctIndex: 0,
    explanation:
      'An umbrella protects you from rain. Sunglasses, a swimsuit, and sandals are for sunny weather, not rainy weather.',
  },
  {
    id: 'pl-sent-4-3',
    category: 'sentence-completion',
    clbLevel: 4,
    question: 'Please turn off the _____ before you go to sleep.',
    options: ['window', 'pillow', 'light', 'blanket'],
    correctIndex: 2,
    explanation:
      'You "turn off" a light. Windows are opened or closed, and pillows and blankets are not turned off.',
  },

  // --- CLB 5: Simple everyday sentence completion ---
  {
    id: 'pl-sent-5-1',
    category: 'sentence-completion',
    clbLevel: 5,
    question:
      'I missed the bus this morning, so I _____ to walk to work instead.',
    options: ['had', 'used', 'got', 'made'],
    correctIndex: 0,
    explanation:
      '"Had to" expresses necessity or obligation. Because the bus was missed, walking became necessary. "Had to walk" is the correct expression.',
  },
  {
    id: 'pl-sent-5-2',
    category: 'sentence-completion',
    clbLevel: 5,
    question:
      'Could you please _____ me the directions to the nearest pharmacy?',
    options: ['say', 'tell', 'speak', 'talk'],
    correctIndex: 1,
    explanation:
      '"Tell" is used when giving information to a specific person: "tell me." "Say" does not take an indirect object directly (you say something, not say me something). "Speak" and "talk" do not fit this structure.',
  },
  {
    id: 'pl-sent-5-3',
    category: 'sentence-completion',
    clbLevel: 5,
    question:
      'The movie was so boring that I fell _____ in the middle of it.',
    options: ['down', 'apart', 'asleep', 'behind'],
    correctIndex: 2,
    explanation:
      '"Fell asleep" means to begin sleeping, often unintentionally. A boring movie could cause someone to fall asleep. The other phrasal verbs do not make sense in this context.',
  },

  // --- CLB 6: More complex sentence completion ---
  {
    id: 'pl-sent-6-1',
    category: 'sentence-completion',
    clbLevel: 6,
    question:
      'Despite the heavy snowfall, the city managed to keep all major roads _____ throughout the storm.',
    options: ['accessible', 'visible', 'available', 'responsible'],
    correctIndex: 0,
    explanation:
      '"Accessible" means able to be reached or used. Keeping roads accessible during a snowstorm means they remain open for traffic. "Available" is used for things like products or services, not roads.',
  },
  {
    id: 'pl-sent-6-2',
    category: 'sentence-completion',
    clbLevel: 6,
    question:
      'The landlord agreed to _____ the rent if the tenant signed a two-year lease instead of a one-year lease.',
    options: ['raise', 'reduce', 'remove', 'replace'],
    correctIndex: 1,
    explanation:
      '"Reduce" means to lower or decrease. A landlord might lower the rent as an incentive for a longer lease commitment. "Raise" means to increase, which would not be an incentive.',
  },
  {
    id: 'pl-sent-6-3',
    category: 'sentence-completion',
    clbLevel: 6,
    question:
      'She decided to _____ her complaint with the customer service department after receiving the wrong order twice.',
    options: ['withdraw', 'escalate', 'decline', 'postpone'],
    correctIndex: 1,
    explanation:
      '"Escalate" means to raise to a higher level of urgency or authority. After receiving the wrong order twice, it makes sense to escalate the complaint. "Withdraw" means to take back, and "decline" means to refuse.',
  },

  // --- CLB 7-8: Advanced sentence completion ---
  {
    id: 'pl-sent-7-1',
    category: 'sentence-completion',
    clbLevel: 7,
    question:
      'The committee has yet to reach a consensus, as several members remain _____ about the proposed changes to the zoning bylaw.',
    options: ['enthusiastic', 'indifferent', 'sceptical', 'supportive'],
    correctIndex: 2,
    explanation:
      '"Sceptical" means having doubts or reservations. If the committee cannot reach a consensus, some members have doubts about the proposal. "Indifferent" means not caring, which would not prevent consensus. "Enthusiastic" and "supportive" would help reach agreement, not prevent it.',
  },
  {
    id: 'pl-sent-7-2',
    category: 'sentence-completion',
    clbLevel: 7,
    question:
      'The new regulation was intended to _____ consumer rights, but critics argue it has inadvertently created more bureaucratic obstacles for small businesses.',
    options: ['undermine', 'safeguard', 'diminish', 'exploit'],
    correctIndex: 1,
    explanation:
      '"Safeguard" means to protect. The sentence contrasts the regulation\'s intended purpose (protecting consumers) with its unintended consequence (bureaucratic obstacles). "Undermine," "diminish," and "exploit" all have negative meanings that do not fit the intended purpose.',
  },
  {
    id: 'pl-sent-7-3',
    category: 'sentence-completion',
    clbLevel: 7,
    question:
      'Although the evidence presented was largely _____, the jury was persuaded more by the emotional testimony of the witnesses than by the statistical data.',
    options: ['anecdotal', 'empirical', 'hypothetical', 'speculative'],
    correctIndex: 1,
    explanation:
      '"Empirical" means based on observation and data. The sentence contrasts the evidence (statistical, data-driven) with emotional testimony, suggesting the evidence was empirical but the jury preferred the emotional appeal. "Anecdotal" means based on personal stories, which is the opposite of statistical data.',
  },
];
