import type { GrammarTopic } from './types';

export const grammarTopicsCLB4_5: GrammarTopic[] = [
  // ─── Topic 1: Simple Present Tense ───────────────────────────────────
  {
    id: 'grammar-simple-present',
    title: 'Simple Present Tense',
    description:
      'Learn how to talk about habits, routines, facts, and schedules using the simple present tense.',
    clbLevel: 4,
    category: 'Tenses',
    icon: '🔄',
    words: [
      {
        id: 'grammar-simple-present-1',
        rule: 'Subject + verb (base form)',
        explanation:
          'Use the base form of the verb for I, you, we, they in simple present.',
        example: 'I work at a hospital in Toronto every day.',
        turkishMeaning:
          'Genis zaman: I, you, we, they ile fiilin yalin hali kullanilir.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'basic',
        celpipContext:
          'Common in CELPIP Listening Part 1 where speakers describe their daily routines and work schedules.',
        commonMistake:
          'Students sometimes add -s even with I/you/we/they: "I works" instead of "I work".',
        turkishExplanation:
          'Turkcede genis zaman eki -ir/-ar/-er ile yapilir. Ingilizce\'de I, you, we, they ile fiil degismez, yalin haliyle kullanilir.',
      },
      {
        id: 'grammar-simple-present-2',
        rule: 'Subject + verb + -s/-es (third person)',
        explanation:
          'Add -s or -es to the verb when the subject is he, she, or it.',
        example: 'She takes the bus to work in Toronto.',
        turkishMeaning:
          'He, she, it ile fiile -s veya -es eklenir. Ornegin: He works, she watches.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'basic',
        celpipContext:
          'Frequently tested in CELPIP Reading Part 2 where you must identify correct verb forms in short texts about other people.',
        commonMistake:
          'Students often forget the -s ending for third person: "She work" instead of "She works".',
        turkishExplanation:
          'Turkcede ucuncu tekil kisi icin ayri bir ek yoktur. Ingilizce\'de he/she/it ile fiilin sonuna -s/-es eklenmesi zorunludur.',
      },
      {
        id: 'grammar-simple-present-3',
        rule: 'Subject + do/does + not + verb (base form)',
        explanation:
          'Use do not (don\'t) or does not (doesn\'t) to make negative sentences.',
        example: 'He doesn\'t drive to the office in Vancouver.',
        turkishMeaning:
          'Olumsuz cumle: I/you/we/they icin don\'t, he/she/it icin doesn\'t kullanilir.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'basic',
        celpipContext:
          'Appears in CELPIP Writing Task 1 where you need to describe what someone does or does not do regularly.',
        commonMistake:
          'Students often write "He doesn\'t works" instead of "He doesn\'t work". After doesn\'t, use the base form.',
        turkishExplanation:
          'Turkcede olumsuzluk -maz/-mez ekiyle yapilir (calis-maz). Ingilizce\'de don\'t/doesn\'t yardimci fiili kullanilir ve ana fiil yalin kalir.',
      },
      {
        id: 'grammar-simple-present-4',
        rule: 'Do/Does + subject + verb (base form)?',
        explanation:
          'Use do or does at the beginning to form yes/no questions.',
        example: 'Do you speak French at home?',
        turkishMeaning:
          'Soru cumleleri: I/you/we/they icin Do, he/she/it icin Does ile baslar.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'basic',
        celpipContext:
          'Essential for CELPIP Speaking Task 4 where you need to ask questions to get information about a situation.',
        commonMistake:
          'Students sometimes say "Does she speaks?" instead of "Does she speak?" — after does, use the base form.',
      },
      {
        id: 'grammar-simple-present-5',
        rule: 'Adverbs of frequency + simple present',
        explanation:
          'Use always, usually, often, sometimes, rarely, never to show how often something happens.',
        example: 'I usually walk to the grocery store on weekends.',
        turkishMeaning:
          'Siklik zarflari (always, usually, sometimes, never) fiilin onune gelir.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Listening Part 3 often features conversations about habits using frequency adverbs like always, sometimes, and never.',
        commonMistake:
          'Students place the adverb in the wrong position: "I go always" instead of "I always go". The adverb goes before the main verb.',
        turkishExplanation:
          'Turkcede siklik zarflari (her zaman, genellikle, bazen, hic) cumlenin farkli yerlerinde olabilir. Ingilizce\'de ise genellikle fiilden once gelir: I always go.',
      },
      {
        id: 'grammar-simple-present-6',
        rule: 'Simple present for daily routines',
        explanation:
          'Use simple present to describe things you do regularly every day or week.',
        example: 'I wake up at 6 a.m. and take the subway to work in Toronto.',
        turkishMeaning:
          'Gunluk rutinler icin genis zaman kullanilir: Her gun tekrarlanan eylemler.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Speaking Task 1 often asks you to describe your daily routine or a typical day, requiring consistent use of simple present.',
        commonMistake:
          'Students mix present and past tense when describing routines: "I wake up at 6 and then I walked to work."',
      },
      {
        id: 'grammar-simple-present-7',
        rule: 'Simple present for habits',
        explanation:
          'Use simple present to talk about habits and repeated actions.',
        example: 'My neighbour always shovels the driveway after a snowstorm.',
        turkishMeaning:
          'Aliskanliklar icin genis zaman kullanilir: Duzenli olarak yapilan eylemler.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'intermediate',
        celpipContext:
          'In CELPIP Listening, speakers often describe their habits in casual conversations, such as exercise routines or weekend activities.',
        commonMistake:
          'Students use present continuous for habits: "I am shovelling the driveway every winter" instead of "I shovel the driveway every winter."',
      },
      {
        id: 'grammar-simple-present-8',
        rule: 'Simple present for general facts',
        explanation:
          'Use simple present to state facts and general truths that are always true.',
        example: 'Canada has ten provinces and three territories.',
        turkishMeaning:
          'Genel gercekler ve degismeyen bilgiler icin genis zaman kullanilir.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Reading passages often contain factual statements about Canadian geography, culture, or government written in simple present.',
        commonMistake:
          'Students sometimes use "is having" instead of "has" for permanent facts: "Canada is having ten provinces" is incorrect.',
      },
      {
        id: 'grammar-simple-present-9',
        rule: 'Simple present for schedules and timetables',
        explanation:
          'Use simple present for fixed schedules, timetables, and programs.',
        example: 'The train to Vancouver leaves at 8:15 every morning.',
        turkishMeaning:
          'Tarifeler ve sabit programlar icin genis zaman kullanilir.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Listening Part 1 may include announcements about schedules (buses, trains, office hours) using simple present tense.',
        commonMistake:
          'Students use "will leave" for fixed schedules instead of simple present: "The bus will leave at 9" should be "The bus leaves at 9."',
      },
      {
        id: 'grammar-simple-present-10',
        rule: 'Stative verbs in simple present',
        explanation:
          'Stative verbs (know, believe, like, want, need) describe states, not actions. They are usually used in simple present, not continuous.',
        example: 'I need a new winter coat for the cold season in Canada.',
        turkishMeaning:
          'Durum fiilleri (know, like, want, need) genellikle genis zamanda kullanilir, surekli zamanda kullanilmaz.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Writing and Speaking tasks require correct use of stative verbs when expressing opinions and preferences.',
        commonMistake:
          'Students often say "I am knowing" or "I am wanting" instead of "I know" or "I want". Stative verbs are not used in continuous form.',
        turkishExplanation:
          'Turkcede durum fiilleri ile hareket fiilleri arasinda boyle bir ayrim yoktur. Ingilizce\'de know, like, want, believe gibi fiiller -ing takisi almaz.',
      },
      {
        id: 'grammar-simple-present-11',
        rule: 'Wh-questions in simple present',
        explanation:
          'Form Wh-questions with: Wh-word + do/does + subject + verb (base form). Use where, when, why, how, what, who.',
        example: 'Where do you usually buy groceries in your neighbourhood?',
        turkishMeaning:
          'Soru kelimesiyle soru: Where/When/Why/How + do/does + ozne + fiil (yalin hali)?',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Speaking Task 4 requires you to ask Wh-questions to gather information, making this structure essential for a high score.',
        commonMistake:
          'Students often forget "do/does" in Wh-questions: "Where you live?" instead of "Where do you live?"',
        turkishExplanation:
          'Turkcede soru kelimesi cumlenin basina gelir ve fiil soru ekiyle biter (Nerede oturuyorsun?). Ingilizce\'de soru kelimesinden sonra do/does yardimci fiili zorunludur.',
      },
      {
        id: 'grammar-simple-present-12',
        rule: 'Simple present with time clauses (when, before, after)',
        explanation:
          'Use simple present (not future tense) in time clauses with when, before, after, as soon as, and until, even when talking about the future.',
        example: 'I will call you when I arrive at the Toronto airport.',
        turkishMeaning:
          'Zaman cumleleciklerinde (when, before, after) gelecek zamanda bile genis zaman kullanilir.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Writing Task 2 often requires describing plans, where time clauses with simple present are needed even for future events.',
        commonMistake:
          'Students often say "when I will arrive" instead of "when I arrive". In time clauses, do not use will.',
        turkishExplanation:
          'Turkcede "geldigimde" ifadesinde fiil gelecek zaman almaz, benzer sekilde Ingilizce\'de when/before/after ile basayan yan cumlelerde will kullanilmaz.',
      },
      {
        id: 'grammar-simple-present-13',
        rule: 'Simple present for instructions and directions',
        explanation:
          'Use simple present (often imperative form) when giving step-by-step instructions or directions.',
        example: 'You go straight on Yonge Street, and then you turn left at the second traffic light.',
        turkishMeaning:
          'Talimat ve yol tarifi verirken genis zaman veya emir kipi kullanilir.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Speaking Task 3 may ask you to give directions or explain a process, requiring fluent use of simple present for instructions.',
        commonMistake:
          'Students sometimes use future tense for directions: "You will turn left" instead of "You turn left" or "Turn left."',
      },
      {
        id: 'grammar-simple-present-14',
        rule: 'Spelling rules: verbs ending in -y',
        explanation:
          'For verbs ending in consonant + y, change y to i and add -es in third person (study -> studies, carry -> carries). If the letter before y is a vowel, just add -s (play -> plays).',
        example: 'She studies at a college in Montreal and carries her books on the bus.',
        turkishMeaning:
          'Unsuz + y ile biten fiillerde y, i\'ye donusur ve -es eklenir: study -> studies. Unlu + y ise sadece -s: play -> plays.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'advanced',
        celpipContext:
          'Correct spelling of third-person verbs is important in CELPIP Writing tasks where errors in verb forms reduce your score.',
        commonMistake:
          'Students write "studys" instead of "studies" or "plaies" instead of "plays". Remember: consonant + y -> ies; vowel + y -> ys.',
        turkishExplanation:
          'Turkcede boyle bir yazim kurali yoktur. Ingilizce\'de y harfinden onceki harf onemlidir: unsuz + y ise y kalkar, ies eklenir; unlu + y ise sadece s eklenir.',
      },
      {
        id: 'grammar-simple-present-15',
        rule: 'Simple present with zero conditional',
        explanation:
          'Use simple present in both clauses of the zero conditional to express general truths: If + simple present, simple present.',
        example: 'If it snows heavily in Ottawa, the schools close early.',
        turkishMeaning:
          'Sifir kosul cumlesinde her iki cumlecik de genis zamandadir: If + genis zaman, genis zaman.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Reading comprehension passages about rules, policies, and natural phenomena often use zero conditional structures.',
        commonMistake:
          'Students use "will" in zero conditional: "If it snows, the schools will close early" is first conditional, not zero conditional for general facts.',
        turkishExplanation:
          'Turkcede genel gercekleri ifade eden sart cumlelerinde her iki cumlecik de genis zamandadir: "Kar yagarsa okullar erken kapanir." Ingilizce\'de de ayni mantik gecerlidir.',
      },
    ],
    commonMistakes: [
      'Turkish has no third-person -s marker, so learners consistently drop it: "She work" instead of "She works".',
      'Confusing simple present with present continuous for habitual actions: "I am going to work every day" instead of "I go to work every day".',
      'Omitting the auxiliary "do/does" in questions and negatives: "You like coffee?" instead of "Do you like coffee?"',
      'Placing adverbs of frequency in the wrong position due to Turkish word order: "I go always" instead of "I always go".',
    ],
    writingTip:
      'In CELPIP Writing Task 1 (email), use simple present to describe ongoing situations: "I live near the park and I walk there every morning." In Task 2 (survey response), use it for stating opinions and general facts: "Public transit reduces pollution and saves money."',
    speakingTip:
      'In CELPIP Speaking Task 1 (giving advice), use simple present to describe current habits and routines clearly: "I usually take the bus to work. It stops right in front of my building." Keep your verb forms consistent throughout your response.',
    celpipExample:
      'My neighbour plays loud music every night and it disturbs everyone in the building, so I believe the strata council needs to address this issue.',
  },

  // ─── Topic 2: Simple Past Tense ──────────────────────────────────────
  {
    id: 'grammar-simple-past',
    title: 'Simple Past Tense',
    description:
      'Learn how to talk about completed actions and events in the past.',
    clbLevel: 4,
    category: 'Tenses',
    icon: '⏪',
    words: [
      {
        id: 'grammar-simple-past-1',
        rule: 'Subject + verb + -ed (regular verbs)',
        explanation:
          'Add -ed to the base form of regular verbs to make the simple past.',
        example: 'I walked to the community centre yesterday.',
        turkishMeaning:
          'Gecmis zaman: Duzenli fiillere -ed eklenir. Ornegin: walk -> walked.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Writing Task 1 frequently requires describing past events or experiences using regular past tense verbs.',
        commonMistake:
          'Students forget to add -ed: "I walk to the store yesterday" instead of "I walked to the store yesterday."',
      },
      {
        id: 'grammar-simple-past-2',
        rule: 'Irregular past tense forms',
        explanation:
          'Many common verbs have irregular past forms that must be memorized (go-went, have-had, see-saw).',
        example: 'We went to Niagara Falls last summer.',
        turkishMeaning:
          'Duzensiz fiillerin gecmis zaman halleri ezberlenmeli: go-went, see-saw, have-had.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'basic',
        celpipContext:
          'Irregular past tense verbs appear constantly in CELPIP Listening dialogues about past experiences and personal stories.',
        commonMistake:
          'Students regularize irregular verbs: "I goed" instead of "I went" or "She writed" instead of "She wrote."',
        turkishExplanation:
          'Turkcede fiiller kuralli bir sekilde cekimlenir, ancak Ingilizce\'de bircok sik kullanilan fiil duzensizdir ve gecmis zaman hali ezbere bilinmelidir.',
      },
      {
        id: 'grammar-simple-past-3',
        rule: 'Was/Were for past states',
        explanation:
          'Use was (I/he/she/it) and were (you/we/they) as the past tense of be.',
        example: 'The weather was very cold last January in Winnipeg.',
        turkishMeaning:
          'Be fiilinin gecmis zamani: I/he/she/it icin was, you/we/they icin were kullanilir.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Speaking tasks often require describing past situations using was/were to set the scene.',
        commonMistake:
          'Students confuse was and were: "They was happy" instead of "They were happy."',
      },
      {
        id: 'grammar-simple-past-4',
        rule: 'Did/Didn\'t + verb (base form)',
        explanation:
          'Use did for questions and didn\'t for negatives. The main verb stays in base form.',
        example: 'I didn\'t attend the meeting at the Toronto office yesterday.',
        turkishMeaning:
          'Gecmis zamanda olumsuz: didn\'t + fiilin yalin hali. Fiil degismez.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Listening Part 2 often features negative statements about past events that test your understanding of what did not happen.',
        commonMistake:
          'Students use the past form after didn\'t: "I didn\'t went" instead of "I didn\'t go." After didn\'t, always use the base form.',
        turkishExplanation:
          'Turkcede olumsuz gecmis zaman tek bir fiil uzerinde yapilir (-madim/-medim). Ingilizce\'de ise didn\'t yardimci fiili kullanilir ve ana fiil yalin kalir.',
      },
      {
        id: 'grammar-simple-past-5',
        rule: 'Ago + simple past',
        explanation:
          'Use ago after a time expression to show how far in the past something happened.',
        example: 'She moved to Calgary three years ago.',
        turkishMeaning:
          'Ago: "once" anlaminda zaman ifadesinden sonra gelir. Ornegin: two days ago.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'intermediate',
        celpipContext:
          'In CELPIP Speaking Task 7, you often describe when events happened, making "ago" a useful time marker for past events.',
        commonMistake:
          'Students place "ago" incorrectly: "Ago three years" instead of "three years ago." Ago always comes after the time expression.',
      },
      {
        id: 'grammar-simple-past-6',
        rule: 'Past time expressions (yesterday, last, in + year)',
        explanation:
          'Common time markers for simple past include yesterday, last week/month/year, and in + past year.',
        example: 'I started my English classes last September in Vancouver.',
        turkishMeaning:
          'Gecmis zaman belirtecleri: yesterday, last week, last year, in 2020 gibi ifadeler.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Reading passages about biographical information or historical events use these time expressions extensively.',
        commonMistake:
          'Students mix time expressions with wrong tenses: "I start my classes last week" instead of "I started my classes last week."',
      },
      {
        id: 'grammar-simple-past-7',
        rule: 'Did + subject + verb (base form)?',
        explanation:
          'Form past tense questions with did at the beginning. The main verb stays in base form.',
        example: 'Did you finish the report before the deadline?',
        turkishMeaning:
          'Gecmis zamanda soru: Did + ozne + fiilin yalin hali? Ornegin: Did you go?',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Speaking Task 4 often requires asking past tense questions to understand what happened in a scenario.',
        commonMistake:
          'Students say "Did you went?" instead of "Did you go?" After did, always use the base form of the verb.',
      },
      {
        id: 'grammar-simple-past-8',
        rule: 'Subject + did not (didn\'t) + verb (base form)',
        explanation:
          'The negative form uses didn\'t followed by the base form of the verb, not the past form.',
        example: 'They didn\'t receive the package from the post office in Ottawa.',
        turkishMeaning:
          'Olumsuz gecmis zaman: didn\'t + yalin fiil. Yanlis: didn\'t went. Dogru: didn\'t go.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'intermediate',
        celpipContext:
          'In CELPIP Writing, correctly forming negative past tense sentences is important when explaining problems or complaints.',
        commonMistake:
          'Students double-mark the past: "She didn\'t called" instead of "She didn\'t call."',
      },
      {
        id: 'grammar-simple-past-9',
        rule: 'Simple past for narrating events',
        explanation:
          'Use simple past to tell a story or describe a sequence of events that happened in the past.',
        example:
          'I arrived at the airport, checked in, and boarded the plane to Halifax.',
        turkishMeaning:
          'Gecmiste yasanan olaylari sirayla anlatmak icin gecmis zaman kullanilir.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Speaking Tasks 5 and 7 require narrating past events in sequence, which demands consistent use of simple past.',
        commonMistake:
          'Students switch between past and present tense while narrating: "I arrived at the airport and then I check in." Keep all verbs in past tense.',
      },
      {
        id: 'grammar-simple-past-10',
        rule: 'Past time markers in context',
        explanation:
          'When talking about the past, use specific time markers to make your meaning clear.',
        example:
          'On Monday morning, I had a job interview at a downtown office in Toronto.',
        turkishMeaning:
          'Gecmis zaman belirtecleri cumlenin basinda veya sonunda kullanilarak zaman belirtilir.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Writing Task 1 scores higher when time markers are used clearly to organize the sequence of past events.',
        commonMistake:
          'Students omit time markers, making it unclear when events happened. Always include specific time references in past narratives.',
      },
      {
        id: 'grammar-simple-past-11',
        rule: 'Spelling rules for regular -ed verbs',
        explanation:
          'When adding -ed: double the final consonant if the verb is one syllable with CVC pattern (stop -> stopped). If the verb ends in -e, just add -d (arrive -> arrived). If it ends in consonant + y, change y to i and add -ed (study -> studied).',
        example: 'She stopped at the traffic light, arrived at the office, and studied her notes before the meeting.',
        turkishMeaning:
          'Yazim kurallari: CVC kalibinda son harf ikilesir (stopped). -e ile bitenlere -d eklenir (arrived). Unsuz + y ise y kalkar -ied eklenir (studied).',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'advanced',
        celpipContext:
          'Correct spelling of past tense verbs is essential in CELPIP Writing tasks where spelling errors are penalized.',
        commonMistake:
          'Students write "stoped" instead of "stopped" or "studyed" instead of "studied." Pay attention to doubling rules and y-to-i changes.',
        turkishExplanation:
          'Turkcede gecmis zaman ekleri (-di/-ti) her fiilde ayni sekilde eklenir. Ingilizce\'de ise fiilin son harfine gore yazim degisir, bu nedenle kurallari ogrenmek onemlidir.',
      },
      {
        id: 'grammar-simple-past-12',
        rule: 'Pronunciation of -ed endings',
        explanation:
          'The -ed ending has three pronunciations: /t/ after voiceless sounds (walked, stopped), /d/ after voiced sounds (called, arrived), and /ɪd/ after t and d sounds (wanted, decided).',
        example: 'I walked to the bank, called my friend, and then decided to visit the CN Tower.',
        turkishMeaning:
          'Ed takisinin uc farkli okunusu vardir: /t/ (walked), /d/ (called), /id/ (wanted).',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'advanced',
        celpipContext:
          'Correct pronunciation of -ed endings is critical in CELPIP Speaking to sound natural and be clearly understood by the examiner.',
        commonMistake:
          'Students pronounce every -ed as a separate syllable: "walk-ed" instead of "walkt." Only pronounce -ed as a syllable after t and d sounds.',
        turkishExplanation:
          'Turkcede gecmis zaman eki her zaman ayni sekilde okunur. Ingilizce\'de -ed ekinin okunusu fiilin son sesine gore degisir. Bu kural CELPIP konusma bolumu icin cok onemlidir.',
      },
      {
        id: 'grammar-simple-past-13',
        rule: 'Wh-questions in simple past',
        explanation:
          'Form Wh-questions in past tense with: Wh-word + did + subject + verb (base form)? Exception: Who/What as subject uses past form directly.',
        example: 'Where did you live before you moved to Canada?',
        turkishMeaning:
          'Gecmis zamanda soru kelimeli soru: Where/When/Why + did + ozne + yalin fiil? Who ozne ise: Who called?',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Speaking often requires asking or answering Wh-questions about past experiences, especially in Tasks 4 and 8.',
        commonMistake:
          'Students say "Where did you lived?" instead of "Where did you live?" After did, always use the base form.',
      },
      {
        id: 'grammar-simple-past-14',
        rule: 'Used to + verb for past habits',
        explanation:
          'Use "used to + verb" to describe habits or states that were true in the past but are no longer true now.',
        example: 'I used to live in a small town before I moved to Toronto.',
        turkishMeaning:
          'Used to: Eskiden yapilan ama artik yapilmayan aliskanliklar icin kullanilir.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Speaking Task 7 and Writing Task 2 often ask you to compare past and present situations, making "used to" very useful.',
        commonMistake:
          'Students write "use to" instead of "used to" in positive sentences, or say "I used to lived" instead of "I used to live."',
        turkishExplanation:
          'Turkcede "eskiden yapardim" ifadesi genis zamanin hikayesiyle yapilir (-ardim). Ingilizce\'de "used to + fiil" yapisi buna karsilik gelir ve gecmiste duzenli olan ama artik olmayan durumlar icin kullanilir.',
      },
      {
        id: 'grammar-simple-past-15',
        rule: 'Past tense of "be" in questions and negatives',
        explanation:
          'For "be" in past tense, form questions by inverting: Was/Were + subject? Form negatives with was not (wasn\'t) / were not (weren\'t). No "did" is needed.',
        example: 'Were you at the immigration office yesterday? — No, I wasn\'t there.',
        turkishMeaning:
          'Be fiilinin gecmis zamaninda soru: Was/Were + ozne? Olumsuz: wasn\'t/weren\'t. Did kullanilmaz.',
        clbLevel: 4,
        category: 'Tenses',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Listening Part 2 frequently tests understanding of questions and negatives with was/were in past conversations.',
        commonMistake:
          'Students say "Did you were at the office?" instead of "Were you at the office?" The verb "be" does not use "did" in questions.',
        turkishExplanation:
          'Turkcede "miydi" soru eki her fiille ayni sekilde kullanilir. Ingilizce\'de ise "be" fiili ozeldir: diger fiiller "did" ile soru yaparken, "be" kendi basina soru yapar (Was he...? Were they...?).',
      },
    ],
    commonMistakes: [
      'Applying -ed to all verbs including irregular ones: "I goed to the store" instead of "I went to the store".',
      'Using the past form after "did/didn\'t" instead of the base form: "Did you went?" or "I didn\'t walked" instead of "Did you go?" and "I didn\'t walk".',
      'Mixing past and present tense when narrating a sequence of events: "I arrived at work and then I open my laptop".',
      'Pronouncing every -ed ending as a separate syllable due to Turkish phonology: saying "walk-ed" as two syllables instead of "walkt".',
    ],
    writingTip:
      'In CELPIP Writing Task 1 (email), use simple past to describe a problem that already happened: "Last week, I ordered a product from your website and it arrived damaged." In Task 2, use it for past experiences that support your opinion: "When I lived in a small town, I noticed that people were friendlier."',
    speakingTip:
      'In CELPIP Speaking Task 7 (expressing opinions about a past event), narrate events in chronological order using consistent past tense: "First, I noticed the problem. Then, I called the manager. Finally, they resolved the issue." Practice irregular verb forms until they feel automatic.',
    celpipExample:
      'I moved to Canada two years ago and I attended several English classes before I applied for my current position at the hospital.',
  },

  // ─── Topic 3: Articles (a, an, the) ──────────────────────────────────
  {
    id: 'grammar-articles',
    title: 'Articles (a, an, the)',
    description:
      'Master the use of English articles: when to use a, an, the, or no article.',
    clbLevel: 4,
    category: 'Determiners',
    icon: '📰',
    words: [
      {
        id: 'grammar-articles-1',
        rule: 'A + consonant sound / An + vowel sound',
        explanation:
          'Use "a" before words that start with a consonant sound and "an" before words that start with a vowel sound.',
        example: 'She is a nurse at an Ottawa hospital.',
        turkishMeaning:
          'A: unsuz sesle baslayan kelimelerden once. An: unlu sesle baslayan kelimelerden once.',
        clbLevel: 4,
        category: 'Determiners',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Reading passages frequently use a/an, and choosing the correct one is tested indirectly in fill-in-the-blank style questions.',
        commonMistake:
          'Students say "an university" instead of "a university" because they focus on the letter, not the sound. "University" starts with a /juː/ consonant sound.',
        turkishExplanation:
          'Turkcede artikel (a/an/the) kavrami yoktur. Ingilizce\'de a ve an secimi kelimenin yazilisina degil, sesine baglidir. "Hour" unlu sesiyle baslar (an hour), "university" unsuz sesiyle baslar (a university).',
      },
      {
        id: 'grammar-articles-2',
        rule: 'The + specific noun',
        explanation:
          'Use "the" when both the speaker and listener know which specific thing is being talked about.',
        example: 'The library on Main Street in Vancouver has free computer access.',
        turkishMeaning:
          'The: Hem konusan hem dinleyen belirli bir seyden bahsettiginde kullanilir.',
        clbLevel: 4,
        category: 'Determiners',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Listening and Reading tasks often reference specific places, objects, or people using "the," and understanding this helps identify correct answers.',
        commonMistake:
          'Students omit "the" when referring to something specific: "I went to library" instead of "I went to the library."',
      },
      {
        id: 'grammar-articles-3',
        rule: 'Zero article for general plural/uncountable nouns',
        explanation:
          'Do not use an article when talking about things in general with plural or uncountable nouns.',
        example: 'Coffee is popular in Canadian workplaces.',
        turkishMeaning:
          'Genel anlamda cogul veya sayilamaz isimlerden once artikel kullanilmaz.',
        clbLevel: 4,
        category: 'Determiners',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Writing Task 2 requires expressing general opinions where zero article with plural/uncountable nouns is frequently needed.',
        commonMistake:
          'Students add "the" for general statements: "The coffee is popular" (this means a specific coffee) instead of "Coffee is popular" (in general).',
        turkishExplanation:
          'Turkcede genel anlam icin herhangi bir ek veya kelime gerekmez ("Kahve populerdir"). Ingilizce\'de de genel anlamda artikel kullanilmaz, ancak belirli bir seyden bahsedildiginde "the" eklenir.',
      },
      {
        id: 'grammar-articles-4',
        rule: 'A/An for first mention, the for second mention',
        explanation:
          'Use a/an when mentioning something for the first time, and the when referring to it again.',
        example:
          'I saw a dog in the park. The dog was playing with a ball.',
        turkishMeaning:
          'Ilk kez bahsedildiginde a/an, ikinci kez bahsedildiginde the kullanilir.',
        clbLevel: 4,
        category: 'Determiners',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Reading passages follow this pattern extensively, and understanding first/second mention helps you track references in the text.',
        commonMistake:
          'Students use "the" for first mention: "I saw the dog" when the dog has not been mentioned before.',
      },
      {
        id: 'grammar-articles-5',
        rule: 'The + unique nouns',
        explanation:
          'Use "the" with nouns that are one of a kind (the sun, the government, the internet).',
        example: 'The government announced new immigration policies in Canada.',
        turkishMeaning:
          'Tek olan seyler icin the kullanilir: the sun, the moon, the internet.',
        clbLevel: 4,
        category: 'Determiners',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Reading and Listening tasks about Canadian government, policies, or institutions always use "the" before these unique entities.',
        commonMistake:
          'Students drop "the" before unique nouns: "Government announced" instead of "The government announced."',
      },
      {
        id: 'grammar-articles-6',
        rule: 'No article with plural nouns for general meaning',
        explanation:
          'When talking about a category in general, use plural nouns without an article.',
        example: 'Winters in Canada can be very long and cold.',
        turkishMeaning:
          'Genel bir kategoriden bahsederken cogul isim artikel olmadan kullanilir.',
        clbLevel: 4,
        category: 'Determiners',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Writing often requires making general statements about topics like seasons, culture, or habits without using articles.',
        commonMistake:
          'Students add "the" unnecessarily: "The winters in Canada" for a general statement. Use "the" only when referring to specific winters.',
      },
      {
        id: 'grammar-articles-7',
        rule: 'No article with most proper nouns',
        explanation:
          'Do not use articles with most proper nouns (names of people, cities, countries, languages).',
        example: 'Toronto is the largest city in Ontario.',
        turkishMeaning:
          'Cogu ozel isimde (sehir, ulke, kisi adlari) artikel kullanilmaz.',
        clbLevel: 4,
        category: 'Determiners',
        difficulty: 'basic',
        celpipContext:
          'CELPIP passages about Canadian geography use proper nouns without articles, and adding one would be an error in Writing tasks.',
        commonMistake:
          'Students add "the" before city names: "the Toronto" or "the Canada" instead of "Toronto" and "Canada."',
        turkishExplanation:
          'Turkcede de ozel isimlerden once artikel kullanilmaz (Istanbul, Turkiye). Ancak Ingilizce\'de bazi istisnalar vardir: the United States, the Philippines, the Rocky Mountains gibi.',
      },
      {
        id: 'grammar-articles-8',
        rule: 'A/An + adjective + singular countable noun',
        explanation:
          'When an adjective comes before a singular countable noun, a/an goes before the adjective.',
        example: 'She found an affordable apartment near the transit station in Calgary.',
        turkishMeaning:
          'Sifattan once a/an gelir: a big house, an old building.',
        clbLevel: 4,
        category: 'Determiners',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Writing and Speaking tasks require describing things with adjectives, where proper article placement before adjectives is essential.',
        commonMistake:
          'Students place the article between the adjective and noun: "big a house" instead of "a big house."',
      },
      {
        id: 'grammar-articles-9',
        rule: 'Articles with countable vs uncountable nouns',
        explanation:
          'Use a/an only with singular countable nouns. Uncountable nouns use the or no article.',
        example: 'I need a chair for my desk, and I also need furniture for the living room.',
        turkishMeaning:
          'A/an sadece sayilabilir tekil isimlerle kullanilir. Sayilamaz isimlerde a/an kullanilmaz.',
        clbLevel: 4,
        category: 'Determiners',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Writing tasks penalize incorrect article usage with uncountable nouns, a common error in essay writing.',
        commonMistake:
          'Students say "a furniture" or "an information" — these are uncountable nouns and cannot take a/an. Use "a piece of furniture" or "some information."',
        turkishExplanation:
          'Turkcede sayilabilir/sayilamaz isim ayrimi Ingilizce\'deki kadar belirgin degildir. "Bir bilgi" Turkcede dogru olabilir, ancak Ingilizce\'de "an information" yanlistir; "a piece of information" denmesi gerekir.',
      },
      {
        id: 'grammar-articles-10',
        rule: 'Common article mistakes',
        explanation:
          'Avoid common mistakes: don\'t say "I go to the work" (say "I go to work") or "She is doctor" (say "She is a doctor").',
        example: 'She is a teacher at a school near the downtown area in Toronto.',
        turkishMeaning:
          'Sik yapilan hatalar: "the work" degil "work"; "is doctor" degil "is a doctor".',
        clbLevel: 4,
        category: 'Determiners',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Writing and Speaking scores are directly affected by these common article errors, which are among the most frequent mistakes at CLB 4-5 level.',
        commonMistake:
          'Students say "I go to the bed" or "She is teacher." Fixed expressions: go to work/school/bed (no article). Professions need a/an: She is a doctor.',
        turkishExplanation:
          'Turkcede mesleklerden once artikel kullanilmaz ("O ogretmen"). Ingilizce\'de ise meslek belirtirken mutlaka a/an kullanilmalidir: "She is a teacher." Ayrica bazi sabit ifadelerde (go to work, go to school) artikel kullanilmaz.',
      },
      {
        id: 'grammar-articles-11',
        rule: 'The + superlative adjectives',
        explanation:
          'Always use "the" before superlative adjectives (the biggest, the most beautiful, the best).',
        example: 'The CN Tower is the tallest free-standing structure in Canada.',
        turkishMeaning:
          'En ust derece sifatlardan once her zaman "the" kullanilir: the best, the tallest, the most important.',
        clbLevel: 4,
        category: 'Determiners',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Reading and Writing often include superlative forms when comparing things, and "the" before superlatives is a rule that is frequently tested.',
        commonMistake:
          'Students drop "the" before superlatives: "It is tallest building" instead of "It is the tallest building."',
      },
      {
        id: 'grammar-articles-12',
        rule: 'The + geographical features (rivers, oceans, mountain ranges)',
        explanation:
          'Use "the" with rivers, oceans, seas, deserts, and mountain ranges. Do not use "the" with individual mountains, lakes, or islands.',
        example: 'The Rocky Mountains stretch across western Canada, and the St. Lawrence River flows through Quebec.',
        turkishMeaning:
          'Nehirler, okyanuslar, sira daglar icin "the" kullanilir. Tek daglar ve goller icin kullanilmaz.',
        clbLevel: 4,
        category: 'Determiners',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Reading passages about Canadian geography frequently mention geographical features, and knowing which ones take "the" is important.',
        commonMistake:
          'Students say "the Lake Ontario" (incorrect) or "Rocky Mountains" without "the" (incorrect). Individual lakes have no article; mountain ranges use "the."',
        turkishExplanation:
          'Turkcede cografi isimlerden once artikel kullanilmaz. Ingilizce\'de ise kuralli bir ayrimi vardir: nehirler ve sira daglar "the" alir (the Rockies), tekil daglar ve goller almaz (Mount Logan, Lake Ontario).',
      },
      {
        id: 'grammar-articles-13',
        rule: 'No article with meals, sports, and languages',
        explanation:
          'Do not use articles with meal names (breakfast, lunch, dinner), sports (hockey, soccer), or languages (English, French) in general statements.',
        example: 'I play hockey on Saturdays and have dinner with my family afterward.',
        turkishMeaning:
          'Ogun isimleri (breakfast, lunch), spor (hockey) ve diller (English) onunde artikel kullanilmaz.',
        clbLevel: 4,
        category: 'Determiners',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Speaking tasks about hobbies, daily routines, or food require correct zero-article usage with meals, sports, and languages.',
        commonMistake:
          'Students say "I play the hockey" or "I had the lunch." In general usage, meals and sports do not take articles.',
      },
      {
        id: 'grammar-articles-14',
        rule: 'A/An for professions and identities',
        explanation:
          'Use "a" or "an" when describing someone\'s profession, nationality, or identity: She is a doctor. He is an engineer.',
        example: 'He is an engineer at a tech company in Waterloo, and his wife is a pharmacist.',
        turkishMeaning:
          'Meslek veya kimlik belirtirken a/an kullanilir: She is a teacher. He is an artist.',
        clbLevel: 4,
        category: 'Determiners',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Speaking Task 1 often asks you to describe people, requiring correct article use when stating professions.',
        commonMistake:
          'Students say "He is engineer" without the article. In English, singular professions always need a/an: "He is an engineer."',
        turkishExplanation:
          'Turkcede "O muhendis" cumlesinde artikel yoktur. Ingilizce\'de ise meslek belirtirken a/an zorunludur. Bu Turkce konusanlar icin en sik yapilan hatalardan biridir.',
      },
      {
        id: 'grammar-articles-15',
        rule: 'The + ordinal numbers and specific time references',
        explanation:
          'Use "the" before ordinal numbers (the first, the second, the third) and specific time references (the morning, the beginning, the end).',
        example: 'The first day of school in Canada is usually in the beginning of September.',
        turkishMeaning:
          'Sira sayilarindan once "the" kullanilir: the first, the second. Belirli zaman ifadelerinde de: the morning, the end.',
        clbLevel: 4,
        category: 'Determiners',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Writing and Reading frequently use ordinal numbers when describing sequences of events, where "the" is mandatory.',
        commonMistake:
          'Students drop "the" before ordinal numbers: "First day was good" instead of "The first day was good."',
      },
    ],
    commonMistakes: [
      'Turkish has no articles at all, so learners omit them entirely: "She is teacher" instead of "She is a teacher" and "I went to library" instead of "I went to the library".',
      'Adding "the" before proper nouns like city and country names: "the Toronto" or "the Canada" instead of "Toronto" and "Canada".',
      'Using "a" with uncountable nouns: "a furniture," "an information," or "a homework" instead of "a piece of furniture," "some information," or "some homework".',
    ],
    writingTip:
      'In CELPIP Writing Task 1 (email), articles help you sound natural and specific: "I am writing about a problem with the heating system in my apartment." In Task 2 (survey response), use zero article for general statements: "Education is important for economic growth" — not "The education."',
    speakingTip:
      'In CELPIP Speaking Task 3 (describing a scene), articles help you introduce and track items: "I can see a man sitting on a bench. The man is reading a newspaper." Use "a/an" for first mention and "the" when referring back. Practise this pattern to sound fluent.',
    celpipExample:
      'I would like to report a problem with the water heater in my apartment — the maintenance team has not responded to my request, and this is an urgent matter.',
  },

  // ─── Topic 4: Prepositions of Place & Time ───────────────────────────
  {
    id: 'grammar-prepositions',
    title: 'Prepositions of Place & Time',
    description:
      'Learn how to use prepositions correctly to describe locations and time expressions.',
    clbLevel: 5,
    category: 'Prepositions',
    icon: '📍',
    words: [
      {
        id: 'grammar-prepositions-1',
        rule: 'In (place): inside enclosed spaces',
        explanation:
          'Use "in" for enclosed spaces, cities, countries, and areas (in the room, in Toronto, in Canada).',
        example: 'She works in an office building in downtown Vancouver.',
        turkishMeaning:
          'In (yer): Kapali alanlar, sehirler, ulkeler icin kullanilir. Ornegin: in the room, in Canada.',
        clbLevel: 5,
        category: 'Prepositions',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Listening Part 1 frequently uses "in" for locations when speakers describe where they live, work, or study.',
        commonMistake:
          'Students confuse "in" and "at" for cities: "I live at Toronto" instead of "I live in Toronto."',
        turkishExplanation:
          'Turkcede "-da/-de" eki birden fazla Ingilizce edatina karsilik gelir (in, on, at). "In" kapali alanlar ve buyuk yerler (sehir, ulke) icin kullanilir.',
      },
      {
        id: 'grammar-prepositions-2',
        rule: 'On (place): surfaces and lines',
        explanation:
          'Use "on" for surfaces, streets, floors, and transport (on the table, on King Street, on the bus).',
        example: 'The new coffee shop is on Bloor Street in Toronto.',
        turkishMeaning:
          'On (yer): Yuzeyler, sokaklar ve toplu tasima icin kullanilir. Ornegin: on the table, on the bus.',
        clbLevel: 5,
        category: 'Prepositions',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Listening directions and location descriptions commonly use "on" for street names and surfaces.',
        commonMistake:
          'Students say "in the bus" instead of "on the bus." Use "on" for public transport vehicles you can walk inside (bus, train, plane).',
      },
      {
        id: 'grammar-prepositions-3',
        rule: 'At (place): specific points and locations',
        explanation:
          'Use "at" for specific points, addresses, and places of activity (at the bus stop, at 50 King St, at school).',
        example: 'I will meet you at the entrance of the community centre.',
        turkishMeaning:
          'At (yer): Belirli noktalar ve adresler icin kullanilir. Ornegin: at the door, at school.',
        clbLevel: 5,
        category: 'Prepositions',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Listening Part 3 uses "at" frequently when speakers arrange to meet at specific locations or address-based places.',
        commonMistake:
          'Students say "in the bus stop" instead of "at the bus stop." Use "at" for specific points where you wait or stop.',
      },
      {
        id: 'grammar-prepositions-4',
        rule: 'In (time): months, years, seasons, long periods',
        explanation:
          'Use "in" for months, years, seasons, and parts of the day (in January, in 2024, in the morning).',
        example: 'The CELPIP test is available in March and September.',
        turkishMeaning:
          'In (zaman): Aylar, yillar, mevsimler, gun bolumleri icin. Ornegin: in June, in winter.',
        clbLevel: 5,
        category: 'Prepositions',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Listening announcements about test dates, events, and schedules frequently use "in" with months and years.',
        commonMistake:
          'Students say "on January" instead of "in January." Use "in" for months and years, "on" only for specific dates.',
      },
      {
        id: 'grammar-prepositions-5',
        rule: 'On (time): days and dates',
        explanation:
          'Use "on" for specific days and dates (on Monday, on July 1st, on my birthday).',
        example: 'The office is closed on Canada Day.',
        turkishMeaning:
          'On (zaman): Belirli gunler ve tarihler icin kullanilir. Ornegin: on Friday, on March 5th.',
        clbLevel: 5,
        category: 'Prepositions',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Listening tasks about appointments, events, and schedules use "on" with days and dates that you must identify correctly.',
        commonMistake:
          'Students say "in Monday" instead of "on Monday." Days of the week always use "on."',
      },
      {
        id: 'grammar-prepositions-6',
        rule: 'Between/Among for position',
        explanation:
          'Use "between" for two things and "among" for three or more things.',
        example:
          'The pharmacy is between the bank and the grocery store on Main Street.',
        turkishMeaning:
          'Between: Iki sey arasinda. Among: Uc veya daha fazla sey arasinda.',
        clbLevel: 5,
        category: 'Prepositions',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Listening map exercises may describe locations using "between" to help you identify the correct position on a map.',
        commonMistake:
          'Students use "between" for three or more items: "between the three stores" should be "among the three stores."',
      },
      {
        id: 'grammar-prepositions-7',
        rule: 'Beside/Next to for proximity',
        explanation:
          'Use "beside" or "next to" to describe something very close to another thing.',
        example: 'The parking lot is next to the shopping mall in Mississauga.',
        turkishMeaning:
          'Beside/Next to: "Yaninda" anlaminda, bir seyin hemen yanini belirtir.',
        clbLevel: 5,
        category: 'Prepositions',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Listening location tasks use "beside" and "next to" to describe where buildings and places are relative to each other.',
        commonMistake:
          'Students confuse "beside" with "besides." "Beside" means next to (location), while "besides" means in addition to (different meaning).',
      },
      {
        id: 'grammar-prepositions-8',
        rule: 'During/For/Since for time duration',
        explanation:
          'During + event/period, for + length of time, since + starting point.',
        example:
          'I have been studying English for two years, since I arrived in Canada.',
        turkishMeaning:
          'During: bir olay sirasinda. For: sure belirtir. Since: baslangic noktasi belirtir.',
        clbLevel: 5,
        category: 'Prepositions',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Writing Task 2 and Speaking tasks about personal experiences require correct use of for/since when describing time duration.',
        commonMistake:
          'Students confuse "for" and "since": "I lived here since two years" instead of "I lived here for two years" or "since 2022."',
        turkishExplanation:
          'Turkcede "dir/-dir" surec belirtir. Ingilizce\'de "for" sure uzunlugu (for two years), "since" baslangic noktasi (since 2022) ve "during" bir olay sirasinda (during the meeting) icin kullanilir.',
      },
      {
        id: 'grammar-prepositions-9',
        rule: 'By/Until for deadlines',
        explanation:
          'Use "by" to mean no later than a deadline. Use "until" to mean up to a point in time.',
        example: 'You must submit the application by Friday.',
        turkishMeaning:
          'By: en gec, bir son tarihe kadar. Until: bir zamana kadar (devam eden durum).',
        clbLevel: 5,
        category: 'Prepositions',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Listening Part 1 and Reading passages about deadlines and procedures commonly use "by" for due dates.',
        commonMistake:
          'Students confuse "by" and "until": "I will wait by Friday" should be "I will wait until Friday." "By" = deadline; "until" = continuous duration.',
      },
      {
        id: 'grammar-prepositions-10',
        rule: 'Across/Through for movement',
        explanation:
          'Use "across" for movement from one side to the other of a surface. Use "through" for movement within an enclosed space.',
        example:
          'We walked through the park and across the bridge to get to the museum in Ottawa.',
        turkishMeaning:
          'Across: bir yuzeyden karsi tarafa. Through: kapali veya cevrili bir alandan gecmek.',
        clbLevel: 5,
        category: 'Prepositions',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Speaking Task 3 may require giving directions using "across" and "through" to describe paths and routes.',
        commonMistake:
          'Students use "through" for flat surfaces: "I walked through the street" should be "I walked across the street."',
      },
      {
        id: 'grammar-prepositions-11',
        rule: 'At (time): specific clock times and mealtimes',
        explanation:
          'Use "at" for specific clock times, mealtimes, and certain fixed expressions (at 3 p.m., at noon, at lunchtime, at night).',
        example: 'The language class starts at 9 a.m. and ends at noon.',
        turkishMeaning:
          'At (zaman): Belirli saatler ve ogun zamanlari icin: at 5 o\'clock, at noon, at night.',
        clbLevel: 5,
        category: 'Prepositions',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Listening Part 1 frequently mentions specific times with "at" in announcements, schedules, and appointment details.',
        commonMistake:
          'Students say "in 3 p.m." or "on noon" instead of "at 3 p.m." and "at noon." Specific times always use "at." Exception: "at night" but "in the morning."',
        turkishExplanation:
          'Turkcede saat icin "-da/-de" kullanilir (saat 3\'te). Ingilizce\'de de benzer sekilde "at" kullanilir. Ancak "night" ile "at night" (artikelsiz), "morning" ile "in the morning" (artikelli) kullanilir; bu kurali ezberlemek gerekir.',
      },
      {
        id: 'grammar-prepositions-12',
        rule: 'Above/Below and Over/Under for vertical position',
        explanation:
          'Use "above/below" for higher/lower position without contact. Use "over/under" for directly above/below, often with contact or covering.',
        example: 'The apartment above us is very noisy, and there is a parking garage under the building.',
        turkishMeaning:
          'Above/Below: Temas olmadan ust/alt. Over/Under: Dogrudan ust/alt, genellikle temasli veya ortme durumu.',
        clbLevel: 5,
        category: 'Prepositions',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Listening Part 3 may describe building layouts or apartment positions using above/below and over/under.',
        commonMistake:
          'Students use "on" instead of "above": "The picture is on the sofa" (touching) vs "The picture is above the sofa" (on the wall, higher up).',
      },
      {
        id: 'grammar-prepositions-13',
        rule: 'In front of / Behind / Opposite for relative position',
        explanation:
          'Use "in front of" for facing position, "behind" for at the back of, and "opposite" for directly facing across from something.',
        example: 'The bus stop is in front of the library, and the park is behind the community centre.',
        turkishMeaning:
          'In front of: onunde. Behind: arkasinda. Opposite: karsisinda.',
        clbLevel: 5,
        category: 'Prepositions',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Listening tasks with maps and location descriptions often use these prepositions to describe where places are relative to each other.',
        commonMistake:
          'Students say "in the front of" (which means inside the front part) instead of "in front of" (which means facing or before). These have different meanings.',
      },
      {
        id: 'grammar-prepositions-14',
        rule: 'To/From for direction and origin',
        explanation:
          'Use "to" for destination and direction of movement. Use "from" for origin or starting point.',
        example: 'I commute from Brampton to Toronto every day for work.',
        turkishMeaning:
          'To: hedefe dogru, varilacak yer. From: baslangic noktasi, nereden.',
        clbLevel: 5,
        category: 'Prepositions',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Speaking and Writing tasks about daily routines and travel frequently require correct use of to/from for describing journeys.',
        commonMistake:
          'Students omit "to" after "go": "I go work" instead of "I go to work." Always use "to" for destination after movement verbs.',
        turkishExplanation:
          'Turkcede "-a/-e" yonelme eki (ise gidiyorum) ve "-dan/-den" ayrilma eki (evden) kullanilir. Ingilizce\'de bunlarin karsiligi "to" (yonelme) ve "from" (ayrilma) edatlaridir.',
      },
      {
        id: 'grammar-prepositions-15',
        rule: 'Prepositions in fixed expressions',
        explanation:
          'Many common expressions use specific prepositions that must be memorized: interested in, good at, depend on, listen to, arrive at/in.',
        example: 'She is interested in Canadian history and is very good at learning new languages.',
        turkishMeaning:
          'Sabit ifadelerde belirli edatlar kullanilir: interested in, good at, depend on, listen to.',
        clbLevel: 5,
        category: 'Prepositions',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Writing and Speaking require natural-sounding expressions, and using the wrong preposition in fixed phrases lowers your score.',
        commonMistake:
          'Students say "interested about" instead of "interested in," or "good in" instead of "good at." These combinations must be memorized.',
        turkishExplanation:
          'Turkcede fiil + edat kombinasyonlari Ingilizce\'dekinden farklidir. Ornegin "ilgilenmek" "-ile" alir ama Ingilizce\'de "interested" "in" ile kullanilir. Bu kaliplari tek tek ezberlemek gerekir.',
      },
    ],
    commonMistakes: [
      'Confusing in/on/at because Turkish uses a single postposition "-da/-de" for all three: "I live at Toronto" instead of "I live in Toronto" and "I arrived in the bus stop" instead of "I arrived at the bus stop".',
      'Using Turkish postposition word order (noun + postposition) in English: "table on" instead of "on the table" — English prepositions come before the noun.',
      'Mixing up "for" and "since" for time duration: "I have lived here since three years" instead of "for three years".',
      'Saying "in Monday" or "in 3 p.m." instead of "on Monday" and "at 3 p.m." because Turkish uses the same suffix for all time references.',
    ],
    writingTip:
      'In CELPIP Writing Task 1 (email), prepositions of time help you set deadlines clearly: "I need a response by Friday" and "The issue started on January 15th." In Task 2 (survey response), use prepositions of place to support your argument: "People who live in rural areas often depend on personal vehicles."',
    speakingTip:
      'In CELPIP Speaking Task 3 (describing a scene or giving directions), prepositions of place are essential: "The pharmacy is between the bank and the grocery store, on the left side of Main Street." Practise common location descriptions to build fluency.',
    celpipExample:
      'The community meeting will take place on Wednesday at 7 p.m. in the recreation centre on Maple Avenue, and all residents are welcome to attend.',
  },

  // ─── Topic 5: Comparatives & Superlatives ────────────────────────────
  {
    id: 'grammar-comparatives',
    title: 'Comparatives & Superlatives',
    description:
      'Learn how to compare things using adjectives in their comparative and superlative forms.',
    clbLevel: 5,
    category: 'Adjectives',
    icon: '📊',
    words: [
      {
        id: 'grammar-comparatives-1',
        rule: 'Short adjective + -er (comparative)',
        explanation:
          'Add -er to short (one-syllable) adjectives to compare two things. Double the final consonant if needed.',
        example: 'The winters in Winnipeg are colder than in Vancouver.',
        turkishMeaning:
          'Kisa sifatlara -er eklenir: cold -> colder, fast -> faster. Iki sey karsilastirilir.',
        clbLevel: 5,
        category: 'Adjectives',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Speaking Task 5 and Writing Task 2 often ask you to compare two options, requiring correct comparative forms.',
        commonMistake:
          'Students use "more" with short adjectives: "more cold" instead of "colder." One-syllable adjectives use -er, not more.',
      },
      {
        id: 'grammar-comparatives-2',
        rule: 'The + short adjective + -est (superlative)',
        explanation:
          'Add -est to short adjectives and use "the" before them to show the highest degree in a group.',
        example: 'Mount Logan is the tallest mountain in Canada.',
        turkishMeaning:
          'En ust derece: the + sifat + -est. Ornegin: the tallest, the oldest. Bir grup icinde en ustun.',
        clbLevel: 5,
        category: 'Adjectives',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Reading passages about Canadian geography and landmarks frequently use superlative forms to describe records and extremes.',
        commonMistake:
          'Students forget "the" before superlatives: "It is tallest mountain" instead of "It is the tallest mountain."',
      },
      {
        id: 'grammar-comparatives-3',
        rule: 'More/Most + long adjective',
        explanation:
          'Use "more" for comparative and "most" for superlative with adjectives of two or more syllables.',
        example:
          'Public transit is more affordable than driving in the city.',
        turkishMeaning:
          'Uzun sifatlarda more (karsilastirma) ve most (en ust derece) kullanilir.',
        clbLevel: 5,
        category: 'Adjectives',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Writing Task 2 requires comparing ideas or options using more/most with multi-syllable adjectives like "important" or "affordable."',
        commonMistake:
          'Students add -er to long adjectives: "importanter" instead of "more important." Adjectives with 2+ syllables use more/most.',
      },
      {
        id: 'grammar-comparatives-4',
        rule: 'Irregular comparatives: good/better/best, bad/worse/worst',
        explanation:
          'Some adjectives have irregular forms: good-better-best, bad-worse-worst, far-farther-farthest.',
        example:
          'My English is getting better since I started practising every day in Canada.',
        turkishMeaning:
          'Duzensiz sifatlar: good-better-best, bad-worse-worst. Kurala uymaz, ezberlenmeli.',
        clbLevel: 5,
        category: 'Adjectives',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Speaking and Writing tasks frequently require irregular comparatives like "better" and "worse" when discussing improvements or problems.',
        commonMistake:
          'Students say "more good" instead of "better" or "more bad" instead of "worse." These irregular forms must be memorized.',
        turkishExplanation:
          'Turkcede "iyi-daha iyi-en iyi" ve "kotu-daha kotu-en kotu" duzensiz degildir, ek ile yapilir. Ingilizce\'de ise good-better-best, bad-worse-worst tamamen farkli kelimelerdir.',
      },
      {
        id: 'grammar-comparatives-5',
        rule: 'As + adjective + as (equal comparison)',
        explanation:
          'Use "as...as" to say two things are equal in some way.',
        example: 'This apartment is as spacious as the one we saw yesterday in Calgary.',
        turkishMeaning:
          'As...as: Iki seyin esit oldugunu belirtir. Ornegin: as tall as = kadar uzun.',
        clbLevel: 5,
        category: 'Adjectives',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Writing and Speaking tasks about comparing two equal options use "as...as" structure for balanced comparisons.',
        commonMistake:
          'Students say "as spacious like" instead of "as spacious as." The structure is always "as + adjective + as."',
      },
      {
        id: 'grammar-comparatives-6',
        rule: 'Less/Least + adjective',
        explanation:
          'Use "less" for comparative and "least" for superlative to show a lower degree.',
        example:
          'Taking the subway is less stressful than driving during rush hour in Toronto.',
        turkishMeaning:
          'Less: daha az. Least: en az. Daha dusuk dereceyi belirtmek icin kullanilir.',
        clbLevel: 5,
        category: 'Adjectives',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Writing Task 2 may require expressing negative comparisons using less/least when arguing against an option.',
        commonMistake:
          'Students confuse "less" with "fewer": "less people" should be "fewer people." Use "less" for uncountable nouns and "fewer" for countable.',
        turkishExplanation:
          'Turkcede "daha az" ve "en az" ifadeleri her isim turuyle kullanilir. Ingilizce\'de ise less sayilamaz isimlerle (less water), fewer sayilabilir isimlerle (fewer books) kullanilir.',
      },
      {
        id: 'grammar-comparatives-7',
        rule: 'Comparative + than',
        explanation:
          'Always use "than" after a comparative adjective when comparing two things.',
        example: 'Living in Montreal is cheaper than living in Toronto.',
        turkishMeaning:
          'Karsilastirmada than kullanilir: bigger than, more expensive than.',
        clbLevel: 5,
        category: 'Adjectives',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Speaking and Writing tasks that involve choosing between two options require "comparative + than" structure for clear comparisons.',
        commonMistake:
          'Students drop "than" in comparisons: "Toronto is bigger Montreal" instead of "Toronto is bigger than Montreal."',
      },
      {
        id: 'grammar-comparatives-8',
        rule: 'The + superlative + in/of',
        explanation:
          'Use "the + superlative + in" for places/groups and "of" for a set or number.',
        example:
          'She is the most experienced employee in the department.',
        turkishMeaning:
          'The + en ust derece + in (yer/grup icin) veya of (sayi/kume icin) kullanilir.',
        clbLevel: 5,
        category: 'Adjectives',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Reading passages about rankings, achievements, and records use "the + superlative + in/of" to describe extremes.',
        commonMistake:
          'Students confuse "in" and "of" with superlatives: "the tallest of Canada" should be "the tallest in Canada." Use "in" for places.',
      },
      {
        id: 'grammar-comparatives-9',
        rule: 'Comparative + and + comparative (gradual change)',
        explanation:
          'Repeat the comparative form with "and" to show something is increasing or changing.',
        example:
          'The days are getting longer and longer as spring approaches in Canada.',
        turkishMeaning:
          'Giderek artan degisim: comparative + and + comparative. Ornegin: bigger and bigger.',
        clbLevel: 5,
        category: 'Adjectives',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Writing Task 2 uses this structure when describing trends or gradual changes in situations.',
        commonMistake:
          'Students say "more and more longer" instead of "longer and longer." With short adjectives, repeat the -er form, not "more and more."',
      },
      {
        id: 'grammar-comparatives-10',
        rule: 'Not as + adjective + as (unequal comparison)',
        explanation:
          'Use "not as...as" to say one thing has less of a quality than another.',
        example:
          'The bus service here is not as frequent as it is in the downtown core of Vancouver.',
        turkishMeaning:
          'Not as...as: Bir seyin digerinden daha az oldugunu belirtir. Ornegin: not as big as.',
        clbLevel: 5,
        category: 'Adjectives',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Writing tasks about comparing options sometimes use "not as...as" for polite or indirect negative comparisons.',
        commonMistake:
          'Students say "not as frequent than" instead of "not as frequent as." Always use "as" at both ends of the comparison.',
      },
      {
        id: 'grammar-comparatives-11',
        rule: 'Comparative with modifiers (much, a lot, far, slightly, a bit)',
        explanation:
          'Use modifiers before comparative adjectives to show how big or small the difference is: much/far/a lot for big differences, slightly/a bit for small differences.',
        example: 'Housing in Toronto is much more expensive than in Saskatoon, but it is only slightly more expensive than in Vancouver.',
        turkishMeaning:
          'Karsilastirmada fark buyuklugunu belirtmek icin: much/far/a lot (buyuk fark), slightly/a bit (kucuk fark) kullanilir.',
        clbLevel: 5,
        category: 'Adjectives',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Writing Task 2 scores higher when you use modifiers to add nuance to your comparisons instead of simple "more/less" statements.',
        commonMistake:
          'Students use "very" with comparatives: "very more expensive" is incorrect. Use "much more expensive" or "far more expensive" instead.',
        turkishExplanation:
          'Turkcede "cok daha pahali" veya "biraz daha pahali" ifadeleri kullanilir. Ingilizce\'de karsilastirma sifatlarindan once "very" degil "much/far/a lot" (cok daha) veya "slightly/a bit" (biraz daha) kullanilir.',
      },
      {
        id: 'grammar-comparatives-12',
        rule: 'Spelling rules for -er/-est',
        explanation:
          'When adding -er/-est: if the adjective ends in -e, just add -r/-st (nice -> nicer). If it ends in consonant + y, change y to i (happy -> happier). If it ends in CVC, double the final consonant (big -> bigger).',
        example: 'The people in my new neighbourhood are nicer and happier than I expected.',
        turkishMeaning:
          'Yazim kurallari: -e ile biten: nicer. Unsuz + y: happier. CVC kalip: bigger.',
        clbLevel: 5,
        category: 'Adjectives',
        difficulty: 'advanced',
        celpipContext:
          'Correct spelling of comparative and superlative forms is important in CELPIP Writing tasks to avoid losing marks for spelling errors.',
        commonMistake:
          'Students write "biger" instead of "bigger" or "happyer" instead of "happier." Remember the doubling and y-to-i rules.',
      },
      {
        id: 'grammar-comparatives-13',
        rule: 'Two-syllable adjectives: -er/-est or more/most',
        explanation:
          'Some two-syllable adjectives can use either form: clever -> cleverer or more clever. Adjectives ending in -y, -ow, -er usually take -er/-est (happy -> happier). Others use more/most (careful -> more careful).',
        example: 'She is cleverer than her classmates, but her brother is more careful with details.',
        turkishMeaning:
          'Bazi iki heceli sifatlar her iki sekilde de kullanilabilir. -y, -ow, -er ile bitenler genellikle -er/-est alir.',
        clbLevel: 5,
        category: 'Adjectives',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP test-takers often hesitate with two-syllable adjectives. Knowing which ones take -er and which take more helps you write with confidence.',
        commonMistake:
          'Students say "more happy" instead of "happier" or "beautifuler" instead of "more beautiful." Two-syllable adjectives ending in -y use -ier.',
      },
      {
        id: 'grammar-comparatives-14',
        rule: 'The more... the more... (parallel comparisons)',
        explanation:
          'Use "the + comparative, the + comparative" to show that two things change together: The more you study, the better your results will be.',
        example: 'The more you practise English in Canada, the faster you will improve.',
        turkishMeaning:
          'The more... the more...: Iki seyin birlikte degistigini gosterir. Ne kadar cok... o kadar cok...',
        clbLevel: 5,
        category: 'Adjectives',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Writing Task 2 uses this structure for persuasive arguments showing cause-and-effect relationships.',
        commonMistake:
          'Students say "More you study, more you learn" without "the." The correct structure requires "the" before each comparative.',
        turkishExplanation:
          'Turkcede "ne kadar cok calisirsan, o kadar cok ogrenirsin" yapisi kullanilir. Ingilizce\'de "the more... the more..." yapisi buna karsilik gelir ve her iki karsilastirmadan once "the" zorunludur.',
      },
      {
        id: 'grammar-comparatives-15',
        rule: 'Superlatives with ever and never',
        explanation:
          'Use superlatives with "ever" in questions and "never" in negatives to emphasize extremes: the best... I have ever seen, the worst... I have never experienced.',
        example: 'This is the best poutine I have ever tasted in Canada.',
        turkishMeaning:
          'Ever/never ile en ust derece: "simdiye kadar gordugun en iyi" anlaminda kullanilir.',
        clbLevel: 5,
        category: 'Adjectives',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Speaking tasks about personal experiences often require expressing strong opinions using superlative + ever/never structures.',
        commonMistake:
          'Students say "the best poutine I ever tasted" without "have." The correct form is "the best poutine I have ever tasted" (present perfect).',
      },
    ],
    commonMistakes: [
      'Using double comparatives by combining "more" with the -er form: "more better," "more cheaper," or "more easier" instead of "better," "cheaper," or "easier".',
      'Forgetting to use -er/-est for short adjectives and defaulting to "more/most" for everything: "more big" instead of "bigger" and "most cold" instead of "coldest".',
      'Dropping "than" after a comparative: "Toronto is bigger Montreal" instead of "Toronto is bigger than Montreal".',
      'Omitting "the" before superlatives: "It is tallest building in Canada" instead of "It is the tallest building in Canada".',
    ],
    writingTip:
      'In CELPIP Writing Task 2 (survey response), comparatives strengthen your argument when choosing between options: "Working from home is more efficient than commuting to an office because employees save time and feel less stressed." Use modifiers like "much," "slightly," and "far" for nuance.',
    speakingTip:
      'In CELPIP Speaking Task 5 (choosing between two options), use comparatives to clearly state your preference: "I think Option A is better than Option B because it is cheaper and more convenient." Practise "the more... the more..." for advanced responses: "The more you practise, the better you get."',
    celpipExample:
      'In my opinion, taking public transit is much more affordable than driving, and it is the most environmentally friendly way to commute in a large city like Toronto.',
  },

  // ─── Topic 6: Subject-Verb Agreement ─────────────────────────────────
  {
    id: 'grammar-subject-verb',
    title: 'Subject-Verb Agreement',
    description:
      'Learn how to match subjects and verbs correctly in English sentences.',
    clbLevel: 5,
    category: 'Agreement',
    icon: '🤝',
    words: [
      {
        id: 'grammar-subject-verb-1',
        rule: 'Singular subject + singular verb',
        explanation:
          'A singular subject takes a singular verb (with -s/-es in simple present).',
        example: 'The manager at the Toronto office reviews applications every Monday.',
        turkishMeaning:
          'Tekil ozne tekil fiil alir: He works, she goes, it runs. Fiile -s/-es eklenir.',
        clbLevel: 5,
        category: 'Agreement',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Reading Part 2 tests your ability to identify correct subject-verb agreement in workplace and everyday contexts.',
        commonMistake:
          'Students drop the -s: "The manager review" instead of "The manager reviews." Singular subjects need -s/-es on the verb.',
      },
      {
        id: 'grammar-subject-verb-2',
        rule: 'Plural subject + plural verb',
        explanation:
          'A plural subject takes a plural verb (base form without -s in simple present).',
        example: 'The students attend English classes three times a week in Vancouver.',
        turkishMeaning:
          'Cogul ozne cogul fiil alir: They work, we go. Fiilde -s/-es olmaz.',
        clbLevel: 5,
        category: 'Agreement',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Writing tasks require consistent subject-verb agreement, and plural subjects with incorrect singular verbs lower your grammar score.',
        commonMistake:
          'Students add -s to verbs with plural subjects: "The students attends" instead of "The students attend."',
      },
      {
        id: 'grammar-subject-verb-3',
        rule: 'Compound subjects with "and" take plural verb',
        explanation:
          'Two or more subjects joined by "and" are plural and take a plural verb.',
        example: 'The teacher and the students are in the classroom at the language school.',
        turkishMeaning:
          '"And" ile baglanan birden fazla ozne cogul sayilir ve cogul fiil alir.',
        clbLevel: 5,
        category: 'Agreement',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Reading and Writing tasks include compound subjects regularly, and correct agreement with "and" is essential.',
        commonMistake:
          'Students use singular verb with compound subjects: "The teacher and the student is here" instead of "are here."',
      },
      {
        id: 'grammar-subject-verb-4',
        rule: 'Subjects with "or/nor" match the nearest subject',
        explanation:
          'With "or" or "nor," the verb agrees with the subject closest to it.',
        example:
          'Neither the supervisor nor the employees were available for the meeting in Calgary.',
        turkishMeaning:
          'Or/nor ile baglanan oznelerde fiil en yakin ozneye uyar.',
        clbLevel: 5,
        category: 'Agreement',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Reading comprehension may test your understanding of sentences with or/nor where the verb agreement follows the proximity rule.',
        commonMistake:
          'Students match the verb to the first subject: "Neither the employees nor the supervisor were" should be "was" (matching "supervisor").',
        turkishExplanation:
          'Turkcede fiil her zaman cumlenin sonunda gelir ve ozneye uyar. Ingilizce\'de or/nor ile baglanan oznelerde fiil en yakin (son) ozneye gore cekimlenir. Bu kural Turkcede yoktur.',
      },
      {
        id: 'grammar-subject-verb-5',
        rule: 'Collective nouns can be singular or plural',
        explanation:
          'Collective nouns (team, family, staff) are usually singular when acting as one unit.',
        example: 'The team is preparing for the annual company event in Toronto.',
        turkishMeaning:
          'Topluluk isimleri (team, family, staff) genellikle tekil fiil alir: The team is...',
        clbLevel: 5,
        category: 'Agreement',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Listening and Reading passages about workplaces use collective nouns frequently, and understanding their agreement pattern helps with comprehension.',
        commonMistake:
          'Students use plural verb with collective nouns acting as a unit: "The team are ready" should be "The team is ready" in Canadian English.',
      },
      {
        id: 'grammar-subject-verb-6',
        rule: 'There is + singular / There are + plural',
        explanation:
          'Use "there is" with singular or uncountable nouns and "there are" with plural nouns.',
        example:
          'There are several parks within walking distance of my home in Ottawa.',
        turkishMeaning:
          'There is: tekil/sayilamaz isimler icin. There are: cogul isimler icin.',
        clbLevel: 5,
        category: 'Agreement',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Speaking Task 3 about describing pictures and locations uses there is/are to introduce what you see.',
        commonMistake:
          'Students say "There is many parks" instead of "There are many parks." Match the verb to the noun that follows.',
        turkishExplanation:
          'Turkcede "var" kelimesi hem tekil hem cogul icin aynidir ("Bir park var" / "Bircok park var"). Ingilizce\'de ise there is (tekil) ve there are (cogul) olarak ayrilir.',
      },
      {
        id: 'grammar-subject-verb-7',
        rule: 'Each/Every + singular verb',
        explanation:
          'Each and every are always followed by a singular noun and singular verb.',
        example: 'Every student at the language school in Toronto has a textbook and a notebook.',
        turkishMeaning:
          'Each ve every her zaman tekil isim ve tekil fiil ile kullanilir.',
        clbLevel: 5,
        category: 'Agreement',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Writing and Reading tasks use each/every in rules, policies, and descriptions, requiring singular verb agreement.',
        commonMistake:
          'Students say "Every students have" instead of "Every student has." Each/every always takes singular noun + singular verb.',
      },
      {
        id: 'grammar-subject-verb-8',
        rule: 'Neither/Either + singular verb (alone)',
        explanation:
          'When used alone (without nor/or), "neither" and "either" take a singular verb.',
        example: 'Neither option is suitable for our budget at the Vancouver office.',
        turkishMeaning:
          'Neither ve either tek basina kullanildiginda tekil fiil alir.',
        clbLevel: 5,
        category: 'Agreement',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Writing Task 2 may require you to eliminate options using neither/either, where singular verb agreement is expected.',
        commonMistake:
          'Students say "Neither options are good" instead of "Neither option is good." Neither + singular noun + singular verb.',
      },
      {
        id: 'grammar-subject-verb-9',
        rule: 'Uncountable nouns + singular verb',
        explanation:
          'Uncountable nouns (information, advice, furniture, money) always take a singular verb.',
        example: 'The information on the government website is very helpful for newcomers to Canada.',
        turkishMeaning:
          'Sayilamaz isimler (information, advice, money) her zaman tekil fiil alir.',
        clbLevel: 5,
        category: 'Agreement',
        difficulty: 'basic',
        celpipContext:
          'CELPIP Reading passages about services, policies, and resources use uncountable nouns that require singular verbs.',
        commonMistake:
          'Students say "The information are helpful" instead of "The information is helpful." Uncountable nouns are always singular.',
        turkishExplanation:
          'Turkcede "bilgi" hem tekil hem cogul olarak kullanilabilir ("Bilgiler faydali"). Ingilizce\'de ise "information" sayilamaz isimdir, daima tekil fiil alir ve cogul yapilmaz ("informations" yanlistir).',
      },
      {
        id: 'grammar-subject-verb-10',
        rule: 'Subject-verb agreement in relative clauses',
        explanation:
          'In relative clauses, the verb agrees with the noun the relative pronoun (who, which, that) refers to.',
        example:
          'The employees who work overtime at the Halifax branch receive additional pay.',
        turkishMeaning:
          'Ilgi cumlerinde fiil, who/which/that\'in geri dondugu isme uyar.',
        clbLevel: 5,
        category: 'Agreement',
        difficulty: 'intermediate',
        celpipContext:
          'CELPIP Reading Part 3 includes complex sentences with relative clauses where verb agreement must match the antecedent noun.',
        commonMistake:
          'Students match the verb to the wrong noun: "The manager who work" should be "The manager who works" (matching "manager," not another noun).',
      },
      {
        id: 'grammar-subject-verb-11',
        rule: 'Phrases between subject and verb do not change agreement',
        explanation:
          'When a phrase comes between the subject and verb (e.g., prepositional phrases), the verb still agrees with the subject, not the nearest noun.',
        example: 'The price of houses in Toronto has increased significantly over the past few years.',
        turkishMeaning:
          'Ozne ile fiil arasindaki ifadeler (edatli tamamlayicilar) fiilin cekimini degistirmez. Fiil asil ozneye uyar.',
        clbLevel: 5,
        category: 'Agreement',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Reading passages often have long subjects with prepositional phrases, and identifying the true subject is critical for comprehension.',
        commonMistake:
          'Students match the verb to the nearest noun: "The price of houses have increased" should be "has increased" because the subject is "price" (singular), not "houses."',
        turkishExplanation:
          'Turkcede fiil cumlenin sonunda gelir ve genellikle ozneye uyar. Ingilizce\'de ozne ile fiil arasina edatli ifadeler girdiginde, fiil asil ozneye uyar, aradaki isme degil. Bu ozellikle uzun cumlelerde dikkat gerektirir.',
      },
      {
        id: 'grammar-subject-verb-12',
        rule: 'Indefinite pronouns: some are singular, some are plural',
        explanation:
          'Singular: everyone, everybody, someone, somebody, anyone, anybody, no one, nobody, each, either, neither. Plural: both, few, many, several. Variable: some, any, all, most, none (depends on the noun they refer to).',
        example: 'Everyone in the immigration class is working hard to pass the CELPIP test.',
        turkishMeaning:
          'Belgisiz zamirler: everyone, somebody, nobody tekil fiil alir. Both, many, several cogul fiil alir.',
        clbLevel: 5,
        category: 'Agreement',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Writing and Reading tasks frequently include indefinite pronouns, and correct verb agreement with them demonstrates grammatical accuracy.',
        commonMistake:
          'Students say "Everyone are working" instead of "Everyone is working." Despite meaning many people, everyone/everybody is grammatically singular.',
        turkishExplanation:
          'Turkcede "herkes" cogul anlam tasimasina ragmen tekil fiille kullanilabilir ("Herkes calisiyor"). Ingilizce\'de de "everyone" tekil fiil alir. Ancak "both" ve "many" gibi zamirler cogul fiil alir.',
      },
      {
        id: 'grammar-subject-verb-13',
        rule: 'Subjects with "a number of" vs "the number of"',
        explanation:
          '"A number of" means several/many and takes a plural verb. "The number of" refers to the quantity itself and takes a singular verb.',
        example: 'A number of immigrants arrive in Canada every year. The number of applications has increased.',
        turkishMeaning:
          'A number of: bircok, cogul fiil alir. The number of: sayi, tekil fiil alir.',
        clbLevel: 5,
        category: 'Agreement',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Reading passages about statistics and trends use "the number of" (singular) and "a number of" (plural), and understanding this distinction helps answer comprehension questions.',
        commonMistake:
          'Students confuse the two: "The number of students are increasing" should be "is increasing." "A number of students are studying" is correct (plural).',
      },
      {
        id: 'grammar-subject-verb-14',
        rule: 'Gerund subjects take singular verbs',
        explanation:
          'When a gerund (verb + -ing) is used as the subject of a sentence, it takes a singular verb.',
        example: 'Learning English is important for newcomers to Canada.',
        turkishMeaning:
          'Fiil + -ing ozne olarak kullanildiginda tekil fiil alir: Swimming is fun. Reading helps.',
        clbLevel: 5,
        category: 'Agreement',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Writing Task 2 often requires topic sentences with gerund subjects, where singular verb agreement is essential for a clear thesis statement.',
        commonMistake:
          'Students say "Learning English are important" instead of "is important." A gerund subject is always singular.',
      },
      {
        id: 'grammar-subject-verb-15',
        rule: 'Amounts and measurements as singular',
        explanation:
          'When a quantity of time, money, distance, or weight is considered as a single unit, it takes a singular verb.',
        example: 'Five hundred dollars is a lot of money for a winter jacket. Ten kilometres is a long distance to walk.',
        turkishMeaning:
          'Miktar ve olculer tek bir birim olarak dusunuldugunde tekil fiil alir: $500 is..., 10 km is...',
        clbLevel: 5,
        category: 'Agreement',
        difficulty: 'advanced',
        celpipContext:
          'CELPIP Listening and Reading tasks about budgets, distances, and schedules use amounts as singular subjects that test your agreement skills.',
        commonMistake:
          'Students say "Five hundred dollars are too much" instead of "is too much." When the amount is a single unit, use a singular verb.',
        turkishExplanation:
          'Turkcede "500 dolar cok para" cumlesinde fiil tekil veya cogul olabilir. Ingilizce\'de ise para, zaman, mesafe gibi miktarlar tek birim olarak dusunuldugunde tekil fiil alir: "Two hours is enough time."',
      },
    ],
    commonMistakes: [
      'Ignoring third-person singular -s because Turkish verbs do not change form based on the subject: "The manager review applications" instead of "The manager reviews applications".',
      'Using a plural verb with collective nouns: "The team are ready" instead of "The team is ready" in Canadian English, where collective nouns are typically treated as singular.',
      'Failing to match the verb to the true subject when a prepositional phrase separates them: "The price of houses have increased" instead of "The price of houses has increased".',
      'Using plural verbs with neither/either: "Neither option are good" instead of "Neither option is good".',
    ],
    writingTip:
      'In CELPIP Writing Task 1 (email), ensure your subjects and verbs agree throughout: "The noise from the apartments above us makes it difficult to sleep" — not "make." In Task 2 (survey response), watch agreement with complex subjects: "The number of students who attend the program has grown significantly."',
    speakingTip:
      'In CELPIP Speaking Task 8 (describing an unusual situation), maintain correct agreement even when speaking quickly: "Everyone in my neighbourhood wants the park to stay open" — not "want." Practise sentences with "there is/there are" to build automatic accuracy: "There are several reasons why I support this idea."',
    celpipExample:
      'Each employee in our department has access to the training program, and the number of participants who have completed it has increased every year since the program was introduced.',
  },
];
