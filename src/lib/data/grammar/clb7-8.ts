import type { GrammarTopic } from './types';

export const grammarTopicsCLB7_8: GrammarTopic[] = [
  // ─── Topic 1: Reported Speech ───────────────────────────────────────
  {
    id: 'grammar-reported-speech',
    title: 'Reported Speech',
    description:
      'Learn how to report what someone said without quoting their exact words. Essential for CELPIP listening and writing tasks.',
    clbLevel: 7,
    category: 'Speech',
    icon: '💬',
    words: [
      {
        id: 'grammar-reported-speech-1',
        rule: 'Say vs. Tell',
        explanation:
          '"Say" is used without a personal object (say something). "Tell" requires a personal object (tell someone something).',
        example:
          'He said that the office was closed. / He told me that the office was closed.',
        turkishMeaning:
          '"Say" kisi nesnesi almaz (say something). "Tell" kisi nesnesi gerektirir (tell someone something).',
        clbLevel: 7,
        category: 'Speech',
        difficulty: 'basic',
        celpipContext:
          'Frequently appears in CELPIP Listening where you must identify who said what. Also tested in Writing Task 1 when summarizing information.',
        commonMistake:
          'Using "say" with a personal object: "He said me that..." instead of "He told me that..."',
        turkishExplanation:
          'Turkcede bu ayrimin dogrudan karsiligi yoktur. "Soyledi" hem "say" hem "tell" icin kullanilir. Ancak Ingilizcede "tell" her zaman bir kisi nesnesi ister.',
      },
      {
        id: 'grammar-reported-speech-2',
        rule: 'Direct to Reported: tense backshift',
        explanation:
          'When reporting speech, shift the tense one step back. Present simple becomes past simple, present continuous becomes past continuous.',
        example:
          'She said, "I work at the hospital in Toronto." → She said that she worked at the hospital in Toronto.',
        turkishMeaning:
          'Dolayli anlatimda zaman bir adim geriye kayar. Simdiki zaman → gecmis zaman olur.',
        clbLevel: 7,
        category: 'Speech',
        difficulty: 'basic',
        celpipContext:
          'Core skill for CELPIP Listening Part 3 where you paraphrase conversations. Also essential for Writing Task 1 when restating what others have said.',
        commonMistake:
          'Forgetting to backshift the tense: "She said she works" instead of "She said she worked."',
        turkishExplanation:
          'Turkcede dolayli anlatimda da zaman kaydirmasi yapilir. "Calisiyorum" → "Calistigini soyledi." Ingilizce ayni mantigi izler ancak her zaman kipi bir adim geriye kaydirir.',
      },
      {
        id: 'grammar-reported-speech-3',
        rule: 'Pronoun changes in reported speech',
        explanation:
          'When converting direct speech to reported speech, pronouns change to match the perspective of the reporter.',
        example:
          'He said, "I will submit my application to Immigration Canada." → He said that he would submit his application to Immigration Canada.',
        turkishMeaning:
          'Dolayli anlatimda zamirler, anlatan kisinin bakis acisina gore degisir. "I" → "he/she" olur.',
        clbLevel: 7,
        category: 'Speech',
        difficulty: 'basic',
        celpipContext:
          'Critical for CELPIP Listening comprehension questions that ask you to identify who is being referred to in reported statements.',
        commonMistake:
          'Keeping the original pronoun: "He said that I would submit" instead of "He said that he would submit."',
      },
      {
        id: 'grammar-reported-speech-4',
        rule: 'Time and place changes in reported speech',
        explanation:
          'Time and place expressions shift in reported speech: "now" becomes "then," "here" becomes "there," "today" becomes "that day."',
        example:
          'She said, "I am moving to Toronto today." → She said that she was moving to Toronto that day.',
        turkishMeaning:
          'Zaman ve yer ifadeleri degisir: "now" → "then," "here" → "there," "today" → "that day."',
        clbLevel: 7,
        category: 'Speech',
        difficulty: 'intermediate',
        celpipContext:
          'Often tested in CELPIP Reading where passages include reported speech with shifted time references. Understanding these shifts is key to answering detail questions.',
        commonMistake:
          'Forgetting to change "yesterday" to "the day before" or "tomorrow" to "the next day."',
        turkishExplanation:
          'Turkcede de benzer degisimler vardir: "bugun" → "o gun," "burada" → "orada." Ingilizce dolayli anlatimda bu degisimler zorunludur.',
      },
      {
        id: 'grammar-reported-speech-5',
        rule: 'Reporting questions',
        explanation:
          'Reported questions use statement word order (subject + verb), not question word order. Use "if/whether" for yes/no questions and the original question word for wh-questions.',
        example:
          'She asked, "Do you have Canadian experience?" → She asked if I had Canadian experience.',
        turkishMeaning:
          'Dolayli sorularda cumle sirasi duz cumle gibidir. Evet/hayir sorulari icin "if/whether" kullanilir.',
        clbLevel: 7,
        category: 'Speech',
        difficulty: 'intermediate',
        celpipContext:
          'Appears in CELPIP Listening when speakers report questions others have asked. Also relevant in Speaking Task 5 where you describe a situation involving dialogue.',
        commonMistake:
          'Using question word order in reported speech: "She asked did I have" instead of "She asked if I had."',
        turkishExplanation:
          'Turkcede dolayli soru "...olup olmadigini sordu" seklinde kurulur. Ingilizce "if/whether" bu islevi gorur ve cumle duz sira ile devam eder.',
      },
      {
        id: 'grammar-reported-speech-6',
        rule: 'Reporting commands and requests',
        explanation:
          'Commands and requests are reported using "told/asked/ordered + object + to + base verb." Negative commands use "not to."',
        example:
          'The manager said, "Finish the report by Friday." → The manager told us to finish the report by Friday.',
        turkishMeaning:
          'Emirler "told/asked + nesne + to + fiil" ile aktarilir. Olumsuz emirlerde "not to" kullanilir.',
        clbLevel: 7,
        category: 'Speech',
        difficulty: 'intermediate',
        celpipContext:
          'Common in CELPIP Speaking Task 3 where you describe what someone told or asked you to do. Also appears in Listening workplace scenarios.',
        commonMistake:
          'Using "that" instead of "to": "He told me that finish" instead of "He told me to finish."',
      },
      {
        id: 'grammar-reported-speech-7',
        rule: 'Reporting suggestions',
        explanation:
          'Suggestions can be reported with "suggested + gerund" or "suggested that + subject + (should) + base verb."',
        example:
          'He said, "Let\'s take the express bus to downtown Vancouver." → He suggested taking the express bus to downtown Vancouver.',
        turkishMeaning:
          'Oneriler "suggested + -ing" veya "suggested that + ozne + fiil" ile aktarilir.',
        clbLevel: 7,
        category: 'Speech',
        difficulty: 'intermediate',
        celpipContext:
          'Useful in CELPIP Speaking Task 4 where you need to make and report suggestions. Also appears in Writing Task 1 when summarizing proposed solutions.',
        commonMistake:
          'Using infinitive after "suggest": "He suggested to take" instead of "He suggested taking."',
        turkishExplanation:
          'Turkcede "onermek" fiilinden sonra dogrudan eylem gelir: "otobuse binmeyi onerdi." Ingilizce "suggest" fiilinden sonra asla "to + fiil" gelmez; "-ing" veya "that + yalin fiil" kullanilir.',
      },
      {
        id: 'grammar-reported-speech-8',
        rule: 'No backshift when the statement is still true',
        explanation:
          'If the reported information is still true or is a general fact, tense backshift is optional.',
        example:
          'She said, "Ottawa is the capital of Canada." → She said that Ottawa is the capital of Canada.',
        turkishMeaning:
          'Aktarilan bilgi hala gecerliyse veya genel bir gercekse, zaman kaydirmasi zorunlu degildir.',
        clbLevel: 7,
        category: 'Speech',
        difficulty: 'advanced',
        celpipContext:
          'Relevant in CELPIP Reading where factual reported statements appear. Understanding when backshift is optional helps avoid confusion on comprehension questions.',
        commonMistake:
          'Always backshifting even for universal truths: "He said the Earth was round" is acceptable but "He said the Earth is round" is also correct.',
      },
      {
        id: 'grammar-reported-speech-9',
        rule: 'Omission of "that" in reported speech',
        explanation:
          '"That" can be omitted after common reporting verbs like "said," "told," and "thought" in informal speech and writing.',
        example:
          'He said (that) he would attend the citizenship ceremony in Vancouver.',
        turkishMeaning:
          '"That" yaygin aktarim fiillerinden sonra ozellikle gunluk dilde atlanabilir.',
        clbLevel: 7,
        category: 'Speech',
        difficulty: 'basic',
        celpipContext:
          'In CELPIP Listening, speakers frequently omit "that" in natural conversation. Recognizing reported speech without "that" is important for comprehension.',
        commonMistake:
          'Thinking "that" is always required. In formal writing it is preferred, but in speech it is commonly dropped.',
      },
      {
        id: 'grammar-reported-speech-10',
        rule: 'Common reporting verbs',
        explanation:
          'Beyond "said" and "told," use varied reporting verbs for nuance: explain, mention, claim, admit, deny, complain, promise, warn, advise.',
        example:
          'The landlord warned that the rent would increase in January. / She admitted that she had missed the deadline for the Toronto housing application.',
        turkishMeaning:
          '"Said" ve "told" disinda cesitli aktarim fiilleri vardir: explain, mention, claim, admit, deny, warn, promise.',
        clbLevel: 7,
        category: 'Speech',
        difficulty: 'intermediate',
        celpipContext:
          'Using varied reporting verbs is essential for scoring well on CELPIP Writing Tasks. It demonstrates a higher level of vocabulary and helps convey precise meaning.',
        commonMistake:
          'Overusing "said" and "told" instead of more precise verbs like "insisted," "acknowledged," or "confirmed."',
      },
      {
        id: 'grammar-reported-speech-11',
        rule: 'Reporting with passive voice',
        explanation:
          'Reported speech can use passive constructions like "It is said that..." or "He is believed to..." for impersonal or formal reporting.',
        example:
          'It is reported that housing prices in Vancouver will continue to rise. / The new immigration policy is believed to benefit skilled workers.',
        turkishMeaning:
          'Edilgen yapiyla aktarim: "It is said that..." veya "He is believed to..." gibi kaliplar resmi anlatimda kullanilir.',
        clbLevel: 7,
        category: 'Speech',
        difficulty: 'advanced',
        celpipContext:
          'Passive reported speech appears frequently in CELPIP Reading academic passages. It is also a sophisticated structure that can boost your Writing score.',
        commonMistake:
          'Incorrect passive form: "It is said he is..." is correct, but "It is said that he is..." is also acceptable. Avoid mixing active and passive awkwardly.',
        turkishExplanation:
          'Turkcede "-digi soyleniyor" veya "-digi dusunuluyor" kaliplari buna karsilik gelir. Ingilizce "It is said/believed/reported that..." kaliplarinda ozne belirsizdir.',
      },
      {
        id: 'grammar-reported-speech-12',
        rule: 'Reporting promises and threats',
        explanation:
          'Promises are reported with "promised + to + base verb" or "promised that + would." Threats use "threatened + to + base verb."',
        example:
          'She promised to help me prepare for my CELPIP exam. / The landlord threatened to raise the rent if repairs were not covered by the tenant.',
        turkishMeaning:
          'Sozler "promised to + fiil" ile, tehditler "threatened to + fiil" ile aktarilir.',
        clbLevel: 7,
        category: 'Speech',
        difficulty: 'basic',
        celpipContext:
          'Common in CELPIP Listening Part 4 where workplace conversations include promises and commitments. Also appears in Speaking tasks describing personal experiences.',
        commonMistake:
          'Using "that" after "promised to": "She promised to that she help" instead of "She promised to help" or "She promised that she would help."',
      },
      {
        id: 'grammar-reported-speech-13',
        rule: 'Reporting opinions and beliefs',
        explanation:
          'Opinions and beliefs are reported using verbs like "think," "believe," "feel," "consider," followed by "that + clause."',
        example:
          'My colleague believed that the new immigration policy would attract more skilled workers to Canada. / She felt that the Toronto transit system needed improvement.',
        turkishMeaning:
          'Gorusler ve inanclar "think, believe, feel, consider" fiilleri ile aktarilir: "that + cumlecik."',
        clbLevel: 7,
        category: 'Speech',
        difficulty: 'advanced',
        celpipContext:
          'Essential for CELPIP Speaking Task 7 where you express and report opinions. Also critical for Writing Task 2 where you present different viewpoints.',
        commonMistake:
          'Confusing "feel" (opinion) with "feel" (emotion): "He felt that the plan was wrong" (opinion) vs. "He felt sad" (emotion).',
      },
      {
        id: 'grammar-reported-speech-14',
        rule: 'Modals in reported speech',
        explanation:
          'Modal verbs change in reported speech: "can" becomes "could," "will" becomes "would," "may" becomes "might." However, "could," "would," "should," "might," and "ought to" stay the same.',
        example:
          'She said, "I can drive you to the airport." → She said she could drive me to the airport. / He said, "You should apply to the program in Ottawa." → He said I should apply to the program in Ottawa.',
        turkishMeaning:
          'Kiplik fiiller dolayli anlatimda degisir: "can" → "could," "will" → "would," "may" → "might." "Could, would, should, might" ayni kalir.',
        clbLevel: 7,
        category: 'Speech',
        difficulty: 'advanced',
        celpipContext:
          'Modal backshift is commonly tested in CELPIP Listening and Reading. Correct usage of modals in reported speech also improves Writing scores.',
        commonMistake:
          'Double-shifting modals that should not change: "He said he could..." should not become "He said he could had..."',
        turkishExplanation:
          'Turkcede kiplik fiillerin dolayli anlatimda ozel degisimi yoktur. Ingilizce ise belirli kurallar izler: "can" → "could," "will" → "would." "Could" ve "would" ise zaten gecmis formda olduklari icin degismez.',
      },
      {
        id: 'grammar-reported-speech-15',
        rule: 'Reporting exclamations and reactions',
        explanation:
          'Exclamations are reported using "exclaimed that..." or by describing the emotion: "expressed surprise/joy/anger that..." Do not use exclamation marks in reported speech.',
        example:
          'She said, "What a beautiful view of the Rocky Mountains!" → She exclaimed that the view of the Rocky Mountains was beautiful. / He said, "I can\'t believe I passed!" → He expressed surprise that he had passed.',
        turkishMeaning:
          'Unlemler "exclaimed that..." veya duyguyu tanimlayarak aktarilir: "expressed surprise/joy/anger that..."',
        clbLevel: 7,
        category: 'Speech',
        difficulty: 'advanced',
        celpipContext:
          'Useful in CELPIP Speaking Tasks 5-8 where you describe situations involving emotional reactions. Demonstrates advanced language control.',
        commonMistake:
          'Directly quoting the exclamation with an exclamation mark in reported speech: "She exclaimed that what a view!" instead of "She exclaimed that the view was beautiful."',
      },
    ],
    commonMistakes: [
      'Forgetting tense backshift: saying "She said she is busy" instead of "She said she was busy."',
      'Using "say" with a personal object: "He said me" instead of "He told me."',
      'Keeping question word order in reported questions: "She asked where is the office" instead of "She asked where the office was."',
      'Translating Turkish indirect speech directly without adjusting pronouns and time expressions.',
    ],
    writingTip:
      'In CELPIP Writing Task 1 (email), use reported speech to summarize information from a colleague or notice. For example: "My manager informed me that the deadline had been extended." This shows CLB 7-8 grammar control.',
    speakingTip:
      'In CELPIP Speaking Tasks 5-8, use reported speech to describe what others have said about a situation. For example: "My neighbour told me that the noise had been going on for weeks." This demonstrates natural, advanced fluency.',
    celpipExample:
      'The building manager informed the residents that the water supply would be shut off the following day for scheduled maintenance.',
  },

  // ─── Topic 2: Advanced Conditionals ─────────────────────────────────
  {
    id: 'grammar-advanced-conditionals',
    title: 'Advanced Conditionals',
    description:
      'Master second, third, and mixed conditionals for hypothetical and unreal situations. Critical for CELPIP speaking and writing tasks.',
    clbLevel: 8,
    category: 'Conditionals',
    icon: '🔮',
    words: [
      {
        id: 'grammar-advanced-conditionals-1',
        rule: 'Second conditional: unreal present/future',
        explanation:
          'Use "If + past simple, would + base verb" to talk about unreal or hypothetical situations in the present or future.',
        example:
          'If I lived closer to downtown Toronto, I would take public transit every day.',
        turkishMeaning:
          'Simdi veya gelecekte gercek olmayan durumlar icin "If + gecmis zaman, would + fiil" kullanilir.',
        clbLevel: 8,
        category: 'Conditionals',
        difficulty: 'basic',
        celpipContext:
          'Common in CELPIP Speaking Tasks 4-5 where you give advice or describe hypothetical scenarios. Also appears in Writing Task 2 for presenting arguments.',
        commonMistake:
          'Using "would" in the if-clause: "If I would live closer..." instead of "If I lived closer..."',
        turkishExplanation:
          'Turkcede "-seydi/-saydi" kalibina karsilik gelir: "Daha yakin otursaydim, her gun toplu tasima kullanirdim." Ingilizce if-cumleciginde "would" asla kullanilmaz.',
      },
      {
        id: 'grammar-advanced-conditionals-2',
        rule: 'Third conditional: unreal past',
        explanation:
          'Use "If + past perfect, would have + past participle" to talk about hypothetical situations in the past that did not happen.',
        example:
          'If I had applied earlier, I would have gotten the position at the government office in Ottawa.',
        turkishMeaning:
          'Gecmiste gerceklesmeyen durumlar icin "If + past perfect, would have + V3" kullanilir.',
        clbLevel: 8,
        category: 'Conditionals',
        difficulty: 'intermediate',
        celpipContext:
          'Frequently appears in CELPIP Speaking Task 7 where you discuss past decisions and their potential outcomes. Also useful in Writing for reflective essays.',
        commonMistake:
          'Using "would have" in the if-clause: "If I would have applied" instead of "If I had applied."',
        turkishExplanation:
          'Turkcede "-mis olsaydi, -mis olacakti" kalibina karsilik gelir: "Daha erken basvurmus olsaydim, isi almis olacaktim." Ingilizce if-cumleciginde "would have" kullanilmaz.',
      },
      {
        id: 'grammar-advanced-conditionals-3',
        rule: 'Mixed conditional: past condition, present result',
        explanation:
          'Use "If + past perfect, would + base verb" when a past condition affects a present situation.',
        example:
          'If I had studied French in school, I would be bilingual now and could work for the federal government in Ottawa.',
        turkishMeaning:
          'Gecmisteki bir kosulun simdiki sonucunu ifade etmek icin "If + past perfect, would + fiil" kullanilir.',
        clbLevel: 8,
        category: 'Conditionals',
        difficulty: 'advanced',
        celpipContext:
          'Demonstrates sophisticated grammar control in CELPIP Writing Task 2. Using mixed conditionals correctly can help achieve CLB 9+ scores.',
        commonMistake:
          'Confusing mixed conditionals with third conditionals. Mixed: "If I had studied, I would be bilingual NOW." Third: "If I had studied, I would have been bilingual THEN."',
        turkishExplanation:
          'Bu karisik kosul yapisi Turkcede de vardir: "Okulda Fransizca calismis olsaydim, simdi iki dilli olurdum." Gecmisteki durum (past perfect) simdiki sonucu (would + yalin fiil) etkiler.',
      },
      {
        id: 'grammar-advanced-conditionals-4',
        rule: 'Wish + past simple (unreal present)',
        explanation:
          'Use "wish + past simple" to express a desire for a present situation to be different from reality.',
        example:
          'I wish I had a shorter commute to work in downtown Vancouver.',
        turkishMeaning:
          'Simdiki durumun farkli olmasini dilemek icin "wish + gecmis zaman" kullanilir.',
        clbLevel: 8,
        category: 'Conditionals',
        difficulty: 'basic',
        celpipContext:
          'Appears in CELPIP Speaking tasks where you express dissatisfaction or desires. Also useful in Writing when discussing improvements you would like to see.',
        commonMistake:
          'Using present tense after "wish": "I wish I have" instead of "I wish I had."',
      },
      {
        id: 'grammar-advanced-conditionals-5',
        rule: 'Wish + past perfect (unreal past)',
        explanation:
          'Use "wish + past perfect" to express regret about something that happened or did not happen in the past.',
        example:
          'I wish I had taken the job offer in Vancouver when I had the chance.',
        turkishMeaning:
          'Gecmiste olan/olmayan bir sey icin pisman olmak: "wish + past perfect" kullanilir.',
        clbLevel: 8,
        category: 'Conditionals',
        difficulty: 'intermediate',
        celpipContext:
          'Useful in CELPIP Speaking Task 7 for expressing regret about past situations. Also appears in Listening conversations where speakers discuss missed opportunities.',
        commonMistake:
          'Using simple past instead of past perfect: "I wish I took" instead of "I wish I had taken."',
        turkishExplanation:
          'Turkcede "-mis olsaydim" kalibina karsilik gelir: "Keske Vancouver\'daki is teklifini kabul etmis olsaydim." "Wish + past perfect" her zaman gecmise yonelik pisamanlik ifade eder.',
      },
      {
        id: 'grammar-advanced-conditionals-6',
        rule: 'If only (stronger wish)',
        explanation:
          '"If only" works the same as "wish" but expresses a stronger emotion or regret. It follows the same grammar rules.',
        example:
          'If only I had prepared more for the CELPIP test!',
        turkishMeaning:
          '"If only" ile "wish" ayni gramer kurallarina sahiptir ancak "if only" daha guclu bir duygu ifade eder.',
        clbLevel: 8,
        category: 'Conditionals',
        difficulty: 'intermediate',
        celpipContext:
          'Can be used in CELPIP Speaking to express strong feelings about hypothetical situations. Shows emotional range and advanced grammar.',
        commonMistake:
          'Treating "if only" differently from "wish" grammatically. They follow the exact same tense rules.',
      },
      {
        id: 'grammar-advanced-conditionals-7',
        rule: 'Suppose / Supposing',
        explanation:
          '"Suppose" or "Supposing" can replace "if" in conditional sentences, often used to present hypothetical scenarios for discussion.',
        example:
          'Suppose you lost your PR card in Canada — what would you do?',
        turkishMeaning:
          '"Suppose/Supposing" kosullu cumlelerde "if" yerine kullanilabilir, varsayimsal senaryolar icin.',
        clbLevel: 8,
        category: 'Conditionals',
        difficulty: 'intermediate',
        celpipContext:
          'Appears in CELPIP Speaking Task 4 where the examiner presents hypothetical situations. Understanding "suppose" helps you respond naturally.',
        commonMistake:
          'Forgetting that "suppose" follows the same conditional tense rules as "if." The grammar does not change just because the word is different.',
      },
      {
        id: 'grammar-advanced-conditionals-8',
        rule: 'But for (without)',
        explanation:
          '"But for" means "if it were not for" or "if it had not been for." It is used in formal or written English with conditionals.',
        example:
          'But for my supervisor\'s support at the Toronto office, I would not have received the promotion.',
        turkishMeaning:
          '"But for" resmi dilde "if it were not for / if it had not been for" anlaminda kullanilir.',
        clbLevel: 8,
        category: 'Conditionals',
        difficulty: 'advanced',
        celpipContext:
          'A sophisticated structure that can elevate CELPIP Writing Task 2 responses. It demonstrates formal register and advanced grammatical control.',
        commonMistake:
          'Using "but for" with a verb instead of a noun: "But for he helped me" instead of "But for his help."',
        turkishExplanation:
          'Turkcede "-mese idi, -masa idi" veya "-in sayesinde olmasa" kalibina karsilik gelir: "Amirimin destegi olmasa, terfi alamazdim." "But for" her zaman bir isim veya isim grubuyla kullanilir.',
      },
      {
        id: 'grammar-advanced-conditionals-9',
        rule: 'Otherwise (implied conditional)',
        explanation:
          '"Otherwise" introduces the result of an implied condition. It means "if not" and connects two statements where one depends on the other.',
        example:
          'You need to renew your work permit on time; otherwise, you may lose your immigration status in Canada.',
        turkishMeaning:
          '"Otherwise" ima edilen bir kosulun sonucunu belirtir. "Aksi takdirde" anlamina gelir.',
        clbLevel: 8,
        category: 'Conditionals',
        difficulty: 'basic',
        celpipContext:
          'Commonly appears in CELPIP Reading passages about rules, policies, and procedures. Also useful in Writing to present consequences.',
        commonMistake:
          'Using "otherwise" without proper punctuation. It should follow a semicolon or start a new sentence, not be joined with just a comma.',
      },
      {
        id: 'grammar-advanced-conditionals-10',
        rule: 'Were to (formal/unlikely condition)',
        explanation:
          '"If + subject + were to + base verb" is a formal way to express an unlikely or hypothetical condition, often used in professional writing.',
        example:
          'If the company were to relocate from Toronto, many employees would need to find new housing.',
        turkishMeaning:
          '"If + ozne + were to + fiil" resmi dilde olasiligi dusuk varsayimsal durumlar icin kullanilir.',
        clbLevel: 8,
        category: 'Conditionals',
        difficulty: 'advanced',
        celpipContext:
          'Useful for CELPIP Writing Task 2 when discussing unlikely scenarios in a formal tone. Also appears in Reading passages about policy and planning.',
        commonMistake:
          'Using "was to" instead of "were to": "If the company was to relocate" is less formal and not preferred in written English.',
      },
      {
        id: 'grammar-advanced-conditionals-11',
        rule: 'Mixed conditional: present condition, past result',
        explanation:
          'Use "If + past simple, would have + past participle" when a present or general condition would have changed a past result.',
        example:
          'If I spoke French fluently, I would have applied for that bilingual position in Montreal.',
        turkishMeaning:
          'Simdiki bir durumun gecmisteki sonucunu ifade etmek icin "If + past simple, would have + V3" kullanilir.',
        clbLevel: 8,
        category: 'Conditionals',
        difficulty: 'advanced',
        celpipContext:
          'An advanced structure that demonstrates high-level grammar in CELPIP Writing. It shows the ability to connect present states with hypothetical past outcomes.',
        commonMistake:
          'Confusing this with the third conditional. Here, the condition is about a present/general state ("I don\'t speak French"), not a past action.',
        turkishExplanation:
          'Turkcede "Fransizca akici konussaydim, o iki dilli pozisyona basvurmus olurdum" seklinde ifade edilir. Kosul simdiki zamanda (hala Fransizca bilmiyorum), sonuc ise gecmiste (basvurmadim).',
      },
      {
        id: 'grammar-advanced-conditionals-12',
        rule: 'Provided that / As long as (conditional alternatives)',
        explanation:
          '"Provided that" and "As long as" can replace "if" to express a condition that must be met. They add emphasis to the condition.',
        example:
          'You can work in Canada as long as you have a valid work permit. / Provided that you pass the CELPIP exam, you will meet the language requirement for PR.',
        turkishMeaning:
          '"Provided that" ve "As long as" bir kosulun karsilanmasi gerektigini ifade etmek icin "if" yerine kullanilabilir.',
        clbLevel: 8,
        category: 'Conditionals',
        difficulty: 'basic',
        celpipContext:
          'Frequently appears in CELPIP Reading passages about rules, regulations, and requirements. Also useful in Writing to state conditions clearly.',
        commonMistake:
          'Using "providing" interchangeably with "provided that" is acceptable, but "as long" without "as" is incorrect — always use "as long as."',
      },
      {
        id: 'grammar-advanced-conditionals-13',
        rule: 'Even if vs. Even though',
        explanation:
          '"Even if" introduces a hypothetical condition (something that may or may not happen). "Even though" introduces a real, factual contrast (something that is true).',
        example:
          'Even if it rains tomorrow, the Canada Day parade in Ottawa will continue. / Even though it was raining, thousands attended the parade.',
        turkishMeaning:
          '"Even if" varsayimsal bir kosul sunar (olabilir veya olmayabilir). "Even though" gercek bir zitlik sunar (olan bir sey).',
        clbLevel: 8,
        category: 'Conditionals',
        difficulty: 'intermediate',
        celpipContext:
          'Distinguishing between "even if" and "even though" is tested in CELPIP Reading and Listening. Correct usage improves Writing coherence.',
        commonMistake:
          'Using "even if" when the situation is real/factual: "Even if I studied hard, I failed" should be "Even though I studied hard, I failed."',
        turkishExplanation:
          'Turkcede "even if" icin "-se bile" (varsayimsal), "even though" icin "-masina ragmen" (gercek) kullanilir. "Yagsa bile kutlama devam edecek" vs. "Yagmasina ragmen binlerce kisi katildi."',
      },
      {
        id: 'grammar-advanced-conditionals-14',
        rule: 'Wish + would (annoying habits or changes)',
        explanation:
          'Use "wish + would" to express frustration about someone else\'s habits or to express a desire for a situation to change. Do not use it about yourself.',
        example:
          'I wish my neighbours would stop playing loud music late at night. / I wish the city would invest more in cycling infrastructure in Toronto.',
        turkishMeaning:
          '"Wish + would" baskasinin aliskanliklarindan duyulan rahatsizligi veya bir degisiklik istegini ifade eder. Kendimiz icin kullanilmaz.',
        clbLevel: 8,
        category: 'Conditionals',
        difficulty: 'basic',
        celpipContext:
          'Useful in CELPIP Speaking tasks when expressing complaints or desires for change. Also common in Listening where speakers express frustration.',
        commonMistake:
          'Using "wish + would" about yourself: "I wish I would be taller" is incorrect. Use "I wish I were taller" instead.',
      },
      {
        id: 'grammar-advanced-conditionals-15',
        rule: 'Unless (negative condition)',
        explanation:
          '"Unless" means "if not" and introduces a negative condition. It is followed by an affirmative verb — do not use a negative verb after "unless."',
        example:
          'Unless you submit your immigration documents on time, your application will be delayed. / I won\'t move to Calgary unless I find a job there first.',
        turkishMeaning:
          '"Unless" "eger ... degilse / -medikce" anlamina gelir. Ardindan olumlu fiil gelir, olumsuz fiil kullanilmaz.',
        clbLevel: 8,
        category: 'Conditionals',
        difficulty: 'basic',
        celpipContext:
          'Common in CELPIP Reading passages about policies and rules. Also appears in Listening workplace scenarios with conditions and requirements.',
        commonMistake:
          'Using a negative verb after "unless": "Unless you don\'t submit" is a double negative and means the opposite of what is intended.',
        turkishExplanation:
          'Turkcede "-medikce" veya "-mazsa" kalibina karsilik gelir: "Belgelerinizi zamaninda gondermedikce basvurunuz gecikmeli olacaktir." "Unless" zaten olumsuzluk icerdiginden, ardindan gelen fiil olumlu olmalidir.',
      },
    ],
    commonMistakes: [
      'Using past simple instead of past perfect in third conditionals: "If I studied harder" instead of "If I had studied harder."',
      'Mixing up "I wish" structures: saying "I wish I can speak English" instead of "I wish I could speak English."',
      'Confusing second and third conditionals: using "would have" in a present unreal situation instead of "would."',
      'Translating Turkish "keske" directly without applying the correct English tense pattern for wishes and regrets.',
    ],
    writingTip:
      'In CELPIP Writing Task 2 (survey response), use mixed conditionals to explain hypothetical outcomes. For example: "If the city had invested in public transit earlier, fewer residents would rely on cars today." This demonstrates sophisticated reasoning.',
    speakingTip:
      'In CELPIP Speaking Tasks 3-4 (making predictions or giving advice), use conditionals to present alternatives. For example: "If I were in that situation, I would contact the landlord immediately." This shows confident, natural speech at CLB 8.',
    celpipExample:
      'If the company had offered better benefits, I would not be looking for a new position right now.',
  },

  // ─── Topic 3: Phrasal Verbs ─────────────────────────────────────────
  {
    id: 'grammar-phrasal-verbs',
    title: 'Phrasal Verbs',
    description:
      'Learn essential phrasal verbs used in everyday Canadian English and workplace communication. Frequently tested on the CELPIP exam.',
    clbLevel: 8,
    category: 'Vocabulary',
    icon: '🔧',
    words: [
      {
        id: 'grammar-phrasal-verbs-1',
        rule: 'Separable phrasal verbs',
        explanation:
          'Some phrasal verbs are separable: the object can go between the verb and the particle. When the object is a pronoun, it must go in the middle.',
        example:
          'Please turn off the lights. / Please turn them off. (NOT: turn off them)',
        turkishMeaning:
          'Ayrilabilir phrasal verb\'lerde nesne ortaya gelebilir. Zamir kullanildiginda ortaya gelmek zorundadir.',
        clbLevel: 8,
        category: 'Vocabulary',
        difficulty: 'basic',
        celpipContext:
          'Understanding separable vs. inseparable phrasal verbs is essential for CELPIP Listening comprehension and natural-sounding Speaking responses.',
        commonMistake:
          'Placing a pronoun after the particle: "turn off it" instead of "turn it off."',
        turkishExplanation:
          'Turkcede phrasal verb kavrami yoktur. Ingilizce phrasal verb\'ler fiil + edat birlesiminden olusur ve anlam tek basina fiilden farkli olabilir. Ayrilabilir olanlarda zamir (it, them) fiil ile edat arasina girmek zorundadir.',
      },
      {
        id: 'grammar-phrasal-verbs-2',
        rule: 'Inseparable phrasal verbs',
        explanation:
          'Inseparable phrasal verbs keep the verb and particle together. The object always comes after the particle.',
        example:
          'She looks after her elderly parents in Mississauga. (NOT: looks her elderly parents after)',
        turkishMeaning:
          'Ayrilamaz phrasal verb\'lerde fiil ve edati her zaman birlikte kalir. Nesne edattan sonra gelir.',
        clbLevel: 8,
        category: 'Vocabulary',
        difficulty: 'basic',
        celpipContext:
          'Inseparable phrasal verbs appear frequently in CELPIP Listening conversations about daily life and family responsibilities.',
        commonMistake:
          'Trying to separate an inseparable phrasal verb: "looks her after" instead of "looks after her."',
      },
      {
        id: 'grammar-phrasal-verbs-3',
        rule: 'Three-word phrasal verbs',
        explanation:
          'Three-word phrasal verbs (verb + particle + preposition) are always inseparable. The object follows the entire phrase.',
        example:
          'I look forward to meeting you at the conference in Ottawa.',
        turkishMeaning:
          'Uc kelimelik phrasal verb\'ler her zaman ayrilamazdir. Nesne tum ifadenin ardindan gelir.',
        clbLevel: 8,
        category: 'Vocabulary',
        difficulty: 'intermediate',
        celpipContext:
          'Three-word phrasal verbs like "look forward to" and "come up with" appear in CELPIP Writing emails and Speaking tasks requiring formal closings.',
        commonMistake:
          'Using infinitive after "look forward to": "I look forward to meet you" instead of "I look forward to meeting you." The "to" here is a preposition, not part of an infinitive.',
        turkishExplanation:
          'Turkcede "dort gozle beklemek" (look forward to) gibi deyimsel karsiliklar vardir. Uc kelimelik phrasal verb\'lerde "to" bir edat oldugu icin ardindan "-ing" formu gelir, mastar degil.',
      },
      {
        id: 'grammar-phrasal-verbs-4',
        rule: 'Common workplace phrasal verbs: carry out, figure out',
        explanation:
          '"Carry out" means to perform or complete a task. "Figure out" means to solve or understand something after thinking about it.',
        example:
          'Our team carried out the safety inspection at the Vancouver office last week. / We need to figure out how to reduce overtime costs.',
        turkishMeaning:
          '"Carry out" bir gorevi yerine getirmek demektir. "Figure out" dusunup cozmek/anlamak demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
        difficulty: 'basic',
        celpipContext:
          'Workplace phrasal verbs are heavily tested in CELPIP Listening Part 4-6 which focus on workplace scenarios and professional communication.',
        commonMistake:
          'Confusing "carry out" with "carry on." "Carry out" means to complete a task; "carry on" means to continue.',
      },
      {
        id: 'grammar-phrasal-verbs-5',
        rule: 'Phrasal verbs with "get": get along, get over',
        explanation:
          '"Get along (with)" means to have a good relationship. "Get over" means to recover from something.',
        example:
          'I get along well with my coworkers at the Toronto office. / It took me a while to get over the jet lag after moving to Canada.',
        turkishMeaning:
          '"Get along" iyi gecinmek demektir. "Get over" bir seyden kurtulmak/atlatmak demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
        difficulty: 'intermediate',
        celpipContext:
          'Phrasal verbs with "get" are among the most common in CELPIP Listening. They appear in casual conversations about relationships and daily life.',
        commonMistake:
          'Confusing "get along with" (have a good relationship) with "get on with" (continue doing something or also have a good relationship — British English).',
      },
      {
        id: 'grammar-phrasal-verbs-6',
        rule: 'Phrasal verbs with "take": take on, take up',
        explanation:
          '"Take on" means to accept a responsibility or challenge. "Take up" means to start a new activity or hobby.',
        example:
          'She took on the role of team lead at her company in Calgary. / He took up hockey after moving to Canada.',
        turkishMeaning:
          '"Take on" sorumluluk almak demektir. "Take up" yeni bir aktivite/hobi baslatmak demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
        difficulty: 'intermediate',
        celpipContext:
          'Phrasal verbs with "take" appear in CELPIP Speaking when describing life changes, new responsibilities, or hobbies adopted after immigration.',
        commonMistake:
          'Confusing "take on" (accept responsibility) with "take over" (assume control of something from someone else).',
      },
      {
        id: 'grammar-phrasal-verbs-7',
        rule: 'Phrasal verbs with "put": put off, put up with',
        explanation:
          '"Put off" means to postpone or delay. "Put up with" means to tolerate something unpleasant.',
        example:
          'Don\'t put off filing your Canadian taxes. / I can\'t put up with the noise from the construction next door.',
        turkishMeaning:
          '"Put off" ertelemek demektir. "Put up with" hos olmayan bir seye katlanmak demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
        difficulty: 'intermediate',
        celpipContext:
          'Commonly tested in CELPIP Listening Part 3 where speakers discuss problems and complaints. "Put up with" is especially common in neighbour dispute scenarios.',
        commonMistake:
          'Confusing "put off" (postpone) with "put out" (extinguish or inconvenience someone).',
      },
      {
        id: 'grammar-phrasal-verbs-8',
        rule: 'Phrasal verbs with "come": come across, come up with',
        explanation:
          '"Come across" means to find something by chance. "Come up with" means to think of an idea or solution.',
        example:
          'I came across a great hiking trail near Banff. / The committee came up with a plan to improve community services in Brampton.',
        turkishMeaning:
          '"Come across" tesadufen bulmak demektir. "Come up with" bir fikir/cozum uretmek demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
        difficulty: 'intermediate',
        celpipContext:
          'These phrasal verbs appear in CELPIP Speaking tasks where you describe experiences or propose solutions. "Come up with" is especially useful for Task 4.',
        commonMistake:
          'Confusing "come across" (find by chance) with "come across as" (give the impression of being).',
      },
      {
        id: 'grammar-phrasal-verbs-9',
        rule: 'Phrasal verbs with "bring": bring up, bring about',
        explanation:
          '"Bring up" means to mention a topic or to raise a child. "Bring about" means to cause something to happen.',
        example:
          'She brought up the issue of parking at the condo meeting in Toronto. / The new policy brought about significant changes in the workplace.',
        turkishMeaning:
          '"Bring up" bir konuyu gundeme getirmek veya cocuk buyutmek demektir. "Bring about" bir seyin olmasina neden olmak demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
        difficulty: 'advanced',
        celpipContext:
          'These phrasal verbs are useful in CELPIP Writing Task 2 for discussing causes and raising points. "Bring up" also appears in Listening meeting scenarios.',
        commonMistake:
          'Confusing the two meanings of "bring up" — context determines whether it means "mention a topic" or "raise a child."',
      },
      {
        id: 'grammar-phrasal-verbs-10',
        rule: 'Intransitive phrasal verbs: break down, show up',
        explanation:
          'Intransitive phrasal verbs do not take an object. "Break down" means to stop working. "Show up" means to arrive or appear.',
        example:
          'My car broke down on the highway near Calgary. / Only half the volunteers showed up for the community event.',
        turkishMeaning:
          'Gecissiz phrasal verb\'ler nesne almaz. "Break down" bozulmak, "show up" gelmek/ortaya cikmak demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
        difficulty: 'basic',
        celpipContext:
          'Intransitive phrasal verbs are common in CELPIP Listening narratives and Speaking tasks where you describe events and situations.',
        commonMistake:
          'Trying to add an object: "My car broke down it" is incorrect. "Break down" (when meaning to stop working) does not take an object.',
      },
      {
        id: 'grammar-phrasal-verbs-11',
        rule: 'Phrasal verbs with "run": run into, run out of',
        explanation:
          '"Run into" means to meet someone unexpectedly or to encounter a problem. "Run out of" means to use up a supply completely.',
        example:
          'I ran into my old professor at the grocery store in Markham. / We ran out of printer paper at the office before the quarterly report was finished.',
        turkishMeaning:
          '"Run into" tesadufen karsilasmak veya bir sorunla karsilasmak demektir. "Run out of" bir seyi tamamen tuketmek demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
        difficulty: 'basic',
        celpipContext:
          'These phrasal verbs appear in CELPIP Listening casual conversations and Speaking tasks about unexpected events or problems.',
        commonMistake:
          'Forgetting the preposition "of" in "run out of": "We ran out paper" instead of "We ran out of paper."',
      },
      {
        id: 'grammar-phrasal-verbs-12',
        rule: 'Phrasal verbs with "look": look into, look up to',
        explanation:
          '"Look into" means to investigate or research. "Look up to" means to admire or respect someone.',
        example:
          'The HR department is looking into the complaint. / Many newcomers to Canada look up to their settlement counsellors for guidance.',
        turkishMeaning:
          '"Look into" arastirmak/incelemek demektir. "Look up to" birine hayranlik duymak/saygi gostermek demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
        difficulty: 'advanced',
        celpipContext:
          'These appear in CELPIP Listening workplace scenarios. "Look into" is especially common in professional contexts where issues need investigation.',
        commonMistake:
          'Confusing "look into" (investigate) with "look in on" (visit briefly to check on someone).',
      },
      {
        id: 'grammar-phrasal-verbs-13',
        rule: 'Phrasal verbs with "turn": turn down, turn up',
        explanation:
          '"Turn down" means to reject an offer or reduce volume. "Turn up" means to arrive unexpectedly or increase volume.',
        example:
          'She turned down the job offer because the commute to Scarborough was too long. / Hundreds of people turned up at the free concert in Stanley Park, Vancouver.',
        turkishMeaning:
          '"Turn down" bir teklifi reddetmek veya sesi kismak demektir. "Turn up" beklenmedik sekilde gelmek veya sesi acmak demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
        difficulty: 'advanced',
        celpipContext:
          'Phrasal verbs with "turn" are tested in CELPIP Listening, especially in workplace and social scenarios. Multiple meanings make context critical.',
        commonMistake:
          'Forgetting that "turn down" can mean both "reject" and "reduce volume." Context determines the meaning.',
        turkishExplanation:
          'Turkcede "turn down" hem "reddetmek" hem "kismak" anlamina gelebilir, "turn up" hem "ortaya cikmak" hem "acmak" anlamina gelebilir. Ingilizce phrasal verb\'lerin birden fazla anlami olabilir ve baglamdan anlasilir.',
      },
      {
        id: 'grammar-phrasal-verbs-14',
        rule: 'Phrasal verbs with "go": go through, go over',
        explanation:
          '"Go through" means to experience something difficult or to examine something carefully. "Go over" means to review or check something.',
        example:
          'Many immigrants go through a challenging adjustment period when they first arrive in Canada. / Let\'s go over the presentation one more time before the meeting.',
        turkishMeaning:
          '"Go through" zor bir deneyim yasamak veya dikkatli incelemek demektir. "Go over" gozden gecirmek/kontrol etmek demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
        difficulty: 'advanced',
        celpipContext:
          'These phrasal verbs are common in CELPIP Speaking personal experience tasks and Listening workplace review scenarios.',
        commonMistake:
          'Confusing "go through" (experience/examine) with "go over" (review). "Go through" often implies difficulty or thoroughness, while "go over" is lighter review.',
      },
      {
        id: 'grammar-phrasal-verbs-15',
        rule: 'Phrasal verbs with "set": set up, set off',
        explanation:
          '"Set up" means to establish, arrange, or prepare something. "Set off" means to begin a journey or to trigger something.',
        example:
          'We set up a new community centre for newcomers in Surrey. / They set off early in the morning to drive from Toronto to Montreal.',
        turkishMeaning:
          '"Set up" kurmak, duzenlemek veya hazirlamak demektir. "Set off" yolculuga cikmak veya bir seyi tetiklemek demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
        difficulty: 'advanced',
        celpipContext:
          'These phrasal verbs appear in CELPIP Writing and Speaking when describing plans, events, and travel. "Set up" is particularly common in workplace contexts.',
        commonMistake:
          'Confusing "set up" (arrange/establish) with "set out" (begin a journey with a purpose or to display). "Set up" focuses on preparation; "set out" focuses on intention.',
        turkishExplanation:
          'Turkcede "set up" icin "kurmak" veya "hazirlamak," "set off" icin "yola cikmak" veya "tetiklemek" kullanilir. Ingilizce "set" fiili farkli edatlarla cok farkli anlamlar kazanir.',
      },
    ],
    commonMistakes: [
      'Separating inseparable phrasal verbs: saying "I will look the word up" is correct, but "I will get the bus off at" is wrong because "get off" is inseparable.',
      'Translating phrasal verbs word-by-word from Turkish: Turkish has no phrasal verb system, so learners try to use the base verb alone, saying "I will put the meeting" instead of "I will put off the meeting."',
      'Confusing similar phrasal verbs: mixing up "look up" (search for), "look into" (investigate), and "look over" (review).',
    ],
    writingTip:
      'In CELPIP Writing Task 1 (email), replace formal single-word verbs with appropriate phrasal verbs to sound more natural. For example, write "I need to go over the report" instead of "I need to review the report" when the tone is informal or semi-formal.',
    speakingTip:
      'In CELPIP Speaking Tasks 1-2 (giving advice or talking about personal experience), use common phrasal verbs to sound natural. For example: "I had to deal with a similar problem when my landlord turned down my request." Examiners reward natural-sounding language.',
    celpipExample:
      'The HR department asked all employees to fill out the new benefits form and hand it in by the end of the week.',
  },

  // ─── Topic 4: Parallel Structure ────────────────────────────────────
  {
    id: 'grammar-parallel-structure',
    title: 'Parallel Structure',
    description:
      'Master parallel structure to write clear, balanced sentences. A key skill for CELPIP writing tasks and professional communication.',
    clbLevel: 8,
    category: 'Sentence Structure',
    icon: '⚖️',
    words: [
      {
        id: 'grammar-parallel-structure-1',
        rule: 'Parallel nouns in a list',
        explanation:
          'When listing nouns, keep them in the same form. Do not mix nouns with verbs or clauses.',
        example:
          'The job at the Toronto office requires patience, dedication, and attention to detail.',
        turkishMeaning:
          'Isim listelerken hepsini ayni formda tutun. Isimleri fiillerle veya cumleciklerle karistirmayin.',
        clbLevel: 8,
        category: 'Sentence Structure',
        difficulty: 'basic',
        celpipContext:
          'Parallel noun lists are essential for CELPIP Writing Task 2 where you present multiple points in support of an argument.',
        commonMistake:
          'Mixing nouns with other forms: "The job requires patience, to be dedicated, and paying attention" instead of using all nouns.',
      },
      {
        id: 'grammar-parallel-structure-2',
        rule: 'Parallel verbs in a series',
        explanation:
          'When listing actions, keep all verbs in the same tense and form. Do not switch between base form, gerund, and infinitive.',
        example:
          'Every morning, I wake up, eat breakfast, and drive to work in Mississauga. (NOT: wake up, eating breakfast, and to drive)',
        turkishMeaning:
          'Eylemleri siralarken tum fiilleri ayni zaman ve formda tutun. Mastar, isim-fiil gibi formlar arasi gecis yapmayin.',
        clbLevel: 8,
        category: 'Sentence Structure',
        difficulty: 'basic',
        celpipContext:
          'Verb parallelism is commonly tested in CELPIP Writing. Errors in verb form consistency lower your grammar score.',
        commonMistake:
          'Switching forms mid-list: "I enjoy reading, to swim, and hiking" instead of "I enjoy reading, swimming, and hiking."',
      },
      {
        id: 'grammar-parallel-structure-3',
        rule: 'Parallel adjectives',
        explanation:
          'When listing adjectives, keep them in the same grammatical form. Avoid mixing single adjectives with phrases.',
        example:
          'The new community centre in Vancouver is modern, spacious, and well-equipped.',
        turkishMeaning:
          'Sifatlari siralarken ayni gramer formunda tutun. Tek sifatlarla sifat tamlamalarini karistirmayin.',
        clbLevel: 8,
        category: 'Sentence Structure',
        difficulty: 'basic',
        celpipContext:
          'Parallel adjectives are important for describing places and people in CELPIP Speaking and Writing tasks.',
        commonMistake:
          'Mixing adjective types: "The centre is modern, has lots of space, and well-equipped" — mixing adjectives with a clause.',
      },
      {
        id: 'grammar-parallel-structure-4',
        rule: 'Not only...but also',
        explanation:
          'The elements following "not only" and "but also" must be in the same grammatical form (both nouns, both verbs, etc.).',
        example:
          'The training program in Toronto is not only informative but also practical.',
        turkishMeaning:
          '"Not only" ve "but also" dan sonra gelen ogeler ayni gramer yapisinda olmalidir.',
        clbLevel: 8,
        category: 'Sentence Structure',
        difficulty: 'intermediate',
        celpipContext:
          'Using "not only...but also" correctly in CELPIP Writing demonstrates advanced sentence structure and can improve your score.',
        commonMistake:
          'Breaking parallelism: "She not only is intelligent but also works hard" — misplacing "not only" disrupts the parallel structure.',
        turkishExplanation:
          'Turkcede "sadece ... degil, ayni zamanda ..." kalibina karsilik gelir. Ingilizce "not only" ve "but also" dan sonra gelen yapilar birbiriyle eslesmelidir: iki sifat, iki isim veya iki fiil.',
      },
      {
        id: 'grammar-parallel-structure-5',
        rule: 'Both...and',
        explanation:
          '"Both...and" connects two equal elements. The grammatical structure after "both" and "and" must match.',
        example:
          'She is both a skilled nurse and a dedicated volunteer in her community in Brampton.',
        turkishMeaning:
          '"Both...and" iki esit ogeyi baglar. "Both" ve "and" sonrasindaki yapilar eslesmelidir.',
        clbLevel: 8,
        category: 'Sentence Structure',
        difficulty: 'intermediate',
        celpipContext:
          'Using "both...and" properly shows balanced sentence construction in CELPIP Writing, which contributes to a higher coherence score.',
        commonMistake:
          'Placing "both" incorrectly: "She both is a nurse and a volunteer" instead of "She is both a nurse and a volunteer."',
      },
      {
        id: 'grammar-parallel-structure-6',
        rule: 'Either...or / Neither...nor',
        explanation:
          '"Either...or" and "Neither...nor" connect two parallel choices or negations. The structure after each must be the same.',
        example:
          'You can either submit the form online or mail it to the Service Canada office. / The apartment has neither a dishwasher nor a balcony.',
        turkishMeaning:
          '"Either...or" ve "Neither...nor" paralel secenekleri baglar. Her birinin ardindan gelen yapi ayni olmalidir.',
        clbLevel: 8,
        category: 'Sentence Structure',
        difficulty: 'intermediate',
        celpipContext:
          'These correlative conjunctions appear in CELPIP Reading and are useful in Writing Task 2 for presenting alternatives or ruling out options.',
        commonMistake:
          'Breaking parallelism: "You can either submit online or you can mail it" — the structure after "either" and "or" should match.',
      },
      {
        id: 'grammar-parallel-structure-7',
        rule: 'Parallel infinitives',
        explanation:
          'When listing infinitives, keep the "to" consistent. Either repeat "to" before each verb or use it only before the first.',
        example:
          'Our goals are to increase productivity, to improve communication, and to reduce costs at the Ottawa headquarters.',
        turkishMeaning:
          'Mastar fiilleri siralarken "to" kullanimi tutarli olmalidir. Ya her fiilden once ya da yalniz ilkinde kullanin.',
        clbLevel: 8,
        category: 'Sentence Structure',
        difficulty: 'intermediate',
        celpipContext:
          'Parallel infinitives are common in CELPIP Writing Task 2 when listing goals, recommendations, or steps in an argument.',
        commonMistake:
          'Inconsistent "to" usage: "Our goals are to increase productivity, improve communication, and to reduce costs" — mixing the pattern.',
      },
      {
        id: 'grammar-parallel-structure-8',
        rule: 'Parallel gerunds',
        explanation:
          'When listing gerunds (-ing forms used as nouns), keep all items as gerunds. Do not mix with infinitives.',
        example:
          'His hobbies include skating, fishing, and camping in the Canadian Rockies.',
        turkishMeaning:
          'Isim-fiil (-ing) listelerken tum ogeleri isim-fiil olarak tutun. Mastarlarla karistirmayin.',
        clbLevel: 8,
        category: 'Sentence Structure',
        difficulty: 'basic',
        celpipContext:
          'Gerund lists appear in CELPIP Speaking when describing hobbies, interests, or responsibilities. Keeping them parallel sounds natural.',
        commonMistake:
          'Mixing gerunds with infinitives: "His hobbies include skating, to fish, and camping" instead of keeping all as gerunds.',
      },
      {
        id: 'grammar-parallel-structure-9',
        rule: 'Parallel clauses',
        explanation:
          'When connecting clauses with conjunctions, keep the clause structure parallel. Each clause should follow the same pattern.',
        example:
          'The manager explained what the project involved, when it would start, and how the team would be organized.',
        turkishMeaning:
          'Baglaclarla cumlecikleri baglarken her cumlecik ayni yapisal kalipla olmalidir.',
        clbLevel: 8,
        category: 'Sentence Structure',
        difficulty: 'advanced',
        celpipContext:
          'Parallel clause structure is critical for CELPIP Writing coherence. It makes complex sentences easier to read and understand.',
        commonMistake:
          'Mixing clause types: "He explained what it involved, the start date, and how the team would work" — mixing a noun phrase with wh-clauses.',
      },
      {
        id: 'grammar-parallel-structure-10',
        rule: 'Faulty parallelism: how to correct it',
        explanation:
          'Faulty parallelism occurs when items in a list or comparison are not in the same grammatical form. Identify the pattern and make all items match.',
        example:
          'WRONG: The course teaches writing, how to read, and speaking. CORRECT: The course teaches writing, reading, and speaking.',
        turkishMeaning:
          'Hatali paralellik, listedeki ogelerin ayni gramer formunda olmamasidir. Kalibi belirleyip tum ogeleri eslestirin.',
        clbLevel: 8,
        category: 'Sentence Structure',
        difficulty: 'advanced',
        celpipContext:
          'Faulty parallelism is a common error that lowers CELPIP Writing scores. Being able to identify and correct it is essential for CLB 8+ writing.',
        commonMistake:
          'Not recognizing the pattern — always identify the first item in the list and match all subsequent items to its form.',
        turkishExplanation:
          'Turkcede de paralellik onemlidir ancak Ingilizce kadar kati degildir. Ingilizce yazimda listedeki tum ogelerin ayni gramer formu paylasmasi zorunludur, aksi halde cumle yanlis kabul edilir.',
      },
      {
        id: 'grammar-parallel-structure-11',
        rule: 'Parallelism in comparisons: as...as, more...than',
        explanation:
          'In comparisons using "as...as" or "more...than," the elements being compared must be in the same grammatical form.',
        example:
          'Working from home is as productive as working in the Toronto office. (NOT: as productive as to work in the office)',
        turkishMeaning:
          '"As...as" veya "more...than" ile karsilastirmalarda karsilastirilan ogeler ayni gramer formunda olmalidir.',
        clbLevel: 8,
        category: 'Sentence Structure',
        difficulty: 'intermediate',
        celpipContext:
          'Comparisons appear frequently in CELPIP Writing Task 2 where you compare options, ideas, or viewpoints. Parallel comparisons score higher.',
        commonMistake:
          'Comparing non-parallel elements: "Running is better than to swim" instead of "Running is better than swimming."',
      },
      {
        id: 'grammar-parallel-structure-12',
        rule: 'Parallelism with correlative conjunctions',
        explanation:
          'Correlative conjunctions (both...and, either...or, neither...nor, not only...but also, whether...or) require parallel structures on each side.',
        example:
          'The immigration consultant explained whether applicants should submit documents online or mail them to the processing centre.',
        turkishMeaning:
          'Iliskili baglaclar (both...and, either...or, neither...nor) her iki tarafta da paralel yapilar gerektirir.',
        clbLevel: 8,
        category: 'Sentence Structure',
        difficulty: 'advanced',
        celpipContext:
          'Correct use of correlative conjunctions with parallel structures is a marker of CLB 8-9 writing proficiency in CELPIP assessments.',
        commonMistake:
          'Placing the conjunction incorrectly so the elements are not parallel: "Both she sings and dances" instead of "She both sings and dances."',
        turkishExplanation:
          'Turkcede "hem...hem," "ya...ya," "ne...ne" kaliplari Ingilizce iliskili baglaclarla benzerdir. Her iki tarafta da esit gramer yapilari kullanilmalidir.',
      },
      {
        id: 'grammar-parallel-structure-13',
        rule: 'Parallelism in bullet points and lists',
        explanation:
          'In formal writing and presentations, bullet points and lists must begin with the same grammatical form — all nouns, all verbs, or all gerunds.',
        example:
          'The new employee orientation covers: understanding company policies, setting up email accounts, and meeting team members. (All gerunds)',
        turkishMeaning:
          'Resmi yazida ve sunumlarda madde isaretleri ve listeler ayni gramer formunda baslamalidir — tumu isim, tumu fiil veya tumu isim-fiil.',
        clbLevel: 8,
        category: 'Sentence Structure',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Writing Task 1 often involves summarizing information in a structured way. Parallel list structure improves clarity and your score.',
        commonMistake:
          'Starting list items with different forms: "Understanding policies, set up email, and to meet team members" — mixing gerunds, base forms, and infinitives.',
      },
      {
        id: 'grammar-parallel-structure-14',
        rule: 'Parallelism in compound sentences',
        explanation:
          'When two independent clauses are joined by a coordinating conjunction (and, but, or), they should ideally follow a similar structure for clarity.',
        example:
          'The government has increased funding for healthcare, and it has expanded services for newcomers across Canada.',
        turkishMeaning:
          'Iki bagimsiz cumlecik bir baglacla (and, but, or) birlestirildiginde, netlik icin benzer bir yapi izlemelidir.',
        clbLevel: 8,
        category: 'Sentence Structure',
        difficulty: 'advanced',
        celpipContext:
          'Compound sentences with parallel structure are valued in CELPIP Writing for demonstrating control over complex sentence formation.',
        commonMistake:
          'Creating unbalanced compound sentences: "The government increased funding and also there was expansion of services" — the two clauses have very different structures.',
      },
      {
        id: 'grammar-parallel-structure-15',
        rule: 'Parallelism with "the more...the more"',
        explanation:
          '"The more...the more" (and similar comparative structures) require parallel grammatical forms on each side of the comparison.',
        example:
          'The more you practise speaking English, the more confident you will become in your CELPIP interview. / The longer you live in Canada, the better you understand Canadian culture.',
        turkishMeaning:
          '"The more...the more" (ve benzer karsilastirma yapilari) karsilastirmanin her iki tarafinda paralel gramer formlar gerektirir.',
        clbLevel: 8,
        category: 'Sentence Structure',
        difficulty: 'advanced',
        celpipContext:
          'This structure appears in CELPIP Reading passages and is a powerful tool for Writing Task 2 to express cause-and-effect relationships.',
        commonMistake:
          'Breaking the pattern: "The more you practice, you become more confident" instead of "The more you practice, the more confident you become."',
        turkishExplanation:
          'Turkcede "ne kadar ... o kadar ..." kalibina karsilik gelir: "Ne kadar cok pratik yaparsaniz, o kadar guvenir olursunuz." Her iki taraf da paralel yapida olmalidir.',
      },
    ],
    commonMistakes: [
      'Mixing verb forms in a list: "I enjoy swimming, to hike, and cycling" instead of "I enjoy swimming, hiking, and cycling."',
      'Breaking parallelism with "not only...but also": "She is not only smart but also she works hard" instead of "She is not only smart but also hardworking."',
      'Using inconsistent structures after correlative conjunctions: "Either you submit the form or calling the office" instead of "Either submit the form or call the office."',
    ],
    writingTip:
      'In CELPIP Writing Task 2 (survey response), use parallel structure to list reasons or benefits clearly. For example: "The new policy would reduce commute times, lower pollution levels, and improve quality of life for all residents." This earns high marks for coherence.',
    speakingTip:
      'In CELPIP Speaking Tasks 5-8 (describing situations or comparing options), use parallel lists to sound organized and fluent. For example: "The candidate should be experienced, reliable, and willing to work flexible hours." Parallelism makes your speech sound polished.',
    celpipExample:
      'The community centre offers programs for learning new skills, staying physically active, and meeting people from diverse backgrounds.',
  },

  // ─── Topic 5: Sentence Connectors ───────────────────────────────────
  {
    id: 'grammar-connectors',
    title: 'Sentence Connectors',
    description:
      'Use transition words and connectors to create cohesive, well-structured paragraphs. Essential for scoring high on CELPIP writing.',
    clbLevel: 8,
    category: 'Cohesion',
    icon: '🔗',
    words: [
      {
        id: 'grammar-connectors-1',
        rule: 'However / Nevertheless (contrast)',
        explanation:
          '"However" and "Nevertheless" introduce a contrasting idea. They are used at the beginning of a sentence followed by a comma, or after a semicolon.',
        example:
          'The rent in Vancouver is very high; however, the quality of life is excellent. / The commute to downtown Toronto is long. Nevertheless, I enjoy the job.',
        turkishMeaning:
          '"However" ve "Nevertheless" zit bir fikir sunar. Cumle basinda virgulden once veya noktali virgulden sonra kullanilir.',
        clbLevel: 8,
        category: 'Cohesion',
        difficulty: 'basic',
        celpipContext:
          'These contrast connectors are essential for CELPIP Writing Task 2 where you present counterarguments. Proper punctuation with them affects your score.',
        commonMistake:
          'Using a comma splice: "The rent is high, however the quality is good." Use a semicolon before "however" or start a new sentence.',
        turkishExplanation:
          'Turkcede "ancak," "bununla birlikte," "yine de" gibi baglaclarla karsilik gelir. Ingilizce "however" noktalama kurallari Turkceden farklidir — noktali virgul veya yeni cumle gerektirir.',
      },
      {
        id: 'grammar-connectors-2',
        rule: 'Furthermore / Moreover (addition)',
        explanation:
          '"Furthermore" and "Moreover" add extra information that strengthens the previous point. They are more formal than "also."',
        example:
          'The candidate has strong technical skills. Furthermore, she has five years of Canadian work experience.',
        turkishMeaning:
          '"Furthermore" ve "Moreover" onceki noktayi guclendiren ek bilgi ekler. "Also" dan daha resmidir.',
        clbLevel: 8,
        category: 'Cohesion',
        difficulty: 'basic',
        celpipContext:
          'Using "Furthermore" and "Moreover" in CELPIP Writing demonstrates formal register and helps build strong arguments with supporting details.',
        commonMistake:
          'Overusing these connectors in every sentence. Use them strategically to add weight to key supporting points, not in every paragraph.',
      },
      {
        id: 'grammar-connectors-3',
        rule: 'Therefore / Consequently (result)',
        explanation:
          '"Therefore" and "Consequently" introduce a logical result or conclusion based on the previous statement.',
        example:
          'The company expanded its operations in Alberta. Therefore, they needed to hire additional staff. / The road was icy; consequently, several accidents occurred near Halifax.',
        turkishMeaning:
          '"Therefore" ve "Consequently" onceki ifadeye dayanan mantiksal bir sonuc sunar.',
        clbLevel: 8,
        category: 'Cohesion',
        difficulty: 'intermediate',
        celpipContext:
          'Result connectors are crucial for CELPIP Writing Task 2 conclusions and for linking cause-and-effect ideas throughout your essay.',
        commonMistake:
          'Using "therefore" to introduce an unrelated point. The statement after "therefore" must be a logical result of the previous one.',
      },
      {
        id: 'grammar-connectors-4',
        rule: 'In addition / Additionally (adding information)',
        explanation:
          '"In addition" and "Additionally" introduce supplementary information. They work similarly to "furthermore" but can feel slightly less formal.',
        example:
          'The library in Markham offers free internet access. In addition, it provides ESL classes for newcomers to Canada.',
        turkishMeaning:
          '"In addition" ve "Additionally" ek bilgi sunar. "Furthermore" a benzer ancak biraz daha az resmi olabilir.',
        clbLevel: 8,
        category: 'Cohesion',
        difficulty: 'basic',
        celpipContext:
          'These additive connectors help you expand on points in CELPIP Writing. They signal to the reader that you are providing additional supporting evidence.',
        commonMistake:
          'Confusing "in addition" with "in addition to." "In addition" starts a new clause; "in addition to" is followed by a noun or gerund.',
      },
      {
        id: 'grammar-connectors-5',
        rule: 'On the other hand (contrasting viewpoint)',
        explanation:
          '"On the other hand" introduces an alternative or contrasting viewpoint. It is often used after presenting one side of an argument.',
        example:
          'Living in a big city like Toronto offers many job opportunities. On the other hand, small towns in Ontario provide a quieter lifestyle.',
        turkishMeaning:
          '"On the other hand" alternatif veya zit bir bakis acisi sunar. Bir argumanin bir tarafi sunulduktan sonra kullanilir.',
        clbLevel: 8,
        category: 'Cohesion',
        difficulty: 'intermediate',
        celpipContext:
          'Ideal for CELPIP Writing Task 2 where you need to present both sides of an issue before stating your opinion.',
        commonMistake:
          'Using "on the other hand" without first presenting "one hand." It should follow an initial point, not appear in isolation.',
      },
      {
        id: 'grammar-connectors-6',
        rule: 'For example / For instance (illustration)',
        explanation:
          '"For example" and "For instance" introduce specific examples to support a general statement.',
        example:
          'Canada has many multicultural festivals. For example, Toronto hosts Caribana every summer.',
        turkishMeaning:
          '"For example" ve "For instance" genel bir ifadeyi desteklemek icin belirli ornekler sunar.',
        clbLevel: 8,
        category: 'Cohesion',
        difficulty: 'basic',
        celpipContext:
          'Examples strengthen your arguments in CELPIP Writing. Using "For example" or "For instance" shows you can support general claims with specific evidence.',
        commonMistake:
          'Using "e.g." or "ex." in formal writing. Spell out "For example" in CELPIP Writing tasks.',
      },
      {
        id: 'grammar-connectors-7',
        rule: 'In contrast (highlighting differences)',
        explanation:
          '"In contrast" highlights a clear difference between two things, people, or situations. It is stronger than "on the other hand."',
        example:
          'The summer in British Columbia was warm and dry. In contrast, the Maritimes experienced heavy rainfall.',
        turkishMeaning:
          '"In contrast" iki sey arasindaki net farki vurgular. "On the other hand" dan daha gucludur.',
        clbLevel: 8,
        category: 'Cohesion',
        difficulty: 'intermediate',
        celpipContext:
          'Use "In contrast" in CELPIP Writing when you want to emphasize a sharp difference between two things being discussed.',
        commonMistake:
          'Using "In contrast" when the ideas are not truly opposite. Reserve it for clear, direct contrasts rather than mild differences.',
      },
      {
        id: 'grammar-connectors-8',
        rule: 'As a result (cause and effect)',
        explanation:
          '"As a result" links a cause to its effect. It shows that the second statement is a direct consequence of the first.',
        example:
          'The factory in Hamilton closed without warning. As a result, hundreds of workers lost their jobs.',
        turkishMeaning:
          '"As a result" neden-sonuc iliskisi kurar. Ikinci ifadenin birincinin dogrudan sonucu oldugunu gosterir.',
        clbLevel: 8,
        category: 'Cohesion',
        difficulty: 'intermediate',
        celpipContext:
          'Cause-and-effect connectors like "As a result" are valued in CELPIP Writing for showing logical thinking and clear argumentation.',
        commonMistake:
          'Using "as a result" when there is no clear causal relationship between the two statements.',
      },
      {
        id: 'grammar-connectors-9',
        rule: 'In conclusion (summarizing)',
        explanation:
          '"In conclusion" signals that you are summarizing your main points. It is used at the beginning of a final paragraph in essays and reports.',
        example:
          'In conclusion, investing in public transportation across Canada would benefit both the economy and the environment.',
        turkishMeaning:
          '"In conclusion" ana noktalari ozetledigizi belirtir. Makale ve raporlarda son paragrafin basinda kullanilir.',
        clbLevel: 8,
        category: 'Cohesion',
        difficulty: 'basic',
        celpipContext:
          'Starting your final paragraph with "In conclusion" in CELPIP Writing Task 2 signals a clear essay structure to the examiner.',
        commonMistake:
          'Using "In conclusion" in the middle of an essay. It should only appear at the very end to wrap up your argument.',
      },
      {
        id: 'grammar-connectors-10',
        rule: 'Meanwhile / In the meantime (simultaneous events)',
        explanation:
          '"Meanwhile" and "In the meantime" show that two events happen at the same time, or describe what happens during a waiting period.',
        example:
          'The hiring committee is reviewing applications. Meanwhile, candidates are encouraged to prepare for interviews. / The office renovation will take two weeks. In the meantime, staff will work from home.',
        turkishMeaning:
          '"Meanwhile" ve "In the meantime" iki olayin ayni anda gerceklestigini veya bekleme surecinde ne yapildigini gosterir.',
        clbLevel: 8,
        category: 'Cohesion',
        difficulty: 'intermediate',
        celpipContext:
          'These time connectors appear in CELPIP Listening narratives and are useful in Writing for describing concurrent events or transitional periods.',
        commonMistake:
          'Confusing "meanwhile" (at the same time) with "afterwords" (later). They describe different time relationships.',
      },
      {
        id: 'grammar-connectors-11',
        rule: 'Although / Even though (concession)',
        explanation:
          '"Although" and "Even though" introduce a concession — they acknowledge one point while emphasizing the main idea. They begin a dependent clause.',
        example:
          'Although the winter in Winnipeg is extremely cold, the city has a thriving cultural scene. / Even though he had little Canadian experience, he secured a position at a major firm in Toronto.',
        turkishMeaning:
          '"Although" ve "Even though" bir taviz sunar — bir noktayi kabul ederken ana fikri vurgular. Bagli cumlecik baslatir.',
        clbLevel: 8,
        category: 'Cohesion',
        difficulty: 'intermediate',
        celpipContext:
          'Concession connectors are highly valued in CELPIP Writing Task 2 for showing nuanced thinking. They demonstrate that you can acknowledge opposing views.',
        commonMistake:
          'Using "although" and "but" in the same sentence: "Although it was cold, but I went outside." Remove "but" — "although" already signals the contrast.',
        turkishExplanation:
          'Turkcede "-masina ragmen" veya "-sa da" kalibina karsilik gelir: "Kis cok soguk olmasina ragmen, sehrin canli bir kulturu var." Ingilizce "although" ile baslayan cumlede ayrica "but" kullanilmaz.',
      },
      {
        id: 'grammar-connectors-12',
        rule: 'Whereas / While (direct contrast within one sentence)',
        explanation:
          '"Whereas" and "While" (when used for contrast, not time) connect two contrasting ideas within a single sentence.',
        example:
          'Toronto has a diverse, multicultural population, whereas Ottawa has a stronger bilingual character. / While Vancouver enjoys mild winters, Edmonton experiences severe cold.',
        turkishMeaning:
          '"Whereas" ve "While" (zitlik anlaminda) tek bir cumle icinde iki zit fikri baglar.',
        clbLevel: 8,
        category: 'Cohesion',
        difficulty: 'advanced',
        celpipContext:
          'Using "whereas" and "while" for contrast within a sentence shows sophisticated sentence construction in CELPIP Writing.',
        commonMistake:
          'Confusing "while" (contrast) with "while" (during the same time). Context determines the meaning.',
      },
      {
        id: 'grammar-connectors-13',
        rule: 'That is / In other words (clarification)',
        explanation:
          '"That is" and "In other words" are used to rephrase or clarify a previous statement, making it easier to understand.',
        example:
          'The CELPIP exam assesses communicative competence. In other words, it tests how well you can use English in real-life Canadian situations. / The position requires CLB 7; that is, you need a minimum score of 7 in each language skill.',
        turkishMeaning:
          '"That is" ve "In other words" onceki ifadeyi yeniden ifade etmek veya aciklamak icin kullanilir.',
        clbLevel: 8,
        category: 'Cohesion',
        difficulty: 'advanced',
        celpipContext:
          'Clarification connectors help in CELPIP Writing when you need to explain a complex point more simply. They also appear in Reading passages.',
        commonMistake:
          'Using "in other words" to add new information instead of rephrasing. It should restate the same idea differently, not introduce a new point.',
      },
      {
        id: 'grammar-connectors-14',
        rule: 'Accordingly / Thus (formal result)',
        explanation:
          '"Accordingly" and "Thus" introduce a result or action taken based on previously stated information. They are more formal than "so."',
        example:
          'The demand for housing in Toronto has increased significantly. Accordingly, the city council has approved new development projects. / Immigration levels have risen; thus, settlement services require additional funding.',
        turkishMeaning:
          '"Accordingly" ve "Thus" daha once belirtilen bilgiye dayanan bir sonuc veya eylemi sunar. "So" dan daha resmidir.',
        clbLevel: 8,
        category: 'Cohesion',
        difficulty: 'advanced',
        celpipContext:
          'Formal result connectors like "accordingly" and "thus" elevate the register of your CELPIP Writing, showing academic-level language control.',
        commonMistake:
          'Using "thus" casually in spoken English where "so" would be more natural. "Thus" is best reserved for formal writing.',
      },
      {
        id: 'grammar-connectors-15',
        rule: 'To sum up / All in all (summarizing alternatives)',
        explanation:
          '"To sum up" and "All in all" are alternatives to "In conclusion" for summarizing main points. "All in all" is slightly less formal and conveys an overall assessment.',
        example:
          'To sum up, the benefits of multiculturalism in Canada far outweigh the challenges. / All in all, the conference in Vancouver was a great success for networking and professional development.',
        turkishMeaning:
          '"To sum up" ve "All in all" ana noktalari ozetlemek icin "In conclusion" in alternatifleridir. "All in all" biraz daha az resmi olup genel bir degerlendirme sunar.',
        clbLevel: 8,
        category: 'Cohesion',
        difficulty: 'advanced',
        celpipContext:
          'Using varied summarizing connectors in CELPIP Writing shows lexical range. Alternating between "In conclusion," "To sum up," and "All in all" avoids repetition across practice essays.',
        commonMistake:
          'Using both a summarizing connector and "In conclusion" in the same paragraph. Choose one to avoid redundancy.',
        turkishExplanation:
          'Turkcede "ozetle," "sonuc olarak," "genel olarak" gibi ifadelere karsilik gelir. Ingilizce "To sum up" ve "All in all" "In conclusion" ile ayni islevi gorur ancak farkli resmiyet duzeylerinde kullanilir.',
      },
    ],
    commonMistakes: [
      'Using "however" with a comma splice: "The park is beautiful, however it lacks parking" instead of "The park is beautiful; however, it lacks parking." or starting a new sentence.',
      'Confusing "moreover" and "therefore": "moreover" adds information while "therefore" shows a result. Turkish "ayrica" and "bu yuzden" are distinct, but learners mix up the English equivalents.',
      'Overusing "and" and "but" instead of advanced connectors like "furthermore," "nevertheless," or "consequently," which are expected at CLB 7-8.',
      'Placing connectors incorrectly in the sentence: "However the weather was bad, we went out" instead of "However, the weather was bad" or using "Although" for that structure.',
    ],
    writingTip:
      'In CELPIP Writing Task 2 (survey response), use varied connectors to structure your argument. Start body paragraphs with "Furthermore" or "In addition" for supporting points, and use "On the other hand" or "Nevertheless" for counterarguments. This directly improves your coherence score.',
    speakingTip:
      'In CELPIP Speaking Tasks 5-8, use connectors like "as a result," "for this reason," and "on the other hand" to link your ideas clearly. For example: "The restaurant has great food; moreover, the prices are very reasonable." This shows logical organization in your speech.',
    celpipExample:
      'The proposed transit expansion would significantly reduce commute times; furthermore, it would create hundreds of new jobs in the construction sector.',
  },

  // ─── Topic 6: Subjunctive & Formal Structures ──────────────────────
  {
    id: 'grammar-subjunctive',
    title: 'Subjunctive & Formal Structures',
    description:
      'Learn formal grammar patterns including the subjunctive mood and advanced sentence structures used in professional and academic English.',
    clbLevel: 8,
    category: 'Formal Grammar',
    icon: '🎓',
    words: [
      {
        id: 'grammar-subjunctive-1',
        rule: 'Suggest / Recommend + that + base form',
        explanation:
          'After verbs like "suggest," "recommend," "propose," and "request," use "that + subject + base form of the verb" (no -s, no past tense).',
        example:
          'The doctor recommended that she take a week off work. / I suggest that he apply for permanent residency in Canada.',
        turkishMeaning:
          '"Suggest, recommend, propose" gibi fiillerden sonra "that + ozne + yalin fiil" kullanilir (-s veya gecmis zaman eki eklenmez).',
        clbLevel: 8,
        category: 'Formal Grammar',
        difficulty: 'basic',
        celpipContext:
          'The subjunctive after "suggest" and "recommend" is commonly tested in CELPIP Writing Task 1 when summarizing advice or recommendations.',
        commonMistake:
          'Adding "-s" to the verb: "I suggest that he applies" instead of "I suggest that he apply."',
        turkishExplanation:
          'Turkcede "-mesini onermek/tavsiye etmek" kalibina karsilik gelir: "Doktor bir hafta izin almasini tavsiye etti." Ingilizce subjunctive\'de fiil her zaman yalin haldedir — ucuncu tekil sahista bile "-s" eklenmez.',
      },
      {
        id: 'grammar-subjunctive-2',
        rule: 'It is important / essential / necessary + that + base form',
        explanation:
          'After expressions like "it is important that," "it is essential that," or "it is necessary that," use the base form of the verb.',
        example:
          'It is essential that every employee complete the safety training. / It is important that the report be submitted on time to the Ottawa office.',
        turkishMeaning:
          '"It is important/essential/necessary that" ifadelerinden sonra fiilin yalin hali kullanilir.',
        clbLevel: 8,
        category: 'Formal Grammar',
        difficulty: 'intermediate',
        celpipContext:
          'These structures appear in CELPIP Reading formal passages and are useful in Writing Task 2 for expressing necessity in a formal tone.',
        commonMistake:
          'Using "is" instead of "be": "It is important that the report is submitted" instead of "...that the report be submitted."',
      },
      {
        id: 'grammar-subjunctive-3',
        rule: 'If I were (subjunctive "were")',
        explanation:
          'In formal English and in conditionals, use "were" (not "was") for all subjects after "if" to express unreal situations.',
        example:
          'If I were the project manager at the Toronto office, I would restructure the team. / If she were here, she would know what to do.',
        turkishMeaning:
          'Resmi Ingilizce\'de ve kosullu cumlelerde gercek olmayan durumlar icin tum oznelerle "were" kullanilir ("was" degil).',
        clbLevel: 8,
        category: 'Formal Grammar',
        difficulty: 'basic',
        celpipContext:
          'The subjunctive "were" is expected in CELPIP Writing and Speaking when using second conditionals. Using "was" may be penalized in formal writing.',
        commonMistake:
          'Using "was" instead of "were": "If I was the manager" is informal. Use "If I were the manager" in CELPIP.',
      },
      {
        id: 'grammar-subjunctive-4',
        rule: 'Demand / Insist / Request + that + base form',
        explanation:
          'Verbs expressing a demand or strong wish (demand, insist, request, require) are followed by "that + subject + base form."',
        example:
          'The union demanded that management provide better working conditions. / The policy requires that each applicant submit two references.',
        turkishMeaning:
          'Talep veya guclu istek bildiren fiillerden (demand, insist, request, require) sonra "that + ozne + yalin fiil" gelir.',
        clbLevel: 8,
        category: 'Formal Grammar',
        difficulty: 'intermediate',
        celpipContext:
          'These formal demand structures appear in CELPIP Reading passages about policies, regulations, and institutional requirements.',
        commonMistake:
          'Using "should" or conjugated forms: "demanded that management should provide" or "demanded that management provides" instead of "demanded that management provide."',
        turkishExplanation:
          'Turkcede "talep etmek" veya "israr etmek" fiillerinden sonra "-mesini" kalibina karsilik gelir: "Yonetimin daha iyi calisma kosullari saglamasini talep etti." Ingilizce subjunctive formda fiil yalin kalir.',
      },
      {
        id: 'grammar-subjunctive-5',
        rule: 'As if / As though (unreal comparison)',
        explanation:
          '"As if" and "As though" describe something that is not true or not likely. Use past tense for present unreal and past perfect for past unreal.',
        example:
          'He talks as if he were the boss at the Vancouver branch. / She looked as though she had seen a ghost.',
        turkishMeaning:
          '"As if / As though" gercek olmayan karsilastirmalar icin kullanilir. Simdiki gercek disi icin gecmis, gecmis gercek disi icin past perfect.',
        clbLevel: 8,
        category: 'Formal Grammar',
        difficulty: 'intermediate',
        celpipContext:
          'Used in CELPIP Speaking to describe impressions and appearances. It adds sophistication to your descriptions in both Speaking and Writing.',
        commonMistake:
          'Using present tense for unreal comparisons: "He talks as if he is the boss" instead of "He talks as if he were the boss."',
      },
      {
        id: 'grammar-subjunctive-6',
        rule: 'Lest (formal: to prevent something)',
        explanation:
          '"Lest" is a very formal conjunction meaning "for fear that" or "in order to prevent." It is followed by the base form of the verb or "should + base form."',
        example:
          'The government introduced strict regulations lest the housing situation in Toronto worsen. / She whispered lest she disturb the sleeping child.',
        turkishMeaning:
          '"Lest" cok resmi bir baglactir, "korkusuyla / olmamasi icin" anlamina gelir. Ardindan yalin fiil veya "should + fiil" gelir.',
        clbLevel: 8,
        category: 'Formal Grammar',
        difficulty: 'advanced',
        celpipContext:
          'While rarely used in everyday speech, "lest" may appear in CELPIP Reading academic passages. Knowing it helps with comprehension of formal texts.',
        commonMistake:
          'Using "lest" with a conjugated verb: "lest the situation worsens" instead of "lest the situation worsen."',
        turkishExplanation:
          'Turkcede "...olmamasi icin" veya "...korkusuyla" kalibina karsilik gelir: "Durum kotulesmesin diye kati kurallar cikarildi." "Lest" cok resmi ve edebi bir kullanim olup gunluk konusmada nadir gorulur.',
      },
      {
        id: 'grammar-subjunctive-7',
        rule: 'It\'s high time + past tense',
        explanation:
          '"It\'s high time" (or "it\'s about time") means something should have been done already. It is followed by the past tense to express urgency.',
        example:
          'It\'s high time the city of Toronto invested in affordable housing. / It\'s about time we addressed the issue of workplace diversity in Canada.',
        turkishMeaning:
          '"It\'s high time" bir seyin coktan yapilmis olmasi gerektigini ifade eder. Aciliyet icin gecmis zaman ile kullanilir.',
        clbLevel: 8,
        category: 'Formal Grammar',
        difficulty: 'intermediate',
        celpipContext:
          'Useful in CELPIP Speaking and Writing when expressing urgency about a social issue. It shows advanced grammar and strong opinion expression.',
        commonMistake:
          'Using present tense: "It\'s high time the city invests" instead of "It\'s high time the city invested."',
      },
      {
        id: 'grammar-subjunctive-8',
        rule: 'Would rather + base form',
        explanation:
          '"Would rather" expresses a preference. It is followed by the base form when talking about your own preference, or past tense when talking about someone else\'s action.',
        example:
          'I would rather work from home on Fridays. / I would rather you didn\'t mention it to the manager at the Calgary office.',
        turkishMeaning:
          '"Would rather" tercih ifade eder. Kendi tercihiniz icin yalin fiil, baskasinin eylemi icin gecmis zaman kullanilir.',
        clbLevel: 8,
        category: 'Formal Grammar',
        difficulty: 'basic',
        celpipContext:
          'Expressing preferences with "would rather" is useful in CELPIP Speaking Tasks 4-5 where you give opinions and make choices.',
        commonMistake:
          'Using infinitive: "I would rather to work" instead of "I would rather work." Also, using present tense for others: "I would rather you don\'t" instead of "I would rather you didn\'t."',
        turkishExplanation:
          'Turkcede "tercih ederim" veya "...masini tercih ederim" kalibina karsilik gelir. Kendi icin: "Evden calismak isterim." Baskasi icin: "Bahsetmemeni tercih ederim." Ingilizce baskasi icin gecmis zaman kullanilir.',
      },
      {
        id: 'grammar-subjunctive-9',
        rule: 'Formal inversions: Not only...but, Hardly...when',
        explanation:
          'In formal writing, certain negative or restrictive expressions at the beginning of a sentence trigger inversion (auxiliary before subject). Common ones: "Not only," "Hardly," "Seldom," "Never."',
        example:
          'Not only did the company expand in Canada, but it also doubled its profits. / Hardly had we arrived at the conference in Montreal when the keynote started.',
        turkishMeaning:
          'Resmi yazida bazi olumsuz ifadeler cumle basinda yer aldiginda devrik cumle yapisi olusur (yardimci fiil ozneden once gelir).',
        clbLevel: 8,
        category: 'Formal Grammar',
        difficulty: 'advanced',
        celpipContext:
          'Formal inversions demonstrate advanced grammar in CELPIP Writing Task 2. They are also found in Reading passages and can help with comprehension.',
        commonMistake:
          'Forgetting to invert: "Not only the company expanded..." instead of "Not only did the company expand..."',
        turkishExplanation:
          'Turkcede dogrudan karsiligi yoktur cunku Turkce cumle yapisi zaten esnektir. Ingilizce devrik cumle yapisi (inversion) resmi ve vurgulu bir anlatim saglar. Yardimci fiil ozneden once gelir: "Not only did..." seklinde.',
      },
      {
        id: 'grammar-subjunctive-10',
        rule: 'Cleft sentences: It is...that / What...is',
        explanation:
          'Cleft sentences restructure a simple sentence to emphasize one part of it. "It is/was...that" and "What...is/was" are common patterns.',
        example:
          'It was the lack of funding that caused the project to fail. / What we need is better public transit in rural areas of Canada.',
        turkishMeaning:
          'Yarik cumleler, cumlenin bir bolumunu vurgulamak icin yeniden yapilandirir. "It is...that" ve "What...is" yaygin kaliplardir.',
        clbLevel: 8,
        category: 'Formal Grammar',
        difficulty: 'advanced',
        celpipContext:
          'Cleft sentences are a powerful tool in CELPIP Writing for emphasizing key points. They show sophisticated control over sentence structure.',
        commonMistake:
          'Using "what" with a noun directly: "What is the problem is funding" instead of "What the problem is, is funding" or better: "The problem is funding."',
      },
      {
        id: 'grammar-subjunctive-11',
        rule: 'Passive subjunctive: It is requested that...be',
        explanation:
          'In formal passive subjunctive constructions, use "be" (not "is" or "are") after "that." This is common in official documents, policies, and formal requests.',
        example:
          'It is requested that all documents be submitted before the deadline. / It was recommended that the proposal be reviewed by the committee in Ottawa.',
        turkishMeaning:
          'Resmi edilgen subjunctive yapilarda "that" dan sonra "be" kullanilir ("is" veya "are" degil). Resmi belgelerde ve politikalarda yaygindir.',
        clbLevel: 8,
        category: 'Formal Grammar',
        difficulty: 'advanced',
        celpipContext:
          'Passive subjunctive structures appear in CELPIP Reading passages about formal policies and official communications. Recognizing them aids comprehension.',
        commonMistake:
          'Using "is" instead of "be": "It is requested that all documents are submitted" instead of "...that all documents be submitted."',
        turkishExplanation:
          'Turkcede "-mesi istenmektedir" veya "-mesi talep edilmektedir" kalibina karsilik gelir: "Tum belgelerin son tarihe kadar sunulmasi istenmektedir." Ingilizce "be" fiili burada her zaman yalin formda kalir.',
      },
      {
        id: 'grammar-subjunctive-12',
        rule: 'Had I known... (conditional inversion without "if")',
        explanation:
          'In formal English, "if" can be omitted from conditionals by inverting the subject and auxiliary verb. "If I had known" becomes "Had I known." This works with second and third conditionals.',
        example:
          'Had I known about the job opening in Toronto, I would have applied immediately. / Were she to accept the offer, the team would benefit greatly.',
        turkishMeaning:
          'Resmi Ingilizce\'de "if" atilarak ozne ve yardimci fiil yer degistirebilir. "If I had known" → "Had I known" olur.',
        clbLevel: 8,
        category: 'Formal Grammar',
        difficulty: 'advanced',
        celpipContext:
          'Conditional inversion is a mark of advanced writing in CELPIP. It appears in Reading passages and can elevate your Writing Task 2 score when used correctly.',
        commonMistake:
          'Using this inversion with first conditionals: "Do I have time, I will help" is incorrect. Inversion only works with second and third conditionals.',
        turkishExplanation:
          'Turkcede dogrudan karsiligi yoktur. Bu yapi Ingilizce resmi yazimanin bir ozelligidir. "If" kelimesi atilarak devrik yapi olusturulur: "Had I known..." = "Bilseydim..."',
      },
      {
        id: 'grammar-subjunctive-13',
        rule: 'So + adjective + that (result clauses)',
        explanation:
          '"So + adjective + that" introduces a result clause showing the consequence of something being extreme. In formal writing, inversion can be used: "So great was the demand that..."',
        example:
          'The demand for housing in Vancouver was so high that prices doubled in five years. / So impressed was the committee that they approved the proposal immediately.',
        turkishMeaning:
          '"So + sifat + that" bir seyin asiri olmasinin sonucunu gosteren bir sonuc cumlecigi olusturur.',
        clbLevel: 8,
        category: 'Formal Grammar',
        difficulty: 'intermediate',
        celpipContext:
          'Result clauses with "so...that" help express cause and effect in CELPIP Writing. The inverted form adds formality and emphasis.',
        commonMistake:
          'Confusing "so" with "such": "The demand was such high that..." instead of "The demand was so high that..." Use "so" before adjectives and "such" before nouns.',
      },
      {
        id: 'grammar-subjunctive-14',
        rule: 'Formal use of "shall" for proposals and regulations',
        explanation:
          '"Shall" is used in formal documents, legal writing, and official proposals to indicate obligation or future intention. It is more formal than "will."',
        example:
          'All residents shall comply with the building\'s noise regulations. / The committee shall meet quarterly to review progress on the community project in Edmonton.',
        turkishMeaning:
          '"Shall" resmi belgelerde, yasal yazilarda ve resmi onerilerde zorunluluk veya gelecek niyet belirtmek icin kullanilir. "Will" dan daha resmidir.',
        clbLevel: 8,
        category: 'Formal Grammar',
        difficulty: 'basic',
        celpipContext:
          'Understanding "shall" is important for CELPIP Reading where formal documents, regulations, and policy texts may use this modal.',
        commonMistake:
          'Using "shall" in casual speech or informal writing where "will" is more appropriate. "Shall" is reserved for formal or legal contexts.',
      },
      {
        id: 'grammar-subjunctive-15',
        rule: 'Nominalisation: turning verbs into nouns for formal style',
        explanation:
          'Nominalisation converts a verb or adjective into a noun form to create a more formal, academic tone. For example, "decide" becomes "decision," "improve" becomes "improvement."',
        example:
          'The improvement of public services in Canada requires significant investment. (Instead of: "Improving public services requires...") / The government\'s decision to increase immigration levels was announced in Ottawa.',
        turkishMeaning:
          'Adlastirma, fiil veya sifati isim formuna donusturerek daha resmi ve akademik bir ton olusturur. "Decide" → "decision," "improve" → "improvement."',
        clbLevel: 8,
        category: 'Formal Grammar',
        difficulty: 'basic',
        celpipContext:
          'Nominalisation is a key feature of formal CELPIP Writing. Using noun forms instead of verb forms creates a more academic and professional tone that scores higher.',
        commonMistake:
          'Overusing nominalisation, which can make writing too dense and hard to read. Balance nominalized forms with active verbs for clarity.',
        turkishExplanation:
          'Turkcede de benzer bir islem vardir: "karar vermek" → "karar," "iyilestirmek" → "iyilestirme." Ingilizce resmi yazida fiil yerine isim formu kullanmak metni daha akademik ve nesnel kilar.',
      },
    ],
    commonMistakes: [
      'Adding "should" or "must" instead of using the base form: "I suggest that she should go" instead of "I suggest that she go." Turkish learners default to modal verbs because the subjunctive does not exist in Turkish.',
      'Using the indicative form instead of the subjunctive: "It is important that he is on time" instead of "It is important that he be on time."',
      'Avoiding the subjunctive entirely and rephrasing with infinitives: "I recommend him to apply" instead of "I recommend that he apply." While understood, the subjunctive form scores higher on CELPIP.',
    ],
    writingTip:
      'In CELPIP Writing Task 1 (email), use subjunctive structures when making formal requests or recommendations. For example: "I request that the maintenance team inspect the heating system before winter." This elevates your writing to CLB 8 level and impresses examiners.',
    speakingTip:
      'In CELPIP Speaking Tasks 3-4 (giving advice or making suggestions), use formal subjunctive patterns to demonstrate advanced grammar control. For example: "I would suggest that the city invest more in public libraries." Even one well-placed subjunctive can boost your grammar score.',
    celpipExample:
      'The tenants association recommends that the building management replace the outdated fire alarm system before the end of this quarter.',
  },
];
