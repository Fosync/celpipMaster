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
          '"Say" kişi nesnesi almaz (say something). "Tell" kişi nesnesi gerektirir (tell someone something).',
        clbLevel: 7,
        category: 'Speech',
      },
      {
        id: 'grammar-reported-speech-2',
        rule: 'Direct to Reported: tense backshift',
        explanation:
          'When reporting speech, shift the tense one step back. Present simple becomes past simple, present continuous becomes past continuous.',
        example:
          'She said, "I work at the hospital." → She said that she worked at the hospital.',
        turkishMeaning:
          'Dolayli anlatimda zaman bir adim geriye kayar. Simdiki zaman → gecmis zaman olur.',
        clbLevel: 7,
        category: 'Speech',
      },
      {
        id: 'grammar-reported-speech-3',
        rule: 'Pronoun changes in reported speech',
        explanation:
          'When converting direct speech to reported speech, pronouns change to match the perspective of the reporter.',
        example:
          'He said, "I will submit my application." → He said that he would submit his application.',
        turkishMeaning:
          'Dolayli anlatimda zamirler, anlatan kisinin bakis acisina gore degisir. "I" → "he/she" olur.',
        clbLevel: 7,
        category: 'Speech',
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
      },
      {
        id: 'grammar-reported-speech-7',
        rule: 'Reporting suggestions',
        explanation:
          'Suggestions can be reported with "suggested + gerund" or "suggested that + subject + (should) + base verb."',
        example:
          'He said, "Let\'s take the express bus." → He suggested taking the express bus. / He suggested that we take the express bus.',
        turkishMeaning:
          'Oneriler "suggested + -ing" veya "suggested that + ozne + fiil" ile aktarilir.',
        clbLevel: 7,
        category: 'Speech',
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
      },
      {
        id: 'grammar-reported-speech-9',
        rule: 'Omission of "that" in reported speech',
        explanation:
          '"That" can be omitted after common reporting verbs like "said," "told," and "thought" in informal speech and writing.',
        example:
          'He said (that) he would attend the citizenship ceremony.',
        turkishMeaning:
          '"That" yaygin aktarim fiillerinden sonra ozellikle gunluk dilde atlanabilir.',
        clbLevel: 7,
        category: 'Speech',
      },
      {
        id: 'grammar-reported-speech-10',
        rule: 'Common reporting verbs',
        explanation:
          'Beyond "said" and "told," use varied reporting verbs for nuance: explain, mention, claim, admit, deny, complain, promise, warn, advise.',
        example:
          'The landlord warned that the rent would increase in January. / She admitted that she had missed the deadline.',
        turkishMeaning:
          '"Said" ve "told" disinda cesitli aktarim fiilleri vardir: explain, mention, claim, admit, deny, warn, promise.',
        clbLevel: 7,
        category: 'Speech',
      },
    ],
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
          'If I lived closer to downtown, I would take public transit every day.',
        turkishMeaning:
          'Simdi veya gelecekte gercek olmayan durumlar icin "If + gecmis zaman, would + fiil" kullanilir.',
        clbLevel: 8,
        category: 'Conditionals',
      },
      {
        id: 'grammar-advanced-conditionals-2',
        rule: 'Third conditional: unreal past',
        explanation:
          'Use "If + past perfect, would have + past participle" to talk about hypothetical situations in the past that did not happen.',
        example:
          'If I had applied earlier, I would have gotten the position at the government office.',
        turkishMeaning:
          'Gecmiste gerceklesmeyen durumlar icin "If + past perfect, would have + V3" kullanilir.',
        clbLevel: 8,
        category: 'Conditionals',
      },
      {
        id: 'grammar-advanced-conditionals-3',
        rule: 'Mixed conditional: past condition, present result',
        explanation:
          'Use "If + past perfect, would + base verb" when a past condition affects a present situation.',
        example:
          'If I had studied French in school, I would be bilingual now.',
        turkishMeaning:
          'Gecmisteki bir kosulun simdiki sonucunu ifade etmek icin "If + past perfect, would + fiil" kullanilir.',
        clbLevel: 8,
        category: 'Conditionals',
      },
      {
        id: 'grammar-advanced-conditionals-4',
        rule: 'Wish + past simple (unreal present)',
        explanation:
          'Use "wish + past simple" to express a desire for a present situation to be different from reality.',
        example:
          'I wish I had a shorter commute to work.',
        turkishMeaning:
          'Simdiki durumun farkli olmasini dilemek icin "wish + gecmis zaman" kullanilir.',
        clbLevel: 8,
        category: 'Conditionals',
      },
      {
        id: 'grammar-advanced-conditionals-5',
        rule: 'Wish + past perfect (unreal past)',
        explanation:
          'Use "wish + past perfect" to express regret about something that happened or did not happen in the past.',
        example:
          'I wish I had taken the job offer in Vancouver.',
        turkishMeaning:
          'Gecmiste olan/olmayan bir sey icin pisman olmak: "wish + past perfect" kullanilir.',
        clbLevel: 8,
        category: 'Conditionals',
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
      },
      {
        id: 'grammar-advanced-conditionals-7',
        rule: 'Suppose / Supposing',
        explanation:
          '"Suppose" or "Supposing" can replace "if" in conditional sentences, often used to present hypothetical scenarios for discussion.',
        example:
          'Suppose you lost your PR card — what would you do?',
        turkishMeaning:
          '"Suppose/Supposing" kosullu cumlelerde "if" yerine kullanilabilir, varsayimsal senaryolar icin.',
        clbLevel: 8,
        category: 'Conditionals',
      },
      {
        id: 'grammar-advanced-conditionals-8',
        rule: 'But for (without)',
        explanation:
          '"But for" means "if it were not for" or "if it had not been for." It is used in formal or written English with conditionals.',
        example:
          'But for my supervisor\'s support, I would not have received the promotion.',
        turkishMeaning:
          '"But for" resmi dilde "if it were not for / if it had not been for" anlaminda kullanilir.',
        clbLevel: 8,
        category: 'Conditionals',
      },
      {
        id: 'grammar-advanced-conditionals-9',
        rule: 'Otherwise (implied conditional)',
        explanation:
          '"Otherwise" introduces the result of an implied condition. It means "if not" and connects two statements where one depends on the other.',
        example:
          'You need to renew your work permit on time; otherwise, you may lose your status.',
        turkishMeaning:
          '"Otherwise" ima edilen bir kosulun sonucunu belirtir. "Aksi takdirde" anlamina gelir.',
        clbLevel: 8,
        category: 'Conditionals',
      },
      {
        id: 'grammar-advanced-conditionals-10',
        rule: 'Were to (formal/unlikely condition)',
        explanation:
          '"If + subject + were to + base verb" is a formal way to express an unlikely or hypothetical condition, often used in professional writing.',
        example:
          'If the company were to relocate, many employees would need to find new housing.',
        turkishMeaning:
          '"If + ozne + were to + fiil" resmi dilde olasiligi dusuk varsayimsal durumlar icin kullanilir.',
        clbLevel: 8,
        category: 'Conditionals',
      },
    ],
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
      },
      {
        id: 'grammar-phrasal-verbs-2',
        rule: 'Inseparable phrasal verbs',
        explanation:
          'Inseparable phrasal verbs keep the verb and particle together. The object always comes after the particle.',
        example:
          'She looks after her elderly parents. (NOT: looks her elderly parents after)',
        turkishMeaning:
          'Ayrilamaz phrasal verb\'lerde fiil ve edati her zaman birlikte kalir. Nesne edattan sonra gelir.',
        clbLevel: 8,
        category: 'Vocabulary',
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
      },
      {
        id: 'grammar-phrasal-verbs-4',
        rule: 'Common workplace phrasal verbs: carry out, figure out',
        explanation:
          '"Carry out" means to perform or complete a task. "Figure out" means to solve or understand something after thinking about it.',
        example:
          'Our team carried out the safety inspection last week. / We need to figure out how to reduce overtime costs.',
        turkishMeaning:
          '"Carry out" bir gorevi yerine getirmek demektir. "Figure out" dusunup cozmek/anlamak demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
      },
      {
        id: 'grammar-phrasal-verbs-5',
        rule: 'Phrasal verbs with "get": get along, get over',
        explanation:
          '"Get along (with)" means to have a good relationship. "Get over" means to recover from something.',
        example:
          'I get along well with my coworkers. / It took me a while to get over the jet lag after moving to Canada.',
        turkishMeaning:
          '"Get along" iyi gecinmek demektir. "Get over" bir seyden kurtulmak/atlatmak demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
      },
      {
        id: 'grammar-phrasal-verbs-6',
        rule: 'Phrasal verbs with "take": take on, take up',
        explanation:
          '"Take on" means to accept a responsibility or challenge. "Take up" means to start a new activity or hobby.',
        example:
          'She took on the role of team lead. / He took up hockey after moving to Canada.',
        turkishMeaning:
          '"Take on" sorumluluk almak demektir. "Take up" yeni bir aktivite/hobi baslatmak demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
      },
      {
        id: 'grammar-phrasal-verbs-7',
        rule: 'Phrasal verbs with "put": put off, put up with',
        explanation:
          '"Put off" means to postpone or delay. "Put up with" means to tolerate something unpleasant.',
        example:
          'Don\'t put off filing your taxes. / I can\'t put up with the noise from the construction next door.',
        turkishMeaning:
          '"Put off" ertelemek demektir. "Put up with" hos olmayan bir seye katlanmak demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
      },
      {
        id: 'grammar-phrasal-verbs-8',
        rule: 'Phrasal verbs with "come": come across, come up with',
        explanation:
          '"Come across" means to find something by chance. "Come up with" means to think of an idea or solution.',
        example:
          'I came across a great hiking trail near Banff. / The committee came up with a plan to improve community services.',
        turkishMeaning:
          '"Come across" tesadufen bulmak demektir. "Come up with" bir fikir/cozum uretmek demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
      },
      {
        id: 'grammar-phrasal-verbs-9',
        rule: 'Phrasal verbs with "bring": bring up, bring about',
        explanation:
          '"Bring up" means to mention a topic or to raise a child. "Bring about" means to cause something to happen.',
        example:
          'She brought up the issue of parking at the condo meeting. / The new policy brought about significant changes in the workplace.',
        turkishMeaning:
          '"Bring up" bir konuyu gundeme getirmek veya cocuk buyutmek demektir. "Bring about" bir seyin olmasina neden olmak demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
      },
      {
        id: 'grammar-phrasal-verbs-10',
        rule: 'Intransitive phrasal verbs: break down, show up',
        explanation:
          'Intransitive phrasal verbs do not take an object. "Break down" means to stop working. "Show up" means to arrive or appear.',
        example:
          'My car broke down on the highway near Calgary. / Only half the volunteers showed up for the event.',
        turkishMeaning:
          'Gecissiz phrasal verb\'ler nesne almaz. "Break down" bozulmak, "show up" gelmek/ortaya cikmak demektir.',
        clbLevel: 8,
        category: 'Vocabulary',
      },
    ],
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
          'The job requires patience, dedication, and attention to detail.',
        turkishMeaning:
          'Isim listelerken hepsini ayni formda tutun. Isimleri fiillerle veya cumleciklerle karistirmayin.',
        clbLevel: 8,
        category: 'Sentence Structure',
      },
      {
        id: 'grammar-parallel-structure-2',
        rule: 'Parallel verbs in a series',
        explanation:
          'When listing actions, keep all verbs in the same tense and form. Do not switch between base form, gerund, and infinitive.',
        example:
          'Every morning, I wake up, eat breakfast, and drive to work. (NOT: wake up, eating breakfast, and to drive)',
        turkishMeaning:
          'Eylemleri siralarken tum fiilleri ayni zaman ve formda tutun. Mastar, isim-fiil gibi formlar arasi gecis yapmayin.',
        clbLevel: 8,
        category: 'Sentence Structure',
      },
      {
        id: 'grammar-parallel-structure-3',
        rule: 'Parallel adjectives',
        explanation:
          'When listing adjectives, keep them in the same grammatical form. Avoid mixing single adjectives with phrases.',
        example:
          'The new community centre is modern, spacious, and well-equipped.',
        turkishMeaning:
          'Sifatlari siralarken ayni gramer formunda tutun. Tek sifatlarla sifat tamlamalarini karistirmayin.',
        clbLevel: 8,
        category: 'Sentence Structure',
      },
      {
        id: 'grammar-parallel-structure-4',
        rule: 'Not only...but also',
        explanation:
          'The elements following "not only" and "but also" must be in the same grammatical form (both nouns, both verbs, etc.).',
        example:
          'The training program is not only informative but also practical.',
        turkishMeaning:
          '"Not only" ve "but also" dan sonra gelen ogeler ayni gramer yapisinda olmalidir.',
        clbLevel: 8,
        category: 'Sentence Structure',
      },
      {
        id: 'grammar-parallel-structure-5',
        rule: 'Both...and',
        explanation:
          '"Both...and" connects two equal elements. The grammatical structure after "both" and "and" must match.',
        example:
          'She is both a skilled nurse and a dedicated volunteer in her community.',
        turkishMeaning:
          '"Both...and" iki esit ogeyi baglar. "Both" ve "and" sonrasindaki yapilar eslesmelidir.',
        clbLevel: 8,
        category: 'Sentence Structure',
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
      },
      {
        id: 'grammar-parallel-structure-7',
        rule: 'Parallel infinitives',
        explanation:
          'When listing infinitives, keep the "to" consistent. Either repeat "to" before each verb or use it only before the first.',
        example:
          'Our goals are to increase productivity, to improve communication, and to reduce costs.',
        turkishMeaning:
          'Mastar fiilleri siralarken "to" kullanimi tutarli olmalidir. Ya her fiilden once ya da yalniz ilkinde kullanin.',
        clbLevel: 8,
        category: 'Sentence Structure',
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
      },
      {
        id: 'grammar-parallel-structure-9',
        rule: 'Parallel clauses',
        explanation:
          'When connecting clauses with conjunctions, keep the clause structure parallel. Each clause should follow the same pattern.',
        example:
          'The manager explained what the project involved, when it would start, and how the team would be organized.',
        turkishMeaning:
          'Baglaclarla cumleciekleri baglarken her cumlecik ayni yapisal kalipla olmalidir.',
        clbLevel: 8,
        category: 'Sentence Structure',
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
      },
    ],
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
          'The rent in Vancouver is very high; however, the quality of life is excellent. / The commute is long. Nevertheless, I enjoy the job.',
        turkishMeaning:
          '"However" ve "Nevertheless" zit bir fikir sunar. Cumle basinda virgulden once veya noktali virgulden sonra kullanilir.',
        clbLevel: 8,
        category: 'Cohesion',
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
      },
      {
        id: 'grammar-connectors-3',
        rule: 'Therefore / Consequently (result)',
        explanation:
          '"Therefore" and "Consequently" introduce a logical result or conclusion based on the previous statement.',
        example:
          'The company expanded its operations. Therefore, they needed to hire additional staff. / The road was icy; consequently, several accidents occurred.',
        turkishMeaning:
          '"Therefore" ve "Consequently" onceki ifadeye dayanan mantiksal bir sonuc sunar.',
        clbLevel: 8,
        category: 'Cohesion',
      },
      {
        id: 'grammar-connectors-4',
        rule: 'In addition / Additionally (adding information)',
        explanation:
          '"In addition" and "Additionally" introduce supplementary information. They work similarly to "furthermore" but can feel slightly less formal.',
        example:
          'The library offers free internet access. In addition, it provides ESL classes for newcomers.',
        turkishMeaning:
          '"In addition" ve "Additionally" ek bilgi sunar. "Furthermore" a benzer ancak biraz daha az resmi olabilir.',
        clbLevel: 8,
        category: 'Cohesion',
      },
      {
        id: 'grammar-connectors-5',
        rule: 'On the other hand (contrasting viewpoint)',
        explanation:
          '"On the other hand" introduces an alternative or contrasting viewpoint. It is often used after presenting one side of an argument.',
        example:
          'Living in a big city offers many job opportunities. On the other hand, small towns provide a quieter lifestyle.',
        turkishMeaning:
          '"On the other hand" alternatif veya zit bir bakis acisi sunar. Bir argumanin bir tarafi sunulduktan sonra kullanilir.',
        clbLevel: 8,
        category: 'Cohesion',
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
      },
      {
        id: 'grammar-connectors-8',
        rule: 'As a result (cause and effect)',
        explanation:
          '"As a result" links a cause to its effect. It shows that the second statement is a direct consequence of the first.',
        example:
          'The factory closed without warning. As a result, hundreds of workers lost their jobs.',
        turkishMeaning:
          '"As a result" neden-sonuc iliskisi kurar. Ikinci ifadenin birincinin dogrudan sonucu oldugunu gosterir.',
        clbLevel: 8,
        category: 'Cohesion',
      },
      {
        id: 'grammar-connectors-9',
        rule: 'In conclusion (summarizing)',
        explanation:
          '"In conclusion" signals that you are summarizing your main points. It is used at the beginning of a final paragraph in essays and reports.',
        example:
          'In conclusion, investing in public transportation would benefit both the economy and the environment.',
        turkishMeaning:
          '"In conclusion" ana noktalari ozetledigizi belirtir. Makale ve raporlarda son paragrafin basinda kullanilir.',
        clbLevel: 8,
        category: 'Cohesion',
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
      },
    ],
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
          'The doctor recommended that she take a week off work. / I suggest that he apply for permanent residency.',
        turkishMeaning:
          '"Suggest, recommend, propose" gibi fiillerden sonra "that + ozne + yalina fiil" kullanilir (-s veya gecmis zaman eki eklenmez).',
        clbLevel: 8,
        category: 'Formal Grammar',
      },
      {
        id: 'grammar-subjunctive-2',
        rule: 'It is important / essential / necessary + that + base form',
        explanation:
          'After expressions like "it is important that," "it is essential that," or "it is necessary that," use the base form of the verb.',
        example:
          'It is essential that every employee complete the safety training. / It is important that the report be submitted on time.',
        turkishMeaning:
          '"It is important/essential/necessary that" ifadelerinden sonra fiilin yalin hali kullanilir.',
        clbLevel: 8,
        category: 'Formal Grammar',
      },
      {
        id: 'grammar-subjunctive-3',
        rule: 'If I were (subjunctive "were")',
        explanation:
          'In formal English and in conditionals, use "were" (not "was") for all subjects after "if" to express unreal situations.',
        example:
          'If I were the project manager, I would restructure the team. / If she were here, she would know what to do.',
        turkishMeaning:
          'Resmi Ingilizce\'de ve kosullu cumlelerde gercek olmayan durumlar icin tum oznelerle "were" kullanilir ("was" degil).',
        clbLevel: 8,
        category: 'Formal Grammar',
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
      },
      {
        id: 'grammar-subjunctive-5',
        rule: 'As if / As though (unreal comparison)',
        explanation:
          '"As if" and "As though" describe something that is not true or not likely. Use past tense for present unreal and past perfect for past unreal.',
        example:
          'He talks as if he were the boss. / She looked as though she had seen a ghost.',
        turkishMeaning:
          '"As if / As though" gercek olmayan karsilastirmalar icin kullanilir. Simdiki gercek disi icin gecmis, gecmis gercek disi icin past perfect.',
        clbLevel: 8,
        category: 'Formal Grammar',
      },
      {
        id: 'grammar-subjunctive-6',
        rule: 'Lest (formal: to prevent something)',
        explanation:
          '"Lest" is a very formal conjunction meaning "for fear that" or "in order to prevent." It is followed by the base form of the verb or "should + base form."',
        example:
          'The government introduced strict regulations lest the situation worsen. / She whispered lest she disturb the sleeping child.',
        turkishMeaning:
          '"Lest" cok resmi bir baglactir, "korkusuyla / olmamasi icin" anlamina gelir. Ardindan yalin fiil veya "should + fiil" gelir.',
        clbLevel: 8,
        category: 'Formal Grammar',
      },
      {
        id: 'grammar-subjunctive-7',
        rule: 'It\'s high time + past tense',
        explanation:
          '"It\'s high time" (or "it\'s about time") means something should have been done already. It is followed by the past tense to express urgency.',
        example:
          'It\'s high time the city invested in affordable housing. / It\'s about time we addressed the issue of workplace diversity.',
        turkishMeaning:
          '"It\'s high time" bir seyin coktan yapilmis olmasi gerektigini ifade eder. Aciliyet icin gecmis zaman ile kullanilir.',
        clbLevel: 8,
        category: 'Formal Grammar',
      },
      {
        id: 'grammar-subjunctive-8',
        rule: 'Would rather + base form',
        explanation:
          '"Would rather" expresses a preference. It is followed by the base form when talking about your own preference, or past tense when talking about someone else\'s action.',
        example:
          'I would rather work from home on Fridays. / I would rather you didn\'t mention it to the manager.',
        turkishMeaning:
          '"Would rather" tercih ifade eder. Kendi tercihiniz icin yalin fiil, baskasinin eylemi icin gecmis zaman kullanilir.',
        clbLevel: 8,
        category: 'Formal Grammar',
      },
      {
        id: 'grammar-subjunctive-9',
        rule: 'Formal inversions: Not only...but, Hardly...when',
        explanation:
          'In formal writing, certain negative or restrictive expressions at the beginning of a sentence trigger inversion (auxiliary before subject). Common ones: "Not only," "Hardly," "Seldom," "Never."',
        example:
          'Not only did the company expand, but it also doubled its profits. / Hardly had we arrived when the meeting started.',
        turkishMeaning:
          'Resmi yazida bazi olumsuz ifadeler cumle basinda yer aldiginda devrik cumle yapisi olusur (yardimci fiil ozneden once gelir).',
        clbLevel: 8,
        category: 'Formal Grammar',
      },
      {
        id: 'grammar-subjunctive-10',
        rule: 'Cleft sentences: It is...that / What...is',
        explanation:
          'Cleft sentences restructure a simple sentence to emphasize one part of it. "It is/was...that" and "What...is/was" are common patterns.',
        example:
          'It was the lack of funding that caused the project to fail. / What we need is better public transit in rural areas.',
        turkishMeaning:
          'Yarik cumleler, cumlenin bir bolumunu vurgulamak icin yeniden yapilandirir. "It is...that" ve "What...is" yaygin kaliplardir.',
        clbLevel: 8,
        category: 'Formal Grammar',
      },
    ],
  },
];
