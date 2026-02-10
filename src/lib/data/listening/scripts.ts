import type { ListeningScript } from './types';
import { newListeningScriptsA } from './new-scripts-a';
import { newListeningScriptsB } from './new-scripts-b';
import { newListeningScriptsC } from './new-scripts-c';
import { newListeningScriptsD } from './new-scripts-d';

const existingScripts: ListeningScript[] = [
  // ============================================================
  // CLB 5 — Script 1: Weather Forecast (Monologue)
  // ============================================================
  {
    id: 'listening-weather-report',
    title: 'Weather Forecast',
    description:
      'Listen to a weather forecast for the upcoming week in Canada and answer questions about the expected conditions.',
    format: 'monologue',
    clbLevel: 5,
    icon: '🌤️',
    timeLimit: 180,
    segments: [
      {
        speaker: 'Narrator',
        text: 'Good morning, everyone. Here is your weekly weather forecast for the Greater Toronto Area. Today, Monday, expect clear skies with a high of twelve degrees Celsius. Winds will be light, coming from the southwest at about ten kilometres per hour.',
        voiceGender: 'female',
      },
      {
        speaker: 'Narrator',
        text: 'On Tuesday and Wednesday, temperatures will drop slightly to around eight degrees. There is a sixty percent chance of rain on Wednesday afternoon, so make sure to bring an umbrella if you are heading out.',
        voiceGender: 'female',
      },
      {
        speaker: 'Narrator',
        text: 'Thursday and Friday look much better. We are expecting sunshine with highs near fifteen degrees. These will be great days to enjoy the parks or take a walk along the waterfront.',
        voiceGender: 'female',
      },
      {
        speaker: 'Narrator',
        text: 'Looking ahead to the weekend, Saturday will be partly cloudy with a high of eleven degrees. Sunday may bring some light showers in the evening, but most of the day should stay dry. That is your forecast — have a wonderful week!',
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'wr-q1',
        question: 'What is the expected high temperature on Monday?',
        options: [
          'Eight degrees Celsius',
          'Ten degrees Celsius',
          'Twelve degrees Celsius',
          'Fifteen degrees Celsius',
        ],
        correctIndex: 2,
        explanation:
          'The narrator stated that Monday would have "a high of twelve degrees Celsius."',
      },
      {
        id: 'wr-q2',
        question: 'When is rain most likely during the week?',
        options: [
          'Monday morning',
          'Tuesday evening',
          'Wednesday afternoon',
          'Friday afternoon',
        ],
        correctIndex: 2,
        explanation:
          'The narrator mentioned "a sixty percent chance of rain on Wednesday afternoon."',
      },
      {
        id: 'wr-q3',
        question: 'Which days are recommended for outdoor activities?',
        options: [
          'Monday and Tuesday',
          'Tuesday and Wednesday',
          'Thursday and Friday',
          'Saturday and Sunday',
        ],
        correctIndex: 2,
        explanation:
          'The narrator said Thursday and Friday would be "great days to enjoy the parks or take a walk along the waterfront."',
      },
      {
        id: 'wr-q4',
        question: 'What is the weather expected to be like on Saturday?',
        options: [
          'Sunny and warm',
          'Partly cloudy with a high of eleven degrees',
          'Heavy rain all day',
          'Snowy with cold winds',
        ],
        correctIndex: 1,
        explanation:
          'The narrator described Saturday as "partly cloudy with a high of eleven degrees."',
      },
      {
        id: 'wr-q5',
        question: 'What direction are the winds coming from on Monday?',
        options: ['Northwest', 'Northeast', 'Southwest', 'Southeast'],
        correctIndex: 2,
        explanation:
          'The narrator mentioned winds "coming from the southwest at about ten kilometres per hour."',
      },
    ],
  },

  // ============================================================
  // CLB 5 — Script 2: Store Return Policy (Dialogue)
  // ============================================================
  {
    id: 'listening-store-return',
    title: 'Store Return Policy',
    description:
      'Listen to a conversation between a customer and a store clerk about returning a purchased item.',
    format: 'dialogue',
    clbLevel: 5,
    icon: '🛍️',
    timeLimit: 180,
    segments: [
      {
        speaker: 'Customer',
        text: 'Hi there. I bought this jacket last week, but it does not fit properly. I was hoping I could return it or exchange it for a different size.',
        voiceGender: 'female',
      },
      {
        speaker: 'Store Clerk',
        text: 'Of course, I can help you with that. Do you have your receipt with you? We need the original receipt for all returns and exchanges.',
        voiceGender: 'male',
      },
      {
        speaker: 'Customer',
        text: 'Yes, here it is. I paid with my debit card. The jacket was on sale for forty-five dollars.',
        voiceGender: 'female',
      },
      {
        speaker: 'Store Clerk',
        text: 'Thank you. I see that you purchased it six days ago. Our return policy allows returns within thirty days, so you are well within the time frame. Since it was a sale item, I can offer you a store credit or an exchange, but not a cash refund.',
        voiceGender: 'male',
      },
      {
        speaker: 'Customer',
        text: 'An exchange would be perfect. Do you have this jacket in a medium? I bought a small, but I think medium would be a better fit.',
        voiceGender: 'female',
      },
      {
        speaker: 'Store Clerk',
        text: 'Let me check in the back for you. We got a new shipment yesterday, so we should have more sizes available. Just give me a moment.',
        voiceGender: 'male',
      },
      {
        speaker: 'Customer',
        text: 'Sure, take your time. Also, if you have it in blue instead of black, I would prefer that colour.',
        voiceGender: 'female',
      },
      {
        speaker: 'Store Clerk',
        text: 'Great news — I found a medium in blue. Here you go. Since both jackets are the same price, the exchange is straightforward. I will just update your receipt.',
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'sr-q1',
        question: 'Why does the customer want to return the jacket?',
        options: [
          'It is damaged',
          'It does not fit properly',
          'She does not like the colour',
          'It was too expensive',
        ],
        correctIndex: 1,
        explanation:
          'The customer said the jacket "does not fit properly" and she wants to exchange it for a different size.',
      },
      {
        id: 'sr-q2',
        question: 'How much did the customer pay for the jacket?',
        options: [
          'Thirty dollars',
          'Thirty-five dollars',
          'Forty dollars',
          'Forty-five dollars',
        ],
        correctIndex: 3,
        explanation:
          'The customer stated "the jacket was on sale for forty-five dollars."',
      },
      {
        id: 'sr-q3',
        question:
          'Why can the customer not get a cash refund?',
        options: [
          'She lost the receipt',
          'The return period has expired',
          'The jacket was a sale item',
          'The jacket is damaged',
        ],
        correctIndex: 2,
        explanation:
          'The store clerk explained that "since it was a sale item," only a store credit or exchange is available, not a cash refund.',
      },
      {
        id: 'sr-q4',
        question: 'What size does the customer want to exchange for?',
        options: ['Extra-small', 'Small', 'Medium', 'Large'],
        correctIndex: 2,
        explanation:
          'The customer asked, "Do you have this jacket in a medium?" since the small did not fit.',
      },
      {
        id: 'sr-q5',
        question: 'What colour does the customer prefer?',
        options: ['Black', 'Blue', 'Red', 'Grey'],
        correctIndex: 1,
        explanation:
          'The customer said, "if you have it in blue instead of black, I would prefer that colour."',
      },
    ],
  },

  // ============================================================
  // CLB 5 — Script 3: Bus Route Announcement (Announcement)
  // ============================================================
  {
    id: 'listening-bus-announcement',
    title: 'Bus Route Announcement',
    description:
      'Listen to a public transit announcement about changes to bus routes and answer questions about the new schedule.',
    format: 'announcement',
    clbLevel: 5,
    icon: '🚌',
    timeLimit: 150,
    segments: [
      {
        speaker: 'Narrator',
        text: 'Attention all transit riders. Starting next Monday, February sixteenth, there will be important changes to several bus routes in the downtown area. Please listen carefully for details that may affect your daily commute.',
        voiceGender: 'female',
      },
      {
        speaker: 'Narrator',
        text: 'Route 42, which currently runs along King Street, will be rerouted to Queen Street due to ongoing construction. The new route will add approximately five minutes to your travel time. All regular stops between Main Station and City Hall will remain the same.',
        voiceGender: 'female',
      },
      {
        speaker: 'Narrator',
        text: 'Route 15 will have increased service during morning rush hours. Buses will now arrive every eight minutes instead of every twelve minutes between six-thirty and nine in the morning. Evening service will remain unchanged.',
        voiceGender: 'female',
      },
      {
        speaker: 'Narrator',
        text: 'For more information about these changes, please visit our website at citybus.ca or call our customer service line at 1-800-555-0199. Updated schedules are also available at all major transit stations. Thank you for choosing public transit.',
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'ba-q1',
        question: 'When do the new bus route changes take effect?',
        options: [
          'This Friday',
          'Next Monday, February sixteenth',
          'Next Wednesday',
          'At the end of the month',
        ],
        correctIndex: 1,
        explanation:
          'The announcement stated the changes start "next Monday, February sixteenth."',
      },
      {
        id: 'ba-q2',
        question: 'Why is Route 42 being rerouted?',
        options: [
          'A special event downtown',
          'Road flooding',
          'Ongoing construction on King Street',
          'A new bus station is being built',
        ],
        correctIndex: 2,
        explanation:
          'The narrator explained Route 42 will be rerouted "due to ongoing construction" on King Street.',
      },
      {
        id: 'ba-q3',
        question:
          'How often will Route 15 buses arrive during morning rush hours under the new schedule?',
        options: [
          'Every five minutes',
          'Every eight minutes',
          'Every ten minutes',
          'Every twelve minutes',
        ],
        correctIndex: 1,
        explanation:
          'The announcement said Route 15 buses "will now arrive every eight minutes instead of every twelve minutes" during morning rush hours.',
      },
      {
        id: 'ba-q4',
        question:
          'How can riders get more information about the changes?',
        options: [
          'By visiting the bus depot in person only',
          'By visiting the website or calling customer service',
          'By sending a letter to the transit authority',
          'By downloading a special app',
        ],
        correctIndex: 1,
        explanation:
          'The narrator directed riders to "visit our website at citybus.ca or call our customer service line."',
      },
    ],
  },

  // ============================================================
  // CLB 6 — Script 4: Doctor's Appointment (Dialogue)
  // ============================================================
  {
    id: 'listening-doctor-appointment',
    title: "Doctor's Appointment",
    description:
      'Listen to a conversation between a patient and a doctor discussing symptoms and a treatment plan.',
    format: 'dialogue',
    clbLevel: 6,
    icon: '🏥',
    timeLimit: 200,
    segments: [
      {
        speaker: 'Patient',
        text: "Good afternoon, Doctor. I have been feeling quite tired for the past two weeks, and I have been getting headaches almost every day. I thought it would go away, but it seems to be getting worse.",
        voiceGender: 'male',
      },
      {
        speaker: 'Doctor',
        text: "I am sorry to hear that. Let me ask you a few questions. Have you noticed any changes in your sleep patterns? Are you getting enough rest at night?",
        voiceGender: 'female',
      },
      {
        speaker: 'Patient',
        text: "Actually, I have been having trouble falling asleep. I usually stay up past midnight scrolling on my phone, and then I have to wake up at six for work. I would say I am only getting about five hours of sleep each night.",
        voiceGender: 'male',
      },
      {
        speaker: 'Doctor',
        text: "That is likely a major factor. Adults generally need seven to nine hours of sleep. Have you also been drinking enough water throughout the day? Dehydration can cause headaches and fatigue as well.",
        voiceGender: 'female',
      },
      {
        speaker: 'Patient',
        text: "I mostly drink coffee during the day — probably three or four cups. I do not drink much water, to be honest. Maybe one or two glasses at most.",
        voiceGender: 'male',
      },
      {
        speaker: 'Doctor',
        text: "That helps explain your symptoms. Too much caffeine and not enough water can definitely lead to headaches. I would recommend reducing your coffee to no more than two cups a day and drinking at least six to eight glasses of water.",
        voiceGender: 'female',
      },
      {
        speaker: 'Patient',
        text: "That makes sense. Should I be worried about anything more serious? Do I need any tests done?",
        voiceGender: 'male',
      },
      {
        speaker: 'Doctor',
        text: "Let us start with these lifestyle changes first. I would also like you to try going to bed by ten-thirty and putting your phone away at least thirty minutes before sleep. If your symptoms do not improve within two weeks, come back and we will run some blood work to check for anything else.",
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'da-q1',
        question: 'How long has the patient been experiencing symptoms?',
        options: ['A few days', 'About one week', 'About two weeks', 'Over a month'],
        correctIndex: 2,
        explanation:
          'The patient said he has been feeling tired "for the past two weeks."',
      },
      {
        id: 'da-q2',
        question: 'How many hours of sleep does the patient typically get?',
        options: [
          'About four hours',
          'About five hours',
          'About six hours',
          'About seven hours',
        ],
        correctIndex: 1,
        explanation:
          'The patient said he is "only getting about five hours of sleep each night."',
      },
      {
        id: 'da-q3',
        question: 'What does the doctor identify as a likely cause of the headaches?',
        options: [
          'A viral infection',
          'High blood pressure',
          'Too much caffeine and not enough water',
          'An allergic reaction',
        ],
        correctIndex: 2,
        explanation:
          'The doctor stated that "too much caffeine and not enough water can definitely lead to headaches."',
      },
      {
        id: 'da-q4',
        question:
          'How many cups of coffee does the doctor recommend per day?',
        options: [
          'No coffee at all',
          'No more than one cup',
          'No more than two cups',
          'No more than three cups',
        ],
        correctIndex: 2,
        explanation:
          'The doctor recommended "reducing your coffee to no more than two cups a day."',
      },
      {
        id: 'da-q5',
        question: 'What will the doctor do if the symptoms do not improve?',
        options: [
          'Prescribe medication immediately',
          'Refer the patient to a specialist',
          'Run some blood work',
          'Recommend surgery',
        ],
        correctIndex: 2,
        explanation:
          'The doctor said, "come back and we will run some blood work to check for anything else."',
      },
    ],
  },

  // ============================================================
  // CLB 6 — Script 5: Job Interview Tips (Monologue)
  // ============================================================
  {
    id: 'listening-job-interview-tips',
    title: 'Job Interview Tips',
    description:
      'Listen to a career advisor share practical tips for succeeding in Canadian job interviews.',
    format: 'monologue',
    clbLevel: 6,
    icon: '💼',
    timeLimit: 200,
    segments: [
      {
        speaker: 'Career Advisor',
        text: "Welcome to today's workshop on preparing for job interviews in Canada. Whether you are a newcomer or you have been living here for a while, understanding the expectations of Canadian employers is key to landing the job you want.",
        voiceGender: 'female',
      },
      {
        speaker: 'Career Advisor',
        text: "First, let us talk about research. Before any interview, you should learn as much as you can about the company. Visit their website, read their mission statement, and look at recent news articles about them. Employers are always impressed when a candidate shows genuine interest in their organization.",
        voiceGender: 'female',
      },
      {
        speaker: 'Career Advisor',
        text: "Second, practise answering common interview questions using the STAR method — that stands for Situation, Task, Action, and Result. Canadian interviewers love behavioural questions, so be ready to give specific examples from your past experience.",
        voiceGender: 'female',
      },
      {
        speaker: 'Career Advisor',
        text: "Third, remember that first impressions matter. Arrive at least ten minutes early, dress professionally, and give a firm handshake. Make eye contact and smile. In Canadian workplace culture, being friendly and approachable is just as important as having the right qualifications.",
        voiceGender: 'female',
      },
      {
        speaker: 'Career Advisor',
        text: "Finally, always send a thank-you email within twenty-four hours after the interview. Keep it short and professional. Mention something specific you discussed during the interview to help the employer remember you. This small gesture can make a big difference in a competitive job market.",
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'jit-q1',
        question:
          'What does the career advisor recommend doing before an interview?',
        options: [
          'Memorize the entire company website',
          'Research the company, including their mission and recent news',
          'Call the employer to ask about the salary',
          'Visit the office in person before the interview day',
        ],
        correctIndex: 1,
        explanation:
          'The advisor said to "visit their website, read their mission statement, and look at recent news articles about them."',
      },
      {
        id: 'jit-q2',
        question: 'What does the STAR method stand for?',
        options: [
          'Strategy, Timing, Analysis, Review',
          'Strengths, Talents, Abilities, References',
          'Situation, Task, Action, Result',
          'Skills, Training, Ambition, Readiness',
        ],
        correctIndex: 2,
        explanation:
          'The advisor explained STAR stands for "Situation, Task, Action, and Result."',
      },
      {
        id: 'jit-q3',
        question: 'How early should you arrive for an interview?',
        options: [
          'Five minutes early',
          'At least ten minutes early',
          'Fifteen minutes early',
          'Thirty minutes early',
        ],
        correctIndex: 1,
        explanation:
          'The advisor recommended arriving "at least ten minutes early."',
      },
      {
        id: 'jit-q4',
        question:
          'According to the advisor, what is important in Canadian workplace culture?',
        options: [
          'Speaking multiple languages',
          'Having a university degree',
          'Being friendly and approachable',
          'Having Canadian work experience only',
        ],
        correctIndex: 2,
        explanation:
          'The advisor stated that "being friendly and approachable is just as important as having the right qualifications."',
      },
      {
        id: 'jit-q5',
        question:
          'When should you send a thank-you email after the interview?',
        options: [
          'Immediately after leaving',
          'Within twenty-four hours',
          'Within one week',
          'Only if you get the job',
        ],
        correctIndex: 1,
        explanation:
          'The advisor said to "send a thank-you email within twenty-four hours after the interview."',
      },
    ],
  },

  // ============================================================
  // CLB 6 — Script 6: Neighbourhood Meeting (Dialogue)
  // ============================================================
  {
    id: 'listening-neighbourhood-meeting',
    title: 'Neighbourhood Meeting',
    description:
      'Listen to a conversation between a resident and a council member discussing community concerns at a neighbourhood meeting.',
    format: 'dialogue',
    clbLevel: 6,
    icon: '🏘️',
    timeLimit: 200,
    segments: [
      {
        speaker: 'Resident',
        text: "Thank you for holding this meeting. I want to bring up a few issues that many of us in the neighbourhood have been concerned about. The biggest one is the speeding on Maple Avenue. Cars drive way too fast, especially during school hours.",
        voiceGender: 'female',
      },
      {
        speaker: 'Council Member',
        text: "Thank you for raising that. We have actually received several complaints about Maple Avenue. The city is looking into installing speed bumps and possibly a new crosswalk near the elementary school. We hope to have those in place by the spring.",
        voiceGender: 'male',
      },
      {
        speaker: 'Resident',
        text: "That is great to hear. The other issue is the park on Elm Street. The playground equipment is quite old and some of it is broken. My children used to play there, but now it is not safe. Several families have stopped going altogether.",
        voiceGender: 'female',
      },
      {
        speaker: 'Council Member',
        text: "You are right, and I understand the frustration. The parks department has approved a budget of one hundred and fifty thousand dollars to renovate three parks in our ward. Elm Street Park is on the list. Construction should begin in early April.",
        voiceGender: 'male',
      },
      {
        speaker: 'Resident',
        text: "That is wonderful news. One last thing — the streetlights on Oak Crescent have been out for over a month. It gets very dark in the evenings, and people feel unsafe walking after six o'clock.",
        voiceGender: 'female',
      },
      {
        speaker: 'Council Member',
        text: "I was not aware of that one. Let me make a note and I will contact the public works department this week. Streetlight repairs are usually handled within seven to ten business days once a report is filed. I appreciate you letting me know.",
        voiceGender: 'male',
      },
      {
        speaker: 'Resident',
        text: "Thank you so much. It is encouraging to see that the city is actually listening to our concerns. I will share these updates with my neighbours.",
        voiceGender: 'female',
      },
      {
        speaker: 'Council Member',
        text: "Please do. And I encourage everyone to attend these monthly meetings. The more feedback we get, the better we can serve the community. Our next meeting will be on March fifth at the community centre.",
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'nm-q1',
        question: 'What is the biggest concern the resident raises?',
        options: [
          'Noise from construction',
          'Speeding on Maple Avenue',
          'Garbage collection schedule',
          'Lack of parking spaces',
        ],
        correctIndex: 1,
        explanation:
          'The resident said the biggest issue is "the speeding on Maple Avenue."',
      },
      {
        id: 'nm-q2',
        question:
          'What solution is the city considering for the speeding problem?',
        options: [
          'Hiring more police officers',
          'Closing the street to traffic',
          'Installing speed bumps and a new crosswalk',
          'Reducing the speed limit to twenty kilometres per hour',
        ],
        correctIndex: 2,
        explanation:
          'The council member said the city is "looking into installing speed bumps and possibly a new crosswalk."',
      },
      {
        id: 'nm-q3',
        question: 'How much has the parks department budgeted for park renovations?',
        options: [
          'Fifty thousand dollars',
          'One hundred thousand dollars',
          'One hundred and fifty thousand dollars',
          'Two hundred thousand dollars',
        ],
        correctIndex: 2,
        explanation:
          'The council member stated a budget of "one hundred and fifty thousand dollars to renovate three parks."',
      },
      {
        id: 'nm-q4',
        question: 'How long have the streetlights on Oak Crescent been out?',
        options: [
          'About two weeks',
          'Over a month',
          'About three months',
          'Since last year',
        ],
        correctIndex: 1,
        explanation:
          'The resident said the streetlights "have been out for over a month."',
      },
      {
        id: 'nm-q5',
        question: 'When is the next neighbourhood meeting?',
        options: [
          'February twentieth',
          'March first',
          'March fifth',
          'April first',
        ],
        correctIndex: 2,
        explanation:
          'The council member said the next meeting "will be on March fifth at the community centre."',
      },
    ],
  },

  // ============================================================
  // CLB 7 — Script 7: University Orientation (Monologue)
  // ============================================================
  {
    id: 'listening-university-lecture',
    title: 'University Orientation',
    description:
      'Listen to a professor explain course policies and expectations during a university orientation session.',
    format: 'monologue',
    clbLevel: 7,
    icon: '🎓',
    timeLimit: 240,
    segments: [
      {
        speaker: 'Professor',
        text: "Good morning, everyone, and welcome to Introduction to Canadian Studies. My name is Professor Henderson, and I will be your instructor for this term. Before we get into the course content, I want to go over some important policies and expectations so that everyone starts the semester on the same page.",
        voiceGender: 'male',
      },
      {
        speaker: 'Professor',
        text: "First, attendance. Attendance is mandatory and accounts for ten percent of your final grade. You are allowed a maximum of three unexcused absences. After that, each additional absence will reduce your participation grade by two percent. If you have a medical or family emergency, please notify me by email before class if possible.",
        voiceGender: 'male',
      },
      {
        speaker: 'Professor',
        text: "Now, let us talk about assignments. There will be two major essays, a midterm exam, and a final exam. The first essay is worth fifteen percent, the second is worth twenty percent, the midterm is worth twenty-five percent, and the final exam is worth thirty percent. All essays must be submitted through the online portal by eleven-fifty-nine p.m. on the due date. Late submissions will lose five percent per day.",
        voiceGender: 'male',
      },
      {
        speaker: 'Professor',
        text: "Academic integrity is something I take very seriously. All work must be your own. If you use outside sources, they must be properly cited using APA format. Any form of plagiarism will result in an automatic zero on the assignment and may be reported to the academic integrity office.",
        voiceGender: 'male',
      },
      {
        speaker: 'Professor',
        text: "I also want to mention office hours. I am available every Tuesday and Thursday from two to four in the afternoon in Room 312 of the Humanities Building. You can also book a virtual appointment through the student portal. I strongly encourage you to come to office hours if you are struggling with the material — do not wait until the last minute.",
        voiceGender: 'male',
      },
      {
        speaker: 'Professor',
        text: "Finally, I want to emphasize that this course is designed to be collaborative. We will have weekly group discussions, and your participation in these discussions is expected. Respect for diverse viewpoints is essential. I look forward to a productive and engaging semester with all of you.",
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'ul-q1',
        question: 'What percentage of the final grade does attendance account for?',
        options: ['Five percent', 'Ten percent', 'Fifteen percent', 'Twenty percent'],
        correctIndex: 1,
        explanation:
          'The professor stated that "attendance is mandatory and accounts for ten percent of your final grade."',
      },
      {
        id: 'ul-q2',
        question: 'How many unexcused absences are allowed?',
        options: ['One', 'Two', 'Three', 'Four'],
        correctIndex: 2,
        explanation:
          'The professor said students "are allowed a maximum of three unexcused absences."',
      },
      {
        id: 'ul-q3',
        question: 'What is the penalty for late essay submissions?',
        options: [
          'Two percent per day',
          'Five percent per day',
          'Ten percent per day',
          'The essay will not be accepted',
        ],
        correctIndex: 1,
        explanation:
          'The professor explained that "late submissions will lose five percent per day."',
      },
      {
        id: 'ul-q4',
        question: 'What citation format is required for essays?',
        options: ['MLA format', 'Chicago format', 'APA format', 'Harvard format'],
        correctIndex: 2,
        explanation:
          'The professor said outside sources "must be properly cited using APA format."',
      },
      {
        id: 'ul-q5',
        question: 'When are the professor\'s office hours?',
        options: [
          'Monday and Wednesday, ten to twelve',
          'Tuesday and Thursday, two to four',
          'Wednesday and Friday, one to three',
          'Monday and Friday, three to five',
        ],
        correctIndex: 1,
        explanation:
          'The professor said he is "available every Tuesday and Thursday from two to four in the afternoon."',
      },
      {
        id: 'ul-q6',
        question: 'What is the consequence of plagiarism?',
        options: [
          'A warning for the first offence',
          'A reduction of ten percent on the assignment',
          'An automatic zero and possible report to the academic integrity office',
          'The student must redo the assignment',
        ],
        correctIndex: 2,
        explanation:
          'The professor stated plagiarism "will result in an automatic zero on the assignment and may be reported to the academic integrity office."',
      },
    ],
  },

  // ============================================================
  // CLB 7 — Script 8: Radio Interview (Dialogue)
  // ============================================================
  {
    id: 'listening-radio-interview',
    title: 'Radio Interview',
    description:
      'Listen to a radio host interview a guest author who has written a book about the immigrant experience in Canada.',
    format: 'dialogue',
    clbLevel: 7,
    icon: '📻',
    timeLimit: 240,
    segments: [
      {
        speaker: 'Host',
        text: "Welcome back to The Morning Edition. I am joined today by Priya Sharma, author of the bestselling book New Roots: Stories of Immigration to Canada. Priya, thank you for being here. Your book has been getting a lot of attention since it was published last September.",
        voiceGender: 'male',
      },
      {
        speaker: 'Guest Author',
        text: "Thank you for having me. Yes, it has been an incredible response. I think the book resonates because so many Canadians have their own immigration story, whether it is their own experience or that of their parents or grandparents.",
        voiceGender: 'female',
      },
      {
        speaker: 'Host',
        text: "Tell us a bit about what inspired you to write this book. Was it based on your own experience coming to Canada?",
        voiceGender: 'male',
      },
      {
        speaker: 'Guest Author',
        text: "Partly, yes. I came to Canada from India when I was fourteen years old. My family settled in Brampton, Ontario. The transition was challenging — learning a new culture, making friends, even getting used to the winters. But what really inspired the book was the stories I heard from other immigrants over the years. Each person's journey was unique, yet there were common threads of hope, resilience, and belonging.",
        voiceGender: 'female',
      },
      {
        speaker: 'Host',
        text: "The book features twelve different personal stories. How did you choose which stories to include?",
        voiceGender: 'male',
      },
      {
        speaker: 'Guest Author',
        text: "I interviewed over fifty people across Canada — from Vancouver to Halifax. I wanted to represent a wide range of backgrounds, ages, and circumstances. Some came as refugees, some through the skilled worker program, and others through family sponsorship. I chose the twelve stories that best captured the diversity of the immigrant experience in this country.",
        voiceGender: 'female',
      },
      {
        speaker: 'Host',
        text: "Was there one story that particularly moved you during the writing process?",
        voiceGender: 'male',
      },
      {
        speaker: 'Guest Author',
        text: "There was a story about a Syrian family that arrived in Winnipeg in the middle of January. They had never seen snow before. Their neighbours organized a welcome party and brought them winter coats, boots, and home-cooked meals. The father told me that in that moment, he knew Canada was truly home. It still brings tears to my eyes.",
        voiceGender: 'female',
      },
      {
        speaker: 'Host',
        text: "That is truly beautiful. Are you working on anything new?",
        voiceGender: 'male',
      },
      {
        speaker: 'Guest Author',
        text: "I am actually working on a follow-up that focuses on second-generation Canadians — the children of immigrants and how they navigate their dual identity. I hope to have it out by next fall. It has been fascinating to explore how identity and culture evolve across generations.",
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'ri-q1',
        question: 'When was Priya\'s book published?',
        options: [
          'Last March',
          'Last June',
          'Last September',
          'Last December',
        ],
        correctIndex: 2,
        explanation:
          'The host mentioned the book "has been getting a lot of attention since it was published last September."',
      },
      {
        id: 'ri-q2',
        question: 'Where did Priya\'s family settle when they came to Canada?',
        options: [
          'Toronto, Ontario',
          'Brampton, Ontario',
          'Winnipeg, Manitoba',
          'Vancouver, British Columbia',
        ],
        correctIndex: 1,
        explanation:
          'Priya said, "My family settled in Brampton, Ontario."',
      },
      {
        id: 'ri-q3',
        question: 'How many people did Priya interview for her book?',
        options: ['Twelve', 'Twenty-five', 'Over fifty', 'Over one hundred'],
        correctIndex: 2,
        explanation:
          'Priya said, "I interviewed over fifty people across Canada."',
      },
      {
        id: 'ri-q4',
        question: 'Where did the Syrian family in the story settle?',
        options: ['Toronto', 'Vancouver', 'Halifax', 'Winnipeg'],
        correctIndex: 3,
        explanation:
          'Priya described "a Syrian family that arrived in Winnipeg in the middle of January."',
      },
      {
        id: 'ri-q5',
        question: 'What is the focus of Priya\'s next book?',
        options: [
          'The Canadian education system',
          'Second-generation Canadians and dual identity',
          'The history of immigration policy in Canada',
          'Refugee stories from around the world',
        ],
        correctIndex: 1,
        explanation:
          'Priya said her follow-up "focuses on second-generation Canadians — the children of immigrants and how they navigate their dual identity."',
      },
      {
        id: 'ri-q6',
        question: 'How many personal stories does the book feature?',
        options: ['Eight', 'Ten', 'Twelve', 'Fifteen'],
        correctIndex: 2,
        explanation:
          'The host mentioned "the book features twelve different personal stories."',
      },
    ],
  },

  // ============================================================
  // CLB 8 — Script 9: News Report (Monologue)
  // ============================================================
  {
    id: 'listening-news-report',
    title: 'News Report',
    description:
      'Listen to a news report about the Canadian housing market and recent government policy changes aimed at improving affordability.',
    format: 'monologue',
    clbLevel: 8,
    icon: '📰',
    timeLimit: 240,
    segments: [
      {
        speaker: 'News Anchor',
        text: "Good evening. Tonight, we take a closer look at the Canadian housing market, which continues to be one of the most pressing issues facing the country. According to a report released this week by the Canada Mortgage and Housing Corporation, the average home price in major Canadian cities has risen by approximately eighteen percent over the past two years, putting homeownership further out of reach for many Canadians.",
        voiceGender: 'female',
      },
      {
        speaker: 'News Anchor',
        text: "The federal government announced a series of new measures today aimed at addressing the affordability crisis. Among the key changes is a new first-time homebuyer incentive program that will provide eligible buyers with a tax credit of up to ten thousand dollars. To qualify, applicants must have a household income below one hundred and twenty thousand dollars and must not have owned a home in the previous five years.",
        voiceGender: 'female',
      },
      {
        speaker: 'News Anchor',
        text: "In addition, the government plans to invest two billion dollars over the next three years to accelerate the construction of affordable housing units across the country. The housing minister stated that the goal is to build at least one hundred thousand new affordable units by the end of the decade. Provincial and municipal governments will be expected to contribute matching funds.",
        voiceGender: 'female',
      },
      {
        speaker: 'News Anchor',
        text: "Critics, however, say these measures do not go far enough. The Canadian Centre for Policy Alternatives released a statement arguing that the root cause of the crisis is a lack of supply combined with excessive speculation by investors. They are calling for stricter regulations on foreign and corporate ownership of residential properties, as well as a national vacant home tax to discourage speculation.",
        voiceGender: 'female',
      },
      {
        speaker: 'News Anchor',
        text: "Meanwhile, the Bank of Canada is expected to announce its latest interest rate decision next week. Economists are divided on whether the central bank will hold the rate steady at four and a quarter percent or implement another quarter-point increase. Higher interest rates have already cooled demand somewhat, but they have also made mortgage payments significantly more expensive for existing homeowners.",
        voiceGender: 'female',
      },
      {
        speaker: 'News Anchor',
        text: "Housing advocates continue to push for a comprehensive national housing strategy that goes beyond short-term fixes. As one policy analyst noted, solving Canada's housing crisis will require coordination across all levels of government, the private sector, and non-profit organizations. We will bring you updates as this story develops. That is your evening report.",
        voiceGender: 'female',
      },
    ],
    questions: [
      {
        id: 'nr-q1',
        question:
          'By how much have average home prices risen in major Canadian cities over the past two years?',
        options: [
          'Approximately ten percent',
          'Approximately fifteen percent',
          'Approximately eighteen percent',
          'Approximately twenty-five percent',
        ],
        correctIndex: 2,
        explanation:
          'The news anchor reported that prices "rose by approximately eighteen percent over the past two years."',
      },
      {
        id: 'nr-q2',
        question:
          'What is the maximum tax credit offered under the new first-time homebuyer incentive?',
        options: [
          'Five thousand dollars',
          'Ten thousand dollars',
          'Fifteen thousand dollars',
          'Twenty thousand dollars',
        ],
        correctIndex: 1,
        explanation:
          'The anchor said the program "will provide eligible buyers with a tax credit of up to ten thousand dollars."',
      },
      {
        id: 'nr-q3',
        question:
          'How much does the government plan to invest in affordable housing construction?',
        options: [
          'One billion dollars over two years',
          'Two billion dollars over three years',
          'Three billion dollars over five years',
          'Five billion dollars over ten years',
        ],
        correctIndex: 1,
        explanation:
          'The anchor stated the government "plans to invest two billion dollars over the next three years."',
      },
      {
        id: 'nr-q4',
        question:
          'What does the Canadian Centre for Policy Alternatives identify as the root cause of the crisis?',
        options: [
          'High interest rates and inflation',
          'A lack of supply combined with excessive speculation',
          'Immigration and population growth',
          'Insufficient government spending on infrastructure',
        ],
        correctIndex: 1,
        explanation:
          'The critics argued "the root cause of the crisis is a lack of supply combined with excessive speculation by investors."',
      },
      {
        id: 'nr-q5',
        question:
          'What is the current interest rate mentioned in the report?',
        options: [
          'Three and a half percent',
          'Three and three-quarter percent',
          'Four percent',
          'Four and a quarter percent',
        ],
        correctIndex: 3,
        explanation:
          'The anchor said economists are debating whether the Bank of Canada "will hold the rate steady at four and a quarter percent."',
      },
      {
        id: 'nr-q6',
        question:
          'What income requirement must first-time buyers meet to qualify for the incentive?',
        options: [
          'Below eighty thousand dollars',
          'Below one hundred thousand dollars',
          'Below one hundred and twenty thousand dollars',
          'Below one hundred and fifty thousand dollars',
        ],
        correctIndex: 2,
        explanation:
          'The anchor stated applicants "must have a household income below one hundred and twenty thousand dollars."',
      },
    ],
  },

  // ============================================================
  // CLB 8 — Script 10: Panel Discussion / Debate (Dialogue)
  // ============================================================
  {
    id: 'listening-debate',
    title: 'Panel Discussion',
    description:
      'Listen to a panel discussion where experts debate the advantages and disadvantages of remote work versus working in an office.',
    format: 'dialogue',
    clbLevel: 8,
    icon: '🎙️',
    timeLimit: 270,
    segments: [
      {
        speaker: 'Moderator',
        text: "Welcome to today's panel discussion on the future of work. The question we are exploring is whether remote work should become the permanent standard or whether companies should require employees to return to the office. I am joined by two experts with very different perspectives. Let us begin with opening statements.",
        voiceGender: 'male',
      },
      {
        speaker: 'Expert A',
        text: "Thank you. I firmly believe that remote work is the future. Studies have shown that productivity actually increases when employees work from home. A Stanford study found a thirteen percent improvement in performance among remote workers. Beyond that, employees report higher job satisfaction, better work-life balance, and significant savings on commuting costs — which in cities like Toronto and Vancouver can amount to over three hundred dollars a month.",
        voiceGender: 'female',
      },
      {
        speaker: 'Expert B',
        text: "I appreciate those statistics, but I think they paint an incomplete picture. While individual productivity may go up for certain tasks, collaboration and innovation suffer in remote environments. Research from Microsoft found that remote work led to more siloed communication and fewer cross-team interactions. Many of the most creative breakthroughs happen through spontaneous conversations that simply do not occur over video calls.",
        voiceGender: 'male',
      },
      {
        speaker: 'Moderator',
        text: "Those are interesting counterpoints. Expert A, how do you respond to concerns about collaboration?",
        voiceGender: 'male',
      },
      {
        speaker: 'Expert A',
        text: "I think those concerns are valid but solvable. Companies can adopt hybrid models — for example, requiring in-person attendance two or three days a week for team meetings and collaborative work, while allowing focused individual work to happen remotely. This gives employees the best of both worlds. Companies like Shopify and Atlassian have already implemented successful hybrid models.",
        voiceGender: 'female',
      },
      {
        speaker: 'Expert B',
        text: "The hybrid model sounds appealing in theory, but it creates significant logistical challenges. You need to coordinate schedules, manage office space that is only partially used, and deal with the inequity between those who come to the office and those who do not. There is also strong evidence that remote employees are less likely to be promoted. A study by the National Bureau of Economic Research showed that in-office workers received promotions at nearly double the rate of their remote counterparts.",
        voiceGender: 'male',
      },
      {
        speaker: 'Moderator',
        text: "That raises an important point about career advancement. Expert A, is there a risk that remote work creates a two-tier system?",
        voiceGender: 'male',
      },
      {
        speaker: 'Expert A',
        text: "That is a legitimate concern, but I would argue it reflects a management problem, not a remote work problem. If companies evaluate employees based on output and results rather than physical presence, the promotion gap disappears. We need to train managers to assess performance objectively. The solution is better management practices, not forcing everyone back to the office.",
        voiceGender: 'female',
      },
      {
        speaker: 'Expert B',
        text: "I agree that management practices need to improve, but we also need to consider the mental health aspect. Many remote workers report feeling isolated and disconnected from their teams. A survey by the Canadian Mental Health Association found that forty-one percent of remote workers experienced increased feelings of loneliness. The office provides social interaction and a sense of community that are difficult to replicate virtually.",
        voiceGender: 'male',
      },
      {
        speaker: 'Moderator',
        text: "We are running short on time. Let me ask each of you for a final thought. What is the one thing you want our listeners to take away from this discussion?",
        voiceGender: 'male',
      },
    ],
    questions: [
      {
        id: 'db-q1',
        question:
          'According to Expert A, what did the Stanford study find about remote worker performance?',
        options: [
          'A five percent improvement',
          'An eight percent improvement',
          'A thirteen percent improvement',
          'A twenty percent improvement',
        ],
        correctIndex: 2,
        explanation:
          'Expert A cited "a Stanford study found a thirteen percent improvement in performance among remote workers."',
      },
      {
        id: 'db-q2',
        question:
          'What concern does Expert B raise about remote work based on Microsoft research?',
        options: [
          'Employees work fewer hours at home',
          'Remote work leads to more siloed communication',
          'Technology costs are too high for companies',
          'Employees miss too many deadlines',
        ],
        correctIndex: 1,
        explanation:
          'Expert B said Microsoft research found that "remote work led to more siloed communication and fewer cross-team interactions."',
      },
      {
        id: 'db-q3',
        question:
          'How much can employees save on commuting costs per month in cities like Toronto and Vancouver, according to Expert A?',
        options: [
          'Over one hundred dollars',
          'Over two hundred dollars',
          'Over three hundred dollars',
          'Over five hundred dollars',
        ],
        correctIndex: 2,
        explanation:
          'Expert A mentioned savings on commuting "can amount to over three hundred dollars a month."',
      },
      {
        id: 'db-q4',
        question:
          'What did the National Bureau of Economic Research find about promotions?',
        options: [
          'Remote workers get promoted faster',
          'There is no difference in promotion rates',
          'In-office workers received promotions at nearly double the rate of remote workers',
          'Hybrid workers get promoted most often',
        ],
        correctIndex: 2,
        explanation:
          'Expert B cited that "in-office workers received promotions at nearly double the rate of their remote counterparts."',
      },
      {
        id: 'db-q5',
        question:
          'According to the Canadian Mental Health Association survey, what percentage of remote workers experienced increased loneliness?',
        options: [
          'Twenty-three percent',
          'Thirty-five percent',
          'Forty-one percent',
          'Fifty-two percent',
        ],
        correctIndex: 2,
        explanation:
          'Expert B mentioned that "forty-one percent of remote workers experienced increased feelings of loneliness."',
      },
      {
        id: 'db-q6',
        question:
          'What does Expert A suggest as a solution to the promotion gap between remote and in-office workers?',
        options: [
          'Give remote workers automatic raises',
          'Require all employees to come to the office',
          'Evaluate employees based on output and results rather than physical presence',
          'Promote remote and in-office workers equally regardless of performance',
        ],
        correctIndex: 2,
        explanation:
          'Expert A argued that "if companies evaluate employees based on output and results rather than physical presence, the promotion gap disappears."',
      },
    ],
  },
];

export const listeningScripts: ListeningScript[] = [
  ...existingScripts,
  ...newListeningScriptsA,
  ...newListeningScriptsB,
  ...newListeningScriptsC,
  ...newListeningScriptsD,
];
