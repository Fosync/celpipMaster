import type { ListeningScript } from './types';

export const newListeningScriptsB: ListeningScript[] = [
  // ============================================================
  // CLB 6 — Script 15: Workplace Fire Safety Announcement (Announcement)
  // ============================================================
  {
    id: 'listening-fire-safety',
    title: 'Workplace Fire Safety Announcement',
    description:
      'Listen to a safety coordinator announce fire safety procedures, evacuation routes, and emergency protocols for a Canadian office building.',
    format: 'announcement',
    clbLevel: 6,
    icon: '\u{1F525}',
    timeLimit: 200,
    segments: [
      {
        speaker: 'Safety Coordinator',
        text: 'Good morning, everyone. This is your safety coordinator, Kevin Muller. I would like to take a few minutes to go over the updated fire safety procedures for our office. These procedures apply to all employees on the third and fourth floors of the Harbour Centre building. Please pay close attention, as some of the details have changed since last year.',
        voiceGender: 'male',
      },
      {
        speaker: 'Safety Coordinator',
        text: 'In the event of a fire alarm, please stop whatever you are doing immediately and proceed to the nearest emergency exit. On the third floor, the primary exit is the stairwell at the east end of the hallway, next to the boardroom. On the fourth floor, use the stairwell located beside the kitchen area. Do not use the elevators under any circumstances during a fire emergency.',
        voiceGender: 'male',
      },
      {
        speaker: 'Safety Coordinator',
        text: 'Once you have exited the building, make your way to the designated assembly point, which is the parking lot on the north side of Lakeshore Boulevard. Your floor warden will take attendance to make sure everyone has been accounted for. Please do not re-enter the building until you receive the all-clear signal from the fire department.',
        voiceGender: 'male',
      },
      {
        speaker: 'Safety Coordinator',
        text: 'I also want to remind you about the locations of fire extinguishers. On each floor, there are two fire extinguishers: one near the main entrance to the office and one beside the emergency exit stairwell. These extinguishers are inspected every six months. If you notice one that appears damaged or missing, please report it to the facilities team immediately.',
        voiceGender: 'male',
      },
      {
        speaker: 'Safety Coordinator',
        text: 'We will be conducting a mandatory fire drill on Wednesday, March twelfth, at ten o\'clock in the morning. All employees must participate. The drill should take approximately fifteen minutes. Managers, please ensure your teams are aware of this date and have reviewed the evacuation map posted near each exit.',
        voiceGender: 'male',
      },
      {
        speaker: 'Safety Coordinator',
        text: 'Finally, if you have any questions about fire safety or emergency procedures, please contact me directly at extension 4502, or email safety@harbourcentre.ca. In a real emergency, always call 911 first. Thank you for your attention, and let us all work together to keep our workplace safe.',
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'fs-q1',
        question: 'Where is the primary emergency exit on the third floor?',
        options: [
          'Next to the kitchen area',
          'At the east end of the hallway, next to the boardroom',
          'Beside the main entrance',
          'Near the parking lot on the north side',
        ],
        correctIndex: 1,
        explanation:
          'The safety coordinator stated that on the third floor, "the primary exit is the stairwell at the east end of the hallway, next to the boardroom."',
      },
      {
        id: 'fs-q2',
        question: 'Where is the designated assembly point?',
        options: [
          'The lobby of the Harbour Centre building',
          'The sidewalk on the south side of the building',
          'The parking lot on the north side of Lakeshore Boulevard',
          'The park across the street',
        ],
        correctIndex: 2,
        explanation:
          'The coordinator said the assembly point is "the parking lot on the north side of Lakeshore Boulevard."',
      },
      {
        id: 'fs-q3',
        question: 'How often are fire extinguishers inspected?',
        options: [
          'Every three months',
          'Every six months',
          'Once a year',
          'Every two years',
        ],
        correctIndex: 1,
        explanation:
          'The coordinator mentioned that the fire extinguishers "are inspected every six months."',
      },
      {
        id: 'fs-q4',
        question: 'When is the mandatory fire drill scheduled?',
        options: [
          'Monday, March tenth, at nine o\'clock',
          'Tuesday, March eleventh, at eleven o\'clock',
          'Wednesday, March twelfth, at ten o\'clock',
          'Thursday, March thirteenth, at two o\'clock',
        ],
        correctIndex: 2,
        explanation:
          'The coordinator announced the fire drill will take place "on Wednesday, March twelfth, at ten o\'clock in the morning."',
      },
      {
        id: 'fs-q5',
        question: 'How many fire extinguishers are on each floor?',
        options: [
          'One',
          'Two',
          'Three',
          'Four',
        ],
        correctIndex: 1,
        explanation:
          'The coordinator said "on each floor, there are two fire extinguishers."',
      },
      {
        id: 'fs-q6',
        question: 'What should employees do if they notice a damaged or missing fire extinguisher?',
        options: [
          'Replace it themselves',
          'Call 911 immediately',
          'Report it to the facilities team',
          'Notify the fire department',
        ],
        correctIndex: 2,
        explanation:
          'The coordinator instructed employees to "report it to the facilities team immediately" if a fire extinguisher appears damaged or missing.',
      },
    ],
    keyVocabulary: [
      {
        word: 'evacuation',
        definition: 'The process of leaving a building or area quickly due to an emergency.',
        turkish: 'tahliye',
      },
      {
        word: 'assembly point',
        definition: 'A designated location where people gather after evacuating a building.',
        turkish: 'toplanma noktasi',
      },
      {
        word: 'fire extinguisher',
        definition: 'A portable device used to put out small fires.',
        turkish: 'yangin sondurucu',
      },
      {
        word: 'drill',
        definition: 'A practice exercise to prepare people for an emergency situation.',
        turkish: 'tatbikat',
      },
      {
        word: 'emergency exit',
        definition: 'A door or route specifically designated for use during emergencies.',
        turkish: 'acil cikis',
      },
    ],
  },

  // ============================================================
  // CLB 5 — Script 16: Gym Membership Options (Dialogue)
  // ============================================================
  {
    id: 'listening-gym-membership',
    title: 'Gym Membership Options',
    description:
      'Listen to a conversation between a visitor and a gym staff member about membership plans, facilities, and pricing.',
    format: 'dialogue',
    clbLevel: 5,
    icon: '\u{1F3CB}\u{FE0F}',
    timeLimit: 180,
    segments: [
      {
        speaker: 'Visitor',
        text: 'Hi there. I just moved to the neighbourhood and I am looking for a gym to join. Could you tell me about your membership options?',
        voiceGender: 'female',
      },
      {
        speaker: 'Staff Member',
        text: 'Welcome! We would be happy to help. We have two main membership plans. The Basic plan is forty-nine dollars a month, and the Premium plan is seventy-nine dollars a month. Both give you full access to our weight room and cardio area.',
        voiceGender: 'male',
      },
      {
        speaker: 'Visitor',
        text: 'What is the difference between the two plans?',
        voiceGender: 'female',
      },
      {
        speaker: 'Staff Member',
        text: 'The Premium plan includes access to our swimming pool, sauna, and all group fitness classes such as yoga, spinning, and kickboxing. With the Basic plan, you can use the pool and sauna, but group classes would cost an extra ten dollars per session.',
        voiceGender: 'male',
      },
      {
        speaker: 'Visitor',
        text: 'I see. Is there a discount if I pay for a full year upfront?',
        voiceGender: 'female',
      },
      {
        speaker: 'Staff Member',
        text: 'Yes, absolutely. If you choose the annual payment option, you save fifteen percent. So the Basic plan comes to about four hundred and ninety-nine dollars per year, and the Premium plan is about eight hundred and five dollars per year. That works out to quite a bit of savings over twelve months.',
        voiceGender: 'male',
      },
      {
        speaker: 'Visitor',
        text: 'That sounds reasonable. Do you offer a trial period so I can try it out before committing?',
        voiceGender: 'female',
      },
      {
        speaker: 'Staff Member',
        text: 'We do. We offer a seven-day free trial for new members. You get full access to everything, including the pool, sauna, and all group classes. There is no obligation to sign up after the trial ends.',
        voiceGender: 'male',
      },
      {
        speaker: 'Visitor',
        text: 'Perfect. And what is your cancellation policy? I want to make sure I am not locked into a long contract.',
        voiceGender: 'female',
      },
      {
        speaker: 'Staff Member',
        text: 'For the monthly plan, you can cancel anytime with thirty days\' notice. For the annual plan, you can cancel within the first sixty days for a full refund. After that, we offer a prorated refund for the remaining months. We also offer a freeze option if you need to pause your membership for up to three months.',
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'gm-q1',
        question: 'How much does the Basic monthly membership cost?',
        options: [
          'Thirty-nine dollars',
          'Forty-nine dollars',
          'Fifty-nine dollars',
          'Seventy-nine dollars',
        ],
        correctIndex: 1,
        explanation:
          'The staff member said "the Basic plan is forty-nine dollars a month."',
      },
      {
        id: 'gm-q2',
        question: 'What additional facilities does the Premium plan include?',
        options: [
          'A personal trainer and nutrition counselling',
          'Access to the swimming pool, sauna, and all group fitness classes',
          'Free parking and a locker room',
          'Unlimited towel service and a smoothie bar',
        ],
        correctIndex: 1,
        explanation:
          'The staff member explained that "the Premium plan includes access to our swimming pool, sauna, and all group fitness classes."',
      },
      {
        id: 'gm-q3',
        question: 'How much do you save by paying annually?',
        options: [
          'Ten percent',
          'Fifteen percent',
          'Twenty percent',
          'Twenty-five percent',
        ],
        correctIndex: 1,
        explanation:
          'The staff member said "if you choose the annual payment option, you save fifteen percent."',
      },
      {
        id: 'gm-q4',
        question: 'How long is the free trial period?',
        options: [
          'Three days',
          'Five days',
          'Seven days',
          'Fourteen days',
        ],
        correctIndex: 2,
        explanation:
          'The staff member offered "a seven-day free trial for new members."',
      },
      {
        id: 'gm-q5',
        question: 'What is the cancellation policy for the monthly plan?',
        options: [
          'Cancel anytime with no notice required',
          'Cancel anytime with thirty days\' notice',
          'Cancel only after three months',
          'No cancellation is allowed on the monthly plan',
        ],
        correctIndex: 1,
        explanation:
          'The staff member said "for the monthly plan, you can cancel anytime with thirty days\' notice."',
      },
      {
        id: 'gm-q6',
        question: 'How long can members freeze their membership?',
        options: [
          'Up to one month',
          'Up to two months',
          'Up to three months',
          'Up to six months',
        ],
        correctIndex: 2,
        explanation:
          'The staff member mentioned "a freeze option if you need to pause your membership for up to three months."',
      },
    ],
    keyVocabulary: [
      {
        word: 'membership',
        definition: 'The state of belonging to an organization, often requiring a fee.',
        turkish: 'uyelik',
      },
      {
        word: 'facility',
        definition: 'A place, amenity, or piece of equipment provided for a particular purpose.',
        turkish: 'tesis',
      },
      {
        word: 'trial period',
        definition: 'A limited time during which a service can be tested before committing.',
        turkish: 'deneme suresi',
      },
      {
        word: 'cancellation',
        definition: 'The act of ending or withdrawing from a service or agreement.',
        turkish: 'iptal',
      },
      {
        word: 'personal trainer',
        definition: 'A fitness professional who creates customized exercise programmes for individuals.',
        turkish: 'kisisel antrenor',
      },
    ],
  },

  // ============================================================
  // CLB 7 — Script 17: Debating Whether to Adopt a Pet (Dialogue)
  // ============================================================
  {
    id: 'listening-adopt-pet',
    title: 'Debating Whether to Adopt a Pet',
    description:
      'Listen to two friends discuss the pros and cons of adopting a pet, including costs, lifestyle changes, and where to get one.',
    format: 'dialogue',
    clbLevel: 7,
    icon: '\u{1F43E}',
    timeLimit: 240,
    segments: [
      {
        speaker: 'Maya',
        text: 'I have been thinking about getting a dog for a while now. I visited the Humane Society last weekend and there were so many adorable animals looking for homes. There was this one golden retriever mix that just stole my heart.',
        voiceGender: 'female',
      },
      {
        speaker: 'James',
        text: 'That is a big decision, Maya. I know you love animals, but have you really thought about all the responsibility that comes with it? Dogs need walks every day, rain or shine. And in the winter here, that means bundling up and going out in minus twenty.',
        voiceGender: 'male',
      },
      {
        speaker: 'Maya',
        text: 'I know, I know. But honestly, I think it would be good for me. I have been wanting to be more active, and having a dog would give me a reason to go outside every day. Plus, I work from home most days, so the dog would not be alone for long stretches.',
        voiceGender: 'female',
      },
      {
        speaker: 'James',
        text: 'That is fair. But what about the costs? Veterinarian bills can be quite expensive. Even a routine checkup can cost two hundred dollars, and if the dog gets sick or needs surgery, you could be looking at thousands. Have you looked into pet insurance?',
        voiceGender: 'male',
      },
      {
        speaker: 'Maya',
        text: 'I have, actually. There are a few plans that cover about eighty percent of vet costs for around fifty dollars a month. And I have already budgeted about one hundred and fifty dollars a month for food, treats, and supplies. I think I can manage it financially.',
        voiceGender: 'female',
      },
      {
        speaker: 'James',
        text: 'Okay, that is more thought out than I expected. But what about your apartment? Does your building even allow pets? A lot of landlords in the city charge a pet deposit or have breed restrictions. You should check your lease agreement carefully.',
        voiceGender: 'male',
      },
      {
        speaker: 'Maya',
        text: 'I already spoke to my landlord about it. The building does allow dogs, but there is a one-time pet deposit of three hundred dollars and a monthly pet fee of twenty-five dollars. No breed restrictions, thankfully, as long as the dog is under thirty kilograms.',
        voiceGender: 'female',
      },
      {
        speaker: 'James',
        text: 'Well, it sounds like you have done your homework. One more thing, though — have you considered whether anyone in the building might have allergies? And what happens when you want to travel? Boarding a dog can cost forty to sixty dollars a night.',
        voiceGender: 'male',
      },
      {
        speaker: 'Maya',
        text: 'My neighbour actually has two dogs, so allergies are not really an issue in my building. As for travel, my sister lives nearby and she already offered to dog-sit whenever I go away. So that is covered too.',
        voiceGender: 'female',
      },
      {
        speaker: 'James',
        text: 'All right, I have to admit, you have a solid plan. And I do think adopting from a shelter is the right choice rather than buying from a breeder. Shelter dogs really deserve a second chance, and the adoption fees are much more reasonable — usually around two hundred to three hundred dollars, which typically includes vaccinations and spaying or neutering.',
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'ap-q1',
        question: 'Where did Maya visit to look at animals?',
        options: [
          'A pet store downtown',
          'A private breeder in Brampton',
          'The Humane Society',
          'A veterinary clinic',
        ],
        correctIndex: 2,
        explanation:
          'Maya said, "I visited the Humane Society last weekend."',
      },
      {
        id: 'ap-q2',
        question: 'How much does a routine veterinary checkup cost, according to James?',
        options: [
          'About one hundred dollars',
          'About one hundred and fifty dollars',
          'About two hundred dollars',
          'About three hundred dollars',
        ],
        correctIndex: 2,
        explanation:
          'James said "even a routine checkup can cost two hundred dollars."',
      },
      {
        id: 'ap-q3',
        question: 'How much has Maya budgeted per month for food, treats, and supplies?',
        options: [
          'About seventy-five dollars',
          'About one hundred dollars',
          'About one hundred and fifty dollars',
          'About two hundred dollars',
        ],
        correctIndex: 2,
        explanation:
          'Maya said she has "already budgeted about one hundred and fifty dollars a month for food, treats, and supplies."',
      },
      {
        id: 'ap-q4',
        question: 'How much is the one-time pet deposit required by Maya\'s building?',
        options: [
          'One hundred and fifty dollars',
          'Two hundred dollars',
          'Three hundred dollars',
          'Five hundred dollars',
        ],
        correctIndex: 2,
        explanation:
          'Maya mentioned "a one-time pet deposit of three hundred dollars."',
      },
      {
        id: 'ap-q5',
        question: 'Who has offered to dog-sit when Maya travels?',
        options: [
          'Her neighbour',
          'Her coworker',
          'Her sister',
          'A professional boarding service',
        ],
        correctIndex: 2,
        explanation:
          'Maya said "my sister lives nearby and she already offered to dog-sit whenever I go away."',
      },
      {
        id: 'ap-q6',
        question: 'What is the typical adoption fee at a shelter, according to James?',
        options: [
          'Fifty to one hundred dollars',
          'One hundred to two hundred dollars',
          'Two hundred to three hundred dollars',
          'Four hundred to five hundred dollars',
        ],
        correctIndex: 2,
        explanation:
          'James said "the adoption fees are much more reasonable — usually around two hundred to three hundred dollars."',
      },
      {
        id: 'ap-q7',
        question: 'What weight limit does Maya\'s building have for dogs?',
        options: [
          'Under fifteen kilograms',
          'Under twenty kilograms',
          'Under thirty kilograms',
          'Under forty kilograms',
        ],
        correctIndex: 2,
        explanation:
          'Maya said the building allows dogs "as long as the dog is under thirty kilograms."',
      },
    ],
    keyVocabulary: [
      {
        word: 'adoption',
        definition: 'The act of taking an animal from a shelter or rescue and giving it a permanent home.',
        turkish: 'evlat edinme',
      },
      {
        word: 'shelter',
        definition: 'A facility that houses and cares for homeless or abandoned animals.',
        turkish: 'barinma evi',
      },
      {
        word: 'veterinarian',
        definition: 'A doctor who specializes in the medical treatment of animals.',
        turkish: 'veteriner',
      },
      {
        word: 'allergies',
        definition: 'Negative physical reactions to certain substances, such as animal fur or dander.',
        turkish: 'alerjiler',
      },
      {
        word: 'pet deposit',
        definition: 'A one-time fee paid to a landlord to cover potential damage caused by a pet.',
        turkish: 'evcil hayvan depoziti',
      },
    ],
  },

  // ============================================================
  // CLB 7 — Script 18: Discussing Flexible Work Hours Policy (Dialogue)
  // ============================================================
  {
    id: 'listening-flexible-hours',
    title: 'Discussing Flexible Work Hours Policy',
    description:
      'Listen to two coworkers discuss the advantages and disadvantages of a new flexible work hours policy at their company.',
    format: 'dialogue',
    clbLevel: 7,
    icon: '\u{23F0}',
    timeLimit: 240,
    segments: [
      {
        speaker: 'Sarah',
        text: 'Did you see the email from HR this morning? They are rolling out a new flexible work hours policy starting next month. Instead of the standard nine-to-five, employees can choose their own start and end times as long as they complete eight hours a day.',
        voiceGender: 'female',
      },
      {
        speaker: 'David',
        text: 'Yes, I read it. To be honest, I have mixed feelings about it. I mean, the idea sounds great in theory, but I can already imagine the scheduling headaches. How are we supposed to set up team meetings if everyone is on a different schedule?',
        voiceGender: 'male',
      },
      {
        speaker: 'Sarah',
        text: 'That is a valid concern, but the policy does mention core hours. Everyone has to be available between ten in the morning and two in the afternoon. So that gives us a four-hour window every day to schedule meetings and collaborate. Outside of those hours, people can work whenever they want.',
        voiceGender: 'female',
      },
      {
        speaker: 'David',
        text: 'Four hours is not a lot, though. Some of our project discussions take more than an hour, and if we have multiple meetings, that window fills up quickly. I worry about losing the spontaneous collaboration that happens when everyone is in the office at the same time.',
        voiceGender: 'male',
      },
      {
        speaker: 'Sarah',
        text: 'I understand, but think about the benefits. For me, being able to start at seven in the morning and finish at three would be a game changer. I could pick up my kids from school without rushing or asking someone else to do it. The work-life balance improvement would be enormous.',
        voiceGender: 'female',
      },
      {
        speaker: 'David',
        text: 'I get that, and I know the commute situation is another big factor. If people can avoid rush hour, they save a lot of time and stress. My drive takes forty-five minutes during peak hours, but it is only twenty minutes if I leave before seven-thirty or after nine-thirty.',
        voiceGender: 'male',
      },
      {
        speaker: 'Sarah',
        text: 'Exactly. And there is research showing that flexible schedules actually improve productivity. A study from a company in Vancouver found that after they introduced flexible hours, employee output went up by about twelve percent, and absenteeism dropped by nearly a third. People were happier and more focused during their working hours.',
        voiceGender: 'female',
      },
      {
        speaker: 'David',
        text: 'Those numbers are impressive. But I have also heard about companies where flexible hours led to less team cohesion. People felt disconnected from their colleagues because they rarely saw each other face to face. A tech firm in Calgary tried it and ended up going back to fixed hours after eight months because of communication breakdowns.',
        voiceGender: 'male',
      },
      {
        speaker: 'Sarah',
        text: 'That is true, but I think the core hours model our company is using addresses that. It is not fully flexible — there is still a structured overlap. Plus, they mentioned in the email that managers will review how it is going after a ninety-day trial period. If it is not working, they can adjust the policy.',
        voiceGender: 'female',
      },
      {
        speaker: 'David',
        text: 'A trial period is a smart approach. I suppose I am cautiously optimistic. If the core hours really do keep the team connected and the ninety-day review shows positive results, I could definitely get behind this. I just want to make sure productivity does not suffer and that no one ends up feeling isolated from the rest of the team.',
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'fh-q1',
        question: 'What are the core hours that all employees must be available?',
        options: [
          'Nine in the morning to one in the afternoon',
          'Ten in the morning to two in the afternoon',
          'Eleven in the morning to three in the afternoon',
          'Eight in the morning to twelve noon',
        ],
        correctIndex: 1,
        explanation:
          'Sarah explained that "everyone has to be available between ten in the morning and two in the afternoon."',
      },
      {
        id: 'fh-q2',
        question: 'How long is David\'s commute during peak hours?',
        options: [
          'Twenty minutes',
          'Thirty minutes',
          'Forty-five minutes',
          'One hour',
        ],
        correctIndex: 2,
        explanation:
          'David said "my drive takes forty-five minutes during peak hours."',
      },
      {
        id: 'fh-q3',
        question: 'According to Sarah, by how much did employee output increase at the Vancouver company?',
        options: [
          'About eight percent',
          'About ten percent',
          'About twelve percent',
          'About fifteen percent',
        ],
        correctIndex: 2,
        explanation:
          'Sarah cited a study showing "employee output went up by about twelve percent."',
      },
      {
        id: 'fh-q4',
        question: 'What happened at the tech firm in Calgary that David mentioned?',
        options: [
          'They expanded flexible hours to include weekends',
          'They went back to fixed hours after eight months',
          'They reduced working hours to six per day',
          'They moved to a fully remote work model',
        ],
        correctIndex: 1,
        explanation:
          'David said "a tech firm in Calgary tried it and ended up going back to fixed hours after eight months because of communication breakdowns."',
      },
      {
        id: 'fh-q5',
        question: 'How long is the trial period for the new policy?',
        options: [
          'Thirty days',
          'Sixty days',
          'Ninety days',
          'Six months',
        ],
        correctIndex: 2,
        explanation:
          'Sarah mentioned that "managers will review how it is going after a ninety-day trial period."',
      },
      {
        id: 'fh-q6',
        question: 'What benefit does Sarah mention for her personal life?',
        options: [
          'She could work from home on Fridays',
          'She could take a longer lunch break',
          'She could pick up her kids from school without rushing',
          'She could avoid working on weekends',
        ],
        correctIndex: 2,
        explanation:
          'Sarah said being able to finish early means "I could pick up my kids from school without rushing or asking someone else to do it."',
      },
      {
        id: 'fh-q7',
        question: 'By how much did absenteeism drop at the Vancouver company, according to Sarah?',
        options: [
          'By about ten percent',
          'By about a quarter',
          'By nearly a third',
          'By nearly half',
        ],
        correctIndex: 2,
        explanation:
          'Sarah said "absenteeism dropped by nearly a third" after the company introduced flexible hours.',
      },
    ],
    keyVocabulary: [
      {
        word: 'core hours',
        definition: 'A set period during the workday when all employees must be present or available.',
        turkish: 'zorunlu calisma saatleri',
      },
      {
        word: 'flexible schedule',
        definition: 'A work arrangement that allows employees to choose their start and end times.',
        turkish: 'esnek calisma programi',
      },
      {
        word: 'productivity',
        definition: 'The rate at which work is completed or output is produced.',
        turkish: 'verimlilik',
      },
      {
        word: 'work-life balance',
        definition: 'The ability to divide time and energy between work and personal activities.',
        turkish: 'is-yasam dengesi',
      },
      {
        word: 'commute',
        definition: 'The regular journey between home and workplace.',
        turkish: 'ise gidip gelme',
      },
    ],
  },
];
