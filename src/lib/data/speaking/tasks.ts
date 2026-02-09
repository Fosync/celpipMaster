export interface SpeakingTask {
  id: string;
  title: string;
  description: string;
  prompt: string;
  prepTime: number;  // seconds
  speakTime: number; // seconds
  tips: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  taskNumber: number;
  icon: string;
}

export const speakingTasks: SpeakingTask[] = [
  {
    id: 'speaking-giving-advice',
    title: 'Giving Advice',
    description: 'Give advice to a friend or colleague about a personal or professional situation.',
    prompt: 'A friend of yours is considering moving to a new city for a job opportunity. The city is far from family and friends, but the job pays much better. Give your friend advice about what they should do. Explain why you think your advice is good.',
    prepTime: 30,
    speakTime: 90,
    difficulty: 'easy',
    taskNumber: 1,
    icon: '💡',
    tips: [
      'Start by acknowledging both sides',
      'Give clear advice with reasons',
      "Use phrases like 'I would suggest...' or 'If I were you...'",
      'Include a personal example if possible',
    ],
  },
  {
    id: 'speaking-personal-experience',
    title: 'Talking About a Personal Experience',
    description: 'Describe a personal experience or event that was meaningful to you.',
    prompt: 'Describe a memorable trip or vacation you have taken. Where did you go? What did you do? Why was it memorable? How did it make you feel?',
    prepTime: 30,
    speakTime: 60,
    difficulty: 'easy',
    taskNumber: 2,
    icon: '✈️',
    tips: [
      'Use past tense consistently',
      'Describe sights, sounds, and feelings',
      'Organize chronologically',
      'End with why it was special',
    ],
  },
  {
    id: 'speaking-describing-scene',
    title: 'Describing a Scene',
    description: 'Describe a scene or picture in detail as if the listener cannot see it.',
    prompt: 'Imagine you are looking at a picture of a busy restaurant during dinner time. There are families eating, waiters serving food, and a chef cooking in an open kitchen. Describe everything you see in the scene as if you are telling someone who cannot see it.',
    prepTime: 30,
    speakTime: 60,
    difficulty: 'medium',
    taskNumber: 3,
    icon: '🖼️',
    tips: [
      'Start with the general scene, then details',
      'Use spatial language (on the left, in the background)',
      'Describe actions and emotions of people',
      'Use present continuous tense',
    ],
  },
  {
    id: 'speaking-making-predictions',
    title: 'Making Predictions',
    description: 'Predict future outcomes or changes based on a given scenario.',
    prompt: 'A new large shopping mall is going to be built in your neighbourhood. Think about how this will affect your community. What changes do you predict? Will the changes be positive, negative, or both? Explain your predictions.',
    prepTime: 30,
    speakTime: 60,
    difficulty: 'medium',
    taskNumber: 4,
    icon: '🔮',
    tips: [
      'Use future tense and prediction language',
      'Consider multiple impacts',
      'Give reasons for each prediction',
      "Use 'I think...', 'It's likely that...'",
    ],
  },
  {
    id: 'speaking-comparing-persuading',
    title: 'Comparing and Persuading',
    description: 'Compare two options and persuade someone to agree with your preference.',
    prompt: 'Your company is deciding whether employees should work from home or return to the office full-time. You prefer working from home. Persuade your manager to allow remote work. Compare the benefits of working from home to working in the office.',
    prepTime: 30,
    speakTime: 90,
    difficulty: 'hard',
    taskNumber: 5,
    icon: '⚖️',
    tips: [
      'Acknowledge the other side first',
      'Give at least 3 strong arguments',
      'Use comparative language',
      'End with a strong conclusion',
    ],
  },
  {
    id: 'speaking-dealing-situation',
    title: 'Dealing with a Difficult Situation',
    description: 'Handle a challenging real-life situation by explaining a problem and proposing a solution.',
    prompt: 'You ordered new furniture online, but when it was delivered, you received the wrong items. The delivery company says they cannot pick up the wrong items for two weeks. Call the furniture store to explain the problem and get it resolved quickly.',
    prepTime: 30,
    speakTime: 60,
    difficulty: 'medium',
    taskNumber: 6,
    icon: '📞',
    tips: [
      'Be polite but firm',
      'Clearly explain the problem',
      'Suggest a reasonable solution',
      "Use phrases like 'I would appreciate if...'",
    ],
  },
  {
    id: 'speaking-expressing-opinions',
    title: 'Expressing Opinions',
    description: 'Share and defend your opinion on a social or current topic.',
    prompt: 'Some people believe that social media has a negative effect on society, while others think it brings people together and has many benefits. What is your opinion? Do you think social media is mostly helpful or harmful? Give specific examples to support your view.',
    prepTime: 30,
    speakTime: 90,
    difficulty: 'hard',
    taskNumber: 7,
    icon: '💭',
    tips: [
      'State your opinion clearly at the start',
      'Give 2-3 supporting examples',
      'Consider the counter-argument briefly',
      'Conclude by restating your position',
    ],
  },
  {
    id: 'speaking-unusual-situation',
    title: 'Describing an Unusual Situation',
    description: 'Describe an unexpected or unusual scenario and explain how you would respond.',
    prompt: 'You come home from work and notice that your apartment door is slightly open, but you are sure you locked it when you left. You hear strange noises from inside. Describe the situation and explain what you would do step by step.',
    prepTime: 30,
    speakTime: 60,
    difficulty: 'medium',
    taskNumber: 8,
    icon: '🚪',
    tips: [
      'Set the scene first',
      'Describe your feelings and reactions',
      'Explain your actions in order',
      'Use conditional language for possibilities',
    ],
  },
];
