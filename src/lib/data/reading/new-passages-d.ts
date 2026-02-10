import type { ReadingPassage } from './types';

export const newPassagesD: ReadingPassage[] = [
  // ============================================================
  // CLB 7 — INFORMATION: Climate Change and Agriculture
  // ============================================================
  {
    id: 'reading-climate-agriculture',
    title: 'Climate Change and Agriculture',
    description: 'Read a news article about the impact of climate change on farming practices.',
    passageType: 'information',
    clbLevel: 7,
    icon: '🌾',
    timeLimit: 420,
    passage:
      'Canadian farmers are on the front lines of a battle they never expected to fight. As average temperatures rise across the prairies and growing seasons shift in unpredictable ways, the agricultural sector is being forced to adapt at a pace that many producers say is unsustainable.\n\nAccording to a 2025 report from Agriculture and Agri-Food Canada, average temperatures in the Prairie provinces have increased by 1.9 degrees Celsius since 1950. This warming trend has extended the growing season by approximately two weeks in southern Alberta and Saskatchewan, which might seem beneficial at first glance. However, the increased heat has also brought more frequent droughts, severe storms, and unpredictable frost patterns that can devastate crops overnight.\n\nWheat and canola, which together account for nearly 40% of Canadian agricultural exports, are particularly vulnerable. Dr. Priya Sharma, an agricultural scientist at the University of Saskatchewan, explains that "higher temperatures during the flowering stage of canola can reduce yields by up to 30 percent." She adds that traditional planting schedules, which farmers have relied on for generations, are becoming increasingly unreliable.\n\nIn response, many producers are turning to precision agriculture — a technology-driven approach that uses satellite imagery, soil sensors, and data analytics to optimize planting, irrigation, and harvesting decisions. The federal government has committed $350 million over five years to help farmers adopt these technologies, but critics argue that small and medium-sized operations are being left behind because they cannot afford the initial investment.\n\nWater management has emerged as another critical challenge. The Palliser Triangle, a semi-arid region spanning southern Alberta and Saskatchewan, has experienced three consecutive years of below-average rainfall. Irrigation infrastructure built decades ago was not designed for current demand, and many farmers are competing for increasingly scarce water resources.\n\nDespite these challenges, some farmers are finding innovative solutions. Cover cropping, crop rotation with drought-resistant varieties, and carbon sequestration programs are gaining popularity. These regenerative practices not only help mitigate climate impacts but also improve long-term soil health and can generate additional revenue through carbon credit markets.\n\nThe question remains whether adaptation efforts can keep pace with the accelerating rate of climate change. As one Alberta farmer put it, "We have always adapted to the weather. But this is not weather anymore — this is a fundamental shift in the land we depend on."',
    questions: [
      {
        id: 'reading-climate-agriculture-q1',
        question: 'What is the main argument of this article?',
        options: [
          'Canadian farmers are profiting from longer growing seasons',
          'Climate change is forcing Canadian agriculture to adapt rapidly, but challenges remain',
          'The federal government has solved the agricultural crisis with new funding',
          'Precision agriculture has eliminated the risks of climate change for farmers',
        ],
        correctIndex: 1,
        explanation:
          'The article presents the central theme that climate change is creating urgent challenges for Canadian farmers and that adaptation, while underway, may not keep pace with the rate of change.',
      },
      {
        id: 'reading-climate-agriculture-q2',
        question: 'According to the article, how has the growing season changed in the Prairie provinces?',
        options: [
          'It has shortened by two weeks due to increased frost',
          'It has remained the same despite rising temperatures',
          'It has extended by approximately two weeks in southern Alberta and Saskatchewan',
          'It has become three months longer across all provinces',
        ],
        correctIndex: 2,
        explanation:
          'The article states that the warming trend "has extended the growing season by approximately two weeks in southern Alberta and Saskatchewan."',
      },
      {
        id: 'reading-climate-agriculture-q3',
        question: 'What criticism is raised about the federal government\'s $350 million investment?',
        options: [
          'The money is being spent on outdated irrigation systems',
          'Small and medium-sized farms cannot afford the initial investment in precision agriculture',
          'The funding is only available to organic farmers',
          'The investment is too large and wasteful',
        ],
        correctIndex: 1,
        explanation:
          'The article notes that "critics argue that small and medium-sized operations are being left behind because they cannot afford the initial investment."',
      },
      {
        id: 'reading-climate-agriculture-q4',
        question: 'What does the term "regenerative practices" refer to in this article?',
        options: [
          'Building new farms on previously unused land',
          'Using only genetically modified crops to increase yields',
          'Farming methods like cover cropping and crop rotation that improve soil health and mitigate climate impacts',
          'Replacing traditional farming with fully automated systems',
        ],
        correctIndex: 2,
        explanation:
          'The article describes regenerative practices as including cover cropping, crop rotation with drought-resistant varieties, and carbon sequestration, which "not only help mitigate climate impacts but also improve long-term soil health."',
      },
      {
        id: 'reading-climate-agriculture-q5',
        question: 'What is the significance of the Alberta farmer\'s quote at the end of the article?',
        options: [
          'It shows that farmers are optimistic about future conditions',
          'It emphasizes that current climate change represents a permanent transformation, not ordinary weather variation',
          'It suggests that farmers are unwilling to adopt new technologies',
          'It demonstrates that traditional farming methods are still effective',
        ],
        correctIndex: 1,
        explanation:
          'The farmer distinguishes between normal weather adaptation and "a fundamental shift in the land," highlighting that climate change is a structural, long-term challenge rather than typical seasonal variation.',
      },
    ],
    keyVocabulary: [
      { word: 'sustainability', definition: 'The ability to maintain or continue a practice over the long term without depleting resources', turkish: 'surdurulebilirlik' },
      { word: 'sequestration', definition: 'The process of capturing and storing carbon dioxide from the atmosphere', turkish: 'depolama' },
      { word: 'precision agriculture', definition: 'A technology-driven farming approach using data and sensors to optimize crop management', turkish: 'hassas tarim' },
      { word: 'irrigation', definition: 'The artificial application of water to land for growing crops', turkish: 'sulama' },
      { word: 'regenerative', definition: 'Relating to practices that restore and renew natural systems', turkish: 'yenileyici' },
      { word: 'semi-arid', definition: 'A climate region receiving limited rainfall, between arid and humid', turkish: 'yari kurak' },
    ],
  },

  // ============================================================
  // CLB 7 — INFORMATION: The Gig Economy in Canada
  // ============================================================
  {
    id: 'reading-gig-economy',
    title: 'The Gig Economy in Canada',
    description: 'Read a magazine article about freelance work trends in Canada.',
    passageType: 'information',
    clbLevel: 7,
    icon: '💼',
    timeLimit: 420,
    passage:
      'The nature of work in Canada is undergoing a dramatic transformation. According to Statistics Canada, approximately 1.7 million Canadians now earn their primary income through gig work — short-term contracts, freelance assignments, and platform-based tasks that fall outside the traditional employer-employee relationship. This figure has nearly doubled since 2019, and experts predict continued growth as digital platforms expand their reach.\n\nThe gig economy encompasses a wide range of occupations. At one end are highly skilled professionals — software developers, graphic designers, management consultants — who command premium rates and enjoy considerable flexibility. At the other end are delivery drivers, ride-share operators, and task-based workers who often earn below the median wage and have little control over their working conditions.\n\nFor many workers, the appeal of gig work is clear. Surveys consistently show that flexibility is the number one reason people choose freelance careers. Sarah Chen, a Toronto-based marketing consultant who left her corporate job three years ago, describes the freedom as "life-changing." She sets her own schedule, chooses her clients, and earns more than she did in her previous role. "I would never go back to a nine-to-five," she says.\n\nHowever, critics point out that this flexibility comes at a significant cost. Gig workers in Canada are classified as independent contractors, which means they do not receive employer-sponsored health benefits, pension contributions, or paid sick leave. They are responsible for their own tax remittances, including both the employee and employer portions of Canada Pension Plan contributions. A 2024 study by the Canadian Centre for Policy Alternatives found that 43% of gig workers reported feeling financially insecure, compared to 18% of traditional employees.\n\nThe lack of labour protections has prompted calls for regulatory reform. British Columbia became the first province to introduce gig worker legislation in 2024, establishing minimum earnings standards and requiring platforms to provide basic accident insurance. Ontario and Quebec are considering similar measures, though industry groups have warned that excessive regulation could drive platforms out of the Canadian market.\n\nThe debate reflects a broader tension in the modern economy: how to balance the innovation and flexibility that digital platforms offer with the need to ensure that all workers have access to basic economic security. As the gig economy continues to grow, finding this balance will be one of Canada\'s most important policy challenges.',
    questions: [
      {
        id: 'reading-gig-economy-q1',
        question: 'What is the primary purpose of this article?',
        options: [
          'To persuade readers to leave traditional employment',
          'To provide an overview of the gig economy in Canada, including its benefits and challenges',
          'To argue that the gig economy should be banned',
          'To compare the Canadian gig economy with those of other countries',
        ],
        correctIndex: 1,
        explanation:
          'The article provides a balanced overview of the gig economy, presenting both the benefits (flexibility, higher earnings for some) and the challenges (lack of protections, financial insecurity).',
      },
      {
        id: 'reading-gig-economy-q2',
        question: 'According to the article, what is the main reason people choose gig work?',
        options: [
          'Higher salaries than traditional employment',
          'The ability to work from home exclusively',
          'Flexibility in scheduling and client selection',
          'Access to better health benefits',
        ],
        correctIndex: 2,
        explanation:
          'The article states that "surveys consistently show that flexibility is the number one reason people choose freelance careers."',
      },
      {
        id: 'reading-gig-economy-q3',
        question: 'What financial disadvantage do gig workers face compared to traditional employees?',
        options: [
          'They must pay higher income tax rates',
          'They do not receive employer-sponsored benefits, pensions, or paid sick leave',
          'They are required to work more hours per week',
          'They cannot open business bank accounts',
        ],
        correctIndex: 1,
        explanation:
          'The article explains that gig workers "do not receive employer-sponsored health benefits, pension contributions, or paid sick leave" because they are classified as independent contractors.',
      },
      {
        id: 'reading-gig-economy-q4',
        question: 'Which province was the first to introduce gig worker legislation?',
        options: [
          'Ontario',
          'Quebec',
          'Alberta',
          'British Columbia',
        ],
        correctIndex: 3,
        explanation:
          'The article states that "British Columbia became the first province to introduce gig worker legislation in 2024."',
      },
      {
        id: 'reading-gig-economy-q5',
        question: 'What concern have industry groups raised about gig worker regulation?',
        options: [
          'It would make gig work too attractive and cause labour shortages elsewhere',
          'Excessive regulation could drive platforms out of the Canadian market',
          'Workers would refuse to comply with new reporting requirements',
          'The regulations would only benefit high-income freelancers',
        ],
        correctIndex: 1,
        explanation:
          'The article notes that "industry groups have warned that excessive regulation could drive platforms out of the Canadian market."',
      },
    ],
    keyVocabulary: [
      { word: 'gig economy', definition: 'A labour market characterized by short-term contracts and freelance work rather than permanent jobs', turkish: 'gecici is ekonomisi' },
      { word: 'independent contractor', definition: 'A self-employed worker who provides services to a client without being an employee', turkish: 'bagimsiz yuklenici' },
      { word: 'remittance', definition: 'A payment or transfer of money, especially for taxes or obligations', turkish: 'havale' },
      { word: 'median wage', definition: 'The middle point of earnings where half of workers earn more and half earn less', turkish: 'ortanca ucret' },
      { word: 'regulatory reform', definition: 'Changes to laws and rules governing a particular industry or practice', turkish: 'duzenleyici reform' },
      { word: 'labour protections', definition: 'Laws and policies that safeguard workers\' rights and working conditions', turkish: 'isci koruma kanunlari' },
      { word: 'freelance', definition: 'Working independently for various clients rather than being employed by a single company', turkish: 'serbest calisma' },
    ],
  },

  // ============================================================
  // CLB 7 — INFORMATION: Artificial Intelligence in Healthcare
  // ============================================================
  {
    id: 'reading-ai-healthcare',
    title: 'Artificial Intelligence in Healthcare',
    description: 'Read a journal article about how AI is transforming medical diagnostics.',
    passageType: 'information',
    clbLevel: 7,
    icon: '🏥',
    timeLimit: 420,
    passage:
      'Artificial intelligence is rapidly reshaping the landscape of healthcare in Canada, with diagnostic applications leading the way. From detecting early-stage cancers to predicting cardiac events, AI-powered tools are demonstrating capabilities that, in some cases, surpass those of experienced clinicians.\n\nAt the University Health Network in Toronto, radiologists are now using an AI system called PathAssist to analyze medical imaging scans. The system can review a chest X-ray in under three seconds and flag potential abnormalities with 94% accuracy — compared to the average radiologist\'s accuracy rate of 87% for the same task. Dr. Michael Torres, who leads the hospital\'s AI integration team, emphasizes that the technology is designed to assist, not replace, human doctors. "The AI catches things that might be missed during a busy shift," he explains. "But the final diagnosis always belongs to the physician."\n\nBeyond imaging, AI is making significant inroads in pathology and genomics. Machine learning algorithms can now analyze tissue samples and genetic data to identify patterns associated with specific diseases. At the BC Cancer Agency, an AI model trained on over 500,000 tissue slides has reduced the time required to classify certain tumour types from days to hours, allowing oncologists to begin treatment planning much sooner.\n\nMental health is another area where AI shows promise. Several Canadian startups have developed chatbot-based screening tools that can identify early signs of depression and anxiety through natural language analysis. While these tools are not intended to replace therapy, they can help bridge the gap in regions where access to mental health professionals is limited. In northern and rural communities, where wait times for psychiatric consultations can exceed six months, AI-driven triage systems are helping clinicians prioritize the most urgent cases.\n\nDespite the enthusiasm, significant concerns remain. Privacy advocates worry about the vast amounts of personal health data required to train AI models. Canada\'s Personal Information Protection and Electronic Documents Act, known as PIPEDA, provides some safeguards, but critics argue that existing legislation was not designed for the scale and complexity of modern AI systems. There are also questions about algorithmic bias — the risk that AI models trained on data from certain populations may produce less accurate results for others.\n\nThe Canadian Medical Association has called for a national framework to govern the use of AI in healthcare, one that balances innovation with patient safety and data protection. As Dr. Torres puts it, "The technology is moving faster than the policy. We need to make sure the rules catch up before something goes wrong."',
    questions: [
      {
        id: 'reading-ai-healthcare-q1',
        question: 'What is the main focus of this article?',
        options: [
          'The replacement of doctors by AI in Canadian hospitals',
          'How AI is being used to improve diagnostics in Canadian healthcare, along with related challenges',
          'A comparison of AI healthcare systems across different countries',
          'The financial costs of implementing AI in the medical field',
        ],
        correctIndex: 1,
        explanation:
          'The article focuses on how AI is improving diagnostic capabilities across imaging, pathology, and mental health, while also discussing concerns about privacy, bias, and regulatory gaps.',
      },
      {
        id: 'reading-ai-healthcare-q2',
        question: 'How does the PathAssist AI system compare to radiologists in analyzing chest X-rays?',
        options: [
          'It is slower but more accurate than human radiologists',
          'It achieves 94% accuracy compared to the average radiologist\'s 87%',
          'It can only detect cancers, while radiologists detect all conditions',
          'It matches the radiologist\'s accuracy exactly',
        ],
        correctIndex: 1,
        explanation:
          'The article states that PathAssist "can review a chest X-ray in under three seconds and flag potential abnormalities with 94% accuracy — compared to the average radiologist\'s accuracy rate of 87%."',
      },
      {
        id: 'reading-ai-healthcare-q3',
        question: 'How has AI benefited cancer diagnosis at the BC Cancer Agency?',
        options: [
          'It has eliminated the need for tissue samples entirely',
          'It has reduced tumour classification time from days to hours',
          'It has replaced oncologists in treatment planning',
          'It has doubled the number of patients the agency can treat',
        ],
        correctIndex: 1,
        explanation:
          'The article explains that an AI model "has reduced the time required to classify certain tumour types from days to hours, allowing oncologists to begin treatment planning much sooner."',
      },
      {
        id: 'reading-ai-healthcare-q4',
        question: 'What is "algorithmic bias" as described in the article?',
        options: [
          'The tendency of AI to favour more expensive treatment options',
          'The risk that AI models trained on certain populations may produce less accurate results for others',
          'A programming error that causes AI to misread medical data',
          'The preference of hospitals to use AI over human doctors',
        ],
        correctIndex: 1,
        explanation:
          'The article defines algorithmic bias as "the risk that AI models trained on data from certain populations may produce less accurate results for others."',
      },
      {
        id: 'reading-ai-healthcare-q5',
        question: 'What does Dr. Torres mean when he says "the technology is moving faster than the policy"?',
        options: [
          'AI development is too expensive for government budgets',
          'Doctors are not being trained quickly enough to use AI tools',
          'Regulations and legal frameworks have not kept pace with the rapid advancement of AI in healthcare',
          'Patients prefer traditional medical care over AI-driven diagnostics',
        ],
        correctIndex: 2,
        explanation:
          'Dr. Torres is highlighting the gap between the speed of AI development and the slower pace of creating appropriate regulatory frameworks, stressing the need for policy to "catch up" with technology.',
      },
    ],
    keyVocabulary: [
      { word: 'diagnostics', definition: 'The process of identifying a disease or condition through examination and testing', turkish: 'tani yontemleri' },
      { word: 'algorithmic bias', definition: 'Systematic errors in AI output caused by flawed assumptions in training data', turkish: 'algoritmik onyargi' },
      { word: 'pathology', definition: 'The branch of medicine that examines the causes and effects of diseases through lab analysis', turkish: 'patoloji' },
      { word: 'genomics', definition: 'The study of an organism\'s complete set of genetic material', turkish: 'genomik' },
      { word: 'triage', definition: 'The process of prioritizing patients based on the severity of their condition', turkish: 'onceliklendirme' },
      { word: 'oncologist', definition: 'A doctor who specializes in the diagnosis and treatment of cancer', turkish: 'onkolog' },
      { word: 'framework', definition: 'A basic structure or set of guidelines underlying a system or concept', turkish: 'cerceve' },
    ],
  },

  // ============================================================
  // CLB 7 — OPINION: Indigenous Reconciliation in Schools
  // ============================================================
  {
    id: 'reading-indigenous-reconciliation',
    title: 'Indigenous Reconciliation in Schools',
    description: 'Read an op-ed about curriculum changes for Indigenous reconciliation.',
    passageType: 'opinion',
    clbLevel: 7,
    icon: '🪶',
    timeLimit: 420,
    passage:
      'When my daughter came home from school last month and told me she had learned about residential schools in her Grade 5 class, I felt a complicated mix of emotions. As a Cree mother who grew up hearing my grandmother\'s stories about her years at a residential school in northern Manitoba, I was relieved that this history was finally being taught. But I also wondered: is it enough?\n\nSince the Truth and Reconciliation Commission released its 94 Calls to Action in 2015, provinces across Canada have been revising their curricula to include Indigenous perspectives and histories. Ontario mandated Indigenous content in social studies and history courses in 2018. British Columbia integrated First Peoples Principles of Learning into its entire curriculum framework. Alberta followed with its own revisions in 2022. On the surface, this progress is encouraging.\n\nHowever, a deeper look reveals significant gaps. A 2024 survey by the Assembly of First Nations found that only 34% of teachers felt adequately prepared to teach Indigenous content. Many reported receiving fewer than four hours of professional development on the subject. Without proper training, even well-intentioned teachers risk reducing complex histories to a single lesson or, worse, presenting Indigenous peoples only through the lens of trauma and victimhood.\n\nReconciliation in education must go beyond adding a chapter to a textbook. It requires a fundamental shift in how we think about knowledge itself. Indigenous ways of knowing — oral traditions, land-based learning, community-centred education — offer valuable perspectives that challenge the Western emphasis on individual achievement and standardized testing. When schools integrate these approaches authentically, all students benefit from a richer, more inclusive understanding of the world.\n\nI have seen what authentic integration looks like. At a school on the Opaskwayak Cree Nation in Manitoba, Elders co-teach classes alongside certified teachers. Students learn mathematics through traditional beading patterns and study ecology through seasonal harvesting practices. The result is not only higher engagement among Indigenous students but also greater cultural understanding among non-Indigenous classmates.\n\nCritics argue that curriculum changes are moving too fast, or that they impose guilt on non-Indigenous students. These concerns miss the point entirely. Teaching accurate history is not about assigning blame — it is about ensuring that every Canadian understands the foundations of the country they live in. Reconciliation is not a single lesson or a checkbox. It is an ongoing commitment that begins in the classroom and extends into every aspect of Canadian society.\n\nWe owe it to our children — all of our children — to get this right.',
    questions: [
      {
        id: 'reading-indigenous-reconciliation-q1',
        question: 'What is the author\'s main argument in this op-ed?',
        options: [
          'Curriculum changes for reconciliation have been fully successful across Canada',
          'While progress has been made in teaching Indigenous content, deeper and more authentic integration is needed',
          'Schools should stop teaching about residential schools because it is too traumatic',
          'Only Indigenous teachers should be allowed to teach Indigenous content',
        ],
        correctIndex: 1,
        explanation:
          'The author acknowledges progress but argues that true reconciliation requires more than surface-level curriculum additions — it needs authentic integration of Indigenous ways of knowing and proper teacher training.',
      },
      {
        id: 'reading-indigenous-reconciliation-q2',
        question: 'According to the 2024 survey, what challenge do teachers face in teaching Indigenous content?',
        options: [
          'Students are not interested in learning about Indigenous history',
          'Parents have objected to the new curriculum in large numbers',
          'Only 34% of teachers felt adequately prepared, with most receiving minimal training',
          'Schools lack textbooks that cover Indigenous topics',
        ],
        correctIndex: 2,
        explanation:
          'The article cites a survey finding that "only 34% of teachers felt adequately prepared to teach Indigenous content" and that "many reported receiving fewer than four hours of professional development on the subject."',
      },
      {
        id: 'reading-indigenous-reconciliation-q3',
        question: 'What example does the author give of successful Indigenous education?',
        options: [
          'A university program that trains Indigenous teachers exclusively',
          'A school where Elders co-teach and students learn math through traditional beading',
          'An online platform that delivers Indigenous content to remote schools',
          'A provincial exam that includes Indigenous history questions',
        ],
        correctIndex: 1,
        explanation:
          'The author describes a school on the Opaskwayak Cree Nation where "Elders co-teach classes alongside certified teachers" and "students learn mathematics through traditional beading patterns."',
      },
      {
        id: 'reading-indigenous-reconciliation-q4',
        question: 'How does the author respond to critics who say curriculum changes "impose guilt"?',
        options: [
          'She agrees and suggests a more gradual approach',
          'She argues that teaching accurate history is about understanding, not assigning blame',
          'She dismisses the critics without addressing their concerns',
          'She proposes that only Indigenous students learn this content',
        ],
        correctIndex: 1,
        explanation:
          'The author directly responds by stating that "teaching accurate history is not about assigning blame — it is about ensuring that every Canadian understands the foundations of the country they live in."',
      },
      {
        id: 'reading-indigenous-reconciliation-q5',
        question: 'What does the phrase "Indigenous ways of knowing" refer to in this article?',
        options: [
          'The use of technology in Indigenous communities',
          'Oral traditions, land-based learning, and community-centred education approaches',
          'A specific government curriculum mandated for Indigenous schools',
          'The study of Indigenous languages in university programs',
        ],
        correctIndex: 1,
        explanation:
          'The article defines Indigenous ways of knowing as "oral traditions, land-based learning, community-centred education" that offer perspectives different from Western educational approaches.',
      },
    ],
    keyVocabulary: [
      { word: 'reconciliation', definition: 'The process of restoring friendly relations and addressing past wrongs', turkish: 'uzlasma' },
      { word: 'curriculum', definition: 'The subjects and content taught in a school or educational program', turkish: 'mufredat' },
      { word: 'mandate', definition: 'To officially require or order something by authority', turkish: 'zorunlu kilmak' },
      { word: 'trauma', definition: 'Deep emotional distress caused by a deeply disturbing experience', turkish: 'travma' },
      { word: 'integration', definition: 'The process of combining different elements into a unified whole', turkish: 'butunlesme' },
      { word: 'Elders', definition: 'Respected Indigenous community leaders who carry traditional knowledge and wisdom', turkish: 'yaslilar' },
    ],
  },

  // ============================================================
  // CLB 7 — OPINION: Housing Affordability Crisis
  // ============================================================
  {
    id: 'reading-housing-affordability',
    title: 'Housing Affordability Crisis',
    description: 'Read an analysis of the Canadian housing market and affordability challenges.',
    passageType: 'opinion',
    clbLevel: 7,
    icon: '🏠',
    timeLimit: 420,
    passage:
      'For a growing number of Canadians, the dream of homeownership is slipping further out of reach with each passing year. The national average home price surpassed $750,000 in early 2025, and in cities like Toronto and Vancouver, detached houses routinely sell for over $1.5 million. For young professionals, immigrants, and working families, these figures represent not just economic data but a fundamental barrier to building stable, secure lives.\n\nThe causes of Canada\'s housing crisis are complex and interconnected. On the supply side, decades of underbuilding have created a structural deficit. The Canada Mortgage and Housing Corporation estimates that the country needs to build 3.5 million additional homes by 2030 to restore affordability — a pace of construction that far exceeds current capacity. Municipal zoning restrictions, lengthy approval processes, and a shortage of skilled construction workers have all contributed to the bottleneck.\n\nOn the demand side, record immigration levels have added pressure to already strained markets. Canada welcomed over 470,000 permanent residents in 2024, the majority of whom settled in Toronto, Vancouver, and Montreal. While immigration is essential for economic growth and addressing labour shortages, the housing supply has not kept pace with population increases. The result is fierce competition for a limited number of homes, driving prices upward.\n\nInvestor activity has further distorted the market. In Ontario, investors — including individuals, corporations, and real estate investment trusts — own an estimated 25% of all residential properties. Many of these are held as rental units or short-term vacation properties, reducing the supply available to families seeking permanent housing. Some analysts have called for restrictions on speculative investment, including higher taxes on vacant properties and limits on corporate ownership of single-family homes.\n\nGovernment responses have been mixed. The federal government introduced a two-year ban on foreign homebuyers in 2023, but critics noted that foreign purchases accounted for less than 5% of transactions and that the ban failed to address domestic speculation. Provincial and municipal governments have experimented with inclusionary zoning, which requires developers to include affordable units in new projects, but these measures have produced only modest results.\n\nThe housing crisis is not merely an economic issue — it is a social one. When essential workers, teachers, and nurses cannot afford to live in the communities they serve, the fabric of those communities begins to unravel. Solving this crisis will require coordinated action across all levels of government, sustained investment in public and affordable housing, and a willingness to challenge entrenched interests that profit from scarcity.\n\nThe cost of inaction is measured not in dollars alone, but in the aspirations of an entire generation.',
    questions: [
      {
        id: 'reading-housing-affordability-q1',
        question: 'What is the author\'s central argument about Canada\'s housing crisis?',
        options: [
          'The crisis is entirely caused by foreign buyers',
          'The crisis results from multiple interconnected factors requiring coordinated government action',
          'The housing market will correct itself without government intervention',
          'Building more luxury condominiums is the best solution',
        ],
        correctIndex: 1,
        explanation:
          'The author presents multiple causes — underbuilding, immigration, investor activity — and argues that solving the crisis requires "coordinated action across all levels of government" and sustained investment.',
      },
      {
        id: 'reading-housing-affordability-q2',
        question: 'According to the CMHC, how many additional homes does Canada need by 2030?',
        options: [
          '1.5 million',
          '2.0 million',
          '3.5 million',
          '5.0 million',
        ],
        correctIndex: 2,
        explanation:
          'The article states that "the Canada Mortgage and Housing Corporation estimates that the country needs to build 3.5 million additional homes by 2030 to restore affordability."',
      },
      {
        id: 'reading-housing-affordability-q3',
        question: 'Why does the author criticize the federal ban on foreign homebuyers?',
        options: [
          'It was too expensive for the government to enforce',
          'Foreign purchases accounted for less than 5% of transactions, so the ban missed the main problem',
          'It caused home prices to increase even faster',
          'Foreign buyers were already exempt from property taxes',
        ],
        correctIndex: 1,
        explanation:
          'The article notes that "critics noted that foreign purchases accounted for less than 5% of transactions and that the ban failed to address domestic speculation."',
      },
      {
        id: 'reading-housing-affordability-q4',
        question: 'What percentage of Ontario residential properties are owned by investors?',
        options: [
          'Approximately 10%',
          'Approximately 15%',
          'Approximately 25%',
          'Approximately 40%',
        ],
        correctIndex: 2,
        explanation:
          'The article states that "investors — including individuals, corporations, and real estate investment trusts — own an estimated 25% of all residential properties" in Ontario.',
      },
      {
        id: 'reading-housing-affordability-q5',
        question: 'What does the author mean by saying the cost of inaction is measured "not in dollars alone"?',
        options: [
          'The government will face political consequences if it does not act',
          'The housing crisis threatens the dreams and opportunities of an entire generation beyond just financial impacts',
          'Environmental costs are more important than housing prices',
          'International investors will lose confidence in the Canadian market',
        ],
        correctIndex: 1,
        explanation:
          'The author\'s closing statement emphasizes that the crisis affects "the aspirations of an entire generation," meaning the human and social costs go far beyond financial figures.',
      },
    ],
    keyVocabulary: [
      { word: 'affordability', definition: 'The degree to which something is inexpensive enough for people to buy or use', turkish: 'karsilanabilirlik' },
      { word: 'structural deficit', definition: 'A persistent gap between supply and demand caused by long-term systemic factors', turkish: 'yapisal acik' },
      { word: 'speculative investment', definition: 'Buying assets primarily to profit from price increases rather than for personal use', turkish: 'spekulatif yatirim' },
      { word: 'inclusionary zoning', definition: 'A policy requiring developers to include affordable housing units in new developments', turkish: 'kapsayici imar' },
      { word: 'bottleneck', definition: 'A point of congestion that slows down a process or system', turkish: 'dar bogaz' },
      { word: 'entrenched', definition: 'Firmly established and difficult to change', turkish: 'koklesmis' },
    ],
  },

  // ============================================================
  // CLB 8 — OPINION: Universal Basic Income Debate
  // ============================================================
  {
    id: 'reading-universal-basic-income',
    title: 'Universal Basic Income Debate',
    description: 'Read an academic essay arguing for and against universal basic income.',
    passageType: 'opinion',
    clbLevel: 8,
    icon: '💰',
    timeLimit: 480,
    passage:
      'Few policy proposals generate as much passionate debate as universal basic income, or UBI — a program that would provide every citizen with a regular, unconditional cash payment regardless of employment status or wealth. Proponents argue that UBI represents a necessary response to growing economic inequality and technological displacement. Opponents contend that it is fiscally irresponsible and would undermine the incentive to work. Both sides marshal compelling evidence, and the truth likely lies in a careful examination of the data.\n\nThe strongest case for UBI rests on the results of pilot programs. Between 2017 and 2019, the Ontario Basic Income Pilot provided approximately 4,000 low-income residents in Hamilton, Thunder Bay, and Lindsay with monthly payments of up to $16,989 per year for singles and $24,027 for couples. Although the program was cancelled prematurely by a change in provincial government, preliminary findings were striking. Participants reported significant improvements in mental and physical health, with hospitalizations declining by 27%. Many used the income to pursue education or start small businesses, contradicting the assumption that unconditional cash discourages productive activity.\n\nInternational evidence supports these findings. Finland\'s two-year basic income experiment, which ran from 2017 to 2018, found that recipients experienced lower stress levels, greater life satisfaction, and modestly higher employment rates compared to a control group. A longer-running program in Stockton, California, demonstrated that recipients were more likely to find full-time employment than non-recipients, suggesting that financial stability enables rather than inhibits workforce participation.\n\nCritics raise legitimate concerns about cost. A national UBI program in Canada providing $18,000 per year to every adult would cost an estimated $580 billion annually — roughly equivalent to the entire federal budget. Even with offsetting savings from reduced social assistance programs and administrative costs, the net fiscal impact would be substantial. Economists who oppose UBI argue that targeted programs — such as expanded employment insurance, subsidized childcare, and affordable housing initiatives — deliver greater benefits per dollar spent because they direct resources to those who need them most.\n\nThere is also a philosophical dimension to the debate. UBI challenges deeply held beliefs about the relationship between work and dignity. In a culture that equates personal worth with economic productivity, the idea of providing income without conditions strikes many as fundamentally unfair. Yet advocates counter that automation and artificial intelligence are eliminating millions of jobs, and that a society that cannot provide for displaced workers risks social instability on a massive scale.\n\nThe most promising path forward may be a graduated approach. Rather than implementing a full UBI overnight, Canada could expand existing programs — the Canada Child Benefit, the Guaranteed Income Supplement for seniors, and provincial income assistance — while conducting rigorous, long-term pilot studies. This incremental strategy would allow policymakers to gather evidence, adjust program design, and build public support before committing to a transformative and expensive national program.\n\nWhat is clear is that the status quo is insufficient. With income inequality at its highest level in decades and technological disruption accelerating, Canada must explore bold solutions — even if the final answer turns out to be more nuanced than either side of the current debate would prefer.',
    questions: [
      {
        id: 'reading-universal-basic-income-q1',
        question: 'What approach does the author take toward the UBI debate?',
        options: [
          'The author strongly supports UBI and dismisses all counterarguments',
          'The author opposes UBI and argues for maintaining current programs',
          'The author presents arguments from both sides and suggests a graduated, evidence-based approach',
          'The author avoids taking any position and only summarizes others\' views',
        ],
        correctIndex: 2,
        explanation:
          'The author presents compelling evidence from both proponents and critics, then advocates for a graduated approach with expanded pilot studies rather than full implementation or outright rejection.',
      },
      {
        id: 'reading-universal-basic-income-q2',
        question: 'What was a key finding from the Ontario Basic Income Pilot?',
        options: [
          'Most participants stopped working entirely',
          'Participants reported health improvements and hospitalizations declined by 27%',
          'The program proved that UBI is too expensive to implement nationally',
          'Participants spent the money primarily on non-essential goods',
        ],
        correctIndex: 1,
        explanation:
          'The article reports that "participants reported significant improvements in mental and physical health, with hospitalizations declining by 27%."',
      },
      {
        id: 'reading-universal-basic-income-q3',
        question: 'What is the main argument critics make against a national UBI program?',
        options: [
          'It would cause inflation and destroy the Canadian dollar',
          'It is unconstitutional under Canadian law',
          'The estimated annual cost of $580 billion is fiscally unsustainable, and targeted programs are more efficient',
          'International pilot programs have all failed to show positive results',
        ],
        correctIndex: 2,
        explanation:
          'The article presents the cost criticism: a national UBI "would cost an estimated $580 billion annually," and opponents argue that "targeted programs deliver greater benefits per dollar spent."',
      },
      {
        id: 'reading-universal-basic-income-q4',
        question: 'How did the Stockton, California program challenge assumptions about UBI?',
        options: [
          'It showed that recipients were more likely to find full-time employment',
          'It proved that UBI eliminates poverty completely',
          'It demonstrated that UBI works only in small cities',
          'It revealed that most recipients saved the money instead of spending it',
        ],
        correctIndex: 0,
        explanation:
          'The article states that the Stockton program "demonstrated that recipients were more likely to find full-time employment than non-recipients, suggesting that financial stability enables rather than inhibits workforce participation."',
      },
      {
        id: 'reading-universal-basic-income-q5',
        question: 'What "graduated approach" does the author recommend?',
        options: [
          'Implementing full UBI immediately but reducing payments each year',
          'Expanding existing benefit programs while conducting long-term pilot studies before committing to a national program',
          'Providing UBI only to university graduates',
          'Allowing each province to design its own independent UBI system',
        ],
        correctIndex: 1,
        explanation:
          'The author suggests expanding "existing programs — the Canada Child Benefit, the Guaranteed Income Supplement for seniors, and provincial income assistance — while conducting rigorous, long-term pilot studies" as an incremental strategy.',
      },
    ],
    keyVocabulary: [
      { word: 'universal basic income', definition: 'A government program providing regular unconditional cash payments to all citizens', turkish: 'evrensel temel gelir' },
      { word: 'fiscal', definition: 'Relating to government revenue, spending, and financial management', turkish: 'mali' },
      { word: 'displacement', definition: 'The forced movement of people or the elimination of jobs by new technology', turkish: 'yerinden etme' },
      { word: 'incremental', definition: 'Proceeding in small, gradual steps rather than all at once', turkish: 'kademeli' },
      { word: 'automation', definition: 'The use of technology to perform tasks without human intervention', turkish: 'otomasyon' },
      { word: 'subsidized', definition: 'Partially funded by the government to reduce cost for individuals', turkish: 'subvansiyonlu' },
      { word: 'status quo', definition: 'The existing state of affairs or current situation', turkish: 'mevcut durum' },
    ],
  },

  // ============================================================
  // CLB 8 — INFORMATION: Biodiversity Loss and Ecosystem Services
  // ============================================================
  {
    id: 'reading-biodiversity-loss',
    title: 'Biodiversity Loss and Ecosystem Services',
    description: 'Read a scientific article about species extinction and its consequences for ecosystems.',
    passageType: 'information',
    clbLevel: 8,
    icon: '🦋',
    timeLimit: 480,
    passage:
      'The accelerating decline of global biodiversity represents one of the most consequential environmental crises of the twenty-first century, yet it receives a fraction of the public attention devoted to climate change. Scientists now estimate that species are disappearing at a rate 1,000 times greater than the natural background extinction rate, with approximately one million plant and animal species currently threatened with extinction. For Canada, a nation whose identity is deeply intertwined with its natural landscapes, the implications are profound.\n\nBiodiversity is not merely a matter of aesthetic or ethical concern — it underpins the ecosystem services upon which human societies depend. Ecosystem services are the benefits that natural systems provide, including pollination of crops, purification of water, regulation of climate, and decomposition of waste. The Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services, known as IPBES, estimated in its landmark 2019 report that these services contribute approximately $125 trillion to the global economy annually, a figure that dwarfs the GDP of any single nation.\n\nIn Canada, the consequences of biodiversity loss are already visible. The decline of pollinator populations — particularly native bees and monarch butterflies — threatens the $7 billion agricultural pollination industry. In British Columbia, the collapse of wild salmon runs has devastated coastal Indigenous communities that have depended on these fish for thousands of years. On the prairies, the loss of native grasslands to agriculture has reduced carbon storage capacity and increased vulnerability to soil erosion and flooding.\n\nThe drivers of biodiversity loss are well documented. Habitat destruction, primarily through agricultural expansion and urban development, is the leading cause, responsible for approximately 30% of species declines globally. Climate change is the second major driver, altering ecosystems faster than many species can adapt. Pollution, overexploitation, and invasive species account for much of the remainder.\n\nCanada has taken some steps to address the crisis. The federal government committed to protecting 30% of land and marine areas by 2030 under the Kunming-Montreal Global Biodiversity Framework, adopted in December 2022. As of 2025, approximately 13.5% of terrestrial and 14.7% of marine areas have been designated as protected. However, conservation scientists caution that protection on paper does not always translate to effective management on the ground. Many protected areas remain underfunded, and enforcement of regulations against poaching and illegal development is inconsistent.\n\nEmerging approaches offer reason for cautious optimism. Ecological restoration projects are reversing decades of degradation in some regions. In Ontario, the reintroduction of prescribed burns — controlled fires that mimic natural processes — has revitalized tallgrass prairie ecosystems and the species that depend on them. Indigenous-led conservation initiatives, which integrate traditional ecological knowledge with modern science, have proven particularly effective. The Indigenous Guardians program, for example, employs community members to monitor and protect biodiversity in their traditional territories.\n\nUltimately, addressing biodiversity loss requires recognizing that healthy ecosystems are not a luxury but a foundation upon which economic prosperity and human well-being depend. The question is not whether we can afford to invest in conservation, but whether we can afford not to.',
    questions: [
      {
        id: 'reading-biodiversity-loss-q1',
        question: 'What is the central message of this article?',
        options: [
          'Climate change is a more serious problem than biodiversity loss',
          'Biodiversity loss is a critical crisis that threatens the ecosystem services upon which human societies depend',
          'Canada has successfully protected enough land to halt biodiversity decline',
          'Invasive species are the primary cause of extinction in Canada',
        ],
        correctIndex: 1,
        explanation:
          'The article argues that biodiversity loss is deeply consequential because it threatens ecosystem services — the natural processes that support economies, food production, and human well-being.',
      },
      {
        id: 'reading-biodiversity-loss-q2',
        question: 'According to IPBES, how much do ecosystem services contribute to the global economy?',
        options: [
          'Approximately $7 billion annually',
          'Approximately $50 trillion annually',
          'Approximately $125 trillion annually',
          'Approximately $500 billion annually',
        ],
        correctIndex: 2,
        explanation:
          'The article states that IPBES "estimated in its landmark 2019 report that these services contribute approximately $125 trillion to the global economy annually."',
      },
      {
        id: 'reading-biodiversity-loss-q3',
        question: 'What is the leading cause of species declines globally?',
        options: [
          'Climate change affecting migration patterns',
          'Pollution from industrial activities',
          'Habitat destruction through agricultural expansion and urban development',
          'Overexploitation through hunting and fishing',
        ],
        correctIndex: 2,
        explanation:
          'The article identifies "habitat destruction, primarily through agricultural expansion and urban development" as "the leading cause, responsible for approximately 30% of species declines globally."',
      },
      {
        id: 'reading-biodiversity-loss-q4',
        question: 'What concern do conservation scientists raise about Canada\'s protected areas?',
        options: [
          'There are too many protected areas, limiting economic development',
          'Protection on paper does not always translate to effective management, and many areas are underfunded',
          'Protected areas are too small to support viable wildlife populations',
          'The public opposes the creation of new protected areas',
        ],
        correctIndex: 1,
        explanation:
          'The article notes that "conservation scientists caution that protection on paper does not always translate to effective management on the ground" and that "many protected areas remain underfunded."',
      },
      {
        id: 'reading-biodiversity-loss-q5',
        question: 'How have prescribed burns helped ecosystems in Ontario?',
        options: [
          'They have cleared land for new agricultural development',
          'They have eliminated invasive insect species from forests',
          'They have revitalized tallgrass prairie ecosystems by mimicking natural fire processes',
          'They have reduced the risk of wildfire in urban areas',
        ],
        correctIndex: 2,
        explanation:
          'The article explains that "the reintroduction of prescribed burns — controlled fires that mimic natural processes — has revitalized tallgrass prairie ecosystems and the species that depend on them."',
      },
    ],
    keyVocabulary: [
      { word: 'biodiversity', definition: 'The variety of plant and animal life in a particular habitat or the world as a whole', turkish: 'biyolojik cesitlilik' },
      { word: 'ecosystem services', definition: 'The benefits that natural systems provide to humans, such as pollination and water purification', turkish: 'ekosistem hizmetleri' },
      { word: 'pollinator', definition: 'An animal or insect that transfers pollen between plants, enabling reproduction', turkish: 'tozlastirici' },
      { word: 'habitat destruction', definition: 'The process of eliminating the natural environment of a species', turkish: 'habitat tahribi' },
      { word: 'ecological restoration', definition: 'The practice of renewing and restoring degraded ecosystems', turkish: 'ekolojik restorasyon' },
      { word: 'terrestrial', definition: 'Relating to the earth or land, as opposed to water or air', turkish: 'karasal' },
      { word: 'degradation', definition: 'The process of decline in quality, condition, or function of an environment', turkish: 'bozulma' },
    ],
  },

  // ============================================================
  // CLB 8 — OPINION: Digital Privacy in the Age of AI
  // ============================================================
  {
    id: 'reading-digital-privacy',
    title: 'Digital Privacy in the Age of AI',
    description: 'Read a legal analysis of data protection laws and privacy challenges in the AI era.',
    passageType: 'opinion',
    clbLevel: 8,
    icon: '🔒',
    timeLimit: 480,
    passage:
      'In an era when artificial intelligence systems can infer a person\'s political beliefs, health conditions, and emotional state from their digital footprint, the concept of privacy has been fundamentally altered. Canada\'s existing data protection framework — anchored by the Personal Information Protection and Electronic Documents Act (PIPEDA), enacted in 2000 — was designed for a world of simple databases and email correspondence. It is wholly inadequate for the complexities of modern AI.\n\nThe core challenge is that AI does not merely collect data; it generates new information from existing data in ways that individuals neither anticipate nor consent to. A machine learning model can analyze a person\'s social media activity, purchasing habits, and location history to predict outcomes that the individual has never disclosed — from the likelihood of developing diabetes to the probability of defaulting on a loan. This process, known as inferential analytics, effectively creates a shadow profile of each user that extends far beyond the information they voluntarily shared.\n\nCanada\'s proposed Consumer Privacy Protection Act (CPPA), introduced as Bill C-27, represents a significant step forward but falls short of what is needed. The legislation establishes a right to data portability, strengthens consent requirements, and creates a new Privacy Tribunal with the power to impose fines of up to $25 million or 5% of global revenue. However, privacy scholars argue that the bill\'s approach to AI governance is too vague. It requires organizations to conduct impact assessments for "high-impact" AI systems but fails to define what qualifies as high-impact, leaving significant discretionary power with industry.\n\nThe European Union\'s General Data Protection Regulation (GDPR), implemented in 2018, offers a more comprehensive model. GDPR grants individuals an explicit right to explanation — the ability to understand and challenge decisions made about them by automated systems. It also enshrines the principle of data minimization, requiring organizations to collect only the data strictly necessary for a stated purpose. Canada\'s framework lacks both of these provisions.\n\nThe implications extend beyond individual privacy to democratic governance itself. When technology companies accumulate vast datasets about citizens\' behaviours, preferences, and vulnerabilities, they acquire a form of power that is fundamentally unaccountable. The Cambridge Analytica scandal demonstrated how personal data could be weaponized to manipulate electoral outcomes. Without robust regulatory guardrails, similar abuses are not only possible but inevitable.\n\nChildren and vulnerable populations face particular risks. Studies have shown that minors are disproportionately targeted by data-harvesting practices, often without meaningful parental consent. The algorithms that curate content for young users are designed to maximize engagement, not safeguard well-being, creating environments where misinformation, harmful content, and addictive design patterns flourish.\n\nA meaningful privacy framework for the AI age must incorporate several elements: a clear right to explanation for automated decisions, strict data minimization requirements, independent oversight with genuine enforcement power, and specific protections for children and vulnerable groups. Most importantly, it must shift the burden of proof from individuals — who currently must navigate labyrinthine privacy policies — to organizations, which should be required to demonstrate that their data practices are lawful, necessary, and proportionate.\n\nPrivacy is not an abstract legal concept. It is the foundation of autonomy, dignity, and democratic participation. If Canada fails to modernize its privacy laws for the age of AI, the consequences will be felt not just in data breaches and targeted advertising, but in the erosion of the freedoms that define a democratic society.',
    questions: [
      {
        id: 'reading-digital-privacy-q1',
        question: 'What is the author\'s primary argument about Canada\'s current privacy laws?',
        options: [
          'PIPEDA provides adequate protection for most Canadians',
          'Canada\'s privacy framework was designed for a simpler era and is inadequate for modern AI challenges',
          'Canada should adopt the European GDPR without any modifications',
          'Privacy laws are unnecessary because technology companies self-regulate effectively',
        ],
        correctIndex: 1,
        explanation:
          'The author argues that PIPEDA "was designed for a world of simple databases and email correspondence" and is "wholly inadequate for the complexities of modern AI."',
      },
      {
        id: 'reading-digital-privacy-q2',
        question: 'What is "inferential analytics" as described in the article?',
        options: [
          'A method of collecting data directly from user surveys',
          'The process of using AI to generate new personal information from existing data without the individual\'s knowledge',
          'A tool that allows users to control what data companies collect about them',
          'A government program that monitors data collection by technology companies',
        ],
        correctIndex: 1,
        explanation:
          'The article describes inferential analytics as the process by which AI "generates new information from existing data" to predict outcomes "that the individual has never disclosed," creating a "shadow profile."',
      },
      {
        id: 'reading-digital-privacy-q3',
        question: 'What criticism does the author make of the proposed Consumer Privacy Protection Act?',
        options: [
          'Its fines are too small to deter large technology companies',
          'It focuses too heavily on children\'s privacy at the expense of adult protections',
          'It requires AI impact assessments but fails to define what qualifies as "high-impact," leaving too much discretion to industry',
          'It copies the European GDPR without adapting it to the Canadian context',
        ],
        correctIndex: 2,
        explanation:
          'The author criticizes the CPPA because it "requires organizations to conduct impact assessments for \'high-impact\' AI systems but fails to define what qualifies as high-impact, leaving significant discretionary power with industry."',
      },
      {
        id: 'reading-digital-privacy-q4',
        question: 'What two provisions does the author say Canada\'s framework lacks compared to the GDPR?',
        options: [
          'The right to data deletion and the right to compensation',
          'The right to explanation for automated decisions and the principle of data minimization',
          'The right to sue technology companies and the right to free legal representation',
          'The right to access personal data and the right to transfer data between services',
        ],
        correctIndex: 1,
        explanation:
          'The article identifies two GDPR provisions absent from Canadian law: "an explicit right to explanation" for automated decisions and "the principle of data minimization."',
      },
      {
        id: 'reading-digital-privacy-q5',
        question: 'What fundamental shift does the author call for in the burden of proof regarding data practices?',
        options: [
          'Individuals should be required to prove they were harmed before filing complaints',
          'Technology companies should be exempt from proving their practices are lawful',
          'Organizations should bear the responsibility to demonstrate their data practices are lawful, necessary, and proportionate',
          'Courts should assume that all data collection is illegal unless approved in advance',
        ],
        correctIndex: 2,
        explanation:
          'The author argues the framework "must shift the burden of proof from individuals... to organizations, which should be required to demonstrate that their data practices are lawful, necessary, and proportionate."',
      },
    ],
    keyVocabulary: [
      { word: 'inferential analytics', definition: 'The process of deriving new personal information from existing data using AI algorithms', turkish: 'cikarimsal analitik' },
      { word: 'data minimization', definition: 'The principle of collecting only the minimum amount of personal data necessary for a specific purpose', turkish: 'veri minimizasyonu' },
      { word: 'data portability', definition: 'The right to transfer personal data from one service provider to another', turkish: 'veri tasinabilirligi' },
      { word: 'autonomous', definition: 'Having the freedom and ability to act independently and make one\'s own decisions', turkish: 'ozerk' },
      { word: 'labyrinthine', definition: 'Extremely complex, intricate, and difficult to navigate', turkish: 'labirent gibi karmasik' },
      { word: 'guardrails', definition: 'Rules or restrictions designed to prevent harmful outcomes', turkish: 'koruyucu onlemler' },
      { word: 'proportionate', definition: 'Corresponding in size, degree, or intensity to something else; balanced and appropriate', turkish: 'orantili' },
    ],
  },

  // ============================================================
  // CLB 8 — INFORMATION: The Future of Remote Work
  // ============================================================
  {
    id: 'reading-future-remote-work',
    title: 'The Future of Remote Work',
    description: 'Read a research paper on how remote work affects productivity and mental health.',
    passageType: 'information',
    clbLevel: 8,
    icon: '💻',
    timeLimit: 480,
    passage:
      'The mass experiment in remote work triggered by the COVID-19 pandemic has permanently altered the relationship between employers and employees in Canada. Five years after the initial lockdowns, the data is now sufficiently robust to draw meaningful conclusions about productivity, mental health, and the long-term viability of distributed work arrangements.\n\nA comprehensive 2025 study by the Conference Board of Canada, surveying over 12,000 workers and 3,500 employers across all provinces, found that hybrid work — a model in which employees split their time between home and office — has emerged as the dominant arrangement for knowledge workers. Approximately 62% of Canadian organizations now offer hybrid options, up from 16% before the pandemic. Fully remote work remains prevalent in the technology, financial services, and professional consulting sectors, where it is offered by roughly 35% of employers.\n\nThe productivity evidence is nuanced. Workers who spend two to three days per week working remotely report the highest levels of self-rated productivity, likely because this arrangement allows them to reserve focused, uninterrupted time for complex tasks while maintaining in-person collaboration for brainstorming and relationship building. However, fully remote workers show a modest decline in collaborative output over time. Research from the Rotman School of Management at the University of Toronto found that teams working entirely remotely produced 12% fewer novel ideas in innovation-oriented tasks compared to teams that met in person at least once per week.\n\nMental health outcomes present a similarly complex picture. In the short term, remote work clearly benefits workers by eliminating long commutes, providing greater schedule flexibility, and reducing exposure to workplace stressors such as office politics and micromanagement. A 2024 report by the Mental Health Commission of Canada found that remote workers reported 23% lower rates of burnout than their fully in-office counterparts during the first two years of the arrangement.\n\nHowever, longitudinal data reveals a more troubling trend. After approximately 18 months of fully remote work, rates of loneliness, social isolation, and depressive symptoms begin to increase significantly. Dr. Anita Raghavan, a workplace psychologist at McGill University, explains that "the initial euphoria of working from home eventually gives way to a sense of disconnection." She notes that informal social interactions — conversations in hallways, spontaneous lunch invitations, casual mentoring moments — play a crucial role in psychological well-being that video calls cannot replicate.\n\nThe impact on career advancement is another area of concern. Studies from multiple countries indicate that remote workers receive fewer promotions and smaller salary increases than their in-office peers, a phenomenon researchers call "proximity bias." In Canada, women and workers with caregiving responsibilities are disproportionately affected because they are more likely to choose remote arrangements, potentially widening existing workplace inequalities.\n\nOrganizational culture has also been affected. Companies report greater difficulty onboarding new employees, transmitting institutional knowledge, and maintaining a sense of shared purpose in distributed environments. Some firms have responded by investing heavily in virtual team-building activities and digital collaboration tools, while others have mandated a return to the office — a move that has proven deeply unpopular and, in some cases, has led to significant employee turnover.\n\nThe emerging consensus among researchers is that the future of work is neither fully remote nor fully in-office, but a thoughtfully designed hybrid model that preserves the benefits of flexibility while mitigating the risks of isolation and career disadvantage. Achieving this balance will require employers to move beyond rigid mandates and invest in the management practices, technologies, and cultural norms necessary to support a distributed workforce effectively.',
    questions: [
      {
        id: 'reading-future-remote-work-q1',
        question: 'What work arrangement has emerged as the most common for knowledge workers in Canada?',
        options: [
          'Fully remote work with no office requirements',
          'Hybrid work, splitting time between home and office',
          'Full-time in-office work with occasional remote days',
          'Rotating shifts between different office locations',
        ],
        correctIndex: 1,
        explanation:
          'The article states that "hybrid work — a model in which employees split their time between home and office — has emerged as the dominant arrangement for knowledge workers," with 62% of organizations now offering it.',
      },
      {
        id: 'reading-future-remote-work-q2',
        question: 'What did the Rotman School of Management research find about fully remote teams?',
        options: [
          'They were 12% more productive than in-office teams',
          'They produced 12% fewer novel ideas in innovation tasks compared to teams that met in person weekly',
          'They had higher employee satisfaction but lower retention rates',
          'They spent 12% more time in virtual meetings than necessary',
        ],
        correctIndex: 1,
        explanation:
          'The article reports that "teams working entirely remotely produced 12% fewer novel ideas in innovation-oriented tasks compared to teams that met in person at least once per week."',
      },
      {
        id: 'reading-future-remote-work-q3',
        question: 'What happens to mental health outcomes after approximately 18 months of fully remote work?',
        options: [
          'Workers continue to experience lower burnout rates',
          'Mental health outcomes stabilize and remain consistent',
          'Rates of loneliness, social isolation, and depressive symptoms increase significantly',
          'Workers develop stronger social connections through virtual platforms',
        ],
        correctIndex: 2,
        explanation:
          'The article states that "after approximately 18 months of fully remote work, rates of loneliness, social isolation, and depressive symptoms begin to increase significantly."',
      },
      {
        id: 'reading-future-remote-work-q4',
        question: 'What is "proximity bias" as described in the article?',
        options: [
          'The preference of workers to live close to their workplace',
          'The tendency for remote workers to receive fewer promotions and smaller raises than in-office peers',
          'The assumption that remote workers are less skilled than in-office workers',
          'The habit of managers to favour employees who agree with them',
        ],
        correctIndex: 1,
        explanation:
          'The article defines proximity bias as the phenomenon where "remote workers receive fewer promotions and smaller salary increases than their in-office peers."',
      },
      {
        id: 'reading-future-remote-work-q5',
        question: 'What is the emerging consensus among researchers about the future of work?',
        options: [
          'All workers should return to the office full-time',
          'Fully remote work is the most efficient model for all industries',
          'A thoughtfully designed hybrid model that balances flexibility with the risks of isolation is the best approach',
          'Companies should allow each employee to choose their own arrangement without any guidelines',
        ],
        correctIndex: 2,
        explanation:
          'The article concludes that "the future of work is neither fully remote nor fully in-office, but a thoughtfully designed hybrid model that preserves the benefits of flexibility while mitigating the risks of isolation and career disadvantage."',
      },
    ],
    keyVocabulary: [
      { word: 'longitudinal', definition: 'A study conducted over a long period of time, tracking the same subjects', turkish: 'uzunlamasina' },
      { word: 'proximity bias', definition: 'The tendency to favour workers who are physically present in the office over remote workers', turkish: 'yakinlik onyargisi' },
      { word: 'distributed workforce', definition: 'Employees who work from various locations rather than a single central office', turkish: 'dagitik is gucu' },
      { word: 'onboarding', definition: 'The process of integrating a new employee into an organization', turkish: 'ise alistirma' },
      { word: 'turnover', definition: 'The rate at which employees leave an organization and are replaced', turkish: 'personel degisim orani' },
      { word: 'mitigating', definition: 'Making something less severe, harmful, or painful', turkish: 'hafifletme' },
      { word: 'euphoria', definition: 'An intense feeling of happiness and excitement', turkish: 'coskulu mutluluk' },
    ],
  },

  // ============================================================
  // CLB 8 — OPINION: Immigration and Economic Growth
  // ============================================================
  {
    id: 'reading-immigration-economic-growth',
    title: 'Immigration and Economic Growth',
    description: 'Read a policy paper analyzing the relationship between immigration and Canada\'s economic performance.',
    passageType: 'opinion',
    clbLevel: 8,
    icon: '🌍',
    timeLimit: 480,
    passage:
      'Canada\'s immigration policy stands at a crossroads. After decades of bipartisan consensus that high levels of immigration are essential for economic prosperity, a growing body of evidence suggests that the relationship between immigration and economic growth is more complex than policymakers have acknowledged. This paper examines the evidence and argues that Canada needs a more strategic, data-driven approach to immigration — one that maximizes economic benefits while honestly confronting the challenges.\n\nThe macroeconomic case for immigration is straightforward. Canada\'s fertility rate has fallen to 1.33 children per woman, well below the 2.1 replacement level needed to maintain the population. Without immigration, the working-age population would begin shrinking by 2030, threatening the tax base that funds public services, pensions, and healthcare. In 2024, immigrants accounted for 100% of net labour force growth, a statistic that underscores the country\'s demographic dependence on newcomers.\n\nImmigrants also contribute to economic dynamism. Research by the C.D. Howe Institute found that immigrants are 30% more likely than Canadian-born individuals to start businesses. Between 2015 and 2023, immigrant-founded companies created approximately 680,000 jobs and generated over $42 billion in annual revenue. In the technology sector alone, immigrants hold founding or co-founding roles in 44% of Canadian startups valued at over $100 million.\n\nHowever, these aggregate figures obscure significant disparities in outcomes. Not all immigration streams produce equivalent economic results. Economic-class immigrants — those selected through programs like Express Entry based on skills, education, and language proficiency — tend to achieve earnings parity with Canadian-born workers within seven to ten years. By contrast, immigrants admitted through family reunification and humanitarian streams often face prolonged periods of underemployment and lower earnings, partly because their admission criteria prioritize factors other than labour market readiness.\n\nThe challenge of credential recognition deserves particular attention. A 2024 report by the Institute for Canadian Citizenship found that 28% of immigrants with professional qualifications — doctors, engineers, accountants — were working in jobs that did not require their level of education. This "brain waste" represents an enormous economic loss, estimated at $15 billion annually in forgone productivity. While federal and provincial governments have introduced streamlined credential recognition processes, progress has been uneven, and many professional regulatory bodies continue to impose barriers that critics describe as protectionist.\n\nHousing and infrastructure strain has also become a flashpoint. The absorption capacity of major cities — their ability to provide housing, transit, healthcare, and educational services to newcomers — has been outpaced by the volume of arrivals. This has contributed to public frustration and, in some cases, has fuelled anti-immigration sentiment that threatens the social license upon which Canada\'s immigration program depends.\n\nA more strategic approach would involve several elements. First, immigration targets should be calibrated to regional absorption capacity rather than set at arbitrary national levels. Second, greater emphasis should be placed on economic-class immigration, particularly in sectors with documented labour shortages. Third, the credential recognition system requires comprehensive reform to ensure that skilled immigrants can contribute at their full potential. Finally, federal transfers to provinces and municipalities must be increased to fund the infrastructure and services that growing populations require.\n\nCanada\'s immigration program remains one of the most successful in the world. But success is not guaranteed by volume alone. A program that admits more people than the country can effectively integrate does a disservice to both newcomers and the communities that receive them. The goal should not be more immigration or less immigration, but better immigration — a system designed to serve the long-term interests of both Canada and those who choose to make it their home.',
    questions: [
      {
        id: 'reading-immigration-economic-growth-q1',
        question: 'What is the author\'s main position on Canada\'s immigration policy?',
        options: [
          'Immigration levels should be dramatically reduced to solve the housing crisis',
          'Canada needs a more strategic, data-driven approach that maximizes benefits while addressing challenges',
          'The current immigration system is working perfectly and should not be changed',
          'Canada should eliminate economic-class immigration in favour of humanitarian admissions',
        ],
        correctIndex: 1,
        explanation:
          'The author argues that "Canada needs a more strategic, data-driven approach to immigration — one that maximizes economic benefits while honestly confronting the challenges."',
      },
      {
        id: 'reading-immigration-economic-growth-q2',
        question: 'What demographic statistic does the author use to support the case for immigration?',
        options: [
          'Canada\'s population is growing too fast without immigration',
          'Immigrants accounted for 100% of net labour force growth in 2024',
          'The average age of Canadian workers has decreased due to immigration',
          'More Canadians are emigrating than immigrating each year',
        ],
        correctIndex: 1,
        explanation:
          'The article states that "in 2024, immigrants accounted for 100% of net labour force growth, a statistic that underscores the country\'s demographic dependence on newcomers."',
      },
      {
        id: 'reading-immigration-economic-growth-q3',
        question: 'What is "brain waste" as described in the article?',
        options: [
          'The loss of Canadian-born talent to other countries',
          'The economic inefficiency when skilled immigrants work in jobs below their qualification level',
          'The failure of universities to produce graduates in high-demand fields',
          'The cost of providing education to immigrants who later leave Canada',
        ],
        correctIndex: 1,
        explanation:
          'The article describes brain waste as the situation where "28% of immigrants with professional qualifications were working in jobs that did not require their level of education," representing "$15 billion annually in forgone productivity."',
      },
      {
        id: 'reading-immigration-economic-growth-q4',
        question: 'What difference does the author identify between immigration streams?',
        options: [
          'Family reunification immigrants learn English faster than economic-class immigrants',
          'Economic-class immigrants achieve earnings parity faster, while family and humanitarian immigrants face longer periods of underemployment',
          'Humanitarian immigrants start more businesses than economic-class immigrants',
          'All immigration streams produce identical economic outcomes over time',
        ],
        correctIndex: 1,
        explanation:
          'The article distinguishes between economic-class immigrants who "achieve earnings parity within seven to ten years" and those from family/humanitarian streams who "often face prolonged periods of underemployment and lower earnings."',
      },
      {
        id: 'reading-immigration-economic-growth-q5',
        question: 'What does the author mean by "social license" in the context of immigration?',
        options: [
          'A government permit required for immigrants to work in Canada',
          'The public support and acceptance upon which the immigration program depends',
          'A legal document that grants permanent residency status',
          'An agreement between provinces to share the costs of immigration',
        ],
        correctIndex: 1,
        explanation:
          'The author uses "social license" to refer to the broad public acceptance and support that sustains Canada\'s immigration program, warning that infrastructure strain and public frustration could threaten this consensus.',
      },
    ],
    keyVocabulary: [
      { word: 'demographic', definition: 'Relating to the statistical study of populations and their characteristics', turkish: 'demografik' },
      { word: 'credential recognition', definition: 'The process of evaluating and accepting foreign qualifications and professional certifications', turkish: 'yeterlilik tanima' },
      { word: 'absorption capacity', definition: 'The ability of a city or region to accommodate and integrate new arrivals', turkish: 'emilim kapasitesi' },
      { word: 'bipartisan', definition: 'Supported by or involving two political parties or groups', turkish: 'iki partili' },
      { word: 'earnings parity', definition: 'Achieving an equal level of income compared to a reference group', turkish: 'gelir esitligi' },
      { word: 'protectionist', definition: 'Favouring restrictions that protect existing groups from outside competition', turkish: 'korumaci' },
      { word: 'forgone', definition: 'Lost or given up as a result of a decision or circumstance', turkish: 'vazgecilmis' },
    ],
  },
];
