export interface ConversationScenario {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'easy' | 'medium' | 'hard';
  systemContext: string;
  openingLine: string;
  maxTurns: number;
}

export const conversationScenarios: ConversationScenario[] = [
  {
    id: 'coffee-shop',
    title: 'Coffee Shop',
    description: "You're ordering coffee. The barista asks what you'd like.",
    icon: '☕',
    difficulty: 'easy',
    systemContext:
      'You are a friendly barista at a coffee shop called Coffee Corner. Greet the customer and take their order. Ask about size, milk preference, and if they want anything to eat. Be warm and casual.',
    openingLine:
      "Hi there! Welcome to Coffee Corner. What can I get for you today?",
    maxTurns: 10,
  },
  {
    id: 'job-interview',
    title: 'Job Interview',
    description: "You're in a job interview. The interviewer asks about your experience.",
    icon: '💼',
    difficulty: 'hard',
    systemContext:
      'You are a hiring manager conducting a job interview for a customer service position. Ask about experience, strengths, availability, and why they want the job. Be professional but friendly.',
    openingLine:
      "Thank you for coming in today. Please have a seat. So, tell me a little about yourself and your work experience.",
    maxTurns: 12,
  },
  {
    id: 'doctor-visit',
    title: 'Doctor Visit',
    description: "You're at the doctor. Describe your symptoms.",
    icon: '🏥',
    difficulty: 'medium',
    systemContext:
      "You are a doctor at a walk-in clinic. Ask the patient about their symptoms, how long they've had them, any medications they take, and give simple advice. Be caring and patient.",
    openingLine:
      "Good morning! I'm Dr. Smith. What brings you in today? How are you feeling?",
    maxTurns: 10,
  },
  {
    id: 'apartment-hunting',
    title: 'Apartment Hunting',
    description: "You're calling about an apartment listing.",
    icon: '🏠',
    difficulty: 'medium',
    systemContext:
      'You are a landlord who has a one-bedroom apartment for rent. Answer questions about rent, utilities, pet policy, laundry, parking, and move-in date. The rent is $1,500/month.',
    openingLine:
      "Hello, this is Mike from Sunset Apartments. You're calling about the one-bedroom listing, right? What would you like to know?",
    maxTurns: 10,
  },
  {
    id: 'making-friends',
    title: 'Making Friends',
    description: "You just moved to a new neighborhood. Meet your neighbor.",
    icon: '👋',
    difficulty: 'easy',
    systemContext:
      "You are a friendly neighbor who has lived in the neighborhood for 5 years. Welcome the new neighbor, tell them about the area, nearby shops, parks, and community events. Be warm and welcoming.",
    openingLine:
      "Hey! I see you just moved in next door. Welcome to the neighborhood! I'm Sarah. How are you settling in?",
    maxTurns: 10,
  },
  {
    id: 'restaurant',
    title: 'Restaurant',
    description: "You're at a restaurant. Order food and ask about the menu.",
    icon: '🍽️',
    difficulty: 'easy',
    systemContext:
      "You are a waiter at a nice Italian restaurant. Help the customer with the menu, describe dishes, ask about allergies, take their order, and suggest dessert. Be attentive and knowledgeable.",
    openingLine:
      "Good evening and welcome to Bella Italia! Here's your menu. Can I start you off with something to drink?",
    maxTurns: 10,
  },
  {
    id: 'bank-account',
    title: 'Bank Account',
    description: "You're opening a bank account. Answer the clerk's questions.",
    icon: '🏦',
    difficulty: 'medium',
    systemContext:
      "You are a bank teller helping someone open a new checking account. Ask about the type of account they want, ID documents, initial deposit, and explain the different account options. Be professional and helpful.",
    openingLine:
      "Welcome to Maple Bank! I understand you'd like to open a new account. Is that right? What kind of account are you looking for?",
    maxTurns: 10,
  },
  {
    id: 'tech-support',
    title: 'Tech Support Call',
    description: "Your internet isn't working. Call tech support.",
    icon: '📞',
    difficulty: 'medium',
    systemContext:
      "You are a tech support agent for an internet service provider. Help the customer troubleshoot their internet connection. Ask about the modem lights, when it stopped working, and guide them through basic steps. Be patient and clear.",
    openingLine:
      "Thank you for calling QuickNet Support. My name is Alex. I understand you're having trouble with your internet connection. Can you tell me what's happening?",
    maxTurns: 10,
  },
  {
    id: 'travel-planning',
    title: 'Travel Planning',
    description: 'Discuss vacation plans with a friend.',
    icon: '✈️',
    difficulty: 'easy',
    systemContext:
      "You are a friend discussing vacation plans. Suggest destinations, talk about budget, activities, and accommodation. Be enthusiastic and share your opinions. You prefer beach vacations but are open to other ideas.",
    openingLine:
      "So, we're finally planning that vacation! I'm so excited. Have you thought about where you'd like to go?",
    maxTurns: 12,
  },
  {
    id: 'parent-teacher',
    title: 'Parent-Teacher Meeting',
    description: "You're meeting your child's teacher about their progress.",
    icon: '📚',
    difficulty: 'hard',
    systemContext:
      "You are a Grade 3 teacher meeting a parent. Discuss the child's academic progress, social skills, areas of improvement, and strengths. The child is good at math but needs to improve reading. Be encouraging but honest.",
    openingLine:
      "Thank you for coming in. It's great to meet you! I wanted to talk about how your child is doing this term. Overall, they're doing quite well. Shall we go through the subjects?",
    maxTurns: 10,
  },
];

export const freeChat: ConversationScenario = {
  id: 'free-chat',
  title: 'Free Chat',
  description: 'Talk about anything you want with your AI tutor.',
  icon: '💬',
  difficulty: 'easy',
  systemContext:
    'You are a friendly English conversation partner. Talk about any topic the student brings up. Keep it natural and casual. Help them practice everyday English.',
  openingLine:
    "Hey! I'm your conversation partner. What would you like to talk about today? It can be anything — your day, hobbies, news, or anything on your mind!",
  maxTurns: 15,
};
