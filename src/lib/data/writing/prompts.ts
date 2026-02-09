import type { WritingPrompt } from './types';

export const writingPrompts: WritingPrompt[] = [
  // ============================================
  // EMAIL TASKS (CELPIP Writing Task 1 style)
  // ============================================
  {
    id: 'writing-email-complaint',
    title: 'Noise Complaint to Building Manager',
    description: 'Write a formal complaint email to your building manager about excessive noise from a neighbouring unit.',
    taskType: 'email',
    clbLevel: 6,
    icon: '📧',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'You live in an apartment building in downtown Toronto. For the past three weeks, the tenant in the unit above yours has been playing loud music late at night, often past midnight. You have already spoken to the tenant directly, but the noise has not stopped. You have decided to write to your building manager to formally complain about the situation.',
    instructions: [
      'Describe the noise problem and how long it has been going on.',
      'Explain what steps you have already taken to resolve the issue.',
      'Describe how the noise is affecting your daily life (sleep, work, health).',
      'Request a specific action from the building manager to resolve the problem.',
    ],
    sampleResponse:
      'Dear Mr. Thompson,\n\nI am writing to formally complain about an ongoing noise problem in my building. For the past three weeks, the tenant in Unit 405, directly above my apartment in Unit 305, has been playing extremely loud music late at night, often well past midnight.\n\nI have already attempted to resolve this matter on my own. Two weeks ago, I politely spoke to the tenant and asked them to lower the volume after 10 p.m. Unfortunately, the noise has continued without any improvement.\n\nThis situation is seriously affecting my quality of life. I am unable to sleep properly, which has caused me to feel exhausted at work. I have also been experiencing headaches due to the constant disturbance. As someone who works early morning shifts, adequate rest is essential for me.\n\nI would appreciate it if you could speak to the tenant about the building\'s noise policy and enforce the quiet hours outlined in our lease agreement. If the problem persists, I would like to discuss further options, including mediation.\n\nThank you for your attention to this matter.\n\nSincerely,\nJordan Lee',
  },
  {
    id: 'writing-email-request',
    title: 'Schedule Change Request to Employer',
    description: 'Write a professional email to your employer requesting a change to your work schedule.',
    taskType: 'email',
    clbLevel: 6,
    icon: '📧',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'You work full-time at a company in Vancouver. You have recently enrolled in an evening college course that conflicts with your current work schedule. Your shift currently ends at 6:00 p.m., but your class begins at 5:30 p.m. on Tuesdays and Thursdays. You need to ask your supervisor if you can adjust your hours on those two days.',
    instructions: [
      'Explain why you are requesting a schedule change.',
      'Provide specific details about the new schedule you are proposing.',
      'Describe how you will ensure your work responsibilities are still met.',
      'Express your willingness to be flexible and discuss alternatives.',
    ],
  },
  {
    id: 'writing-email-apology',
    title: 'Apology to a Friend for Missing an Event',
    description: 'Write an apologetic email to a close friend for missing an important event they organized.',
    taskType: 'email',
    clbLevel: 5,
    icon: '📧',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'Your close friend organized a surprise birthday party for their partner last Saturday evening in Calgary. You had confirmed that you would attend and even volunteered to bring the cake. However, you did not show up because of an unexpected family emergency. Your friend is upset, and you want to apologize and explain what happened.',
    instructions: [
      'Apologize sincerely for missing the event and not bringing the cake.',
      'Explain the reason you were unable to attend.',
      'Acknowledge how your absence may have affected your friend and the party.',
      'Suggest a way to make it up to your friend.',
    ],
  },
  {
    id: 'writing-email-recommendation',
    title: 'Recommend a Coworker for a Position',
    description: 'Write a professional email recommending a coworker for an internal promotion or new position.',
    taskType: 'email',
    clbLevel: 7,
    icon: '📧',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'You work at a marketing firm in Ottawa. Your coworker, Priya Sharma, has applied for the position of Senior Marketing Coordinator. The hiring manager has asked team members to submit recommendation emails for internal candidates. You have worked closely with Priya for over two years and believe she is an excellent fit for the role.',
    instructions: [
      'State who you are recommending and for which position.',
      'Describe the candidate\'s key strengths and relevant skills.',
      'Provide a specific example of a project or achievement that demonstrates their abilities.',
      'Explain why you believe they would be successful in the new role.',
    ],
  },
  {
    id: 'writing-email-information',
    title: 'Request Information About a Community Program',
    description: 'Write an email to a community centre requesting details about a program or service they offer.',
    taskType: 'email',
    clbLevel: 5,
    icon: '📧',
    timeLimit: 1500,
    minWords: 150,
    maxWords: 200,
    scenario:
      'You recently moved to a new neighbourhood in Edmonton and saw a poster at the local community centre advertising free English conversation classes for newcomers. The poster did not include many details. You want to find out more about the program, including the schedule, registration process, and whether childcare is available during the classes.',
    instructions: [
      'Introduce yourself and explain how you learned about the program.',
      'Ask specific questions about the schedule and location of the classes.',
      'Inquire about the registration process and any requirements.',
      'Ask about any additional services, such as childcare or transportation support.',
    ],
  },

  // ============================================
  // SURVEY RESPONSE TASKS (CELPIP Writing Task 2 style)
  // ============================================
  {
    id: 'writing-survey-community',
    title: 'Park vs. Parking Lot',
    description: 'Respond to a community survey about whether the city should build a new park or a parking lot on a vacant lot.',
    taskType: 'survey',
    clbLevel: 7,
    icon: '📝',
    timeLimit: 1560,
    minWords: 150,
    maxWords: 200,
    scenario:
      'Your city council has announced that a vacant lot in your neighbourhood will be developed. They are conducting a public survey to decide between two options: building a new community park with green space and a playground, or building a public parking lot to address parking shortages in the area. You have been asked to respond to the survey and share your opinion.',
    instructions: [
      'Clearly state which option you support and why.',
      'Provide at least two reasons to support your choice.',
      'Address a potential benefit of the opposing option, but explain why your choice is better.',
      'Conclude by summarizing your position.',
    ],
    sampleResponse:
      'I am writing in response to the city council\'s survey regarding the development of the vacant lot on Maple Street. I strongly believe that building a new community park would be the better choice for our neighbourhood.\n\nFirst, our area currently lacks green space where families and children can spend time outdoors. A park with a playground would provide a safe and healthy environment for recreation, which is especially important given the increasing number of young families moving into the neighbourhood. Second, parks have been shown to increase property values and improve the overall quality of life in a community. A well-maintained green space would make our neighbourhood more attractive and welcoming.\n\nI understand that parking can be a challenge in our area, and a parking lot would offer some convenience. However, the city could explore alternative solutions such as street parking permits or a smaller lot on a different site. The long-term benefits of a park far outweigh the short-term convenience of additional parking.\n\nIn conclusion, I urge the council to choose the community park. It would benefit residents of all ages and contribute to a healthier, more vibrant neighbourhood.',
  },
  {
    id: 'writing-survey-workplace',
    title: 'Open vs. Closed Workspaces',
    description: 'Respond to a workplace survey about whether offices should use open-concept or closed/private workspaces.',
    taskType: 'survey',
    clbLevel: 7,
    icon: '📝',
    timeLimit: 1560,
    minWords: 150,
    maxWords: 200,
    scenario:
      'Your company is redesigning its office space in Montreal and has asked employees to complete a survey. The two options being considered are an open-concept workspace with shared desks and collaboration areas, or a traditional layout with private offices and cubicles. Management wants to understand employee preferences before making a decision.',
    instructions: [
      'Clearly state which workspace design you prefer and why.',
      'Provide at least two reasons to support your choice, using examples from your work experience.',
      'Acknowledge one advantage of the other option and explain why your preference is still better.',
      'End with a clear recommendation to management.',
    ],
  },
  {
    id: 'writing-survey-education',
    title: 'Later School Start Times',
    description: 'Respond to a school board survey about whether high school start times should be pushed later in the morning.',
    taskType: 'survey',
    clbLevel: 8,
    icon: '📝',
    timeLimit: 1560,
    minWords: 150,
    maxWords: 200,
    scenario:
      'The local school board in your city in Ontario is considering changing high school start times from 8:00 a.m. to 9:30 a.m. They have sent a survey to parents, students, and community members to gather opinions. Research suggests that teenagers perform better academically with more sleep, but the change would affect bus schedules, after-school activities, and parents\' work routines.',
    instructions: [
      'State whether you support or oppose the later start time and explain your reasoning.',
      'Provide at least two arguments to support your position, referencing the impact on students.',
      'Address a concern raised by the opposing side and offer a solution or counterpoint.',
      'Conclude with a clear recommendation to the school board.',
    ],
  },
  {
    id: 'writing-survey-technology',
    title: 'Smartphones in Classrooms',
    description: 'Respond to a survey about whether smartphones should be banned in school classrooms.',
    taskType: 'survey',
    clbLevel: 8,
    icon: '📝',
    timeLimit: 1560,
    minWords: 150,
    maxWords: 200,
    scenario:
      'A school district in British Columbia is surveying parents and teachers about a proposed policy to ban smartphones from all classrooms during school hours. Supporters of the ban argue that phones are a major distraction and contribute to cyberbullying. Opponents believe that smartphones can be valuable educational tools when used responsibly. You have been asked to share your opinion.',
    instructions: [
      'Clearly state whether you support or oppose the smartphone ban.',
      'Provide at least two well-developed reasons to support your position.',
      'Acknowledge one valid point from the opposing side and explain why your position is still stronger.',
      'Offer a practical suggestion or compromise that the school district could consider.',
    ],
  },
  {
    id: 'writing-survey-environment',
    title: 'Banning Single-Use Plastics',
    description: 'Respond to a government survey about whether single-use plastics should be completely banned.',
    taskType: 'survey',
    clbLevel: 8,
    icon: '📝',
    timeLimit: 1560,
    minWords: 150,
    maxWords: 200,
    scenario:
      'The Canadian federal government is conducting a public consultation on whether to expand the existing ban on single-use plastics to include all disposable plastic products, such as cups, food containers, and packaging. Environmental groups strongly support a complete ban, while some businesses and consumer groups are concerned about increased costs and the availability of affordable alternatives. You have been invited to submit your response.',
    instructions: [
      'State your position on whether single-use plastics should be completely banned.',
      'Provide at least two reasons to support your opinion, considering environmental and economic factors.',
      'Address a concern from the opposing viewpoint and explain how it could be resolved.',
      'Conclude with a clear recommendation to the government.',
    ],
  },
];
