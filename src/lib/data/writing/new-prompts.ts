import type { WritingPrompt } from './types';

export const newWritingPrompts: WritingPrompt[] = [
  // ============================================
  // EMAIL TASKS (CELPIP Writing Task 1 style)
  // ============================================

  // 1. Request Deadline Extension from Professor
  {
    id: 'writing_deadline_extension',
    title: 'Request Deadline Extension from Professor',
    description:
      'Write an email to your professor requesting an extension on an assignment deadline.',
    taskType: 'email',
    clbLevel: 7,
    icon: '\u{1F4E7}',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'You are a second-year university student in Toronto. You have a major research paper due next Monday, but you have been dealing with a family emergency this week. Your grandmother was hospitalized and you have been visiting her daily. You need to write to your professor, Dr. Sarah Mitchell, to request a one-week extension on the deadline.',
    instructions: [
      'Explain your situation and why you need more time.',
      'Specify how much extra time you are requesting.',
      'Describe what you have already completed on the assignment.',
      'Assure the professor that you will submit quality work.',
    ],
    sampleResponse:
      'Dear Dr. Mitchell,\n\nI hope this email finds you well. I am writing to respectfully request a one-week extension on the research paper that is due next Monday, March 17th.\n\nUnfortunately, my grandmother was hospitalized earlier this week due to a sudden health issue, and I have been spending several hours each day at the hospital to support her and my family during this difficult time. As a result, I have not been able to dedicate sufficient time to completing my paper to the standard I would like.\n\nI want to assure you that I have already completed the literature review and outlined the main arguments for my paper. I estimate that I need approximately five more days to finish the analysis and conclusion sections, as well as to proofread the entire document.\n\nIf possible, I would greatly appreciate being allowed to submit the paper by Monday, March 24th. I am committed to producing quality work and would be happy to provide any documentation regarding my grandmother\'s hospitalization if needed.\n\nThank you for your understanding. I truly appreciate your consideration.\n\nSincerely,\nEmma Chen',
    usefulVocabulary: [
      'extension',
      'deadline',
      'hospitalized',
      'emergency',
      'circumstances',
      'respectfully',
      'documentation',
      'consideration',
    ],
    usefulPatterns: [
      'I am writing to respectfully request...',
      'Due to unforeseen circumstances, I...',
      'I want to assure you that...',
      'I would greatly appreciate being allowed to...',
      'I am committed to producing quality work.',
    ],
    usefulIdioms: [
      'in a bind',
      'time crunch',
      'go the extra mile',
    ],
    structureTemplate: [
      'Opening: Greet the professor and state your request clearly.',
      'Body 1: Explain your situation and the reason for your request.',
      'Body 2: Describe what you have already completed and your plan.',
      'Closing: Thank the professor and express your commitment.',
    ],
    commonMistakes: [
      'Being too vague about the reason for the extension.',
      'Not specifying a clear new deadline.',
      'Sounding entitled rather than respectful.',
    ],
  },

  // 2. Workplace Harassment Concern
  {
    id: 'writing_harassment_concern',
    title: 'Workplace Harassment Concern',
    description:
      'Write an email to your HR department about inappropriate behavior by a colleague.',
    taskType: 'email',
    clbLevel: 7,
    icon: '\u{1F4E7}',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'You work as a customer service representative at a large company in Vancouver. Over the past three weeks, a colleague in your department, Mark Thompson, has been making repeated unwelcome comments about your appearance and sending you personal messages on the company chat system outside of work hours. You have asked him to stop on two occasions, but the behaviour has continued. You have decided to formally report this to your HR manager, Ms. Diana Reyes, by email.',
    instructions: [
      'Describe the inappropriate behaviour you have experienced, including specific examples.',
      'Mention the dates or timeframe and that you have already asked the person to stop.',
      'Explain how this behaviour is affecting your work environment and well-being.',
      'Request a formal investigation and ask about next steps.',
    ],
    sampleResponse:
      'Dear Ms. Reyes,\n\nI am writing to formally report a workplace harassment concern involving my colleague, Mark Thompson, in the customer service department.\n\nOver the past three weeks, Mr. Thompson has repeatedly made unwelcome comments about my appearance during work hours, including remarks about my clothing and hairstyle that have made me extremely uncomfortable. In addition, he has been sending me personal messages through the company chat system after hours, despite having no work-related reason to contact me. I have asked him to stop on two separate occasions, once on February 3rd and again on February 10th, but the behaviour has continued.\n\nThis situation has significantly affected my ability to focus on my work. I feel anxious when I arrive at the office and have started avoiding the break room to minimize interactions with him. No employee should have to feel unsafe or uncomfortable in their workplace.\n\nI would like to request a formal investigation into this matter. I have saved screenshots of the chat messages and can provide them as evidence. I would also appreciate being informed about the next steps in the process and any support available to me during the investigation.\n\nThank you for taking this matter seriously.\n\nSincerely,\nPriya Sharma',
    usefulVocabulary: [
      'harassment',
      'unwelcome',
      'inappropriate',
      'formally',
      'investigation',
      'evidence',
      'uncomfortable',
      'well-being',
    ],
    usefulPatterns: [
      'I am writing to formally report a workplace harassment concern involving...',
      'Despite having asked him to stop on [number] occasions, the behaviour has continued.',
      'This situation has significantly affected my ability to...',
      'I would like to request a formal investigation into this matter.',
      'I have saved screenshots and can provide them as evidence.',
    ],
    usefulIdioms: [
      'cross the line',
      'draw the line',
      'enough is enough',
    ],
    structureTemplate: [
      'Opening: State the purpose of your email and identify the person involved.',
      'Body 1: Describe the specific behaviours with dates and examples.',
      'Body 2: Explain the impact on your work and well-being.',
      'Closing: Request a formal investigation and ask about next steps.',
    ],
    commonMistakes: [
      'Being too vague about the specific incidents without dates or examples.',
      'Using emotional language instead of factual, documented descriptions.',
      'Not mentioning that you already asked the person to stop.',
    ],
  },

  // 3. Lost Luggage Compensation
  {
    id: 'writing_lost_luggage',
    title: 'Lost Luggage Compensation',
    description:
      'Write an email to an airline demanding compensation for lost luggage.',
    taskType: 'email',
    clbLevel: 7,
    icon: '\u{1F4E7}',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'You recently flew from Calgary to Montreal with NorthStar Airlines for an important business conference. Upon arrival at Montreal-Trudeau Airport, your checked luggage did not appear on the baggage carousel. You filed a lost baggage report at the airport (reference number NS-2026-07834), but after ten days the airline has still not located your bags. The luggage contained your business suits, presentation materials, and personal items worth approximately $2,500. You need to write to the airline to demand compensation.',
    instructions: [
      'Provide your flight details and lost baggage reference number.',
      'Describe the contents of the luggage and their estimated value.',
      'Explain the inconvenience and additional expenses you have incurred.',
      'Clearly state the compensation you expect and set a deadline for a response.',
    ],
    sampleResponse:
      'Dear NorthStar Airlines Customer Relations,\n\nI am writing to demand compensation for my checked luggage that was lost during Flight NS-412 from Calgary to Montreal on January 28th. My lost baggage reference number is NS-2026-07834.\n\nUpon arrival at Montreal-Trudeau Airport, my suitcase did not appear on the baggage carousel. I immediately filed a report with your ground staff, but despite ten days having passed, I have received no updates and my luggage has not been located. The suitcase contained two business suits, a laptop bag with presentation materials, toiletries, and personal clothing, with a combined estimated value of approximately $2,500.\n\nAs I was in Montreal for a three-day business conference, the loss of my luggage caused enormous inconvenience. I was forced to purchase emergency clothing and toiletries at a cost of $420, and I had to recreate my presentation materials from scratch. These additional expenses were entirely avoidable had your airline handled my baggage properly.\n\nI am requesting full compensation of $2,920, which includes the value of the lost items and the emergency purchases I was forced to make. I expect a written response within 14 business days. If this matter is not resolved promptly, I will be filing a complaint with the Canadian Transportation Agency.\n\nSincerely,\nJames Okafor',
    usefulVocabulary: [
      'compensation',
      'inconvenience',
      'reimbursement',
      'incurred',
      'reference number',
      'estimated value',
      'promptly',
      'complaint',
      'negligence',
    ],
    usefulPatterns: [
      'I am writing to demand compensation for...',
      'Despite [number] days having passed, I have received no updates.',
      'The loss of my luggage caused enormous inconvenience because...',
      'I am requesting full compensation of [amount], which includes...',
      'If this matter is not resolved promptly, I will be filing a complaint with...',
    ],
    usefulIdioms: [
      'add insult to injury',
      'the runaround',
      'hold someone accountable',
    ],
    structureTemplate: [
      'Opening: State the purpose and provide flight and reference details.',
      'Body 1: Describe the lost luggage contents and their estimated value.',
      'Body 2: Explain the inconvenience and additional expenses incurred.',
      'Closing: State the compensation amount expected and set a response deadline.',
    ],
    commonMistakes: [
      'Failing to include the baggage reference number and flight details.',
      'Not itemizing the contents or providing an estimated value.',
      'Being abusive rather than firm, which weakens a professional complaint.',
    ],
  },

  // 4. Thanking a Mentor
  {
    id: 'writing_thanking_mentor',
    title: 'Thanking a Mentor',
    description:
      'Write an email expressing gratitude to a career mentor for their guidance and support.',
    taskType: 'email',
    clbLevel: 7,
    icon: '\u{1F4E7}',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'You recently landed your first full-time position as a software developer at a tech company in Waterloo, Ontario. Over the past year, your mentor, Mr. David Lawson, a senior engineer at another company, volunteered his time to help you prepare for interviews, review your portfolio, and advise you on career decisions. His guidance was instrumental in your success. You want to write him a heartfelt email expressing your gratitude and letting him know about your new job.',
    instructions: [
      'Share the exciting news about your new position.',
      'Describe specific ways your mentor helped you during your career journey.',
      'Explain the impact their guidance had on your confidence and skills.',
      'Express your intention to stay in touch and pay it forward.',
    ],
    sampleResponse:
      'Dear Mr. Lawson,\n\nI am thrilled to share some wonderful news with you. Last week, I received and accepted an offer for a full-time software developer position at BrightPath Technologies in Waterloo. I wanted you to be one of the first people to know because your mentorship played a crucial role in making this possible.\n\nOver the past year, your guidance has been absolutely invaluable. The mock interviews you conducted with me helped me overcome my nervousness and learn how to articulate my strengths confidently. Your detailed feedback on my portfolio project, particularly the suggestions for improving my code architecture, made a significant impression on my interviewers. I also deeply appreciate the career advice you gave me about choosing the right company culture over the highest salary.\n\nBeyond the practical skills, you gave me something equally important: the belief that I was capable of succeeding in this industry. There were moments when I doubted myself, and your encouragement kept me going.\n\nI hope to stay in touch as I begin this new chapter, and I am committed to paying it forward by mentoring others in the future, just as you did for me.\n\nWith deep gratitude,\nAmir Hassan',
    usefulVocabulary: [
      'mentorship',
      'invaluable',
      'guidance',
      'instrumental',
      'gratitude',
      'encouragement',
      'articulate',
      'confidence',
    ],
    usefulPatterns: [
      'I wanted you to be one of the first to know because...',
      'Your guidance has been absolutely invaluable in helping me...',
      'Beyond the practical skills, you gave me something equally important...',
      'I am committed to paying it forward by...',
      'I hope to stay in touch as I begin this new chapter.',
      'Your mentorship played a crucial role in making this possible.',
    ],
    usefulIdioms: [
      'pay it forward',
      'go the extra mile',
      'light at the end of the tunnel',
    ],
    structureTemplate: [
      'Opening: Share your exciting news and credit your mentor.',
      'Body 1: Describe specific ways your mentor helped you with examples.',
      'Body 2: Explain the emotional and professional impact of their guidance.',
      'Closing: Express your intention to stay connected and help others.',
    ],
    commonMistakes: [
      'Being too generic without mentioning specific examples of how the mentor helped.',
      'Focusing only on the outcome without acknowledging the journey and effort.',
      'Writing too formally and failing to convey genuine warmth and emotion.',
    ],
  },

  // 5. Road Construction Noise Complaint
  {
    id: 'writing_construction_noise',
    title: 'Road Construction Noise Complaint',
    description:
      'Write an email to your city council complaining about disruptive road construction noise.',
    taskType: 'email',
    clbLevel: 7,
    icon: '\u{1F4E7}',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'You live on Maple Street in Edmonton, Alberta. For the past six weeks, the city has been conducting major road construction directly in front of your residential neighbourhood. The construction crews begin work at 6:00 a.m. daily, including Saturdays, with heavy machinery producing extreme noise levels. The vibrations have caused cracks in the walls of several homes on your street, and the dust has made it difficult for residents with respiratory conditions to go outside. You are writing to your city councillor, Ms. Karen Whitfield, to complain and request immediate action.',
    instructions: [
      'Describe the construction noise problem, including the hours and duration.',
      'Explain the specific impacts on residents, including property damage and health concerns.',
      'Mention that other neighbours share your concerns.',
      'Request specific actions such as revised work hours or dust control measures.',
    ],
    sampleResponse:
      'Dear Ms. Whitfield,\n\nI am writing as a concerned resident of Maple Street to bring to your attention the severe disruption caused by the ongoing road construction project in our neighbourhood. For the past six weeks, construction crews have been working directly in front of our homes with heavy machinery, beginning as early as 6:00 a.m. every day, including Saturdays.\n\nThe noise levels have been unbearable. The constant drilling and jackhammering make it impossible for residents to sleep, work from home, or enjoy any peace during the day. More alarmingly, the intense vibrations from the heavy equipment have caused visible cracks in the interior walls of at least four homes on our street, including mine. Additionally, the construction has generated enormous amounts of dust, which is particularly dangerous for elderly residents and those with asthma and other respiratory conditions.\n\nI have spoken with more than a dozen neighbours, and they all share these concerns. Several have contacted 311 but received no meaningful response.\n\nI respectfully request that the city take immediate action by restricting construction hours to between 8:00 a.m. and 6:00 p.m. on weekdays only, implementing dust suppression measures, and arranging for an inspector to assess the property damage caused by the vibrations.\n\nThank you for your prompt attention to this matter.\n\nSincerely,\nRobert Nkemelu',
    usefulVocabulary: [
      'disruption',
      'vibrations',
      'respiratory',
      'unbearable',
      'suppression',
      'inspector',
      'infrastructure',
      'municipality',
      'mitigation',
    ],
    usefulPatterns: [
      'I am writing as a concerned resident of [area] to bring to your attention...',
      'The noise levels have been unbearable, making it impossible for residents to...',
      'More alarmingly, the intense vibrations have caused...',
      'I respectfully request that the city take immediate action by...',
      'I have spoken with more than [number] neighbours, and they all share these concerns.',
    ],
    usefulIdioms: [
      'the last straw',
      'fall on deaf ears',
      'at the end of one\'s rope',
    ],
    structureTemplate: [
      'Opening: Introduce yourself and state the construction problem clearly.',
      'Body 1: Describe the specific impacts including noise, property damage, and health risks.',
      'Body 2: Mention community support and any previous attempts to get help.',
      'Closing: Request specific, actionable remedies and thank the councillor.',
    ],
    commonMistakes: [
      'Complaining without requesting specific, actionable solutions.',
      'Failing to mention the impact on the broader community beyond yourself.',
      'Using an aggressive tone that may undermine the credibility of your complaint.',
    ],
  },

  // ============================================
  // SURVEY RESPONSE TASKS (CELPIP Writing Task 2 style)
  // ============================================

  // 6. Should Voting Be Mandatory?
  {
    id: 'writing_mandatory_voting_new',
    title: 'Should Voting Be Mandatory?',
    description:
      'Respond to a survey about whether voting in elections should be made mandatory by law.',
    taskType: 'survey',
    clbLevel: 7,
    icon: '\u{1F5F3}\u{FE0F}',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'A Canadian civic engagement organization is conducting a national survey on democratic participation. They are asking citizens whether Canada should adopt mandatory voting laws, similar to Australia, where all eligible citizens are required to vote in federal elections or face a small fine. Supporters argue that mandatory voting would lead to higher turnout and more representative governments. Opponents believe it violates individual freedom and could result in uninformed votes from disengaged citizens. You have been asked to take a position and argue for it.',
    instructions: [
      'Clearly state whether you agree or disagree with mandatory voting.',
      'Provide at least two strong arguments to support your position.',
      'Acknowledge one argument from the opposing side and explain why your position is stronger.',
      'Conclude with a clear recommendation to the organization.',
    ],
    sampleResponse:
      'I am writing in response to the survey on mandatory voting in Canada. I agree that Canada should adopt mandatory voting laws, as I believe this would strengthen our democracy and produce more representative governments.\n\nFirst, mandatory voting would ensure that election outcomes reflect the views of the entire electorate, not just a motivated minority. In recent Canadian federal elections, turnout has hovered around 60 to 65 percent, meaning more than a third of eligible voters do not participate. This imbalance allows small, well-organized groups to have a disproportionate influence on election results. Second, mandatory voting would encourage citizens to become more engaged with political issues. When people know they must vote, they are more likely to research candidates and follow political debates, leading to a better-informed society overall.\n\nOpponents argue that forcing people to vote violates personal freedom and may result in uninformed ballot casting. However, mandatory voting does not require citizens to vote for a specific candidate; they can still cast a blank ballot if they choose. The key benefit is that it eliminates voter apathy as a barrier to democratic participation.\n\nIn conclusion, I recommend that Canada seriously consider adopting mandatory voting to create a more inclusive and representative democracy.',
    usefulVocabulary: [
      'electorate',
      'turnout',
      'disproportionate',
      'democratic',
      'apathy',
      'participation',
      'representative',
      'inclusive',
      'ballot',
    ],
    usefulPatterns: [
      'I agree that Canada should adopt... as I believe this would...',
      'Mandatory voting would ensure that election outcomes reflect...',
      'In recent Canadian federal elections, turnout has hovered around...',
      'Opponents argue that..., however, mandatory voting does not require...',
      'I recommend that Canada seriously consider adopting...',
    ],
    usefulIdioms: [
      'have a say',
      'the silent majority',
      'use it or lose it',
    ],
    structureTemplate: [
      'Opening: State your clear position on mandatory voting.',
      'Body 1: Present your first argument about representativeness with evidence.',
      'Body 2: Present your second argument and counter an opposing viewpoint.',
      'Closing: Summarize your position and provide a recommendation.',
    ],
    commonMistakes: [
      'Failing to acknowledge the freedom-of-choice argument from opponents.',
      'Not providing examples or statistics to support your arguments.',
      'Ending without a specific and clear recommendation.',
    ],
  },

  // 7. Is Social Media Harmful to Democracy?
  {
    id: 'writing_social_media_democracy',
    title: 'Is Social Media Harmful to Democracy?',
    description:
      'Respond to a survey about whether social media is undermining democratic institutions and processes.',
    taskType: 'survey',
    clbLevel: 7,
    icon: '\u{1F4F1}',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'A Canadian media research institute is conducting a public survey on the relationship between social media and democracy. They want to understand whether platforms like Facebook, X (formerly Twitter), and YouTube are strengthening or undermining democratic processes. Some argue that social media gives ordinary citizens a voice and holds politicians accountable. Others contend that it spreads misinformation, creates echo chambers, and enables foreign interference in elections. You have been invited to take a clear position and argue for it.',
    instructions: [
      'State clearly whether you believe social media is harmful or beneficial to democracy.',
      'Provide at least two well-developed arguments to support your position.',
      'Acknowledge one valid point from the opposing side and explain why your view is stronger.',
      'Conclude with a recommendation about how society should address this issue.',
    ],
    sampleResponse:
      'I am writing in response to the survey on social media and democracy. I believe that, on balance, social media is harmful to democratic processes and institutions, and that urgent action is needed to address this threat.\n\nFirst, social media platforms have become the primary channels for the spread of political misinformation. False news stories, manipulated images, and misleading claims circulate rapidly and are often shared thousands of times before fact-checkers can respond. During recent elections in Canada and around the world, coordinated disinformation campaigns have deliberately misled voters and distorted public debate. Second, social media algorithms create echo chambers by showing users content that reinforces their existing beliefs. This polarizes society, makes constructive political dialogue nearly impossible, and pushes people toward more extreme positions.\n\nAdmittedly, social media does give ordinary citizens a platform to voice their opinions and hold politicians accountable through public scrutiny. However, this benefit is severely undermined when the information environment is polluted with falsehoods and when meaningful debate is replaced by outrage and division.\n\nIn conclusion, I recommend that the Canadian government implement stronger regulations requiring social media platforms to combat misinformation, increase transparency around political advertising, and promote algorithmic accountability.',
    usefulVocabulary: [
      'misinformation',
      'disinformation',
      'polarization',
      'echo chamber',
      'transparency',
      'accountability',
      'algorithm',
      'manipulation',
      'scrutiny',
    ],
    usefulPatterns: [
      'I believe that, on balance, social media is harmful to...',
      'Social media platforms have become the primary channels for...',
      'Social media algorithms create echo chambers by...',
      'Admittedly, social media does give ordinary citizens..., however, this benefit is severely undermined when...',
      'I recommend that the Canadian government implement stronger regulations requiring...',
      'Meaningful debate is replaced by outrage and division.',
    ],
    usefulIdioms: [
      'a double-edged sword',
      'fuel the fire',
      'the court of public opinion',
    ],
    structureTemplate: [
      'Opening: State your clear position on social media and democracy.',
      'Body 1: Present your first argument about misinformation with examples.',
      'Body 2: Present your second argument about polarization and counter an opposing point.',
      'Closing: Recommend specific regulatory actions to address the problem.',
    ],
    commonMistakes: [
      'Confusing social media in general with specific platforms without clarifying scope.',
      'Ignoring the legitimate democratic benefits of social media entirely.',
      'Ending without a constructive recommendation for addressing the issue.',
    ],
  },

  // 8. Should Companies Offer Parental Leave?
  {
    id: 'writing_parental_leave',
    title: 'Should Companies Offer Parental Leave?',
    description:
      'Respond to a survey about whether mandatory parental leave should be required for all employers.',
    taskType: 'survey',
    clbLevel: 7,
    icon: '\u{1F476}',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'The Canadian Chamber of Commerce is conducting a survey on workplace family policies. They are asking whether all companies, regardless of size, should be legally required to offer paid parental leave to both mothers and fathers. Supporters argue that mandatory parental leave promotes gender equality, improves child development, and increases employee loyalty. Opponents contend that it places an unfair financial burden on small businesses and could discourage employers from hiring young workers. You have been asked to take a position and argue for it.',
    instructions: [
      'State whether you support or oppose mandatory parental leave for all companies.',
      'Provide at least two arguments to support your position.',
      'Acknowledge one concern from the opposing side and explain how it can be addressed.',
      'Conclude with a clear recommendation to the Chamber of Commerce.',
    ],
    sampleResponse:
      'I am writing in response to the survey on mandatory parental leave. I strongly support the proposal that all Canadian companies should be legally required to offer paid parental leave to both mothers and fathers.\n\nFirst, mandatory parental leave is essential for promoting gender equality in the workplace. When only mothers are expected to take leave, it reinforces the outdated notion that childcare is solely a woman\'s responsibility. This creates a career penalty for women and contributes to the persistent gender wage gap. Requiring companies to offer leave to both parents helps normalize shared caregiving and levels the professional playing field. Second, research consistently shows that children who spend quality time with both parents during the first months of life develop stronger emotional bonds and better cognitive skills. Paid parental leave ensures that families are not forced to choose between financial stability and their child\'s well-being.\n\nI understand that small businesses may find it challenging to absorb the costs of paid leave. However, the government could introduce subsidies or tax credits specifically designed to offset these costs for smaller employers, ensuring the policy is fair for businesses of all sizes.\n\nIn conclusion, I recommend that the Chamber support legislation mandating paid parental leave with accompanying financial support for small businesses.',
    usefulVocabulary: [
      'parental leave',
      'gender equality',
      'wage gap',
      'caregiving',
      'subsidies',
      'legislation',
      'retention',
      'well-being',
      'cognitive',
    ],
    usefulPatterns: [
      'I strongly support the proposal that all Canadian companies should...',
      'Mandatory parental leave is essential for promoting...',
      'Research consistently shows that children who...',
      'I understand that small businesses may find it challenging to..., however...',
      'I recommend that the Chamber support legislation mandating...',
    ],
    usefulIdioms: [
      'level the playing field',
      'have it both ways',
      'the bigger picture',
    ],
    structureTemplate: [
      'Opening: State your clear position on mandatory parental leave.',
      'Body 1: Present your first argument about gender equality with reasoning.',
      'Body 2: Present your second argument about child development and address a counterpoint.',
      'Closing: Recommend specific policy actions including support for small businesses.',
    ],
    commonMistakes: [
      'Ignoring the legitimate financial concerns of small businesses.',
      'Focusing only on mothers without addressing leave for both parents.',
      'Not suggesting practical solutions to offset costs for employers.',
    ],
  },

  // 9. Is Homeschooling Better Than Traditional School?
  {
    id: 'writing_homeschooling',
    title: 'Is Homeschooling Better Than Traditional School?',
    description:
      'Respond to a survey comparing homeschooling with traditional school education.',
    taskType: 'survey',
    clbLevel: 7,
    icon: '\u{1F3E0}',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'A provincial education ministry in Canada is reviewing its policies on alternative education models and has sent a survey to parents, educators, and community members. They want to know whether homeschooling provides a better educational experience than traditional schooling. Supporters of homeschooling argue that it allows for personalized learning, a flexible schedule, and a safer environment. Critics say that traditional schools provide essential socialization, structured learning, and access to qualified teachers and resources. You have been asked to take a position and support it with arguments.',
    instructions: [
      'State whether you believe homeschooling is better, worse, or comparable to traditional schooling.',
      'Provide at least two strong arguments to support your position.',
      'Acknowledge one valid argument from the opposing perspective and explain why your view is still stronger.',
      'Conclude with a recommendation to the education ministry.',
    ],
    sampleResponse:
      'I am writing in response to the education ministry\'s survey on homeschooling versus traditional schooling. While I respect the choice of families who homeschool, I believe that traditional schooling provides a more well-rounded educational experience for the majority of students.\n\nFirst, traditional schools offer crucial socialization opportunities that are difficult to replicate at home. Students learn how to collaborate, resolve conflicts, and build friendships with peers from diverse backgrounds. These social skills are essential for success in the workplace and in adult life. Second, traditional schools employ qualified, certified teachers who specialize in specific subjects and use evidence-based teaching methods. While some parents are highly capable educators, most do not have the training or expertise to teach advanced subjects such as chemistry, calculus, or foreign languages effectively.\n\nI acknowledge that homeschooling offers the advantage of personalized learning, allowing parents to tailor the curriculum to their child\'s pace and interests. This can be especially beneficial for children with learning differences. However, many traditional schools now offer individualized learning plans and gifted programs that provide similar flexibility within a structured environment.\n\nI recommend that the ministry continue to support traditional schooling as the primary model while ensuring that families who choose homeschooling meet established curriculum standards through regular assessments.',
    usefulVocabulary: [
      'socialization',
      'curriculum',
      'personalized',
      'certified',
      'evidence-based',
      'well-rounded',
      'collaborate',
      'assessment',
      'flexibility',
    ],
    usefulPatterns: [
      'While I respect the choice of families who..., I believe that...',
      'Traditional schools offer crucial... that are difficult to replicate at home.',
      'I acknowledge that homeschooling offers the advantage of..., however...',
      'Many traditional schools now offer... that provide similar flexibility within...',
      'I recommend that the ministry continue to support... while ensuring that...',
      'These skills are essential for success in the workplace and in adult life.',
    ],
    usefulIdioms: [
      'one size does not fit all',
      'the best of both worlds',
      'learn the ropes',
    ],
    structureTemplate: [
      'Opening: State your clear position on homeschooling versus traditional school.',
      'Body 1: Present your first argument about socialization with supporting details.',
      'Body 2: Present your second argument about teacher expertise and counter an opposing point.',
      'Closing: Recommend a balanced approach to the education ministry.',
    ],
    commonMistakes: [
      'Dismissing homeschooling entirely without acknowledging its legitimate benefits.',
      'Making assumptions about all homeschooling families without evidence.',
      'Failing to offer a balanced recommendation that respects parental choice.',
    ],
  },

  // 10. Should Governments Ban Single-Use Plastics?
  {
    id: 'writing_ban_single_use_plastics',
    title: 'Should Governments Ban Single-Use Plastics?',
    description:
      'Respond to a survey about whether governments should impose a complete ban on single-use plastics.',
    taskType: 'survey',
    clbLevel: 7,
    icon: '\u{267B}\u{FE0F}',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'Environment and Climate Change Canada is conducting a public consultation on expanding the federal ban on single-use plastics. The current ban covers items such as checkout bags, straws, and cutlery, but the government is considering extending it to include all single-use plastic packaging, including food containers, beverage cups, and product wrapping. Supporters argue that a comprehensive ban is necessary to protect oceans and wildlife and reduce landfill waste. Opponents warn that alternatives are often more expensive, that businesses need time to adapt, and that some plastic products serve essential functions in healthcare and food safety. You have been asked to take a clear position and argue for it.',
    instructions: [
      'State whether you support or oppose a comprehensive ban on single-use plastics.',
      'Provide at least two compelling arguments to support your position.',
      'Acknowledge one legitimate concern from the opposing side and explain how it could be addressed.',
      'Conclude with a clear recommendation to the federal government.',
    ],
    sampleResponse:
      'I am writing in response to the public consultation on expanding the ban on single-use plastics. I strongly support a comprehensive ban and believe it is essential for protecting Canada\'s environment and future generations.\n\nFirst, single-use plastics are one of the greatest environmental threats of our time. Every year, millions of tonnes of plastic waste end up in Canadian waterways and oceans, harming marine life and contaminating ecosystems. Plastic does not biodegrade; it simply breaks down into microplastics that enter the food chain and pose serious health risks to both wildlife and humans. A comprehensive ban would dramatically reduce the volume of plastic pollution at its source. Second, banning single-use plastics would accelerate innovation in sustainable packaging. When businesses are required to find alternatives, they invest in compostable, reusable, and recyclable materials, creating new economic opportunities and green jobs.\n\nI acknowledge that some single-use plastics serve essential roles in healthcare and food safety. However, the ban can include targeted exemptions for medical supplies and critical food-safety applications while still eliminating unnecessary plastic packaging from everyday consumer products.\n\nIn conclusion, I recommend that the federal government proceed with a comprehensive ban on single-use plastics, with reasonable exemptions and a transition period to support businesses in adapting.',
    usefulVocabulary: [
      'biodegradable',
      'microplastics',
      'contaminating',
      'ecosystem',
      'compostable',
      'sustainable',
      'exemption',
      'innovation',
      'comprehensive',
      'pollution',
    ],
    usefulPatterns: [
      'I strongly support a comprehensive ban and believe it is essential for...',
      'Single-use plastics are one of the greatest environmental threats of...',
      'A comprehensive ban would dramatically reduce the volume of...',
      'I acknowledge that some single-use plastics serve essential roles in..., however...',
      'I recommend that the federal government proceed with... with reasonable exemptions and a transition period.',
      'Banning single-use plastics would accelerate innovation in...',
    ],
    usefulIdioms: [
      'leave a lasting footprint',
      'a drop in the ocean',
      'turn over a new leaf',
    ],
    structureTemplate: [
      'Opening: State your clear position on banning single-use plastics.',
      'Body 1: Present your first argument about environmental harm with evidence.',
      'Body 2: Present your second argument about innovation and address an opposing concern.',
      'Closing: Recommend a comprehensive ban with exemptions and a transition period.',
    ],
    commonMistakes: [
      'Ignoring the legitimate need for plastics in healthcare and food safety.',
      'Presenting only emotional environmental arguments without practical reasoning.',
      'Not proposing a realistic transition plan for businesses and consumers.',
    ],
  },
];
