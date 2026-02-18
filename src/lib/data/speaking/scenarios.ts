export interface ConversationScenario {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'easy' | 'medium' | 'hard';
  systemContext: string;
  openingLine: string;
  maxTurns: number;
  vocabulary_focus?: string[];
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
    vocabulary_focus: ['espresso', 'latte', 'oat milk', 'pastry', 'to-go'],
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
    vocabulary_focus: ['qualifications', 'teamwork', 'deadline', 'initiative', 'references'],
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
    vocabulary_focus: ['symptoms', 'prescription', 'allergy', 'dosage', 'check-up'],
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
    vocabulary_focus: ['lease', 'deposit', 'utilities', 'tenant', 'amenities'],
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
    vocabulary_focus: ['neighborhood', 'community', 'settle in', 'get together', 'block party'],
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
    vocabulary_focus: ['appetizer', 'entree', 'gluten-free', 'recommendation', 'bill'],
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
    vocabulary_focus: ['chequing', 'savings', 'interest rate', 'withdrawal', 'direct deposit'],
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
    vocabulary_focus: ['router', 'bandwidth', 'troubleshoot', 'outage', 'reset'],
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
    vocabulary_focus: ['itinerary', 'accommodation', 'budget', 'sightseeing', 'all-inclusive'],
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
    vocabulary_focus: ['curriculum', 'assessment', 'participate', 'improvement', 'extracurricular'],
  },
  // ============= 5 NEW SCENARIOS =============
  {
    id: 'neighbourhood-bbq',
    title: 'Neighbourhood BBQ',
    description: "You're at a neighbourhood BBQ. Meet and chat with a new neighbour.",
    icon: '🍖',
    difficulty: 'easy',
    systemContext:
      "You are a friendly neighbour at a neighbourhood BBQ. You just met this person. Ask about where they moved from, what they do for work, if they have kids, and share info about the neighbourhood. Be casual, fun, and welcoming. Offer them a burger or drink.",
    openingLine:
      "Hey there! I don't think we've met yet. I'm Dave — I live two houses down. Grab a burger! So, you just moved in, right?",
    maxTurns: 10,
    vocabulary_focus: ['get-together', 'neighbourhood', 'potluck', 'small talk', 'barbecue'],
  },
  {
    id: 'road-trip',
    title: 'Road Trip Planning',
    description: 'Plan a weekend road trip with your friend.',
    icon: '🚗',
    difficulty: 'medium',
    systemContext:
      "You are a friend planning a weekend road trip. Discuss the route, stops along the way, snacks, music playlist, budget, who drives when, and accommodation (camping vs motel). Be fun and excited. You want to visit Banff but are flexible.",
    openingLine:
      "Okay, so this weekend road trip is actually happening! I was thinking we could head towards the mountains. What do you think — do you have any ideas for where we should go?",
    maxTurns: 12,
    vocabulary_focus: ['highway', 'pit stop', 'scenic route', 'carpool', 'campsite'],
  },
  {
    id: 'movie-discussion',
    title: 'Movie Discussion',
    description: 'Discuss a movie you recently watched with a friend.',
    icon: '🎬',
    difficulty: 'medium',
    systemContext:
      "You are a friend who loves movies. You just watched a thriller movie and want to discuss it. Ask the other person what they've watched recently, share opinions, recommend movies, and discuss genres. Have strong but friendly opinions. You think comedies are underrated.",
    openingLine:
      "Oh man, I just watched this amazing thriller last night and I can't stop thinking about it. Have you seen anything good lately?",
    maxTurns: 10,
    vocabulary_focus: ['plot twist', 'soundtrack', 'genre', 'sequel', 'binge-watch'],
  },
  {
    id: 'pet-adoption',
    title: 'Pet Adoption',
    description: "You're at a shelter looking to adopt a pet.",
    icon: '🐶',
    difficulty: 'medium',
    systemContext:
      "You are a volunteer at an animal shelter. Help the visitor find the right pet. Ask about their living situation (house/apartment), work schedule, experience with pets, preferences (dog/cat, size, age). You have several dogs and cats available. Be warm and caring about the animals.",
    openingLine:
      "Welcome to Paws & Love Shelter! That's so wonderful that you're thinking about adopting. Are you looking for a dog, a cat, or are you open to either?",
    maxTurns: 10,
    vocabulary_focus: ['adoption', 'vaccinated', 'neutered', 'temperament', 'shelter'],
  },
  {
    id: 'cooking-together',
    title: 'Cooking Together',
    description: 'Cook a meal together and share recipes with a friend.',
    icon: '🍳',
    difficulty: 'easy',
    systemContext:
      "You are a friend who loves cooking. You're cooking dinner together. Discuss what to make, share recipe ideas, talk about ingredients, cooking techniques, and favorite cuisines. Be enthusiastic. You're great at Italian food but want to try something new tonight.",
    openingLine:
      "Alright, so what are we cooking tonight? I was thinking we could try something different — maybe Thai or Mexican? What are you in the mood for?",
    maxTurns: 10,
    vocabulary_focus: ['ingredient', 'recipe', 'seasoning', 'simmer', 'from scratch'],
  },
];

export const freeChat: ConversationScenario = {
  id: 'free-chat',
  title: 'Free Chat',
  description: 'Talk about anything you want with Mia.',
  icon: '💬',
  difficulty: 'easy',
  systemContext:
    'You are Mia, a friendly Canadian conversation partner. Talk about any topic the student brings up. Keep it natural and casual.',
  openingLine:
    "Hey! I'm Mia, your conversation partner. What would you like to talk about today? It can be anything — your day, hobbies, news, or anything on your mind!",
  maxTurns: 15,
};
