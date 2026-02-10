import type { GrammarTopic } from './types';

export const grammarTopicsCLB6_7: GrammarTopic[] = [
  // ============================================================
  // TOPIC 1: Present Perfect Tense (CLB 6)
  // ============================================================
  {
    id: 'grammar-present-perfect',
    title: 'Present Perfect Tense',
    description:
      'Learn to use have/has + past participle to talk about experiences, unfinished time, and recent changes.',
    clbLevel: 6,
    category: 'Tenses',
    icon: '✅',
    words: [
      {
        id: 'grammar-present-perfect-1',
        rule: 'Subject + have/has + past participle',
        explanation:
          'Use present perfect to talk about experiences or actions with a connection to now.',
        example: 'I have lived in Toronto for three years.',
        turkishMeaning:
          'Simdiki bitmis zaman: have/has + fiilin ucuncu hali. Gecmiste baslayip simdiye baglanan eylemler.',
        clbLevel: 6,
        category: 'Tenses',
        difficulty: 'basic',
        celpipContext:
          'This is one of the most tested tenses in CELPIP. It appears in Reading, Writing, and Listening sections when discussing experiences or ongoing situations.',
        commonMistake:
          'Using simple past instead of present perfect: "I lived here for three years" instead of "I have lived here for three years."',
        turkishExplanation:
          'Turkce de boyle bir zaman yoktur. "Uc yildir burada yasiyorum" ifadesi Turkce de genis zaman ile verilir, ancak Ingilizce de present perfect kullanilir.',
      },
      {
        id: 'grammar-present-perfect-2',
        rule: 'Since (specific point) / For (duration)',
        explanation:
          'Use "since" with a specific point in time and "for" with a period of time.',
        example: 'She has worked at the hospital since 2019. He has studied English for two years.',
        turkishMeaning:
          '"Since" belirli bir zaman noktasi icin, "for" bir sure belirtmek icin kullanilir. Since = -den beri, For = -dir/-dir.',
        clbLevel: 6,
        category: 'Tenses',
        difficulty: 'basic',
        celpipContext:
          'Frequently tested in CELPIP Listening and Reading. Speakers often describe how long they have been doing something, especially in workplace or immigration contexts.',
        commonMistake:
          'Confusing since and for: "I have lived here since five years" instead of "I have lived here for five years."',
        turkishExplanation:
          'Turkce de "since" ve "for" ayrimi yoktur. Her ikisi de "-dir/-dan beri" seklinde cevrilir. Ingilizce de ise "since" belirli bir tarih/an, "for" ise bir sure ifade eder.',
      },
      {
        id: 'grammar-present-perfect-3',
        rule: 'Already / Yet / Just',
        explanation:
          'Use "already" in affirmative sentences (done sooner than expected), "yet" in negatives and questions (up to now), and "just" for very recent actions.',
        example:
          'I have already submitted my application. Have you received your PR card yet? She has just passed her driving test.',
        turkishMeaning:
          '"Already" olumlu cumlelerde (coktan), "yet" olumsuz ve sorularda (henuz/daha), "just" az once anlaminda kullanilir.',
        clbLevel: 6,
        category: 'Tenses',
        difficulty: 'basic',
        celpipContext:
          'Common in CELPIP Listening Part 1-3 where speakers discuss recent events or things they have or have not done yet.',
        commonMistake:
          'Using "yet" in affirmative sentences: "I have yet finished" instead of "I have already finished."',
      },
      {
        id: 'grammar-present-perfect-4',
        rule: 'Ever / Never',
        explanation:
          'Use "ever" in questions to ask about life experience. Use "never" in affirmative sentences to mean "at no time."',
        example:
          'Have you ever visited Vancouver? I have never tried poutine before.',
        turkishMeaning:
          '"Ever" sorularda "hic" anlaminda, "never" olumlu cumlelerde "hicbir zaman/asla" anlaminda kullanilir.',
        clbLevel: 6,
        category: 'Tenses',
        difficulty: 'basic',
        celpipContext:
          'Appears in CELPIP Speaking Task 1-2 when asked about personal experiences, and in Listening when speakers share life stories.',
        commonMistake:
          'Using double negatives: "I have not never been" instead of "I have never been."',
      },
      {
        id: 'grammar-present-perfect-5',
        rule: 'Unfinished time periods (today, this week, this year)',
        explanation:
          'Use present perfect with time periods that are not yet finished.',
        example:
          'I have attended three interviews this month. We have had a lot of snow this winter.',
        turkishMeaning:
          'Henuz bitmemis zaman dilimleriyle (bugun, bu hafta, bu yil) present perfect kullanilir.',
        clbLevel: 6,
        category: 'Tenses',
        difficulty: 'intermediate',
        celpipContext:
          'Common in CELPIP Writing Task 1 when describing ongoing situations, and in Listening when speakers update on current progress.',
        commonMistake:
          'Using simple past with unfinished time: "I attended three interviews this month" when the month is still ongoing.',
      },
      {
        id: 'grammar-present-perfect-6',
        rule: 'Life experience (without specific time)',
        explanation:
          'Use present perfect to talk about experiences in your life without saying when they happened.',
        example:
          'I have taken the CELPIP test twice. She has volunteered at a food bank.',
        turkishMeaning:
          'Hayat deneyimlerinden bahsederken, ne zaman oldugunu belirtmeden present perfect kullanilir.',
        clbLevel: 6,
        category: 'Tenses',
        difficulty: 'intermediate',
        celpipContext:
          'Directly relevant to CELPIP Speaking Tasks where you discuss personal experiences, and Writing Task 2 when supporting opinions with experience.',
        commonMistake:
          'Adding a specific time with present perfect: "I have taken the test last week" instead of "I took the test last week."',
      },
      {
        id: 'grammar-present-perfect-7',
        rule: 'Result or change (present relevance)',
        explanation:
          'Use present perfect when a past action has a visible result or change in the present.',
        example:
          'He has lost his wallet, so he can\'t pay for the bus. The city has built a new library.',
        turkishMeaning:
          'Gecmisteki bir eylemin simdiki zamanda gorunen bir sonucu veya degisikligi varsa present perfect kullanilir.',
        clbLevel: 6,
        category: 'Tenses',
        difficulty: 'intermediate',
        celpipContext:
          'Used in CELPIP Reading passages that discuss changes in communities, policies, or personal situations with present-time relevance.',
        commonMistake:
          'Using present perfect without a clear connection to the present: context matters for choosing between simple past and present perfect.',
      },
      {
        id: 'grammar-present-perfect-8',
        rule: 'Been vs Gone',
        explanation:
          '"Has been to" means visited and returned. "Has gone to" means went and is still there.',
        example:
          'She has been to Montreal. (She visited and came back.) He has gone to the office. (He is still there.)',
        turkishMeaning:
          '"Has been to" gidip geri donmus anlaminda, "has gone to" gidip henuz orada anlaminda kullanilir.',
        clbLevel: 6,
        category: 'Tenses',
        difficulty: 'intermediate',
        celpipContext:
          'Tested in CELPIP Listening when speakers discuss travel or current whereabouts. Understanding the difference helps with comprehension questions.',
        commonMistake:
          'Confusing "been" and "gone": "She has gone to Montreal" when she is actually back already.',
        turkishExplanation:
          'Turkce de bu ayrimi yapan ozel bir yapi yoktur. "Montreal e gitti" hem gidip donmeyi hem de hala orada olmayi ifade edebilir. Ingilizce de ise been/gone bu farki net olarak gosterir.',
      },
      {
        id: 'grammar-present-perfect-9',
        rule: 'Present Perfect vs Simple Past',
        explanation:
          'Use simple past for finished actions with a specific time. Use present perfect when the time is not specified or the action connects to now.',
        example:
          'I moved to Canada in 2020. (simple past) I have lived here for four years. (present perfect)',
        turkishMeaning:
          'Belirli bir zaman varsa simple past, zaman belirtilmemisse veya simdiye baglaniyorsa present perfect kullanilir.',
        clbLevel: 6,
        category: 'Tenses',
        difficulty: 'advanced',
        celpipContext:
          'This distinction is critical in all CELPIP sections. Wrong tense choice in Writing can lower your score, and understanding it aids Listening comprehension.',
        commonMistake:
          'Mixing tenses in the same context: "I have moved to Canada in 2020" instead of "I moved to Canada in 2020."',
        turkishExplanation:
          'Turkce de simple past ve present perfect arasinda birebir karsilik yoktur. "Kanada ya tasindum" ve "Dort yildir burada yasiyorum" cumleleri Turkce de farkli zamanlarla ifade edilmez, ancak Ingilizce de zaman farki kritik onem tasir.',
      },
      {
        id: 'grammar-present-perfect-10',
        rule: 'Present Perfect with superlatives',
        explanation:
          'Use present perfect after superlative expressions like "the best," "the worst," "the most."',
        example:
          'This is the best meal I have ever had. It is the coldest winter we have experienced in Calgary.',
        turkishMeaning:
          'Ustunluk dereceleriyle (the best, the worst, the most) present perfect kullanilir: "simdiye kadar en..." anlaminda.',
        clbLevel: 6,
        category: 'Tenses',
        difficulty: 'advanced',
        celpipContext:
          'Useful in CELPIP Speaking when giving opinions or describing experiences with superlatives, and in Writing for emphasis.',
        commonMistake:
          'Using simple past after superlatives: "This is the best meal I ever ate" instead of "I have ever had."',
      },
      {
        id: 'grammar-present-perfect-11',
        rule: 'Present Perfect Continuous vs Present Perfect Simple',
        explanation:
          'Use present perfect continuous (have been + -ing) to emphasize duration or an ongoing activity. Use present perfect simple to emphasize completion or result.',
        example:
          'I have been studying for the CELPIP exam all week. (focus on duration) I have studied five chapters. (focus on result)',
        turkishMeaning:
          'Present perfect continuous sure/devam eden eylemi vurgular, present perfect simple ise sonucu/tamamlanmayi vurgular.',
        clbLevel: 6,
        category: 'Tenses',
        difficulty: 'advanced',
        celpipContext:
          'Appears in CELPIP Listening when speakers describe ongoing activities, and in Writing when explaining what you have been doing recently.',
        commonMistake:
          'Using present perfect simple when duration is the focus: "I have studied all week" instead of "I have been studying all week."',
        turkishExplanation:
          'Turkce de bu iki yapiyi ayiran ozel bir form yoktur. "Butun hafta calistim" ve "Bes bolum calistim" Turkce de ayni fiil formunu kullanir, ancak Ingilizce de sureye mi sonuca mi odaklandiginiz farki belirler.',
      },
      {
        id: 'grammar-present-perfect-12',
        rule: 'Present Perfect with "so far" and "up to now"',
        explanation:
          'Use present perfect with "so far," "up to now," and "until now" to describe what has happened from a past point up to the present moment.',
        example:
          'So far, I have applied to twelve jobs in Toronto. Up to now, the winter has been milder than expected.',
        turkishMeaning:
          '"So far" (su ana kadar), "up to now" (su ana dek) gibi ifadelerle present perfect kullanilir.',
        clbLevel: 6,
        category: 'Tenses',
        difficulty: 'basic',
        celpipContext:
          'Common in CELPIP Writing Task 1 when summarizing progress or status updates in formal emails.',
        commonMistake:
          'Using simple past with "so far": "So far I applied to twelve jobs" instead of "I have applied to twelve jobs."',
      },
      {
        id: 'grammar-present-perfect-13',
        rule: 'Present Perfect with "how long"',
        explanation:
          'Use "how long" with present perfect to ask about the duration of an action or state that continues to the present.',
        example:
          'How long have you lived in Canada? How long has she worked at that company in Vancouver?',
        turkishMeaning:
          '"How long" (ne kadar suredir) sorusu ile present perfect kullanilarak devam eden bir durumun suresi sorulur.',
        clbLevel: 6,
        category: 'Tenses',
        difficulty: 'intermediate',
        celpipContext:
          'Frequently appears in CELPIP Listening dialogues where people discuss their history in Canada, work tenure, or length of stay.',
        commonMistake:
          'Using simple present: "How long do you live in Canada?" instead of "How long have you lived in Canada?"',
        turkishExplanation:
          'Turkce de "Ne zamandir Kanada da yasiyorsun?" sorusu genis zamanla sorulabilir. Ingilizce de ise devam eden bir durum hakkinda soruldigunda present perfect zorunludur.',
      },
      {
        id: 'grammar-present-perfect-14',
        rule: 'Present Perfect with "recently" and "lately"',
        explanation:
          'Use present perfect with "recently" and "lately" to talk about things that happened in the near past with relevance to now.',
        example:
          'Have you seen any good movies lately? I have recently started a new job in Ottawa.',
        turkishMeaning:
          '"Recently" (son zamanlarda) ve "lately" (son gunlerde) ile present perfect kullanilir.',
        clbLevel: 6,
        category: 'Tenses',
        difficulty: 'advanced',
        celpipContext:
          'Appears in CELPIP Speaking when discussing recent activities or changes in life, and in Listening in casual conversation contexts.',
        commonMistake:
          'Placing "recently" incorrectly: "I have started recently a new job" instead of "I have recently started a new job."',
      },
      {
        id: 'grammar-present-perfect-15',
        rule: 'Present Perfect in news and announcements',
        explanation:
          'Present perfect is commonly used in news headlines and announcements to report recent events without specifying the exact time.',
        example:
          'The government has announced new immigration policies. A new transit line has opened in Toronto.',
        turkishMeaning:
          'Haber basliklarinda ve duyurularda, kesin zaman belirtmeden yakin zamanda olan olaylari bildirmek icin present perfect kullanilir.',
        clbLevel: 6,
        category: 'Tenses',
        difficulty: 'advanced',
        celpipContext:
          'Directly relevant to CELPIP Reading where news-style passages use present perfect for recent developments. Also appears in Listening news segments.',
        commonMistake:
          'Using simple past in a news headline context: "The government announced" when the event is recent and the exact time is not the focus.',
        turkishExplanation:
          'Turkce haberlerde genellikle gecmis zaman kullanilir: "Hukumet yeni politikalar acikladi." Ingilizce haberlerde ise present perfect tercih edilir cunku olayin yakinligi ve guncel etkisi vurgulanir.',
      },
    ],
    commonMistakes: [
      'Using simple past instead of present perfect: "I lived in Canada for five years" instead of "I have lived in Canada for five years."',
      'Adding a specific past time with present perfect: "I have visited Niagara Falls last summer" instead of "I visited Niagara Falls last summer."',
      'Confusing "since" and "for": "I have worked here since three years" instead of "I have worked here for three years."',
      'Translating directly from Turkish "-di" past tense: Turkish has no present perfect equivalent, so learners default to simple past in all contexts.',
    ],
    writingTip:
      'In CELPIP Writing Task 1 (email), use present perfect to describe ongoing situations: "I have been waiting for a response for two weeks." In Task 2 (survey response), use it to support your opinion with experience: "I have noticed that public transit has improved significantly."',
    speakingTip:
      'In CELPIP Speaking Tasks 1-3, use present perfect to describe your experiences naturally: "I have lived in this neighborhood for three years, and I have seen many positive changes." This shows grammatical range and boosts your score.',
    celpipExample:
      'I have recently moved to a new apartment, and I have experienced several issues with the heating system since I arrived.',
  },

  // ============================================================
  // TOPIC 2: Conditional Sentences (CLB 6)
  // ============================================================
  {
    id: 'grammar-conditionals',
    title: 'Conditional Sentences',
    description:
      'Master zero and first conditionals along with common conditional conjunctions for real and factual situations.',
    clbLevel: 6,
    category: 'Conditionals',
    icon: '🔀',
    words: [
      {
        id: 'grammar-conditionals-1',
        rule: 'Zero Conditional: If + present simple, present simple',
        explanation:
          'Use the zero conditional to talk about general truths and facts that are always true.',
        example:
          'If you heat water to 100 degrees, it boils. If it snows heavily, the schools close early.',
        turkishMeaning:
          'Sifir kosul: Genel dogrular ve bilimsel gercekler icin kullanilir. Her iki cumlede de genis zaman kullanilir.',
        clbLevel: 6,
        category: 'Conditionals',
        difficulty: 'basic',
        celpipContext:
          'Used in CELPIP Reading passages that present factual information, and in Writing when explaining general rules or procedures.',
        commonMistake:
          'Using "will" in both clauses: "If you will heat water, it will boil" instead of using present simple in both.',
      },
      {
        id: 'grammar-conditionals-2',
        rule: 'First Conditional: If + present simple, will + base verb',
        explanation:
          'Use the first conditional to talk about real and possible future situations.',
        example:
          'If I pass the CELPIP exam, I will apply for permanent residency.',
        turkishMeaning:
          'Birinci kosul: Gerceklesmesi mumkun gelecek durumlar icin. If cumlesinde genis zaman, ana cumlede will kullanilir.',
        clbLevel: 6,
        category: 'Conditionals',
        difficulty: 'basic',
        celpipContext:
          'Extremely common in CELPIP Speaking and Writing. Used when discussing future plans, goals, and outcomes related to immigration and daily life.',
        commonMistake:
          'Using "will" in the if-clause: "If I will pass the exam" instead of "If I pass the exam."',
        turkishExplanation:
          'Turkce de "Sinavi gecersem, basvuruda bulunacagim" cumlesi ayni mantikla kurulur. Ancak Ingilizce de if-cumleciginde asla "will" kullanilmaz, bu Turkce den farkli bir kuraldur.',
      },
      {
        id: 'grammar-conditionals-3',
        rule: 'If + present tense, will + verb',
        explanation:
          'The "if" clause uses present tense (not "will"). The result clause uses "will" for the future outcome.',
        example:
          'If she studies hard, she will get CLB 7. (NOT: If she will study...)',
        turkishMeaning:
          'If cumleciginde asla "will" kullanilmaz. If + genis zaman, ana cumle + will + fiil.',
        clbLevel: 6,
        category: 'Conditionals',
        difficulty: 'basic',
        celpipContext:
          'A fundamental rule tested across all CELPIP sections. Incorrect tense in conditionals is a common grammar error that affects Writing scores.',
        commonMistake:
          'Putting "will" after "if": "If she will study hard, she will get CLB 7." The if-clause must use present simple.',
      },
      {
        id: 'grammar-conditionals-4',
        rule: 'Unless (= if not)',
        explanation:
          '"Unless" means "if not." It introduces a negative condition. Do not use "not" with "unless."',
        example:
          'Unless you book early, you won\'t get a spot in the citizenship ceremony.',
        turkishMeaning:
          '"Unless" = "eger ... -mazsa/-mezse" anlamindadir. "If not" yerine kullanilir. Unless ile olumsuz yapilmaz.',
        clbLevel: 6,
        category: 'Conditionals',
        difficulty: 'intermediate',
        celpipContext:
          'Appears in CELPIP Listening and Reading in warning or advisory contexts. Understanding "unless" is key for comprehension questions.',
        commonMistake:
          'Using double negatives: "Unless you don\'t book early" instead of "Unless you book early."',
        turkishExplanation:
          'Turkce de "Unless" in tam karsiligi "-mazsa/-mezse" dir. "Erken rezervasyon yapmazsan yer bulamazsin." Unless zaten olumsuz bir anlam tasidigi icin cumle icinde tekrar olumsuzluk eki kullanilmaz.',
      },
      {
        id: 'grammar-conditionals-5',
        rule: 'As long as (= only if)',
        explanation:
          '"As long as" means the condition must be met for the result to happen. It emphasizes the requirement.',
        example:
          'You can stay in Canada as long as your work permit is valid.',
        turkishMeaning:
          '"As long as" = "-digi surece" anlamindadir. Kosulun yerine getirilmesi gerektigini vurgular.',
        clbLevel: 6,
        category: 'Conditionals',
        difficulty: 'intermediate',
        celpipContext:
          'Common in CELPIP Reading passages about rules, policies, and regulations, especially immigration-related content.',
        commonMistake:
          'Confusing "as long as" with "as far as": "As far as you have a work permit, you can stay" instead of "As long as."',
      },
      {
        id: 'grammar-conditionals-6',
        rule: 'In case (= as a precaution)',
        explanation:
          '"In case" is used for precautions — doing something to prepare for a possible future situation.',
        example:
          'Take your umbrella in case it rains. I saved the documents in case they ask for them.',
        turkishMeaning:
          '"In case" = "-ihtimaline karsi" anlaminda, onlem almak icin kullanilir. "If" ile karistirilmamalidir.',
        clbLevel: 6,
        category: 'Conditionals',
        difficulty: 'intermediate',
        celpipContext:
          'Appears in CELPIP Listening in advice-giving situations and in Writing Task 1 when suggesting precautions or preparations.',
        commonMistake:
          'Using "in case" interchangeably with "if": "In case it rains, I will stay home" (wrong — in case is for precautions, not results).',
        turkishExplanation:
          'Turkce de "in case" ve "if" farki net degildir. "In case" bir ihtimale karsi onlem almak icindir: "Yagmur yagar diye semsiyeni al." "If" ise kosul-sonuc iliskisi kurar: "Yagmur yagarsa evde kalirim."',
      },
      {
        id: 'grammar-conditionals-7',
        rule: 'What if...?',
        explanation:
          'Use "What if" to ask about possible situations and their consequences, often to express concern.',
        example:
          'What if the bus is late? What if I don\'t get enough points on the CELPIP?',
        turkishMeaning:
          '"What if" = "Ya ... olursa?" anlaminda olasi durumlari ve sonuclarini sormak icin kullanilir.',
        clbLevel: 6,
        category: 'Conditionals',
        difficulty: 'basic',
        celpipContext:
          'Commonly heard in CELPIP Listening dialogues where speakers express worry or concern about future possibilities.',
        commonMistake:
          'Adding "will" after "what if": "What if the bus will be late?" instead of "What if the bus is late?"',
      },
      {
        id: 'grammar-conditionals-8',
        rule: 'Provided that / Providing that',
        explanation:
          '"Provided that" is a more formal way of saying "if" or "on the condition that."',
        example:
          'You can renew your health card provided that you show valid identification.',
        turkishMeaning:
          '"Provided that" = "sartiyla ki / kosuluyla" anlaminda, "if" in daha resmi halidir.',
        clbLevel: 6,
        category: 'Conditionals',
        difficulty: 'advanced',
        celpipContext:
          'Found in CELPIP Reading formal passages, especially government notices, workplace policies, and legal documents.',
        commonMistake:
          'Using "provided" without "that" in formal writing where precision is important: "Provided you show ID" is acceptable but less formal.',
      },
      {
        id: 'grammar-conditionals-9',
        rule: 'Even if (= whether or not)',
        explanation:
          '"Even if" shows that the result will not change regardless of the condition.',
        example:
          'Even if it snows, I will go to my English class. She will take the test even if she isn\'t fully prepared.',
        turkishMeaning:
          '"Even if" = "olsa bile" anlaminda, sonucun kosuldan bagimsiz olarak degismeyecegini gosterir.',
        clbLevel: 6,
        category: 'Conditionals',
        difficulty: 'intermediate',
        celpipContext:
          'Used in CELPIP Writing Task 2 when making strong arguments and in Speaking when expressing determination or commitment.',
        commonMistake:
          'Confusing "even if" with "even though": "Even if" is for hypothetical situations, "even though" is for real situations.',
        turkishExplanation:
          'Turkce de "even if" = "olsa bile" (varsayimsal), "even though" = "olmasina ragmen" (gercek). "Kar yagsa bile gidecegim" (even if) vs. "Kar yagmasina ragmen gittim" (even though). Ingilizce de bu fark cok onemlidir.',
      },
      {
        id: 'grammar-conditionals-10',
        rule: 'Time clauses with when / after / before + present tense',
        explanation:
          'In future time clauses, use present tense after "when," "after," "before," "as soon as" (not "will").',
        example:
          'When I arrive in Ottawa, I will call you. After she finishes work, she will pick up the kids.',
        turkishMeaning:
          'Gelecek zaman yan cumlelerinde when/after/before ile genis zaman kullanilir, "will" kullanilmaz.',
        clbLevel: 6,
        category: 'Conditionals',
        difficulty: 'advanced',
        celpipContext:
          'A key grammar rule for CELPIP Writing. Using "will" in time clauses is a common error that reduces writing scores.',
        commonMistake:
          'Using "will" in the time clause: "When I will arrive in Ottawa" instead of "When I arrive in Ottawa."',
        turkishExplanation:
          'Turkce de "Ottawa ya vardigimda seni ararim" cumlesinde her iki cumlecik de ayni zamandadir. Ingilizce de ise when/after/before dan sonra gelecek zaman (will) kullanilamaz; genis zaman kullanilir.',
      },
      {
        id: 'grammar-conditionals-11',
        rule: 'Second Conditional: If + past simple, would + base verb',
        explanation:
          'Use the second conditional for unreal or hypothetical situations in the present or future.',
        example:
          'If I had more time, I would volunteer at the community centre. If she spoke French, she would move to Montreal.',
        turkishMeaning:
          'Ikinci kosul: Gercek olmayan veya varsayimsal durumlar icin. If cumlesinde gecmis zaman, ana cumlede would kullanilir.',
        clbLevel: 6,
        category: 'Conditionals',
        difficulty: 'advanced',
        celpipContext:
          'Important for CELPIP Speaking Tasks 5-8 where you may need to give advice, suggest alternatives, or discuss hypothetical scenarios.',
        commonMistake:
          'Using "would" in the if-clause: "If I would have more time" instead of "If I had more time."',
        turkishExplanation:
          'Turkce de "Daha fazla zamanim olsaydi, toplum merkezinde gonullu olurdum" seklinde ifade edilir. Turkce deki "-saydi/-seydi" yapisi Ingilizce deki second conditional e karsilik gelir.',
      },
      {
        id: 'grammar-conditionals-12',
        rule: 'If I were... (subjunctive)',
        explanation:
          'In formal English and second conditionals, use "were" instead of "was" for all subjects, especially in "If I were you" (giving advice).',
        example:
          'If I were you, I would take the CELPIP test in the spring. If she were here, she would help us.',
        turkishMeaning:
          'Resmi Ingilizce de ve ikinci kosul cumlelerinde tum oznelerle "were" kullanilir. "If I were you" tavsiye vermek icin yaygindir.',
        clbLevel: 6,
        category: 'Conditionals',
        difficulty: 'advanced',
        celpipContext:
          'Very useful in CELPIP Speaking Tasks 5-6 for giving advice. "If I were you, I would..." is one of the most effective advice-giving structures.',
        commonMistake:
          'Using "was" instead of "were": "If I was you" is informal; in CELPIP, prefer "If I were you."',
      },
      {
        id: 'grammar-conditionals-13',
        rule: 'Otherwise (= if not)',
        explanation:
          '"Otherwise" connects two sentences and means "if not" or "or else." It introduces the negative consequence.',
        example:
          'You should leave now. Otherwise, you will miss your flight from Toronto Pearson. Study every day; otherwise, you won\'t improve.',
        turkishMeaning:
          '"Otherwise" = "aksi takdirde / yoksa" anlaminda iki cumleyi baglar ve olumsuz sonucu ifade eder.',
        clbLevel: 6,
        category: 'Conditionals',
        difficulty: 'basic',
        celpipContext:
          'Commonly used in CELPIP Writing Task 1 for formal emails when explaining consequences, and in Listening for advice contexts.',
        commonMistake:
          'Using "otherwise" as a conjunction within one sentence: "Leave now otherwise you will be late" — use a period or semicolon before "otherwise."',
      },
      {
        id: 'grammar-conditionals-14',
        rule: 'Suppose / Supposing (= what if)',
        explanation:
          '"Suppose" and "supposing" are used like "what if" to introduce hypothetical situations for discussion.',
        example:
          'Suppose you don\'t pass the test — what will you do? Supposing the weather is bad, should we cancel the picnic in High Park?',
        turkishMeaning:
          '"Suppose/Supposing" = "diyelim ki / farz edelim" anlaminda varsayimsal durumlari tartismak icin kullanilir.',
        clbLevel: 6,
        category: 'Conditionals',
        difficulty: 'intermediate',
        celpipContext:
          'Appears in CELPIP Speaking Tasks 7-8 when discussing hypothetical scenarios and problem-solving situations.',
        commonMistake:
          'Using "suppose" with "will" in the conditional clause: "Suppose you will fail" instead of "Suppose you fail."',
      },
      {
        id: 'grammar-conditionals-15',
        rule: 'Mixed conditionals (if + past, would + present result)',
        explanation:
          'Mixed conditionals combine different time frames: a past condition with a present result, or a present condition with a past result.',
        example:
          'If I had studied harder for CELPIP, I would be a permanent resident now. If she were more organized, she would have finished the application on time.',
        turkishMeaning:
          'Karisik kosul cumleleri farkli zaman dilimlerini birlestirir: gecmis kosul + simdiki sonuc veya simdiki kosul + gecmis sonuc.',
        clbLevel: 6,
        category: 'Conditionals',
        difficulty: 'advanced',
        celpipContext:
          'Advanced structure useful for CELPIP Writing Task 2 and Speaking when reflecting on past decisions and their present consequences.',
        commonMistake:
          'Not matching the correct time frames: "If I studied harder, I would be a resident now" — use "had studied" for a past condition with present result.',
        turkishExplanation:
          'Turkce de "Daha cok calissaydim simdi vatandas olurdum" gibi cumleler karisik kosul yapisidir. Gecmisteki bir durum bugunku sonucu etkiler. Ingilizce de if-cumlecigi past perfect, ana cumle would + base verb kullanir.',
      },
    ],
    commonMistakes: [
      'Using "would" in the if-clause: "If I would study harder, I would pass" instead of "If I studied harder, I would pass."',
      'Confusing Type 2 and Type 3 conditionals: "If I studied harder last year, I would pass" instead of "If I had studied harder last year, I would have passed."',
      'Translating Turkish "-sa/-se" directly without adjusting verb tenses: Turkish conditionals use a single suffix, but English requires specific tense patterns for each type.',
      'Forgetting "have" in Type 3 results: "If I had known, I would told you" instead of "If I had known, I would have told you."',
    ],
    writingTip:
      'In CELPIP Writing Task 2 (survey response), use Type 2 conditionals to discuss hypothetical improvements: "If the city invested more in public transit, residents would have shorter commutes." This demonstrates advanced grammar and persuasive reasoning.',
    speakingTip:
      'In CELPIP Speaking Tasks 5-8, use conditionals to give advice or discuss alternatives: "If I were in that situation, I would speak to my supervisor first." This shows nuanced thinking and grammatical control.',
    celpipExample:
      'If the community center offered evening programs, more working parents would be able to participate in recreational activities with their children.',
  },

  // ============================================================
  // TOPIC 3: Passive Voice (CLB 6)
  // ============================================================
  {
    id: 'grammar-passive',
    title: 'Passive Voice',
    description:
      'Understand how to form and use the passive voice to focus on the action or the receiver rather than the doer.',
    clbLevel: 6,
    category: 'Voice',
    icon: '🔃',
    words: [
      {
        id: 'grammar-passive-1',
        rule: 'Be + past participle',
        explanation:
          'The passive is formed with the appropriate tense of "be" followed by the past participle of the main verb.',
        example:
          'The application is reviewed by the immigration officer.',
        turkishMeaning:
          'Edilgen cati: "be" fiilinin uygun zamani + fiilin ucuncu hali (past participle) ile yapilir.',
        clbLevel: 6,
        category: 'Voice',
        difficulty: 'basic',
        celpipContext:
          'Passive voice is extremely common in CELPIP Reading passages about processes, regulations, and official procedures.',
        commonMistake:
          'Forgetting the "be" verb: "The application reviewed" instead of "The application is reviewed."',
        turkishExplanation:
          'Turkce de edilgen cati "-il/-in/-ul/-un" ekleriyle yapilir: "incelenir." Ingilizce de ise be + past participle yapisi kullanilir. Yapim farkliligi nedeniyle Turkce konusurlari edilgen yapiyi sik sik unutur.',
      },
      {
        id: 'grammar-passive-2',
        rule: 'By + agent (doer of the action)',
        explanation:
          'Use "by" to mention who performs the action. The agent is often omitted if it is unknown or obvious.',
        example:
          'The letter was sent by the employer. The road was repaired. (agent not mentioned)',
        turkishMeaning:
          'Eylemi yapan kisiyi belirtmek icin "by" kullanilir. Yapan kisi bilinmiyorsa veya belliyse "by" kullanilmaz.',
        clbLevel: 6,
        category: 'Voice',
        difficulty: 'basic',
        celpipContext:
          'Understanding when to include or omit "by" is important for CELPIP Writing, where overusing "by" can make writing sound awkward.',
        commonMistake:
          'Always including the agent when it is not necessary: "The road was repaired by someone" — omit "by someone" if the agent is unknown or unimportant.',
      },
      {
        id: 'grammar-passive-3',
        rule: 'Present passive: am/is/are + past participle',
        explanation:
          'Use present passive for current or general passive actions.',
        example:
          'English is spoken in most workplaces in Canada. The recycling bins are collected every Tuesday.',
        turkishMeaning:
          'Genis zaman edilgen: am/is/are + fiilin ucuncu hali. Genel gecer veya su anki edilgen eylemler icin.',
        clbLevel: 6,
        category: 'Voice',
        difficulty: 'basic',
        celpipContext:
          'Present passive frequently appears in CELPIP Reading passages describing how things work, policies, and general statements about Canada.',
        commonMistake:
          'Using active form when passive is needed: "They speak English in most workplaces" is correct but less natural than "English is spoken in most workplaces" for general statements.',
      },
      {
        id: 'grammar-passive-4',
        rule: 'Past passive: was/were + past participle',
        explanation:
          'Use past passive for completed actions in the past where the focus is on the action or receiver.',
        example:
          'The community centre was built in 2015. The packages were delivered yesterday.',
        turkishMeaning:
          'Gecmis zaman edilgen: was/were + fiilin ucuncu hali. Gecmiste tamamlanmis edilgen eylemler icin.',
        clbLevel: 6,
        category: 'Voice',
        difficulty: 'basic',
        celpipContext:
          'Common in CELPIP Listening and Reading when historical events, completed projects, or past processes are described.',
        commonMistake:
          'Using "was" with plural subjects: "The packages was delivered" instead of "The packages were delivered."',
      },
      {
        id: 'grammar-passive-5',
        rule: 'Modal passive: modal + be + past participle',
        explanation:
          'Modal verbs (can, must, should, will, etc.) can be combined with the passive voice.',
        example:
          'The form must be signed before submission. Your application can be tracked online.',
        turkishMeaning:
          'Modal edilgen: modal fiil + be + ucuncu hal. Orn: can be done, must be completed, should be sent.',
        clbLevel: 6,
        category: 'Voice',
        difficulty: 'intermediate',
        celpipContext:
          'Very common in CELPIP Reading instructions and official documents: "Forms must be submitted," "Applications should be completed."',
        commonMistake:
          'Forgetting "be" in modal passive: "The form must signed" instead of "The form must be signed."',
      },
      {
        id: 'grammar-passive-6',
        rule: 'Get passive: get + past participle',
        explanation:
          'The "get" passive is common in informal speech. It often implies something unexpected or negative.',
        example:
          'He got fired from his job last week. My bike got stolen outside the mall.',
        turkishMeaning:
          '"Get" edilgen: gunluk konusmada kullanilir. Genellikle beklenmedik veya olumsuz durumlar icin: get + ucuncu hal.',
        clbLevel: 6,
        category: 'Voice',
        difficulty: 'intermediate',
        celpipContext:
          'The "get" passive appears in CELPIP Listening informal conversations. Recognizing it helps with comprehension of casual dialogues.',
        commonMistake:
          'Using "get" passive in formal writing: "The report got completed" is too informal for CELPIP Writing — use "The report was completed."',
        turkishExplanation:
          'Turkce de "get" edilgen icin ayri bir yapi yoktur. "Kovuldu" hem "was fired" hem "got fired" anlamina gelebilir. Ingilizce de "got fired" daha gunluk ve genellikle olumsuz bir olaya isaret eder.',
      },
      {
        id: 'grammar-passive-7',
        rule: 'Passive with two objects',
        explanation:
          'When a verb has two objects (direct and indirect), either can become the subject of the passive.',
        example:
          'They offered her the position. -> She was offered the position. / The position was offered to her.',
        turkishMeaning:
          'Iki nesneli cumlelerde her iki nesne de edilgen cumlenin oznesi olabilir.',
        clbLevel: 6,
        category: 'Voice',
        difficulty: 'intermediate',
        celpipContext:
          'Appears in CELPIP Reading and Listening in workplace and formal contexts: "Employees are given benefits," "Candidates were offered interviews."',
        commonMistake:
          'Forgetting "to" when the indirect object is not the subject: "The position was offered her" instead of "The position was offered to her."',
      },
      {
        id: 'grammar-passive-8',
        rule: 'When to use passive voice',
        explanation:
          'Use passive when the doer is unknown, unimportant, or obvious, or when you want to emphasize the action or receiver.',
        example:
          'The window was broken during the storm. (doer unknown) Taxes are collected by the CRA. (emphasizing taxes)',
        turkishMeaning:
          'Yapanin bilinmedigi, onemsiz oldugu veya eylemin/alicinin vurgulanmak istendigi durumlarda edilgen kullanilir.',
        clbLevel: 6,
        category: 'Voice',
        difficulty: 'intermediate',
        celpipContext:
          'Knowing when to use passive is critical for CELPIP Writing. Using passive strategically can improve formality and clarity in emails and essays.',
        commonMistake:
          'Overusing passive voice: too many passive sentences make writing hard to read. Mix active and passive for better CELPIP Writing scores.',
      },
      {
        id: 'grammar-passive-9',
        rule: 'Passive in formal writing',
        explanation:
          'The passive voice is commonly used in formal, academic, and professional writing to sound more objective.',
        example:
          'Applicants are required to submit two references. The report was completed on schedule.',
        turkishMeaning:
          'Resmi, akademik ve profesyonel yazilarda daha nesnel bir ton icin edilgen cati sikca kullanilir.',
        clbLevel: 6,
        category: 'Voice',
        difficulty: 'advanced',
        celpipContext:
          'Essential for CELPIP Writing Task 1, which requires formal email writing. Passive voice creates a professional, objective tone that scores higher.',
        commonMistake:
          'Using active voice in formal contexts where passive is more appropriate: "You must submit two references" vs. "Applicants are required to submit two references."',
      },
      {
        id: 'grammar-passive-10',
        rule: 'Common passive expressions',
        explanation:
          'Some expressions are almost always used in the passive: be born, be known for, be made of, be supposed to, be allowed to.',
        example:
          'She was born in Turkey. This park is known for its beautiful trails. You are not allowed to park here.',
        turkishMeaning:
          'Bazi ifadeler neredeyse her zaman edilgen kullanilir: be born (dogmak), be known for (ile taninmak), be allowed to (izin verilmek).',
        clbLevel: 6,
        category: 'Voice',
        difficulty: 'basic',
        celpipContext:
          'These fixed expressions appear frequently across all CELPIP sections. Mastering them is essential for natural-sounding English.',
        commonMistake:
          'Using active form for fixed passive expressions: "She born in Turkey" instead of "She was born in Turkey."',
      },
      {
        id: 'grammar-passive-11',
        rule: 'Present Perfect Passive: have/has been + past participle',
        explanation:
          'Use present perfect passive when the action started in the past and has relevance to the present, but the doer is less important than the action.',
        example:
          'The bridge has been repaired. New immigration rules have been announced by the Canadian government.',
        turkishMeaning:
          'Present perfect edilgen: have/has been + ucuncu hal. Gecmiste baslayip simdiye baglanan edilgen eylemler icin.',
        clbLevel: 6,
        category: 'Voice',
        difficulty: 'advanced',
        celpipContext:
          'Common in CELPIP Reading news-style passages and official announcements: "Changes have been made," "Decisions have been reached."',
        commonMistake:
          'Missing "been": "The bridge has repaired" instead of "The bridge has been repaired."',
        turkishExplanation:
          'Turkce de "Kopru tamir edildi" cumlesi hem past passive hem present perfect passive olarak anlasilabilir. Ingilizce de "was repaired" (gecmiste bitti) ve "has been repaired" (simdiye baglantisi var) arasindaki fark onemlidir.',
      },
      {
        id: 'grammar-passive-12',
        rule: 'Future passive: will be + past participle',
        explanation:
          'Use future passive to talk about actions that will be done to someone or something in the future.',
        example:
          'The results will be posted online next week. All applicants will be contacted by email.',
        turkishMeaning:
          'Gelecek zaman edilgen: will be + ucuncu hal. Gelecekte birine veya bir seye yapilacak eylemler icin.',
        clbLevel: 6,
        category: 'Voice',
        difficulty: 'intermediate',
        celpipContext:
          'Appears in CELPIP Listening announcements and Reading passages about upcoming events, deadlines, and procedures.',
        commonMistake:
          'Wrong word order: "The results will posted be" instead of "The results will be posted."',
      },
      {
        id: 'grammar-passive-13',
        rule: 'It is said that... / He is said to...',
        explanation:
          'Reporting verbs (say, think, believe, know, expect) can be used in passive structures to report information without naming the source.',
        example:
          'It is said that Vancouver has the mildest climate in Canada. Toronto is known to be the most diverse city in the world.',
        turkishMeaning:
          'Haber/rapor fiilleri edilgen yapilarla kaynak belirtmeden bilgi aktarmak icin kullanilir: soylenir, bilinir, dusunulur.',
        clbLevel: 6,
        category: 'Voice',
        difficulty: 'advanced',
        celpipContext:
          'These structures appear in CELPIP Reading academic and news passages. They are also useful in Writing Task 2 for supporting arguments with general beliefs.',
        commonMistake:
          'Incorrect structure: "It is said Vancouver has" — include "that" for clarity: "It is said that Vancouver has."',
        turkishExplanation:
          'Turkce de "Vancouver un en ilik iklime sahip oldugu soylenir" seklinde edilgen rapor yapisi kullanilir. Ingilizce de iki farkli yapi vardir: "It is said that..." ve "Vancouver is said to have..." Her ikisi de kaynak belirtmeden bilgi aktarir.',
      },
      {
        id: 'grammar-passive-14',
        rule: 'Passive with "have something done" (causative)',
        explanation:
          'Use "have something done" when someone else does something for you, often a professional service.',
        example:
          'I had my car repaired at the garage on Dundas Street. She is having her documents translated for the immigration application.',
        turkishMeaning:
          '"Have something done" bir seyi baskasina yaptirmak anlaminda kullanilir. Genellikle profesyonel hizmetler icin.',
        clbLevel: 6,
        category: 'Voice',
        difficulty: 'advanced',
        celpipContext:
          'Common in CELPIP Listening everyday situations: getting things repaired, translated, or processed. Also useful in Speaking when describing services.',
        commonMistake:
          'Confusing with active: "I repaired my car" (you did it yourself) vs. "I had my car repaired" (someone else did it for you).',
        turkishExplanation:
          'Turkce de "Arabami tamir ettirdim" cumlesi "-tir/-dir" ekiyle yaptirma anlami verir. Ingilizce de ayni anlam "have something done" yapisiyla ifade edilir: "I had my car repaired." Turkce deki -tir yapisi bu Ingilizce yapiyla bire bir uyar.',
      },
      {
        id: 'grammar-passive-15',
        rule: 'Active to passive transformation steps',
        explanation:
          'To change active to passive: 1) Move the object to subject position, 2) Add the correct form of "be," 3) Change the verb to past participle, 4) Optionally add "by" + original subject.',
        example:
          'Active: The city council approved the new transit plan. Passive: The new transit plan was approved by the city council.',
        turkishMeaning:
          'Etken cumleyi edilgen yapmak icin: nesneyi ozne yap, uygun "be" ekle, fiili ucuncu hale cevir, opsiyonel olarak "by" ile yapani ekle.',
        clbLevel: 6,
        category: 'Voice',
        difficulty: 'advanced',
        celpipContext:
          'Understanding this transformation is key for CELPIP grammar accuracy. Being able to switch between active and passive gives flexibility in Writing.',
        commonMistake:
          'Forgetting to change the tense of "be" to match the original verb tense: "The plan is approved" when the original was past tense — should be "was approved."',
      },
    ],
    commonMistakes: [
      'Forming passive with wrong word order: "Was built the bridge" instead of "The bridge was built" — Turkish SOV order interferes with English SVO passive.',
      'Omitting the "be" verb: "The report written by the manager" instead of "The report was written by the manager."',
      'Using active form when passive is needed in formal writing: "Someone stole my bike" instead of "My bike was stolen" in a formal complaint.',
      'Confusing "-ildi/-indi" (Turkish passive) with English passive tense matching: Turkish passive does not change form by tense the same way English does.',
    ],
    writingTip:
      'In CELPIP Writing Task 1 (email), use passive voice for formal complaints or requests: "My package was delivered to the wrong address" or "I was informed that the policy has been changed." Passive voice makes formal emails sound more professional.',
    speakingTip:
      'In CELPIP Speaking Tasks 5-6 (giving advice or explaining a situation), use passive to describe events objectively: "The event was cancelled due to weather" or "The decision was made without consulting residents." This sounds more mature and formal.',
    celpipExample:
      'The new recycling program was introduced by the city council last month, and residents have been encouraged to separate their waste into three categories.',
  },

  // ============================================================
  // TOPIC 4: Relative Clauses (CLB 7)
  // ============================================================
  {
    id: 'grammar-relative-clauses',
    title: 'Relative Clauses',
    description:
      'Use relative pronouns and clauses to add detail to sentences and combine ideas smoothly.',
    clbLevel: 7,
    category: 'Clauses',
    icon: '🔗',
    words: [
      {
        id: 'grammar-relative-clauses-1',
        rule: 'Who / Which / That',
        explanation:
          '"Who" is for people, "which" is for things, and "that" can replace both in defining clauses.',
        example:
          'The woman who helped me was very kind. The bus that goes to downtown leaves at 8 AM.',
        turkishMeaning:
          '"Who" kisiler icin, "which" nesneler icin, "that" her ikisi yerine (tanimlayan yan cumlelerde) kullanilir.',
        clbLevel: 7,
        category: 'Clauses',
        difficulty: 'basic',
        celpipContext:
          'Relative clauses are essential for CELPIP Writing to create complex sentences that demonstrate CLB 7+ ability. Simple sentences alone will not achieve high scores.',
        commonMistake:
          'Using "which" for people: "The woman which helped me" instead of "The woman who helped me."',
      },
      {
        id: 'grammar-relative-clauses-2',
        rule: 'Defining vs Non-defining relative clauses',
        explanation:
          'Defining clauses identify which person or thing we mean (no commas). Non-defining clauses add extra information (with commas).',
        example:
          'The man who lives next door is a doctor. (defining) My neighbor, who is a doctor, helped me. (non-defining)',
        turkishMeaning:
          'Tanimlayan yan cumleler kisi/nesneyi belirler (virgulsuz). Tanimlamayan yan cumleler ek bilgi verir (virgullu).',
        clbLevel: 7,
        category: 'Clauses',
        difficulty: 'intermediate',
        celpipContext:
          'The distinction between defining and non-defining clauses is tested in CELPIP Reading comprehension and affects meaning in Listening sections.',
        commonMistake:
          'Missing commas in non-defining clauses: "My neighbor who is a doctor helped me" — add commas around the non-defining clause.',
        turkishExplanation:
          'Turkce de bu ayrimi virgul ile degil, cumle yapisiyla yapariz. "Yan komsum doktor olan adam bana yardim etti" (tanimlayan) vs. "Yan komsum, ki doktordur, bana yardim etti" (tanimlamayan). Ingilizce de virgul kullanimi anlami degistirir.',
      },
      {
        id: 'grammar-relative-clauses-3',
        rule: 'Whose (possession)',
        explanation:
          '"Whose" shows possession and replaces "his/her/their" in relative clauses.',
        example:
          'The student whose essay won the contest is from our class. I met a woman whose son works at the hospital.',
        turkishMeaning:
          '"Whose" sahiplik belirtir, yan cumlede "onun" anlamina gelir. Kisi ve nesneler icin kullanilabilir.',
        clbLevel: 7,
        category: 'Clauses',
        difficulty: 'intermediate',
        celpipContext:
          'Tested in CELPIP Reading and useful in Writing to create sophisticated sentences about people and their possessions or attributes.',
        commonMistake:
          'Confusing "whose" with "who\'s": "The student who\'s essay won" instead of "whose." "Who\'s" means "who is."',
      },
      {
        id: 'grammar-relative-clauses-4',
        rule: 'Where (place)',
        explanation:
          '"Where" is used in relative clauses to refer to a place.',
        example:
          'The restaurant where we had dinner was excellent. This is the park where I go jogging every morning.',
        turkishMeaning:
          '"Where" bir yere atifta bulunmak icin yan cumlelerde kullanilir. "in which" yerine de kullanilabilir.',
        clbLevel: 7,
        category: 'Clauses',
        difficulty: 'basic',
        celpipContext:
          'Common in CELPIP Listening and Reading when describing locations, especially in community and city-related topics.',
        commonMistake:
          'Using "which" instead of "where" for places: "The restaurant which we had dinner" instead of "The restaurant where we had dinner."',
      },
      {
        id: 'grammar-relative-clauses-5',
        rule: 'When (time)',
        explanation:
          '"When" is used in relative clauses to refer to a time.',
        example:
          'I remember the day when I arrived in Canada. Winter is the season when many people feel homesick.',
        turkishMeaning:
          '"When" bir zamana atifta bulunmak icin yan cumlelerde kullanilir. "in which / at which" yerine de kullanilabilir.',
        clbLevel: 7,
        category: 'Clauses',
        difficulty: 'basic',
        celpipContext:
          'Appears in CELPIP Speaking and Listening when discussing memories, events, and seasons in Canada.',
        commonMistake:
          'Using "which" instead of "when" for time: "The day which I arrived" instead of "The day when I arrived."',
      },
      {
        id: 'grammar-relative-clauses-6',
        rule: 'Omitting the relative pronoun (contact clauses)',
        explanation:
          'In defining clauses, you can omit who/which/that when they are the object of the clause.',
        example:
          'The book (that) I borrowed from the library is due tomorrow. The person (who) you met is my colleague.',
        turkishMeaning:
          'Tanimlayan yan cumlelerde, who/which/that nesne konumundaysa atlanabilir (contact clause).',
        clbLevel: 7,
        category: 'Clauses',
        difficulty: 'intermediate',
        celpipContext:
          'Understanding contact clauses is important for CELPIP Listening, where speakers often omit relative pronouns in natural speech.',
        commonMistake:
          'Omitting the pronoun when it is the subject: "The man lives next door is a doctor" — you cannot omit "who" when it is the subject.',
      },
      {
        id: 'grammar-relative-clauses-7',
        rule: 'Preposition + which',
        explanation:
          'In formal English, a preposition can come before "which" instead of at the end of the clause.',
        example:
          'The company for which I work is based in Vancouver. (formal) = The company which I work for. (informal)',
        turkishMeaning:
          'Resmi Ingilizce de edat "which" in onune gelebilir: "for which, in which, to which" gibi yapilar.',
        clbLevel: 7,
        category: 'Clauses',
        difficulty: 'advanced',
        celpipContext:
          'Found in CELPIP Reading formal passages. Using "preposition + which" in Writing Task 1 formal emails can demonstrate advanced grammar.',
        commonMistake:
          'Using "that" after a preposition: "The company for that I work" — use "which" after prepositions, not "that."',
      },
      {
        id: 'grammar-relative-clauses-8',
        rule: 'What (free relative clause)',
        explanation:
          '"What" means "the thing that" and introduces a noun clause, not a typical relative clause.',
        example:
          'What I need is more practice. I didn\'t understand what the instructor said.',
        turkishMeaning:
          '"What" = "the thing that" (olan sey) anlaminda serbest ilgi cumlesi olusturur. Bir isim cumlecigi baslatir.',
        clbLevel: 7,
        category: 'Clauses',
        difficulty: 'intermediate',
        celpipContext:
          'Useful in CELPIP Speaking and Writing for emphasis: "What matters most is..." "What I want to say is..."',
        commonMistake:
          'Confusing "what" with "that" in relative clauses: "The thing what I need" — use "that" or omit: "The thing (that) I need."',
      },
      {
        id: 'grammar-relative-clauses-9',
        rule: 'Whoever / Whatever / Wherever',
        explanation:
          'These generalized relative pronouns mean "any person who," "any thing that," "any place where."',
        example:
          'Whoever finishes first can leave. You can sit wherever you like. Whatever you decide, I will support you.',
        turkishMeaning:
          '"Whoever" = kim olursa, "whatever" = ne olursa, "wherever" = nerede olursa anlaminda genellestirilmis zamirlerdir.',
        clbLevel: 7,
        category: 'Clauses',
        difficulty: 'intermediate',
        celpipContext:
          'These expressions appear in CELPIP Listening dialogues and Reading instructions. They are also useful for Writing Task 2 arguments.',
        commonMistake:
          'Using "who" instead of "whoever" when the meaning is "anyone who": "Who finishes first" instead of "Whoever finishes first."',
      },
      {
        id: 'grammar-relative-clauses-10',
        rule: 'Comma usage in non-defining clauses',
        explanation:
          'Non-defining relative clauses must have commas. You cannot use "that" in non-defining clauses.',
        example:
          'Toronto, which is the largest city in Canada, is very multicultural. My boss, who is from Halifax, speaks French.',
        turkishMeaning:
          'Tanimlamayan yan cumlelerde virgul zorunludur ve "that" kullanilamaz. Sadece who/which kullanilir.',
        clbLevel: 7,
        category: 'Clauses',
        difficulty: 'basic',
        celpipContext:
          'Proper comma usage in relative clauses is assessed in CELPIP Writing. Missing commas change the meaning and can cause confusion.',
        commonMistake:
          'Using "that" in non-defining clauses: "Toronto, that is the largest city, is multicultural" — use "which" instead of "that."',
      },
      {
        id: 'grammar-relative-clauses-11',
        rule: 'Which referring to a whole clause',
        explanation:
          '"Which" can refer to an entire preceding clause or idea, not just a single noun. This is always non-defining (with a comma).',
        example:
          'She passed her CELPIP exam on the first try, which surprised everyone. He arrived late, which caused problems at the office.',
        turkishMeaning:
          '"Which" sadece bir ismi degil, onceki tumcumleye veya fikre atifta bulunabilir. Bu her zaman virgullu (tanimlamayan) yapidadir.',
        clbLevel: 7,
        category: 'Clauses',
        difficulty: 'advanced',
        celpipContext:
          'Very useful in CELPIP Writing Task 2 for commenting on situations or facts. Demonstrates advanced sentence construction.',
        commonMistake:
          'Using "what" instead of "which" to refer to a clause: "She passed, what surprised everyone" — use "which" to refer back to a whole clause.',
        turkishExplanation:
          'Turkce de "ki bu" veya "bu da" ifadesiyle karsilanir: "Ilk denemesinde gecti, ki bu herkesi sasirtti." Ingilizce de virgul + which bu islevi gorur ve ileri seviye yazim becerisi gosterir.',
      },
      {
        id: 'grammar-relative-clauses-12',
        rule: 'Why (reason)',
        explanation:
          '"Why" can be used in relative clauses after "the reason" to explain the cause of something.',
        example:
          'The reason why I moved to Canada was to give my family a better life. That is the reason why she chose Vancouver.',
        turkishMeaning:
          '"Why" bir seyin nedenini aciklamak icin "the reason" dan sonra yan cumlelerde kullanilir.',
        clbLevel: 7,
        category: 'Clauses',
        difficulty: 'basic',
        celpipContext:
          'Common in CELPIP Speaking when explaining reasons and motivations, and in Writing Task 2 when justifying opinions.',
        commonMistake:
          'Being redundant: "The reason why is because..." — choose either "The reason is that..." or "The reason why... is..."',
      },
      {
        id: 'grammar-relative-clauses-13',
        rule: 'Reduced relative clauses (participle clauses)',
        explanation:
          'Defining relative clauses can be shortened by removing the relative pronoun and using a present participle (-ing) for active meaning or past participle (-ed) for passive meaning.',
        example:
          'The man (who is) sitting at the front is the instructor. The documents (that were) submitted last week are being processed.',
        turkishMeaning:
          'Tanimlayan yan cumleler kisaltilabilir: simdiki ortac (-ing) etken, gecmis ortac (-ed) edilgen anlam icin.',
        clbLevel: 7,
        category: 'Clauses',
        difficulty: 'advanced',
        celpipContext:
          'Reduced relative clauses appear in CELPIP Reading academic passages. Using them in Writing demonstrates advanced grammar competence.',
        commonMistake:
          'Reducing non-defining clauses incorrectly or confusing active/passive: "The man sat at the front" instead of "The man sitting at the front."',
        turkishExplanation:
          'Turkce de ortac yapilari (-en/-an, -mis/-mis) ile benzerlik gosterir: "Onde oturan adam" = "The man sitting at the front." Turkce zaten bu kisaltmayi dogal olarak yapar, bu yuzden Turkce konusurlari icin kavramasi kolaydir.',
      },
      {
        id: 'grammar-relative-clauses-14',
        rule: 'Relative clauses with quantifiers (some of whom, most of which)',
        explanation:
          'Quantifiers like "some," "most," "many," "none," "all," "both" can be used with "of whom" (people) and "of which" (things) in non-defining clauses.',
        example:
          'I have three siblings, two of whom live in Toronto. She applied to ten companies, most of which are in Alberta.',
        turkishMeaning:
          'Miktar belirteceleri (some, most, many, none, all, both) "of whom" (kisiler) ve "of which" (seyler) ile kullanilabilir.',
        clbLevel: 7,
        category: 'Clauses',
        difficulty: 'advanced',
        celpipContext:
          'Advanced structure for CELPIP Writing Task 2. Using quantifier + of whom/which creates sophisticated sentences that demonstrate CLB 7+ grammar.',
        commonMistake:
          'Using "of who" instead of "of whom": "Two of who live in Toronto" — in formal English, use "of whom."',
      },
      {
        id: 'grammar-relative-clauses-15',
        rule: 'Relative clauses with "which" after prepositions in formal English',
        explanation:
          'In formal writing, prepositions come before "which" rather than at the end of the clause. Common combinations include "in which," "at which," "from which," "during which."',
        example:
          'The meeting during which we discussed the budget lasted two hours. The university from which she graduated is in British Columbia.',
        turkishMeaning:
          'Resmi yazida edatlar "which" in onune gelir: "in which" (icinde), "at which" (de), "from which" (den), "during which" (sirasinda).',
        clbLevel: 7,
        category: 'Clauses',
        difficulty: 'advanced',
        celpipContext:
          'These formal structures are found in CELPIP Reading formal and academic passages. Using them in Writing Task 1 formal emails demonstrates high proficiency.',
        commonMistake:
          'Using "that" instead of "which" after prepositions: "The meeting during that we discussed" — always use "which" after prepositions.',
        turkishExplanation:
          'Turkce de "Butceyi tartistigimiz toplanti" gibi ortac yapilari ile karsilanir. Ingilizce de edat + which yapisi bu tur resmi ifadeleri olusturur. Bu yapi CELPIP Reading de sik gorulur ve Writing de kullanildiginda yuksek puan getirir.',
      },
    ],
    commonMistakes: [
      'Confusing "who" and "which": "The company who hired me" instead of "The company that/which hired me" — "who" is for people only.',
      'Adding an extra pronoun inside the relative clause: "The person who he helped me" instead of "The person who helped me."',
      'Omitting the relative pronoun when it is the subject: "The teacher helped me is very kind" instead of "The teacher who helped me is very kind."',
      'Using Turkish suffix-based relative clause logic: Turkish uses "-an/-en/-digi" suffixes attached to verbs, so learners struggle with placing "who/which/that" as separate words before the verb.',
    ],
    writingTip:
      'In CELPIP Writing Task 2 (survey response), use relative clauses to add detail and complexity: "The park, which was renovated last year, now attracts more families." Non-defining relative clauses with commas show advanced grammar and improve your score.',
    speakingTip:
      'In CELPIP Speaking Tasks 1-4 (describing experiences or pictures), use relative clauses to connect ideas smoothly: "I can see a woman who is walking her dog in the park" or "The restaurant that I visited last week had excellent service." This demonstrates fluency.',
    celpipExample:
      'The community library, which was built in 2018, offers free language classes that are popular with newcomers who want to improve their English skills.',
  },

  // ============================================================
  // TOPIC 5: Modal Verbs (CLB 7)
  // ============================================================
  {
    id: 'grammar-modals',
    title: 'Modal Verbs',
    description:
      'Use modal verbs to express ability, possibility, necessity, advice, and hypothetical situations.',
    clbLevel: 7,
    category: 'Modals',
    icon: '💭',
    words: [
      {
        id: 'grammar-modals-1',
        rule: 'Can / Could (ability)',
        explanation:
          '"Can" expresses present ability. "Could" expresses past ability or a more polite request.',
        example:
          'I can speak three languages. She could read before she started school. Could you help me with this form?',
        turkishMeaning:
          '"Can" simdiki yetenek (-ebilir), "could" gecmis yetenek (-ebildi) veya kibar istek (rica) icin kullanilir.',
        clbLevel: 7,
        category: 'Modals',
        difficulty: 'basic',
        celpipContext:
          'Fundamental for CELPIP Speaking when describing abilities and making requests. Also common in Listening dialogues.',
        commonMistake:
          'Using "can" for past ability: "I can swim when I was young" instead of "I could swim when I was young."',
      },
      {
        id: 'grammar-modals-2',
        rule: 'May / Might (possibility)',
        explanation:
          '"May" and "might" express possibility. "Might" suggests a slightly lower chance than "may."',
        example:
          'It may snow this weekend. She might not come to the meeting. The bus might be late due to the weather.',
        turkishMeaning:
          '"May" ve "might" olasilik belirtir (-ebilir/belki). "Might" biraz daha dusuk bir olasilik ifade eder.',
        clbLevel: 7,
        category: 'Modals',
        difficulty: 'basic',
        celpipContext:
          'Common in CELPIP Listening weather reports, workplace dialogues, and Speaking when discussing uncertain future events.',
        commonMistake:
          'Using "may" with "will": "It may will snow" — do not combine two modal verbs. Use only one.',
      },
      {
        id: 'grammar-modals-3',
        rule: 'Must (necessity / strong obligation)',
        explanation:
          '"Must" expresses strong obligation or necessity, usually from the speaker\'s own authority or belief.',
        example:
          'You must wear a seatbelt in the car. I must finish this report by Friday.',
        turkishMeaning:
          '"Must" guclu zorunluluk ifade eder (-meli/-mali). Konusanin kendi otoritesinden veya inancından kaynaklanan zorunluluk.',
        clbLevel: 7,
        category: 'Modals',
        difficulty: 'basic',
        celpipContext:
          'Appears in CELPIP Reading rules and regulations, and Listening instructions. Essential for understanding official requirements.',
        commonMistake:
          'Using "must" for past obligation: "I must finished it yesterday" — use "had to" for past obligation.',
      },
      {
        id: 'grammar-modals-4',
        rule: 'Should / Ought to (advice)',
        explanation:
          '"Should" and "ought to" give advice or recommendations. They suggest the right or best thing to do.',
        example:
          'You should practice speaking every day. You ought to arrive early for the exam.',
        turkishMeaning:
          '"Should" ve "ought to" tavsiye verir (-meli/-mali). Yapilmasi dogru veya en iyi olan seyi onerir.',
        clbLevel: 7,
        category: 'Modals',
        difficulty: 'basic',
        celpipContext:
          'Directly relevant to CELPIP Speaking Tasks 5-6 for giving advice. "You should..." is one of the most common advice structures.',
        commonMistake:
          'Adding "to" after "should": "You should to practice" — "should" is followed directly by the base verb without "to."',
      },
      {
        id: 'grammar-modals-5',
        rule: 'Have to vs Must',
        explanation:
          '"Must" is for personal obligation or rules from the speaker. "Have to" is for external rules or obligations.',
        example:
          'I must study harder. (personal decision) I have to renew my health card every five years. (external rule)',
        turkishMeaning:
          '"Must" kisisel zorunluluk, "have to" disaridan gelen kural/zorunluluk icin kullanilir. Her ikisi de "-meli/-mali."',
        clbLevel: 7,
        category: 'Modals',
        difficulty: 'intermediate',
        celpipContext:
          'Understanding this distinction helps in CELPIP Listening where speakers discuss personal decisions vs. institutional rules.',
        commonMistake:
          'Using "must" for external rules: "I must to renew my card" — use "have to" for external obligations and remove "to" after "must."',
        turkishExplanation:
          'Turkce de "must" ve "have to" arasindaki fark net degildir; ikisi de "-meli/-mali" olarak cevrilir. Ancak Ingilizce de "must" kendi karar/iradenizden, "have to" ise dis kural/zorunluluktan gelir. Bu ayrimi bilmek CELPIP icin onemlidir.',
      },
      {
        id: 'grammar-modals-6',
        rule: "Don't have to vs Mustn't",
        explanation:
          '"Don\'t have to" means it is not necessary (you have a choice). "Mustn\'t" means it is prohibited (you are not allowed).',
        example:
          'You don\'t have to wear a suit to the interview. You mustn\'t use your phone during the test.',
        turkishMeaning:
          '"Don\'t have to" = gerekli degil (secim var). "Mustn\'t" = yasak (yapmamalisin). Anlamlari cok farklidir.',
        clbLevel: 7,
        category: 'Modals',
        difficulty: 'intermediate',
        celpipContext:
          'A critical distinction for CELPIP. Confusing these in Writing or Speaking can change the meaning entirely — from optional to prohibited.',
        commonMistake:
          'Confusing "don\'t have to" with "mustn\'t": "You mustn\'t wear a suit" means it is forbidden, not that it is optional.',
        turkishExplanation:
          'Turkce de bu ayrimi yapmak zordur: "Takim elbise giymek zorunda degilsin" (don\'t have to) vs. "Telefonunu kullanmamalisin" (mustn\'t). Turkce de her ikisi de "-me/-ma" olumsuzluk eki ile ifade edilebilir, ancak Ingilizce de anlam tamamen farklidir.',
      },
      {
        id: 'grammar-modals-7',
        rule: 'Would (hypothetical situations)',
        explanation:
          '"Would" is used for imagined or hypothetical situations, polite requests, and past habits.',
        example:
          'I would move to Calgary if I found a job there. Would you like some coffee? When I was young, I would walk to school.',
        turkishMeaning:
          '"Would" varsayimsal/hayali durumlar, kibar istekler ve gecmis aliskanliklar icin kullanilir.',
        clbLevel: 7,
        category: 'Modals',
        difficulty: 'intermediate',
        celpipContext:
          'Essential for CELPIP Speaking hypothetical tasks and Writing Task 2 when discussing imagined scenarios or preferences.',
        commonMistake:
          'Using "would" for current habits: "I would usually wake up at 7" — use "usually" with simple present for current habits, not "would."',
      },
      {
        id: 'grammar-modals-8',
        rule: 'Shall (suggestions and offers)',
        explanation:
          '"Shall" is used with "I" and "we" to make suggestions, offers, or ask for advice.',
        example:
          'Shall I open the window? Shall we go to the community centre? What shall I bring to the potluck?',
        turkishMeaning:
          '"Shall" "I" ve "we" ile oneri, teklif veya tavsiye istemek icin kullanilir. "-eyim mi? -elim mi?" anlaminda.',
        clbLevel: 7,
        category: 'Modals',
        difficulty: 'intermediate',
        celpipContext:
          'Appears in CELPIP Listening in social contexts where people make plans. Useful for Speaking when offering help or suggestions.',
        commonMistake:
          'Using "shall" with third person: "Shall he open the window?" — "shall" for suggestions is only used with "I" and "we."',
      },
      {
        id: 'grammar-modals-9',
        rule: 'Need to (necessity)',
        explanation:
          '"Need to" expresses necessity, similar to "have to." It can be used in all tenses.',
        example:
          'I need to book an appointment for my SIN card. You don\'t need to bring your passport today.',
        turkishMeaning:
          '"Need to" zorunluluk ifade eder, "have to" ya benzer (-mesi gerekiyor). Tum zamanlarda kullanilabilir.',
        clbLevel: 7,
        category: 'Modals',
        difficulty: 'basic',
        celpipContext:
          'Very common in CELPIP Listening everyday conversations about tasks, appointments, and requirements in Canadian life.',
        commonMistake:
          'Forgetting "to": "I need book an appointment" instead of "I need to book an appointment."',
      },
      {
        id: 'grammar-modals-10',
        rule: 'Had better (strong advice / warning)',
        explanation:
          '"Had better" gives strong advice with a warning that something bad may happen otherwise. It is stronger than "should."',
        example:
          'You had better leave now or you\'ll miss the train. We\'d better not be late for the appointment.',
        turkishMeaning:
          '"Had better" guclu tavsiye/uyari verir: yapmazsan kotu bir sey olabilir anlaminda. "Should" dan daha gucludur.',
        clbLevel: 7,
        category: 'Modals',
        difficulty: 'intermediate',
        celpipContext:
          'Used in CELPIP Speaking for giving strong advice with consequences, and in Listening where speakers warn each other.',
        commonMistake:
          'Using "had better" as past tense: "Had better" is NOT past tense despite using "had." It refers to present/future advice.',
        turkishExplanation:
          'Turkce de "Had better" in karsiligi "-se iyi olur / -masi lazim" seklindedir: "Simdi ciksan iyi olur yoksa treni kacirirsin." "Had" gecmis zaman gibi gorunse de aslinda simdiki/gelecek zamana yoneliktir.',
      },
      {
        id: 'grammar-modals-11',
        rule: 'Must (deduction / logical conclusion)',
        explanation:
          '"Must" can also express a logical conclusion or deduction based on evidence — meaning "I am almost certain."',
        example:
          'She must be at work — her car is not in the driveway. You must be tired after that long flight from Istanbul.',
        turkishMeaning:
          '"Must" mantiksal cikarim/sonuc icin de kullanilir: "kesinlikle ... olmali" anlaminda, kanita dayali tahmin.',
        clbLevel: 7,
        category: 'Modals',
        difficulty: 'advanced',
        celpipContext:
          'Appears in CELPIP Listening where speakers make deductions. Understanding "must" as deduction vs. obligation is key for comprehension.',
        commonMistake:
          'Confusing obligation "must" with deduction "must": "You must be tired" is a deduction, not a command. Context determines the meaning.',
        turkishExplanation:
          'Turkce de zorunluluk "must" (-meli/-mali) ile cikarim "must" (-olmali/-olmalidir) arasindaki fark baglama baglidir. "Yorgun olmalisin" (cikarim) vs. "Bunu yapmalisin" (zorunluluk). Ingilizce de de ayni kelime iki farkli anlam tasir.',
      },
      {
        id: 'grammar-modals-12',
        rule: 'Could have / Should have / Would have + past participle',
        explanation:
          'These structures talk about the past: "could have" (unrealized ability), "should have" (regret/missed obligation), "would have" (unrealized hypothetical result).',
        example:
          'I could have taken the earlier bus. You should have studied harder for the CELPIP test. I would have helped if I had known.',
        turkishMeaning:
          '"Could have" (yapabilirdi ama yapmadi), "should have" (yapmasi gerekirdi), "would have" (yapardi ama yapmadi) gecmise yonelik yapilardir.',
        clbLevel: 7,
        category: 'Modals',
        difficulty: 'advanced',
        celpipContext:
          'Important for CELPIP Speaking Tasks 7-8 when reflecting on past situations, and Writing Task 2 when discussing missed opportunities.',
        commonMistake:
          'Pronunciation leading to writing errors: "should of" instead of "should have" (or "should\'ve"). "Of" is never correct here.',
        turkishExplanation:
          'Turkce de bu yapilar "-ebirdi," "-meliydi," "-irdi" ile karsilanir: "Daha erken otobusu alabilirdim" (could have), "Daha cok calismaliydin" (should have), "Bilseydim yardim ederdim" (would have). Hepsi gecmiste gerceklesmeyen eylemleri anlatir.',
      },
      {
        id: 'grammar-modals-13',
        rule: 'Be able to (alternative to can)',
        explanation:
          '"Be able to" is used as an alternative to "can" when "can" cannot be used, such as after another modal, in perfect tenses, or in the infinitive form.',
        example:
          'She will be able to attend the meeting tomorrow. I have been able to improve my English since moving to Toronto.',
        turkishMeaning:
          '"Be able to" "can" in kullanilamadigi yerlerde kullanilir: baska modal dan sonra, perfect zamanlarda veya mastar haliyle.',
        clbLevel: 7,
        category: 'Modals',
        difficulty: 'advanced',
        celpipContext:
          'Useful for CELPIP Writing when discussing future abilities or past achievements. Provides more flexibility than "can."',
        commonMistake:
          'Using "can" after another modal: "I will can attend" instead of "I will be able to attend." Two modals cannot be used together.',
      },
      {
        id: 'grammar-modals-14',
        rule: 'May I / Could I / Can I (asking permission)',
        explanation:
          '"May I" is the most formal way to ask permission. "Could I" is polite. "Can I" is informal.',
        example:
          'May I use your phone? Could I borrow your pen? Can I sit here?',
        turkishMeaning:
          '"May I" en resmi, "Could I" kibar, "Can I" en yakin/samimi izin isteme bicimidir.',
        clbLevel: 7,
        category: 'Modals',
        difficulty: 'basic',
        celpipContext:
          'Directly tested in CELPIP Listening in workplace and service interactions. Choosing the right level of formality matters for Speaking.',
        commonMistake:
          'Using "Can I" in formal situations: In CELPIP Writing formal emails, use "May I" or "Could I" instead of "Can I."',
      },
      {
        id: 'grammar-modals-15',
        rule: 'Used to / Would (past habits)',
        explanation:
          '"Used to" describes past habits or states that no longer exist. "Would" can also describe past habitual actions, but NOT past states.',
        example:
          'I used to live in Ankara. (past state — cannot use "would") I used to / would walk to school every day. (past habit — both work)',
        turkishMeaning:
          '"Used to" gecmis aliskanlik ve durumlar icin. "Would" sadece gecmis tekrarlayan eylemler icin (durumlar icin kullanilamaz).',
        clbLevel: 7,
        category: 'Modals',
        difficulty: 'advanced',
        celpipContext:
          'Useful for CELPIP Speaking when comparing past and present life, especially when discussing life before and after immigration to Canada.',
        commonMistake:
          'Using "would" for past states: "I would live in Ankara" is wrong — use "I used to live in Ankara" for past states.',
        turkishExplanation:
          'Turkce de "Eskiden Ankara da yasardim" ve "Eskiden her gun yuruyerek okula giderdim" cumleleri ayni yapiyla (-irdi/-ardi) kurulur. Ingilizce de ise "used to" hem durum hem aliskanlik icin, "would" ise sadece tekrarlayan eylemler icin kullanilir.',
      },
    ],
    commonMistakes: [
      'Adding "-s" or conjugating after modals: "She can speaks English" instead of "She can speak English" — modals are always followed by the base form.',
      'Confusing "could" (past ability/polite request) with "can" (present ability): "I could swim" (past) vs "I can swim" (now) — Turkish uses the same word "yapabilir" for both.',
      'Using "must" for polite suggestions: "You must try this restaurant" sounds too strong — use "should" or "could" for suggestions in Canadian English.',
      'Struggling with "would" vs "could" vs "might" for degrees of certainty: Turkish "-ebilir" covers all three, but English distinguishes probability levels.',
    ],
    writingTip:
      'In CELPIP Writing Task 1 (email), use modals to adjust tone: "Could you please look into this matter?" (polite request), "This issue must be resolved immediately" (strong demand). In Task 2, use "should/could/might" to present balanced arguments: "The government should invest more in transit."',
    speakingTip:
      'In CELPIP Speaking Tasks 5-8 (giving advice or making choices), use modals to show nuance: "You could try talking to your neighbor" (suggestion), "It might help to contact the manager" (possibility). Using varied modals demonstrates vocabulary range and scores higher.',
    celpipExample:
      'You should consider taking public transit to work because it would save you money, and you might even enjoy the extra time to read or listen to podcasts.',
  },

  // ============================================================
  // TOPIC 6: Gerunds & Infinitives (CLB 7)
  // ============================================================
  {
    id: 'grammar-gerunds-infinitives',
    title: 'Gerunds & Infinitives',
    description:
      'Learn when to use -ing forms (gerunds) and to + verb (infinitives) after different verbs and structures.',
    clbLevel: 7,
    category: 'Verb Forms',
    icon: '🔤',
    words: [
      {
        id: 'grammar-gerunds-infinitives-1',
        rule: 'Gerund as subject',
        explanation:
          'A gerund (verb + -ing) can be the subject of a sentence. It acts as a noun.',
        example:
          'Swimming is great exercise. Learning English opens many doors in Canada. Cooking at home saves money.',
        turkishMeaning:
          'Gerund (fiil + -ing) cumlenin oznesi olabilir. Isim gibi davranir. Orn: Yuzmek harika bir egzersizdir.',
        clbLevel: 7,
        category: 'Verb Forms',
        difficulty: 'basic',
        celpipContext:
          'Gerunds as subjects appear in CELPIP Reading topic sentences and in Writing Task 2 opening statements.',
        commonMistake:
          'Using infinitive as subject in informal contexts: "To swim is great exercise" is grammatically correct but much less natural than "Swimming is great exercise."',
        turkishExplanation:
          'Turkce de fiil kokunun "-mek/-mak" hali ozne olabilir: "Yuzmek iyidir." Ingilizce de ayni islevi gerund (-ing) yapar: "Swimming is good." Her iki dil de fiili isim gibi kullanir, ancak Ingilizce -ing, Turkce -mek/-mak kullanir.',
      },
      {
        id: 'grammar-gerunds-infinitives-2',
        rule: 'Gerund after prepositions',
        explanation:
          'Always use a gerund (not infinitive) after prepositions like about, for, of, in, at, without.',
        example:
          'I am interested in volunteering. She is good at solving problems. He left without saying goodbye.',
        turkishMeaning:
          'Edatlardan (about, for, of, in, at, without) sonra her zaman gerund kullanilir, infinitive kullanilmaz.',
        clbLevel: 7,
        category: 'Verb Forms',
        difficulty: 'basic',
        celpipContext:
          'A key grammar rule for CELPIP Writing. Preposition + gerund combinations appear throughout all sections.',
        commonMistake:
          'Using infinitive after prepositions: "I am interested in to volunteer" instead of "I am interested in volunteering."',
        turkishExplanation:
          'Turkce de edatlardan sonra fiil "-mek/-mak" haliyle gelebilir: "Gonullu olmakla ilgileniyorum." Ingilizce de ise preposition dan sonra her zaman gerund (-ing) gelir, infinitive (to + fiil) asla gelmez.',
      },
      {
        id: 'grammar-gerunds-infinitives-3',
        rule: 'Verbs + gerund: enjoy, avoid, finish, mind, suggest, keep, consider, practice',
        explanation:
          'Some verbs are always followed by a gerund. These must be memorized.',
        example:
          'I enjoy meeting new people. She avoids driving in winter. Have you finished filling out the form?',
        turkishMeaning:
          'Bazi fiillerden sonra her zaman gerund gelir: enjoy, avoid, finish, mind, suggest, keep, consider, practice.',
        clbLevel: 7,
        category: 'Verb Forms',
        difficulty: 'intermediate',
        celpipContext:
          'These verbs are frequently used in CELPIP Speaking and Writing. Using the correct form (gerund vs. infinitive) is assessed in grammar scoring.',
        commonMistake:
          'Using infinitive after these verbs: "I enjoy to meet new people" instead of "I enjoy meeting new people."',
      },
      {
        id: 'grammar-gerunds-infinitives-4',
        rule: 'Verbs + infinitive: want, decide, plan, hope, agree, offer, refuse, learn, promise',
        explanation:
          'Some verbs are always followed by an infinitive (to + base verb). These must be memorized.',
        example:
          'I want to improve my English. She decided to take the CELPIP exam. They plan to move to Alberta.',
        turkishMeaning:
          'Bazi fiillerden sonra her zaman infinitive gelir: want, decide, plan, hope, agree, offer, refuse, learn, promise.',
        clbLevel: 7,
        category: 'Verb Forms',
        difficulty: 'intermediate',
        celpipContext:
          'Essential for CELPIP Speaking when discussing future plans and goals, and in Writing when expressing intentions.',
        commonMistake:
          'Using gerund after these verbs: "I want improving my English" instead of "I want to improve my English."',
      },
      {
        id: 'grammar-gerunds-infinitives-5',
        rule: 'Verbs + both (different meaning): stop, remember, try, forget, regret',
        explanation:
          'Some verbs can take both gerund and infinitive but with different meanings.',
        example:
          'I stopped smoking. (quit the habit) I stopped to smoke. (paused in order to smoke) Remember to lock the door. (don\'t forget) I remember locking the door. (I recall doing it)',
        turkishMeaning:
          'Bazi fiiller hem gerund hem infinitive alir ama anlam degisir: stop, remember, try, forget, regret.',
        clbLevel: 7,
        category: 'Verb Forms',
        difficulty: 'advanced',
        celpipContext:
          'Understanding the meaning difference is tested in CELPIP Reading comprehension. Choosing the wrong form changes the meaning entirely.',
        commonMistake:
          'Not recognizing the meaning change: "I stopped to smoke" and "I stopped smoking" have completely opposite meanings.',
        turkishExplanation:
          'Turkce de "Sigara icmeyi biraktim" (stopped smoking) ve "Sigara icmek icin durdum" (stopped to smoke) farkli cumlelerdir. Ingilizce de stop + gerund = birakma, stop + infinitive = yapmak icin durma. Bu ayrimi bilmek CELPIP Reading de cok onemlidir.',
      },
      {
        id: 'grammar-gerunds-infinitives-6',
        rule: 'Gerund after "go" (activities)',
        explanation:
          'Use "go + gerund" for recreational and physical activities.',
        example:
          'We went shopping at the Eaton Centre. They go skating in the winter. Let\'s go hiking this weekend.',
        turkishMeaning:
          'Eglence ve fiziksel aktiviteler icin "go + gerund" yapisi kullanilir: go shopping, go swimming, go hiking.',
        clbLevel: 7,
        category: 'Verb Forms',
        difficulty: 'basic',
        celpipContext:
          'Common in CELPIP Listening and Speaking when discussing leisure activities and hobbies in Canada.',
        commonMistake:
          'Using infinitive with "go" for activities: "Let\'s go to hike" instead of "Let\'s go hiking."',
      },
      {
        id: 'grammar-gerunds-infinitives-7',
        rule: 'Infinitive of purpose (to = in order to)',
        explanation:
          'Use the infinitive to explain the purpose or reason for an action.',
        example:
          'I went to the library to study for the exam. She called the clinic to book an appointment.',
        turkishMeaning:
          'Bir eylemin amacini veya nedenini aciklamak icin infinitive kullanilir: "-mek icin" anlaminda.',
        clbLevel: 7,
        category: 'Verb Forms',
        difficulty: 'basic',
        celpipContext:
          'Used in CELPIP Writing Task 1 when explaining reasons for writing, and in Speaking when justifying actions.',
        commonMistake:
          'Using "for + infinitive" instead of just the infinitive: "I went to the library for to study" instead of "I went to the library to study."',
        turkishExplanation:
          'Turkce de "-mek icin" yapisi Ingilizce deki infinitive of purpose ile bire bir uyar: "Sinava calismak icin kutuphaneye gittim" = "I went to the library to study for the exam." Turkce konusurlari icin kavramasi kolay bir yapidir.',
      },
      {
        id: 'grammar-gerunds-infinitives-8',
        rule: 'Too / Enough + infinitive',
        explanation:
          '"Too + adjective + to" means excessively (negative result). "Adjective + enough + to" means sufficiently (positive result).',
        example:
          'It is too cold to walk outside today. She is experienced enough to handle the project.',
        turkishMeaning:
          '"Too + sifat + to" asiri derecede (olumsuz sonuc), "sifat + enough + to" yeterince (olumlu sonuc) anlaminda.',
        clbLevel: 7,
        category: 'Verb Forms',
        difficulty: 'intermediate',
        celpipContext:
          'Common in CELPIP Writing and Speaking for expressing limitations or adequacy. Helps create more nuanced sentences.',
        commonMistake:
          'Wrong word order with "enough": "She is enough experienced" instead of "She is experienced enough." "Enough" comes after adjectives.',
      },
      {
        id: 'grammar-gerunds-infinitives-9',
        rule: 'Make / Let + bare infinitive (without "to")',
        explanation:
          'After "make" and "let," use the base form of the verb without "to."',
        example:
          'The teacher made us repeat the exercise. My manager let me leave early on Friday. Don\'t let the kids stay up too late.',
        turkishMeaning:
          '"Make" ve "let" den sonra "to" olmadan yalin fiil kullanilir: make someone do, let someone do.',
        clbLevel: 7,
        category: 'Verb Forms',
        difficulty: 'intermediate',
        celpipContext:
          'Appears in CELPIP Listening workplace and family contexts. Also useful for Writing when describing rules or permissions.',
        commonMistake:
          'Adding "to" after "make" or "let": "She made me to repeat" instead of "She made me repeat."',
        turkishExplanation:
          'Turkce de "yaptirmak" (make) ve "izin vermek" (let) farkli yapilarla kullanilir. Ingilizce de make ve let den sonra "to" kullanilmaz: "Bize tekrar ettirdi" = "She made us repeat." Bu kural Turkce deki "-tir" yapisiyla benzerdir ancak "to" nun olmamasi onemlidir.',
      },
      {
        id: 'grammar-gerunds-infinitives-10',
        rule: 'Used to + infinitive (past habits)',
        explanation:
          '"Used to + infinitive" describes past habits or states that are no longer true. Do not confuse with "be used to + gerund" (be accustomed to).',
        example:
          'I used to live in Istanbul before I moved to Canada. She didn\'t use to like cold weather, but now she is used to living in Winnipeg.',
        turkishMeaning:
          '"Used to + infinitive" artik gecerli olmayan gecmis aliskanliklar icin. "Be used to + gerund" ise alisik olmak anlaminda.',
        clbLevel: 7,
        category: 'Verb Forms',
        difficulty: 'advanced',
        celpipContext:
          'Common in CELPIP Speaking when comparing past and present life, especially for immigrants discussing adaptation to life in Canada.',
        commonMistake:
          'Confusing "used to" with "be used to": "I used to living in Canada" instead of "I am used to living in Canada" (accustomed) or "I used to live in Turkey" (past habit).',
        turkishExplanation:
          'Turkce de "used to" = "eskiden -irdi/-ardi" (artik yapmiyorum): "Eskiden Istanbul da yasardim." "Be used to" = "alisik olmak": "Winnipeg de yasamaya alisigim." Iki yapiyi karistirmamak icin: "used to + infinitive" gecmis, "be used to + gerund" simdiki aliskanlik.',
      },
      {
        id: 'grammar-gerunds-infinitives-11',
        rule: 'Verb + object + infinitive',
        explanation:
          'Some verbs take an object before the infinitive: ask, tell, want, expect, advise, encourage, remind, teach, allow.',
        example:
          'She asked me to help her with the form. The advisor encouraged him to apply for PR. They told us to arrive early at the testing centre in Toronto.',
        turkishMeaning:
          'Bazi fiiller nesneden sonra infinitive alir: ask someone to do, tell someone to do, want someone to do.',
        clbLevel: 7,
        category: 'Verb Forms',
        difficulty: 'intermediate',
        celpipContext:
          'Very common in CELPIP Listening conversations about instructions and requests, and in Writing when describing what someone told you to do.',
        commonMistake:
          'Missing the object: "She asked to help" (she wants to help someone) vs. "She asked me to help" (she wants me to help). The meaning changes significantly.',
      },
      {
        id: 'grammar-gerunds-infinitives-12',
        rule: 'Adjective + infinitive',
        explanation:
          'Certain adjectives are followed by infinitives: happy, glad, surprised, ready, easy, difficult, important, possible.',
        example:
          'I am happy to meet you. She was surprised to see snow in October in Edmonton. It is important to practice every day.',
        turkishMeaning:
          'Bazi sifatlardan sonra infinitive gelir: happy to, glad to, surprised to, ready to, easy to, difficult to, important to.',
        clbLevel: 7,
        category: 'Verb Forms',
        difficulty: 'basic',
        celpipContext:
          'Used in CELPIP Speaking to express feelings and reactions, and in Writing to discuss the importance or difficulty of actions.',
        commonMistake:
          'Using gerund after adjectives that require infinitive: "I am happy meeting you" instead of "I am happy to meet you."',
      },
      {
        id: 'grammar-gerunds-infinitives-13',
        rule: 'Gerund vs Infinitive with "like," "love," "hate," "prefer"',
        explanation:
          'With "like," "love," "hate," and "prefer," both gerund and infinitive are usually acceptable with little or no difference in meaning. However, "would like/love/hate/prefer" always takes an infinitive.',
        example:
          'I like swimming. / I like to swim. (both OK) I would like to try poutine. (NOT: I would like trying)',
        turkishMeaning:
          '"Like, love, hate, prefer" ile gerund ve infinitive genellikle ayni anlamdadir. Ancak "would like/love/hate/prefer" her zaman infinitive alir.',
        clbLevel: 7,
        category: 'Verb Forms',
        difficulty: 'intermediate',
        celpipContext:
          'Appears in CELPIP Speaking when expressing preferences and in Listening in casual conversations about likes and dislikes.',
        commonMistake:
          'Using gerund after "would like": "I would like going to Banff" instead of "I would like to go to Banff."',
      },
      {
        id: 'grammar-gerunds-infinitives-14',
        rule: 'Gerund after common phrases: look forward to, be worth, it\'s no use, can\'t help, feel like',
        explanation:
          'Certain common phrases and expressions always take a gerund. Note that "to" in "look forward to" is a preposition, not part of an infinitive.',
        example:
          'I look forward to hearing from you. This book is worth reading. I can\'t help feeling nervous before the CELPIP test.',
        turkishMeaning:
          'Bazi yaygin ifadeler her zaman gerund alir: look forward to, be worth, it\'s no use, can\'t help, feel like.',
        clbLevel: 7,
        category: 'Verb Forms',
        difficulty: 'advanced',
        celpipContext:
          '"I look forward to hearing from you" is one of the most important phrases for CELPIP Writing Task 1 email closings. Using the correct form is essential.',
        commonMistake:
          'Using infinitive after "look forward to": "I look forward to hear from you" instead of "I look forward to hearing from you." The "to" here is a preposition.',
        turkishExplanation:
          'Turkce de "Sizden haber bekliyorum" seklinde cevrilir. Ingilizce de "look forward to" daki "to" bir edat oldugu icin sonrasinda gerund (-ing) gelir, infinitive (to + fiil) degil. Bu en sik yapilan hatalardan biridir cunku "to" yu infinitive in parcasi sanirlar.',
      },
      {
        id: 'grammar-gerunds-infinitives-15',
        rule: 'Gerund after "spend time" and "waste time"',
        explanation:
          'Use a gerund after "spend time" and "waste time" to describe what activity the time is used for.',
        example:
          'I spend two hours a day practicing English. Don\'t waste time worrying about the test — just prepare well. She spent the weekend exploring Niagara Falls.',
        turkishMeaning:
          '"Spend time" (zaman harcamak) ve "waste time" (zaman kaybi) dan sonra gerund kullanilir.',
        clbLevel: 7,
        category: 'Verb Forms',
        difficulty: 'advanced',
        celpipContext:
          'Useful in CELPIP Writing Task 2 when discussing how people use their time, and in Speaking when describing daily routines.',
        commonMistake:
          'Using infinitive after "spend time": "I spend time to practice" instead of "I spend time practicing."',
        turkishExplanation:
          'Turkce de "Ingilizce pratik yaparak iki saat harciyorum" cumlesindeki "-arak" eki Ingilizce deki gerund (-ing) islevini gorur. "Spend time" + gerund yapisi Turkce deki fiil + "-arak" yapisina benzer.',
      },
    ],
    commonMistakes: [
      'Using infinitive after verbs that require gerund: "I enjoy to read" instead of "I enjoy reading" — Turkish does not distinguish between these forms.',
      'Using gerund after verbs that require infinitive: "I want going home" instead of "I want to go home."',
      'Forgetting that some verbs change meaning with gerund vs infinitive: "I stopped to smoke" (paused in order to smoke) vs "I stopped smoking" (quit the habit).',
      'Defaulting to infinitive for all verb combinations because Turkish uses a single "-mek/-mak" suffix for both functions.',
    ],
    writingTip:
      'In CELPIP Writing Task 1 (email), use gerunds as subjects for a formal tone: "Swimming in the pool after 10 PM is not permitted." In Task 2 (survey response), use gerunds and infinitives to vary sentence structure: "I recommend investing in better facilities" and "The city needs to improve public spaces."',
    speakingTip:
      'In CELPIP Speaking Tasks 1-4 (describing situations), use gerunds and infinitives naturally: "The people in the picture seem to be enjoying their meal" or "I would suggest going to the park instead." Correct usage of these forms shows grammatical accuracy.',
    celpipExample:
      'I would recommend considering the option of working from home because it allows employees to avoid commuting and helps them focus on completing their tasks efficiently.',
  },
];
